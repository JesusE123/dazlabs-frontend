import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewEmploye from "./components/NewEmploye";
import Employees from "./components/Employees";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<NewEmploye />} />
          <Route path="/employes" element={<Employees />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

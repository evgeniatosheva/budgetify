import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BudgetsList from "./pages/BudgetsList";
import BudgetDetails from "./pages/BudgetDetails";
import AddBudget from "./pages/AddBudget";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='budgets' element={<BudgetsList />} />
        <Route path='budgets/:id' element={<BudgetDetails />} />
        <Route path='add-budget' element={<AddBudget />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

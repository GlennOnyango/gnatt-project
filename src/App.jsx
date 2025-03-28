import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tickets/:id" element={<Ticket />} />
    </Routes>
  );
}

export default App;

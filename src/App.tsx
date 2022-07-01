import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ModelViewPage from "./pages/ModelViewPage";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task-list" element={<TaskListPage />} />
        <Route path="/model-view" element={<ModelViewPage />} />
      </Routes>
    </>
  );
}

export default App;

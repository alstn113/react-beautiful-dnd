import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ModelViewPage from "./pages/ModelViewPage/ModelViewPage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";

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

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ModelView from "./pages/ModelView";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/model-view" element={<ModelView />} />
      </Routes>
    </>
  );
}

export default App;

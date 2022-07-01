import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ModelView from "./pages/ModelView/ModelView";
import TaskList from "./pages/TaskList/TaskList";
import WAF from "./pages/WAF/WAF";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/waf" element={<WAF />} />
        <Route path="/model-view" element={<ModelView />} />
      </Routes>
    </>
  );
}

export default App;

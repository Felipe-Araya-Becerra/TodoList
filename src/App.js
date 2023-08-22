import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTaskComponent from "./components/AddTaskComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTasksComponent from "./components/ListTasksComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListTasksComponent />}></Route>
            <Route path="/tasks" element={<ListTasksComponent />}></Route>
            <Route path="/addTask" element={<AddTaskComponent />}></Route>
            <Route path="/updateTask/:id" element={<AddTaskComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;

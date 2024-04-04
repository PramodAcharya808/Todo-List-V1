import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import AddTask from "./component/AddTask";
import "./App.css";
function App() {
  return (
    <section className="outer_wrapper">
      <div className="container mt-5">
        <AppName />
        <AddTodo />
        <AddTask />
        <AddTask />
        <AddTask />
      </div>
    </section>
  );
}

export default App;

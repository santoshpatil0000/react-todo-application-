import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";

function App() {
  const state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "breakfast" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  const handleChange = (e) => {
    console.log("handle change");
  };
  const handleSubmit = (e) => {
    console.log("handle submit");
  };
  const clearList = () => {
    console.log("clear list");
  };
  const handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  const handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  return (
    <div>
      {console.log(state)}
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={state.item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={state.editItem}
            />
            <TodoList items={state.items} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

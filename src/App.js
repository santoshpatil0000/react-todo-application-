import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
    <div className="container">
      <div className='row'>
        <div className='col-4 bg-warning'>Hello</div>
        <div className='col-4 bg-danger'>Hello</div>
        <div className='col-4 bg-primary'>Hello</div>
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TodoList from './ReduxTodo/todoListDesign/TodoList';
import './ReduxTodo/todoListDesign/todoStyle.css'
import { Provider } from 'react-redux';
import store from './ReduxTodo/reduxfile/store';
function App() {
  return (
    <>
    <Provider store={store}>
    <TodoList></TodoList>
    </Provider>
    
    </>
  );
}

export default App;

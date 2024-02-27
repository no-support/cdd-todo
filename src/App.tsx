import './App.css';
import { TodoProvider } from 'contexts/ToDoList';
import { Header } from 'components/organisms/Header';
import { ToDo } from 'pages/ToDo';

function App() {
  
  return (<>
    <Header />
    <TodoProvider>
      <ToDo />
    </TodoProvider>
  </>
  );
}

export default App;

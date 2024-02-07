import './App.css';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from 'components/organisms/Header';
import { ToDoListPage } from 'pages/ToDoListPage';
import { ToDoInputPage } from 'pages/ToDoInputPage';
import { NotFound } from 'pages/NotFound';

function App() {
  
  return (
    <ToDoListContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoListPage />} />
          <Route path="/add" element={<ToDoInputPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToDoListContextProvider>
  );
}

export default App;

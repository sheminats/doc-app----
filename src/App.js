import { Route, Routes } from 'react-router-dom';
import './App.css';
import Docs from './components/Docs';
import { database } from './firebaseConfig';
import EditDocs from './components/EditDocs';


function App() {
  return (
    <Routes>
      <Route path="/"element={<Docs database={database}/>}></Route>
      <Route path="/editDocs/:id"element={<EditDocs database={database}/>}></Route>

   </Routes>
  );
}

export default App;

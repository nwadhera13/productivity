import './App.css';
import Header from './components/Header'
import Noteslistpage from "./pages/noteslistpage";
import NotePage from './pages/NotePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Noteslistpage/>,
  },
  {
    path: "/note/:id",
    element:<NotePage/>,
  }
]);


function App() {
  return (
      <div className="container dark">
        <div className='app'>
        <Header/>
        <RouterProvider router={router}/>
        </div>
      </div>
  );
}

export default App;

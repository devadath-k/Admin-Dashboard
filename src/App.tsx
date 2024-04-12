import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {

  return (
    <div className="container mx-auto min-h-[100vh] bg-slate-100">
      <div className='flex'>
        <SideBar/>
        <div className='w-[100%] p-[20px]'>
          <NavBar/>
          <Main/>
        </div>
      </div>
      
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <main className='pt-28   bg-blue-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import TopPage from './Components/TopPage';
import MidPage from './Components/MidPage';


function App() {
  return (
    <div className='main_page'>
      <div>
        <TopPage />
      </div>
      <div>
        <MidPage />
      </div>
    </div>
  );
}

export default App;

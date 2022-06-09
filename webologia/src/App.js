import Header from './Components/Header'
import Software from './Components/Software'
import Search from './Components/Search';
import Loding from './Components/Loding';
import Mobile from './Components/Mobile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loding/>
     <Header/>
     <Software/>
      <Mobile/>
     <Search/>
   
    </div>
  );
}

export default App;

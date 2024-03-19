import './App.css';
import './main.css';
import Registation from './Components/Registration.tsx';
import NavBar from './Components/NavBar.tsx';
import Background from './Components/Background.tsx';

function App() {
  return (
    <div className='App'>
      <Background></Background>
      <NavBar></NavBar>
      <Registation></Registation>
    </div>
    
  );
}

export default App;

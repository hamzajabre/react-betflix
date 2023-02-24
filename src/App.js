
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/navbar';

import Back from './components/background';
import UncontrolledExample from './components/caroussel';

import Api from './components/api';
import ThemeProvider from './components/context';











function App() {
  return (
 

    <div className="App">
      <header className="App-header">
  
      </header>
    
      <ThemeProvider>
        <ColorSchemesExample/>
        <Back/>
        <UncontrolledExample/>
        <Api/>
     </ThemeProvider>
     
     
    </div>
  );
}

export default App;

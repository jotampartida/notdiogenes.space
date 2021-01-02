import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Componentes
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          notDiogenes <code>.</code> space
        </p>
      </header>
      <section className="componentes">

      <Collection />


      </section>
    </div>
  );
}

export default App;

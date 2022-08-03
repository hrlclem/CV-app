import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import Editing from './components/Editing';



function App() {
  return (
    <div className="App">
      <Header />

      <Preview />

      <Editing />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import Editing from './components/Editing';



function App(props) {
  return (
    <div className="App">
      <Header />
      <Editing />
      <Preview intro= {props.intro}/>

    </div>
  );
}

export default App;

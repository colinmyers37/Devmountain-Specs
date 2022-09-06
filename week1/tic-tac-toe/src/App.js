import './App.css';
import Square from './Square';

function App() {
  let newProp = 'Passing a prop'
  return (
    <div className="App">
      <Square propVar={newProp}/>
    </div>
  );
}

export default App;

import Crunch from './components/Crunch'
import Pushup from './components/Push up'
import Lift from './components/Weights'

function App() {
  return (
    <div>
    <h1>Fitness Tracker</h1>
     <Crunch/>
     <Pushup/>
     <Lift/>
     <p>*one rep adds 5</p>
    </div>
  );
}

export default App;

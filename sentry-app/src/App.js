import './App.css';
import { LoggingService } from './LoggingService';

let x = () => {
  return null
}

function App() {

  function handleWorks () {
    console.log('Works')
  }

  function handleFails () {
    LoggingService.logInfo(LoggingService.category.uiPress, 'handleFails()')
    const randomNum = Math.random()
    if(randomNum < 0.5) {
    } else {
      LoggingService.logException(new Error('Pleb code detected!'), {randomNum})
    }
  }

  x = undefined
  return (
    <div className="App">
      <h1>Sentry App</h1>
      <button onClick={handleWorks}>Works fine</button>
      <button onClick={handleFails}>Causes problem 50%</button>
      <button onClick={x}>Causes problem 100%</button>
    </div>
  );
}

export default App;

import './App.css';
import Study from './components/studys/Study';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <div>
        <h3 className='website-name'>
           <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          Daily Routine Activities</h3>
      </div>
      <Study></Study>
    </div>
  );
}

export default App;

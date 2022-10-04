import './App.css';
import Study from './components/studys/Study';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Question from './components/question/Question';

function App() {
  return (
    <div>
      <div>
        <h3 className='website-name'>
           <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          Daily Routine Activities</h3>
      </div>
      <Study></Study>
      <Question></Question>
    </div>
  );
}

export default App;

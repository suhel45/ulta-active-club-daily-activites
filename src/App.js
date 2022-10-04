import './App.css';
import Study from './components/studys/Study';
import Question from './components/question/Question';

function App() {
  return (
    <div>
      <div>
        <h3 className='website-name'>
        <i class="fas fa-dumbbell"></i>
          Daily Routine Activities</h3>
      </div>
      <Study></Study>
      <Question></Question>
    </div>
  );
}

export default App;

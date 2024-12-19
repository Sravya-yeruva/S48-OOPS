import logo from './logo.svg';
import './App.css';
import Sravya from './class/Sravya';
import Indu from './class/Indu';

function App() {
  let about=new Sravya();
  about.NoOfEyes=2;
  about.NoOfHands=2;
  about.NoOfLegs=2;

  about.FavouriteFood();
  about.Hobbies();
  about.WorkingTime();
  about.SleepingTime();

  console.log("...2nd....")

  let behaviour = new Indu();
  behaviour.NoOfEyes=2;
  behaviour.NoOfHands=2;
  behaviour.NoOfLegs=2;

  behaviour.FavouriteFood();
  behaviour.Hobbies();
  behaviour.WorkingTime();
  behaviour.SleepingTime();

  behaviour.Calculate();
  behaviour.Calculate(1);
  behaviour.Calculate(1,2);
  behaviour.Calculate(1,2,3);

  return (
    <div className="App">
      <h1>OOPS</h1>
      
    </div>
  );
}

export default App;

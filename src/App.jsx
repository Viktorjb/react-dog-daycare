import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import DogFocus from './components/DogFocus'
import DogList from './components/DogList'


const apiUrl = 'https://api.jsonbin.io/v3/b/651f12aa12a5d3765987bea2'

let list = [];




// Side menu icon, currently unused
const MenuIcon = () => {
  return (
    <div className="darkaccent">
      <div className="darkline">
      </div>
      <div className="darkline">
      </div>
      <div className="darkline">
      </div>
    </div>
  )
}

//Title bar on top of the page
const Title = () => {

  return (
    <div>
      <div className="title">
        <img src='https://raw.githubusercontent.com/Viktorjb/dogDaycare/main/src/assets/doggydaycare.png' alt='Welcome to Doggy Daycare' id="titleimg"/>
      </div>
      <div className="spacer">
        <h2></h2>
      </div>
    </div>
  )

  return (
    <div>
      <div className="title">
        <MenuIcon/>
        <div className="titleright">
          <h2>Welcome to Doggy Daycare</h2>
        </div>
      </div>
      <div className="spacer">
        <h2></h2>
      </div>
    </div>
      
  )
}

//Test object
const Thing = () => {

  return (
    <div className="basic">
      <h3>Dogname, dogbreed. Ägare: Bob</h3>
      <h3 className="isin">Är hos oss</h3>
    </div>
  )
}




function App() {


  //Main API data, but currently using a one-time fetch in DogList instead
  const [data, setData] = useState(null);

  //For changing screens
  const WELCOME = 'welcome', DOGLIST = 'doglist', DOGFOCUS = 'dogfocus';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);


  //Dog test
  const [currentDog, setDog] = useState(0);

  function setDogAndChange(dog) {
    setDog(dog);
    setCurrentScreen(DOGFOCUS);
  }

  let content = null;

  switch(currentScreen) {
    case WELCOME :
      content = <Welcome nextScreen={() => setCurrentScreen(DOGLIST)}/>;
      break;
    case DOGLIST :
      content = <DogList nextScreen={() => setCurrentScreen(DOGFOCUS)} setDog={(props) => setDogAndChange(props)}/>;
      break;
    case DOGFOCUS :
      content = <DogFocus dog={currentDog} nextScreen={() => setCurrentScreen(DOGLIST)}/>;
      break;
    default:
      content = <Welcome/>;
  }

  //Currently using a one-time fetch in DogList instead
  useEffect(() => {
    //const dogData = fetchData();
    //setData(dogData);
    
  }, [])


  return (
    <div>
      <div onClick={() => setCurrentScreen(WELCOME)}>
        <Title/>
      </div>
      <div className="shape-column">
        {content}
       
      </div>
    </div>
    
  )
}

export default App

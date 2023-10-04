const WelcomePage = () => {
    return (
      <div className="basic">
        <h3>Välkommen till Doggy Daycare</h3>
        <p>Hej och välkommen till Sveriges största hunddagis, Doggy Daycare. På den här sidan kan du hitta nyheter och information om vilka hundar vi just nu har inne. Om du är intresserad av att registrera din hund hos oss kan du nå oss via telefon: 0707070707.</p>
      </div>
    )
  }
  
  const LinkToList = (props) => {
    return (
      <div className="basic">
        <h3>Hundregister</h3>
        <p>Om du vill se vilka hundar vi har inne just nu kan du klicka här.</p>
        <button onClick={props.nextScreen}>Till registret</button>
      </div>
    )
  }


const Welcome = (props) => {
    return (
        <div>
            <WelcomePage/>
            <LinkToList nextScreen={props.nextScreen}/>
        </div>
    )
  }


  export default Welcome;
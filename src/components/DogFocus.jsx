//Information about single dog
const DogFocus = (props) => {
    let gender = '?'

    if (props.dog.sex === 'female'){
        gender = '♀︎'
    } else if (props.dog.sex === 'male'){
        gender = '♂︎'
    }

    return (
        <div>
            <div className="basic">
                <button onClick={props.nextScreen}>
                    Tillbaka till registret
                </button>
            </div>
            <div className="basic">
                <div className="imageframe">
                <img src={props.dog.img} alt="Image of dog" id="dogimg"/> 
                </div>
                <h3>{props.dog.name} {gender}</h3>
                <p>{props.dog.age} år gammal, av rasen {props.dog.breed}.</p>
                <p>Chip-nummer: {props.dog.chipNumber}</p>
                <h3>Ägare: {props.dog.owner.name} {props.dog.owner.lastName}</h3>
                <p>Telefon: {props.dog.owner.phoneNumber}</p>
            </div>
        </div>
    )
  }

  export default DogFocus;
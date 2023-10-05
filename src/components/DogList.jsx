const apiUrl = 'https://api.jsonbin.io/v3/b/651f12aa12a5d3765987bea2'


async function fetchData (props){
    const response = await fetch(apiUrl);
      console.log(response);
  
      const dogData = await response.json();
      console.log('actual data:', dogData);
  
      const list = dogData.record;
  
      createDogs(list, props);
  
      return Array.from(dogData.record);
  }
  
  const createDogs = (dogs, props) => {
  
    const dogContainer = document.querySelector('#dogs');
  
    dogs.forEach(dog => {
      const dogElement = createDogElement(dog, props);
      dogContainer.appendChild(dogElement);
    })
  }
  
  
  const createDogElement = (dog, props) => {
    const dogElement = document.createElement('div');
    dogElement.className = 'basic';
  
    const dogName = document.createElement('h3');
    dogName.innerHTML = dog.name +', ' + dog.breed + '. Ägare: ' + dog.owner.name;
  
    const status = document.createElement('h2');
    if(dog.present){
      status.className = 'isin';
      status.innerHTML = 'Är hos oss';
    } else {
      status.className = 'isout';
      status.innerHTML = 'Är ej hos oss'
    }

    const infoButton = document.createElement('button');
    infoButton.innerHTML = 'Info';
    infoButton.addEventListener('click', () => props.setDog(dog));
  
    dogElement.appendChild(dogName);
    dogElement.appendChild(status);
    dogElement.appendChild(infoButton);
  
    return dogElement;
  }



const DogList = (props) => {

    fetchData(props);
    return (
        <div id="dogs">
            {/* !-- Gets filled out by fetch */}
        </div>


    )
}

export default DogList;
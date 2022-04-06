import Formulaire from './components/Formulaire';
import {useState} from "react";
import { useFetch } from './utils/hooks';

function App() {

  const [locationForm, setLocationForm] = useState('')
  const {data, isLoading, error} = useFetch('http://api.weatherstack.com/current?access_key=b614a0d6d9e3516e6874ed267ce938e6&query=' + locationForm)
    const location = data?.request;
  const current = data?.current;
    if (error) {
        return <span>Oups ça ne s'ait pas passé comme prévu</span>
    }

  return (
      <>
          <Formulaire locationForm={locationForm} setLocationForm={setLocationForm}/>
          { isLoading ? (
              <p>Veuillez patienter...</p>
            ) : location || current ? (
                <p>Il fait {current.temperature} degré à {location.query}</p>
              ) : ( <p>Entrez une ville</p> )
          }
      </>
  );
}

export default App;

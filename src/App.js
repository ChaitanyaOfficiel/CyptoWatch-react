import{useState, useEffect} from 'react';
import Cypto from './Cypto.js';
import './index.css';

const App = () => {
const [info, setInfo] = useState([]);
useEffect(() => {
    const getInfo = async() => {
        const infoFromServer = await fetchData()
        setInfo(infoFromServer);
        // console.log(infoFromServer);
    }
    getInfo()
},[])

const fetchData= async() => {
  const res = await  fetch('https://api.coinlore.net/api/tickers/');
  const data = await res.json()
  return data.data;
 
}
    return (
       
       <div className="App">
           <div className="heading">
           <h1>CyptoCurrency List</h1>
           </div>
            <div className="api">
          <ul>
            <Cypto info={info} ></Cypto>
            </ul>
           </div>
           </div>
     
      
    );
}







export default App

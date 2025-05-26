import React, {useState} from 'react'
import Boton from '../components/Boton'


const Home = () => {
    const [count, setCount] = useState(0);
    const suma = () => {
        setCount(count + 1);
        console.log(count);
  };
    const resta = ()=> {
        setCount(count -1);
  };
  return (
    <>
      <h1>Mi app en React</h1>
      <h3>{count}</h3>
      <Boton onclick={suma} texto="Suma"/>
      <Boton onclick={resta} texto="Resta"/>
      <Boton texto="Mensaje"/>
      <Boton texto="Guardar"/>
    </>
  )
}

export default Home

import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('H1 was clicked');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /*  //Igual ao componentDidUpdate - executa sempre ao atualizar
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //Igual ao componentDidMount - executa 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, []); */

  //Com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;

import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O corpo do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;

  return (
    <div>
      <h1>
        {title} {body} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
    </div>
  );
}

export default App;

import './App.css';
import { Div } from './components/Div';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      Olá
      <Div />
    </AppContext>
  );
}

export default App;

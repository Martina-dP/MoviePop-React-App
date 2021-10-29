import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fondo from './Componentes/Fondo/Fondo';
import Details from './Componentes/Details/Details';

function App() {
  return (
    < BrowserRouter>
    <div>
      <Switch>
        <Route exact path = "/" component = {Fondo} />
        <Route exact path = "/:id" component = {Details} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from 'app/common/navBar/NavBar';
import ViewPokemon from 'app/pages/pokemon/ViewPokemon'
import AddPokemon from 'app/pages/pokemon/AddPokemon'
import ViewTipo from 'app/pages/tipo/ViewTipo'
import AddTipo from 'app/pages/tipo/AddTipo'
import EditTipo from 'app/pages/tipo/EditTipo';
import ViewAtaque from 'app/pages/ataque/ViewAtaque';
import AddAtaque from 'app/pages/ataque/AddAtaque';
import EditAtaque from 'app/pages/ataque/EditAtaque';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="app-container">
          <Switch>
            <Route path="/PokemonList" exact><ViewPokemon /></Route>
            <Route path="/addPokemon" exact><AddPokemon/></Route>
            <Route path="/tipoList" exact><ViewTipo /></Route>
            <Route path="/addTipo" exact><AddTipo /></Route>
            <Route path="/editTipo/:id" exact><EditTipo/></Route>
            <Route path="/ataqueList" exact><ViewAtaque /></Route>
            <Route path="/addAtaque" exact><AddAtaque /></Route>
            <Route path="/editAtaque/:id" exact><EditAtaque/></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

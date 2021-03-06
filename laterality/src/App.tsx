import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { initdb } from './dataservice';
import MainMenu from './pages/MainMenu';
import Map from './pages/Map';
import MiniGame from './pages/MiniGame';
import CreateUser from './pages/CreateUser';
import Levels from './pages/Levels';
const App: React.FC = () => {
  initdb().catch(() => window.alert("ERROR INITIALIZING"));

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/main-menu/:id">
          <MainMenu />
        </Route>
        <Route exact path="/levels/:id">
          <Levels />
        </Route>
        <Route exact path="/map/:id">
          <Map />
        </Route>
        <Route exact path="/minigame/:id/:wordGroup">
          <MiniGame />
        </Route>
        <Route exact path="/create-user">
          <CreateUser />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;

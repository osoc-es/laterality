import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";

import React, { useState } from "react";
import { deleteUserById, getUserById, queryAllUsers, } from "../dataservice";
import { UserList } from "../components/UserList";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const [queryResults, setQueryResults] = useState<any>(null);
  const history = useHistory();

  useIonViewWillEnter(() => {
    queryAllUsers().then(setQueryResults);
  });

  /**
   *
   * @param userId
   */
  const getById = async (userId: any) => {
    const c = await getUserById(userId);
  };

  /**
   *
   * @param userId
   */
  const deleteUser = async (userId: any) => {
    await deleteUserById(userId);
    const data = await queryAllUsers();
    setQueryResults(data); //update user list
  };

  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>LATUS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <UserList users={queryResults} userClicked={getById} onDelete={deleteUser}/>
      </IonContent>
      
      <IonFooter>
      <IonToolbar color="transparent" className="ion-no-border">
        <div style={{textAlign:"center"}}>
          <IonButton routerLink={"/create-user"}>AÑADIR USUARIO</IonButton>
        </div>
      </IonToolbar>
    </IonFooter>
    
    </IonPage>
  );
};

export default Home;

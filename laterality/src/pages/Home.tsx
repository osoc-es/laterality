import {
  IonButton,
  IonButtons,
  IonContent,
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
          <IonButtons slot="end">
            <IonButton routerLink={"/create-user"}>AÑADIR USUARIO</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <UserList users={queryResults} userClicked={getById} onDelete={deleteUser}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;

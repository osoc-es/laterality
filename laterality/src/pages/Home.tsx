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
import { CurrentUser } from "../components/CurrentUser";
import { UserList } from "../components/UserList";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const [queryResults, setQueryResults] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const history = useHistory();

  useIonViewWillEnter(() => {
    queryAllUsers().then(setQueryResults);
    setCurrentUser(null);
  });

  /**
   *
   * @param userId
   */
  const getById = async (userId: any) => {
    const c = await getUserById(userId);
    setCurrentUser(c);
  };

  /**
   *
   * @param userId
   */
  const deleteUser = async (userId: any) => {
    await deleteUserById(userId);
    const data = await queryAllUsers();
    setQueryResults(data);
    setCurrentUser(null);
    window.alert("Borrado con éxito");
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
        <CurrentUser
          user={currentUser}
          onDelete={deleteUser}
          onEdit={(id: any) => history.push(`/edit-user/${id}`)}
        />
        <UserList users={queryResults} userClicked={getById} />
      </IonContent>
    </IonPage>
  );
};

export default Home;

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
import "./Background.css";

import React, { useState } from "react";
import { deleteUserById, getUserById, queryAllUsers } from "../dataservice";
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
      <IonContent fullscreen className="ion-padding">
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            color:"white",
            textShadow:
              `0 1px 0 #CCCCCC,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15)`,
          }}
        >
          LATUS
        </h1>
        <UserList
          users={queryResults}
          userClicked={getById}
          onDelete={deleteUser}
        />
      </IonContent>

      <IonFooter>
        <IonToolbar color="transparent" className="ion-no-border">
          <div style={{ textAlign: "center" }}>
            <IonButton routerLink={"/create-user"}>AÑADIR USUARIO</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

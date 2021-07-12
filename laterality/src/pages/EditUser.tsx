import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {
  createUser,
  getUserById,
  updateUserById
} from "../dataservice";

const EditUser: React.FC<any> = () => {
  const { id } = useParams<any>();
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [name, setName] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getUserById(id).then((c: any) => {
        setCurrentUser(c.values[0]);
        setName(c.values[0]?.name);
      });
    }
  }, [id]);

  /**
   *
   */
  const updateUser = async () => {
    if (id) {
      await updateUserById(id, { name });
    } else {
        console.log("calling creteUser");
      await createUser({ name });
    }
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            {id ? `EDIT:${id}` : "CREATE USER"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel>Nombre</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(e: any) => setName(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonButton style={{ margin: 8 }} onClick={updateUser}>
         { id ? "UPDATE USER" : "CREATE USER" }
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditUser;

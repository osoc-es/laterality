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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { createUser, getUserById, updateUserById } from "../dataservice";

const EditUser: React.FC<any> = () => {
  const { id } = useParams<any>();
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [name, setName] = useState<any>(null);
  const [points, setPoints] = useState<any>(null);
  const [avatarId, setAvatarId] = useState<any>(null);

  const history = useHistory();

  const updateUser = async () => {
    if (id) {
      await updateUserById(id, { name, points });
    } else {
      console.log("calling createUser");
      await createUser({ name, avatarId });
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
          <IonTitle>{id ? "EDITAR" : "CREAR USUARIO"}</IonTitle>
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
        <IonItem>
          <IonLabel>Avatar</IonLabel>
          <IonSelect
            value={avatarId}
            onIonChange={(e: any) => setAvatarId(e.target.value)}
            placeholder="Avatar"
          >
            <IonSelectOption value="1">Gato</IonSelectOption>
            <IonSelectOption value="2">Gato (Alt.)</IonSelectOption>
            <IonSelectOption value="3">Perro</IonSelectOption>
            <IonSelectOption value="4">Perro (Alt.)</IonSelectOption>
            <IonSelectOption value="5">Conejo</IonSelectOption>
            <IonSelectOption value="6">Conejo (Alt.)</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton style={{ margin: 8 }} onClick={updateUser}>
          {id ? "ACTUALIZAR USUARIO" : "CREAR USUARIO"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditUser;

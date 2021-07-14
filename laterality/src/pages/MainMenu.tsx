import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./Background.css";

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getAvatarById, getUserById } from "../dataservice";

const MainMenu: React.FC = () => {
  const { id } = useParams<any>();
  
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [name, setName] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getUserById(id).then((user: any) => {
        setName(user.values[0]?.name);
        getAvatarById(user.values[0]?.avatarId).then((av) => {
          setAvatar(av.values[0]?.image);
        })
      });
    }
  }, [id]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" id="background">
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonImg src="assets/images/about.png" />
            </IonCol>
            <IonCol></IonCol>
            <IonCol size="4">
              <IonImg src="assets/images/report.png" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div style={{ textAlign: "center" }}>
                <h2>¿Empezamos la aventura {name}?</h2>
                <IonImg src={avatar} />
                <IonButton  onClick={() => history.push(`/map/${id}`)}>Jugar</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg src="assets/images/help.png" />
            </IonCol>
            <IonCol></IonCol>
            <IonCol size="4">
              <IonImg src="assets/images/exit.png" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MainMenu;

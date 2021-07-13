import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonPage,
    IonRow,
  } from "@ionic/react";

  
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router";
  import { getUserById } from "../dataservice";
  
  const MiniGame: React.FC = () => {
    const { id } = useParams<any>();
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [name, setName] = useState<any>(null);
  
    useEffect(() => {
      if (id) {
        getUserById(id).then((c: any) => {
          setCurrentUser(c.values[0]);
          setName(c.values[0]?.name);
        });
      }
    }, [id]);
  
    return (
      <IonPage>
        <IonContent fullscreen className="ion-padding" id="background">
        
        </IonContent>
      </IonPage>
    );
  };
  
  export default MiniGame;
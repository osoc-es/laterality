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

  
  const MainMenu: React.FC = () => {
  
    return (
      <IonPage>
        <IonContent fullscreen className="ion-padding">
            <IonButton>
                JUGAR
            </IonButton>
            <IonButton>
                SABER MÁS
            </IonButton>
            <IonButton>
                GENERAR INFORME
            </IonButton>
            <IonButton>
                AYUDA
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default MainMenu;
  
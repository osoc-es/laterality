import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonPage,
    IonRow,
  } from "@ionic/react";
  import "./MainMenu.css";
  
  import React, { useState } from "react";

  
  const MainMenu: React.FC = () => {
  
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
                        <div style={{textAlign:"center"}}>
                            <div>¿Preprarado para la aventura?</div>
                            <IonImg src="assets/images/snorlax-cat.png" style={{with:40}} />
                            <IonButton>Jugar</IonButton>
                        </div>
                       
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4">
                    <IonImg src="assets/images/help.png"/>

                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol size="4">
                    <IonImg src="assets/images/exit.png"/>

                    </IonCol>
                </IonRow>
            </IonGrid>           
        </IonContent>
      </IonPage>
    );
  };
  
  export default MainMenu;
  
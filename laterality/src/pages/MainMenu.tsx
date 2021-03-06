import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./Background.css";

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getAvatarById, getUserById } from "../dataservice";

const MainMenu: React.FC = () => {
  const { id } = useParams<any>();
  
  const [name, setName] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  
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
            <IonCol size="4" >
              <a href="https://osoc-es.github.io/laterality/">
                <IonImg src="assets/images/about.png" />
              </a>
            </IonCol>
            <IonCol></IonCol>
            <IonCol size="4">
              <IonImg src="assets/images/report.png" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div style={{ textAlign: "center" }}>
                <h2>┬┐Empezamos la aventura {name}?</h2>
                <IonImg src={avatar} />
                <IonButton  onClick={() => history.push(`/map/${id}`)}>Jugar</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonImg src="assets/images/help.png" onClick={() => setShowModal(true)}/>
              <IonModal isOpen={showModal} cssClass="ion-padding">
                <div className="ion-margin" style={{backgroundColor:"#93D2DB", color:"#026A94", height:"100%"}}>
                  <h4>Latus es un juego interactivo que te permitir├í ser m├ís r├ípido que un gato.</h4>
                  <h3>┬┐Conseguir├ís completar los retos del parque de atracciones?</h3>
                  <h4>La Monta├▒a Rusa</h4>
                  <div>En este minijuego tendr├ís que adivinar la palabra que sale en el dibujo. ┬íPincha en el icono para escuchar la palabra!</div>
                  <h3>Lo que est├í por venir...</h3>
                  <ul>
                    <li>Generaci├│n de informes para el logopeda</li>
                    <li>Tienda con cosmeticos</li>
                    <li>Retos semanales</li>
                    <li>Y ┬ím├ís minijuegos!</li>
                  </ul>
                </div>
               <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
               </IonModal>
            </IonCol>
            <IonCol></IonCol>
            <IonCol size="4">
              <IonImg src="assets/images/exit.png" onClick={() => history.goBack()} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MainMenu;

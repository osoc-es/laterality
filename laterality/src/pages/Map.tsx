import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { url } from "inspector";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../dataservice";

const Map: React.FC = () => {
  const { id } = useParams<any>();
  const [name, setName] = useState<any>(null);
  const [points, setPoints] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then((c: any) => {
        setName(c.values[0]?.name);
        setPoints(c.values[0]?.points);
      });
    }
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonAvatar className="ion-float-left ion-padding">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
          </IonAvatar>
          <div className="ion-float-left ion-padding-bottom">
            <h5>{name}</h5>
          </div>
          <div className="ion-float-right ion-padding">
            <h5>{points}</h5>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <IonImg
            src="/assets/images/map.jpg"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              top: "0px",
              right: "0px",
            }}
          />
          <IonImg
            src="/assets/images/roller-coaster.png"
            onClick={() => {
              alert("Minigame");
            }}
            style={{
              width: "40%",
              height: "auto",
              position: "absolute",
              top: "45%",
              right: "0px",
            }}
          />
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={() => {
              alert("SHOP");
            }}
          >
            <IonImg
              src="/assets/images/shop.png"
              style={{ width: "100%", height: "100%" }}
            />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Map;

import {
    IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../dataservice";

const Map: React.FC = () => {
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
        
        <IonHeader>
        <IonToolbar>
            <IonAvatar className="ion-float-left ion-padding">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
            </IonAvatar>
            <div className="ion-float-left ion-padding-bottom">
                <h5>{name}</h5>
            </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
        <IonRow>
            <IonImg
            src="/assets/images/roller-coaster.png"
            onClick={() => {
                alert("Minigame");
            }}
            />
        </IonRow>
        </IonGrid>       
      </IonContent>
    </IonPage>
  );
};

export default Map;

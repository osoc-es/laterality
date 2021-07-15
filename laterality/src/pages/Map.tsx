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
import { useHistory, useParams } from "react-router";
import { getAvatarById, getUserById } from "../dataservice";

const Map: React.FC = () => {

  const { id } = useParams<any>();
  const history = useHistory();
  const [name, setName] = useState<any>(null);
  const [points, setPoints] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then((c: any) => {
        setName(c.values[0]?.name);
        setPoints(c.values[0]?.points);
        getAvatarById(c.values[0]?.avatarId).then((av)=>{
          setAvatar(av.values[0]?.image);
        })
      });
    }
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonAvatar className="ion-float-left ion-padding">
            <img src={avatar}/>
          </IonAvatar>
          <div className="ion-float-left ion-padding-bottom">
            <h5>{name}</h5>
          </div>
          <IonAvatar className="ion-float-left ion-padding">
          <img src="/assets/images/coin.png"/>
          </IonAvatar>
          <div className="ion-float-right ion-padding-bottom">
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
          <div >
          <IonImg
            src="/assets/images/roller-coaster.png"
            onClick={() => history.push(`/levels/${id}`)}
            style={{
              width: "40%",
              height: "auto",
              position: "absolute",
              top: "45%",
              right: "0px",
            }}
           />
           </div>
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

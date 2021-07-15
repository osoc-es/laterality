import { IonAvatar, IonCardContent, IonItem } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getAvatarById, getUserById } from "../dataservice";

interface ContainerProps {
  id: string;
}

const AvatarContainer: React.FC<ContainerProps> = (prop) => {

  const [name, setName] = useState<any>(null);
  const [avatarImg, setAvatarImg] = useState<any>(null);

  const history = useHistory();

  useEffect(() => {
    if (prop.id) {
      getUserById(prop.id).then((c: any) => {
        setName(c.values[0]?.name);

        getAvatarById(c.values[0]?.avatarId).then((av: any) => {
          setAvatarImg(av.values[0].image);
        });
      });
    }
  }, [prop.id]);

  return (
    <IonCardContent className="ion-padding">
      <IonItem onClick={(id: any) => history.push(`/main-menu/${prop.id}`)}>
        <IonAvatar className="ion-float-left">
          <img src={avatarImg} />
        </IonAvatar>
        <div className="ion-float-left ion-padding">
          <h1 className="ion-margin-start">{name}</h1>
        </div>
      </IonItem>
    </IonCardContent>
  );
};

export default AvatarContainer;

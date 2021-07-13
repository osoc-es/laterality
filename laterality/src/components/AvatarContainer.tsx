import { IonAvatar, IonCardContent, IonItem } from "@ionic/react";
import { useHistory } from "react-router";

interface ContainerProps {
  username: string;
  userId: string;
}

const AvatarContainer: React.FC<ContainerProps> = (prop) => {
  const history = useHistory();

  return (
    <IonCardContent className="ion-padding">
      <IonItem onClick={(id: any) => history.push(`/main-menu/${prop.userId}`)}>
        <IonAvatar className="ion-float-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
        </IonAvatar>
        <div className="ion-float-left ion-padding">
          <h5 className="ion-margin-start">{prop.username}</h5>
        </div>
      </IonItem>
    </IonCardContent>
  );
};

export default AvatarContainer;

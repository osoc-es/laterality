import {
  IonAvatar,
  IonCard
} from "@ionic/react";

interface ContainerProps {
    username:string,
}

const AvatarContainer: React.FC<ContainerProps> = (prop) => {
  return (
    <IonCard className="ion-padding">
        <IonAvatar className="ion-float-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" /> 
        </IonAvatar>
        <div className="ion-float-left">
          <h5 className="ion-margin-start">{prop.username}</h5>
        </div>
    </IonCard>
  );
};

export default AvatarContainer;

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  useIonViewWillEnter
} from "@ionic/react";
import "./LoginContainer.css";
import AvatarContainer from "./AvatarContainer"
import { queryAllUsers } from "../dataservice";
import { useState } from "react";

interface ContainerProps {}

const LoginContainer: React.FC<ContainerProps> = () => {

 /* const [queryResults, setQueryResults] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useIonViewWillEnter(() => {
    queryAllUsers().then(setQueryResults);
    setCurrentUser(null);
  });
  
  const users = queryResults; // @TO_DO get users from database
  

  //Creates an AvatarContainer for each user in the database
  const avatars = users.values.map((user: any) =>
    <AvatarContainer username={user.name} />
  ); 
);   
*/
  const createUser = () => { // TO DO use database services
      alert("CREATE USER");
  }
  const users = ["Tomás", "Marcos", "Ana"]; // @TO_DO get users from database
  

  //Creates an AvatarContainer for each user in the database
  const avatars = users.map((user: any) =>
    <AvatarContainer username={user} />
  ); 
 
  return (
    <IonContent>
      <IonGrid>
       <h1 style={{textAlign:"center", fontSize:80}}>
          Latus
       </h1>
        <IonRow className="ion-margin-vertical">
        
          <IonCol size="3" sizeLg="4">
          </IonCol>
        
          <IonCol>
            {avatars}
            <IonButton onClick= {()=>createUser()}>
              ADD USER
            </IonButton>
          </IonCol>

          <IonCol size="3"  sizeLg="4">
          </IonCol>
        
        </IonRow>
      </IonGrid>     
    </IonContent>
  );
};

export default LoginContainer;

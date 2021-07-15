import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
 
  } from "@ionic/react";
  import React, { useEffect, useState } from "react";
  import { useHistory, useParams } from "react-router";
  
  const Levels: React.FC = () => {
  
    const history = useHistory();
    const [wordGoup, setWordGroup] = useState<string>("br");
    return (
      <IonPage>
        <IonContent>  
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h1>Elige un nivel</h1>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonButton onClick={()=>{setWordGroup("br")}}>BR</IonButton>
                    <IonButton onClick={()=>{setWordGroup("pr")}}>PR</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton onClick={(id: any) => history.push(`/minigame/${id}`)}>Jugar</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>   
         

        </IonContent>
      </IonPage>
    );
  };
  
  export default Levels;
  
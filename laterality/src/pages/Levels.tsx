import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
 
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
                        <h1>¿Cómo jugar?</h1>
                        <div>Elige uno de los niveles</div>
                        <div>En cada nivel te encontrarás con diferentes palabras que tendrás que introducir</div>
                        <h3>¿Estás preparado?</h3>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel>Palabras</IonLabel>
                                <IonSelect value={wordGoup} placeholder="Elige Uno" onIonChange={e => setWordGroup(e.detail.value)}>
                                <IonSelectOption value="br">BR</IonSelectOption>
                                <IonSelectOption value="pr">PR</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton onClick={(id: any) => history.push(`/minigame/${id}/${wordGoup}`)}>Jugar</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>   
         

        </IonContent>
      </IonPage>
    );
  };
  
  export default Levels;
  
import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonFabButton,
  IonLabel,
  IonToast,
} from "@ionic/react";

import { TextToSpeech } from "@capacitor-community/text-to-speech";

import { getWordsByGroup } from "../dataservice";
import { useHistory, useParams } from "react-router";

const MiniGame: React.FC = () => {
  const { id, wordGroup} = useParams<any>();
  const history = useHistory();

  let words = new Array();
  let images = new Array();
  
  let timestamp;
  const tiempos = [];

  const chooseRandomWordIndex = () => {
    return Math.floor(Math.random() * words.length);
  };

  const loadWords = async () => {
    await getWordsByGroup(wordGroup).then((results) => {
      results?.values?.map((w: any) => {
        words.push(w.name);
        images.push(w.image);
      });
    });
  };

  const speak = async (word: string) => {
    await TextToSpeech.speak({
      text: word,
      lang: "es-ES",
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: "ambient",
    });
  };

  const [selectedWord, setSelectedWord] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<any>();
  const [text, setText] = useState<string>("");
  const [idx, setIdx] = useState<number>(0);

  
  const [start, setStart] = useState<boolean>(false);
  const [correctToast, setCorrectToast] = useState(false);
  const [incorrectToast, setIncorrectToast] = useState(false);

  const selectNewWord = () => {

    //Get new random word
    setIdx(idx+1);
    if(idx < words.length) {
      setSelectedWord(words[idx]);
      setSelectedImage(images[idx]);
    } else {
      alert("Has completado el reto!");
      history.push(`/home`);
    }


    //Set input text to ""
    setText("");
  };

  useEffect(() => {
    loadWords();
  }, [words]);

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
        <div style={{textAlign:"center"}}>

          {!start && (
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={() => {
                    setStart(true);
                    selectNewWord();
                  }}
                >
                  COMENZAR
                </IonButton>
              </IonCol>
            </IonRow>
          )}
          {start && (
            <IonRow>
              <IonRow>
                <IonCol>
                  {selectedWord && (
                    <IonFabButton>
                      <img
                        src="assets/images/sound.png"
                        onClick={() => speak(selectedWord)}
                        style={{ width: 50, height: 50 }}
                      />
                    </IonFabButton>
                  )}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="3"></IonCol>
                <IonCol size="6">
                  {selectedImage && <img src={selectedImage} />}
                </IonCol>
                <IonCol size="3"></IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonInput
                      value={text}
                      style={{backgroundColor:"white"}}
                      onIonChange={(e) => setText(e.detail.value!)}
                      clearInput
                  ></IonInput>
                  <IonButton
                    color="success"
                    onClick={() => {
                      if (text.trim().toLowerCase() === selectedWord) {
                        setCorrectToast(true);
                        selectNewWord();
                      } else {
                        setIncorrectToast(true);
                      }
                    }}
                  >
                    COMPROBAR
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonToast
                isOpen={correctToast}
                onDidDismiss={() => setCorrectToast(false)}
                message="¡Has acertado!"
                duration={400}
                color="success"
              />
               <IonToast
                isOpen={incorrectToast}
                onDidDismiss={() => setIncorrectToast(false)}
                message="Ohh... has fallado"
                duration={400}
                color="danger"
              />
            </IonRow>
            
          )}
          </div>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MiniGame;

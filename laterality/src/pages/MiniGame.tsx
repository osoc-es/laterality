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
} from "@ionic/react";

import { TextToSpeech } from "@capacitor-community/text-to-speech";

import { getWordsByGroup } from "../dataservice";
import { useParams } from "react-router";

const MiniGame: React.FC = () => {
  const { id, wordGroup} = useParams<any>();

  let words = new Array();
  let images = new Array();
  let index = -1;
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

  const [start, setStart] = useState<boolean>(false);

  const selectNewWord = () => {

    //Get new random word
    index = chooseRandomWordIndex();
    setSelectedWord(words[index]);
    setSelectedImage(images[index]);

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
                  <IonLabel>
                    <IonInput
                      value={text}
                      style={{backgroundColor:"white"}}
                      onIonChange={(e) => setText(e.detail.value!)}
                      clearInput
                    ></IonInput>
                  </IonLabel>
                  <IonButton
                    color="success"
                    onClick={() => {
                      if (text.trim().toLowerCase() === selectedWord) {
                        selectNewWord();
                      }
                    }}
                  >
                    COMPROBAR
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonRow>
          )}
          </div>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MiniGame;

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonFabButton,
} from "@ionic/react";

import "./MiniGame.css";
import { TextToSpeech } from "@capacitor-community/text-to-speech";

import WrongLetters from "../components/WrongLetters";
import Word from "../components/Word";
import Popup from "../components/Popup";
import Notification from "../components/Notification";
import { showNotification as show, checkWin } from "../helpers/helpers";
import { queryAllwords } from "../dataservice";

const MiniGame: React.FC = () => {
  //Variables
  let words = new Array();
  let images = new Array();
  let index=-1;
  let timestamp;
  const tiempos = [];

  const chooseRandomWordIndex = () => {
    return Math.floor(Math.random() * words.length);
  };

  const loadWords = async () => {
    await queryAllwords().then((results) => {
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

  useEffect(() => {
    loadWords();
  }, [words]);

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
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
                <IonInput value={text} placeholder="Palabra" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={() => {
                    index = chooseRandomWordIndex();
                    setSelectedWord(words[index]);
                    setSelectedImage(images[index]);
                  }}
                >
                  {index!=-1 ? "COMENZAR":"SIGUIENTE PALABRA"}
                </IonButton>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MiniGame;

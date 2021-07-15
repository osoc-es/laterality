import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
  useIonModal,
  IonFabButton,
} from "@ionic/react";
import "./MiniGame.css";
import { url } from "inspector";
import { TextToSpeech } from "@capacitor-community/text-to-speech";

//imports Hangman
import Header from "../components/Header";
//import Figure from "../components/Figure";
import WrongLetters from "../components/WrongLetters";
import Word from "../components/Word";
import Popup from "../components/Popup";
import Notification from "../components/Notification";
import { showNotification as show, checkWin } from "../helpers/helpers";

const MiniGame: React.FC = () => {
  const words = [
    "brillante",
    "comprar",
    "libreta",
    "prado",
    "precio",
    "predecir",
    "preguntar",
    "sobre",
    "sombrero",
    "sombrilla",
  ];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  let imgPath = getImagePath(selectedWord);
  let timestamp;
  const tiempos = [];

  function getImagePath(word: string) {
    return `assets/images/${word}.png`;
  }

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

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters]: any[] = useState([]);
  const [wrongLetters, setWrongLetters]: any[] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showWordIndex, setShowWordIndex]: any = useState(0);

  useEffect(() => {
    const handleKeydown = (event: { key: any; keyCode: any }) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        // timestamp: devuelve los milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970 justo hasta ahora como un
        timestamp = Date.now();
        // guardamos los momentos en q pulsamos las teclas
        tiempos.push(timestamp);

        if (selectedWord.includes(letter)) {
          if (selectedWord.charAt(correctLetters.length) == letter) {
            setCorrectLetters((currentLetters: any) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters: any) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    imgPath = getImagePath(selectedWord);
  }

  //<Figure wrongLetters={wrongLetters} />

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <div className="game-container">
            <IonRow>
              <IonCol>
                <IonFabButton>
                  <img
                    src="assets/images/sonido.png"
                    onClick={() => speak(selectedWord)}
                    style={{ width: 50, height: 50 }}
                  />
                </IonFabButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="image-container">
                <img src={imgPath} className="foto" />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <WrongLetters wrongLetters={wrongLetters} />
                <Word
                  selectedWord={selectedWord}
                  correctLetters={correctLetters}
                />
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
        <Popup
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          playAgain={playAgain}
        />
        <Notification showNotification={showNotification} />
      </IonContent>
    </IonPage>
  );
};

export default MiniGame;

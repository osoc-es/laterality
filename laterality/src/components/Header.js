import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

// rafce
const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Hangman</IonTitle>
        <div>
          <p>Encuentra la palabra oculta - Introduzca una letra</p>
        </div>
      </IonToolbar>
    </IonHeader>
    /*<>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </>*/
  );
};

export default Header;

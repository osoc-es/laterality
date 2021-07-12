import {

  IonButton,
  IonCard,

} from "@ionic/react";
import React from "react";
import AvatarContainer from "./AvatarContainer";


// Creates a list with the current users
export const UserList: React.FC<any> = ({ users, userClicked, onDelete }) => {

  return (
    <div>
      {users?.values?.map((user: any) => {
        return (
             <IonCard className="ion-padding" onClick={() => {
              userClicked(user.id);
              }}
              key={user.id}>
                <AvatarContainer username={user.name} userId={user.id} />
                <IonButton
                size="small"
                color="danger"
                fill="outline"
                style={{ margin: 8, float:"right"}}
                onClick = {()=>{onDelete(user.id)}}
                 >
                BORRAR
              </IonButton>
            </IonCard>
        );
      })}
    </div>
  );
};

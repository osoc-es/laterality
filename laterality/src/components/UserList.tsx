import {

  IonCard,

} from "@ionic/react";
import React from "react";
import AvatarContainer from "./AvatarContainer";


// Creates a list with the current users
export const UserList: React.FC<any> = ({ users, userClicked }) => {
  return (
    <div>
      {users?.values?.map((user: any) => {
        return (
             <IonCard className="ion-padding"  onClick={() => {
              userClicked(user.id);
              }}
              key={user.id}>
                <AvatarContainer username={user.name} />
            </IonCard>
        );
      })}
    </div>
  );
};

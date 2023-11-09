import { Collection, getModel } from "@partiaf/constant-definitions";
import { FriendRequestSchemaMongo, User, UsersSchemaMongo } from "@partiaf/entities";
import { sendMessage } from "../notifications";

export const sendRequest = async (
  uuid: string,
  follow: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
  const modelUser = getModel<User>(Collection.USERS, UsersSchemaMongo);

  const result = new model({
    senderId: uuid,
    receiverId: follow,
    status_request: 'pending'
  });


  if (!result) throw new Error("No se puede agregar como amigo");
  await result.save();


  const user = await modelUser.findById({id: follow}).select('-password');
  if(user && user.token){
      await sendMessage({token: user.token, title: '👋 Hey tienes una nuevo solicitud en Partiaf', body: 'Alguien quiere ser tu amigo, entra ahora y enterate el porque 💁‍♂️'})
  }
  
  return true;
};
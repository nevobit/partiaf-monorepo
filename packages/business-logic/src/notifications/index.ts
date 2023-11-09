import { messaging } from 'firebase-admin';

export const sendMessage = async ({token, title, body}: any) => {
    const message = {
        notification: {
            title,
            body,
        },
        token: token
    }

    const messageResponse = await messaging().send(message);
    console.log(messageResponse)
}


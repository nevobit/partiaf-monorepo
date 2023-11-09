import { messaging } from 'firebase-admin';

export const sendMessage = async () => {
    const message = {
        notification: {
            title: '¡El evento perfecto para ti en Partiaf',
            body: 'Este es el evento perfecto para que disfrutes con tus amigos y pases los mejores momentos.'
        },
        token: 'ddIADO4MTCqmidDqh2OW4q:APA91bGXBMjDfqGk-3s_dYru6VJhx3JiJGNPquNgd2gIUvs_xd4B708wv4OFghmCJbFOBFOzpZ3GazrNyZnfft5Sz5sQVU_9XGzNzTWbmlbstDVj1ee6hH9Dkwu5l-gfngIKkEa6zqVx'
    }

    const messageResponse = await messaging().send(message);
    console.log(messageResponse)
}


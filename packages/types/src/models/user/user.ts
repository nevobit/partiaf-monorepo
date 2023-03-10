export interface User {
    uuid: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    type: string;
    verified: boolean;
    password: string;
    phone: string;
    photo: string[];
    gender: string;
    biography: string;
    wishlist: string[];
    interests: string[];
    consumptions: string[];
    followers: string[];
    following: string[];
    matchs: string[];
    friends: string[];
    status: number;
    events: number;
    balance: number;
    verification_code: number;
    last_login: Date;
    location: string;
    date_of_birth: Date;
    notifications: boolean;
    pin: number;
}
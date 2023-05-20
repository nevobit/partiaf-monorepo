import { Base } from "../../../common";

type UserAccountType = 'personal' | 'promoter' | 'business' | 'artist' | 'worker';

export interface User extends Base {
 firstname: string;
 lastname: string;
 username: string;
 email: string;
 type: string;
 password: string;
 phone: string;
 photo: string[];
 gender: string;
 biography: string;
 wishlist: string[];
 interests: string[];
 songs: string[];
 consumptions: string[];
 artistType: string;
 workerType: string;
 followers: string[];
 following: string[];
 matchs: string[];
 friends: string[];
 loginMethod: string;
 events: number;
 balance: number;
 verificationCode: number;
 lastLogin: Date;
 location: string;
 dateOfBirth: Date;
 notifications: boolean;
 pin: number;
 website: string
 isPrivate: boolean;
 isVerified: boolean;
 isBlocked: boolean;
 isSuspended: boolean;
 blockReason: string;
 suspensionReason: string;
 paymentsMethods: UserPayment[];
 accountType: UserAccountType;
 social: UserSocial;
 settings: UserSettings;
}

interface UserSettings {
 emailNotifications: boolean;
 pushNotifications: boolean;
 darkMode: boolean;
 twoFactorAuth: boolean;
}

interface UserPayment {
 cardNumber: string;
 cardExpiration: Date;
 cardCVC: string;
 billingAddress: string;
 billingZipCode: string;
}

interface UserSocial {
 facebook?: string;
 twitter?: string;
 linkedin?: string;
 instagram?: string;
}
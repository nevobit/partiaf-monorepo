import { Base } from "../../../common";

export interface FriendRequest extends Base {
    senderId: string;
    receiverId: string;
    status_request: 'pending' | 'accepted' | 'rejected';
}
  
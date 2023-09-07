import { Base } from "../../../common";

interface Likes{
    user: string;
}

export interface Moment extends Base {
    user: string;
    url: string;
    views: number;
    store: string;
    description: string;
    likes: Likes[];
    isLive: boolean;
    isPrivate: boolean;
    duration: number;
    soundtrack: string;
    isFlagged: boolean;
}
  
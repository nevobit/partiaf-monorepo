import {
  acceptFriendRequest,
  createFollow, getFolloweds, getFollowers, getFriends, getPendingFriendRequests, isFollow, isFriend, isRequest, rejectFriendRequest, sendRequest, unfollow, verifyUserToken,
} from '@partiaf/business-logic';

interface Context {
  token: string;
}

interface ArgsType {
  id: string;
}

export default {
  Query: {
    isFriend: async (parent: any, { reciverId }: {reciverId: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const friend = await isFriend(id, reciverId);
      if (friend instanceof Error) {
        return new Error('Invalid credentials');
      }

      return friend;
    },
    isRequest: async (parent: any, { reciverId }: {reciverId: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      
      const request = await isRequest(id, reciverId);

      console.log({request})
      if (request instanceof Error) {
        return new Error('Invalid credentials');
      }

      return request;
    },
    getFriends: async (parent: any, { uuid }: {uuid: string}, ctx: any) => {
      const { id } =  await verifyUserToken(ctx) as { id: string };
      const userId = uuid ?? id; 
      const followers = await getFriends(userId);
      if (followers instanceof Error) {
        return new Error('Invalid credentials');
      }

      console.log({followers})
      return followers;
    },
    pendingRequests: async (parent: any, { uuid }: {uuid: string}, ctx: any) => {
      const { id } =  await verifyUserToken(ctx) as { id: string };
      const userId = uuid ?? id; 
      console.log(userId)
      const requests = await getPendingFriendRequests(userId);
      if (requests instanceof Error) {
        return new Error('Invalid credentials');
      }
      console.log({requests})
      return requests;
    },
  },
  Mutation: {
    sendFriendRequest: async (parent: any, { uuid, reciverId }: {uuid: string, reciverId: string}, ctx: any) => {
      console.log(uuid)
      console.log(reciverId)
      const { id } = await verifyUserToken(ctx) as { id: string };
      const userId = uuid ?? id; 
      console.log('REQUESTS')
      const request = await sendRequest(userId, reciverId);
      if (request instanceof Error) {
        return new Error('Solicitud no enviada');
      }

      return request;
    },
    acceptRequest: async (parent: any, { id }: {id: string}, ctx: any) => {
      await verifyUserToken(ctx) as { id: string };
      const request = await acceptFriendRequest(id);
      if (request instanceof Error) {
        return new Error('Invalid credentials');
      }
      return request;
    },
    rejectRequest: async (parent: any, { id }: {id: string}, ctx: any) => {
      await verifyUserToken(ctx) as { id: string };
      const request = await rejectFriendRequest(id);
      if (request instanceof Error) {
        return new Error('Invalid credentials');
      }
      return request;
    },
  },
};

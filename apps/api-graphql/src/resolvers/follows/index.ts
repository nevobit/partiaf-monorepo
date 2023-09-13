import {
  createFollow, getFolloweds, getFollowers, isFollow, unfollow, verifyUserToken,
} from '@partiaf/business-logic';

interface Context {
  token: string;
}

interface ArgsType {
  id: string;
}

export default {
  Query: {
    isFollowUser: async (parent: any, { followId }: {followId: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const follow = await isFollow(id, followId);
      if (follow instanceof Error) {
        return new Error('Invalid credentials');
      }

      return follow;
    },
    getFollowers: async (parent: any, { uuid }: {uuid: string}, ctx: any) => {
      const { id } =  await verifyUserToken(ctx) as { id: string };
      const userId = uuid ?? id; 
      const followers = await getFollowers(userId);
      if (followers instanceof Error) {
        return new Error('Invalid credentials');
      }

      return followers;
    },
    getFolloweds: async (parent: any, { uuid }: {uuid: string}, ctx: any) => {
      const { id } =  await verifyUserToken(ctx) as { id: string };
      const userId = uuid ?? id; 
      const followers = await getFolloweds(userId);
      if (followers instanceof Error) {
        return new Error('Invalid credentials');
      }

      return followers;
    },
  },
  Mutation: {
    followUser: async (parent: any, { followId }: {followId: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const follow = await createFollow(id, followId);
      if (follow instanceof Error) {
        return new Error('Invalid credentials');
      }

      return follow;
    },
    unfollowUser: async (parent: any, { followId }: {followId: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const follow = await unfollow(id, followId);
      if (follow instanceof Error) {
        return new Error('Invalid credentials');
      }
      return follow;
    },
  },
};

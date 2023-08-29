import { User } from '@partiaf/entities';
import { registerUser, userLogin } from '@partiaf/business-logic';
interface Context {
  token: string;
}

export default {
  Mutation: {
    userSignin: async (
      parent: User,
      { phone, password }: User,
      ctx: Context
    ) => {
      const user = await userLogin({ phone, password });

      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },

    userSignup: async (parent: User, data: any, ctx: Context) => {
      try {
        const user = await registerUser(data.userData);
        return user;
      } catch (error: any) {
        return new Error('No se pudo registrar el usuario: ' + error.message);
      }
    },
  },
};

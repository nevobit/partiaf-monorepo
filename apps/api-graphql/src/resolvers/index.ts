export default {
  Query: {
    async getInitialQuery() {
      return {
        uuid: 'any uuid',
        name: 'initial name',
      };
    },
  },
};

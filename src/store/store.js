/* eslint-disable no-unused-labels */
export const store = {
  state: {
    recordsList: [],
  },
  mutations: {
    createRecord(state, payload) {
      state.recordsList.push({
        id: payload.id,
        temperature: payload.temperature,
        date: new Date(),
      });
    },
  },
};

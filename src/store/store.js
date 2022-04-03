/* eslint-disable no-unused-labels */
export const store = {
  state: {
    recordsList: [],
  },
  getters: {
    filteredRecordsList(state) {
      return state.recordsList.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
  },
  mutations: {
    createRecord(state, payload) {
      state.recordsList.push({
        id: payload.id,
        temperature: payload.temperature,
        date: new Date(),
      });
    },
    editCurrentRecord(state, payload) {
      let index = state.recordsList.findIndex((item) => item.id === payload.id);
      state.recordsList[index].temperature = payload.value;
      state.recordsList[index].date = new Date();
    },
    deleteRecord(state, payload) {
      state.recordsList = state.recordsList.filter(
        (item) => item.id !== payload.id
      );
    },
  },
};

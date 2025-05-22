import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const survey = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: function (state, action) {
      const id = state.data.length;
      state.data.push({
        id,
        ...action.payload,
      });
      return state;
    },
    removeSurvey: function (state, action) {
      state.data.splice(action.payload, 1);
      return state;
    },
  },
});

export const { addSurvey, removeSurvey } = survey.actions;
export default survey.reducer;

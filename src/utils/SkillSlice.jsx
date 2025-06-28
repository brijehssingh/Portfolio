import { createSlice } from "@reduxjs/toolkit";

const Skill = createSlice({
  name: "Skill",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
  state.item.splice(action.payload, 1);
},

    clearItem: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = Skill.actions;
export default Skill.reducer;

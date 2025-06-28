import { createSlice } from "@reduxjs/toolkit";

const Projects = createSlice({
  name: "Project",
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
    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = Projects.actions;
export default Projects.reducer;

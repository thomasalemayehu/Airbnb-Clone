import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      state.items = [...state.items, action.payload];
      state.countedItems = [
        ...new Map(state.items.map((v) => [v.id, v])).values(),
      ];
    },
    removeFromBookmark: (state, action) => {
      const indexOfObject = state.items.findIndex((object) => {
        return object.id == action.payload.id;
      });

      let newList = [...state.items];

      newList.splice(indexOfObject, 1);

      state.items = newList;
    },
  },
});

export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectBookmarkItems = (state) => state.bookmark.items;

export default bookmarkSlice.reducer;

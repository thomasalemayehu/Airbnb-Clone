import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "1",
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
    },
  ],
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

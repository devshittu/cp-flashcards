// src/features/cards/cardsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back,
      };
    },
  },
});

export const { addCard } = cardsSlice.actions;
export const selectCardById = (state, cardId) => state.cards.cards[cardId];
export default cardsSlice.reducer;

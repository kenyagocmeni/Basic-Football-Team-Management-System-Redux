import { createSlice } from "@reduxjs/toolkit";

//Başlangıç statei:
const initialState={
    players:[],//Futbolcu listesi
};

//Slice tanımı
const teamSlice = createSlice({
    name:"team",//Slice adı
    initialState,
    reducers:{
        //Yeni futbolcu ekleme:
        addPlayer:(state,action)=>{
            state.players.push({
                id:Date.now().toString(),//Benzersiz ID
                ...action.payload,//Gelen futbolcu bilgilerini ekle
            });
        },
        //Futbolcu silme:
        removePlayer:(state, action)=>{
            state.players = state.players.filter(player=>player.id !== action.payload);
        },
    },
});

export const {addPlayer, removePlayer} = teamSlice.actions;
export default teamSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

//Başlangıç statei:
const initialState = {
    matches:[],//Maç sonuçları listesi
};

//Slice Tanımı:
const matchesSlice = createSlice({
    name:"matches",//Slice adı
    initialState,
    reducers:{
        //Yeni maç sonucu ekleme:
        addMatch:(state, action)=>{
            state.matches.push({
                id:Date.now().toString(),//Benzersiz ID
                ...action.payload,//Gelen maç bilgilerini ekle
            });
        },
    },
});

//Actionları ve reducerı dışa aktarma:
export const {addMatch} = matchesSlice.actions;
export default matchesSlice.reducer;
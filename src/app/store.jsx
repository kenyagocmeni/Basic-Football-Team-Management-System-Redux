import { configureStore } from "@reduxjs/toolkit";

import teamReducer from "../features/team/teamSlice";//Kadro yönetim reducer'ı
import matchesReducer from "../features/matches/matchesSlice";//Maç sonuçları reducer'ı

//Store oluşturma:
const store = configureStore({
    reducer:{
        team: teamReducer,//Kadro yönetimi slice'ını çekme
        matches: matchesReducer,//Maç sonuçları slice'ını çekme
    },
});

export default store;
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addMatch } from "../features/matches/matchesSlice";//Maç ekleme actionlarını alıyoruz

const AddMatchForm = ()=>{
    const [opponent, setOpponent] = useState("");
    const [score, setScore] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!opponent || !score){
            alert("Lütfen tüm alanları doldurun");
            return;
        }

        dispatch(
            addMatch({
                opponent,
                score,
                date: new Date().toLocaleDateString(), //maç tarihi
            })
        );

        //Formu temizleme:
        setOpponent("");
        setScore("");

    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Yeni Maç Ekle</h3>
            <input type="text" placeholder="Rakip Takım" value={opponent} onChange={(e)=>setOpponent(e.target.value)}
            />
            <input type="text" placeholder="Skor girin" value={score} onChange={(e)=>setScore(e.target.value)}
            />
            <button type="submit">Maç Ekle</button>
        </form>
    );

};

export default AddMatchForm;
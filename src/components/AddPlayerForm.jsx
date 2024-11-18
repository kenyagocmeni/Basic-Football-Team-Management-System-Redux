import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../features/team/teamSlice";

const AddPlayerForm = ()=>{
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [skill, setSkill] = useState(50)//Yetenek seviyesi default 50

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!name || !position){
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        dispatch(
            addPlayer({
                name,
                position,
                skill: parseInt(skill, 10)//Skill sayısal olarak saklanmalı.
            })
        );

        //Formun temizlenmesi
        setName("");
        setPosition("");
        setSkill(50);

    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Yeni Futbolcu Ekle</h3>
            <input type="text" placeholder="Futbolcu Adı" value={name} onChange={(e)=>setName(e.target.value)} 
            />
            <input type="text" placeholder="Mevki (örneğin SF)" value={position} onChange={(e)=>setPosition(e.target.value)}
            />
            <input type="text" placeholder="Yetenek (1-100)" value={skill} min={1} max={100} onChange={(e)=>setSkill(e.target.value)}
            />
            <button type="submit">Futbolcu Ekle</button>
        </form>
    );

};

export default AddPlayerForm;
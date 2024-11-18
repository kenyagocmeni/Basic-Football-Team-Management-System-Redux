import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer } from "../features/team/teamSlice";

const PlayerList = ()=>{
    const players = useSelector((state)=>state.team.players);//Redux Store'dan futbolcuları al
    const dispatch = useDispatch();

    return(
        <div>
            <h3>Kadro</h3>
            {players.length === 0 ? (
                <p>Henüz bir futbolcu eklenmedi.</p>
            ):(
                <ul>
                    {players.map((player)=>(
                        <li key={player.id}>
                            <strong>{player.name}</strong>({player.position}) - Yetenek:{player.skill}/100
                            <button onClick={()=>dispatch(removePlayer(player.id))}>Bu oyuncuyu gönder</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default PlayerList;
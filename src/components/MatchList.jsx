import React from "react";
import { useSelector } from "react-redux";

const MatchList = ()=>{
    const matches = useSelector((state) => state.matches.matches);//Redux Store'dan sonuçları al

    return(
        <div>
            <h3>Maç Sonuçları</h3>
            {matches.length === 0 ? (
                <p>Henüz bir maç eklenmedi.</p>
            ):(
                <ul>
                    {matches.map((match)=>(
                        <li key={match.id}>
                            <strong>{match.opponent}</strong>:{match.score} ({match.date})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default MatchList;
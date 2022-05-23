import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Session from "../components/Session";
import Main from "../components/Main";
import Bottom from "./Bottom";


export default function Sessions({buy}){
    const {movieID} = useParams();
    const [sessions, setSessions] = useState([]);

    const [movieTitle, setMovieTitle] = useState("");
    const [moviePoster, setMoviePoster] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`)
        promise.then(element => {
            setSessions(element.data.days);
            setMovieTitle(element.data.title);
            setMoviePoster(element.data.posterURL)
            })}, [])

    return(
        <>
            <Title title={`Selecione o horário`}/>
            <Main>
                {sessions.map((session, index)=><Session key={index}
                                                        weekday={session.weekday} 
                                                        date={session.date}
                                                        showtimes={session.showtimes}/>)}            
            </Main>
            <Bottom src={moviePoster} 
                    title={movieTitle}/>
        </>
    );
}
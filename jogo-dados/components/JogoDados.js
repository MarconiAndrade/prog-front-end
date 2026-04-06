"use client";
import {useState} from 'react';
import Dado from './Dado';

export default function JogoDados(){
    const numeroDado = Math.floor(Math.random()*6) + 1;

    const [rodada, setRodada] = useState(1);
    const [dadosJodador1, setDadosJodador1] = useState([null, null]);
    const [dadosJogador2, setDadosJogador2] = useState([null, null]);
    const [turnoJogador1, setTurnoJogador1] = useState(true);
    const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
    const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
    const [resultadoRodada, setResultadoRodada] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const jogarJogador1 = () => {
        const novosDados = [numeroDado(), numeroDado()];
        setDadosJogador1(novosDados);
        setTurnoJogador1(false);
        setResultadoRodada("Aguardando jogador 2 finalizar a rodada");
    }

    const jogarJogador2 = () => {
        const novosDados = [numeroDado(), numeroDado()];
        setDadosJogador2(novosDados);
    
        const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
        const somaJogador2 = novosDados[0] + novosDados[1];

        if(somaJogador1 > somaJogador2){
            setVitoriasJogador1(prev => prev + 1);
            setResultadoRodada(`Jogador 1 venceu a ${rodada}!`);
        }
        else if(somaJogador2 > somaJogador1){
            setVitoriasJogador2(prev => prev + 1);
            setResultadoRodada(`Jogador 2 venceu a ${rodada}!`);
        } 
        else{
            setResultadoRodada(`Empate na rodada ${rodada}!`);
        }

        if(rodada < 5){
            setTimeout(() => {
                setRodada(prev => prev + 1);
                setTurnoJogador1(true);
                setDadosJogador1([null, null]);
                setDadosJogador2([null, null]);
                setResultadoRodada("Nova rodada! Vez do jogador 1");
            }, 3500);
        }
        else{
            setGameOver(true);
        }
    };

    const reiniciar = () => {
        setRodada(1);
        setVitoriasJogador1(0);
        setVitoriasJogador2(0);
        setGameOver(false);
        setTurnoJogador1(true);
        setDadosJogador1([null, null]);
        setDadosJogador2([null, null]);
        setResultadoRodada("");
    };
}
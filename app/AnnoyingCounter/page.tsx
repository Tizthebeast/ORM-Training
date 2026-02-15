'use client'

import {useState} from 'react'

export default function Requested(){
    
    const [counter,setCounter] = useState(0);

    const [phrase,setPhrase] = useState("")
    
    async function Increment(){
        const newValue = counter + 1
        setCounter(newValue)
        if(newValue > 10){
            setPhrase("Bro relax")
        }
        else if(newValue < 0)
            {setPhrase("Why are you going negative?")
        }
        else{
            setPhrase("")
        }
    }

    async function Decrement(){
        const newValue = counter - 1
        setCounter(newValue)
        if(newValue < 0){
            setPhrase("Why are you going negative?")
        }else if(newValue > 10){setPhrase("Bro relax")}
        else{setPhrase("")}
    }
    
    async function Reset(){
        setCounter(0)
            setPhrase("")
    }
    return(
    <div className="bg-green-200 h-screen w-screen text-center">

        <h1 className="bg-red-500 text-blue-300">Annoying Counter</h1>

        <h2 className="bg-red-500 text-blue-300">{counter}</h2>

        <button className="bg-red-500 text-blue-300 mr-4 h-6 w-12 mt-4" onClick={Increment}>+</button>
        <button className="bg-red-500 text-blue-300 mr-4 h-6 w-12 mt-4" onClick={Decrement}>-</button>
        <button className="bg-red-500 text-blue-300 mr-4 h-6 w-12 mt-4" onClick={Reset}>Reset</button>

        <h2 className="bg-red-500 text-blue-300">{phrase}</h2>

    </div>
    )
}
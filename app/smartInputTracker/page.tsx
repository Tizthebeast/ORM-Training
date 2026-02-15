'use client'

import {useState} from "react"


export default function SmartInputTracker(){
    
    const [phrase,setPhrase] = useState("")
    const [activation,setActivation] = useState(false)
    const [warning,setWarning] = useState("")
    
    function check(text: string){
        
        const variable = text.length
        if (variable > 20){
            setActivation(true)
        }
        if (variable < 6){
            setWarning("Warning : the input can't be less than 6 characters")
        }else{
            setWarning("")
        }
    }

    return(
        <div className="fixed bg-green-200 h-screen w-screen">

            <div className="bg-red-400 h-12 w-screen text-2xl text-center">
                Web Site
            </div>

            <div className="h-screen w-screen text-center mt-4">
                <h2 className="bg-red-500 text-black">{phrase.length}</h2>
                <input
                className="bg-white text-black"
                onChange={(e) => {
                    const value = e.target.value
                    setPhrase(value)
                    check(value)
                }}
                disabled={activation}
                />
                <h2 className="bg-red-500 text-black">{warning}</h2>
                <h2 className="bg-red-500 text-black">{phrase}</h2>
            </div>

        </div>
    )
}
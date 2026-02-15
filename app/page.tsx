'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [textic, setTextic] = useState("")

  async function handleStore() {
    await fetch('/api/store', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: textic }),
    })

    setTextic("")
  }

  return (
    <div className="bg-green-200 min-h-screen w-screen flex flex-col">
      <div className="columns-3 text-blue-500 text-center bg-red-700 h-12">
        <h1 className="text-3xl mr-4">
          Web Site 
        </h1>
        <h1 className="text-3xl ">
        <Link href="/AnnoyingCounter" >AnnoyingCounter</Link>
        </h1 >
        <h1 className="text-3xl text-blue-500">
        <Link href="/smartInputTracker" >SmartInputTracker</Link>
        </h1>
      </div>

      <div className="border-4 border-black p-4 text-center">
        <label className="mr-2 text-blue-600">DataSet:</label>

        <input
          className="border bg-white text-black"
          value={textic}
          onChange={(e) => setTextic(e.target.value)}
        />

        <button
          className="px-4 ml-2 bg-red-400 hover:bg-red-600"
          onClick={handleStore}
        >
          Store
        </button>
      </div>
    </div>
  )
}

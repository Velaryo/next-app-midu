'use client'

import { useState, useRef } from "react"

export default function ShortURL () {
    // referencia al input
    const inputRef = useRef()
    const [shortURL, setShortURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // valor q tiene el input
        const url = inputRef.current.value

        //* petición al API
        fetch('/api/shortUrl', {
            method: 'POST', // por defecto es GET
            headers: {
              'Content-Type': 'application/json',
            },
            // convierte obj de JS a JSON
            body: JSON.stringify({url}),
        })

        // convierte el JSON a obj de JS
        .then(res => res.json())    
        //.then(data => {console.log(data)})
        //* data es lo q nos llega?
        .then(data => { setShortURL(data.shortUrl) });
            
    }

    return (
        <>
            <h1>Acortador URL</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        ref={inputRef}
                        type="text" 
                    />

                    <button>Acortar</button>
                    <span>
                        {shortURL}
                    </span>
                </form>
            </div>
        </>
  )

}
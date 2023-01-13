import React, { useState } from 'react'

export default function Calculator() {
    const [result, setResult] = useState("")
    function handleClick(event) {
        setResult(result.concat(event.target.value))
    }
    function clearDisplay(){
        setResult("")
    }
    function calculate(){
        setResult(eval(result).toString())
    }
    return (
        <div className='calc'><h1>Welcome to Calculate me!</h1>
            <input type="text" placeholder='0' id='answer' value={result} />
            <input type="button" value="7" className='button' onClick={handleClick} />
            <input type="button" value="8" className='button' onClick={handleClick} />
            <input type="button" value="9" className='button' onClick={handleClick} />
            <input type="button" value="C" className='button' onClick={clearDisplay} />
            <input type="button" value="4" className='button' onClick={handleClick} />
            <input type="button" value="5" className='button' onClick={handleClick} />
            <input type="button" value="6" className='button' onClick={handleClick} />
            <input type="button" value="+" className='button' onClick={handleClick} />
            <input type="button" value="1" className='button' onClick={handleClick} />
            <input type="button" value="2" className='button' onClick={handleClick} />
            <input type="button" value="3" className='button' onClick={handleClick} />
            <input type="button" value="-" className='button' onClick={handleClick} />
            <input type="button" value="." className='button' onClick={handleClick} />
            <input type="button" value="0" className='button' onClick={handleClick} />
            <input type="button" value="%" className='button' onClick={handleClick} />
            <input type="button" value="/" className='button' onClick={handleClick} />
            <input type="button" value="*" className='button' onClick={handleClick} />
            <input type="button" value="(" className='button' onClick={handleClick} />
            <input type="button" value=")" className='button' onClick={handleClick} />
            <input type="button" value="=" className='button' onClick={calculate} />
        </div>
    )
}

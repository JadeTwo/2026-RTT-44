import { useState } from "react"

function Toggler(){

    const [onOff, setOnOff] = useState(false)

    console.log("onOff Status: "+onOff)

    return(
        <>
        <h1>TogglerComponent</h1>
        <button onClick={() => {setOnOff(!onOff)}}>Toggle Status</button>
        <p>Status: {onOff?"On":"Off"}</p>
        {onOff && <div style={{backgroundColor: "brown", height: "100px", width: "100px"}}></div>}
        </>
    )
}

export default Toggler
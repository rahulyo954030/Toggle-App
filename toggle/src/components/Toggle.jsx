import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [reactShow, SetReactShow] = useState(false)
    const [nodejsShow, SetNodejsShow] = useState(false)
    const [mongoDBShow, SetMongoDBShow] = useState(false)
    const [reactShowButton, SetReactShowButton] = useState(true)
    const [nodejsShowButton, SetNodejsShowButton] = useState(true)
    const [mongoDBShowButton, SetMongoDBShowButton] = useState(true)

    const react=()=>{
        SetReactShow(true)
        SetNodejsShow(false)
        SetMongoDBShow(false)
        SetNodejsShowButton(false)
        SetMongoDBShowButton(false)
    }
    const nodejs=()=>{
        SetNodejsShow(true)
        SetMongoDBShow(false)
        SetReactShow(false)
        SetReactShowButton(false)
        SetMongoDBShowButton(false)
    }
    const mongodb=()=>{
        SetMongoDBShow(true)
        SetReactShow(false)
        SetNodejsShow(false)
        SetReactShowButton(false)
        SetNodejsShowButton(false)
    }
    const okay=()=>{
        SetReactShowButton(true)
        SetNodejsShowButton(true)
        SetMongoDBShowButton(true)
    }

  return (
    <div>
        {reactShow?<h2>React</h2>:null}
        {nodejsShow?<h2>Nodejs</h2>:null}
        {mongoDBShow?<h2>MongoDB</h2>:null}
        <button onClick={okay} >Okay</button>
        <div>
        {reactShowButton?<button onClick={react} >React</button>:null}
        {nodejsShowButton?<button onClick={nodejs}>Nodejs</button>:null}
        {mongoDBShowButton?<button onClick={mongodb}>MongoDB</button>:null}
        </div>
    </div>
  )
}

export default Toggle
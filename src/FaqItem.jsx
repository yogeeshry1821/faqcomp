import { useEffect } from "react";
import { useState } from "react"

const FaqItem = ({faq,index}) => {
    const [show,setShow]=useState(false)
    const handleClick=()=>{
        setShow(!show);
    }
    useEffect((index)=>{
        if(index ==0){
            setShow(true);
        }
        console.log('lol')
    },[]);
    return (
    <div className="sol-val">
            <div className="faq-sol" onClick={handleClick}>
                <button className={show ? "btn-rotate" : "faq-button"} >&gt;</button>
            <div>
                <div className="faq-question">{faq.question}</div>
                {show && <div className="faq-answer">{faq.answer}</div>}
            </div>
        </div>
    </div>
  )
}

export default FaqItem
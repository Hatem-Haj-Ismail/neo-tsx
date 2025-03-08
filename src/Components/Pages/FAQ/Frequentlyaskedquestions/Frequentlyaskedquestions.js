import React from 'react'
import './Frequentlyaskedquestions.scss'
import { Link } from "react-router-dom"; // Router-Link importieren


const Frequentlyaskedquestions = () => {
  return (
    <div className="Frequentlyaskedquestions-container">
                  <div className="header">
                <span className="badge">Frequently asked questions
                </span>
                <h1>
                Got <span>questions</span>? This way.
                </h1>
                <p>
                FAQs, quick fixes, and official info on every feature.
                Can't find your question here, try our <Link to="/contact">support forums</Link>. 
                </p>
            </div>
    </div>
  )
}

export default Frequentlyaskedquestions

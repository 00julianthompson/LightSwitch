import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import "./LightIcon.css"

function LightIcon() {
  return (
    <div className="theIcon">
      <FontAwesomeIcon icon={faToggleOn} />
    </div>
  )
}

export default LightIcon
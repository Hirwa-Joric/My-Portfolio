/* eslint-disable no-unused-vars */
import { useRef } from 'react'

import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        draggable="false"
        alt="JavaScript,  Developer"
      />

      {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M286.14,914c-105.91,0-183.42-27.95-232.56-83.86-49.16-55.91-63.17-134.3-42.08-235.14h174.02c-8.02,50.38-2,89.64,18.03,117.78,20.03,28.16,53.05,42.22,99.05,42.22,51.03,0,91.22-12.45,120.55-37.39,29.31-24.94,38.32-59.1,35.89-117.27l-1.7-598.34h170.6l-.57,597.86c-.8,116.44,10.29,169.77-81.98,249.89-58.62,50.9-111.44,64.25-259.25,64.25Z"
          />
        </g>
      </svg> */}
    </div>
  )
}

export default Logo

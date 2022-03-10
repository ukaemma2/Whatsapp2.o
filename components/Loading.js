
import { Circle } from 'better-react-spinkit'
import React from 'react'

function Loading() {
  return (
    <center style={{display: "grid", placeItems: 'center', height: '100vh' }} > 
      <div>
        <img
          src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png' alt='image'
          style={{marginBottom: 10}}
          height={200}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  )
}

export default Loading
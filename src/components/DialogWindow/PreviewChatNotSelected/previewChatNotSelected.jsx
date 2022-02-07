
import './previewChatNotSelected.css'
import React from 'react'
export default function PreviewChatNotSelected({text}) {
  return (
    <div className="previewChatNotSelected" id="NonMassage">
        <p className='textPreview' >{text}</p>
    </div>
  )
}

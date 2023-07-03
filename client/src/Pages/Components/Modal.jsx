import {useState} from 'react'

const modalStyle = {
    position: 'fixed',
    bottom: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    filter: 'brightness(80%)',
    zindex: '999',
}

const modalContainerStyle = { 
      position: 'absolute',
      bottom: '0%',
      width: '80%',
      height: '80%',
      borderRadius: '50px',
      backgroundColor: 'whitesmoke',
      backdropFilter: 'blur(10px)',

}

function Modal() {
    const [showModal, setShowModal] = useState(false)

  return (
    <div className='modal-type-page'  style={modalStyle}>
        <div className='modal-content' style={modalContainerStyle}>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae consequatur magni? Nobis vitae, illo assumenda impedit aspernatur dolor cupiditate omnis vero qui eius unde tempora deserunt veritatis, sapiente perspiciatis?</p>
        </div>
    </div>
  )
}

export default Modal;
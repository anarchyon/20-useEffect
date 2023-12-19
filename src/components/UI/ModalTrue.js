import { useEffect, useMemo } from 'react'
import './ModalTrue.css'
import { createPortal } from 'react-dom'

const modalRootElement = document.querySelector('#modal')

function ModalTrue(props) {
  const { active, onClose } = props
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    if (active) {
      modalRootElement.appendChild(element)

      return () => {
        modalRootElement.removeChild(element)
      }
    }
  })

  if (active) {
    return createPortal(
      <div className={active ? 'modal active' : 'modal'} onClick={onClose}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>,
      element
    )
  }

  return null
}

export default ModalTrue

import './Modal.css'

const modalRootElement = document.querySelector('#modal')

function Modal(props) {
  const { active, setActive } = props

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='modal_content' onClick={e => e.stopPropagation()}>
        <button type="button" className="closeButton" onClick={() => setActive(false)}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default Modal

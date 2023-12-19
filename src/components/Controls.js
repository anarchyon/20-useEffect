import './Controls.css'
import FormAdd from './UI/FormAdd'

function Controls(props) {
  const { openModal, childrenForModal } = props

  // function setupModal(children) {
  //   console.log('entry to setupModal')
  //   openModal()
  //   childrenForModal(children)
  // }

  return (
    <div className="container-controls">
      <div className="control head" onClick={openModal}>
        Добавить сотрудника
      </div>
      <div className="control" onClick={openModal}>
        Поиск
      </div>
      <div className="control foot">Выход</div>
    </div>
  )
}

export default Controls

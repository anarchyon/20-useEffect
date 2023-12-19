import Form from './Form'

function FormSearch(props) {
  const { onClose } = props
  return (
    <>
      <h3>Редактирование сотрудника</h3>
      <Form onClose={onClose} />
    </>
  )
}

export default FormSearch

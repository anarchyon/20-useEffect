import Form from './Form'

function FormAdd(props) {
  const { onClose } = props
  return (
    <>
      <h3>Добавить сотрудника</h3>
      <Form onClose={onClose} />
    </>
  )
}

export default FormAdd

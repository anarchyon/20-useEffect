function Form(props) {
  const { onClose } = props
  return (
    <>
      <form>
        <div>
          <label>
            Имя:<input></input>
          </label>
        </div>
        <div>
          <label>
            Фамилия:<input></input>
          </label>
        </div>
        <div>
          <label>
            Адрес:<input></input>
          </label>
        </div>
        <div>
          <label>
            Дата рождения:<input></input>
          </label>
        </div>
        <div>
          <button>Добавить сотрудника</button>
        </div>
      </form>
      <div>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  )
}

export default Form

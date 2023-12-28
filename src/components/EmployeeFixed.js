import { FaPencil, FaTrashCan } from 'react-icons/fa6'
import styles from './EmployeeFixed.module.css'

function EmployeeFixed(props) {
  const {
    staffItem,
    isHeader,
    setIsEditable,
    sortStaff,
    setPathAndEmployee,
    setEditedData,
    isEditable,
    prevFuncEditable
  } = props
  const deleteEmployeePath = 'http://127.0.0.1:8000/delete/'

  const dateFormat = (dateStr) => {
    let date = new Date(dateStr)
    return date.toLocaleDateString()
  }

  return (
    <div className={styles.row}>
      <div className={styles.itemFirstName}>
        {staffItem.employee.first_name}
      </div>
      <div className={styles.itemLastName}>{staffItem.employee.last_name}</div>
      <div className={styles.itemAddress}>{staffItem.employee.address}</div>
      <div className={styles.itemBirthdate}>
        {dateFormat(staffItem.employee.birthdate)}
      </div>
      <div className={styles.itemAction}>
        <FaPencil
          className={styles.iconEdit}
          onClick={() => {
            console.log(prevFuncEditable.current.func)
            prevFuncEditable.current.func(false)
            setIsEditable(true)
            prevFuncEditable.current.func = setIsEditable
            console.log(isEditable)
            console.log(prevFuncEditable)
          }}
        />
        <FaTrashCan
          className={styles.iconDelete}
          onClick={() => {
            const fullPath = deleteEmployeePath + staffItem.employee.staff_id
            setPathAndEmployee({ path: fullPath, employee: null })
          }}
        />
      </div>
    </div>
  )
}

export default EmployeeFixed

import { FaPencil, FaTrashCan } from 'react-icons/fa6'
import styles from './EmployeeFixed.module.css'

function EmployeeFixed(props) {
  const { staffItem, isHeader, setEditable, sortStaff } = props.props

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
            setEditable(staffItem.employee, true)
          }}
        />
        <FaTrashCan className={styles.iconDelete} />
      </div>
    </div>
  )
}

export default EmployeeFixed

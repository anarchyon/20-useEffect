import { FaCheck, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import styles from './EmployeeEditable.module.css'

function EmployeeEditable(props) {
  const { staffItem, setEditable } = props.props

  const [employeeData, setEmployeeData] = useState(staffItem.employee)

  const inputEmployeeHandler = (nameField, text) => {
    setEmployeeData({ ...employeeData.employee, [nameField]: text })
  }

  return (
    <div className={styles.row}>
      <div className={styles.itemFirstName}>
        <input
          value={employeeData.first_name}
          onChange={(e) => inputEmployeeHandler('first_name', e.target.value)}
        />
      </div>
      <div className={styles.itemLastName}>
        <input
          value={employeeData.last_name}
          onChange={(e) => inputEmployeeHandler('last_name', e.target.value)}
        />
      </div>
      <div className={styles.itemAddress}>
        <input
          value={employeeData.address}
          onChange={(e) => inputEmployeeHandler('address', e.target.value)}
        />
      </div>
      <div className={styles.itemBirthdate}>
        <input
          type="date"
          value={employeeData.birthdate}
          onChange={(e) => inputEmployeeHandler('birthdate', e.target.value)}
        />
      </div>
      <div className={styles.itemAction}>
        <FaCheck
          className={styles.iconCheck}
          onClick={() => {
            setEditable(staffItem.employee, false)
          }}
        />
        <FaXmark
          className={styles.iconCancel}
          onClick={() => setEditable(staffItem.employee, false)}
        />
      </div>
    </div>
  )
}

export default EmployeeEditable

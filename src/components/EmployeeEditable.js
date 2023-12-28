import { FaCheck, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import styles from './EmployeeEditable.module.css'

function EmployeeEditable(props) {
  const updateEmployeePath = 'http://127.0.0.1:8000/update/'
  const {
    staffItem,
    setIsEditable,
    setPathAndEmployee,
    setEditedData,
    editedData,
  } = props

  const [employeeData, setEmployeeData] = useState(staffItem.employee)

  const inputEmployeeHandler = (nameField, text) => {
    setEmployeeData({ ...employeeData, [nameField]: text })
  }

  // setEditedData(null, staffItem.employee)

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
            const fullPath = updateEmployeePath + staffItem.employee.staff_id
            setIsEditable(false)
            setPathAndEmployee({ path: fullPath, employee: employeeData })
          }}
        />
        <FaXmark
          className={styles.iconCancel}
          onClick={() => {
            setIsEditable(false)
          }}
        />
      </div>
    </div>
  )
}

export default EmployeeEditable

import { v4 as uuidv4 } from 'uuid'
import styles from './Staff.module.css'
import Employee from './Employee'
import EmployeeHeader from './EmployeeHeader'
import EmployeeFilter from './EmployeeFilter'

const header = {
  employee: {
    first_name: 'Имя',
    last_name: 'Фамилия',
    address: 'Адрес',
    birthdate: 'Дата рождения',
  },
}

function Staff(props) {
  const { staff, setEditable, sortStaff, sortData } = props

  return (
    <div className={styles.containerStaff}>
      <EmployeeHeader
        staffItem={header}
        key={-1}
        sortStaff={sortStaff}
        sortData={sortData}
      />
      <EmployeeFilter
        setFilter={props.setFilter}
        filterData={props.filterData}
        refreshFilter={props.refreshFilter}
        addEmployee={props.addEmployee}
        setPathAndEmployee={props.setPathAndEmployee}
      />
      {staff.map((staffItem) => {
        return (
          <Employee
            staffItem={staffItem}
            key={uuidv4()}
            setEditable={setEditable}
            setPathAndEmployee={props.setPathAndEmployee}
            setEditedData={props.setEditedData}
            editedData={props.editedData}
            prevFuncEditable={props.prevFuncEditable}
          />
        )
      })}
    </div>
  )
}

export default Staff

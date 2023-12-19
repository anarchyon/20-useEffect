import { v4 as uuidv4 } from 'uuid'
import styles from './Staff.module.css'
import Employee from './Employee'
import EmployeeHeader from './EmployeeHeader'
import EmployeeFilter from './EmployeeFilter'

const header = {employee: {first_name: 'Имя', last_name: 'Фамилия', address: 'Адрес', birthdate: 'Дата рождения'}}

function Staff(props) {
  const { staff, setEditable, sortStaff, sortData } = props
  console.log(staff)

  return (
    <div className={styles.containerStaff}>
      <EmployeeHeader staffItem={header} key={-1} sortStaff={sortStaff} sortData={sortData} />
      <EmployeeFilter setFilter={props.setFilter} filterData={props.filterData} refreshFilter={props.refreshFilter} />
      {staff.map((staffItem) => {
        return <Employee staffItem={staffItem} key={uuidv4()} setEditable={setEditable} />
      })}
    </div>
  )
}

export default Staff

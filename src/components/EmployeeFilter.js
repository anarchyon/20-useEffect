import { FaArrowsRotate, FaPlus } from 'react-icons/fa6'
import styles from './EmployeeFilter.module.css'

function EmployeeFilter({ setFilter, filterData, refreshFilter, setPathAndEmployee }) {
  const fieldFirstName = 'first_name'
  const fieldLastName = 'last_name'
  const fieldAddress = 'address'
  const fieldBirthdate = 'birthdate'
  const addEmployeePath = 'http://127.0.0.1:8000/add'

  return (
    <div className={styles.row}>
      <div className={styles.itemFirstName}>
        <input
          id={fieldFirstName}
          autoComplete="new-password"
          type="search"
          value={filterData.first_name}
          onChange={(e) => setFilter('first_name', e.target.value)}
        />
      </div>
      <div className={styles.itemLastName}>
        <input
          id={fieldLastName}
          autoComplete="new-password"
          type="search"
          value={filterData.last_name}
          onChange={(e) => setFilter('last_name', e.target.value)}
        />
      </div>
      <div className={styles.itemAddress}>
        <input
          id={fieldAddress}
          autoComplete="new-password"
          type="search"
          value={filterData.address}
          onChange={(e) => setFilter('address', e.target.value)}
        />
      </div>
      <div className={styles.itemBirthdate}>
        <input
          id={fieldBirthdate}
          type="date"
          value={filterData.birthdate}
          onChange={(e) => setFilter('birthdate', e.target.value)}
        />
      </div>
      <div className={styles.itemAction}>
        <FaArrowsRotate
          className={styles.iconRefresh}
          onClick={refreshFilter}
        />
        <FaPlus
          className={styles.iconAdd}
          onClick={() => setPathAndEmployee({path: addEmployeePath, employee: filterData})}
        />
      </div>
    </div>
  )
}

export default EmployeeFilter

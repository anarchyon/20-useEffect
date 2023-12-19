import { FaArrowsRotate, FaPlus } from 'react-icons/fa6'
import styles from './EmployeeFilter.module.css'

function EmployeeFilter({ setFilter, filterData, refreshFilter }) {

  return (
    <div className={styles.row}>
      <div className={styles.itemFirstName}>
        <input
          autoComplete="new-password"
          type="search"
          value={filterData.first_name}
          onChange={(e) => setFilter('first_name', e.target.value)}
        />
      </div>
      <div className={styles.itemLastName}>
        <input
          autoComplete="new-password"
          type="search"
          value={filterData.last_name}
          onChange={(e) => setFilter('last_name', e.target.value)}
        />
      </div>
      <div className={styles.itemAddress}>
        <input
          autoComplete="new-password"
          type="search"
          value={filterData.address}
          onChange={(e) => setFilter('address', e.target.value)}
        />
      </div>
      <div className={styles.itemBirthdate}>
        <input type="date" />
      </div>
      <div className={styles.itemAction}><FaArrowsRotate className={styles.iconRefresh} onClick={refreshFilter} />
      <FaPlus className={styles.iconAdd} /></div>
    </div>
  )
}

export default EmployeeFilter

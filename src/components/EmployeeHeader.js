import { FaAnglesUp, FaAnglesDown } from 'react-icons/fa6'
import styles from './EmployeeHeader.module.css'

function EmployeeHeader(props) {
  const { staffItem, sortStaff, sortData } = props
  const setSortIcon = (column) => {
    return (
      <>
        {sortData.sortColumn === column ? (
          sortData.isSortAsc ? (
            <FaAnglesUp className={styles.iconSmall} />
          ) : (
            <FaAnglesDown className={styles.iconSmall} />
          )
        ) : (
          ''
        )}
      </>
    )
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.itemFirstName}
        onClick={() => sortStaff('first_name')}
      >
        {setSortIcon('first_name')}
        {staffItem.employee.first_name}
      </div>
      <div
        className={styles.itemLastName}
        onClick={() => sortStaff('last_name')}
      >
        {setSortIcon('last_name')}
        {staffItem.employee.last_name}
      </div>
      <div className={styles.itemAddress} onClick={() => sortStaff('address')}>
        {setSortIcon('address')}
        {staffItem.employee.address}
      </div>
      <div
        className={styles.itemBirthdate}
        onClick={() => sortStaff('birthdate')}
      >
        {setSortIcon('birthdate')}
        {staffItem.employee.birthdate}
      </div>
      <div className={styles.itemAction}> </div>
    </div>
  )
}

export default EmployeeHeader

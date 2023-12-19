import { useEffect, useRef, useState } from 'react'
import './App.css'
import Staff from './components/Staff'
import Controls from './components/Controls'
import Modal from './components/UI/Modal'
import ModalTrue from './components/UI/ModalTrue'
import FormAdd from './components/UI/FormAdd'

const employeeEmpty = {
    first_name: '',
    last_name: '',
    address: '',
    birthdate: '',
}

function App() {
  // const [employee, setEmployee] = useState(null)
  const [staff, setStaff] = useState(null)
  // const [isModalActive, setModalActive] = useState(false)
  const [filterData, setFilterData] = useState(employeeEmpty)
  
  const sortData = useRef({ sortColumn: '', isSortAsc: true })

  // console.log(staff)

  // const handleModalOpen = () => {
  //   setModalActive(true)
  // }
  // const handleModalClose = () => {
  //   setModalActive(false)
  // }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/get-staff/json')
      .then((response) => response.json())
      .then((staff) => {
        const staffWithAdditionalFields = []
        staff.map((employee) => {
          staffWithAdditionalFields.push({
            employee: employee,
            isEditable: false,
          })
        })
        setStaff(staffWithAdditionalFields)
      })
  }, [])

  const setEditableHandler = (employee, isEditable) => {
    isEditable
      ? setStaff(
          staff.map((item) =>
            item.employee === employee
              ? { ...item, isEditable: true }
              : { ...item, isEditable: false }
          )
        )
      : setStaff(
          staff.map((item) =>
            item.isEditable ? { ...item, isEditable: false } : { ...item }
          )
        )
  }

  const sortStaffHandler = (sortColumn) => {
    if (sortData.sortColumn === sortColumn) {
      sortData.isSortAsc = !sortData.isSortAsc
    } else {
      sortData.sortColumn = sortColumn
      sortData.isSortAsc = true
    }

    let sortedStaff = staff
      .slice()
      .sort(
        (a, b) =>
          (a.employee[sortData.sortColumn] < b.employee[sortData.sortColumn] &&
            -1) ||
          (a.employee[sortData.sortColumn] > b.employee[sortData.sortColumn] &&
            1) ||
          0
      )
    if (!sortData.isSortAsc) {
      sortedStaff = sortedStaff.reverse()
    }
    setStaff(sortedStaff)
  }

  const setFilterDataHandler = (nameField, newData) => {
    setFilterData({ ...filterData, [nameField]: newData })
  }

  const refreshFilterData = () => {
    setFilterData(employeeEmpty)
  }

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/get/1')
  //     .then((response) => response.json())
  //     .then((json) => setEmployee(json))
  // }, [])

  return (
    <div className="App">
      {/* <ModalTrue active={isModalActive} onClose={() => setModalActive(false)}>
        <FormAdd onClose={() => setModalActive(false)} />
      </ModalTrue> */}
      <div className="container">
        {staff && (
          <>
            <Staff
              staff={staff.filter((itemStaff) => 
                itemStaff.employee.first_name.toLowerCase().includes(filterData.first_name.toLowerCase())
                 && itemStaff.employee.last_name.toLowerCase().includes(filterData.last_name.toLowerCase()) 
                 && itemStaff.employee.address.toLowerCase().includes(filterData.address.toLowerCase())
              )}
              setEditable={setEditableHandler}
              sortStaff={sortStaffHandler}
              sortData={sortData}
              setFilter={setFilterDataHandler}
              filterData={filterData}
              refreshFilter={refreshFilterData}
            />
            {/* <Controls openModal={handleModalOpen} /> */}
          </>
        )}
      </div>
    </div>
  )
}

export default App

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
  const [employee, setEmployee] = useState(employeeEmpty)
  const [staff, setStaff] = useState(null)
  // const [isModalActive, setModalActive] = useState(false)
  const [filterData, setFilterData] = useState(employeeEmpty)
  const [editedData, setEditedData] = useState(employeeEmpty)
  // const [editableEmployee, setEditableEmployee] = useState()
  const [dataToServer, setDataToServer] = useState({ path: '', data: null })
  const [responseStatus, setResponseStatus] = useState(200)

  const sortData = useRef({ sortColumn: '', isSortAsc: true })
  const prevFuncEditable = useRef({key: '', func: () => {}})

  // console.log(staff)

  // const handleModalOpen = () => {
  //   setModalActive(true)
  // }
  // const handleModalClose = () => {
  //   setModalActive(false)
  // }

  //хук для получения массива сотрудников от сервера (при загрузке страницы и при добавлении, редактировании, удалении сотрудника)
  useEffect(() => {
    if (responseStatus === 200) {
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
          console.log('get staff entry')
        })
    }
    setResponseStatus(0)
  }, [responseStatus])

  //хук для добавления, редактирования, удаления сотрудника
  useEffect(() => {
    console.log(dataToServer)
    if (dataToServer.path) {
      console.log(employee)
      fetch(dataToServer.path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToServer.employee),
      }).then((response) => {
        setResponseStatus(response.status)
        console.log(response.status)
      })
    }
  }, [dataToServer])

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

  const setEditedDataHandler = (nameField, newData) => {
    if (nameField === null) {
      setEditedData(newData)
      console.log(editedData)
    } else {
      setEditedData({ ...editedData, [nameField]: newData })
    }
  }

  const addEmployeeHandler = (newEmployee) => {
    setEmployee(newEmployee)
  }

  return (
    <div className="App">
      {/* <ModalTrue active={isModalActive} onClose={() => setModalActive(false)}>
        <FormAdd onClose={() => setModalActive(false)} />
      </ModalTrue> */}
      <div className="container">
        {staff && (
          <>
            <Staff
              staff={staff.filter(
                (itemStaff) =>
                  itemStaff.employee.first_name
                    .toLowerCase()
                    .includes(filterData.first_name.toLowerCase()) &&
                  itemStaff.employee.last_name
                    .toLowerCase()
                    .includes(filterData.last_name.toLowerCase()) &&
                  itemStaff.employee.address
                    .toLowerCase()
                    .includes(filterData.address.toLowerCase()) &&
                  itemStaff.employee.birthdate.includes(filterData.birthdate)
              )}
              setEditable={setEditableHandler}
              sortStaff={sortStaffHandler}
              sortData={sortData}
              setFilter={setFilterDataHandler}
              filterData={filterData}
              refreshFilter={refreshFilterData}
              addEmployee={addEmployeeHandler}
              setPathAndEmployee={setDataToServer}
              setEditedData={setEditedDataHandler}
              editedData={editedData}
              prevFuncEditable={prevFuncEditable}
            />
            {/* <Controls openModal={handleModalOpen} /> */}
          </>
        )}
      </div>
    </div>
  )
}

export default App

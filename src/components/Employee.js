import React, { useState } from 'react'
import './Employee.css'
import EmployeeEditable from './EmployeeEditable'
import EmployeeFixed from './EmployeeFixed'

function Employee(props) {
  const { staffItem, setEditedData } = props
  const [isEditable, setIsEditable] = useState(false)

  // setEditedData(staffItem)

  const setIsEditableHandler = (boolParam) => {
    // console.log(`boolParam = ${boolParam}`)
    setIsEditable(boolParam)
    // console.log(isEditable)
  }

  return isEditable ? (
    <EmployeeEditable {...props} setIsEditable={setIsEditableHandler} />
  ) : (
    <EmployeeFixed {...props} setIsEditable={setIsEditableHandler} isEditable={isEditable} />
  )
}

export default Employee

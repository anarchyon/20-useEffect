import React, { useState } from 'react'
import './Employee.css'
import EmployeeEditable from './EmployeeEditable'
import EmployeeFixed from './EmployeeFixed'

function Employee(props) {
  const { staffItem } = props

  return staffItem.isEditable ? (
    <EmployeeEditable props={props} />
  ) : (
    <EmployeeFixed props={props} />
  )
}

export default Employee

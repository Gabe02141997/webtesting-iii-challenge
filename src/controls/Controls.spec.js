// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import Controls from './Controls'


test('Controls component renders', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
})


test('Buttons that render open and lock', () => {
    const wrapper = render(<Controls/>)
    const lock = wrapper.getByText(/lock gate/i)
    const open = wrapper.getByText(/close gate/i)

    expect(lock).toBeDefined();
    expect(open).toBeDefined();

})  

test('The Gate will close when button is clicked', () => {
    const gateStatus = jest.fn()
    const { getByText } = render(<Controls toggleClosed ={gateStatus}/>)
    const closedGate = getByText(/close gate/i)

    fireEvent.click(closedGate)
    expect(gateStatus).toHaveBeenCalled()

    
} )


test('The Gate will Lock when button is clicked', () => {
    const gateStatus = jest.fn()
    const { getByText } = render(<Controls closed ={true} toggleLocked ={gateStatus}/>)
    const LockedGate = getByText(/Lock gate/i)

    fireEvent.click(LockedGate)
    expect(gateStatus).toHaveBeenCalled()

    
} )


test('The lock is diabled, if the gate is open', () => {
    const { getByText } = render(<Controls/>)
   expect(getByText(/lock gate/i).disabled).toEqual(true)
    
    
} )

test('Open button is disabled, if gate is locked', () => {
    const { getByText } = render(<Controls closed ={true} locked ={true} /> )
    expect(getByText(/open gate/i).disabled).toEqual(true)
})
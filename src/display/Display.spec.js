// Test away!

import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'

test('Display renders successfully', ()=> {
    render(<Display/>)
})


test('Displays closed, if closed is true', () => {
    const closed = true
    const wrapper = render(<Display closed ={closed}/>)
    wrapper.getByText(/closed/i);
})

test('Displays open, if opened', () => {
    const closed = false
    const wrapper = render(<Display closed ={closed}/>)
    wrapper.getByText(/open/i);
})

test('Locked is displayed if it is true', () => {
    const locked = true
    const wrapper = render(<Display locked ={locked}/>)
    wrapper.getByText(/locked/i)
})

test('Not Locked if locked is set to false', () => {
    const locked = false
    const wrapper = render(<Display locked ={locked}/>)
    wrapper.getByText(/unlock/i)
})

test('red-led class is given if gate is closed', () => {
     const closed = true
     const wrapper = render(<Display closed ={closed}/>)
     wrapper.queryByTestId(/red-led/i)
})

test('red-led class is given if gate is locked', () => {
    const locked = true 
    const wrapper = render(<Display locked={locked}/>)
    wrapper.queryByTestId(/red-led/i)
})


test('green-led class is given if gate is unlocked', () => {
    const locked = false
    const wrapper = render(<Display locked={locked}/>)
    wrapper.queryByTestId(/green-led/i)
})

test('green-led class is given if gate is open', () => {
    const locked = false
    const wrapper = render(<Display closed={locked}/>)
    wrapper.queryByTestId(/green-led/i)
})
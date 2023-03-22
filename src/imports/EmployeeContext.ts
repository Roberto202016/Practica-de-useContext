import {createContext} from 'react'


export interface Employee {
    id: number,
    name: string,
    position: string,
    photo: string,
    birthday: string,
    email: string,
}

export const EmployeeContext = createContext<Employee>({
    id: 0,
    name: '',
    position: '',
    photo: ``,
    birthday: '',
    email: '',
})
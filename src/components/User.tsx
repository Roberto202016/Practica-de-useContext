//@ts-nocheck
import { useEffect, useState } from "react";
import { EmployeeContext, Employee } from "../imports/EmployeeContext.ts";
import FrontCard from "./FrontCard.tsx";
import BackCard from "./BackCard.tsx";
import './Card.css'


function  User() {

    const[ employee, setEmployee ] = useState<Employee>({

        id: 21056699,
        name: 'Roberto Gamboa',
        position: 'Loading...',
        photo: `https://em-content.zobj.net/source/skype/289/clown-face_1f921.png`,
        birthday: '02/07/2000',
        email: 'roberto_12722@hotmail.com',
    })

    useEffect(() => {
        setTimeout(() => setEmployee({...employee, position:'Front-end Developer'}), 5000)
        }, [employee]);

    return (

        <div>
            <EmployeeContext.Provider value={employee}>
                <div className="User">
                <FrontCard/>
                <BackCard/>
                </div>

            </EmployeeContext.Provider>
        </div>

        
    )
}

export default User
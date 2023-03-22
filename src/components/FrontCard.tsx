//@ts-nocheck
import { useContext} from "react";
import { EmployeeContext } from "../imports/EmployeeContext.ts";
import '../components/Card.css'


function  FrontCard() {

    const {name, photo, position} = useContext(EmployeeContext)    
    return (
        <div className="frontCard">
            <h2>
                {name}
            </h2>
            <img src={photo} alt="" />
            <p>
                Position:
                <br/>
                {position}
            </p>
        </div>
    )
}

export default FrontCard
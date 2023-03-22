// @ts-nocheck
import { useContext } from "react"
import { EmployeeContext } from "../imports/EmployeeContext.ts"



function BackCard() {

   const {id, birthday, email} = useContext(EmployeeContext)

   return (
       <div className="backCard">
           <p>
               Employee id:
               <br />
               {id}
           </p>
           <p>
               Date of birth:
               <br />
               {birthday}
           </p>
           <p>
               email:
               <br />
               {email}
           </p>
           
       </div>
   )
}

export default BackCard
import React from "react"
import { add,multiply,subtract,divide } from "./cal"
//import * as cal from ".cal" import all under one name

function List(){
    return(
        <div>
            <h1>Multiple named export in a React component</h1>
            <ul>
                <li>{add(1,2)}</li> {/*ca.add(1,2)*/}
                <li>{multiply(2,3)}</li>
                <li>{subtract(7,2)}</li>
                <li>{divide(5,2)}</li>
            </ul>
        </div>
        
    )
}

export default List
import React from "react";
function DeviceItem({value,onClick,handlePenis}){


    return(
        <>
            <p onClick={onClick}>{value}</p>
        </>
    )
}
export default DeviceItem
import React from "react";

function DisplayHigherOrLower({string, bool}) {

 return (
    <div>You chose: {string}, {bool.toString()}</div>
    
 )
}

export default DisplayHigherOrLower
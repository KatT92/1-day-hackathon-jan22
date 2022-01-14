import React from "react";

function HigherOrLower({higherOrLower, compareCards, compare, card}) {


console.log(compare)


return (
    <div>
    Will the next card by higher or lower: 
    <button onClick={()=>{higherOrLower("higher")}}> Higher</button>
    <button onClick={()=>{higherOrLower("lower")}}> Lower</button>
    </div>
)
}
export default HigherOrLower
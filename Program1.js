import React from 'react'

export default function Program1() {
    EvenOddValue = () => {
        const arr = [1, 2, 3, 4, 5, 6,12,2,4,34,53];
        for (num of arr){	
            if (num % 2 === 0) {
                <div>
                    <p>{num}</p><br/>
                </div>
            }
        }
    }
    return (
     <div>
         EvenOddValue();
     </div>
    )
}
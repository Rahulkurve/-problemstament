import React from 'react'

const arr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
export default function Program2() {

    
    findMaxConsecutiveOnes = (arr = []) => {
       let left = 0;
       let right = 0;
       let max = 0;
       while (right < arr.length) {
          if (arr[right] === 0) {
             if (right - left > max) {
                max = right - left
             }
             right++;
             left = right;
          } else {
             right++
          }
       }
       return right - left > max ? right - left : max;
    }
    return (
        <div>
            findMaxConsecutiveOnes(arr);
        </div>
    )
}

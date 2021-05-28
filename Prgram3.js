import React from 'react'

export default function Prgram3() {
  
const arr = [-1, 2, 2, 2, 0, 0, 0, 500, -1, 'a', 'a', 'a']

const filtered = arr.filter((el, index) => arr.indexOf(el) !== index)

const duplicates = [...new Set(filtered)]

console.log(duplicates)
  
    return (
            <div>
                <p>{duplicates}</p><br/>
            </div>
        )
}

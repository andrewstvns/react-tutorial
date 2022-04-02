// membuat component simple
// wajib ada 
import React from 'react'; 
// const itu apa?
// semua yang diwebsite bisa jadi component
// Nama component conts sma nama file disamain biar ga bingung
// Functional Component
const Counter = ({
  // props itu statik
  // membuat props
  // props itu attribut component
  // count itu apa
  count 
}) => {
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}
// didalem return functional componen bisa ada html
// prop
export default Counter;
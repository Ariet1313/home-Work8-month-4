// import React, { useState, useEffect } from 'react';

// function TimerWithClicker() {
//   const [inputSeconds, setInputSeconds] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [milliseconds, setMilliseconds] = useState(0);
//   const [clickCount, setClickCount] = useState(0);

//   useEffect(() => {
//     let intervalId;

//     if (seconds > 0 || milliseconds > 0) {
//       intervalId = setInterval(() => {
//         if (milliseconds === 0) {
//           setSeconds((prevSeconds) => prevSeconds - 1);
//           setMilliseconds(1000);
//         } else {
//           setMilliseconds((prevMs) => prevMs - 5);
//         }
//       }, 1); 
//     } else { 
//       clearInterval(intervalId);
//       setClickCount(0);
     
//       <p>${clickCount/5}</p>
//     }

//     return () => clearInterval(intervalId);
//   }, [seconds, milliseconds, clickCount]);

//   const handleButtonClick = () => {
//     if (seconds === 0 && milliseconds === 0) {
//       setSeconds(inputSeconds);
//       setMilliseconds(0);
//     }
//     setClickCount((prevCount) => prevCount + 1);
//   };
  
//   const handleResetClick = () => {
//     setSeconds(0);
//     setMilliseconds(0);
//     setClickCount(0);
    
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={inputSeconds}
//         onChange={(e) => setInputSeconds(parseInt(e.target.value))}
//       />
//       <button onClick={handleButtonClick}>Кликнуть</button>
    
//       <button onClick={handleResetClick}>Сброс</button>
//       <div>
//         {seconds} секунд {milliseconds} миллисекунд
//       </div>
//       <div>
//         Кликов: {clickCount}
//       </div>
//       <div>
//         Кол-во кликов в 1 секунд: {clickCount/5}
//       </div>
      
//     </div>
//   );
// }

// export default TimerWithClicker;
import Form from "./Form";
import { useState } from "react";

function App() {
  
  return (
    <div className="App">
      
      <Form />
    </div>
  )
}
export default App;

//  import React, {  useRef} from 'react';

//  import React, { useState, useEffect } from 'react';
// import React, { useMemo,useState } from "react"
// import React, { useState, useCallback } from 'react';
import React, { useReducer } from 'react';


// function Hooks1() {

// useEffect hook

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//   });

//   return (
//     <>
//       <p>Mouse over count is {count} times</p>
//       <button onMouseOver={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </>
//   );
// }

// useRef hook

//     const inputEl = useRef(null);
//     const onButtonClick = () => {
//       inputEl.current.focus();
//     };
//     return (
//       <>
//         {/* <input ref={inputEl} type="text" /> */}
//         <select ref={inputEl}> 
//         <option>select</option></select>
//         <button onClick={onButtonClick}>Focus the input</button>
//       </>
//     );
//   }


// useMemo hook

//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(1);

//   const results = (number1, Number2) => {
//     return number1 + number2;
//   };

//   const result = useMemo(() => results(number1, number2), [number1, number2]);

//   return (
//     <div>
//       <p>Number1: {number1}</p>
//       <p>Number2: {number2}</p>
//       <p>Result: {result}</p>
//       <button onClick={() => setNumber1(number1 + 1)}>Increment </button>
//       <button onClick={() => setNumber2(number2 - 1)}>Decrement </button>
//     </div>
//   );
// }


// usecallback hook

// import React, { useState, useCallback } from 'react';
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');
//   const handleClick = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []);
//   const handleChange = useCallback((e) => {
//     setMessage(e.target.value);
//   }, []);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increment</button>

//       <input type="text" value={message} onChange={handleChange} />
//       <p>Message: {message}</p>
//     </div>
//   );

// }

// usereducer hook

function decrement(state, action) {
  if (action.type === 'reduction') {
    return {
      num: state.num - 1
    };
  }
}

 function Hooks1() {
  const [state, dispatch] = useReducer(decrement, { num: 50 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'reduction' })
      }}>
        Decrement 
      </button>
      <p>Number {state.num}</p>
    </>
  );
}



export default Hooks1
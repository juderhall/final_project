import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("")
  
  const getData = async () => {
    const res = await axios.get('/profile')
    setMessage(res.data.message)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <p>Our message is {message}</p>
      <div>
        <input
          type="text"
          id="message"
          name="message"
          //onChange={handleChange}
          value={message}
        />
      <h2>Message: {message}</h2>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

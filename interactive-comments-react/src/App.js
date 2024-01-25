import React, { useState, useEffect } from 'react';



function App() {

  const [data, setData] = useState();

  useEffect(() => {
      fetch('data.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.comments)
      setData(data.comments)
    })
    .catch(err => {
      console.log(err.message)
    })
  
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;

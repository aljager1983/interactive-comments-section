import React, { useState, useEffect } from 'react';

const dataFetch = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('data.json')
      .then(res => {
        console.log("data fetching success")
        return res.json();
      })
      .then(data => {
        console.log(data.comments[0].content)
        setData(data)
      })
      .catch(err => {
        console.log(err.message)
      })
    
    }, [])

    return (
        <div className="main">

        </div>
      );
}

export default dataFetch;
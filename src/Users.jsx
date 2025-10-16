import React, { useEffect, useState } from 'react'


function Users(){
    var [data,setData] = useState([])
    async function fetchData(){
        var result = await fetch("https://fakestoreapi.com/users")
        var myresult = await result.json()
        setData(myresult)
        console.log(data);

    }

    // UseEffect isused to perform the sideeffects 
    // to handle the api calls 

    useEffect(()=>{
        fetchData()
    },[])



    return(
        <div id='main'>
            {
                data.map((item)=>{
                    return(
                        <div className='' key={item.address}>
                            <h1>{item.city}</h1>
                            <h1>{item.id}</h1>
                            <h2> {item.username}</h2>
                            <h2>{item.email}</h2>
                            <h2> {item.password}</h2>
                            <h2> {item.name.firstname}</h2>
                            <h2> {item.name.lastname}</h2>

                            
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Users
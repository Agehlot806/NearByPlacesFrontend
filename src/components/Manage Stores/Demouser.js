import React from 'react'
import { useState } from 'react'

const Demouser = () => {
    const [UserData, setuserDaTa] = useState([])
    const allUser = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallusers`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("tsaryhxdashgxfahsxasx", responsive);
                setuserDaTa(responsive.users)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    console.log("tarun login", UserData);
    return (
        <>
            <h1>hello</h1>
            <button onClick={allUser}>click</button>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">user</th>
                        <th scope="col">User data</th>

                    </tr>
                </thead>
                <tbody>
                    {UserData.map((items, index) => (
                        // console.log("tarunbirlasd", items)
                        <tr key={index}>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Demouser
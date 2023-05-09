import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'


function Users() {
    // const {_id}=useParams()
    useEffect(() => {
        allUser()

    }, [])
    const [updatedata, setUpdatedata] = useState([])

    const [UserData, setuserDaTa] = useState([])
    const allUser = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallusers`)
            .then((res) => res.json())
            .then((responsive) => {
                // console.log("tsaryhxdashgxfahsxasx", responsive);
                setuserDaTa(responsive.users)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    const alluserupdate = (id) => {
        console.log("event-value and id", id)
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateuserrole/${id}`, {
            method: 'PUT',
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((responsive) => {
                console.log("tsaryhxdashgxfahsxasx", responsive);
                // setRolevalue(responsive.role)
                // setuserDaTa(responsive.users)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    // console.log("tarun login", UserData);
    const [rolevalue, setRolevalue] = useState("")
    const [updateRole, setupdateRole] = useState(false)

    const handlerrole = (event) => {
        // console.log("idd", _id,event);
        setRolevalue(event.target.value)
        // setupdateRole(true)
        // alluserupdate(id);
    }
    console.log("value----==", rolevalue);
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <div className="box-title" style={{ width: '100%' }}>
                                                <div className=" row ">
                                                    <div className="pull-left col-md-6 mt-1">
                                                        <h3><b>Users</b></h3>
                                                        {/* <button onClick={allUser}>click</button> */}

                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/User-add' className="ml-2 btn btn-flat">
                                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope='col'>image</th>
                                                            <th scope="col">user</th>
                                                            <th scope="col">User email</th>
                                                            <th scope="col">User role</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {UserData.map((items, index) => (
                                                            // console.log("tarunbirlasd", items)
                                                            <tr key={index}>
                                                                <td><img src={items.AdminAvatar.url} alt=''
                                                                /></td>
                                                                <td>{items.name}</td>
                                                                <td>{items.email}</td>
                                                                <td>{items.role}</td>
                                                                <td>
                                                                    <select onChange={handlerrole}
                                                                        value={rolevalue}
                                                                    >
                                                                        <option>choose...</option>
                                                                        <option value={items._id}>Admin</option>

                                                                        <option value={items._id}>staff</option>
                                                                        <option value={items._id}>user</option>
                                                                    </select>

                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Users
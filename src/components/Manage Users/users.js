import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import axios from 'axios'
import fileDownload from 'js-file-download'
const options = [
    { id: 'admin', role: 'Admin' },
    { id: 'user', role: 'User' },
    { id: 'staff', role: 'Staff' }
]
function Users() {

    const [Id, setId] = useState(null);
    const [model, setModel] = useState(false)
    const [rolevalue, setRolevalue] = useState("")
    const [updateRole, setupdateRole] = useState(false)
    const [role, setRole] = useState("");
    const [sucMsg, setSucMsg] = useState(false);
    const [msg, setMsg] = useState("");

    const [UserData, setuserDaTa] = useState([])

    useEffect(() => {
        allUser()

    }, [])

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
    const handleUpdateRole = (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateuserrole/${id}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                role: role
            }),
            headers: headers,
        })
            .then((res) => res.json())
            .then((responsive) => {
                setSucMsg(responsive.success);
                setMsg(responsive.message);
                allUser();
            })
            .catch((error) => {
                console.log("error", error);
            })
    }


    const handleChange = (event) => {
        setRolevalue(true);
        setRole(event.target.value);

    };
    const openModel = (data) => {
        setId(data._id);
        setRole(data.role);
        setModel(!model);
    }
    const AlluserDownload=(e)=>{
        e.preventDefault()
      axios({
        url:"https://nearbyplaceadminpanner.onrender.com/api/v1/getusercsvdata",
        method:"GET",
        responsetype:"blob"
       }).then((res)=>{
        console.log(res);
        fileDownload(res.data,"usersData.csv")
       })
    }

const userDownload =(id, e)=>{
    console.log(id);
    e.preventDefault()
    axios({
        url:`https://nearbyplaceadminpanner.onrender.com/api/v1/getusercsvdata/${id}`,
        method:"GET",
        responseType:"blob"
    }).then((res)=>{
        fileDownload(res.data,"usersData.csv")
    })

}

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
                                                                    <span className="ml-2 btn btn-flat"><i onClick={(e)=>AlluserDownload(e)} className="fa fa-download" aria-hidden="true" /></span>

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
                                                            <th scope='col'>Image</th>
                                                            <th scope="col">User Name</th>
                                                            <th scope="col">User email</th>
                                                            <th scope="col">User role</th>
                                                            <th scope="col">Dowanload</th>

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
                                                                <td>{items.role}
                                                                    <i className="fa fa-pencil-square-o" style={{ margin: "20px" }} onClick={() => openModel(items)} />
                                                                    <i className="text-green fa fa-check"></i>
                                                                  
                                                                </td>
                                                                <td>
                                                                <span><i onClick={(e)=>userDownload(items._id,e)} className="fa fa-download" aria-hidden="true" /></span>
                                                                </td>

                                                                <td>
                                                                </td>

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <Modal isOpen={model} toggle={openModel}>
                                        <ModalHeader toggle={openModel}>User Edit Role</ModalHeader>
                                        <ModalBody>
                                            <div><span className='text-danger'>{msg ? msg : ""}</span></div>
                                            <div className="select-container">
                                                <select value={role} onChange={handleChange}>
                                                    {options.map((option) => (
                                                        <option value={option.id}>{option.role}</option>
                                                    ))}
                                                </select>
                                            </div>

                                        </ModalBody>
                                        <ModalFooter>
                                            <div className='user-head'>
                                                <Button color="primary" onClick={() => handleUpdateRole(Id)}>
                                                    Update
                                                </Button>
                                                <Button color="secondary" onClick={openModel}>
                                                    Cancel
                                                </Button>
                                            </div>

                                        </ModalFooter>
                                    </Modal>
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

export default Users;
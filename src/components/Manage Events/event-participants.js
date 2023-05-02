import React, { useState, useEffect } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import { Button } from 'reactstrap';
import dateFormat from 'dateformat';;


function Eventparticipants() {
    const { _id } = useParams();
    const [Id, setId] = useState("");
    const [participant, setParticipant] = useState([]);
    const [response, setResponse] = useState([]);
    


    const handleDeleteParticipant = (id) => {
        console.log(id);
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allparticipant?eventId=${_id}&id=${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
                setResponse(resp);
                toast.error("Event Deleted Successfully");
                getparticipant();

            })

    }
    const toggleEventModel = (id, e) => {
        handleDeleteParticipant(id)
    }
    const getparticipant =()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allparticipant?id=${_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setParticipant(data.usersparticipated);

            })
    }
    useEffect(() => {
       
     getparticipant();
    }, []);

    // console.log(participant[1].map(item=>(
    //     item.name
    // )));
    return (
        <>
            <Toaster />
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
                                                        <h3><b>Participants</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/store-add-new' className="ml-2 btn btn-flat">
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
                                                            <th scope='col'><input type="checkbox" /></th>
                                                            <th scope="col">#ID</th>
                                                            <th scope="col">User</th>
                                                            <th scope="col">Event</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                            <th scope="col">
                                                                <select className="form-control">
                                                                    <option selected>Choose...</option>
                                                                    <option>One Option</option>
                                                                    <option>Multi Option</option>
                                                                </select>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {participant.length > 0 && participant.map((item, index) =>
                                                            <tr key={index}>
                                                                <td></td>
                                                                <td>{index + 1}</td>
                                                                {/* <td>{item.user}</td> */}
                                                                <td>{item.name}</td>
                                                                <td>{item.eventname?item.eventname:""}</td>
                                                                <td>{dateFormat(item.datebegin, "dS mmmm , yyyy")} To {dateFormat(item.dateend, "dS mmmm , yyyy")}</td>

                                                                <td>{item.status === true ? <span className='Enabled-btn'>Enabled</span> : <span className='Disabled-btn'>Disabled</span>}</td>
                                                                <td><Button onClick={(e) => toggleEventModel(item._id, e)}><i class="fa fa-trash-o" /></Button></td>
                                                            </tr>
                                                        )}
                                                        {
                                                             participant.length === 0 && 
                                                            <tr className="text-center">
                                                                <td colSpan={7}>No Data Available</td>
                                                            </tr>
                                                        }

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
        </>
    )
}

export default Eventparticipants;
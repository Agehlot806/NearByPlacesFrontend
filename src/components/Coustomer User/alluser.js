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
function Alluser() {

  
  

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


// const [currentpage, setCurrentPage] = useState(1)
//     const recordpage = 10;
//     const Lastindex = currentpage * recordpage;
//     const Firstindex = Lastindex - recordpage;
//     const records = UserData.slice(Firstindex, Lastindex);
//     const npage = Math.ceil(UserData.length / recordpage)
//     const numbers = [...Array(npage + 1).keys()].slice(1)


//     const chnacPage = (pageNo) => {
//         setCurrentPage(pageNo);
//         const startIndex = (pageNo - 1) * recordpage;
//         const pagined = (UserData).slice(startIndex).take(recordpage).value();
//         setCurrentPage(pagined)
//     }

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
                                                                    <Link to='/user-new-add' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Dowanload</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {UserData.map((items, index) => (
                                                            // console.log("tarunbirlasd", items)
                                                            <tr key={index}>
                                                                <td><img src={items.adminavatar} alt=''
                                                                /></td>
                                                                <td>{items.name}</td>
                                                                <td>{items.email}</td>
                                                                <td>
                                                                <span><i onClick={(e)=>userDownload(items._id,e)} className="fa fa-download" aria-hidden="true" /></span>
                                                                </td>

                                                                <td>
                                                                </td>

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                        {/* <nav className='d-flex  justify-content-center' >
                                                        <ul className='pagination  table-pagination'>

                                                            {
                                                                numbers.map((nn, ii) => (
                                                                    <li className={`page-link ${currentpage === nn ? 'active' : "page-item"}`} key={ii}>
                                                                        <a onClick={() => chnacPage(nn)}>{nn}</a>
                                                                    </li>
                                                                ))
                                                            }


                                                        </ul>
                                                    </nav> */}
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

export default Alluser;
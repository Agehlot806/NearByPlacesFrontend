import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'

const Booktable = () => {
    const {_id}=useParams();
    console.log("ididididid booking",_id)
    const[tablenum,setTableNum]=useState()
    const[price,setPrice]=useState()
    const[title,setTitle]=useState()
    const[maxpeople,setMaxPeople]=useState()
    const[desc,setDesc]=useState()
    const Bookingtable =()=>{
            let Data = {
                title:title,
                price:price,
                maxPeople:maxpeople,
                desc:desc,
                number:tablenum,
            }
           
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };
            fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/createtable/${_id}`, {
                method: 'POST',
                body: JSON.stringify(Data),
                headers: headers,
            })
                .then((Response) => Response.json())
                .then((Response) => {
                    setTableNum(Response.tableNumbers)
                    console.log('RESPONSE apiiii-11111111------------->>>>', Response)
                    
                  
                })
                .catch((error) => {
                    console.error("ERROR FOUND" + error);
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
                                            <h3><b>Table-Booking</b></h3>
                                        </div>

                                        {/* <div className='row'>
                                            <div className='col-sm-3'>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose..Day.</option>
                                                    <option>Sunday</option>
                                                    <option>Monday</option>
                                                    <option>Tuesday</option>
                                                    <option>Wednesday</option>
                                                    <option>Thursday</option>
                                                    <option>Friday</option>
                                                    <option>Saturday</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-3'>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Select a time open</option>
                                                    <option>10am</option>
                                                    <option>11am</option>
                                                    <option>12pm</option>
                                                    <option>1pm</option>
                                                    <option>2pm</option>
                                                    <option>3pm</option>
                                                    <option>4pm</option>
                                                    <option>5pm</option>
                                                    <option>6pm</option>
                                                    <option>7pm</option>
                                                    <option>8pm</option>
                                                    <option>9pm</option>
                                                    <option>10pm</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-3'>
                                                <select id="inputState" className="form-control">
                                                    <option selected>select a time close</option>
                                                    <option>10am</option>
                                                    <option>11am</option>
                                                    <option>12pm</option>
                                                    <option>1pm</option>
                                                    <option>2pm</option>
                                                    <option>3pm</option>
                                                    <option>4pm</option>
                                                    <option>5pm</option>
                                                    <option>6pm</option>
                                                    <option>7pm</option>
                                                    <option>8pm</option>
                                                    <option>9pm</option>
                                                    <option>10pm</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-3'>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Select a Party Size</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>

                                                </select>
                                            </div>
                                        </div> */}
                                        <div className='booking-area'>
                                            <div className='available-area'>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        className='all-create-checkbox' />
                                                    <label>Available Table</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        className='all-create-checkbox' />
                                                    <label>UnAvailable Table</label>

                                                </div>
                                            </div>
                                            <div className='row'>

                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <div data-toggle="modal" data-target="#exampleModal" className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </div>
                                                        <p> Table-1</p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <h3 className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </h3>
                                                        <p> Table-2</p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <h3 className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </h3>
                                                        <p> Table-3</p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <h3 className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </h3>
                                                        <p> Table-4</p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <h3 className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </h3>
                                                        <p> Table-5</p>
                                                    </div>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <div className='booking-area'>
                                                        <h3 className='icon-area'>
                                                            <i class="fa fa-table" aria-hidden="true"></i>
                                                        </h3>
                                                        <p> Table-6</p>
                                                    </div>
                                                </div>

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


            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-label" id='booking-name'>Title</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <input placeholder="Enter name" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-label" id='booking-name'>Price</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <input placeholder="Enter price" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-label" id='booking-name'>MaxPeople</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <input placeholder="Enter max-people" value={maxpeople} onChange={(e)=>setMaxPeople(e.target.value)}  type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-label" id='booking-name'>Table-No.</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <input placeholder="Enter table-number" value={tablenum} onChange={(e)=>setTableNum(e.target.value)}  type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="form-label" id='booking-name'>Description</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <input placeholder="Enter description" value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cansel</button>
                                <button type="button" className="btn btn-primary" onClick={Bookingtable} >Save Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booktable
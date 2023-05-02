import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

const Booktable = () => {
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

export default Booktable
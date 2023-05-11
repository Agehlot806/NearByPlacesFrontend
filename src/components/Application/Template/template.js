import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

const Template = () => {
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
                                    <div className='add-card'>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#Template" role="tab" aria-controls="nav-home" aria-selected="true">Template</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#themeOptions" role="tab" aria-controls="nav-profile" aria-selected="false">themeOptions</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Header" role="tab" aria-controls="nav-contact" aria-selected="false">Home-Header</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Banner" role="tab" aria-controls="nav-contact" aria-selected="false">Home-Banner</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#Join" role="tab" aria-controls="nav-profile" aria-selected="false">Home-Joinus</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#CSS" role="tab" aria-controls="nav-contact" aria-selected="false">CSS</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Javascript" role="tab" aria-controls="nav-contact" aria-selected="false">Javascript</a>

                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="Template" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <h1>Template</h1>
                                                            <img src='template-icon.jpg' alt='' />
                                                            <p>NearbyStores V1.0 <br />light<br />v1.2.4112</p>
                                                            <br/>
                                                            <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>
                                                        </div>
                                                        
                                                        
                                                                        
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="themeOptions" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>ThemeOptions</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label>Color </label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Font</label>
                                                                            <select id="inputState" className="form-control">
                                                                                <option selected>Choose...</option>
                                                                                <option>...</option>
                                                                                <option>...</option>
                                                                                <option>...</option>


                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Favicon</label>
                                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Light Logo </label>
                                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Dark Logo</label>
                                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>MobileLogo</label>
                                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="Header" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>Home-Header</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label>Title </label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label>Sub_Title</label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Background </label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="Banner" role="tabpanel" aria-labelledby="nav-contact-tab">

                                                <form>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>Home - Banner</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                    <div className="form-group">
                                                                            <label>Active</label>
                                                                            <select id="inputState" className="form-control">
                                                                                <option selected>Choose...</option>
                                                                                <option>Yes</option>
                                                                                <option>No</option>


                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Title </label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label>Description</label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Image </label>
                                                                            <input type="file" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>


                                            </div>
                                            <div className="tab-pane fade" id="Join" role="tabpanel" aria-labelledby="nav-contact-tab">
                                            <form>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>Home - Join Us</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                    <div className="form-group">
                                                                            <label>Active</label>
                                                                            <select id="inputState" className="form-control">
                                                                                <option selected>Choose...</option>
                                                                                <option>Yes</option>
                                                                                <option>No</option>


                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Title </label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label>Description</label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Image </label>
                                                                            <input type="file" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>



                                            </div>
                                            <div className="tab-pane fade" id="CSS" role="tabpanel" aria-labelledby="nav-contact-tab">


                                            <form>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>Custom CSS</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                   
                                                                        <div className="form-group">
                                                                            <label>Custom CSS </label>
                                                                            <textarea rows={20} type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="tab-pane fade" id="Javascript" role="tabpanel" aria-labelledby="nav-contact-tab">

                                            <form>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className="product-list-box">
                                                                <div className="product-list-box-header">
                                                                    <h3><b>Custom Javascript</b></h3>
                                                                </div>
                                                                <div className="product-card-body">
                                                                    <form>
                                                                   
                                                                        <div className="form-group">
                                                                            <label>Custom Javascript </label>
                                                                            <textarea rows={20} type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>

                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'>Save</a>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>


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

export default Template
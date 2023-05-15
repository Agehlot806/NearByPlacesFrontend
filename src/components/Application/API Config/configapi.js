import React from 'react'
import Navbar from '../../../directives/navbar';
import Sidebar from '../../../directives/sidebar';
import Footer from '../../../directives/footer';


const Configapi = () => {

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
                          <div className='col-sm-6'>
                            
                            <h3>APP Client APIs</h3>
                            <div className='col-sm-12'>
                            <label>BASE_URL</label>
                            <input type="text" className="form-control" placeholder="Enter..." />
                          </div>
                          <div className='col-sm-12'>
                            <label>BASE_URL_API</label>
                            <input type="text" className="form-control" placeholder="Enter..." />
                          </div>
                          </div>

                          <div className='col-sm-6'>
                            <h3>App Licences</h3>
                            <div className='col-sm-12'>
                            <label>Generated API for NearbyStores Android</label>
                            <input type="text" className="form-control" placeholder="Enter..." />
                          </div>
                          <div className='col-sm-12'>
                            <label>Generated API for NearbyStores iOS</label>
                            <input type="text" className="form-control" placeholder="Enter..." />
                          </div>
                          <div className='col-sm-12'>
                            <label>Generated API for NearbyStores WEB</label>
                            <input type="text" className="form-control" placeholder="Enter..." />
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
      </div>
      <Footer />
    </>
  )
}

export default Configapi;
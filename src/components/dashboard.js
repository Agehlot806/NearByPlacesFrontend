import React from 'react'
import Sidebar from '../directives/sidebar'
import Navbar from '../directives/navbar'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Footer from '../directives/footer'


function Dashboard() {
    const optionOne = {
        animationEnabled: true,
        exportEnabled: true,
        // theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: "Overview"
        },
        axisY: {
            suffix: "%"
        },
        axisX: {
            // title: "Week of Year",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }]
    }

    const optionTwo = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Reservations"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Direct" },
                { y: 49, label: "Organic Search" },
                { y: 9, label: "Paid Search" },
                { y: 5, label: "Referral" },
                { y: 19, label: "Social" }
            ]
        }]
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
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#dd4b39' }}>
                                        <div className='inner'>
                                            <h3>362</h3>
                                            <p>Stores</p>
                                        </div>
                                        <div className='icon'>
                                        <i className="mdi mdi-storefront-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#009dff' }}>
                                        <div className='inner'>
                                            <h3>19</h3>
                                            <p>Offers</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-percent-box-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#00a65a' }}>
                                        <div className='inner'>
                                            <h3>7</h3>
                                            <p>Events</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-calendar-month-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#f39c12' }}>
                                        <div className='inner'>
                                            <h3>3536</h3>
                                            <p>Users</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-account-circle-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#ff0061' }}>
                                        <div className='inner'>
                                            <h3>14</h3>
                                            <p>Discussions</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-chat-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#ff7701' }}>
                                        <div className='inner'>
                                            <h3>78</h3>
                                            <p>Campaigns</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-square-rounded-badge-outline" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='chartOne'>
                                        <CanvasJSChart options={optionOne} />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-8'>
                                    <div className='chartOne'>
                                        <CanvasJSChart options={optionTwo} />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{color:'#ff851b'}}>
                                            <h3><b>0</b></h3>
                                            <p>Pending reservation(s)</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{color:'#00a65a'}}>
                                            <h3><b>0</b></h3>
                                            <p>Pending reservation(s)</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{color:'#dd4b39'}}>
                                            <h3><b>0</b></h3>
                                            <p>Pending reservation(s)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Recently Added</b></h3>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="product-list-box-body">
                                            <ul className="products-list product-list-in-box">
                                                <li className="product-list-item">
                                                    <div className="product-img">
                                                        <img src="assets/images/img/img1.jpeg" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="" className="product-title">Beuty
                                                            <span className="badge bg-green pull-right" style={{ color: '#dd15b9' }}>Beauty</span></a>
                                                        <span className="product-description">
                                                            london peris                                                  </span>
                                                    </div>
                                                </li>
                                                <li className="product-list-item">
                                                    <div className="product-img">
                                                        <img src="https://demo.webox360.win/nearby-stores/uploads/images/168068927490561/200_200.jpeg" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="" className="product-title">Daliya
                                                            <span className="badge bg-green pull-right" style={{ color: '#1a85ed' }}>Clothes</span></a>
                                                        <span className="product-description">
                                                            DEIRA DUBAI                                                  </span>
                                                    </div>
                                                </li>
                                                <li className="product-list-item">
                                                    <div className="product-img">
                                                        <img src="https://demo.webox360.win/nearby-stores/uploads/images/168019326058125/200_200.png" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="" className="product-title">DMA IMÓVEIS
                                                            <span className="badge bg-green pull-right" style={{ color: '#000000' }}>Gym</span></a>
                                                        <span className="product-description">
                                                            Avenida nossa senhora do Amparo
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="product-list-item">
                                                    <div className="product-img">
                                                        <img src="https://demo.webox360.win/nearby-stores/uploads/images/168011414943365/200_200.jpeg" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="" className="product-title">EZichoice
                                                            <span className="badge bg-green pull-right" style={{ color: '#1a85ed' }}>Clothes</span></a>
                                                        <span className="product-description">
                                                            maha manaweriya,rajakadhaluwa,puttalam road,chilaw                                                  </span>
                                                    </div>
                                                </li>
                                                <li className="product-list-item">
                                                    <div className="product-img">
                                                        <img src="https://demo.webox360.win/nearby-stores/uploads/images/167927113151032/200_200.jpeg" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="" className="product-title">Selim
                                                            <span className="badge bg-green pull-right" style={{ color: '#e2800d' }}>Restaurant</span></a>
                                                        <span className="product-description">
                                                            BERGSLAGSVAGEN 42
                                                        </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                            </ul>
                                        </div>
                                        {/* /.box-body */}
                                        <div className="product-list-box-footer">
                                            <a href="">view more </a>
                                        </div>
                                        {/* /.box-footer */}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><i className="fa fa-comments-o" aria-hidden="true" /> <b>Last reviews</b></h3>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="product-list-box-body product-dash-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href='#'><b>Nihat</b></a><br />
                                                                <a href='#'>Simple to Food</a><br />
                                                                Super guzel
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href='#'><b>Sabri22</b></a><br />
                                                                <a href='#'>Radisson Blu Hotel</a><br />
                                                                test
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href='#'><b>Hind</b></a><br />
                                                                <a href='#'>KFC Aîn Diab</a><br />
                                                                Bad service
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href='#'><b>Necati</b></a><br />
                                                                <a href='#'>Yemen kahvesi antalya</a><br />
                                                                vay amk
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* /.box-body */}
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

export default Dashboard
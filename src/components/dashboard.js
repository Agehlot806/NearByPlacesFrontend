import React, { useEffect, useState } from 'react'
import Sidebar from '../directives/sidebar'
import Navbar from '../directives/navbar'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Footer from '../directives/footer'
import axios, { all } from 'axios'

import { Bar } from 'react-chartjs-2';
// import axios from 'axios';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
// Register the required elements and scales
Chart.register(CategoryScale, LinearScale, BarElement);


function Dashboard() {

    const [storecont, setStorecont] = useState("")
    const [offercont, setOffercont] = useState("")
    const [eventcont, setEventcont] = useState("")
    const [usercont, setUsercont] = useState("")
    const [reversedata, setReverseData] = useState([])
    const [reverslast, setReverselast] = useState([])
    const[confirmed,setconfirmed]=useState([])
    const [pending,setpending]=useState([])

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


    const [graphData, setGraphData] = useState([]);
    useEffect(() => {
        // Fetch the graph data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://nearbyplaceadminpanner.onrender.com/api/v1/getgraphdata');
                setGraphData(response.data.graphData);
            } catch (error) {
                console.error('Error fetching graph data:', error);
            }
        };
        fetchData();
    }, []);
    // Extract the labels and counts from the graph data
    const labels = graphData.map((data) => data.label);
    const counts = graphData.map((data) => data.count);
    // Create the chart data
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Graph Data',
                data: counts,
                backgroundColor: '#5a189a',
                borderColor: '#5a189a ',
                borderWidth: 1,
            },
        ],
    };
    // Define chart options
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        allcounts()
        allStore()
        allreviewa()
        myBooking()
    }, [])
    const allcounts = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getdashboarddata`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((response) => {
                // console.log("tarunall", response);
                setStorecont(response.store)
                setOffercont(response.offer)
                setEventcont(response.event)
                setUsercont(response.user)
            }).catch((error) => {
                console.log(error);
            })
    }
   
    const allStore = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstorerev`)
            .then((res) => res.json())
            .then((responsive) => {
                // console.log("reversedata",responsive.store);
                setReverseData(responsive.store)

            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    const allreviewa = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allreview`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("reviewsreviewsreviewsreviews", responsive.reviews);
                setReverselast(responsive.reviews)

            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    
    const myBooking = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/admin/bookings`)

            .then((res) => res.json())
            .then((response) => {
                console.log("respo booking", response);
               setconfirmed(response.confirmed)
               setpending(response.pending)
            }).catch((error) => {
                console.log("error", error);
            })
    }
    // console.log("reversedatareversedata",reversedata);
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
                                            <h3>{storecont}</h3>
                                            <p>Merchant</p>
                                        </div>
                                        <div className='icon'>
                                            <i className="mdi mdi-storefront-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='dash-box' style={{ color: '#009dff' }}>
                                        <div className='inner'>
                                            <h3>{offercont}</h3>
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
                                            <h3>{eventcont}</h3>
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
                                            <h3>{usercont}</h3>
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
                                        {/* <Bar data={chartData} options={chartOptions} /> */}
                                        {/* <CanvasJSChart options={optionTwo} /> */}
                                        <Bar data={chartData} options={chartOptions} />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{ color: '#ff851b' }}>
                                                <h3><b>{pending}</b></h3>
                                                <p>Pending reservation(s)</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{ color: '#00a65a' }}>
                                                <h3><b>{confirmed}</b></h3>
                                                <p>Confirmed reservation(s)</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='chart-card' style={{ color: '#dd4b39' }}>
                                                <h3><b>0</b></h3>
                                                <p>Canceled reservation(s)

                                                </p>
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

                                            <div className="product-list-box-body main-table">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered">

                                                        <tbody>
                                                            {reversedata.map((items, index) => (
                                                                <tr>
                                                                    <td><img src={items.storephoto} alt='' /></td>
                                                                    <td>{items.storeownername}</td>
                                                                    <td>{items.latitude}</td>
                                                                    <td><span className='Enabled-btn'>{items.category.categoryname}</span></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-list-box-footer">
                                            <a href="">view more </a>
                                        </div>
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
                                                        {reverslast.map((items, index) => (


                                                            <tr key={index}>
                                                                <td><img src={items.image} /></td>
                                                                <td>
                                                                    <a href='#'><b>{items.name}</b></a><br />
                                                                    <a href='#'>{items.comment}</a><br />
                                                                    Super guzel
                                                                </td>
                                                                <td>
                                                                    {items.rating}
                                                                </td>
                                                            </tr>
                                                        ))}


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
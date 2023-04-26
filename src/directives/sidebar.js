import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/side-nav.css";
const Sidebar = () => {
    const [managestores, setManageStores] = useState(false);
    const [offers, setOffers] = useState(false);
    const [manageEvents, setManageEvents] = useState(false);
    const [reservations, setReservations] = useState(false);
    const [campaigns, setCampaigns] = useState(false);
    const [manageUsers, setManageUsers] = useState(false);
    const [payment, setPayment] = useState(false);
    const [mobileSlider, setMobileSlider] = useState(false);
    const [cms, setCMS] = useState(false);
    const [application, setApplication] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    function toggleManageStores() {
        setManageStores(!managestores);
    }

    function toggleOffers() {
        setOffers(!offers);
    }

    function toggleManageEvents() {
        setManageEvents(!manageEvents);
    }

    function toggleReservations() {
        setReservations(!reservations);
    }

    function toggleCampaigns() {
        setCampaigns(!campaigns);
    }

    function toggleManageUsers() {
        setManageUsers(!manageUsers);
    }
    function togglePayment() {
        setPayment(!payment);
    }
    function toggleMobileSlider() {
        setMobileSlider(!mobileSlider);
    }
    function toggleCMS() {
        setCMS(!cms);
    }
    function toggleApplication() {
        setApplication(!application);
    }
    return (
        <>
            {/*sidebar start*/}
            <div className="sidebar">
                <Link to="/dashboard"><i class="fa fa-line-chart"></i><span>&nbsp;&nbsp;Dashboard</span></Link>
                <a onClick={toggleManageStores}><i className="fa fa-archive" aria-hidden="true" />
                    <span>&nbsp;&nbsp;Manage Stores</span>
                    <i className={`arrow-icon fa fa-angle-left ${managestores ? 'rotate' : ''}`} />
                </a>
                {managestores && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/all-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All stores</span></Link></li>
                            <li><Link to='/my-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My stores</span></Link></li>
                            <li><Link to='/store-add-new' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={toggleOffers}><i className="mdi mdi-sale " />
                    <span>&nbsp;&nbsp;Offers</span>
                    <i className={`arrow-icon fa fa-angle-left ${offers ? 'rotate' : ''}`} />
                </a>
                {offers && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/all-offers' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All Offers</span></Link></li>
                            <li><Link to='/my-offer' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My Offers</span></Link></li>
                            <li><Link to='/offer-add-new'><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={toggleManageEvents}><i className="fa fa-calendar" aria-hidden="true" />
                    <span>&nbsp;&nbsp;Manage Events </span>
                    <i className={`arrow-icon fa fa-angle-left ${manageEvents ? 'rotate' : ''}`} />
                </a>
                {manageEvents && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/all-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All events</span></Link></li>
                            <li><Link to='/my-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My events</span></Link></li>
                            <li><Link to='/event-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={toggleReservations}><i className="fa fa-calendar-o" aria-hidden="true" />
                    &nbsp;&nbsp;<span>Reservations</span>
                    <i className={`arrow-icon fa fa-angle-left ${reservations ? 'rotate' : ''}`} />
                </a>
                {reservations && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/all-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All reservations</span></Link></li>
                            <li><Link to='/my-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My reservations</span></Link></li>
                        </ul>
                    </div>
                )}
                <Link to="/my-bookings"><i className="fa fa-shopping-bag" aria-hidden="true" />&nbsp;&nbsp;<span>My bookings</span></Link>
                <a onClick={toggleCampaigns}><i className="fa fa-bullseye" aria-hidden="true" />
                    &nbsp;&nbsp;<span>Campaigns</span>
                    <i className={`arrow-icon fa fa-angle-left ${campaigns ? 'rotate' : ''}`} />
                </a>
                {campaigns && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/campaigns' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Campaigns</span></Link></li>
                            <li><Link to='/campaigns-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Create New</span></Link></li>
                        </ul>
                    </div>
                )}
                <Link to="/message"><i className="fa fa-comments-o" aria-hidden="true" />&nbsp;&nbsp;<span>Messages</span></Link>
                <a onClick={toggleManageUsers}><i className="fa fa-users" aria-hidden="true" />
                    &nbsp;&nbsp;<span>Manage Users</span>
                    <i className={`arrow-icon fa fa-angle-left ${manageUsers ? 'rotate' : ''}`} />
                </a>
                {manageUsers && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/users' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Users</span></Link></li>
                            <li><Link to='/group-access' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Group Access</span></Link></li>
                            <li><Link to='/User-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={togglePayment}><i className="fa fa-credit-card" aria-hidden="true" />
                    &nbsp;&nbsp;<span>Payment </span>
                    <i className={`arrow-icon fa fa-angle-left ${payment ? 'rotate' : ''}`} />
                </a>
                {payment && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/invoice' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Invoices</span></Link></li>
                            <li><Link to='/payment-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Payment config</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={toggleMobileSlider}><i className="fa fa-picture-o" aria-hidden="true" />
                    &nbsp;&nbsp;<span>Mobile Slider</span>
                    <i className={`arrow-icon fa fa-angle-left ${mobileSlider ? 'rotate' : ''}`} />
                </a>
                {mobileSlider && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/all-slider' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All sliders</span></Link></li>
                            <li><Link to='/slider-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                        </ul>
                    </div>
                )}
                <Link to="/media"><i className="fa fa-folder-open-o" aria-hidden="true" />&nbsp;&nbsp;<span>Media</span></Link>
                <Link to="/payout"><i className="fa fa-money" aria-hidden="true" />&nbsp;&nbsp;<span>Payouts</span></Link>
                <a onClick={toggleCMS}><i className="fa fa-clone" aria-hidden="true" />
                    <span>&nbsp; CMS & Pages</span>
                    <i className={`arrow-icon fa fa-angle-left ${cms ? 'rotate' : ''}`} />
                </a>
                {cms && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/manage-pages' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage pages</span></Link></li>
                            <li><Link to='/manage-menu' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage menu</span></Link></li>
                        </ul>
                    </div>
                )}
                <a onClick={toggleApplication}><i className="fa fa-cog" aria-hidden="true" />
                    <span>&nbsp;&nbsp;Application</span>
                    <i className={`arrow-icon fa fa-angle-left ${application ? 'rotate' : ''}`} />
                </a>
                {application && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><Link to='/global-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Global config</span></Link></li>
                            <li><Link to='/currencies' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Currencies</span></Link></li>
                            <li><Link to='/' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>User Settings</span></Link></li>
                            <li><Link to='/subscription' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Subscription</span></Link></li>
                            <li><Link to='/google-map-api' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Google Maps Api</span></Link></li>
                            <li><Link to='/mail-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Mail config</span></Link></li>
                            <li><Link to='/categories' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Categories</span></Link></li>
                            <li><Link to='/language' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Languages</span></Link></li>
                            <li><Link to='/template' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Template</span></Link></li>

                        </ul>
                    </div>
                )}



            </div>
            {/*sidebar end*/}

            {/*mobile navigation bar start*/}
            <div className="mobile_nav">
                <div className="nav_bar" onClick={toggleMenu}>
                    {/* <img src="https://www.clipartmax.com/png/middle/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png" className="mobile_profile_image" alt="" /> */}
                    <i className="fa fa-bars nav_btn" />

                </div>
                {showMenu && (
                    <div className='mobile-menus'>
                        <ul>
                            <li> <Link to="/dashboard"><i class="fa fa-line-chart"></i><span>&nbsp;&nbsp;Dashboard</span></Link></li>
                            <li>
                                <a onClick={toggleManageStores}><i className="fa fa-archive" aria-hidden="true" />
                                    <span>&nbsp;&nbsp;Manage Stores</span>
                                    <i className={`arrow-icon fa fa-angle-left ${managestores ? 'rotate' : ''}`} />
                                </a>
                            </li>
                            {managestores && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/all-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All stores</span></Link></li>
                                        <li><Link to='/my-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My stores</span></Link></li>
                                        <li><Link to='/store-add-new' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li>
                                <a onClick={toggleOffers}><i className="mdi mdi-sale " />
                                    <span>&nbsp;&nbsp;Offers</span>
                                    <i className={`arrow-icon fa fa-angle-left ${offers ? 'rotate' : ''}`} />
                                </a>
                            </li>

                            {offers && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/all-offers' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All Offers</span></Link></li>
                                        <li><Link to='/my-offer' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My Offers</span></Link></li>
                                        <li><Link to='/offer-add-new'><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={toggleManageEvents}><i className="fa fa-calendar" aria-hidden="true" />
                                <span>&nbsp;&nbsp;Manage Events </span>
                                <i className={`arrow-icon fa fa-angle-left ${manageEvents ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {manageEvents && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/all-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All events</span></Link></li>
                                        <li><Link to='/my-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My events</span></Link></li>
                                        <li><Link to='/event-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={toggleReservations}><i className="fa fa-calendar-o" aria-hidden="true" />
                                &nbsp;&nbsp;<span>Reservations</span>
                                <i className={`arrow-icon fa fa-angle-left ${reservations ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {reservations && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/all-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All reservations</span></Link></li>
                                        <li><Link to='/my-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My reservations</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><Link to="/my-bookings"><i className="fa fa-shopping-bag" aria-hidden="true" />&nbsp;&nbsp;<span>My bookings</span></Link></li>
                            <li><a onClick={toggleCampaigns}><i className="fa fa-bullseye" aria-hidden="true" />
                                &nbsp;&nbsp;<span>Campaigns</span>
                                <i className={`arrow-icon fa fa-angle-left ${campaigns ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {campaigns && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/campaigns' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Campaigns</span></Link></li>
                                        <li><Link to='/campaigns-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Create New</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><Link to="/message"><i className="fa fa-comments-o" aria-hidden="true" />&nbsp;&nbsp;<span>Messages</span></Link></li>
                            <li><a onClick={toggleManageUsers}><i className="fa fa-users" aria-hidden="true" />
                                &nbsp;&nbsp;<span>Manage Users</span>
                                <i className={`arrow-icon fa fa-angle-left ${manageUsers ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {manageUsers && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/users' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Users</span></Link></li>
                                        <li><Link to='/group-access' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Group Access</span></Link></li>
                                        <li><Link to='/User-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={togglePayment}><i className="fa fa-credit-card" aria-hidden="true" />
                                &nbsp;&nbsp;<span>Payment </span>
                                <i className={`arrow-icon fa fa-angle-left ${payment ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {payment && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/invoice' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Invoices</span></Link></li>
                                        <li><Link to='/payment-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Payment config</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={toggleMobileSlider}><i className="fa fa-picture-o" aria-hidden="true" />
                                &nbsp;&nbsp;<span>Mobile Slider</span>
                                <i className={`arrow-icon fa fa-angle-left ${mobileSlider ? 'rotate' : ''}`} />
                            </a></li>
                            {mobileSlider && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/all-slider' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All sliders</span></Link></li>
                                        <li><Link to='/slider-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></Link></li>
                                    </ul>
                                </div>
                            )}
                           <li><Link to="/media"><i className="fa fa-folder-open-o" aria-hidden="true" />&nbsp;&nbsp;<span>Media</span></Link></li> 
                           <li><Link to="/payout"><i className="fa fa-money" aria-hidden="true" />&nbsp;&nbsp;<span>Payouts</span></Link></li>
                            <li><a onClick={toggleCMS}><i className="fa fa-clone" aria-hidden="true" />
                                <span>&nbsp; CMS & Pages</span>
                                <i className={`arrow-icon fa fa-angle-left ${cms ? 'rotate' : ''}`} />
                            </a></li>
                            {cms && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/manage-pages' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage pages</span></Link></li>
                                        <li><Link to='/manage-menu' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage menu</span></Link></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={toggleApplication}><i className="fa fa-cog" aria-hidden="true" />
                                <span>&nbsp;&nbsp;Application</span>
                                <i className={`arrow-icon fa fa-angle-left ${application ? 'rotate' : ''}`} />
                            </a></li>
                            {application && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><Link to='/global-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Global config</span></Link></li>
                                        <li><Link to='/currencies' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Currencies</span></Link></li>
                                        <li><Link to='/' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>User Settings</span></Link></li>
                                        <li><Link to='/subscription' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Subscription</span></Link></li>
                                        <li><Link to='/google-map-api' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Google Maps Api</span></Link></li>
                                        <li><Link to='/mail-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Mail config</span></Link></li>
                                        <li><Link to='/categories' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Categories</span></Link></li>
                                        <li><Link to='/language' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Languages</span></Link></li>
                                        <li><Link to='/template' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Template</span></Link></li>

                                    </ul>
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            {/*mobile navigation bar end*/}
        </>

    )
}

export default Sidebar
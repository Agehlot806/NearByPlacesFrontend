import React, { useState } from 'react'

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
                <a href="dashboard"><i class="fa fa-line-chart"></i><span>&nbsp;&nbsp;Dashboard</span></a>
                <a onClick={toggleManageStores}><i className="fa fa-archive" aria-hidden="true" />
                    <span>&nbsp;&nbsp;Manage Stores</span>
                    <i className={`arrow-icon fa fa-angle-left ${managestores ? 'rotate' : ''}`} />
                </a>
                {managestores && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><a href='all-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All stores</span></a></li>
                            <li><a href='my-stores' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My stores</span></a></li>
                            <li><a href='store-add-new' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></a></li>
                            <li><a href='checkout-fields' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Checkout Fields</span></a></li>
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
                            <li><a href='all-offers' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;All Offers</span></a></li>
                            <li><a href='my-offer' ><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;My Offers</span></a></li>
                            <li><a href='offer-add-new'><i className="fa fa-circle" aria-hidden="true" /><span>&nbsp;&nbsp;Add new</span></a></li>
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
                            <li><a href='all-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All events</span></a></li>
                            <li><a href='my-events' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My events</span></a></li>
                            <li><a href='event-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></a></li>
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
                            <li><a href='all-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All reservations</span></a></li>
                            <li><a href='my-reservations' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>My reservations</span></a></li>
                        </ul>
                    </div>
                )}
                <a href="my-bookings"><i className="fa fa-shopping-bag" aria-hidden="true" />&nbsp;&nbsp;<span>My bookings</span></a>
                <a onClick={toggleCampaigns}><i className="fa fa-bullseye" aria-hidden="true" />
                &nbsp;&nbsp;<span>Campaigns</span>
                    <i className={`arrow-icon fa fa-angle-left ${campaigns ? 'rotate' : ''}`} />
                </a>
                {campaigns && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><a href='campaigns' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Campaigns</span></a></li>
                            <li><a href='campaigns-new-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Create New</span></a></li>
                        </ul>
                    </div>
                )}
                <a href="message"><i className="fa fa-comments-o" aria-hidden="true" />&nbsp;&nbsp;<span>Messages</span></a>
                <a onClick={toggleManageUsers}><i className="fa fa-users" aria-hidden="true" />
                &nbsp;&nbsp;<span>Manage Users</span>
                    <i className={`arrow-icon fa fa-angle-left ${manageUsers ? 'rotate' : ''}`} />
                </a>
                {manageUsers && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><a href='users' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Users</span></a></li>
                            <li><a href='group-access' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Group Access</span></a></li>
                            <li><a href='User-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></a></li>
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
                            <li><a href='invoice' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Invoices</span></a></li>
                            <li><a href='payment-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Payment config</span></a></li>
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
                            <li><a href='all-slider' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>All sliders</span></a></li>
                            <li><a href='slider-add' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Add New</span></a></li>
                        </ul>
                    </div>
                )}
                <a href="media"><i className="fa fa-folder-open-o" aria-hidden="true" />&nbsp;&nbsp;<span>Media</span></a>
                <a href="payout"><i className="fa fa-money" aria-hidden="true" />&nbsp;&nbsp;<span>Payouts</span></a>
                <a onClick={toggleCMS}><i className="fa fa-clone" aria-hidden="true" />
                    <span>&nbsp; CMS & Pages</span>
                    <i className={`arrow-icon fa fa-angle-left ${cms ? 'rotate' : ''}`} />
                </a>
                {cms && (
                    <div className="sidebar-dropdown">
                        <ul>
                            <li><a href='manage-pages' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage pages</span></a></li>
                            <li><a href='manage-menu' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Manage menu</span></a></li>
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
                            <li><a href='global-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Global config</span></a></li>
                            <li><a href='api-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>API Config</span></a></li>
                            <li><a href='currencies' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Currencies</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Deep Linking</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Cronjob</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>User Settings</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Subscription</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Google Maps Api</span></a></li>
                            <li><a href='mail-config' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Mail config</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Checkout Fields</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Categories</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Languages</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Modules Manager</span></a></li>
                            <li><a href='' ><i className="fa fa-circle" aria-hidden="true" />&nbsp;&nbsp;<span>Template</span></a></li>

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
                            <li><a href="dashboard"><i className="fa fa-home" aria-hidden="true" /><span>Dashboard</span></a></li>
                            <li><a onClick={toggleManageStores}><i className="fa fa-plus-square" aria-hidden="true" />
                                <span>Attributes</span>
                                <i className={`ml-5 fa fa-angle-left ${managestores ? 'rotate' : ''}`} />
                            </a></li>
                            {managestores && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><a href='food-attributes' ><i className="fa fa-circle" aria-hidden="true" /><span> Food Attribute</span></a></li>
                                        <li><a href='review-attributes' ><i className="fa fa-circle" aria-hidden="true" /><span> Review Attribute</span></a></li>
                                    </ul>
                                </div>
                            )}
                            <li><a onClick={toggleOffers}><i className="fas fa-credit-card" aria-hidden="true" />
                                <span>Payments</span>
                                <i className={`ml-5 fa fa-angle-left ${offers ? 'rotate' : ''}`} />
                            </a>
                            </li>
                            {offers && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><a href='payments' ><i className="fa fa-circle" aria-hidden="true" /><span> Payments</span></a></li>
                                        <li><a href='restaurants-payouts' ><i className="fa fa-circle" aria-hidden="true" /><span> Restaurants Payouts</span></a></li>
                                        <li><a href='driverpayments' ><i className="fa fa-circle" aria-hidden="true" /><span> Drivers Payments</span></a></li>
                                        <li><a href='driverpayouts' ><i className="fa fa-circle" aria-hidden="true" /><span> Drivers Payout</span></a></li>
                                        <li><a href='wallet-transaction' ><i className="fa fa-circle" aria-hidden="true" /><span> Wallet Transaction</span></a></li>
                                        <li><a href='payoutrequests' ><i className="fa fa-circle" aria-hidden="true" /><span> Payout Requests</span></a></li>
                                    </ul>
                                </div>
                            )}
                            <li><a href="users"><i className="fa fa-users" aria-hidden="true" /><span>Users</span></a></li>
                            <li><a href="restaurants"><i className="fa fa-shopping-bag" aria-hidden="true" /><span>Restaurants</span></a></li>
                            <li><a href="drivers"><i className="fa fa-car" aria-hidden="true" /><span>Drivers</span></a></li>
                            <li><a href="categories"><i className="fa fa-clipboard" aria-hidden="true" /><span>Categories</span></a></li>
                            <li><a href="foods"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>Foods</span></a></li>
                            <li><a href="orders"><i className="fa fa-book" aria-hidden="true" /><span>Orders</span></a></li>
                            <li><a href="coupons"><i className="fa fa-compass" aria-hidden="true" /><span>Coupons</span></a></li>
                            <li><a href="notification"><i className="fas fa-table" aria-hidden="true" /><span>Notification</span></a></li>
                            <li><a href="banner-items"><i className="fa fa-clipboard" aria-hidden="true" /><span>Banner Items</span></a></li>
                            <li><a href="CMS"><i className="fas fa-book" aria-hidden="true" /><span>CMS Pages</span></a></li>
                            <li> <a onClick={toggleManageEvents}><i className="fas fa-cogs" aria-hidden="true" />
                                <span>Setting</span>
                                <i className={`ml-5 fa fa-angle-left ${manageEvents ? 'rotate' : ''}`} />
                            </a></li>
                            {manageEvents && (
                                <div className="sidebar-dropdown">
                                    <ul>
                                        <li><a href='' ><i className="fa fa-circle" aria-hidden="true" /><span> Global Settings</span></a></li>
                                        <li><a href='currencies' ><i className="fa fa-circle" aria-hidden="true" /><span> Currencies</span></a></li>
                                        <li><a href='payment-method' ><i className="fa fa-circle" aria-hidden="true" /><span> Payment Methods</span></a></li>
                                        <li><a href='admin-commission' ><i className="fa fa-circle" aria-hidden="true" /><span> Admin Commission</span></a></li>
                                        <li><a href='radius-configuration' ><i className="fa fa-circle" aria-hidden="true" /><span> Radius configuration</span></a></li>
                                        <li><a href='DINE-IN' ><i className="fa fa-circle" aria-hidden="true" /><span> DINE IN feature setting</span></a></li>
                                        <li><a href='tax-setting' ><i className="fa fa-circle" aria-hidden="true" /><span> Tax Setting</span></a></li>
                                        <li><a href='delivery-charge' ><i className="fa fa-circle" aria-hidden="true" /><span> Delivery Charge</span></a></li>
                                        <li><a href='languages' ><i className="fa fa-circle" aria-hidden="true" /><span> Languages</span></a></li>
                                        <li><a href='special-offer' ><i className="fa fa-circle" aria-hidden="true" /><span> Special Offer</span></a></li>
                                        <li><a href='terms-and-conditions' ><i className="fa fa-circle" aria-hidden="true" /><span> Terms and Conditions</span></a></li>
                                        <li><a href='privacy-policy' ><i className="fa fa-circle" aria-hidden="true" /><span> Privacy Policy</span></a></li>
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
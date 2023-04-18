import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route,Navigate } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/sign-up';
import Dashboard from '../components/dashboard';
import Allstores from '../components/Manage Stores/allstores';
import Mystores from '../components/Manage Stores/mystores';
import Storeaddnew from '../components/Manage Stores/store-add-new';
import CheckoutFields from '../components/Manage Stores/checkout-fields';
import Checkoutfieldsedit from '../components/Manage Stores/checkout-fields-edit';
import Reviews from '../components/Manage Stores/reviews';
import Allstoresedit from '../components/Manage Stores/allstores-edit';
import Alloffers from '../components/Offers/all-offers';
import Offeraddnew from '../components/Offers/offer-add-new';
import Offerpublished from '../components/Offers/offer-published';
import Offeredit from '../components/Offers/offer-edit';
import Offerunpublished from '../components/Offers/offer-unpublished';
import Myoffers from '../components/Offers/my-offers';
import Allevents from '../components/Manage Events/all-events';
import Eventparticipants from '../components/Manage Events/event-participants';
import Eventedit from '../components/Manage Events/event-edit';
import Eventnewadd from '../components/Manage Events/event-new-add';
import Myevents from '../components/Manage Events/my-events';
import Allreservations from '../components/Reservations/allreservations';
import Myreservations from '../components/Reservations/my-reservations';
import Mybookings from '../components/My bookings/my-bookings';
import Campaigns from '../components/Campaigns/campaigns';
import Campaignnewadd from '../components/Campaigns/campaign-new-add';
import Messages from '../components/Messages/messages';
import Groupaccessadd from '../components/Manage Users/group-access-add';
import Users from '../components/Manage Users/users';
import Groupaccess from '../components/Manage Users/group-access';
import Usersnewadd from '../components/Manage Users/users-new-add';
import Invoice from '../components/Payment/invoice';
import Paymentconfig from '../components/Payment/payment-config';
import Allslider from '../components/Mobile Slider/all-slider';
import Profile from '../components/profile';
import Forgotpassword from '../components/forgot-password';
import Slidernewadd from '../components/Mobile Slider/slider-new-add';
import Media from '../components/media/media'
import Medianew from '../components/media/media-new'
import Sliderview from '../components/Mobile Slider/slider-view';
import Slideredit from '../components/Mobile Slider/slider-edit';
import Payouts from '../components/Payouts/payouts';
import Payoutadd from '../components/Payouts/payout-add';
import Payoutedit from '../components/Payouts/payout-edit';
import Managepages from '../components/CMS & Pages/manage-pages';
import Managepageadd from '../components/CMS & Pages/manage-page-add';
import Managepageedit from '../components/CMS & Pages/manage-page-edit';
import Managemenu from '../components/CMS & Pages/manage-menu';
import Useredit from '../components/Manage Users/user-edit';
import Globalconfig from '../components/Application/global-config';
import APIconfig from '../components/Application/API-config';
import Currencies from '../components/Application/currencies';

function RouterComponent (){
	const [user, setUser] = useState(null);

    const getUser = async () => {
		try {
			const url = `${'http://localhost:9000'}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
			console.log(data)
		} catch (err) {
			console.log(err);
		}
	};
    useEffect(() => {
		getUser();
	}, []);

    return (
        <>
            <Routes>
            <Route
					exact
					path="/"
					element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
				/>
                <Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
                {/* <Route path='/' element={<Login />} /> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/all-stores' element={<Allstores />} />
                <Route path='/all-store-edit' element={<Allstoresedit />} />
                <Route path='/my-stores' element={<Mystores />} />
                <Route path='/store-add-new' element={<Storeaddnew />} />
                <Route path='/checkout-fields' element={<CheckoutFields />} />
                <Route path='/checkout-field-edit' element={<Checkoutfieldsedit />} />
                <Route path='/review' element={<Reviews />} />

                <Route path='/all-offers' element={<Alloffers />} />
                <Route path='/my-offer' element={<Myoffers />} />
                <Route path='/offer-add-new' element={<Offeraddnew />} />
                <Route path='/offer-published' element={<Offerpublished />} />
                <Route path='/offer-unpublished' element={<Offerunpublished />} />
                <Route path='/offer-edit' element={<Offeredit />} />

                <Route path='/all-events' element={<Allevents />} />
                <Route path='/my-events' element={<Myevents />} />
                <Route path='/event-participants' element={<Eventparticipants />} />
                <Route path='/event-new-add' element={<Eventnewadd />} />
                <Route path='/event-edit' element={<Eventedit />} />

                <Route path='/all-reservations' element={<Allreservations />} />
                <Route path='/my-reservations' element={<Myreservations />} />

                <Route path='/my-bookings' element={<Mybookings />} />

                <Route path='/campaigns' element={<Campaigns />} />
                <Route path='/campaigns-new-add' element={<Campaignnewadd />} />

                <Route path='/message' element={<Messages />} />

                <Route path='/users' element={<Users />} />
                <Route path='/group-access' element={<Groupaccess />} />
                <Route path='/group-access-add' element={<Groupaccessadd />} />
                <Route path='/User-add' element={<Usersnewadd />} />
                <Route path='/user-edit' element={<Useredit />} />


                <Route path='/invoice' element={<Invoice />} />
                <Route path='/payment-config' element={<Paymentconfig />} />

                <Route path='/all-slider' element={<Allslider />} />
                <Route path='/slider-add' element={<Slidernewadd />} />
                <Route path='/slider-view' element={<Sliderview />} />
                <Route path='/slider-edit' element={<Slideredit />} />

                <Route path='/media' element={<Media />} />
                <Route path='/media-new' element={<Medianew />} />


                <Route path='/payout' element={<Payouts />} />
                <Route path='/payout-add' element={<Payoutadd />} />
                <Route path='/payout-edit' element={<Payoutedit />} />

                <Route path='/manage-pages' element={<Managepages />} />
                <Route path='/manage-pages-add' element={<Managepageadd />} />
                <Route path='/manage-pages-edit' element={<Managepageedit />} />
                <Route path='/manage-menu' element={<Managemenu />} />

                <Route path='/global-config' element={<Globalconfig />} />
                <Route path='/api-config' element={<APIconfig />} />
                <Route path='/currencies' element={<Currencies />} />


            </Routes>
        </>
    )
}
export default RouterComponent
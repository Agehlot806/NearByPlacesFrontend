import React, { Component, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login';
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

const RouterComponent = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
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


            </Routes>
        </>
    )
}
export default RouterComponent
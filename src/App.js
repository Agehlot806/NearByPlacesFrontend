import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Allstores from './components/Manage Stores/allstores';
import Mystores from './components/Manage Stores/mystores';
import Storeaddnew from './components/Manage Stores/store-add-new';
import Reviews from './components/Manage Stores/reviews';
import Allstoresedit from './components/Manage Stores/allstores-edit';
import Alloffers from './components/Offers/alloffers';
import Offeraddnew from './components/Offers/offer-add-new';
import Offerpublished from './components/Offers/offer-published';
import Offeredit from './components/Offers/offer-edit';
import Offerunpublished from './components/Offers/offer-unpublished';
import Myoffers from './components/Offers/my-offers';
import Allevents from './components/Manage Events/all-events';
import Eventparticipants from './components/Manage Events/event-participants';
import Eventedit from './components/Manage Events/event-edit';
import Eventnewadd from './components/Manage Events/event-new-add';
import Myevents from './components/Manage Events/my-events';
import Allreservations from './components/Reservations/allreservations';
import Myreservations from './components/Reservations/my-reservations';
import Mybookings from './components/My bookings/my-bookings';
import Campaigns from './components/Campaigns/campaigns';
import Campaignnewadd from './components/Campaigns/campaign-new-add';
import Messages from './components/Messages/messages';
import Groupaccessadd from './components/Manage Users/group-access-add';
import Users from './components/Manage Users/users';
import Groupaccess from './components/Manage Users/group-access';
import Usersnewadd from './components/Manage Users/users-new-add';
import Invoice from './components/Payment/invoice';
import Paymentconfig from './components/Payment/payment-config';
import Allslider from './components/Mobile Slider/all-slider';
import Profile from './components/Profile';
import Forgotpassword from './components/forgot-password';
import Slidernewadd from './components/Mobile Slider/slider-new-add';
import Media from './components/media/media'
import Medianew from './components/media/media-new'
import Sliderview from './components/Mobile Slider/slider-view';
import Slideredit from './components/Mobile Slider/slider-edit';
import Payouts from './components/Payouts/payouts';
import Payoutadd from './components/Payouts/payout-add';
import Payoutedit from './components/Payouts/payout-edit';
import Managepages from './components/CMS & Pages/manage-pages';
import Managepageadd from './components/CMS & Pages/manage-page-add';
import Managepageedit from './components/CMS & Pages/manage-page-edit';
import Managemenu from './components/CMS & Pages/manage-menu';
import Useredit from './components/Manage Users/user-edit';
import Globalconfig from './components/Application/Global Config/global-config';
import Currencies from './components/Application/Currencies/currencies';
import Mailconfig from './components/Application/Mail Config/mail-config';
import Categories from './components/Application/Categories/categories';
import Categoriesadd from './components/Application/Categories/categories-add';
import Language from './components/Application/Language/language';
import Languageadd from './components/Application/Language/language-add';
import Languageedit from './components/Application/Language/language-edit';
import Subscription from './components/Application/Subscription/subscription';
import Subscriptionadd from './components/Application/Subscription/subscription-add';
import Subscriptionedit from './components/Application/Subscription/subscription-edit';
import Googlemapapi from './components/Application/Google Maps Api/google-map-api';
import Template from './components/Application/Template/template';
import Resetpassword from './components/reset-password';

import "./assets/css/responsive.css";
import "./assets/css/style.css"

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path='/forgot-password' component={Forgotpassword} />
          <Route exact path='/api/v1/resetpassword/:token' component={Resetpassword} />
          <Route exact path='/profile' component={Profile} />

          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/all-stores' component={Allstores} />
          <Route exact path='/all-store-edit' component={Allstoresedit} />
          <Route exact path='/my-stores' component={Mystores} />
          <Route exact path='/store-add-new' component={Storeaddnew} />
          <Route exact path='/review' component={Reviews} />

          <Route exact path='/all-offers' component={Alloffers} />
          <Route exact path='/my-offer' component={Myoffers} />
          <Route exact path='/offer-add-new' component={Offeraddnew} />
          <Route exact path='/offer-published' component={Offerpublished} />
          <Route exact path='/offer-unpublished' component={Offerunpublished} />
          <Route exact path='/offer-edit/:_id' component={Offeredit} />

          <Route exact path='/all-events' component={Allevents} />
          <Route exact path='/my-events' component={Myevents} />
          <Route exact path='/event-participants' component={Eventparticipants} />
          <Route exact path='/event-new-add' component={Eventnewadd} />
          <Route exact path='/event-edit/:_id' component={Eventedit} />

          <Route exact path='/all-reservations' component={Allreservations} />
          <Route exact path='/my-reservations' component={Myreservations} />

          <Route exact path='/my-bookings' component={Mybookings} />

          <Route exact path='/campaigns' component={Campaigns} />
          <Route exact path='/campaigns-new-add' component={Campaignnewadd} />

          <Route exact path='/message' component={Messages} />

          <Route exact path='/users' component={Users} />
          <Route exact path='/group-access' component={Groupaccess} />
          <Route exact path='/group-access-add' component={Groupaccessadd} />
          <Route exact path='/User-add' component={Usersnewadd} />
          <Route exact path='/user-edit' component={Useredit} />


          <Route exact path='/invoice' component={Invoice} />
          <Route exact path='/payment-config' component={Paymentconfig} />

          <Route exact path='/all-slider' component={Allslider} />
          <Route exact path='/slider-add' component={Slidernewadd} />
          <Route exact path='/slider-view' component={Sliderview} />
          <Route exact path='/slider-edit' component={Slideredit} />

          <Route exact path='/media' component={Media} />
          <Route exact path='/media-new' component={Medianew} />


          <Route exact path='/payout' component={Payouts} />
          <Route exact path='/payout-add' component={Payoutadd} />
          <Route exact path='/payout-edit' component={Payoutedit} />

          <Route exact path='/manage-pages' component={Managepages} />
          <Route exact path='/manage-pages-add' component={Managepageadd} />
          <Route exact path='/manage-pages-edit' component={Managepageedit} />
          <Route exact path='/manage-menu' component={Managemenu} />

          <Route exact path='/global-config' component={Globalconfig} />
          <Route exact path='/currencies' component={Currencies} />
          <Route exact path='/mail-config' component={Mailconfig} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/categories-add' component={Categoriesadd} />
          <Route exact path='/language' component={Language} />
          <Route exact path='/language-add' component={Languageadd} />
          <Route exact path='/language-edit' component={Languageedit} />
          <Route exact path='/subscription' component={Subscription} />
          <Route exact path='/subscription-add' component={Subscriptionadd} />
          <Route exact path='/subscription-edit' component={Subscriptionedit} />
          <Route exact path='/google-map-api' component={Googlemapapi} />
          <Route exact path='/template' component={Template} />


        </Switch>
      </Router>
    </>
  )
}
export default RouterComponent
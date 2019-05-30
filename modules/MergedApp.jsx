import React from 'react';
import ReactDOM from 'react-dom';

import App from "./calendar-component-kt/client/src/components/App.jsx";
import Booking from "./booking-info-service-jeff/dist/components/booking.jsx";
import ListingInfo from "./listinginfo/dist/index.jsx";
import ReviewSection from "./reviewList-ak/client/src/index.jsx";

ReactDOM.render(<App />,document.getElementById('calendar'));
ReactDOM.render(<Booking />,document.getElementById('booking'));
ReactDOM.render(<ListingInfo  />,document.getElementById('listingInfo'));
ReactDOM.render(<ReviewSection />,document.getElementById('main'));


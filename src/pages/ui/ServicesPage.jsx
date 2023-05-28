import React, { Fragment } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import FeaturesServices from '../../components/ui/services/FeaturesServices';
import StepToSevices from '../../components/ui/services/StepToSevices';
import PlaceOrderForm from '../../components/ui/form/PlaceOrderForm';

const ServicesPage = () => {
    return (
        <Fragment>
            <div style={{ backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://html.modernwebtemplates.com/gogreen/img/parallax/progress.jpg')", height: '100vh', width: '100vw', zIndex: '-999999999', position: 'fixed', bottom: '0', left: '0', backgroundPosition: 'centre'}}/>
            <PageHeader title='Sevices'/>
            <FeaturesServices/>
            <StepToSevices/>
            <PlaceOrderForm/>
        </Fragment>
    );
}

export default ServicesPage;

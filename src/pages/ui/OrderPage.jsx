import React, { Fragment } from 'react';
import PlaceOrderForm from '../../components/ui/form/PlaceOrderForm';
import PageHeader from '../../components/ui/PageHeader';

const OrderPage = () => {
    return (
        <Fragment>
            <PageHeader title='Request a Pickup'/>
            <PlaceOrderForm/>
        </Fragment>
    );
}

export default OrderPage;

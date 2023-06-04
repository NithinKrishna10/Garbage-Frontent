import React, { Fragment, useEffect } from 'react';
import PlaceOrderForm from '../../components/ui/form/PlaceOrderForm';
import PageHeader from '../../components/ui/PageHeader';
import { verifyToken } from '../../utils/Constant';
const OrderPage = () => {

    useEffect(() => {
        const token = Cookies.get("jwt");
        if (!token) {
    
          navigate('/login')
        } else {
          axios
            .get(verifyToken, {
              headers: {
                Authorization: `${token}`,
              },
            })
            .then((response) => {
              console.log(response);
              // setUserState(response.data.user)1n
            //   dispatch(setUserDetails(response.data.user));
            });
        }
      },[]);
    
    return (
        <Fragment>
            <PageHeader title='Request a Pickup'/>
            <PlaceOrderForm/>
        </Fragment>
    );
}

export default OrderPage;

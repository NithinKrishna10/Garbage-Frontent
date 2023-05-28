import React, { Fragment } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import RegisterForm from '../../components/ui/form/RegisterForm';

const RegisterPage = () => {
    return (
        <Fragment>
            <PageHeader/>
            <RegisterForm/>
        </Fragment>
    );
}

export default RegisterPage;

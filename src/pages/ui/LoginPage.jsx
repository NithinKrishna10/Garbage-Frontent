import React, { Fragment } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import LoginForm from '../../components/ui/form/LoginForm';

const LoginPage = () => {
    return (
        <Fragment>
            <PageHeader title="Login"/>
            <LoginForm/>
        </Fragment>
    );
}

export default LoginPage;

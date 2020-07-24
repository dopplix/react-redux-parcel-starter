import React from 'react';
import NavContainer from '../components/NavContainer';

export default ({pageComponent : PageComponent}) => {
    return (
        <div>
            <NavContainer></NavContainer>
            <PageComponent></PageComponent>
        </div>
    );
};

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header'
import Footer from './footer'

// lower case functional components
// import header and footer here
// TODO: add class component if you need lifecycle methods before this
// TODO: import common App styles here

const layout = props => {

    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    );

};

layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default layout;

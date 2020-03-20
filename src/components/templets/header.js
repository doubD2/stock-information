import React, { Component } from 'react';

class Header extends Component {

    headerStyle = {
        padding: '156px 0 100px'
    }
    render() {
        return(
            <header class="bg-primary text-white" style={this.headerStyle}>
                <div class="container text-center">
                <h1>실시간 주가 정보 안내</h1>
                <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
                </div>
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import * as post from '../services/posts'

class Stock extends Component {

    sectionStyle = {
        padding: '150px 0'
    }

    render() {

        post.getSise('035720');
        
        return(
            <section id="stock" style={this.sectionStyle}>
            </section>
        );
    }
}

export default Stock;
import React, { Component } from 'react';

function testFunction() {
    console.log('test');
}

function testFunction2() {
    console.log('test2');
}

class functionTest extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

export { testFunction, testFunction2 };
export default functionTest;
import React, { Component } from 'react';

function testFunction() {
    console.log('test');
}

function testFunction2() {
    console.log('test2');
}

class ComponentTest2 extends Component {
    render() {
        return (
            <div>
                <h1>Test2 Component</h1>
                <h1>전달받은 name : {this.props.name}</h1>
                <h1>전달받은 num  : {this.props.num}</h1>
            </div>
        )
    }
}

class TestInnerClass extends Component {
    render() {
        return (
            <h1>Test Inner Class Component</h1>
        )
    }
}

export { TestInnerClass, testFunction, testFunction2 };
export default ComponentTest2;
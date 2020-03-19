import React, { Component } from 'react';
import ComponentTest2, { TestInnerClass } from './componentTest2.js'
import * as FucntionTest from './functionTest.js'

function f1() {
    console.log('f1');
}

class ComponentTest extends Component {

    state = {
        num : 10
    }

    changeState = () => {
        // render 함수 호출로 페이지 갱신
        this.setState({
            num : this.state.num + 1
        })
    }

    n1 = 10;

    changeState2 = () => {
        // 필드 변수만 변경되며 페이지 갱신하지 않음
       this.n1++;
    }

    render() {
        f1();
        FucntionTest.testFunction();
        FucntionTest.testFunction2();
        return (
            <div>
                <h1>Test Component</h1>
                <ComponentTest2 name='props Test' num={10}></ComponentTest2>
                <TestInnerClass></TestInnerClass>
                <h1>{this.state.num}</h1>
                <button onClick={this.changeState}>버튼</button>
                <h1>{this.n1}</h1>
                <button onClick={this.changeState2}>버튼</button>
            </div>
        )
    }
}

export default ComponentTest;
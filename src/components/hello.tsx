import * as React from "react";
import '../../style/index.css';
import Test from './test.js';
export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    constructor(props:any){
        super(props)
    }
    click(event:MouseEventInit){
        alert(1);
    }
    render() {
        return <h1 className="hello" onClick={(event)=>this.click(event)}>Hello from {this.props.compiler} and {this.props.framework} <Test/>!</h1> ;
    }
}
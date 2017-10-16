import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="TS" />,
    document.getElementById("example") as HTMLElement
);
// class MyClass extends React.Component<any, any> {
//     render() {
//         return <h1>hello {this.props.name}</h1>;  
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     ReactDOM.render(<MyClass name="Tom" />, document.body);
// });

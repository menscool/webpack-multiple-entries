import React from "react";
import {render} from 'react-dom';
import {IndexPage} from "./component";

render(<IndexPage />, document.querySelector('#app'))

console.log('Some initializations here...')

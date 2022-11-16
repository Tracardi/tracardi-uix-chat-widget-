import React from 'react';
import "regenerator-runtime/runtime";
import Rss from "./Rss";

function App({domElement}) {

    const attribute = domElement.getAttribute("data-attribute") || "I am test attribute"
    return <Rss/>

}

export default App;

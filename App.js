import React from "react"
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById("root"));
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        [React.createElement("h1",{},"Its an H1 Tag"),
         React.createElement("h2",{},"Its an H2 tag")
        ]
    ])
)
root.render(parent)
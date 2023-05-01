import React from 'react'
import './Scriptedit.css'
import { createReactEditorJS } from "react-editor-js";


import { EDITOR_JS_TOOLS } from "./constants";


const Scriptedit = () => {

    const ReactEditorJS = createReactEditorJS();


    return (
        <div>
            <ReactEditorJS
                editable={false}
                tools={EDITOR_JS_TOOLS}
                defaultValue={{
                    blocks: [
                        {
                            id: "sheNwCUP5A",
                            type: "paragraph",
                            data: {
                                text: "Asking for contact details"
                            }
                        },
                        {
                            id: "12iM3lqzcm",
                            type: "paragraph",
                            data: {
                                text:
                                    "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
                            }
                        },
                        {
                            id: "fvZGuFXHmK",
                            type: "paragraph",
                            data: {
                                text: "Hello, Kindly provide your phone number, email etc"
                            }
                        },
                        {
                            id: "xnPuiC9Z8M",
                            type: "paragraph",
                            data: {
                                text: "Asking for what product or service he is looking for"
                            }
                        },
                        {
                            id: "-MhwnSs3Dw",
                            type: "paragraph",
                            data: {
                                text: "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
                            }
                        },
                        {
                            id: "Ptb9oEioJn",
                            type: "paragraph",
                            data: {
                                text:
                                    'Asking what brings him here'
                            }
                        },
                        {
                            id: "-J7nt-Ksnw",
                            type: "paragraph",
                            data: {
                                text:
                                    'Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc.'
                            }
                        },
                        {
                            id: "SzwhuyoFq6",
                            type: "paragraph",
                            data: {
                                text: "Hello, I will need your contact details to update the further process. Kindly provide your phone number, email etc."
                            }
                        }
                    ]
                }}

            />
        </div>
    )
}
export default Scriptedit
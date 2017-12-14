import React from "react";

const contactContent = (props) => {
    return (
        <div className="roboto-content content">
            <h2>Contact info</h2>
            <p>
                Contact me by
                
                , or send me
                a message with the form below.
            </p>
            <form action="https://formspree.io/andy.finnell@gmail.com" method="POST">
                <div>
                    <label id="name">Name: </label>
                    <input id="name" type="text" name="name"/>
                </div>
                <div>
                    <label id="email">Email: </label>
                    <input id="email" type="email" name="email"/>
                </div>
                <div>
                    <label id="company">Company: </label>
                    <input id="company" type="text" name="compnay"/>
                </div>
                <textarea name="content"></textarea>
                <div><button type="submit">Submit</button></div>
            </form>
            <button class="close" onClick={props.clicked}>Close</button>
        </div>
    );
};

export default contactContent;
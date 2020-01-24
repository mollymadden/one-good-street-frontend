import React, { useState } from "react";
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import Adminav from '../Admin/admin-nav';
import axios from 'axios'



function Getinvolved() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/YOUR_FORM_ID",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <div>
            <Header />
            <Adminav />
            <Title title="Get Involved!" />

            <form onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit" disabled={serverState.submitting}>
                    Submit
          </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Getinvolved;
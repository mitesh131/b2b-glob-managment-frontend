import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import {toast} from 'react-toastify'
//import Loader from "react-js-loader";
const cookies = new Cookies();


function UpdateCookieModal(props) {

    const [cookie, setCookie] = useState('');


    const submitte = () => {

        var ssid = cookies.get('sid');
        props.setLoading(true);
        if (cookie != "") {
            axios.post('https://liveapi247.live/api4/updatecookie', {
                sid: ssid,
                cookie: cookie,
            }).then(result => {
                props.setLoading(false);
                if (result.status == "200") {
                    toast.success('Cookie Update successfully!!', {position: toast.POSITION.TOP_CENTER});
                    props.close(false)
                } else {
                    toast.error('Something went wrong!!', {position: toast.POSITION.TOP_CENTER});
                }

            }).catch(e => {
                props.setLoading(false);
            });

        } else toast.success('Must Enter Cookie..', {position: toast.POSITION.TOP_CENTER});


    }


    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
            <div class="biab_body biab_fluid" id="biab_body">
                <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver">

                </div>
                <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog"
                     style={{display: 'block'}}>
                    <div className="biab_modal-dialog" id="dialogpop">
                        <div className="biab_modal-content js-modal-content">
                            <div className="biab_modal-header js-modal-header">
                                <button onClick={() => props.close(false)} type="button" className="biab_close js-close"
                                        data-dismiss="modal" aria-label="Close">
                                    <i class="fas fa-times"></i></button>
                                <h4 className="biab_modal-title">Update Cookie</h4>
                            </div>
                            <div className="biab_modal-body biab_rules-modal-body js-modal-body"
                                 style={{height: "71px"}}>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Cookie</label>
                                    <div class="search-wrap" id="userSearchUl">
                                        <div>
                                            <input class="search-input" id="cookie" type="text" value={cookie}
                                                   onChange={(e) => setCookie(e.target.value)}/>
                                            <button class="search-but" id="searchUserId" onClick={() => {
                                                submitte()
                                            }}>Update
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="biab_modal-backdrop biab_fade biab_in js-backdrop"/>
                </div>
            </div>
            </body>
        </React.Fragment>
    )
}

export default UpdateCookieModal;

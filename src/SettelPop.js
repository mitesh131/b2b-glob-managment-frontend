import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
//import Loader from "react-js-loader";
const cookies = new Cookies();




function SettelPop(props) {

    const event_id = props.event_id;

    const [mmpassword, setmmpassword] = useState('');

    useEffect(() => {
        document.getElementById("password").select();
        var input = document.getElementById('password');
        // input.addEventListener('keyup', function (event) {
        //     if (event.keyCode == 13) {
        //         // event.preventDefault();
        //         //console.log(mmpassword);
        //         submitte();

        //     }
        // });


        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                submitte();
            }

        });
    }, []);






    const submitte = () => {
        var num1 = (document.getElementById("password").value);
        var ssid = cookies.get('sid');
        props.setrefresh(true);
        if (num1 != "") {
            axios.post('https://liveapi247.live/api4/MatchSettled', {
                sid: ssid,
                pass: mmpassword,
                eventId: event_id,
            }).then(result => {
                if (result.status == "200") {
                    props.function_update_settelmentList();
                    toast.success('Market Settle successfully!!', { position: toast.POSITION.TOP_CENTER });
                    props.setrefresh(false);
                }
                if (result.status == "212") toast.warn('Some Fancy and ,market are undecleared So, first Decleaed rest market and fancy Than Settle the Final Market !!', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "400") toast.warn('Market settle failed', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "211") { toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER }); }
                if (result.status == "214" || result.status == "215") { toast.warn('Market is Already Settled!!', { position: toast.POSITION.TOP_CENTER }); }

                props.setrefresh(false);

            }).catch(e => { });

        } else toast.success('Must Enter Password to decleard..', { position: toast.POSITION.TOP_CENTER });
        props.setopenSettlepop(false);

    }



    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver">

                    </div>
                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop">
                            <div className="biab_modal-content js-modal-content">
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.setopenSettlepop(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">Settle Market</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "71px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Password</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <input class="search-input" id="password" type="text" value={mmpassword} onChange={(e) => setmmpassword(e.target.value)} />
                                            <button class="search-but" id="searchUserId" onClick={() => { submitte() }}>Submit</button>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div></div>
                        <div className="biab_modal-backdrop biab_fade biab_in js-backdrop" /></div>
                </div>
            </body>
        </React.Fragment>
    )
}

export default SettelPop

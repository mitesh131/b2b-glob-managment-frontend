import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
//import Loader from "react-js-loader";


const cookies = new Cookies();
export default function ReversePremium({onHide, teamName, eventId, marketId, marketName, setLoading}) {
    // const event_id = props.eventId;
    // const selection_id = props.selectionId;
    // const run = props.run;

    const [mmpassword, setmmpassword] = useState('');

    // useEffect(() => {
    //     document.getElementById("password").select();
    //     var input = document.getElementById('password');
    //     input.addEventListener("keyup", function (event) {
    //         if (event.keyCode === 13) {
    //             event.preventDefault();
    //             submitte();
    //         }
    //     });
    // }, []);


    const submit = () => {
        var password = (document.getElementById("password").value);
        var ssid = cookies.get('sid');
        // props.setFancyRefresh(true)
        if (password) {
            setLoading(true)
            // if (run) {
            axios.post('https://liveapi247.live/api6/reverse_prem_result', {
                // sid: ssid,
                password,
                teamName: Number(teamName),
                eventId,
                marketId
            }).then(result => {
                setLoading(false)
                if (result.status == "200") {
                    // props.DeclareModfancy(false);
                    toast.success('Fancy declared successfully!!', { position: toast.POSITION.TOP_CENTER });
                    // props.mfancy();
                    // props.setFancyRefresh(false)
                    window.location.reload();
                }

                if (result.status == "400") toast.warn('Fancy declare failed', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "211") { toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER }); }
            })
            // }
            // else {
            //     props.setFancyRefresh(false);
            //     toast.warn('Must Enter run to decleard the fancy', { position: toast.POSITION.TOP_CENTER });
            // }
        }
        else {
            // props.setFancyRefresh(false);
            toast.error('Must Enter Password to decleard..', { position: toast.POSITION.TOP_CENTER });
        }
        // props.DeclareModfancy(false);

    }


    return (
        <React.Fragment>
            {/*<body class="biab_fluid_body biab_desktop">*/}
            <div class="biab_body biab_fluid" id="biab_body">
                {/*<div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver">*/}
                {/*</div>*/}
                <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                    <div className="biab_modal-dialog" id="dialogpop">
                        <div className="biab_modal-content js-modal-content">
                            <div className="biab_modal-header js-modal-header">
                                <button onClick={() => onHide() } type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                    <i class="fas fa-times"></i></button>
                                <h4 className="biab_modal-title" style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                    {/*{props.Fancy_Name}*/}
                                    {marketName}
                                    {/*&nbsp;=&nbsp;&nbsp;<span style={{ fontSize: '15px', fontWeight: 'bold', color: 'black' }}>*/}
                                    {/*run*/}
                                    {/*</span>*/}
                                </h4>
                            </div>
                            <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "71px" }} >
                                <div class="form-group"><label class="col-sm-2 control-label">Password</label>
                                    <div class="search-wrap" id="userSearchUl"><div>
                                        <input class="search-input" id="password" type="text" value={mmpassword} onChange={(e) => setmmpassword(e.target.value)} />
                                        <button class="search-but" id="searchUserId" onClick={() => submit()}>Submit</button>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div></div>
                    <div className="biab_modal-backdrop biab_fade biab_in js-backdrop" /></div>
            </div>
            {/*</body>*/}
        </React.Fragment>

    )
}

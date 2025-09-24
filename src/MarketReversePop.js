import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';


const cookies = new Cookies();

function MarketReversePop(props) {

    const event_id = props.Mcalcleeid;
    const mid_id = props.Mcalclesid;
    const [mmpassword, setmmpassword] = useState();

    const submit = () => {
        var ssid = cookies.get('sid');
        props.setrefresh(true);

        var ssid = cookies.get("sid");
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/ReverseMatch", {
            sid: ssid,
            pass: mmpassword,
            eventId: event_id,
            marketId: mid_id
        })
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Market Reverse Successfully!!', { position: toast.POSITION.TOP_CENTER })
                    props.updatemanrket();
                    props.setrefresh(false);

                }
                if (result.status == "400") toast.warn('Market Reverse failed', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "211") { toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER }); }
            })
            .catch((e) => { });




        props.setOpenMarketFancyPopup(false);


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
                                    <button onClick={() => { props.setOpenMarketFancyPopup(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">Revers Market</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "71px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Password</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <input class="search-input" id="password" type="text" value={mmpassword} onChange={(e) => setmmpassword(e.target.value)} />
                                            <button class="search-but" id="searchUserId" onClick={() => { submit() }}>Submit</button>
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

export default MarketReversePop

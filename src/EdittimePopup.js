import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'


const cookies = new Cookies();

function EdittimePopup(props) {
    var E_Name = props.EventName;
    var Event_id = props.Event_ID;
    var M_Time = props.marketTime;


    useEffect(() => {
        document.getElementById("new_t").select();

    }, [])


    const submitte = () => {
        var ssid = cookies.get('sid');
        var editdate = document.getElementById("new_t").value;
        axios.post('https://liveapi247.live/api4/changeTimedate', {
            sid: ssid,
            eventId: Event_id,
            marketStartTime: editdate,
        }).then(result => {
            if (result.status === 200) {
                toast.success('Market Time change successfully!!', { position: toast.POSITION.TOP_CENTER });
                props.uopadtetime();
                props.setopenedittimtchange(false)

            }
        }).catch(e => { });

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
                                    <button type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close" onClick={() => { props.setopenedittimtchange(false) }}>
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title" style={{ fontSize: '15px', fontWeight: 'bold' }}>{E_Name}</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "100px" }} >
                                    <div class="form-group">
                                        <div class="search-wrap" id="userSearchUl">
                                            <div>
                                                <label class="col-sm-2 control-label">Current Time</label>
                                                <input id="cur_t" class="changetime_input" disabled type="text" defaultValue={M_Time} />
                                            </div>
                                            <div>
                                                <label class="col-sm-2 control-label">New Time &nbsp;</label>&nbsp;&nbsp;&nbsp;
                                                <input id="new_t" class="changetime_input" type="text" defaultValue={M_Time} />
                                            </div>
                                            <button class="btn_time" id="searchUserId" onClick={() => { submitte() }}>Submit</button>
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

export default EdittimePopup

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'


const cookies = new Cookies();

function EditfancynamePopup(props) {
    var FancyName = props.facnyrunnername_edit;
    var Event_id = props.fancy_e_id;
    var select_id = props.fancy_s_id;


    useEffect(() => {
        document.getElementById("new_t").select();

    }, [])


    const submitte = () => {
        var ssid = cookies.get('sid');
        var fancyname = document.getElementById("new_t").value;
        axios.post('https://liveapi247.live/api4/changerunnername', {
            sid: ssid,
            eventId: Event_id,
            selectionId: select_id,
            runnerName: fancyname,
        }).then(result => {
            if (result.status === 200) {
                props.flagtempeditfancy();
                toast.success('FancyName Change Successfully!!', { position: toast.POSITION.TOP_CENTER });


            }
        }).catch(e => { });
        props.setopenfancyeditname(false)

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
                                    <button type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close" onClick={() => { props.setopenfancyeditname(false) }}>
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title" style={{ fontSize: '15px', fontWeight: 'bold' }}>{FancyName}</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "100px" }} >
                                    <div class="form-group">
                                        <div class="search-wrap" id="userSearchUl">
                                            <div>
                                                <label class="col-sm-2 control-label">Current Time</label>
                                                <input id="cur_t" class="changetime_input" disabled type="text" defaultValue={FancyName} />
                                            </div>
                                            <div>
                                                <label class="col-sm-2 control-label">New Time &nbsp;</label>&nbsp;&nbsp;&nbsp;
                                                <input id="new_t" class="changetime_input" type="text" defaultValue={FancyName} />
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

export default EditfancynamePopup

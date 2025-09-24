import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

const cookies = new Cookies();


function CancleFancy(props) {

    const event_id = props.calcleeid;
    const selection_id = props.calclesid;
    const fancy_Dec_mode = props.fancyDelcleareMod;
    const [mmpassword, setmmpassword] = useState();
    var title_name = ""
    if (fancy_Dec_mode == 1) title_name = "Void Fancy";
    if (fancy_Dec_mode == 2) title_name = "Cancle Fancy";
    if (fancy_Dec_mode == 3) title_name = "Delete Fancy";


    const submit = () => {

        var ssid = cookies.get('sid');
        props.setFancyRefresh(true)


        if (fancy_Dec_mode == 3) {
            axios.post('https://liveapi247.live/api4/Delete_Fancy', {
                sid: ssid,
                pass: mmpassword,
                eventId: event_id,
                marketId: selection_id,
            }).then(result => {


                if (result.status === 200) {
                    toast.success('Fancy,Bet,Exposure Delete Sucessfully!!', { position: toast.POSITION.TOP_CENTER });
                    props.mfancy();
                    props.setFancyRefresh(false)
                    window.location.reload();

                }
                if (result.status == "400") toast.warn('Fancy Delete failed', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "211") { toast.warn('Wrong Password !!!', { position: toast.POSITION.TOP_CENTER }); }
            }).catch(e => { });
        }
        if (fancy_Dec_mode == 1) {

            axios.post('https://liveapi247.live/api4/FancyCancel', {
                sid: ssid,
                pass: mmpassword,
                eventId: event_id,
                marketId: selection_id,
            }).then(result => {


                if (result.status === 200) {
                    toast.success('Fancy Voided Sucessfully!!', { position: toast.POSITION.TOP_CENTER });
                    props.mfancy();
                    props.setFancyRefresh(false)
                    window.location.reload();

                }
                if (result.status == "400") toast.warn('Fancy Cancle failed', { position: toast.POSITION.TOP_CENTER });
                if (result.status == "211") { toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER }); }
            }).catch(e => { });
        }
        if (fancy_Dec_mode == 2) {
            var len_of_bet = 0;
            if (mmpassword == "5678") {

                axios.post('https://liveapi247.live/api4/DeleteFancy_cheack_betlebth', {
                    sid: ssid,
                    eventId: event_id,
                    marketId: selection_id,
                }).then(result => {
                    len_of_bet = (result.data.length);
                    if (len_of_bet > 0) {
                        toast.warn('Opps , Fancy Contain Some Bet, So Kindly go with another Action...   ', { position: toast.POSITION.TOP_CENTER });
                        props.setFancyRefresh(false);
                    }
                    else {
                        axios.post('https://liveapi247.live/api4/DeleteFancy', {
                            sid: ssid,
                            eventId: event_id,
                            selectionId: selection_id,
                        }).then(result => {


                            if (result.status === 200) {
                                toast.success('Fancy Cancle Sucessfully!!', { position: toast.POSITION.TOP_CENTER });
                                props.mfancy();
                                props.setFancyRefresh(false)
                                window.location.reload();
                            }
                            if (result.status == "400") toast.warn('Fancy Cancle failed', { position: toast.POSITION.TOP_CENTER });
                        }).catch(e => { });
                    }

                }).catch(e => { });




            }
            else {
                toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER });
                props.setFancyRefresh(false);
            }

        }
        props.setFancyRefresh(false)

        props.function_open_CancleFancy(false);

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
                                    <button onClick={() => { props.function_open_CancleFancy(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title" style={{ color: 'lightgreen' }}>{title_name} :- <span style={{ fontSize: '15px', color: 'black' }}>{props.Fancy_Name}</span></h4>
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

export default CancleFancy

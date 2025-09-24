import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
import moment from 'moment';

const cookies = new Cookies();

toast.configure()
let flag;

export const TvLinkpopup = (props) => {

    const [importScore, setimportScore] = useState([])
    const [Tv_id, setTv_id] = useState('')
    flag = props.eventt_iidd;

    useEffect(() => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/Score_TV_Detals', {
            sid: ssid,
            eventId: flag
        }).then(result => {
            setimportScore(result.data);
            document.getElementById("tv_ID").value = result.data[0].tvId;
            setTv_id(result.data[0].tvId);




        }).catch(e => { });



    }, [setimportScore]);






    const updateTv = () => {

        var ssid = cookies.get('sid');
        if (Tv_id) {
            axios.post('https://liveapi247.live/api4/importTV', {
                sid: ssid,
                tvId: Tv_id,
                eventId: flag
            }).then(result => {
                if (result.status === 200) {
                    toast.success('Tv Id Update Successfully!!', { position: toast.POSITION.TOP_CENTER })
                    props.TvClickClose(false)
                }
                else
                    toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })
                props.showTvmodel(false)
            }).catch(e => { });

        }
        else toast.warning('Must Enter Tv ID!!!', { position: toast.POSITION.TOP_CENTER })




    }

    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop" style={{ width: '300%' }}>
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver"></div>
                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop">
                            <div className="biab_modal-content js-modal-content" >
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.TvClickClose(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">TvLink</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "auto" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Tv Link</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <textarea class="search-input" type="text" name="userId" id="tv_ID" placeholder="Tv Link" defaultValue={Tv_id} onChange={(e) => setTv_id(e.target.value)} style={{ width: '300px', height: '100px', padding: '5px' }} />
                                            <button class="search-but" id="searchUserId" style={{ right: '-65px' }} onClick={() => { updateTv(); }}>Update</button>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="biab_modal-backdrop biab_fade biab_in js-backdrop" /></div>
                </div>
            </body>
        </React.Fragment>
    )
}

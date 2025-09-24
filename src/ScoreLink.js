import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
import moment from 'moment';
const cookies = new Cookies();
toast.configure()
//let flag, flag1;;


export const ScoreLink = (props) => {

    const [importScore, setimportScore] = useState([]);
    const [Score_id, setScore_id] = useState('');
    const [selectedteam, setselectedteam] = useState('');
    const event_id = props.E_id_socre;
    //console.log("flag=",event_id);
    // useEffect(() => {
    //     var ssid = cookies.get('sid');
    //     axios.post('https://liveapi247.live/api4/match_Score', {
    //         sid: ssid,
    //         eventId: flag
    //     }).then(result => {
    //         setimportScore(result.data);
    //         document.getElementById("score_ID").value = result.data[0].scoreId;
    //         setScore_id(result.data[0].scoreId);
    //     }).catch(e => { });
    // }, [setimportScore]);

    // useEffect(() => {
    //     var ssid = cookies.get('sid');
    //     axios.get("https://score.dreamipl.com/api/token/score?MatchID=" + event_id)
    //     .then(result => {
    //             //console.log(result.data);



    //     }).catch(e => { });

    // }, []);






    const updateScore = () => {
        var ssid = cookies.get('sid');
        if (Score_id) {
            // if (selectedteam) {
            axios.post('https://liveapi247.live/api4/importScoreId', {
                sid: ssid,
                scoreId: Score_id,
                eventId: event_id,
                // inn1: selectedteam,
            }).then(result => {
                if (result.status === 200) {
                    toast.success('Socre Id Update Successfully!!', { position: toast.POSITION.TOP_CENTER })
                }
                else {
                    toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })
                }
                props.showmodel(false)
            }).catch(e => { });

        } else toast.warning('Must select Any team to update the Score ID!!!', { position: toast.POSITION.TOP_CENTER })
        // } else toast.warning('Must Enter Score ID!!!', { position: toast.POSITION.TOP_CENTER })
        props.fun_ScoreClickOpen(false)

    }



    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver"></div>
                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop">
                            <div className="biab_modal-content js-modal-content" >
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.fun_ScoreClickOpen(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">ScoreLink</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "76px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Score Link</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <input class="search-input" type="text" name="userId" id="userId" placeholder="Score Id" defaultValue={Score_id} onChange={(e) => setScore_id(e.target.value)} />
                                            <button class="search-but" id="searchUserId" onClick={() => { updateScore() }}>Update</button>
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







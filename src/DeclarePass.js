import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
//import Loader from "./Loader";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createBrowserHistory as history } from 'history';





const cookies = new Cookies();
export default function DeclarePass(props) {
    const event_id = props.eventId;
    const market_id = props.marketId;
    const winnerno = props.winner;
    const lenofmarket = props.lenthofmarketlist;
    const [mmpassword, setmmpassword] = useState(0);
    const [Response, setResponse] = useState([]);
    const history = useHistory();





    const submitte = () => {

        var winnerteamName;
        var passsss = document.getElementById("password_de").value;
        var ssid = cookies.get('sid');
        if (winnerno == 1) winnerteamName = "A";
        if (winnerno == 2) winnerteamName = "B";
        if (winnerno == 3) winnerteamName = "T";
        if (winnerno == 4) winnerteamName = "N";

        props.setrefresh(true)

        axios.post('https://liveapi247.live/api4/DeclareMatch', {
            sid: ssid,
            pass: passsss,
            winnerTeam: winnerteamName,
            eventId: event_id,
            marketId: market_id,
        }).then(result => {

            if (result.status == 200) {
                toast.success('Market declared successfully!!', { position: toast.POSITION.TOP_CENTER });
                if (lenofmarket == 1)
                    history.push("/Settlement")
                else
                    props.flagtempmarket();



            }

            if (result.data == "6") toast.warn('Market already Declared!!', { position: toast.POSITION.TOP_CENTER });
            if (result.data == "300") toast.warn('Market declare failed!!', { position: toast.POSITION.TOP_CENTER });
            if (result.status == "200")
                if (result.status == "400") toast.warn('Market declare Incomplete', { position: toast.POSITION.TOP_CENTER });
            if (result.status == "211") toast.warn('Wrong Password !!', { position: toast.POSITION.TOP_CENTER });
            props.setrefresh(false)
        }).catch(e => { });

    }


    // const submitte=()=>{
    //     var passsss=document.getElementById("password_de").value;
    //     props.setPass_match_declare(passsss);
    //     props.fun_declar_match(passsss);
    //     props.DeclareMod(false)
    // }

    return (
        <React.Fragment>
            <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div>

            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver">

                    </div>
                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop">
                            <div className="biab_modal-content js-modal-content">
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.DeclareMod(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">Declear Match</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "71px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Password</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <input class="search-input" id="password_de" type="text" defaultValue="" onChange={(e) => setmmpassword(e.target.value)} />
                                            <button class="search-but" id="searchUserId" onClick={() => { submitte() }}>Update</button>
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



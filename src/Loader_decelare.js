import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


const cookies = new Cookies();
export default function Loader_decelare(props) {
    const event_id = props.eventId;
    const market_id = props.marketId;
    const [deaclerestartus, setdeaclerestartus] = useState([])
    const [d_Status, setd_Status] = useState()

    useEffect(() => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/decleared_MatchStatus', {
            sid: ssid,
            eventId: event_id,
            marketId: market_id
        }).then(result => {
            setdeaclerestartus(result.data);
            if (result.data[0].Status == "I")
                setd_Status("Match Declear In - Progress... ")
            if (result.data[0].Status == "C")
                setd_Status("Match Declear Complete... ")





        }).catch(e => { });

    }, []);

    return (
        <React.Fragment>
            <div class="bl-Preloader" id="__-plContainer">
                <div class="bl-Preloader_Header">
                    <div class="bl-Preloader_ProductHeader "></div>
                    <div class="bl-Preloader_MainHeader ">
                        <div class="bl-Preloader_MainHeaderLogo "></div>
                    </div>
                </div>
                <div class="bl-Preloader_SpinnerContainer ">
                    <div class="bl-Preloader_Spinner "></div>
                </div>
            </div>
            <div style={{
                backgroundColor: 'whitesmoke', height: '600px', width: '93%', margin: '50px', fontSize: '25px',
                fontWeight: 'bold', color: 'gray', justifyContent: 'center', display: 'flex', alignItems: 'center'
            }}>{d_Status}</div>
        </React.Fragment>
    )
}

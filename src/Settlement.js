import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import moment from 'moment';
import Switch from "react-switch";
import Bookdata from './Bookdata';
import Loader from './Loader';
import EdittimePopup from './EdittimePopup'




const cookies = new Cookies();
var CAIA = "CAIA";
const url = window.location.href;
const para = url.split('/');
const sport_id = para[4];
export const Settlement = (props) => {
    const [refresh, setrefresh] = useState(true);
    const [cricketList, setcricketList] = useState([]);
    const [reload, setreload] = useState(true);
    const [Sporttype, setSporttype] = useState(4)
    const [dec_matach_lkist, setdec_matach_lkist] = useState([])
    const [sportname, setsportname] = useState("Cricket");
    const [matchList, setmatchList] = useState([])
    const [updatemarketdate, setupdatemarketdate] = useState(false);
    const [openedittimtchange, setopenedittimtchange] = useState(false)
    const [EventName, setEventName] = useState();
    const [Event_ID, setEvent_ID] = useState();
    const [marketTime, setmarketTime] = useState()
    const [updatelogo, setupdatelogo] = useState()



    useEffect(() => {
        if (!sport_id) setSporttype(4)
        else {
            setSporttype(sport_id)
        }

        return () => { }
    }, [])

    const function_sportType = (type) => {
        setSporttype(type);
        if (type == "4") setsportname("Cricket")
        if (type == "1") setsportname("Soccer")
        if (type == "2") setsportname("Tennis")
        if (type == "7522") setsportname("BasketBall")
        if (type == "2378962") setsportname("Election")
    }

    useEffect(() => {
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/LiveMatch', {
            sid: ssid,
            eventType: Sporttype
        }).then(result => {
            setrefresh(false)
            result.data.sort(function (a, b) {
                return moment(a.marketStartTime) - moment(b.marketStartTime);
            });
            var obj = [];
            result.data.map((item) => {
                if (moment() >= moment(item.marketStartTime)) {
                    obj.push(item);
                }
            });
            setmatchList(result.data);

        }).catch(e => { });

    }, [Sporttype, updatemarketdate]);
    useEffect(() => {
        for (var i = 0; i < matchList.length; i++) {
            if (matchList[i].matchStatus == "1")
                document.getElementById("flexCheckChecked" + i).checked = true;
            if (matchList[i].BookmakerLogoStatus == "1")
                document.getElementById("B_logo" + i).checked = true;
            if (matchList[i].FancyLogoStatus == "1")
                document.getElementById("F_logo" + i).checked = true;
        }
    }, [matchList]);


    const EventstatusActiveInactive = (id, eventid, marketid) => {
        var ssid = cookies.get("sid");
        // setrefresh(true)
        axios
            .post("https://liveapi247.live/api4/MarketActiveInactive", {
                sid: ssid,
                eventId: eventid,
                marketId: marketid
            })
            .then((result) => {
                if (result.status === 200) {
                    // setrefresh(false)
                    setupdatemarketdate(!updatemarketdate);
                    // setonswitch(!onswitch)
                }
            }).catch((e) => { });
    }

    const uopadtetime = () => {
        setupdatemarketdate(!updatemarketdate);
    }

    const fun_Edit_time = (id, E_id, E_name, T) => {
        setopenedittimtchange(true);
        setEventName(E_name);
        setEvent_ID(E_id);
        setmarketTime(T);
    }


    const UpdateBmakerLogoSatus = (id, e_id, m_id) => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/OnBookmakerLogo', {
            sid: ssid,
            eventId: e_id,
            marketId: m_id,
        }).then(result => {
            if (result.status === 200) {
                // setupdatemarketdate(!updatemarketdate);
            }
        }).catch(e => { });

    }

    const UpdateFancyLogoSatus = (id, e_id, m_id) => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/OnFancyLogo', {
            sid: ssid,
            eventId: e_id,
            marketId: m_id,
        }).then(result => {
            if (result.status === 200) {
                // setupdatemarketdate(!updatemarketdate);
            }
        }).catch(e => { });

    }



    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&

                <div>
                    {openedittimtchange && <EdittimePopup setopenedittimtchange={setopenedittimtchange} uopadtetime={uopadtetime} EventName={EventName} Event_ID={Event_ID} marketTime={marketTime} />}
                    <body class="biab_fluid_body biab_desktop">
                        <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                            <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                                <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                                <div className="biab_table-tabs js-table-tabs">
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: '360px' }}>
                                        <li onClick={() => { function_sportType(4) }} className={`${(Sporttype === 4) ? "tab_active" : "tab"}`} > <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                        <li onClick={() => { function_sportType(1) }} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}><a>Soccer</a></li>
                                        <li onClick={() => { function_sportType(2) }} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}><a>Tennis</a></li>
                                        <li onClick={() => { function_sportType(7522) }} className={`${(Sporttype === 7522) ? "tab_active" : "tab"}`}><a>BasketBall</a></li>
                                        <li onClick={() => { function_sportType(2378962) }} className={`${(Sporttype === 2378962) ? "tab_active" : "tab"}`}><a>Election</a></li>
                                    </ul>
                                </div>
                                <div class="biab_page-wrapper">
                                    <div class="biab_page-holder" style={{ margin: "-28px 0px -46px" }}>
                                        <div class="biab_page-container">

                                            <div className="js-scroll-start" style={{ margin: "28px" }} />
                                            <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'hidden' }}>
                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '60px' }}>

                                                    <div style={{ marginBottom: '20px', marginLeft: '0px' }}>
                                                        <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> {sportname}</div>
                                                        {matchList.map((item, id3) => {
                                                            var matchTime;
                                                            var ratemodename;
                                                            var today = moment();
                                                            var tommorow = moment().add(1, 'day');

                                                            if (moment(item.marketStartTime).isSame(today, 'day')) {
                                                                matchTime = moment(item.marketStartTime).format('LT');
                                                                matchTime = "Today" + " " + matchTime;
                                                            }
                                                            else if (moment(item.marketStartTime).isSame(tommorow, 'day')) {
                                                                matchTime = 'Tommorow' + ' ' + moment(item.marketStartTime).format('LT');;
                                                            }
                                                            else {
                                                                matchTime = item.marketStartTime;
                                                            }


                                                            if (item.rateMode == 1) ratemodename = "BetFair";
                                                            if (item.rateMode == 2) ratemodename = "Diamond";
                                                            if (item.rateMode == 3) ratemodename = "Skyfair";
                                                            return (
                                                                <div key={id3} style={{ display: 'flex', backgroundColor: 'whitesmoke' }}>
                                                                    <div class="fukka" style={{ height: '45px', width: '6%', border: '1px solid white', textAlign: 'center', backgroundColor: '#86BA00' }}><input class="form-check-input" type="checkbox" id={"flexCheckChecked" + id3} onClick={() => { EventstatusActiveInactive(id3, item.eventId, item.marketId) }} /></div>

                                                                    <div class="fukka" style={{ cursor: 'pointer', height: '45px', width: '10%', border: '1px solid white', textAlign: 'center', backgroundColor: `${(moment() >= moment(item.marketStartTime)) ? "#86BA00" : "whitesmoke"}` }} onClick={() => { fun_Edit_time(id3, item.eventId, item.eventName, item.marketStartTime) }} >{matchTime}</div>
                                                                    <a href={`/Runningmarketanlysis/${item.eventId}/${item.marketId}`} style={{ height: '45px', width: '24%', border: '1px solid white', textAlign: 'left', lineHeight: '17px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontsize: '11px', fontWeight: '700', cursor: 'pointer', paddingLeft: '5px', textDecoration: 'none', color: 'black' }}>
                                                                        <div style={{ textDecoration: 'none', color: 'black' }}>  {item.runnerName1}<br />{item.runnerName2}</div>
                                                                    </a>
                                                                    <div class="fukka" style={{ height: '45px', width: '10%', border: '1px solid white', textAlign: 'center', fontsize: '11px', fontWeight: '700' }}>{item.eventId}</div>


                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d7ff', fontsize: '11px', fontWeight: '700' }}>{ratemodename}</div>
                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '11px' }}>
                                                                        <input type="checkbox" class="btn" id={"B_logo" + id3} onClick={() => { UpdateBmakerLogoSatus(id3, item.eventId, item.marketId) }} />
                                                                        <a style={{ color: '#273a47', fontSize: '12px', paddingLeft: '5px', paddingRight: '15px', fontWeight: 'bold' }}>B.Maker</a>
                                                                    </div>
                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d7ff', fontsize: '12px' }}>
                                                                        <input type="checkbox" class="btn" id={"F_logo" + id3} onClick={() => { UpdateFancyLogoSatus(id3, item.eventId, item.marketId) }} />
                                                                        <a style={{ color: '#273a47', fontSize: '12px', paddingLeft: '5px', paddingRight: '15px', fontWeight: 'bold' }}>Fancy</a>
                                                                    </div>
                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '12px' }}></div>
                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d7ff', fontsize: '11px', fontWeight: '700' }}></div>
                                                                    <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '11px', fontWeight: '700' }}></div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>








                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </body>
                </div>
            }


        </React.Fragment>

    )
}


{/* <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d8ff', fontsize: '11px', fontWeight: '700' }}>{item.runner1BackRate3}</div>
                                                            <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '11px', fontWeight: '700' }}>{item.runner1LayRate3}</div>
                                                            <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d8ff', fontsize: '11px', fontWeight: '700' }}>{item.tieBackRate3}</div>
                                                            <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '11px', fontWeight: '700' }}>{item.tieLayRate3}</div>
                                                            <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#a5d8ff', fontsize: '11px', fontWeight: '700' }}>{item.runner2BackRate3}</div>
                                                            <div class="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: '#f9c9d1', fontsize: '11px', fontWeight: '700' }}>{item.runner2LayRate3}</div>  */}
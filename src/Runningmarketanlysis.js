import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeclaredFancy from './DeclaredFancy';
import DeclarePass from './DeclarePass';
import FancyFeedMessage from './FancyFeedMessage';
import EditfancynamePopup from './EditfancynamePopup';
import "./Lotus.css"
import Switch from "react-switch";
import CancleFancy from './CancleFancy';
import moment from 'moment';
import Cookies from 'universal-cookie';
import Loader from './Loader';
import Loader_decelare from './Loader_decelare';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { createBrowserHistory as history } from 'history';




require('moment-timezone');
var qs = require('qs');
const cookies = new Cookies();
var matchEndedMarket = false;
var matchEndedBook = false;
var len_of_mar = "";


export const Runningmarketanlysis = (props) => {
    const url = window.location.href;
    const para = url.split('/');
    const event_Id = para[4];
    const marketId = para[5];
    const [fancy_e_id, setfancy_e_id] = useState();
    const [fancy_s_id, setfancy_s_id] = useState();
    const [updateMarket, setupdateMarket] = useState(false);
    const [facnyrunnername_edit, setfacnyrunnername_edit] = useState();
    const [updateskyfairMode, setupdateskyfairMode] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const [eventname, seteventname] = useState([]);
    const [LiveMatchDashBoard, setLiveMatchDashBoard] = useState([]);
    const [runnerName1, setrunnerName1] = useState([]);
    const [runnerName2, setrunnerName2] = useState([]);
    const [minStack, setminStack] = useState([]);
    const [maxStack, setmaxStack] = useState([]);
    const [click, setclick] = useState(-1);
    const [showdeclaredfancy, setshowdeclaredfancy] = useState(false);
    const [fancy_session, setfancy_session] = useState([]);
    const [updateFancy, setupdateFancy] = useState(false);
    const [openfancyeditname, setopenfancyeditname] = useState(false);
    const [createFancyPop, setcreateFancyPop] = useState(false);
    const [updateMFancy, setupdateMFancy] = useState(false);
    const [fancyRun, setfancyRun] = useState(-1);
    const [selection_id, setselection_id] = useState();
    const [Showpass, setShowpass] = useState(false);
    const [M_ID, setM_ID] = useState();
    const [runnername, setrunnername] = useState("1");
    const [fancyindex, setfancyindex] = useState("");
    const [OpenFeedMessage, setOpenFeedMessage] = useState(false);
    const [OpenCancleFancyPopup, setOpenCancleFancyPopup] = useState(false);
    const [feedeid, setfeedeid] = useState();
    const [feedsid, setfeedsid] = useState();
    const [calcleeid, setcalcleeid] = useState();
    const [calclesid, setcalclesid] = useState();
    const [eventidd, seteventidd] = useState();
    const [AllmarketList_fancy, setAllmarketList_fancy] = useState([])
    const [AllmarketList_Match, setAllmarketList_Match] = useState([])
    const [FancySwtichAtoB, setFancySwtichAtoB] = useState([])
    const [sportName, setsportName] = useState()
    const [sporttype, setsporttype] = useState()
    const [Fancy_Name, setFancy_Name] = useState()
    const [EditFancyName, setEditFancyName] = useState()
    const [lenthofmarketlist, setlenthofmarketlist] = useState(0)
    const [FancyRefresh, setFancyRefresh] = useState(false);
    const [void_cancle_action, setvoid_cancle_action] = useState("1");
    const [Pass_match_declare, setPass_match_declare] = useState();
    const [fancyDelcleareMod, setfancyDelcleareMod] = useState(0);
    const history = useHistory();
    const [Curr_Adv_tab, setCurr_Adv_tab] = useState(1)

    const showCreateFancyMod = (open) => { setcreateFancyPop(open) }
    const DeclareModfancy = (open) => { setshowdeclaredfancy(open) }
    const DeclareMod = (open) => { setShowpass(open) }
    const function_open_FeedMessage = (id, bool, eid, sid) => {
        setOpenFeedMessage(bool)
        setfeedeid(eid);
        setfeedsid(sid);

    }
    const function_open_CancleFancy = (id, bool, eid, sid, f_name) => {
        if (fancyDelcleareMod == 0)
            toast.warn('Opps,Kindly select any one action!!! ', { position: toast.POSITION.TOP_CENTER });
        else {
            setcalcleeid(eid);
            setcalclesid(sid);
            setOpenCancleFancyPopup(bool)
            setFancy_Name(f_name)
        }

    }






    useEffect(() => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/MatchDashboard', {
            sid: ssid,
            eventId: event_Id,
            marketId: marketId

        }).then(result => {
            setLiveMatchDashBoard([]);
            setLiveMatchDashBoard(result.data);
            // //console.log("ompk",result.data)
            setsporttype(result.data[0].sportId);
            seteventname(result.data[0].eventName);
            setrunnerName1(result.data[0].runnerName1)
            setrunnerName2(result.data[0].runnerName2)
            setminStack(result.data[0].minStack)
            setmaxStack(result.data[0].maxStack)
            //   //console.log(result.data);
            if (result.data[0].sportId == 4) setsportName("Cricket");
            if (result.data[0].sportId == 1) setsportName("Soccer");
            if (result.data[0].sportId == 2) setsportName("Tennis");

            var all_event_array = [];
            for (var i = 0; i < (result.data).length; i++) all_event_array.push(result.data[i].marketId)
            setAllmarketList_Match(all_event_array);
            console.log(all_event_array.length, "ompk")
            len_of_mar = all_event_array.length;
            setrefresh(false)
            setlenthofmarketlist(all_event_array.length);

        }).catch(e => { });
    }, [updateMarket]);

    useEffect(() => {
        var ssid = cookies.get("sid");
        setrefresh(true)
        axios.post("https://liveapi247.live/api4/MatchDashboard_fancy_session", {
            sid: ssid,
            eventId: event_Id,
        }).then((result) => {
            if (result.status == 200) {
                var all_market_array = [];
                setfancy_session(result.data);
                //  setFancySwtichAtoB(result.data);
                for (var i = 0; i < (result.data).length; i++) all_market_array.push(result.data[i].selectionId)
                setAllmarketList_fancy(all_market_array);


                var fancyA = [], fancyB = [], fancyC = [], fancyD = [], fancyE = [], fancyF = [], fancyad = [];
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].fancyStatus == null) fancyA.push(result.data[i]);
                    if (result.data[i].fancyStatus == 1) fancyB.push(result.data[i]);
                    if (result.data[i].fancyStatus == 2) fancyC.push(result.data[i]);
                    if (result.data[i].fancyStatus == 3) fancyD.push(result.data[i]);
                    if (result.data[i].fancyStatus == 4) fancyE.push(result.data[i]);
                    if (result.data[i].fancyStatus == 5) fancyF.push(result.data[i]);
                    if (result.data[i].fancyStatus == 6) fancyad.push(result.data[i]);
                }

                if (Curr_Adv_tab == 1) setfancy_session(fancyA);
                if (Curr_Adv_tab == 2) setfancy_session(fancyB);
                if (Curr_Adv_tab == 3) setfancy_session(fancyC);
                if (Curr_Adv_tab == 4) setfancy_session(fancyD);
                if (Curr_Adv_tab == 5) setfancy_session(fancyE);
                if (Curr_Adv_tab == 6) setfancy_session(fancyF);
                if (Curr_Adv_tab == 7) setfancy_session(fancyad);

            }
        }).catch((e) => { });
        setrefresh(false)

    }, [updateFancy]);





    useEffect(() => {
        for (var i = 0; i < LiveMatchDashBoard.length; i++) {
            if (LiveMatchDashBoard[i].matchStatus == "1")
                document.getElementById("OMSAIA" + i).checked = true;
            if (LiveMatchDashBoard[i].matchStatus == "0")
                document.getElementById("OMSAIA" + i).checked = false;

            if (LiveMatchDashBoard[i].betStatus == "1")
                document.getElementById("OBSAIA" + i).checked = true;
            if (LiveMatchDashBoard[i].betStatus == "0")
                document.getElementById("OBSAIA" + i).checked = false;

            if (LiveMatchDashBoard[i].mode == "0 ")
                document.getElementById("Rateonoff" + i).checked = false;
            if (LiveMatchDashBoard[i].mode == "5")
                document.getElementById("Rateonoff" + i).checked = true;

            if (LiveMatchDashBoard[i].rateMode == "1")
                document.getElementById("bBtn" + i).checked = true;
            if (LiveMatchDashBoard[i].rateMode == "2")
                document.getElementById("bBtn" + i).checked = false;
            if (LiveMatchDashBoard[i].rateMode == "3")
                document.getElementById("bBtn" + i).checked = false;
            if (LiveMatchDashBoard[i].rateMode == "2")

                document.getElementById("dBtn" + i).checked = true;
            if (LiveMatchDashBoard[i].rateMode == "3")
                document.getElementById("dBtn" + i).checked = false;
            if (LiveMatchDashBoard[i].rateMode == "1")
                document.getElementById("dBtn" + i).checked = false;

            if (LiveMatchDashBoard[i].rateMode == "3")
                document.getElementById("sBtn" + i).checked = true;
            if (LiveMatchDashBoard[i].rateMode == "2")
                document.getElementById("sBtn" + i).checked = false;
            if (LiveMatchDashBoard[i].rateMode == "1")
                document.getElementById("sBtn" + i).checked = false;

            setrefresh(false)
        }
    }, [LiveMatchDashBoard, updateMarket]);

    useEffect(() => {

        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_Id,
            marketId: marketId
        })
            .then((result) => {

                if (result.status === 200) {
                    if (result.data[0].rateMode == "1")
                        document.getElementById("bBtn").checked = true;
                    if (result.data[0].rateMode == "2")
                        document.getElementById("bBtn").checked = false;
                    if (result.data[0].rateMode == "3")
                        document.getElementById("bBtn").checked = false;

                    if (result.data[0].rateMode == "2")
                        document.getElementById("dBtn").checked = true;
                    if (result.data[0].rateMode == "3")
                        document.getElementById("dBtn").checked = false;
                    if (result.data[0].rateMode == "1")
                        document.getElementById("dBtn").checked = false;

                    if (result.data[0].rateMode == "3")
                        document.getElementById("sBtn").checked = true;
                    if (result.data[0].rateMode == "2")
                        document.getElementById("sBtn").checked = false;
                    if (result.data[0].rateMode == "1")
                        document.getElementById("sBtn").checked = false;;



                }
            })
            .catch((e) => { });
    }, [updateMarket])


    useEffect(() => {
        for (var i = 0; i < fancy_session.length; i++) {
            if (fancy_session[i].gameStatus == "1")
                document.getElementById("FMSAIA" + i).checked = true;
            else
                document.getElementById("FMSAIA" + i).checked = false;

            if (fancy_session[i].betStatus == "1")
                document.getElementById("FBSAIA" + i).checked = true;
            else
                document.getElementById("FBSAIA" + i).checked = false;
        }
        setrefresh(false)
    }, [fancy_session]);

    const matchodd_bookmaker_market_status_ActiveInactive = (id, eventid, marketid) => {
        var ssid = cookies.get("sid");

        axios
            .post("https://liveapi247.live/api4/MarketActiveInactive", {
                sid: ssid,
                eventId: eventid,
                marketId: marketid
            })
            .then((result) => {
                if (result.status === 200) {
                    setupdateMarket(!updateMarket); setrefresh(false)
                }
            })
            .catch((e) => { });

    }

    const matchodd_bookmaker_bet_status_ActiveInactive = (id, eventid, marketid) => {
        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/betActiveInactive", {
            sid: ssid,
            eventId: eventid,
            marketId: marketid
        })
            .then((result) => {
                if (result.status === 200) {
                    setupdateMarket(!updateMarket);
                    setrefresh(false)
                }
            })
            .catch((e) => { });

    }
    const fuctiion_bet_on_off = (id, eventid, marketid) => {
        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/OddsActiveInactive", {
            sid: ssid,
            eventId: eventid,
            marketId: marketid
        }).then((result) => {
            if (result.status === 200) {
                setupdateMarket(!updateMarket);
                setrefresh(false)
            }
        }).catch((e) => { });

    }


    const Session_Marketstatus_acinac = (index, fancyid) => {
        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/LiveMatch_FancySession_Marketstatus_active_Inactive",
            {
                sid: ssid,
                eventId: event_Id,
                selectionId: fancyid,
            }).then((result) => {
                if (result.status === 200) {
                    // setupdateFancy(!updateFancy);
                    setrefresh(false)
                }
            }).catch((e) => { });
    };
    const Session_Betstatus_acinac = (index, fancyid) => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/LiveMatch_FancySession_betstatus_active_Inactive",
            {
                sid: ssid,
                eventId: event_Id,
                selectionId: fancyid,
            }
        ).then((result) => {
            if (result.status === 200) {
                // setupdateFancy(!updateFancy);
                setrefresh(false)
            }
        }).catch((e) => { });
    };

    // const InActiveAllMarket = () => {
    //     var ssid = cookies.get("sid");
    //     if (AllmarketList_fancy.length > 0) {
    //         axios.post("https://liveapi247.live/api4/Oneclick_inactive_allFancy", {
    //             sid: ssid,
    //             eventId: event_Id,
    //             selectionId: AllmarketList_fancy,
    //         }
    //         )
    //             .then((result) => {
    //                 if (result.status === 200) {
    //                     setupdateFancy(!updateFancy);
    //                 }
    //                 setrefresh(false)
    //             })
    //             .catch((e) => { });
    //     }
    //     axios.post("https://liveapi247.live/api4/Oneclick_inactive_allMarket", {
    //         sid: ssid,
    //         eventId: event_Id,
    //         marketId: AllmarketList_Match,
    //     }
    //     )
    //         .then((result) => {
    //             if (result.status === 200) {
    //                 setupdateMarket(!updateMarket);
    //                 setrefresh(false)
    //             }
    //         })
    //         .catch((e) => { });

    // }
    // const ActiveAllMarket = () => {
    //     var ssid = cookies.get("sid");
    //     if (AllmarketList_fancy.length > 0) {
    //         axios.post("https://liveapi247.live/api4/Oneclick_active_allFancy", {
    //             sid: ssid,
    //             eventId: event_Id,
    //             selectionId: AllmarketList_fancy,
    //         }
    //         )
    //             .then((result) => {
    //                 if (result.status === 200) {
    //                     setupdateFancy(!updateFancy);
    //                     setrefresh(false)
    //                 }
    //             })
    //             .catch((e) => { });
    //     }
    //     axios.post("https://liveapi247.live/api4/Oneclick_active_allMarket", {
    //         sid: ssid,
    //         eventId: event_Id,
    //         marketId: AllmarketList_Match,
    //     }
    //     )
    //         .then((result) => {
    //             if (result.status === 200) {
    //                 setupdateMarket(!updateMarket);
    //                 setrefresh(false)
    //             }
    //         })
    //         .catch((e) => { });

    // }

    const allmarket_active_inactive = () => {
        if (document.getElementById("ACIA").checked == true) {
            // InActiveAllMarket()
        }
        else {
            // ActiveAllMarket()
        }

    }




    const modeBetfair = (index) => {

        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/betfairMode', {
            sid: ssid,
            eventId: event_Id,
            marketId: marketId
        }).then(result => {
            if (result.status === 200) {
                setupdateMarket(!updateMarket);
            }
        }).catch(e => { });
    }

    const modeDiamond = (index) => {

        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/DiamondMode', {
            sid: ssid,
            eventId: event_Id,
            marketId: marketId
        }).then(result => {
            if (result.status === 200) {
                setupdateMarket(!updateMarket);
            }
        }).catch(e => { });
    }

    const modeSky = (index) => {

        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/SkyfairMode', {
            sid: ssid,
            eventId: event_Id,
            marketId: marketId
        }).then(result => {
            if (result.status === 200) {
                setupdateMarket(!updateMarket);
            }
        }).catch(e => { });
    }


    const jumpdecleared = (index) => {

        var input = document.getElementById("fan" + index);
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("dec" + index).click();
            }

        });



    }
    const flagtemp = () => {
        setupdateMarket(!updateMarket);
        setupdateMFancy(!updateMFancy);
        setupdateFancy(!updateFancy);
    }
    const flagtempeditfancy = () => { setupdateFancy(!updateFancy); }

    const mfancy = () => {

        setupdateMFancy(!updateMFancy);
        setupdateFancy(!updateFancy);
        setFancyRefresh(false);
        window.location.reload();

        document.getElementById("fan" + fancyindex).value = "";

    }
    const Declare_Mod_fancy = (index, s_id, f_name) => {
        setfancyRun(document.getElementById("fan" + index).value);
        setselection_id(s_id);
        setfancyindex(index);
        setFancy_Name(f_name)
        if (fancyRun != -1)
            DeclareModfancy(true);



    }
    const DeclareMatch = (m_id) => {
        setM_ID(m_id)
        DeclareMod(true);

    }

    const flagtempmarket = () => {
        // setupdateMarket(!updateMarket);
        // setTimeout(DeclareMod(false), 3000);
        // history.push("/Settlement")
        window.location.reload();

    }


    const funtion_edit_fancy = (id, id_name) => {
        // document.getElementById("Fa_runnername" + id).style.display="block";
        // document.getElementById("run123" + id).style.display="none";
        document.getElementById("Fa_runnername" + id).select();
        document.getElementById("sa" + id).style.display = "block"
        document.getElementById("ed" + id).style.display = "none"
        // Session_Marketstatus_acinac(id, id_name)



    }

    const funtion_save_fancyname = (id, eid, sid, id_name) => {
        var ssid = cookies.get('sid');
        var runner_name = document.getElementById("Fa_runnername" + id).value;
        axios.post('https://liveapi247.live/api4/editfancyrunnerName', {
            sid: ssid,
            eventId: eid,
            selectionId: sid,
            runnerName: runner_name,
        }).then(result => {
            if (result.status === 200) {
                // setupdateFancy(!updateFancy);
            }
        }).catch(e => { });

        document.getElementById("sa" + id).style.display = "none";
        document.getElementById("ed" + id).style.display = "block";
        //Session_Marketstatus_acinac(id, sid)
        // document.getElementById("Fa_runnername" + id).style.display="none";
        // document.getElementById("run123" + id).style.display="block";
    }

    const Fancy_editmininum = (id, eid, sid) => {
        var ssid = cookies.get('sid');
        var min = document.getElementById("Fa_Min" + id).value;
        axios.post('https://liveapi247.live/api4/changeminStake', {
            sid: ssid,
            eventId: eid,
            selectionId: sid,
            minStack: min,
        }).then(result => {
            if (result.status === 200) {
                setupdateFancy(!updateFancy);
            }
        }).catch(e => { });
    }
    const Fancy_editmaximum = (id, eid, sid) => {
        var ssid = cookies.get('sid');
        var max = document.getElementById("Fa_Max" + id).value;
        axios.post('https://liveapi247.live/api4/changemaxStake', {
            sid: ssid,
            eventId: eid,
            selectionId: sid,
            maxStack: max,
        }).then(result => {
            if (result.status === 200) {
                setupdateFancy(!updateFancy);
            }
        }).catch(e => { });
    }

    const Market_editmininum = (id, eid, mid) => {
        var ssid = cookies.get('sid');
        var min = document.getElementById("Ma_Min" + id).value;
        axios.post('https://liveapi247.live/api4/changemarketminStake', {
            sid: ssid,
            eventId: eid,
            marketId: mid,
            minStack: min,
        }).then(result => {
            if (result.status === 200) {
                //  setupdateMarket(!updateMarket00);
            }
        }).catch(e => { });
    }
    const Market_editmaximum = (id, eid, mid) => {
        var ssid = cookies.get('sid');
        var max = document.getElementById("Ma_Max" + id).value;
        axios.post('https://liveapi247.live/api4/changemarketmaxStake', {
            sid: ssid,
            eventId: eid,
            marketId: mid,
            maxStack: max,
        }).then(result => {
            if (result.status === 200) {
                // setupdateMarket(!updateMarket);
            }
        }).catch(e => { });
    }



    const fun_void_cancle_action = (val, id) => {
        setfancyDelcleareMod(val);
        if (val == "0") {
            document.getElementById("void" + id).style.display = "none"
            document.getElementById("cancle" + id).style.display = "none"
            document.getElementById("select" + id).style.display = "block"
            document.getElementById("delete" + id).style.display = "none"
        }
        if (val == "1") {
            document.getElementById("void" + id).style.display = "block"
            document.getElementById("cancle" + id).style.display = "none"
            document.getElementById("select" + id).style.display = "none"
            document.getElementById("delete" + id).style.display = "none"
        }
        if (val == "2") {
            document.getElementById("cancle" + id).style.display = "block"
            document.getElementById("void" + id).style.display = "none"
            document.getElementById("select" + id).style.display = "none"
            document.getElementById("delete" + id).style.display = "none"
        }
        if (val == "3") {

            document.getElementById("delete" + id).style.display = "block"
            document.getElementById("cancle" + id).style.display = "none"
            document.getElementById("void" + id).style.display = "none"
            document.getElementById("select" + id).style.display = "none"
        }


    }
    useEffect(() => {
    }, [])


    const Switchfancy = (id, e_id, s_id, val) => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/FancyStatusSwitch', {
            sid: ssid,
            eventId: e_id,
            selectionId: s_id,
            SwitchFancy: val,
        }).then(result => {
            if (result.status === 200) {
                setupdateFancy(!updateFancy);
            }
        }).catch(e => { });
    }

    const function_edit_fancy_name = (id, e_id, s_id, run_name) => {
        setopenfancyeditname(true);
        setfancy_e_id(e_id); setfancy_s_id(s_id);
        setfacnyrunnername_edit(run_name);
    }




    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {OpenCancleFancyPopup && <CancleFancy mfancy={mfancy} function_open_CancleFancy={function_open_CancleFancy} fancyDelcleareMod={fancyDelcleareMod} flagtemp={flagtemp} calcleeid={calcleeid} calclesid={calclesid} setrefresh={setrefresh} Fancy_Name={Fancy_Name} setFancyRefresh={setFancyRefresh} />}
                    {showdeclaredfancy && <DeclaredFancy mfancy={mfancy} setrefresh={setrefresh} setFancyRefresh={setFancyRefresh} eventId={event_Id} run={fancyRun} selectionId={selection_id} DeclareModfancy={DeclareModfancy} Fancy_Name={Fancy_Name} />}
                    {Showpass && <DeclarePass setPass_match_declare={setPass_match_declare} Pass_match_declare={Pass_match_declare} flagtempmarket={flagtempmarket} setrefresh={setrefresh} eventId={event_Id} marketId={M_ID} winner={runnername} DeclareMod={DeclareMod} lenthofmarketlist={lenthofmarketlist} />}
                    {OpenFeedMessage && <FancyFeedMessage function_open_FeedMessage={function_open_FeedMessage} feedeid={feedeid} feedsid={feedsid} />}
                    {openfancyeditname && <EditfancynamePopup fancy_e_id={fancy_e_id} fancy_s_id={fancy_s_id} facnyrunnername_edit={facnyrunnername_edit} setopenfancyeditname={setopenfancyeditname} openfancyeditname={openfancyeditname} flagtempeditfancy={flagtempeditfancy} />}
                    <body class="biab_fluid_body biab_desktop">
                        <div class="biab_body biab_fluid" id="biab_body">
                            <div class="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                                <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                                <div className="biab_table-tabs js-table-tabs">
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: "auto" }}>
                                        <li> <a style={{ marginLeft: "-17px" }} href={`/Settlement/${sporttype}`}>{sportName} <i class="fas fa-angle-right"></i> </a></li>
                                        <li> <a href="">{eventname}<i class="fas fa-angle-right"></i> </a></li>
                                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input type="checkbox" class="btn" id="bBtn" onClick={() => { modeBetfair(); }} />
                                                <a style={{ color: '#fff', fontSize: '14px', fontWeight: '700', paddingLeft: '5px', paddingRight: '15px', marginTop: '-10px' }}>Betfair</a>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input type="checkbox" class="btn" id="dBtn" onClick={() => { modeDiamond(); }} />
                                                <a style={{ color: '#fff', fontSize: '14px', fontWeight: '700', paddingLeft: '5px', paddingRight: '15px', marginTop: '-10px' }}>Diamond</a>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input type="checkbox" id="sBtn" class="btn" onClick={() => { modeSky(); }} />
                                                <a style={{ color: '#fff', fontSize: '14px', fontWeight: '700', paddingLeft: '7px', marginTop: '-10px' }}>Skyfair</a>
                                            </div>
                                        </li>

                                        <input className="form-check-input" type="checkbox" id="ACIA" style={{ marginTop: '4px', position: 'absolute', right: '40.7px', display: 'none' }} onClick={() => { allmarket_active_inactive() }} />

                                    </ul>
                                </div>
                                <div className="biab_page-wrapper">
                                    <div className="biab_page-holder">
                                        <div className="biab_page-container">
                                            <div id="biab_page" className="biab_page js-page">
                                                <div className="biab_banner biab_fluid-hidden biab_banner-main js-banner-main biab_hide" />
                                                <div className="biab_columns-holder js-columns-holder biab_has-aside-left" style={{ maxHeight: '722.5px' }}>
                                                    {refresh && <div className="loading"> <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div></div>}
                                                    <div id="biab_content" className="biab_content" style={{ minHeight: '541.5px' }}>
                                                        <div className="js-content-region">
                                                            <div className="js-content-wrapper">
                                                                <div className="biab_market biab_handicap-market js-market biab_mmv-market  ">
                                                                    <div className="biab_scrollable js-scrollable js-toggle-content" style={{ position: 'relative', height: '893.5px', overflow: 'auto' }}>
                                                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '326px' }}>
                                                                            <div style={{ height: 'auto' }}>
                                                                                {LiveMatchDashBoard.map((item, id3) => {
                                                                                    return (
                                                                                        <div key={id3} className="biab_tab-content-holder ">
                                                                                            <div className="js-market-header-region">
                                                                                                <div class="biab_multi-market-title js-collapse-toggler" style={{ height: '23px', marginLeft: '-1px' }}>{item.marketName}
                                                                                                    <input className="form-check-input" type="checkbox" class="btn" id={"bBtn" + id3} style={{ marginTop: '5px', display: 'none' }} />
                                                                                                    <input className="form-check-input" type="checkbox" class="btn" id={"dBtn" + id3} style={{ marginTop: '5px', display: 'none' }} />
                                                                                                    <input className="form-check-input" type="checkbox" id={"sBtn" + id3} class="btn" style={{ display: 'none' }} />

                                                                                                </div>
                                                                                                <a href={`/Feedratemakte/${item.sportId}/${item.eventId}/${item.marketId}`}>
                                                                                                    {/* <a href={`/Feedrate/${item.sportId}/${item.eventId}/${item.marketId}`}>  */}
                                                                                                    <div className="menu_add__marketfeed"><i class="fa fa-external-link"></i></div>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div className="biab_hide js-market-table" style={{ marginTop: '0px', display: 'block' }}>
                                                                                                <div className="biab_tab-content js-sticky-header" style={{ position: 'relative', zIndex: 0, top: '0px', paddingRight: '0px', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                                                                    <div className="biab_header-table">
                                                                                                        <table className="biab_market-table">
                                                                                                            <colgroup>


                                                                                                                <col width />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                            </colgroup>
                                                                                                            <thead>
                                                                                                                <tr>
                                                                                                                    <th colSpan={2} className="biab_no-bg biab_text-left"></th>
                                                                                                                    <th colSpan={1} className="biab_no-bg biab_text-left">
                                                                                                                        <span className="js-total-lines-wrapper" style={{ display: (item.marketName == "Match Odds" ? "block" : 'none'), fontWeight: 'bold', textAlign: 'center' }}>Close </span>
                                                                                                                    </th>
                                                                                                                    <th colSpan={1} className="biab_no-bg biab_text-left"></th>
                                                                                                                    <th colSpan={1} className="biab_no-bg biab_text-left"> </th>
                                                                                                                    <th colSpan={1} className="biab_no-bg biab_text-left">
                                                                                                                        <span className="js-total-lines-wrapper" style={{ display: 'block', textAlign: 'center' }}>Active </span>
                                                                                                                    </th>
                                                                                                                    <th className="biab_no-bg biab_fancy-market-column biab_back-all-column " colSpan={1}>Suspand</th>
                                                                                                                    <th className="biab_no-bg biab_text-right biab_back-all biab_back-all-column js-back-all" colSpan={1}>
                                                                                                                        <span>Back all</span>
                                                                                                                    </th>
                                                                                                                    <th className="biab_no-bg biab_text-left biab_lay-all biab_lay-all-column js-lay-all " colSpan={1}>
                                                                                                                        <span>Lay all</span></th>
                                                                                                                    <th className="biab_no-bg biab_text-right  "> </th>
                                                                                                                    <th className="biab_no-bg biab_text-right  "> </th>
                                                                                                                </tr>
                                                                                                            </thead>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="biab_tab-content ">
                                                                                                    <div className="biab_market-selections js-market-selections ">
                                                                                                        <div className="biab_hide" data-selection-id={349} data-handicap={0} style={{ display: 'block' }}>
                                                                                                            <div>
                                                                                                                <div className="biab_selection-table js-selection-table">
                                                                                                                    <div>
                                                                                                                        <table className="biab_market-table ">
                                                                                                                            <colgroup>
                                                                                                                                <col width />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                            </colgroup>
                                                                                                                            <tbody />
                                                                                                                        </table>
                                                                                                                        <div className="biab_market-table-wrapper">
                                                                                                                            <table className="biab_market-table">
                                                                                                                                <colgroup>
                                                                                                                                    <col width />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                </colgroup>

                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td className=" ">
                                                                                                                                            <span className="biab_game-title" title="South Africa">{item.runnerName1}</span>
                                                                                                                                            <div className="js-selection-pl-wrap"> </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{ borderBottom: '1px solid white', }} >
                                                                                                                                            <div class="biab_cell-view" style={{ position: 'absolute', bottom: '44px', display: (item.marketName == "Match Odds" ? "block" : 'none') }}>
                                                                                                                                                <div class="js-bet biab_bet-cell" style={{ backgroundColor: '#86ba00', width: '65px', zIndex: '1', top: "69px", height: '46px', marginLeft: "19px" }}>
                                                                                                                                                    <div class="biab_bet-content ">

                                                                                                                                                        <input class="form-check-input" style={{ marginTop: '11px', height: '25px', width: '24px' }} type="checkbox" id={"Rateonoff" + id3} onClick={() => { fuctiion_bet_on_off(id3, item.eventId, item.marketId) }} />
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className=" ">
                                                                                                                                            Min<input class="min-inp" id={"Ma_Min" + id3} type="text" defaultValue={item.minStack} onChange={() => { Market_editmininum(id3, item.eventId, item.marketId) }} />
                                                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{ borderBottom: '1px solid white', }} >

                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{ borderBottom: '1px solid white', }} >
                                                                                                                                            <div class="biab_cell-view" style={{ position: 'absolute', bottom: '44px' }}>
                                                                                                                                                <div class="js-bet biab_bet-cell" style={{ backgroundColor: '#86ba00', width: '65px', zIndex: '1', top: "69px", height: '46px', marginLeft: "19px" }}>
                                                                                                                                                    <div class="biab_bet-content ">

                                                                                                                                                        <input class="form-check-input" style={{ marginTop: '17px' }} type="checkbox" id={"OMSAIA" + id3} onClick={() => { matchodd_bookmaker_market_status_ActiveInactive(id3, item.eventId, item.marketId) }} />
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{ borderBottom: '1px solid white', }} >
                                                                                                                                            <div class="biab_cell-view" style={{ position: 'absolute', bottom: '44px' }}>
                                                                                                                                                <div class="js-bet biab_bet-cell" style={{ backgroundColor: '#86ba00', width: '65px', zIndex: '1', top: "69px", height: '46px', marginLeft: "19px" }}>
                                                                                                                                                    <div class="biab_bet-content ">

                                                                                                                                                        <input class="form-check-input" style={{ marginTop: '17px' }} type="checkbox" id={"OBSAIA" + id3} onClick={() => { matchodd_bookmaker_bet_status_ActiveInactive(id3, item.eventId, item.marketId) }} />
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="349_hc_0">
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 178945.93  for</strong> the South Africa at odds of 1.03 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds">{item.runner1BackRate3}</span>

                                                                                                                                                        <span className="biab_bet-amount">3163</span>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="349_hc_0">
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" >
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds">{item.runner1LayRate1}</span>

                                                                                                                                                        <span className="biab_bet-amount">4973</span>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet" style={{ borderRight: "none" }}>

                                                                                                                                            <div class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '164px', zIndex: '1', top: '21px', height: '36px' }}>
                                                                                                                                                <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setrunnername(e.target.value)}>
                                                                                                                                                    {item.sportId == 1 && <>
                                                                                                                                                        <option value="0">Select</option>
                                                                                                                                                        <option value="1">{item.runnerName1}</option>
                                                                                                                                                        <option value="2">{item.runnerName2}</option>
                                                                                                                                                        <option value="3">Draw</option>
                                                                                                                                                        <option value="4">No Result</option>
                                                                                                                                                    </>
                                                                                                                                                    }
                                                                                                                                                    {item.sportId == 2 && <>
                                                                                                                                                        <option value="0">Select</option>
                                                                                                                                                        <option value="1">{item.runnerName1}</option>
                                                                                                                                                        <option value="2">{item.runnerName2}</option>
                                                                                                                                                        {/* <option value="3">Draw</option> */}
                                                                                                                                                        <option value="4">No Result</option>
                                                                                                                                                    </>
                                                                                                                                                    }
                                                                                                                                                    {item.sportId == 7522 && <>
                                                                                                                                                        <option value="0">Select</option>
                                                                                                                                                        <option value="1">{item.runnerName1}</option>
                                                                                                                                                        <option value="2">{item.runnerName2}</option>
                                                                                                                                                        {/* <option value="3">Draw</option> */}
                                                                                                                                                        <option value="4">No Result</option>
                                                                                                                                                    </>
                                                                                                                                                    }
                                                                                                                                                    {item.sportId == 4 && <>
                                                                                                                                                        <option value="0">Select</option>
                                                                                                                                                        <option value="1">{item.runnerName1}</option>
                                                                                                                                                        <option value="2">{item.runnerName2}</option>

                                                                                                                                                        {item.runnerId3 && item.runnerId3 != " " && <option value="3">Draw</option>}

                                                                                                                                                        <option value="4">No Result</option>
                                                                                                                                                    </>
                                                                                                                                                    }
                                                                                                                                                </select>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                            <div class="js-bet biab_bet-cell" onClick={() => { DeclareMatch(item.marketId) }} style={{ backgroundColor: 'white', width: '74px', zIndex: '1', top: '21px', height: '36px', marginLeft: "28px" }}>
                                                                                                                                                <img class="importfancy" alt="" src="data:image/png;base64,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" />
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>

                                                                                                                            </table>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="biab_betslip biab_hide js-betslip" />
                                                                                                                <div className="js-mobile-open-bets" /></div>
                                                                                                        </div>
                                                                                                        <div className="biab_hide" data-selection-id={228749} data-handicap={0} style={{ display: 'block' }}>
                                                                                                            <div>
                                                                                                                <div className="biab_selection-table js-selection-table">
                                                                                                                    <div>
                                                                                                                        <table className="biab_market-table ">
                                                                                                                            <colgroup>
                                                                                                                                <col width />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                            </colgroup>
                                                                                                                            <tbody />
                                                                                                                        </table>
                                                                                                                        <div className="biab_market-table-wrapper">
                                                                                                                            <table className="biab_market-table">
                                                                                                                                <colgroup>
                                                                                                                                    <col width />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                </colgroup>
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td className=" ">
                                                                                                                                            <span className="biab_game-title" title="Netherlands">{item.runnerName2}</span>
                                                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className=" ">
                                                                                                                                            Max<input class="min-inp" id={"Ma_Max" + id3} type="text" defaultValue={item.maxStack} onChange={() => { Market_editmaximum(id3, item.eventId, item.marketId) }} />
                                                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className=" ">

                                                                                                                                            <span className="biab_game-title" title="Netherlands"></span>
                                                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                                            </div>
                                                                                                                                        </td>

                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                            <div className="biab_cell-view" >
                                                                                                                                                <div className="js-bet biab_bet-cell">
                                                                                                                                                    <div className="biab_bet-content " /></div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="biab_promoted-tooltip-inner ">
                                                                                                                                                    <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                                                                        <i className="fas fa-info-circle" /></div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" >
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" >
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds">{item.runner2BackRate3}</span>

                                                                                                                                                        <span className="biab_bet-amount">12</span>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0">
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" >
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds">{item.runner2LayRate1}</span>

                                                                                                                                                        <span className="biab_bet-amount">186</span></div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet" style={{ borderRight: "none" }}>
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" >
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds">

                                                                                                                                                        </span>

                                                                                                                                                        <span className="biab_bet-amount"></span>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                            <div className="biab_cell-view">
                                                                                                                                                <div className="js-bet biab_bet-cell" >
                                                                                                                                                    <div className="biab_bet-content biab_has-amount">

                                                                                                                                                        <span className="js-odds biab_odds"></span>

                                                                                                                                                        <span className="biab_bet-amount"></span></div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            </div>
                                                                                                        </div>
                                                                                                        {item.runnerId3 && item.runnerId3 != " " &&
                                                                                                            <div className="biab_hide" data-selection-id={228749} data-handicap={0} style={{ display: 'block' }}>
                                                                                                                <div>
                                                                                                                    <div className="biab_selection-table js-selection-table">
                                                                                                                        <div>
                                                                                                                            <table className="biab_market-table ">
                                                                                                                                <colgroup>
                                                                                                                                    <col width />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                                </colgroup>
                                                                                                                                <tbody />
                                                                                                                            </table>
                                                                                                                            <div className="biab_market-table-wrapper">
                                                                                                                                <table className="biab_market-table">
                                                                                                                                    <colgroup>
                                                                                                                                        <col width />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                                                    </colgroup>
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td className=" ">
                                                                                                                                                <span className="biab_game-title" title="Netherlands">Draw</span>
                                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className=" ">
                                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className=" ">

                                                                                                                                                <span className="biab_game-title" title="Netherlands"></span>
                                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                                </div>
                                                                                                                                            </td>

                                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                                <div className="biab_cell-view" >
                                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                                <div className="biab_cell-view">
                                                                                                                                                    <div className="biab_promoted-tooltip-inner ">
                                                                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                                                                            <i className="fas fa-info-circle" /></div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" >
                                                                                                                                                <div className="biab_cell-view">
                                                                                                                                                    <div className="js-bet biab_bet-cell" >
                                                                                                                                                        <div className="biab_bet-content biab_has-amount">

                                                                                                                                                            <span className="js-odds biab_odds">{item.tieBackRate3}</span>

                                                                                                                                                            <span className="biab_bet-amount">12</span>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0">
                                                                                                                                                <div className="biab_cell-view">
                                                                                                                                                    <div className="js-bet biab_bet-cell" >
                                                                                                                                                        <div className="biab_bet-content biab_has-amount">

                                                                                                                                                            <span className="js-odds biab_odds">{item.tieLayRate1}</span>

                                                                                                                                                            <span className="biab_bet-amount">186</span></div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet" style={{ borderRight: "none" }}>
                                                                                                                                                <div className="biab_cell-view">
                                                                                                                                                    <div className="js-bet biab_bet-cell" >
                                                                                                                                                        <div className="biab_bet-content biab_has-amount">

                                                                                                                                                            <span className="js-odds biab_odds">

                                                                                                                                                            </span>

                                                                                                                                                            <span className="biab_bet-amount"></span>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                                <div className="biab_cell-view">
                                                                                                                                                    <div className="js-bet biab_bet-cell" >
                                                                                                                                                        <div className="biab_bet-content biab_has-amount">

                                                                                                                                                            <span className="js-odds biab_odds"></span>

                                                                                                                                                            <span className="biab_bet-amount"></span></div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>

                                                                                                                </div>
                                                                                                            </div>
                                                                                                        }
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </div>

                                                                            <div style={{ height: 'auto' }}>
                                                                                <div id="multiMarketContainer">
                                                                                    <div className="biab_multi-market-title js-collapse-toggler" style={{ display: "flex", justifyContent: "left", height: "23px", marginLeft: '0px' }}>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 1) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(1); setupdateFancy(!updateFancy); }}>All Fancy </div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 2) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(2); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Over</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 3) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(3); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Player</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 4) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(4); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Wicket</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 5) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(5); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Ball By Ball</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 6) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(6); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Other</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 7) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(7); setupdateFancy(!updateFancy); }} style={{ marginLeft: '20px' }}>Advance</div>
                                                                                        <div className={`Advance_cuurent_fancy_button ${(Curr_Adv_tab === 8) ? "Adv_cuu_fan_btb_Active" : "Adv_cuu_fan_btb_InActive"}`} onClick={() => { setCurr_Adv_tab(8); }} style={{
                                                                                            width: '116px', marginLeft: '20px'
                                                                                        }}>Premium Fancy  </div>

                                                                                    </div>
                                                                                    <div className="js-fancy-markets-list" style={{ height: 'auto', overflowY: "scroll" }}   >
                                                                                        {fancy_session.map((item2, id2) => {
                                                                                            // console.log(item2.runnerName,"fancyname123")


                                                                                            return (
                                                                                                <React.Fragment key={id2}>
                                                                                                    {FancyRefresh == true && <Loader />}
                                                                                                    {FancyRefresh == false &&
                                                                                                        <div className="biab_market-table-wrapper biab_fancy-market-item" >
                                                                                                            <table className="biab_market-table">
                                                                                                                <colgroup>
                                                                                                                    <col width />
                                                                                                                    <col className="biab_table-col" width="12%" />
                                                                                                                    <col className="biab_table-col" width="7%" />
                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                    <col className="biab_table-col" width="8%" />

                                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                                    <col className="biab_table-col " width="8%" />
                                                                                                                    <col className="biab_table-col " width="8%" />
                                                                                                                    <col className="biab_table-col " width="8%" />
                                                                                                                </colgroup>
                                                                                                                <tbody>
                                                                                                                    <tr >
                                                                                                                        <td className="biab_fancy-market-selection-name js-market-total-matched fancyrunnername">
                                                                                                                            {/* <input className="fancyrunnername" id={"Fa_runnername" + id2} type="text" style={{ color: (item2.mode == 1 ? "green" : "black")}} value={item2.runnerName}  /> */}
                                                                                                                            {/* {item2.runnerName} */}
                                                                                                                            {/* <input className="fancyrunnername" id={"Fa_runnername" + id2} type="text" style={{ color: (item2.mode == 1 ? "green" : "black"),display:'none' }} defaultValue={item2.runnerName} /> */}
                                                                                                                            {Curr_Adv_tab == 1 ? <>
                                                                                                                                <div id={"run123" + id2} style={{ width: '60%', float: 'left', justifyContent: 'left', display: 'flex', alignItems: 'center', color: (item2.mode == 1 ? "green" : "black") }}>{item2.runnerName}</div>
                                                                                                                                <div style={{ width: '40%', float: 'right', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 1) }} style={{ backgroundColor: '#373b4b' }}>O</div>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 2) }} style={{ backgroundColor: '#86ba00' }}>P</div>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 3) }} style={{ backgroundColor: 'crimson' }}>W</div>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 4) }} style={{ backgroundColor: 'blueviolet' }}>B</div>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 5) }} style={{ backgroundColor: 'coral' }}>O</div>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, 6) }} style={{ backgroundColor: '' }}>A</div>
                                                                                                                                </div>
                                                                                                                            </> : <>
                                                                                                                                <div id={"run123" + id2} style={{ width: '80%', float: 'left', justifyContent: 'left', display: 'flex', alignItems: 'center', color: (item2.mode == 1 ? "green" : "black") }}>{item2.runnerName}</div>
                                                                                                                                <div style={{ width: '10%', float: 'right', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                                                                                                    <div class="shift_btn" onClick={() => { Switchfancy(id2, item2.eventId, item2.selectionId, (Curr_Adv_tab - 1)) }} style={{ backgroundColor: 'crimson' }}>R</div>
                                                                                                                                </div>
                                                                                                                            </>
                                                                                                                            }
                                                                                                                        </td>


                                                                                                                        <td className="biab_fancy-market-selection-tm js-market-total-matched" >
                                                                                                                            {/* <td style={{ width: '75px', textAlign: 'center', }}>
                                                                                                                                <a id={"ed" + id2} style={{ fontSize: '12px' }} onClick={() => { funtion_edit_fancy(id2, item2.selectionId) }}><i class="fa fa-edit" style={{ fontSize: '24px' }}></i>  </a>
                                                                                                                                <a id={"sa" + id2} style={{ fontSize: '12px', display: 'none' }} onClick={() => { funtion_save_fancyname(id2, item2.eventId, item2.selectionId, item2.selectionId) }}><i class="fa fa-check-circle" style={{ fontSize: '24px' }}></i></a>
                                                                                                                            </td> */}
                                                                                                                            <td style={{ width: '75px', textAlign: 'center', }}>
                                                                                                                                <a id={"ed" + id2} style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => { function_edit_fancy_name(id2, item2.eventId, item2.selectionId, item2.runnerName) }}><i class="fa fa-edit" style={{ fontSize: '24px' }}></i>  </a>
                                                                                                                            </td>
                                                                                                                            <td style={{ width: '75px', textAlign: 'center', cursor: 'pointer' }}>
                                                                                                                                <a style={{ fontSize: '12px' }} onClick={() => { function_open_FeedMessage(id2, true, item2.eventId, item2.selectionId) }}><i class="fa fa-envelope-square" style={{ fontSize: '24px' }}></i> </a>
                                                                                                                            </td>
                                                                                                                            <td style={{ width: '75px', textAlign: 'center' }}>
                                                                                                                                <a href={`/FeedrateFancy/${item2.eventId}/${marketId}/${item2.selectionId}/${item2.id}`} style={{ fontSize: '12px' }}> <i style={{ fontSize: '24px' }} class="fa fa-external-link"></i> </a>
                                                                                                                            </td>
                                                                                                                        </td>
                                                                                                                        <td className="biab_fancy-market-selection-tm js-market-total-matched" >Min <input className="min-inp" id={"Fa_Min" + id2} type="text" defaultValue={item2.minStack} onChange={() => { Fancy_editmininum(id2, item2.eventId, item2.selectionId) }} /></td>
                                                                                                                        <td className="biab_fancy-market-selection-tm js-market-total-matched">Max<input id={"Fa_Max" + id2} className="min-inp" type="text" defaultValue={item2.maxStack} onChange={() => { Fancy_editmaximum(id2, item2.eventId, item2.selectionId) }} /></td>
                                                                                                                        <td className="biab_bet js-fm-back-2 biab_grey-cell biab_bet-back biab_empty-cell biab_back-2 biab_line-market-cell" data-selection-id={15316}
                                                                                                                            data-handicap={0} style={{ borderRight: "none" }}>
                                                                                                                            <div className="js-bet biab_bet-cell" style={{ backgroundColor: 'rgb(134, 186, 0)', width: '65px', zIndex: 1, height: '46px', marginLeft: '19px' }}>
                                                                                                                                <div className="biab_bet-content ">
                                                                                                                                    <input className="form-check-input" type="checkbox" id={"FMSAIA" + id2} style={{ marginTop: '17px' }} onClick={() => { Session_Marketstatus_acinac(id2, item2.selectionId) }} /></div>
                                                                                                                            </div>


                                                                                                                        </td>
                                                                                                                        <td className="biab_bet js-fm-back-1 biab_grey-cell biab_bet-back biab_empty-cell biab_back-1 biab_line-market-cell" data-selection-id={15316}
                                                                                                                            data-handicap={0}>
                                                                                                                            <div className="js-bet biab_bet-cell" style={{ backgroundColor: 'rgb(134, 186, 0)', width: '65px', zIndex: 1, height: '46px', marginLeft: '19px' }}>
                                                                                                                                <div className="biab_bet-content ">
                                                                                                                                    <input className="form-check-input" type="checkbox" id={"FBSAIA" + id2} style={{ marginTop: '17px' }} onClick={() => { Session_Betstatus_acinac(id2, item2.selectionId); }} /></div>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                        <td style={{ borderRight: "none" }} className="biab_bet js-fm-lay-1 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-1 biab_line-market-cell" data-selection-id={15316}
                                                                                                                            data-handicap={0}>
                                                                                                                            <div className="biab_cell-view">
                                                                                                                                <div className="js-bet biab_bet-cell"
                                                                                                                                    data-original-title title>
                                                                                                                                    <div className="biab_bet-content " >
                                                                                                                                        <dt className="smalldt">
                                                                                                                                            <input className="biab_number" onfocus="clearThis(this)" type="text" defaultValue=" " id={"fan" + id2} style={{ width: '80px', marginTop: '3px', height: '25px', marginLeft: '7px' }} onChange={() => { jumpdecleared(id2) }} />
                                                                                                                                        </dt>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                        <td style={{}} className="biab_bet js-fm-lay-2 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-2 biab_line-market-cell" data-selection-id={15316}
                                                                                                                            data-handicap={0}>
                                                                                                                            <img id={"dec" + id2} onClick={() => { Declare_Mod_fancy(id2, item2.selectionId, item2.runnerName) }} class="importfancy" style={{ marginLeft: '9px' }} alt="" src="data:image/png;base64,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" />
                                                                                                                        </td>

                                                                                                                        <td className="biab_bet js-fm-lay-2 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-2 biab_line-market-cell" data-selection-id={15316} data-handicap={0} style={{ borderRight: 'none' }}>
                                                                                                                            <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px', marginLeft: '-30px', zIndex: '99', position: 'absolute' }} onChange={(e) => fun_void_cancle_action(e.target.value, id2)}>
                                                                                                                                <option value="0">Select</option>
                                                                                                                                <option value="1">Void </option>
                                                                                                                                <option value="2">Cancle</option>
                                                                                                                                <option value="3">Delete</option>
                                                                                                                            </select>

                                                                                                                            <div id={"select" + id2} class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '50px', zIndex: '99', height: '36px', marginLeft: "145px", display: 'block' }}>
                                                                                                                                <a onClick={() => { function_open_CancleFancy(id2, true, item2.eventId, item2.selectionId, item2.runnerName) }}><i class="fa fa-smile-o" style={{ fontSize: '25px', marginTop: '3px' }}></i> </a>  </div>
                                                                                                                            <div id={"void" + id2} class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '50px', zIndex: '99', height: '36px', marginLeft: "145px", display: 'none' }} >
                                                                                                                                <a onClick={() => { function_open_CancleFancy(id2, true, item2.eventId, item2.selectionId, item2.runnerName) }}><img class="importfancy" alt="" src="data:image/png;base64,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" /></a>
                                                                                                                            </div>
                                                                                                                            <div id={"cancle" + id2} class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '50px', zIndex: '99', height: '36px', marginLeft: "145px", display: 'none' }}>
                                                                                                                                <a onClick={() => { function_open_CancleFancy(id2, true, item2.eventId, item2.selectionId, item2.runnerName) }}><i class="fa fa-copyright" style={{ fontSize: '27px', marginTop: '3px' }}></i></a>
                                                                                                                            </div>
                                                                                                                            <div id={"delete" + id2} class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '50px', zIndex: '99', height: '36px', marginLeft: "145px", display: 'none' }}>
                                                                                                                                <a onClick={() => { function_open_CancleFancy(id2, true, item2.eventId, item2.selectionId, item2.runnerName) }}><i class="fa fa-times-circle-o" style={{ fontSize: '27px', marginTop: '3px', color: 'red' }}></i></a>
                                                                                                                            </div>
                                                                                                                        </td>



                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </div>}

                                                                                                </React.Fragment>
                                                                                            )
                                                                                        })}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="js-quick-panel" />
                                                                    <div className="js-mobile-placement-wrapper" />
                                                                </div>
                                                                <div className="biab_overlay js-overlay" />
                                                                <div className="js-event-rules" /></div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </body>
                </div >}
        </React.Fragment >
    )
}



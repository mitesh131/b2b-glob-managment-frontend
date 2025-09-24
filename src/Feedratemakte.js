import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
import Loader from "./Loader";
import io from 'socket.io-client'

const ranNum = Math.floor(Math.random() * 4) + 1;
var ENDPOINT;
if (ranNum == 1) {
    ENDPOINT = "https://liveapi247.live:2053";
}
else if (ranNum == 2) {
    ENDPOINT = "https://liveapi247.live:2083";
}
else if (ranNum == 3) {
    ENDPOINT = "https://liveapi247.live:2087";
}
else {
    ENDPOINT = "https://liveapi247.live:2096";
}
let socket;

const cookies = new Cookies();

const url = window.location.href;
const para = url.split('/');
const sport_id = para[4]
const event_Id = para[5];
const market_ID = para[6];
console.log(sport_id, event_Id, market_ID, "ompk")
function Feedratemakte() {

    const [mainmarket, setmainmarket] = useState([])
    const [updateMarket, setupdateMarket] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const [mname, setmname] = useState()
    const [runn1, setrunn1] = useState()
    const [runn2, setrunn2] = useState()
    const [runn3, setrunn3] = useState()
    const [m_status, setm_status] = useState()
    const [b_status, setb_status] = useState()

    const [runnid3, setrunnid3] = useState()


    const [runactive1, setrunactive1] = useState(false);
    const [runactive2, setrunactive2] = useState(false);
    const [runactive3, setrunactive3] = useState(false);
    const [rateDiff, setrateDiff] = useState(0);

    const [lay1, setlay1] = useState("");
    const [back1, setback1] = useState("");
    const [lay2, setlay2] = useState("");
    const [back2, setback2] = useState("");
    const [lay3, setlay3] = useState("");
    const [back3, setback3] = useState("");
    const [Switched1, setSwitched1] = useState(true);
    const [Switched2, setSwitched2] = useState(true);
    const [Switched3, setSwitched3] = useState(false);
    const [Switched4, setSwitched4] = useState(false);


    const handleSwitched1 = () => { setSwitched1(!Switched1) }
    const handleSwitched2 = () => { setSwitched2(!Switched2) }
    const handleSwitched3 = () => { setSwitched3(!Switched3) }
    const handleSwitched4 = () => { setSwitched4(!Switched4) }


    useEffect(() => {

        socket = io(ENDPOINT);
        socket.on("connect", () => {
            //alert("Connected!!!");
        })
        console.log(socket);

        socket.emit('joined', "user");

        socket.on('welcome', (data) => {
            console.log("ompk", data.message);
        })

        socket.on('feedmessage', (data) => {
            var back1 = "", lay1 = "", back2 = "", lay2 = "", back3 = "", lay3 = "";
            var input = document.getElementById("rateA").value;
            if (input.charAt(input.length - 1) == "+") {
                if (data.input != "") {
                    let rate = parseInt(data.input);
                    setback1(back1 = ("1." + (rate))); setlay1(""); lay1 = "";
                    setback2(back2 = ("1." + (rate))); setlay2(""); lay2 = "";
                    setback3(back3 = ("1." + (rate))); setlay3(""); lay3 = "";
                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }
            else {
                var temp = document.getElementById('rate_diff').value;
                if (!temp) temp = 0;
                console.log(data.input);
                if (data.input != "") {
                    let rate = parseInt(data.input);
                    setback1(back1 = ("1." + (rate)));
                    setlay1(lay1 = ("1." + ((rate) + parseInt(temp))));


                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }

            socket.emit('ManualRate', event_Id, market_ID, sport_id, back1, lay1, back2, lay2, back3, lay3);
            console.log("ManualRate", event_Id, market_ID, sport_id, back1, lay1, back2, lay2, back3, lay3)
        })

        socket.on('feedmessage2', (data) => {
            var back1 = "", lay1 = "", back2 = "", lay2 = "", back3 = "", lay3 = "";
            var input = document.getElementById("rateB").value;
            if (input.charAt(input.length - 1) == "+") {
                if (data.input2 != "") {
                    let rate2 = parseInt(data.input2);
                    setback1(back1 = ("1." + (rate2))); setlay1(""); lay1 = "";
                    setback2(back2 = ("1." + (rate2))); setlay2(""); lay2 = "";
                    setback3(back3 = ("1." + (rate2))); setlay3(""); lay3 = "";
                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }
            else {
                var temp = document.getElementById('rate_diff').value;
                if (!temp) temp = 0;
                console.log(data.input2);
                if (data.input2 != "") {
                    let rate2 = parseInt(data.input2);
                    setback2(back2 = ("1." + (rate2)));
                    setlay2(lay2 = ("1." + ((rate2) + parseInt(temp))));
                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }
            socket.emit('ManualRate', event_Id, market_ID, sport_id, back1, lay1, back2, lay2, back3, lay3);
        })

        socket.on('feedmessage3', (data) => {
            var back1 = "", lay1 = "", back2 = "", lay2 = "", back3 = "", lay3 = "";
            var input = document.getElementById("rateC").value;
            if (input.charAt(input.length - 1) == "+") {
                if (data.input3 != "") {
                    let rate3 = parseInt(data.input3);
                    setback1(back1 = ("1." + (rate3))); setlay1(""); lay1 = "";
                    setback2(back2 = ("1." + (rate3))); setlay2(""); lay2 = "";
                    setback3(back3 = ("1." + (rate3))); setlay3(""); lay3 = "";
                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }
            else {
                var temp = document.getElementById('rate_diff').value;
                if (!temp) temp = 0;
                // console.log(data.input3);
                if (data.input3 != "") {
                    let rate3 = parseInt(data.input3);
                    setback3(back3 = ("1." + (rate3)));
                    setlay3(lay3 = ("1." + ((rate3) + parseInt(temp))));
                }
                else {
                    setback1(""); setlay1(""); setback2(""); setlay2(""); setback3(""); setlay3("");
                    back3 = back2 = back1 = lay3 = lay2 = lay1 = "";
                }
            }
            socket.emit('ManualRate', event_Id, market_ID, sport_id, back1, lay1, back2, lay2, back3, lay3);
        })
        socket.on('ManualRate', (data) => {
            // console.log("ompk",data.event_Id,data.market_ID, data.sport_id,data.back1,data.lay1,data.back2,data.lay2,data.back3,data.lay3);
            var ssid = cookies.get('sid');
            axios.post('https://liveapi247.live/api4/update_manual_market', {
                sid: ssid,
                eventId: data.event_Id,
                marketId: data.market_ID,
                runner1BackRate1: data.back1,
                runner1LayRate1: data.lay1,
                runner2BackRate1: data.back2,
                runner2LayRate1: data.lay2,
                tieBackRate1: data.back3,
                tieLayRate1: data.lay3,
            }).then(result => { }).catch(e => {

            });
        })


        return () => {
            socket.emit('disconnected');
            socket.off();
        }
    }, []);


    const handleKeyPress1 = (target) => {
        var input = document.getElementById("rateA").value;
        var ssid = cookies.get("sid");
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive1 == false) {
                socket.emit('feedrate', input, back1, lay1, back2, lay2, back3, lay3);
                document.getElementById("enableRateCheck").className = "switch_on";
                setrunactive1(true);

                axios.post('https://liveapi247.live/api4/update_manual_market', {
                    sid: ssid,
                    eventId: event_Id,
                    marketId: market_ID,
                    runner1BackRate1: back1,
                    runner1LayRate1: lay1,
                    runner2BackRate1: back2,
                    runner2LayRate1: lay2,
                    tieBackRate1: back3,
                    tieLayRate1: lay3,
                }).then(result => {
                    console.log(result.data, 'result');
                }).catch(e => {

                });
            }

            else {
                socket.emit('feedrate', "");
                document.getElementById("enableRateCheck").className = "switch_off";
                document.getElementById("rateA").value = "";
                setrunactive1(false);
            }
        }
    }

    const handleKeyPress2 = (target) => {
        var input2 = document.getElementById("rateB").value;
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive2 == false) {
                socket.emit('feedrate2', input2, back1, lay1, back2, lay2, back3, lay3);
                document.getElementById("enableRate2Check").className = "switch_on";
                setrunactive2(true);
            }
            else {
                socket.emit('feedrate2', "");
                document.getElementById("enableRate2Check").className = "switch_off";
                document.getElementById("rateB").value = "";
                setrunactive2(false);
            }



        }
    }

    const handleKeyPress3 = (target) => {
        var input3 = document.getElementById("rateC").value;
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive3 == false) {
                socket.emit('feedrate3', input3, back1, lay1, back2, lay2, back3, lay3);
                document.getElementById("enableRate3Check").className = "switch_on";
                setrunactive3(true);
            }
            else {
                socket.emit('feedrate3', "");
                document.getElementById("enableRate3Check").className = "switch_off";
                document.getElementById("rateC").value = "";
                setrunactive3(false);
            }



        }
    }


    useEffect(() => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID
        }).then((result) => {
            if (result.status === 200) {
                setmname(result.data[0].eventName)
                setrunn1(result.data[0].runnerName1)
                setrunn2(result.data[0].runnerName2)
                setrunnid3(result.data[0].runnerId3)
                setm_status(result.data[0].matchStatus)
                setb_status(result.data[0].betStatus)
            }
        })
            .catch((e) => { });
    }, [])

    useEffect(() => {
        if (m_status == 1)
            document.getElementById("MSAC").checked = true;
        else
            document.getElementById("MSAC").checked = false;
        if (b_status == 1)
            document.getElementById("BSAC").checked = true;
        else
            document.getElementById("BSAC").checked = false;
    }, [m_status, b_status])

    const matchodd_bookmaker_market_status_ActiveInactive = () => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/MarketActiveInactive", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID
        })
            .then((result) => {
                if (result.status === 200) {
                    setupdateMarket(!updateMarket);
                    setrefresh(false)
                }
            })
            .catch((e) => { });

    }

    const matchodd_bookmaker_bet_status_ActiveInactive = () => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/betActiveInactive", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID
        })
            .then((result) => {
                if (result.status === 200) {
                    setupdateMarket(!updateMarket);
                    setrefresh(false)
                }
            })
            .catch((e) => { });

    }
    const Market_editmininum = () => {
        var ssid = cookies.get('sid');
        var min = document.getElementById("Ma_Min").value;
        axios.post('https://liveapi247.live/api4/changemarketminStake', {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID,
            minStack: min,
        }).then(result => {
            if (result.status === 200) {
                //  setupdateMarket(!updateMarket00);
            }
        }).catch(e => { });
    }

    const Market_editmaximum = () => {
        var ssid = cookies.get('sid');
        var max = document.getElementById("Ma_Max").value;
        axios.post('https://liveapi247.live/api4/changemarketmaxStake', {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID,
            maxStack: max,
        }).then(result => {
            if (result.status === 200) {
                // setupdateMarket(!updateMarket);
            }
        }).catch(e => { });
    }






    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs" style={{ display: 'flex' }}>
                            <div style={{ width: '32%' }}>
                                <ul className="path" style={{ display: 'flex', height: '32px', width: 'auto', color: 'white', fontSize: '15px', fontWeight: 'bold', paddingTop: '8px' }}>
                                    <li> <a style={{ marginLeft: "-17px" }} href="/DataCricket">Cricket <i class="fas fa-angle-right"></i> </a></li>
                                    <li> <a >{mname}<i class="fas fa-angle-right"></i> </a></li>
                                    <li> <a >Feed Rate<i class="fas fa-angle-right"></i> </a></li>

                                </ul></div>
                            <div style={{ width: '68%' }}>
                                <ul style={{ height: '40px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}>
                                    <li className="feedrate_header_list"></li>
                                    <li > Market Status</li>
                                    <li className="feedrate_header_list"> <input class="form-check-input" style={{ marginTop: '3px', marginLeft: '15px' }} type="checkbox" id="MSAC" onClick={() => { matchodd_bookmaker_market_status_ActiveInactive() }} /></li>
                                    <li > Bet Status</li>
                                    <li className="feedrate_header_list"> <input class="form-check-input" style={{ marginTop: '3px', marginLeft: '15px' }} type="checkbox" id="BSAC" onClick={() => { matchodd_bookmaker_bet_status_ActiveInactive() }} /></li>
                                    <li > Rate Diff.</li>
                                    <li><input id="rate_diff" type="number" style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} /></li>
                                    <li > Min</li>
                                    <li><input id="Ma_Min" type="number" defaultValue="1" style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} onChange={() => { Market_editmininum() }} /></li>
                                    <li > Max</li>
                                    <li><input id="Ma_Max" type="number" defaultValue="100" style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} onChange={() => { Market_editmaximum() }} /></li>


                                </ul>
                            </div>
                        </div>

                        <div class="biab_page-wrapper">
                            <div class="biab_page-holder" style={{ margin: "-28px 0px -46px" }}>
                                <div class="biab_page-container">
                                    <div className="js-scroll-start" style={{ margin: "28px" }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'hidden' }}>

                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '2px' }} >

                                            <div>
                                                <table class="tableReverse">
                                                    <tr class="feeratetable">
                                                        <th class="feeratetable" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Event Name</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Back</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Lay</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Feed Rate</span></th>
                                                        <th class="feeratetable" style={{ width: '30%', textAlign: 'center' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Action</span></th>
                                                    </tr>
                                                    <tr class="feeratetable">
                                                        <th class="feeratetable" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{runn1}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{back1}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{lay1}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>
                                                            <input className="inputfeedrate" type="text" autocomplete="off" id="rateA" onKeyPress={handleKeyPress1} />
                                                        </th>
                                                        <th class="feeratetable" style={{ width: '30%', textAlign: 'center' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <a onClick={handleSwitched1} className="switch_off" id="enableRateCheck">
                                                                    <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                                <span style={{ margin: '7px' }}><strong></strong></span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="feeratetable">
                                                        <th class="feeratetable" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{runn2}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{back2}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{lay2}</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>
                                                            <input className="inputfeedrate" type="text" autocomplete="off" id="rateB" onKeyPress={handleKeyPress2} />
                                                        </th>
                                                        <th class="feeratetable" style={{ width: '30%', textAlign: 'center' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <a onClick={handleSwitched2} className="switch_off" id="enableRate2Check">
                                                                    <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                                <span style={{ margin: '7px' }}><strong></strong></span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    {runnid3 && runnid3 != " " &&
                                                        <tr class="feeratetable">
                                                            <th class="feeratetable" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Draw</span></th>
                                                            <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{back3}</span></th>
                                                            <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{lay3}</span></th>
                                                            <th class="feeratetable" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>
                                                                <input className="inputfeedrate" type="text" autocomplete="off" id="rateC" onKeyPress={handleKeyPress3} />
                                                            </th>
                                                            <th class="feeratetable" style={{ width: '30%', textAlign: 'center' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <a onClick={handleSwitched3} className="switch_off" id="enableRate3Check">
                                                                        <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                                    <span style={{ margin: '7px' }}><strong></strong></span>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    }



                                                </table>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </body>

        </React.Fragment>
    )
}

export default Feedratemakte

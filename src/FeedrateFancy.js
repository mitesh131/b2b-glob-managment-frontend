import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
import Loader from "./Loader";
import socketIo from 'socket.io-client'
const ENDPOINT = "http://localhost:6500/";
let socket;


const cookies = new Cookies();

const url = window.location.href;
const para = url.split('/');
const event_Id = para[4];
const market_ID = para[5];
const selection_Id = para[6];
const fancyid = para[7];
const sport_id = 4;

console.log(sport_id, event_Id, market_ID, "ompk")

function FeedrateFancy() {

    const [updateMarket, setupdateMarket] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const [mname, setmname] = useState()
    const [fancy_name, setfancy_name] = useState()
    const [g_status, setg_status] = useState()
    const [b_status, setb_status] = useState()
    const [runactive1, setrunactive1] = useState(false);
    const [minstackf, setminstackf] = useState()
    const [maxstackf, setmaxstackf] = useState()
    const [rateDiff, setrateDiff] = useState(0);

    const [lay1, setlay1] = useState("");
    const [back1, setback1] = useState("");
    const [laysize1, setlaysize1] = useState("");
    const [backsize1, setbacksize1] = useState("");

    const [Switched1, setSwitched1] = useState(true);


    const handleSwitched1 = () => { setSwitched1(!Switched1) }







    useEffect(() => {

        socket = socketIo(ENDPOINT, { transports: [`websocket`] });
        socket.on("connect", () => {
            //alert("Connected!!!");
        })
        console.log(socket);
        socket.emit('joined', "user");
        socket.on('welcome', (data) => {
            console.log("ompk", data.message);
        })

        socket.on('fancyfeedmessage', (data) => {
            var back1 = "", lay1 = "", backsize1, laysize1;
            var input = document.getElementById("rateA").value;
            if (input.charAt(input.length - 1) == "q") {
                if (data.input != "") {
                    let rate = parseInt(data.input);
                    backsize1 = (document.getElementById("q_back_size").value);
                    laysize1 = (document.getElementById("q_lay_size").value);
                    setback1(back1 = rate); setlay1(lay1 = rate);
                    setbacksize1(backsize1); setlaysize1(laysize1);

                }
                else {
                    setback1(""); setlay1(""); setbacksize1(""); setlaysize1("");
                    back1 = lay1 = backsize1 = laysize1 = "";
                }
            }
            else if (input.charAt(input.length - 1) == "w") {
                if (data.input != "") {
                    let rate = parseInt(data.input);
                    backsize1 = (document.getElementById("w_back_size").value);
                    laysize1 = (document.getElementById("w_lay_size").value);
                    setback1(back1 = rate); setlay1(lay1 = rate);
                    setbacksize1(backsize1); setlaysize1(laysize1);
                }
                else {
                    setback1(""); setlay1(""); setbacksize1(""); setlaysize1("");
                    back1 = lay1 = backsize1 = laysize1 = "";
                }
            }
            else {
                var temp = document.getElementById('rate_diff').value;
                if (!temp) temp = 0;
                console.log(data.input);
                if (data.input != "") {
                    let rate = parseInt(data.input);
                    setback1(back1 = ((rate)));
                    setlay1(lay1 = (rate + parseInt(temp)));
                    setbacksize1(100); setlaysize1(100);
                    backsize1 = laysize1 = 100;
                }
                else {
                    setback1(""); setlay1(""); setbacksize1(""); setlaysize1("");
                    back1 = lay1 = backsize1 = laysize1 = "";
                }
            }
            socket.emit('ManualFancyRate', event_Id, selection_Id, back1, lay1, backsize1, laysize1);
        })



        socket.on('ManualFancyRate', (data) => {
            console.log("manual data", data.event_Id, data.selection_Id, data.back1, data.lay1, data.backsize1, data.laysize1)
            var ssid = cookies.get('sid');
            axios.post('https://liveapi247.live/api4/manual_Fancyfeedrate', {
                sid: ssid,
                eventId: data.event_Id,
                selectionId: data.selection_Id,
                backPrice: data.back1,
                layPrice: data.lay1,
                laySize: data.laysize1,
                backSize: data.backsize1
            }).then(result => { }).catch(e => { });
        })


        return () => {
            socket.emit('disconnected');
            socket.off();
        }

    }, []);

    const handleKeyPress1 = (target) => {
        var input = document.getElementById("rateA").value;
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive1 == false) {
                socket.emit('fancyfeedrate', input, back1, lay1);
                document.getElementById("enableRateCheck").className = "switch_on";
                setrunactive1(true);
            }
            else {
                socket.emit('fancyfeedrate', "");
                document.getElementById("enableRateCheck").className = "switch_off";
                document.getElementById("rateA").value = "";
                setrunactive1(false);
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

            }
        })
            .catch((e) => { });
    }, [])

    useEffect(() => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/Fancy_details", {
            sid: ssid,
            eventId: event_Id,
            selectionId: selection_Id
        }).then((result) => {
            if (result.status === 200) {
                setfancy_name(result.data[0].runnerName)
                setg_status(result.data[0].gameStatus)
                setb_status(result.data[0].betStatus)
                setminstackf(result.data[0].minStack)
                setmaxstackf(result.data[0].maxStack)
            }
        })
            .catch((e) => { });
    }, [])




    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs" style={{ display: 'flex' }}>
                            <div style={{ width: '32%' }}>
                                <ul className="path" style={{ display: 'flex', height: '32px', width: 'auto', color: 'white', fontSize: '15px', fontWeight: 'bold', paddingTop: '8px' }}>
                                    <li> <a style={{ marginLeft: "-17px", fontSize: '12px' }} href="/DataCricket">Cricket <i class="fas fa-angle-right"></i> </a></li>
                                    <li> <a style={{ fontSize: '12px' }} >{mname}<i class="fas fa-angle-right"></i> </a></li>
                                    <li> <a style={{ fontSize: '12px' }}>Feed Rate<i class="fas fa-angle-right"></i> </a></li>

                                </ul></div>
                            <div style={{ width: '68%' }}>
                                <ul style={{ height: '40px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}>
                                    <li >Q </li>
                                    <li style={{ width: '10%' }}><input id="q_back_size" type="number" defaultValue="110" style={{ marginTop: '1px', marginLeft: '5px', width: ' 80%', height: '21px', borderRadius: '5px', paddingLeft: '5px', fontWeight: 'bold' }} /></li>
                                    <li style={{ width: '10%' }}><input id="q_lay_size" type="number" defaultValue="90" style={{ marginTop: '1px', marginLeft: '5px', width: ' 80%', height: '21px', borderRadius: '5px', paddingLeft: '5px', fontWeight: 'bold' }} /></li>
                                    <li style={{ marginLeft: '50px' }} >W </li>
                                    <li style={{ width: '10%' }}><input id="w_back_size" type="number" defaultValue="125" style={{ marginTop: '1px', marginLeft: '5px', width: ' 80%', height: '21px', borderRadius: '5px', paddingLeft: '5px', fontWeight: 'bold' }} /></li>
                                    <li style={{ width: '10%' }}><input id="w_lay_size" type="number" defaultValue="75" style={{ marginTop: '1px', marginLeft: '5px', width: ' 80%', height: '21px', borderRadius: '5px', paddingLeft: '5px', fontWeight: 'bold' }} /></li>
                                    <li style={{ marginLeft: '50px' }} > Rate Diff.</li>
                                    <li> <input id="rate_diff" type="number" style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px', fontWeight: 'bold' }} /></li>


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
                                                        <th class="feeratetable" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Fancy Name</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Back</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Lay</span></th>
                                                        <th class="feeratetable" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Feed Rate</span></th>
                                                        <th class="feeratetable" style={{ width: '30%', textAlign: 'center' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Action</span></th>
                                                    </tr>
                                                    <tr class="feeratetable_fancyname">
                                                        <th class="feeratetable_fancyname" style={{ width: '20%', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{fancy_name}</span></th>
                                                        <th class="feeratetable_fancyname" style={{ width: '10%', textAlign: 'center', backgroundColor: '#a5d8ff' }}>
                                                            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{back1}</span><br />
                                                            <span style={{ fontSize: '12px', }}>{backsize1}</span>
                                                        </th>
                                                        <th class="feeratetable_fancyname" style={{ width: '10%', textAlign: 'center', backgroundColor: '#f9c9d1' }}>
                                                            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{lay1}</span><br />
                                                            <span style={{ fontSize: '12px', }}>{laysize1}</span>
                                                        </th>
                                                        <th class="feeratetable_fancyname" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>
                                                            <input className="inputfeedrate" type="text" autocomplete="off" id="rateA" onKeyPress={handleKeyPress1} />
                                                        </th>
                                                        <th class="feeratetable_fancyname" style={{ width: '30%', textAlign: 'center' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <a onClick={handleSwitched1} className="switch_off" id="enableRateCheck">
                                                                    <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                                <span style={{ margin: '7px' }}><strong></strong></span>
                                                            </div>
                                                        </th>
                                                    </tr>
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

export default FeedrateFancy



/////////////////backup data////////////


// useEffect(() => {
//     if(g_status==1)
//         document.getElementById("MSAC").checked=true;
//     else  
//         document.getElementById("MSAC").checked=false;  
//     if(b_status==1)
//         document.getElementById("BSAC").checked=true;
//     else  
//         document.getElementById("BSAC").checked=false;      
// }, [g_status,b_status])

// const Fancy_Feedrate_market_status_ActiveInactive = () => {
//     var ssid = cookies.get("sid");
//     axios.post("https://liveapi247.live/api4/LiveMatch_FancySession_Marketstatus_active_Inactive",
//             {
//                 sid: ssid,
//                 eventId: event_Id,
//                 id: fancyid,
//             }
//         ).then((result) => {}).catch((e) => { });

// }

// const Fancy_FeedRate_bet_status_ActiveInactive = () => {
//     var ssid = cookies.get("sid");
//     axios.post( "https://liveapi247.live/api4/LiveMatch_FancySession_betstatus_active_Inactive",
//             {
//                 sid: ssid,
//                 eventId: event_Id,
//                 id: fancyid,
//             }
//         ).then((result) => {}).catch((e) => { });

// }
// const Market_editmininum = () => {
//     var ssid = cookies.get('sid');
//     var min = document.getElementById("Ma_Min").value;
//     axios.post('https://liveapi247.live/api4/changeminStake', {
//         sid: ssid,
//         eventId: event_Id,
//         selectionId: selection_Id,
//         minStack: min,
//     }).then(result => {}).catch(e => { });
// }

// const Market_editmaximum = () => {
//     var ssid = cookies.get('sid');
//     var max = document.getElementById("Ma_Max").value;
//     axios.post('https://liveapi247.live/api4/changemaxStake', {
//         sid: ssid,
//         eventId: event_Id,
//         selectionId: selection_Id,
//         maxStack:max,
//     }).then(result => {}).catch(e => { });

// }

// <div style={{ width: '68%' }}>
//                                 <ul style={{ height: '40px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}>
//                                     <li className="feedrate_header_list"></li>
//                                     <li > Market Status</li>
//                                     <li className="feedrate_header_list"> <input class="form-check-input" style={{ marginTop: '3px', marginLeft: '15px' }} type="checkbox" id="MSAC" onClick={() => { Fancy_Feedrate_market_status_ActiveInactive() }} /></li>
//                                     <li > Bet Status</li>
//                                     <li className="feedrate_header_list"> <input class="form-check-input" style={{ marginTop: '3px', marginLeft: '15px' }} type="checkbox" id="BSAC" onClick={() => { Fancy_FeedRate_bet_status_ActiveInactive() }} /></li>
//                                     <li > Rate Diff.</li>
//                                     <li><input id="rate_diff" type="number" style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} /></li>
//                                     <li > Min</li>
//                                     <li><input id="Ma_Min" type="number" defaultValue={minstackf} style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} onChange={() => { Market_editmininum() }} /></li>
//                                     <li > Max</li>
//                                     <li><input id="Ma_Max" type="number" defaultValue={maxstackf} style={{ marginTop: '1px', marginLeft: '5px', width: ' 50%', height: '21px', borderRadius: '5px', paddingLeft: '5px' }} onChange={() => { Market_editmaximum() }} /></li>


//                                 </ul>
//                             </div>
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
import Loader from "./Loader";
import CreateFancyPopup from './CreateFancyPopup';
import CeareMarketPop from './CeareMarketPop';

const cookies = new Cookies();

const url = window.location.href;
const para = url.split('/');
const sport_id = para[4]
const event_Id = para[5];
const market_ID = para[6];
// console.log(sport_id, event_Id, market_ID, "ompk")

function ManualMarket() {

    const [refresh, setrefresh] = useState(false);
    const [cricketList, setcricketList] = useState([]);
    const [reload, setreload] = useState(true);
    const [opencratemarketmatch, setopencratemarketmatch] = useState(false)
    const [opencratemarket, setopencratemarket] = useState(false)
    const [sportname, setsportname] = useState("Cricket");
    const [manuklfanacysession, setmanuklfanacysession] = useState([])
    const [ManualMarket, setManualMarket] = useState([])
    const [updateFancy, setupdateFancy] = useState(false)
    const [UpdateManualmarket, setUpdateManualmarket] = useState(false)
    const [mname, setmname] = useState()

    useEffect(() => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID,
        }).then((result) => {
            if (result.status === 200) {
                setmname(result.data[0].eventName)
            }
        })
            .catch((e) => { });
    }, [])
    useEffect(() => {
        var ssid = cookies.get("sid");
        setrefresh(true)
        axios.post("https://liveapi247.live/api4/Manual_fancy_session", {
            sid: ssid,
            eventId: event_Id,
        })
            .then((result) => {
                if (result.status == 200) {
                    setmanuklfanacysession(result.data);
                    setrefresh(false)
                }
            })
            .catch((e) => { });
    }, [updateFancy]);

    useEffect(() => {
        var ssid = cookies.get("sid");
        setrefresh(true)
        axios.post("https://liveapi247.live/api4/Manual_Market", {
            sid: ssid,
            eventId: event_Id,
        })
            .then((result) => {
                if (result.status == 200) {
                    setManualMarket(result.data);
                    setrefresh(false)
                }
            })
            .catch((e) => { });
    }, [UpdateManualmarket]);

    const mfancy = () => {
        setupdateFancy(!updateFancy)
        setrefresh(false)

    }
    const mMarket = () => {
        setUpdateManualmarket(!UpdateManualmarket)
        setrefresh(false)

    }
    const importManulafancy = (id, sid) => {
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/importManualFancy', {
            sid: ssid,
            eventId: event_Id,
            selectionId: sid,
        }).then(result => {
            if (result.status === 200) {
                setupdateFancy(!updateFancy)
                toast.success('fancy import successfully', { position: toast.POSITION.TOP_CENTER })
                setrefresh(false)
            }
        }).catch(e => { });

    }
    const importManulamarket = (id, mid) => {
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/importManualMarket', {
            sid: ssid,
            eventId: event_Id,
            marketId: mid,
        }).then(result => {
            if (result.status === 200) {
                setUpdateManualmarket(!UpdateManualmarket)
                toast.success('Market import successfully', { position: toast.POSITION.TOP_CENTER })
                setrefresh(false)
            }
        }).catch(e => { });

    }




    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {opencratemarketmatch && <CeareMarketPop event_Id={event_Id} setrefresh={setrefresh} setopencratemarketmatch={setopencratemarketmatch} market_ID={market_ID} mMarket={mMarket} />}
                    {opencratemarket && <CreateFancyPopup event_Id={event_Id} setrefresh={setrefresh} setopencratemarket={setopencratemarket} mfancy={mfancy} />}
                    <body class="biab_fluid_body biab_desktop">
                        <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                            <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                                <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                                <div className="biab_table-tabs js-table-tabs" style={{ display: 'flex' }}>
                                    <div className="menu_add__market123"  >{mname} </div>
                                    <div style={{ display: 'flex', height: '27px', width: '287px', marginLeft: '-10px' }}>
                                        <div className="menu_add__market" onClick={() => { setopencratemarketmatch(true) }} >Add Market</div>
                                        <div className="menu_add__market" onClick={() => { setopencratemarket(true) }}>Add Fancy</div>
                                    </div>
                                </div>

                                <div class="biab_page-wrapper">
                                    <div class="biab_page-holder" style={{ margin: "-28px 0px -46px" }}>
                                        <div class="biab_page-container">
                                            <div className="js-scroll-start" style={{ margin: "28px" }} />
                                            <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'hidden' }}>

                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '2px', display: (ManualMarket.length > 0) ? "block" : "none" }} >
                                                    <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> Maual Market</div>
                                                    <div>
                                                        <table class="tableReverse">
                                                            <tr class="Td_Reverse">
                                                                <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Event Id</th>
                                                                <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Market Id</th>
                                                                <th class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>Market Name</th>
                                                                <th class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }}>Action   </th>
                                                                <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Min </th>
                                                                <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Max</th>
                                                            </tr>
                                                            {ManualMarket.map((item2, id2) => {
                                                                return (
                                                                    <tr key={id2}>
                                                                        <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.eventId}</td>
                                                                        <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.marketId}</td>
                                                                        <td class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>{item2.marketName}</td>
                                                                        <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }} onClick={() => { importManulamarket(id2, item2.marketId) }}>
                                                                            <img className="ActionImport" alt="" src="data:image/png;base64,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" />
                                                                        </td>
                                                                        <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>
                                                                            <input className="minmaxinput" style={{ borderRadius: '5px' }} id="maunal_market_min" type="text" defaultValue={item2.minStack} />
                                                                        </td>
                                                                        <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center', color: 'green' }}>
                                                                            <input className="minmaxinput" style={{ borderRadius: '5px' }} id="maunal_market_max" type="text" defaultValue={item2.maxStack} />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}

                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '20px', display: (manuklfanacysession.length > 0) ? "block" : "none" }}  >
                                                    <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> Maual Fancy</div>
                                                    <div>
                                                        <table class="tableReverse">
                                                            <tr class="Td_Reverse">
                                                                <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Event Id</th>
                                                                <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Selection Id</th>
                                                                <th class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>Fancy Name</th>
                                                                <th class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }}>Action   </th>
                                                                <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Min </th>
                                                                <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Max</th>

                                                            </tr>
                                                            {manuklfanacysession.map((item, id) => {
                                                                return (
                                                                    <tr key={id}>
                                                                        <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item.eventId}</td>
                                                                        <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item.selectionId}</td>
                                                                        <td class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>{item.runnerName}</td>
                                                                        <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center', cursor: 'pointer' }} onClick={() => { importManulafancy(id, item.selectionId) }}>
                                                                            <img className="ActionImport" alt="" src="data:image/png;base64,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" />
                                                                        </td>
                                                                        <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>
                                                                            <input className="minmaxinput" style={{ borderRadius: '5px' }} id="maunal_fancy_min" type="text" defaultValue={item.minStack} />
                                                                        </td>
                                                                        <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>
                                                                            <input className="minmaxinput" style={{ borderRadius: '5px' }} id="maunal_fancy_max" type="text" defaultValue={item.maxStack} />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}

                                                        </table>
                                                    </div>
                                                </div>
                                                {manuklfanacysession.length == 0 && ManualMarket.length == 0 &&
                                                    <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '20px' }}>
                                                        <div style={{ height: '300px', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '24px', fontWeight: 'bold', color: 'gray', backgroundColor: 'whitesmoke' }}>Market is Empty</div>
                                                    </div>}
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

export default ManualMarket

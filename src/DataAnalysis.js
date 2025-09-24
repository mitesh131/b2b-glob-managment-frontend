import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { toast } from 'react-toastify'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Loader from './Loader';
import Cookies from 'universal-cookie';
import Pagination from 'react-js-pagination';


const cookies = new Cookies();

const url = window.location.href;
const para = url.split('/');
const event_Id = para[4];
const market_ID = para[5];
var sportname;
var totalPLvalue = 0;

export const DataAnalysis = () => {

    const [sDate, setsDate] = useState(moment().format("YYYY-MM-DD"));
    const [eDate, seteDate] = useState(moment().add(1, 'days').format("YYYY-MM-DD"));
    const [startDate, setStartDate] = useState(moment().toDate());
    const [endDate, setendDate] = useState(moment().add(1, 'days').toDate());
    const [sTime, setsTime] = useState('09:00')
    const [eTime, seteTime] = useState('08:59')
    const [betmonitoringdata, setbetmonitoringdata] = useState([])
    const [refresh, setrefresh] = useState(true);
    const [Event_Name, setEvent_Name] = useState()
    const [runnername1, setrunnername1] = useState()
    const [runnername2, setrunnername2] = useState()
    const [lenrecord, setlenrecord] = useState(0)
    const [fancylist, setfancylist] = useState([])
    const [userlistwithbet, setuserlistwithbet] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const [filtercopy, setfiltercopy] = useState([])
    const [MatchList, setMatchList] = useState([]);
    const [userSerchEventid, setuserSerchEventid] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(50);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = betmonitoringdata.slice(indexOfFirstPost, indexOfLastPost);
    const [selection_id_shord, setselection_id_shord] = useState()
    const [plvalue, setplvalue] = useState(0)

    console.log(currentPosts, "ompk2sh")


    useEffect(() => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID,
        }).then((result) => {
            if (result.status === 200) {
                setEvent_Name(result.data[0].eventName);
                setrunnername1(result.data[0].runnerName1)
                setrunnername2(result.data[0].runnerName2)
                if (result.data[0].sportId == 4) sportname = "Cricket"
                else if (result.data[0].sportId == "1") sportname = "Soccer"
                else if (result.data[0].sportId == 2) sportname = "Tennis"
            }
        }).catch((e) => { });

        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/getbetmonitoring_fancylist", {
            sid: ssid,
            eventId: event_Id,
        }).then((result) => {

            if (result.status === 200) {
                setfancylist(result.data);

            }
        }).catch((e) => { });


        var ssid = cookies.get('sid');

        axios.post('https://liveapi247.live/api4/Betmonitoring_sreach_user_hightlest_best', {
            sid: ssid,
            eventId: event_Id,

        }).then(result => {
            if (result.status == 200) {
                setuserlistwithbet(result.data)
            }

        }).catch(e => { });

        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitiringdata', {
            sid: ssid,
            eventId: event_Id
        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
                setfilterdata(result.dada);
            }

        }).catch(e => { });
        setrefresh(false)
    }, []);

    const function_bet_type = (betType) => {
        var betT = ""
        if (betType == 1) betT = "match"
        if (betType == 2) betT = "Bookmaker"
        if (betType == 3) betT = "fancy"
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitoring_betType', {
            sid: ssid,
            eventId: event_Id,
            betType: betT
        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
            }

        }).catch(e => { });
        setrefresh(false)



    }
    const function_bet_fancylist = (s_id) => {
        document.getElementById("betType").value = "3"
        // setselection_id_shord("3",s_id);
        function_client_filter("3", s_id)

        // var ssid = cookies.get('sid');
        // setrefresh(true)
        // axios.post('https://liveapi247.live/api4/getbetmonitoring_betfancylist', {
        //     sid: ssid,
        //     eventId: event_Id,
        //     marketId: s_id
        // }).then(result => {
        //     if (result.status == 200) {
        //         setbetmonitoringdata(result.data)
        //         setlenrecord(result.data.length)
        //     }
        // }).catch(e => { });
        // setrefresh(false)

    }

    const function_clientName = () => {
        var cid = document.getElementById("cl_id").value;
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitoring_clientName', {
            sid: ssid,
            eventId: event_Id,
            clientId: cid,
        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
            }

        }).catch(e => { });
        setrefresh(false)

    }

    const function_client_stack = () => {
        var amt = document.getElementById("st_id").value;
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitoring_clientstack', {
            sid: ssid,
            eventId: event_Id,
            amount: amt,
        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
            }

        }).catch(e => { });
        setrefresh(false)

    }
    const serchuser_highbet = (C_id) => {
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitoring_clientName', {
            sid: ssid,
            eventId: event_Id,
            clientId: C_id
        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
            }

        }).catch(e => { });
        setrefresh(false)


    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    const function_shortind_orderby = () => {

    }

    const function_client_filter = (betType, s_id) => {
        var amt = document.getElementById("st_id").value;
        var cid = document.getElementById("cl_id").value;
        var from_time = document.getElementById("from_time").value;
        var to_time = document.getElementById("to_time").value;
        var sel_id = document.getElementById("fancyname").value;
        var user_high_bet = document.getElementById("userhight_bet").value;
        var oderby = document.getElementById("short_order").value;

        var betT = ""
        var shortby_vale = ""
        if (cid == "") { cid = null };
        if (sel_id == "0") sel_id = null;
        if (user_high_bet == "0")
            user_high_bet = null;
        else
            cid = user_high_bet;
        if (betType == 1) betT = "match"
        if (betType == 2) betT = "Bookmaker"
        if (betType == 3) betT = "fancy"
        if (oderby == 1) shortby_vale = "Time"
        if (oderby == 2) shortby_vale = "Lability"
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/getbetmonitoring_filterdata', {
            sid: ssid,
            eventId: event_Id,
            amount: amt,
            clientid: cid,
            betType: betT,
            selectionId: sel_id,
            fromTime: from_time,
            ToTime: to_time,
            OrderBy: shortby_vale,

        }).then(result => {
            if (result.status == 200) {
                setbetmonitoringdata(result.data)
                setlenrecord(result.data.length)
            }

        }).catch(e => { });
        setrefresh(false)

    }


    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs" style={{ display: "flex", width: 'auto' }}>
                            <ul className="path" style={{ display: 'flex', height: '27px', width: "auto" }}>
                                <li> <a style={{ marginLeft: "-17px" }} >{sportname} <i class="fas fa-angle-right"></i> </a></li>
                                <li> <a href="/">{Event_Name}<i class="fas fa-angle-right"></i> </a></li>
                                <li> </li>
                                <li> </li>
                                <li></li>
                            </ul>
                            <ul style={{ display: 'flex', height: '30px', width: "200px", marginLeft: '50px' }}>
                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Enter user</p>
                                        <input id="cl_id" class="input_user_search " placeholder="Enter user" style={{ height: '27px', width: '100px', backgroundColor: 'transparent', color: 'white', fontSize: '12px' }} defaultValue="" onChange={() => { function_client_filter() }} />
                                        <a style={{ marginLeft: '-11px' }} on><i class="fa fa-search"></i></a>
                                        <a style={{ marginLeft: '-11px' }} onClick={() => { function_client_filter() }}><i class="fa fa-search"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '120px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Select Fancy</p>
                                        <select id="fancyname" class="input_user_search " style={{ height: '30px', width: '150px', backgroundColor: 'transparent', color: 'gray', fontSize: '12px' }} onChange={(e) => { function_bet_fancylist(e.target.value) }} >
                                            <option value="0">Select Fancy List </option>
                                            {fancylist.map((item2, id2) => {
                                                return (
                                                    <option value={item2.selectionId}>{item2.runnerName}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                </li>

                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '290px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Select user bet</p>
                                        <select id="userhight_bet" class="input_user_search " style={{ height: '30px', width: '100px', backgroundColor: 'transparent', color: 'gray', fontSize: '12px' }} onChange={(e) => { serchuser_highbet(e.target.value) }}>
                                            <option value="0">User with bets-{userlistwithbet.length}</option>
                                            {userlistwithbet.map((item3, id3) => {
                                                return (
                                                    <option value={item3.clientId}>{item3.No_of_bet}--{item3.clientId}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '410px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Enter Stack</p>
                                        <input id="st_id" class="input_user_search " placeholder="Enter stack" style={{ height: '27px', width: '100px', backgroundColor: 'transparent', color: 'white', fontSize: '12px' }} defaultValue="" onChange={() => { function_client_filter() }} />
                                        <a style={{ marginLeft: '-11px' }} on><i class="fa fa-search"></i></a>
                                        <a style={{ marginLeft: '-11px' }} onClick={() => { function_client_filter() }}><i class="fa fa-search"></i></a>
                                    </div>
                                </li>

                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '530px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Select Market</p>
                                        <select id="betType" class="input_user_search " style={{ height: '30px', width: '100px', backgroundColor: 'transparent', color: 'gray', fontSize: '12px' }} onChange={(e) => { function_client_filter(e.target.value) }}  >
                                            <option value="0">Select Market</option>
                                            <option value="1">match</option>
                                            <option value="2">Book Maker</option>
                                            <option value="3">fancy</option>

                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '650px', width: '150px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>From</p>
                                        <div class="input_user_search " >
                                            <DatePicker id="from_time"
                                                selectsStart
                                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                                width="80%"
                                                // selected={startDate}
                                                placeholderText="YYYY-MM-DD"
                                                className="cal-input "
                                                onChange={(date) => { setStartDate(date); setsDate(moment(date).format("YYYY-MM-DD")); }}
                                            /></div>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '780px', width: '130px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>To</p>
                                        <div class="input_user_search " >
                                            <DatePicker id="to_time"
                                                selectsStart
                                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                                width="80%"
                                                //   selected={startDate}
                                                placeholderText="YYYY-MM-DD"
                                                className="cal-input "
                                                onChange={(date) => { setStartDate(date); setsDate(moment(date).format("YYYY-MM-DD")); }}
                                            /></div>
                                    </div>
                                </li>

                            </ul>


                        </div>
                        <div className="biab_table-tabs js-table-tabs" style={{ display: "flex", width: 'auto' }}>
                            <ul className="path" style={{ display: 'flex', height: '27px', width: "auto", backgroundColor: '#373b4b' }}>
                                <li > <a style={{ marginLeft: "-17px", color: '#373b4b' }} >{sportname} <i class="fas fa-angle-right"></i> </a></li>
                                <li> <a href="/" style={{ color: '#373b4b' }}>{Event_Name}<i class="fas fa-angle-right"></i> </a></li>
                                <li> </li>
                                <li> </li>
                                <li></li>
                            </ul>
                            <ul style={{ display: 'flex', height: '30px', width: "200px", marginLeft: '50px' }}>

                                <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Select Sorting Order</p>
                                        <select id="short_order" class="input_user_search " style={{ height: '30px', width: '150px', backgroundColor: 'transparent', color: 'gray', fontSize: '12px' }} onChange={(e) => { function_client_filter() }} >
                                            <option value="0">Sorting Order By </option>
                                            <option value="1">Time</option>
                                            <option value="2">Lability</option>
                                        </select>
                                    </div>
                                </li>



                            </ul>


                        </div>
                        <div class="biab_page-wrapper">
                            <div class="biab_page-holder" style={{ margin: "-22px 6px -46px" }}>
                                <div class="biab_page-container">


                                    <div className="js-scroll-start" style={{ margin: "28px" }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'auto' }}>
                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '107px' }}>
                                            <div className="js-cancel-bets-wrapper">
                                                <div className="biab_cancel-all-bets-wrapper"><span className="js-cancel-all-btn biab_btn biab_cancel-btn biab_hide " style={{}}>Cancel All Unmatched Bets</span><span className="js-confirm-cancel-all-btn biab_btn biab_confirm-btn biab_hide " style={{}}>Confirm Cancellation</span></div>
                                            </div>


                                            <div className="js-loading biab_loading biab_hide"><i className="fa fa-spinner fa-pulse fa-3x fa-fw" /></div>
                                            <React.Fragment>
                                                {refresh === true &&
                                                    <Loader />}
                                                {refresh == false &&
                                                    <div className="biab_table-wrapper js-table-wrapper" s>
                                                        <div className="biab_table-holder" >
                                                            <div className="biab_info-msg js-info-msg biab_mybets-info biab_hide">Please be aware that back odds value for lay bet is approximate and rounded up to 0.01 precision</div>
                                                            <table className="biab_table biab_mybets">
                                                                <colgroup>
                                                                    <col width={83} />
                                                                    <col width={330} />
                                                                    <col width={56} />
                                                                    <col width={66} />
                                                                    <col width={66} />
                                                                    <col width={53} />
                                                                    <col width={60} />
                                                                    <col width={86} />
                                                                    <col width={120} />
                                                                    <col width={90} />
                                                                </colgroup>
                                                                <thead>
                                                                    <tr>
                                                                        <th className>User Name</th>
                                                                        <th className="biab_odd" style={{ textAlign: 'left', color: 'green' }}>Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Record:- {lenrecord}</th>
                                                                        <th className>Type</th>
                                                                        <th className="biab_odd">Odds</th>
                                                                        <th className>Stake</th>
                                                                        <th className="biab_odd">Laibility  </th>
                                                                        <th className="biab_odd">Potential +</th>
                                                                        <th className>Loss/Profit</th>
                                                                        <th className="biab_odd">Bet Time</th>
                                                                        <th className>Status</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody className="biab_mybets-body js-mybets-body">
                                                                    {currentPosts.map((item, id) => {
                                                                        // console.log(currentPosts,"ompk")
                                                                        var teamame;
                                                                        var status = "", Amount = "", lability = "", Loss = "", Profit = "", onbet = "";
                                                                        var fancy_res = "", Pro_loss = "", mainP_l;
                                                                        var potrntiol_pl, bet_Type_name;
                                                                        if (item.teamName == "A") teamame = runnername1
                                                                        if (item.teamName == "B") teamame = runnername2
                                                                        if (item.teamName == "T") teamame = "DRAW"
                                                                        if (item.betType == "fancy") {
                                                                            bet_Type_name = item.type;
                                                                            Amount = item.amount + " / " + (parseFloat(item.teamName)).toFixed(2);
                                                                            lability = (item.amount * item.teamName);
                                                                            Loss = lability; Profit = item.amount;
                                                                            potrntiol_pl = item.amount;
                                                                            if (item.type == "YES") {
                                                                                if (item.rate <= item.result) { fancy_res = "P"; Pro_loss = ("+" + item.amount); }
                                                                                else { Pro_loss = ("-" + lability); fancy_res = "L"; }
                                                                            }
                                                                            else if (item.type == "NO") {
                                                                                if (item.result < item.rate) { fancy_res = "P"; Pro_loss = ("+" + item.amount); }
                                                                                else { Pro_loss = ("-" + lability); fancy_res = "L"; }
                                                                            }
                                                                            onbet = item.runnerName;

                                                                        }
                                                                        else {
                                                                            if (item.matchStatus == 4 || item.matchStatus == 2) {
                                                                                if (item.teamName == item.winner) { Pro_loss = ("+" + item.amount); fancy_res = "P" }
                                                                                else { Pro_loss = ("-" + item.rate * item.amount); fancy_res = "L" }

                                                                            }
                                                                            if (item.type == "LAGAI") {
                                                                                lability = item.amount;
                                                                                bet_Type_name = "BACK";
                                                                                potrntiol_pl = (item.rate * item.amount);
                                                                                if (item.matchStatus == 4 || item.matchStatus == 2) {
                                                                                    if (item.teamName == item.winner) { Pro_loss = ("+" + (item.rate * item.amount)); fancy_res = "P" }
                                                                                    else { Pro_loss = ("-" + item.amount); fancy_res = "L" }

                                                                                }

                                                                            }
                                                                            if (item.type == "KHAI") {
                                                                                bet_Type_name = "LAY"
                                                                                potrntiol_pl = item.amount;
                                                                                lability = (item.rate * item.amount);
                                                                                if (item.matchStatus == 4 || item.matchStatus == 2) {
                                                                                    if (item.teamName == item.winner) { Pro_loss = ("-" + (item.rate * item.amount)); fancy_res = "L" }
                                                                                    else { Pro_loss = ("+" + item.amount); fancy_res = "P" }

                                                                                }

                                                                            }



                                                                            // lability= item.rate * item.amount;
                                                                            // potrntiol_pl= item.amount;

                                                                            onbet = teamame;
                                                                            Amount = item.amount;

                                                                        }


                                                                        if (item.status == 1) { status = "OPEN"; mainP_l = "OPEN" }
                                                                        if (item.status == 2) {
                                                                            status = "SETTLED";
                                                                            mainP_l = (parseFloat(Pro_loss)).toFixed(2);

                                                                        }






                                                                        return (
                                                                            <tr key={id}>
                                                                                <td class=" biab_bet-indicator biab_bet-side-lay biab_fancy-swap " style={{ fontWeight: 'bold' }}>{item.clientId}</td>
                                                                                <td class="biab_text-left biab_odd">
                                                                                    <a class="biab_eventName" href="/customer/sport/event/31084115" style={{ fontWeight: 'bold' }}>{Event_Name}</a>
                                                                                    <span class="biab_selectionName" style={{ fontWeight: 'bold' }}><strong style={{ display: 'inline' }}>{onbet}</strong></span>
                                                                                    {/* <a class="biab_selectionName" href="/customer/sport/fancyEvent/31084115/FIRST_INNINGS_FANCY" style={{ fontWeight: 'bold' }}>{item.runnerName}</a> */}
                                                                                    <span class="biab_groupName" style={{ fontWeight: 'bold' }}>{item.betType}&nbsp;| Bet ID: {item.id} </span>
                                                                                </td>
                                                                                <td style={{ textTransform: "capitalize", fontWeight: 'bold' }}>{bet_Type_name}</td>
                                                                                <td class="biab_odd" style={{ fontWeight: 'bold' }}>{item.rate}</td>
                                                                                <td class="" style={{ fontWeight: 'bold' }}>{Amount}</td>
                                                                                <td class="biab_odd" style={{ fontWeight: 'bold', color: "red" }}>{(parseFloat(lability)).toFixed(2)}</td>
                                                                                <td class="" style={{ fontWeight: 'bold', color: "green" }}>{(parseFloat(potrntiol_pl)).toFixed(2)}</td>
                                                                                <td class="biab_odd" style={{ fontWeight: 'bold', color: (fancy_res == "P" ? "green" : "red") }}>{mainP_l}</td>
                                                                                <td class="" style={{ fontWeight: 'bold' }}>{item.betTime}</td>
                                                                                <td class="biab_odd" style={{ fontWeight: 'bold', textTransform: "capitalize", color: (item.status == 1 ? "red" : "green") }}>{status}</td>
                                                                            </tr>
                                                                        )
                                                                    })}


                                                                </tbody>
                                                            </table>
                                                            <div className="biab_table-widget" style={{ display: 'none' }}>
                                                                <div className="biab_btns-holder"><a href="#" className="biab_widget-btn biab_btn-prev js-prev disabled">Previous</a><a href="#" className="biab_widget-btn biab_btn-next js-next disabled">Next</a></div>
                                                                <div className="biab_info"><span className="biab_counter js-counter">Page 1 of 1</span>
                                                                    <div className="biab_view-per-page js-view-per-page" /></div>
                                                            </div>
                                                        </div>


                                                        {betmonitoringdata.length > 0 && <div className="pages" style={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}>
                                                            <Pagination prevPageText='PREV'
                                                                pageRangeDisplayed={3}
                                                                activePage={currentPage}
                                                                nextPageText='NEXT'
                                                                totalItemsCount={betmonitoringdata.length}
                                                                onChange={handlePageChange}
                                                                itemsCountPerPage={postsPerPage}
                                                                hideFirstLastPages
                                                            />
                                                        </div>}
                                                    </div>}
                                            </React.Fragment>


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


// useEffect(() => {

//     var ssid = cookies.get("sid");
//     axios.post("https://liveapi247.live/api4/OnlyEventName", {
//         sid: ssid,
//         eventId: event_Id,
//         marketId:market_ID,
//     })
//         .then((result) => {

//             if (result.status === 200) {
//                 setEvent_Name(result.data[0].eventName);
//                 setrunnername1(result.data[0].runnerName1)
//                 setrunnername1(result.data[0].runnerName2)

//                 if(result.data[0].sportId==4)sportname="Cricket"
//                 else if(result.data[0].sportId=="1")sportname="Soccer"
//                 else if(result.data[0].sportId==2)sportname="Tennis"


//             }
//         })
//         .catch((e) => { });
// }, [])

{/* <li>
                                    <div style={{ height: '30px', position: 'absolute', zIndex: '99', marginLeft: '290px' }}>
                                        <p style={{ color: 'white', fontSize: '8px', marginTop: '-8px', position: 'absolute', zIndex: '99', color: 'skyblue' }}>Select Result</p>
                                        <select class="input_user_search " style={{ height: '30px', width: '100px', backgroundColor: 'transparent', color: 'gray', fontSize: '12px' }} >
                                            <option value="0">Select Result</option>
                                            <option value="1">All</option>
                                            <option value="2">Won</option>
                                            <option value="3">Lost</option>
                                            <option value="4">Unsettled</option>
                                            <option value="4">Rollback</option>
                                            <option value="4">Voided</option>
                                        </select>
                                    </div>
                                </li> */}
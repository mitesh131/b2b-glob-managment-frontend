import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import moment from 'moment';
const cookies = new Cookies();
var CAIA = "CAIA";

function BetMonitoring(props) {

    const [refresh, setrefresh] = useState(true);
    const [cricketList, setcricketList] = useState([]);
    const [reload, setreload] = useState(true);
    const [Sporttype, setSporttype] = useState(4)
    const [dec_matach_lkist, setdec_matach_lkist] = useState([])
    const [sportname, setsportname] = useState("Cricket");
    useEffect(() => {

        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);

        axios.post('https://liveapi247.live/api4/Count_bet_details', {
            sid: ssid,
            sportId: Sporttype
        })
            .then(result => {
                setrefresh(false);
                //console.log(result.data);
                var res = [];
                if (result.status === 200) {
                    setdec_matach_lkist(result.data)
                    result.data.sort(function (a, b) {
                        return moment(a.marketStartTime) - moment(b.marketStartTime);
                    });
                    setcricketList(res);
                }
            }
            ).catch(e => { });
    }, [Sporttype, reload])



    const function_sportType = (type) => {
        setSporttype(type);
        if (type == "4") setsportname("Cricket")
        if (type == "1") setsportname("Soccer")
        if (type == "2") setsportname("Tennis")
    }



    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: '287px' }}>
                                <li onClick={() => { function_sportType(4) }} className={`${(Sporttype === 4) ? "tab_active" : "tab"}`}> <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                <li><a onClick={() => { function_sportType(1) }} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}>Soccer</a></li>
                                <li><a onClick={() => { function_sportType(2) }} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}>Tennis</a></li>
                                <li><a onClick={() => { function_sportType(7522) }} className={`${(Sporttype === 7522) ? "tab_active" : "tab"}`}>BasketBall</a></li>
                            </ul>
                        </div>
                        <div class="biab_page-wrapper">
                            <div class="biab_page-holder" style={{ margin: "-28px 0px -46px" }}>
                                <div class="biab_page-container">
                                    <div className="js-scroll-start" style={{ margin: "28px" }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'hidden' }}>
                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '107px' }}>

                                            <div style={{ marginBottom: '20px', marginLeft: '0px' }}>
                                                <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> Market</div>
                                                <div>
                                                    <table class="tableReverse">
                                                        <tr class="Td_Reverse">
                                                            <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>DateTime</th>
                                                            <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Event Id</th>
                                                            <th class="Td_Reverse" style={{ width: '35%', textAlign: 'center' }}>Event Name</th>
                                                            <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Total Bets </th>
                                                            <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Open Bets</th>
                                                            <th class="Td_Reverse" style={{ width: '15%', fontSize: '24px', textAlign: 'center' }}>Bet Monitor</th>
                                                        </tr>
                                                        {dec_matach_lkist.map((item2, id) => {
                                                            var matchTime;
                                                            var today = moment();
                                                            var tommorow = moment().add(1, 'day');

                                                            if (moment(item2.marketStartTime).isSame(today, 'day')) {
                                                                matchTime = moment(item2.marketStartTime).format('LT');
                                                                matchTime = "Today" + " " + matchTime;
                                                            }
                                                            else if (moment(item2.marketStartTime).isSame(tommorow, 'day')) {
                                                                matchTime = 'Tommorow' + ' ' + moment(item2.marketStartTime).format('LT');;
                                                            }
                                                            else {
                                                                matchTime = item2.marketStartTime;
                                                            }


                                                            return (
                                                                <tr key={id} >
                                                                    <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center', backgroundColor: `${(moment() >= moment(item2.marketStartTime)) ? "#86BA00" : "whitesmoke"}` }}>{matchTime}</td>
                                                                    <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.eventId}</td>
                                                                    <td class="Td_Reverse" style={{ width: '35%', textAlign: 'center' }}>{item2.runnerName1}Vs{item2.runnerName2}</td>
                                                                    <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>{item2.Total_bet}</td>
                                                                    <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center', color: 'green' }}> {item2.Total_Open_Bet}</td>
                                                                    <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center', fontSize: '24px' }}>
                                                                        <a id="marketPath" href={`/DataAnalysis/${item2.eventId}/${item2.marketId}`}  ><i class="fas fa-plus-circle"></i> </a>
                                                                    </td>

                                                                </tr>
                                                            )
                                                        })}

                                                    </table>
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


        </React.Fragment>
    )
}

export default BetMonitoring





{/* <div className="right_col" role="main" style={{ height: '100%' }}>
                <div className="biab_body biab_fluid" id="biab_body">
                    <div className="loading">
                        <div className="biab_loading-spinner js-inplay-spinner " style={{ display: 'block' }} /></div>
                    <div className="biab_wrapper js-wrapper">
                        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                        <div className="biab_table-tabs js-table-tabs">
                        <ul className="path" style={{ display: 'flex', height: '27px', width: '193px' }}>
                        <li className="tab_active" onClick={()=>{function_sportType(4)}}  className={`${(Sporttype === 4) ? "tab_active" : "tab"}`}> <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                            <li><a  onClick={()=>{function_sportType(1)}} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}>Soccer</a></li>
                            <li><a  onClick={()=>{function_sportType(2)}} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}>Tennis</a></li>
                        </ul>
                    </div>
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder">
                                <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                    <div>

                                        <div className="js-inplay-sports-list">
                                            <div className=" biab_inplay-sport-wrapper">
                                                <div className="biab_inplay-sport-item-title">{sportname}</div>
                                                <div className="js-markets-list" style={{ display: 'block' }}>
                                                    <div className="js-inplay-sport-region biab_inplay-sport-competitions-list"> 
                                                        <div className="biab_group-markets">
                                                            <table className="biab_group-markets-table biab_inplay-sport-table js-markets-list-header">
                                                                <colgroup>
                                                                    <col width={65} /><col /><col width={80} /><col width={75} />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col className="biab_table-col" width="8%" />
                                                                    <col width={50} />
                                                                </colgroup>
                                                               
                                                            </table>
                                                            <div className="js-markets-list">
                                                            <div className="biab_table-wrapper">
                                                                {dec_matach_lkist.map((item2, id) => {

                                                                    return (   
                                                                    <table key={id} className="biab_group-markets-table js-inplay-market" data-event-id={31087000} data-market-id="1.191364518">
                                                                        <colgroup>
                                                                            <col width={65} /><col /><col width={80} /><col width={75} />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col className="biab_table-col" width="8%" />
                                                                            <col width={50} />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                    <div className="biab_not-in-play">
                                                                                        <span className="biab_market-time">{item2.marketStartTime}</span></div>
                                                                                </td>
                                                                                <td className="biab_market-title-cell ">
                                                                                    <a id="marketPath" href="/DataAnalysis" style={{color: 'black', textDecoration: 'none'}}>
                                                                                        <div className="biab_market-title-team-names js-teams">{item2.runnerName1}<br />{item2.runnerName2}</div>
                                                                                    </a>   
                                                                                </td>
                                                                                <td></td>   <td></td>   <td></td>   <td></td>   <td></td>   <td></td> <td></td><td></td>       
                                                                                
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    )})}

                                                                </div>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    */}
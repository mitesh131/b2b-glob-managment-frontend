import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import moment from 'moment';
import Loader from './Loader';
import { ScoreLink } from './ScoreLink';

const cookies = new Cookies();
var CAIA = "CAIA";

export const Manage = (props) => {
    const url = window.location.href;
    const para = url.split('/');
    const sport_id = para[4];
    const [refresh, setrefresh] = useState(true);
    const [matchList, setmatchList] = useState([])
    const [updatemarketdate, setupdatemarketdate] = useState(false);
    const [matchType, setmatchType] = useState(4)
    const [openPopup, setopenPopup] = useState(false)
    const [onswitch, setonswitch] = useState(false)
    const [openScorePOPUO, setopenScorePOPUO] = useState(false)
    const [E_id_socre, setE_id_socre] = useState("")


    useEffect(() => {
        if (sport_id == 1 || sport_id == 4 || sport_id == 2 || sport_id == 7522 || sport_id == 2378962)
            setmatchType(sport_id)
        else
            setmatchType(4)

        return () => { }
    }, [])

    useEffect(() => {
        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/LiveMatch', {
            sid: ssid,
            eventType: matchType
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
            //console.log("ompk", result.data);



        }).catch(e => { });





    }, [matchType, updatemarketdate]);

    const fun_ScoreClickOpen = (index, bool, e_id) => {
        setopenScorePOPUO(bool);
        setE_id_socre(e_id)



    }
    const change_color = (id) => {
        document.getElementById("abc" + id).backgroundColor = "blue";

    }




    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {openScorePOPUO && <ScoreLink fun_ScoreClickOpen={fun_ScoreClickOpen} E_id_socre={E_id_socre} setopenScorePOPUO={setopenScorePOPUO} />}
                    <div className="right_col" role="main" style={{ height: '100%' }}>
                        <div className="biab_body biab_fluid" id="biab_body">
                            <div className="loading">
                                <div className="biab_loading-spinner js-inplay-spinner " style={{ display: 'block' }} /></div>
                            <div className="biab_wrapper js-wrapper">
                                <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                                <div className="biab_table-tabs js-table-tabs">
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: '360px' }}>
                                        <li onClick={() => { setmatchType(4) }} className={`${(matchType === 4) ? "tab_active" : "tab"}`} > <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                        <li onClick={() => { setmatchType(1) }} className={`${(matchType === 1) ? "tab_active" : "tab"}`}><a>Soccer</a></li>
                                        <li onClick={() => { setmatchType(2) }} className={`${(matchType === 2) ? "tab_active" : "tab"}`}><a>Tennis</a></li>
                                        <li onClick={() => { setmatchType(7522) }} className={`${(matchType === 7522) ? "tab_active" : "tab"}`}><a>BasketBall</a></li>
                                        <li onClick={() => { setmatchType(2378962) }} className={`${(matchType === 2378962) ? "tab_active" : "tab"}`}><a>Election</a></li>
                                    </ul>
                                </div>
                                <div className="biab_page-wrapper" >
                                    <div className="biab_page-holder">
                                        <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                            <div>

                                                <div className="js-inplay-sports-list">
                                                    <div className=" biab_inplay-sport-wrapper">
                                                        <div className="biab_inplay-sport-item-title">Cricket</div>
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
                                                                        <thead>
                                                                            <tr>
                                                                                <th colSpan={1} ></th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="" data-original-title="true"> </th>
                                                                                <th  > </th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text=""></th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Betfair">Manual Market</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="OddLimit">OddLimit</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="ScoreCard">ScoreCard</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Tv Link">Tv Link</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Bookmaker">Bookmaker</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="">Fancy</th>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                    <div className="js-markets-list">
                                                                        <div className="biab_table-wrapper">
                                                                            {matchList.map((item2, index) => {
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
                                                                                    <table key={index} className="biab_group-markets-table js-inplay-market " data-event-id={31087000} data-market-id="1.191364518">
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
                                                                                        <tbody class='ooppkk'>
                                                                                            <tr >
                                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell  " style={{ backgroundColor: `${(moment() >= moment(item2.marketStartTime)) ? "#86BA00" : "white"}` }}>
                                                                                                    <div className="biab_not-in-play" >
                                                                                                        <span className="biab_market-time">{matchTime}</span>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="biab_market-title-cell ">
                                                                                                    <a id="marketPath" href="" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                                        <div className="biab_market-title-team-names js-teams"  >{item2.runnerName1}<br />{item2.runnerName2}</div>

                                                                                                    </a>
                                                                                                </td>
                                                                                                <td className="js-inline-placement-label ">
                                                                                                    <div className="biab_inline-placement-labels-wrap" style={{ color: 'gray', paddingLeft: '25px', fontWeight: 'bold', fontSize: '14px' }} >{item2.eventId}</div>
                                                                                                </td>
                                                                                                <td className="biab_market-total-matched-cell ">
                                                                                                    <span className="js-market-total-matched" />
                                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="  js-back-0 biab_bet-back js-bet-back biab_hidden-xs" id={"abc" + index} style={{ background: '#efefef ', border: '1px solid #ebe6e6 ' }} data-selection-id={11921197}>
                                                                                                    <a href={`/ManualMarket/${item2.sportId}/${item2.eventId}/${item2.marketId}`}>  <i class="fas fa-plus-circle"></i></a>
                                                                                                </td>
                                                                                                <td onClick={() => { props.OddLimitOpen(true) }} className=" biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={11921197}>
                                                                                                    <i class="fas fa-plus-circle"></i>
                                                                                                </td>

                                                                                                <td className=" biab_hidden-xs biab_empty-cell" onClick={() => { fun_ScoreClickOpen(index, true, item2.eventId) }} id="colormaker" > <i class="fas fa-plus-circle"></i></td>
                                                                                                <td onClick={() => { props.TvClickOpen(index, true, item2.eventId) }} className=" biab_empty-cell biab_hidden-xs" id="colormaker"> <i class="fas fa-plus-circle"></i></td>

                                                                                                <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={104487}>
                                                                                                    <a href={`/ImportBookmaker/${item2.sportId}/${item2.eventId}/${item2.marketId}`}>
                                                                                                        <i class="fas fa-plus-circle"></i>
                                                                                                    </a>
                                                                                                </td>

                                                                                                <td className=" biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={104487}>
                                                                                                    <a href={`/FancyImport/${item2.sportId}/${item2.eventId}/${item2.marketId}`}>
                                                                                                        <i class="fas fa-plus-circle"></i>
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td className="biab_buttons-cell ">
                                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31087000" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}



{/* <div className="biab_table-wrapper">
                                                                    <table className="biab_group-markets-table js-inplay-market">
                                                                        <colgroup>
                                                                            <col width={65} />
                                                                            <col />
                                                                            <col width={80} />
                                                                            <col width={75} />
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
                                                                                    <div>
                                                                                        <div className="biab_in-not-play">
                                                                                            <span className="biab_market-time">26 December<br />13:30</span></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="biab_market-title-cell ">
                                                                                    <div className="biab_market-title-team-names js-teams">SA Redbacks<br />Qld Bulls</div>
                                                                                </td>
                                                                                <td className="js-inline-placement-label ">
                                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                                </td>
                                                                                <td className="biab_market-total-matched-cell ">
                                                                                    <span className="js-market-total-matched" />
                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className=" js-back-0 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={11871983}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={11871983}>

                                                                                </td>

                                                                                <td className=" biab_hidden-xs biab_empty-cell" id="colormaker"></td>
                                                                                <td className=" biab_empty-cell biab_hidden-xs" id="colormaker"></td>

                                                                                <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={11871985}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={11871985}>

                                                                                </td>
                                                                                <td className="biab_buttons-cell ">
                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31082756" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                        title="View all markets" /></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="js-inline-placement-component">
                                                                        <div className="biab_inline-placement" /></div>
                                                                    <div className="js-status-wrapper">
                                                                        <div /></div>
                                                                </div> */}
{/* <div className="biab_table-wrapper">
                                                                    <table className="biab_group-markets-table js-inplay-market" data-event-id={31078088} data-market-id="1.191222236">
                                                                        <colgroup>
                                                                            <col width={65} />
                                                                            <col />
                                                                            <col width={80} />
                                                                            <col width={75} />
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
                                                                                    <div>
                                                                                        <div className="biab_not-in-play">
                                                                                            <span className="biab_market-time">26 December<br />13:30</span></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="biab_market-title-cell ">
                                                                                    <div className="biab_market-title-team-names js-teams">Tas Tigers<br />Western Australia</div>
                                                                                </td>
                                                                                <td className="js-inline-placement-label ">
                                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                                </td>
                                                                                <td className="biab_market-total-matched-cell ">
                                                                                    <span className="js-market-total-matched" />
                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className=" js-back-0 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={11885284}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={11885284}>

                                                                                </td>

                                                                                <td className=" biab_hidden-xs biab_empty-cell" id="colormaker"></td>
                                                                                <td className=" biab_empty-cell biab_hidden-xs" id="colormaker"></td>

                                                                                <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={104483}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={104483}>

                                                                                </td>
                                                                                <td className="biab_buttons-cell ">
                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31078088" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                        title="View all markets" /></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="js-inline-placement-component">
                                                                        <div className="biab_inline-placement" /></div>
                                                                    <div className="js-status-wrapper">
                                                                        <div /></div>
                                                                </div> */}
{/* <div className="biab_table-wrapper">
                                                                    <table className="biab_group-markets-table js-inplay-market" data-event-id={31078405} data-market-id="1.191374088">
                                                                        <colgroup>
                                                                            <col width={65} />
                                                                            <col />
                                                                            <col width={80} />
                                                                            <col width={75} />
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
                                                                                    <div>
                                                                                        <div className="biab_in-notplay">
                                                                                            <span className="biab_market-time">26 December<br />13:30</span></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="biab_market-title-cell ">
                                                                                    <div className="biab_market-title-team-names js-teams">Otago<br />Northern Districts</div>
                                                                                </td>
                                                                                <td className="js-inline-placement-label ">
                                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                                </td>
                                                                                <td className="biab_market-total-matched-cell ">
                                                                                    <span className="js-market-total-matched" />
                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className=" js-back-0 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={86362}>
                                                                                    <i class="fas fa-plus-circle"></i>
                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={86362}>

                                                                                </td>

                                                                                <td className=" js-back-2 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={60443}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-2 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={60443}>

                                                                                </td>

                                                                                <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" data-selection-id={86360}>

                                                                                </td>
                                                                                <td className=" biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" id="colormaker" data-selection-id={86360}>

                                                                                </td>
                                                                                <td className="biab_buttons-cell ">
                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31078405" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                        title="View all markets" /></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="js-inline-placement-component">
                                                                        <div className="biab_inline-placement" /></div>
                                                                    <div className="js-status-wrapper">
                                                                        <div /></div>
                                                                </div> */}


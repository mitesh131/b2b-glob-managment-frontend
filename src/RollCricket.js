import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Loader from './Loader';
import moment from 'moment';



const cookies = new Cookies();
export const RollCricket = (props) => {
    const [refresh, setrefresh] = useState(false);
    const [cricketList, setcricketList] = useState([]);
    const [soccerList, setsoccerList] = useState([]);
    const [tennisList, settennisList] = useState([]);
    const [reload, setreload] = useState(true);
    const [cricket, setcricket] = useState(false);
    const [Sporttype, setSporttype] = useState(4)
    const [dec_matach_lkist, setdec_matach_lkist] = useState([])
    const [sportname, setsportname] = useState("Cricket");
    useEffect(() => {

        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);

        axios.post('https://liveapi247.live/api4/rollBackData', {
            sid: ssid,
            sportId: Sporttype,
        })
            .then(result => {
                var res = [];
                if (result.status === 200) {
                    //console.log(result.data)
                    setdec_matach_lkist(result.data)
                    result.data.sort(function (a, b) {
                        return moment(a.marketStartTime) - moment(b.marketStartTime);
                    });

                    setcricketList(res);
                }
            }
            ).catch(e => { });
        setrefresh(false);
    }, [Sporttype])

    const function_sportType = (type) => {
        setSporttype(type);
        if (type == "4") setsportname("Cricket")
        if (type == "1") setsportname("Soccer")
        if (type == "2") setsportname("Tennis")
        if (type == "7522") setsportname("Basketball")
        if (type == "2378962") setsportname("Election")
    }

    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div className="biab_body biab_fluid" id="biab_body" style={{ position: 'relative' }}>
                    <div className="loading"> <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div></div>
                    <div className="biab_wrapper js-wrapper">
                        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: '360px' }}>
                                <li><a onClick={() => { function_sportType(4) }} className={`${(Sporttype === 4) ? "tab_active" : "tab"}`} style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                <li><a onClick={() => { function_sportType(1) }} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}>Soccer</a></li>
                                <li><a onClick={() => { function_sportType(2) }} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}>Tennis</a></li>
                                <li><a onClick={() => { function_sportType(7522) }} className={`${(Sporttype === 7522) ? "tab_active" : "tab"}`}>BasketBall</a></li>
                                <li><a onClick={() => { function_sportType(2378962) }} className={`${(Sporttype === 2378962) ? "tab_active" : "tab"}`}>Election</a></li>
                            </ul>
                        </div>
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder">
                                <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                    <div>
                                        <div className="js-inplay-sports-list">
                                            <div className=" biab_inplay-sport-wrapper">
                                                <div className="biab_inplay-sport-item-title">
                                                    {sportname}</div>
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
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Betfair"></th>
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="OddLimit"></th>
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="ScoreCard"></th>
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Tv Link"></th>
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Bookmaker"></th>
                                                                        <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="">Action</th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                            <div className="js-markets-list">
                                                                {dec_matach_lkist.map((item, id) => {

                                                                    var matchTime;
                                                                    var matchstatusdetis = "";
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
                                                                    var d_sratus = ""
                                                                    if (item.matchStatus == 2) matchstatusdetis = "Decelared"
                                                                    if (item.Status == "I") d_sratus = "In Progress"
                                                                    if (item.Status == "C") d_sratus = "Complete"


                                                                    var event_id = (item.eventId)

                                                                    return (
                                                                        <div key={id} className="biab_table-wrapper">
                                                                            <table className="biab_group-markets-table js-inplay-market" >
                                                                                <colgroup>

                                                                                    <col width={65} />
                                                                                    <col />
                                                                                    <col width={80} />
                                                                                    <col width={75} />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col width={4} />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col width={4} />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col className="biab_table-col" width="8%" />
                                                                                    <col width={50} />
                                                                                </colgroup>
                                                                                <tbody>
                                                                                    <tr>

                                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell" style={{ backgroundColor: `${(moment() >= moment(item.marketStartTime)) ? "#86BA00" : "whitesmoke"}` }}>
                                                                                            <div className="biab_not-in-play" >
                                                                                                <span class="biab_market-time">{matchTime}</span>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td className="biab_market-title-cell ">
                                                                                            <a href={`/Reverse/${event_id}/${item.marketId}`} id="marketPath" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                                <div className="biab_market-title-team-names js-teams">{item.runnerName1}<br />{item.runnerName2}</div>
                                                                                            </a>

                                                                                        </td>
                                                                                        <td className="js-inline-placement-label ">
                                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                                        </td>
                                                                                        <td className="biab_market-title-cell " className="biab_market-title-team-names js-teams" style={{ color: '#0074b1', paddingLeft: '25px', fontWeight: 'bold', fontSize: '14px' }} >{item.eventId}</td>

                                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                    <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="biab_market-title-cell " className="biab_market-title-team-names js-teams" style={{ color: 'RED', paddingLeft: '25px', fontWeight: 'bold', fontSize: '12px' }}>
                                                                                            {matchstatusdetis}
                                                                                        </td>

                                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                                        <td ></td>
                                                                                        <td className="biab_market-title-cell " className="biab_market-title-team-names js-teams" style={{ color: 'green', paddingLeft: '25px', fontWeight: 'bold', fontSize: '14px' }} >{d_sratus}</td>
                                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                                        <td ></td>

                                                                                        <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker">
                                                                                            <a href={`/Reverse/${event_id}/${item.marketId}`}>
                                                                                                <i class="fas fa-plus-circle"></i>
                                                                                            </a>
                                                                                        </td>
                                                                                        <td className="biab_buttons-cell ">
                                                                                            <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span>
                                                                                            <a href="/customer/sport/event/31087000" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link" />
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="js-inline-placement-component">
                                                                                <div className="biab_inline-placement" />
                                                                            </div>
                                                                            <div className="js-status-wrapper">
                                                                                <div />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}




                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="js-competitions-region biab_inplay-sport-competitions-list" /></div>
                                            </div>
                                        </div>
                                        <div className="biab_loading-spinner js-inplay-spinner biab_hide" style={{ display: 'none' }} /></div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            }
        </React.Fragment>
    )
}


import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
import moment from 'moment';
import Loader from './Loader';
import Axios from 'axios';
require('moment-timezone');
var qs = require('qs');
const cookies = new Cookies();



export const Cricket = (props) => {
    const [ImportSeriesList, setImportSeriesList] = useState([]);
    const [ImportMatchList, setImportMatchList] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [ImportMatchDataSpots, setImportMatchDataSpots] = useState([]);
    const [seriesId, setseriesId] = useState('');
    const [click, setclick] = useState(-1);
    const [matchType, setmatchType] = useState(4);
    const [SportMinStack, setMinStack] = useState('1')
    const [SportMaxStack, setMaxStack] = useState('1000')
    const [updateimportfancy, setupdateimportfancy] = useState(false);
    const [matchlisteventid, setmatchlisteventid] = useState([])
    const [matchUpdate, setmatchUpdate] = useState(false);
    const [eleminateserieslist, seteleminateserieslist] = useState([])



    useEffect(() => {
        var ssid = cookies.get('sid');
        setrefresh(true);
        axios.post('https://liveapi247.live/api4/importSeries', {
            sid: ssid,
            sportId: matchType
        }).then(result => {
            var arr = [];
            setImportSeriesList(result.data);
            console.log("Seriles List", result.data)
            result.data.map((item) => {
                arr.push(item.competitionId);
                setrefresh(false);
            });
            //console.log("List of Compatition ID", arr)
            if (arr.length > 0) {
                axios.post('https://liveapi247.live/api4/importMatches', {
                    sid: ssid,
                    competitionId: arr,
                    sportId: matchType
                }).then(result1 => {
                    if (result1.data.length > 0) {
                        var matchList = [];

                        for (let i = 0, k = 0; i < result1.data.length; i++) {
                            matchList.push(result1.data[i]);
                        }
                        setImportMatchList(matchList);
                        setrefresh(false);
                        //console.log("matchList:-", matchList)

                        axios.post('https://liveapi247.live/api4/imported_match_cheack', {
                            sid: ssid,
                            eventType: matchType
                        }).then(res => {
                            var iMatchList = [];
                            for (let i = 0, k = 0; i < res.data.length; i++)
                                iMatchList.push(res.data[i].eventId);
                            var matchList1 = matchList.filter(function (el) {
                                return iMatchList.indexOf(el.eventId) < 0;
                            });
                            setImportMatchList(matchList1);
                            //console.log("ojoijio", matchList1);
                            props.setcountofsportlist(matchList1.length);

                            var arry3 = [];
                            for (var i = 0; i < (result.data).length; i++) {
                                for (var j = 0, ctr = 0; j < matchList1.length; j++) {
                                    if (result.data[i].competitionId == matchList1[j].competitionId) {
                                        ctr++;
                                    }
                                }
                                if (ctr == 0) {
                                    arry3.push(result.data[i]);
                                }
                            }
                            seteleminateserieslist(arry3);
                            //console.log("eleminate event id List :-", arry3);
                            setrefresh(false);





                        }).catch(e => { });
                    }

                }).catch(e => { });
            }
            else {
                setrefresh(false)
            }

        }).catch(e => { });
    }, [updateimportfancy, seriesId, matchType, matchUpdate]);

    ImportMatchList.sort((a, b) => Date.parse(a.openDate) - Date.parse(b.openDate))






    const handleSlip = (id) => {
        if (click === id) {
            setclick(-1);
        }
        else {
            setclick(id);
        }

    }

    const cricketEvent = (e) => {
        setmatchType(4)
    }
    const soccerEvent = (e) => {
        setmatchType(1)
    }
    const tennisEvent = (e) => {
        setmatchType(2)
    }

    const BasketballEvent = (e) => {
        setmatchType(7522)
    }
    const ElectionEvent = (e) => {
        setmatchType(2378962)
    }
    const horseRacingEvent = (e) => {
        setmatchType(6)
    }
    const grehoundEvent = (e) => {
        setmatchType(7)
    }


    const importmataches = (index) => {
        setrefresh(true);
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/ImportMarket', {
            sid: ssid,
            eventType: ImportMatchList[index].sportId,
            eventId: ImportMatchList[index].eventId,
            eventName: ImportMatchList[index].eventName,
            marketId: (ImportMatchList[index].marketId),
            marketName: ImportMatchList[index].marketName,
            selectionId1: ImportMatchList[index].runnerId1,
            runnerName1: ImportMatchList[index].runnerName1,
            selectionId2: ImportMatchList[index].runnerId2,
            runnerName2: ImportMatchList[index].runnerName2,
            marketStartTime: ImportMatchList[index].openDate,
            selectionIdTie: ImportMatchList[index].runnerId3,
            minStack: SportMinStack,
            maxStack: SportMaxStack,
            rateMode: ImportMatchList[index].importMode,
            competitionId: ImportMatchList[index].competitionId,
            competitionName: ImportMatchList[index].competitionName


        })
            .then(result => {
                setrefresh(false);
                if (result.status === 200) {
                    toast.success('Import Match Successfully!!', { position: toast.POSITION.TOP_CENTER })
                    setupdateimportfancy(!updateimportfancy);
                }
                else if (result.status === 201) {
                    toast.warn('Opps, Match already imported!!', { position: toast.POSITION.TOP_CENTER })
                }
                else {
                    toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })

                }

            }).catch(e => { });

        axios.post('https://liveapi247.live/api4/importdatasports_score', {
            sid: ssid,
            eventId: ImportMatchList[index].eventId,
            tvId: ImportMatchList[index].eventId,
        }).then(result => {
            //console.log('result-', result);
        }).catch(e => { });
    }



    return (
        <div>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div className="biab_body biab_fluid" id="biab_body">

                    <div className="biab_wrapper js-wrapper">
                        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                        <div className="biab_table-tabs js-table-tabs" style={{ width: '100%' }}>
                            <div style={{ float: 'left' }}>
                                <ul className="path" style={{ display: 'flex', height: '27px', width: '360px' }}>
                                    <li onClick={cricketEvent} className={`${(matchType === 4) ? "tab_active " : "tab"}`}><a style={{ marginLeft: ' -14px' }} >
                                        Cricket</a></li>
                                    <li onClick={soccerEvent} className={`${(matchType === 1) ? "tab_active " : "tab"}`}> <a >Soccer</a></li>
                                    <li onClick={(e) => { tennisEvent(e) }} className={`${(matchType === 2) ? "tab_active" : "tab"}`} > <a >Tennis</a></li>
                                    <li onClick={(e) => { BasketballEvent(e) }} className={`${(matchType === 7522) ? "tab_active" : "tab"}`} > <a >BasketBall</a></li>
                                    <li onClick={(e) => { ElectionEvent(e) }} className={`${(matchType === 2378962) ? "tab_active" : "tab"}`} > <a >Election</a></li>
                                </ul>
                            </div>
                            {matchType == 4 &&
                                <div className="path" style={{ height: '27px', width: '300px', float: 'right' }}>
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                        <li style={{ width: '50px' }}><a style={{ marginLeft: ' -14px' }} >IMPORT C </a></li>
                                        <li style={{ width: '60px' }}><a><input type="checkbox" id="import_autoC"></input>&nbsp;&nbsp;AUTO</a></li>
                                        <li style={{ width: '80px' }}><a ><input type="checkbox" id="import_manualC"></input>&nbsp;&nbsp;MANUAL</a></li>
                                    </ul>
                                </div>
                            }
                            {matchType == 1 &&
                                <div className="path" style={{ height: '27px', width: '300px', float: 'right' }}>
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                        <li style={{ width: '50px' }}><a style={{ marginLeft: ' -14px' }} >IMPORT S </a></li>
                                        <li style={{ width: '60px' }}><a><input type="checkbox" id="import_autoS"></input>&nbsp;&nbsp;AUTO</a></li>
                                        <li style={{ width: '80px' }}><a ><input type="checkbox" id="import_manualS"></input>&nbsp;&nbsp;MANUAL</a></li>
                                    </ul>
                                </div>
                            }{matchType == 2 &&
                                <div className="path" style={{ height: '27px', width: '300px', float: 'right' }}>
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                        <li style={{ width: '50px' }}><a style={{ marginLeft: ' -14px' }} >IMPORT T </a></li>
                                        <li style={{ width: '60px' }}><a><input type="checkbox" id="import_autoT"></input>&nbsp;&nbsp;AUTO</a></li>
                                        <li style={{ width: '80px' }}><a ><input type="checkbox" id="import_manualT"></input>&nbsp;&nbsp;MANUAL</a></li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder">
                                <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                    <div>
                                        <div className="js-inplay-sports-list">
                                            {ImportSeriesList.map(function (item, id) {
                                                var eleminate;
                                                for (var i = 0; i < (eleminateserieslist.length); i++)
                                                    if (ImportSeriesList[id].eventId === eleminateserieslist[i].eventId)
                                                        eleminate = eleminateserieslist[i].eventId



                                                return (
                                                    <div key={id}>

                                                        {eleminate != item.eventId &&
                                                            <div className=" biab_inplay-sport-wrapper">
                                                                <div className="biab_inplay-sport-item-title" onClick={() => { handleSlip(id); }} style={{ cursor: 'pointer' }}>
                                                                    {item.competitionName} </div>
                                                                <div className="js-markets-list" style={{ display: 'block' }}>
                                                                    <div className="js-inplay-sport-region biab_inplay-sport-competitions-list">
                                                                        <div className="biab_group-markets">
                                                                            <table className="biab_group-markets-table biab_inplay-sport-table js-markets-list-header">
                                                                                <colgroup>
                                                                                    <col width={65} />
                                                                                    <col />
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
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th colSpan={2} />
                                                                                        <th />
                                                                                        <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win."
                                                                                            data-original-title="true">1</th>
                                                                                        <th className="biab_divider-cell" />
                                                                                        <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">X</th>
                                                                                        <th className="biab_divider-cell" />
                                                                                        <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">2</th>


                                                                                    </tr>
                                                                                </thead>
                                                                            </table>
                                                                            <div className="js-markets-list">
                                                                                <div className="biab_table-wrapper">
                                                                                    <table className="biab_group-markets-table js-inplay-market" data-event-id={31087000} data-market-id="1.191364518">
                                                                                        <colgroup>
                                                                                            <col width={65} />
                                                                                            <col width={124} />
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
                                                                                        {<>
                                                                                            {ImportMatchList.map(function (item2, id2) {
                                                                                                var matchTime;
                                                                                                var today = moment();
                                                                                                var tommorow = moment().add(1, 'day');

                                                                                                if (moment(item2.openDate).isSame(today, 'day')) {
                                                                                                    matchTime = moment(item2.openDate).format('LT');
                                                                                                    matchTime = "Today" + " " + matchTime;
                                                                                                }
                                                                                                else if (moment(item2.openDate).isSame(tommorow, 'day')) {
                                                                                                    matchTime = 'Tommorow' + ' ' + moment(item2.openDate).format('LT');;
                                                                                                }
                                                                                                else {
                                                                                                    matchTime = item2.openDate;
                                                                                                }

                                                                                                return (
                                                                                                    <> {ImportSeriesList[id].competitionId == ImportMatchList[id2].competitionId &&
                                                                                                        <tbody  >
                                                                                                            <tr>

                                                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                                                    <div className="biab_not-in-play">
                                                                                                                        <span class="biab_market-time">{matchTime}</span>
                                                                                                                    </div>
                                                                                                                </td>

                                                                                                                <td className="biab_market-title-cell ">
                                                                                                                    <Link id="marketPath" to="#" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                                                        <div className="biab_market-title-team-names js-teams">{item2.runnerName1}<br />{item2.runnerName2}</div>
                                                                                                                    </Link>
                                                                                                                </td>
                                                                                                                <td className="js-inline-placement-label ">
                                                                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                                                                </td>
                                                                                                                <td className="biab_market-total-matched-cell ">
                                                                                                                    <span className="js-market-total-matched" />
                                                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell" style={{ cursor: 'pointer' }}>
                                                                                                                    <div>
                                                                                                                        <div onClick={() => { importmataches(id2); }} className="">

                                                                                                                            <img class="importfancy" alt="" src="data:image/png;base64,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" />
                                                                                                                            <table className="biab_cricket">
                                                                                                                                <tbody>
                                                                                                                                    <tr />
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                                <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11921197}>
                                                                                                                    <div className="biab_cell-view">
                                                                                                                        <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> NSW Blues to win at odds of 1.24 or greater." data-original-title="true">
                                                                                                                            <div className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">
                                                                                                                                <span className="js-odds biab_odds">{item.runner1backPrice1}</span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>

                                                                                                                <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11921197}>
                                                                                                                    <div className="biab_cell-view">
                                                                                                                        <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-original-title="true">
                                                                                                                            <div className="biab_hidden-xs biab_empty-cell">
                                                                                                                                <span className="js-odds biab_odds">{item.runner1layPrice1}</span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>

                                                                                                                <td className="biab_divider-cell biab_hidden-xs" />
                                                                                                                <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">{item.tiebackPrice1}</td>
                                                                                                                <td className="biab_green-cell biab_empty-cell biab_hidden-xs">{item.tielayPrice1}</td>
                                                                                                                <td className="biab_divider-cell biab_hidden-xs" />
                                                                                                                <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={104487}>
                                                                                                                    <div className="biab_cell-view">
                                                                                                                        <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto">
                                                                                                                            <div className="biab_hidden-xs biab_empty-cell">
                                                                                                                                <span className="js-odds biab_odds">{item.runner2backPrice1}</span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                                <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={104487}>
                                                                                                                    <div className="biab_cell-view">
                                                                                                                        <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto">
                                                                                                                            <div className="biab_hidden-xs biab_empty-cell">
                                                                                                                                <span className="js-odds biab_odds">{item.runner2layPrice1}</span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                                <td className="biab_buttons-cell ">
                                                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span>
                                                                                                                    <a href="/customer/sport/event/31087000" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link" />
                                                                                                                </td>

                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    } </>

                                                                                                )
                                                                                            })}</>
                                                                                        }

                                                                                    </table>
                                                                                    <div className="js-inline-placement-component">
                                                                                        <div className="biab_inline-placement" />
                                                                                    </div>
                                                                                    <div className="js-status-wrapper">
                                                                                        <div />
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>}
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
            }
        </div>

    )
}


//code for Auto import
// useEffect(() => {     

//     for (var i = 0; i < ImportMatchList.length; i++) 
//        {
//         setrefresh(true);

//         var ssid = cookies.get('sid');
//         axios.post('https://liveapi247.live/api4/ImportMarket', {
//             sid: ssid,
//             eventType: ImportMatchList[i].sportId,
//             eventId: ImportMatchList[i].eventId,
//             eventName: ImportMatchList[i].eventName,
//             marketId: (ImportMatchList[i].marketId),
//             marketName: ImportMatchList[i].marketName,
//             selectionId1: ImportMatchList[i].runnerId1,
//             runnerName1: ImportMatchList[i].runnerName1,
//             selectionId2: ImportMatchList[i].runnerId2,
//             runnerName2: ImportMatchList[i].runnerName2,
//             marketStartTime: ImportMatchList[i].openDate,
//             selectionIdTie: ImportMatchList[i].runnerId3,
//             minStack: SportMinStack,
//             maxStack: SportMaxStack,

//         })
//             .then(result => {
//                 setrefresh(false);
//                 if (result.status === 200) {
//                     // toast.success('Import Match Successfully!!', { position: toast.POSITION.TOP_CENTER })
//                    //console.log("    done")
//                     setupdateimportfancy(!updateimportfancy);
//                 }
//                 else if (result.status === 201) {
//                     //  toast.warn('Opps, Match already imported!!', { position: toast.POSITION.TOP_CENTER })
//                 }
//                 else {
//                     // toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })

//                 }

//             }).catch(e => { });


//     }

//     return () => { }
// }, [])


 // useEffect(() => {
    //     var ssid = cookies.get('sid');
    //     axios.post('https://liveapi247.live/api4/importMatches', {
    //         sid: ssid,
    //         competitionId: seriesId,
    //         sportId: matchType
    //          }).then(result => {
    //         if (result.data.length > 0) {
    //             var matchList = [];
    //             for (let i = 0, k = 0; i < result.data.length; i++) {
    //                 matchList.push(result.data[i]);

    //             }
    //             axios.post('https://liveapi247.live/api4/imported_match_cheack', {
    //                 sid: ssid,
    //                 eventType: matchType
    //             }).then(res => {

    //                 var iMatchList = [];
    //                 for (let i = 0, k = 0; i < res.data.length; i++)
    //                     iMatchList.push(res.data[i].eventId);
    //                 var matchList1 = matchList.filter(function (el) {
    //                     return iMatchList.indexOf(el.eventId) < 0;
    //                 });
    //                 setImportMatchList(matchList1);
    //                 //console.log(matchList1);
    //             }).catch(e => { });
    //         }

    //     }).catch(e => { });

    // },
    //  [updateimportfancy, seriesId, matchType]);


     // useEffect(() => {
    //     //console.log("ompk-",matchlisteventid)
    //     for (let i = 0; i < matchlisteventid.length; i++) {
    //         socket.on(matchlisteventid[i], (val) => {
    //             var value = JSON.parse(val);
    //             //console.log("value data:-", value)
    //             if (value.messageType === 'betfair_match_rate') {
    //                 setmarketBetStatus(value.status);
    //                 if (value.status == '0' && liquidityStatus == 0) {
    //                     setliquidityStatus(1);
    //                 }

    //                 if (s1 !== value.runner1BackRate1) {
    //                     runner1BackRate1[i] = (value.runner1BackRate1);
    //                     s1 = value.runner1BackRate1;
    //                     c1 = 1;
    //                     setTimeout(() => { c1 = 0; }, 700);
    //                 }

    //                 if (s2 !== value.runner1BackSize1) {
    //                     runner1BackSize1[i] = (value.runner1BackSize1);
    //                     s2 = value.runner1BackSize1;
    //                 }

    //                 if (s3 !== value.runner1LayRate1) {
    //                     runner1LayRate1[i] = (value.runner1LayRate1);
    //                     s3 = value.runner1LayRate1;
    //                     c2 = 1;
    //                     setTimeout(() => { c2 = 0; }, 700);
    //                 }

    //                 if (s4 !== value.runner1LaySize1) {
    //                     runner1LaySize1[i] = (value.runner1LaySize1);
    //                     s4 = value.runner1LaySize1;
    //                 }

    //                 if (s5 !== value.runner2BackRate1) {
    //                     runner2BackRate1[i] = (value.runner2BackRate1);
    //                     s5 = value.runner2BackRate1;
    //                     c3 = 1;
    //                     setTimeout(() => { c3 = 0; }, 700);
    //                 }

    //                 if (s6 !== value.runner2BackSize1) {
    //                     runner2BackSize1[i] = (value.runner2BackSize1);
    //                     s6 = value.runner2BackSize1;
    //                 }

    //                 if (s7 !== value.runner2LayRate1) {
    //                     runner2LayRate1[i] = (value.runner2LayRate1);
    //                     s7 = value.runner2LayRate1;
    //                     c4 = 1;
    //                     setTimeout(() => { c4 = 0; }, 700);
    //                 }

    //                 if (s8 !== value.runner2LaySize1) {
    //                     runner2LaySize1[i] = (value.runner2LaySize1);
    //                     s8 = value.runner2LaySize1;

    //                 }

    //                 if (s9 !== value.tieBackRate1) {
    //                     tieBackRate1[i] = (value.tieBackRate1);
    //                     s9 = value.tieBackRate1;
    //                     c5 = 1;
    //                     setTimeout(() => { c5 = 0; }, 700);
    //                 }
    //                 if (s10 !== value.tieBackSize1) {
    //                     tieBackSize1[i] = (value.tieBackSize1);
    //                     s10 = value.tieBackSize1;
    //                 }

    //                 if (s11 !== value.tieLayRate1) {
    //                     tieLayRate1[i] = (value.tieLayRate1);
    //                     s11 = value.tieLayRate1;
    //                     c6 = 1;
    //                     setTimeout(() => { c6 = 0; }, 700);
    //                 }

    //                 if (s12 !== value.tieLaySize1) {
    //                     tieLaySize1[i] = (value.tieLaySize1);
    //                     s12 = value.tieLaySize1;
    //                 }

    //             }


    //             if (value[0] && value[0].messageType === 'session_rate') {
    //                 let temp = value;
    //                 if (marketData.rateMode == '2') {
    //                     temp.sort(function (a, b) {

    //                         return moment(a.selectionId) - moment(b.selectionId);
    //                     });
    //                 }
    //                 setfancyData(temp);
    //             }

    //             if (value.messageType === 'bookmaker_match_rate') {

    //                 let temp = { ...bookData };

    //                 temp.gameStatus = value.status;
    //                 temp.runner1Status = value.runner1Status;
    //                 temp.runner2Status = value.runner2Status;
    //                 temp.runner3Status = value.runner3Status;
    //                 temp.runner1BackRate1 = value.runner1BackRate1;
    //                 temp.runner1LayRate1 = value.runner1LayRate1;
    //                 temp.runner2BackRate1 = value.runner2BackRate1;
    //                 temp.runner2LayRate1 = value.runner2LayRate1;
    //                 temp.tieBackRate1 = value.tieBackRate1;
    //                 temp.tieLayRate1 = value.tieLayRate1;

    //                 //console.log('book1',value.tieBackRate1,value.tieBackRate1);
    //                 setbookData(temp);

    //             }

    //             if (value.messageType === 'match_score') {
    //                 let temp = value;
    //                 setScoreData(temp);
    //             }


    //         })
    //     }

    //     return () => {
    //         socket.removeAllListeners(matchlisteventid);
    //         setrunner1BackRate1([]); setrunner2BackRate1([]);
    //         setrunner1LayRate1([]); setrunner2LayRate1([]);
    //         setrunner1BackSize1([]); setrunner2BackSize1([]);
    //         setrunner1LaySize1([]); setrunner2LaySize1([]);
    //         setfancyData([]);
    //     }



    // }, [updateimportfancy, seriesId, matchType])

    // useEffect(() => {
    //     socket = io(ENDPOINT);
    //     //console.log('socket connected');
    //     socket.on('connect', function(data) {
    //         socket.emit('room1', matchlisteventid);
    //     });
    //     return () => {
    //     socket.close();
    //     //console.log('socket disconnected');
    //     s1 = -1;s2 = -1;s3=-1;s4=-1;s5=-1;s6=-1;s7=-1;s8=-1;s9=-1;s10=-1;s11=-1;s12=-1;s13=-1;s14=-1;s15=-1;s16=-1;s17=-1;s18=-1;s19=-1;s20=-1;s21=-1;s22=-1;s23=-1;s24=-1;

    //     }
    // }, [])


//     const io = require('socket.io-client');


// const ranNum = Math.floor(Math.random() * 4) + 1;
// var ENDPOINT;
// if (ranNum == 1) {
//     ENDPOINT = "http://3.108.130.87:3054";
// }

// else if (ranNum == 2) {
//     ENDPOINT = "http://3.108.130.87:3053";
// }
// else if (ranNum == 3) {
//     ENDPOINT = "http://3.108.130.87:3052";
// }
// else {
//     ENDPOINT = "http://3.108.130.87:3051";
// }
// var socket;

// var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0, c10 = 0, c11 = 0, c12 = 0;
// var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24;


// const [marketData, setmarketData] = useState({})
//     const [fancyData, setfancyData] = useState([])
//     const [bookData, setbookData] = useState({})

//     const [runner1BackRate1, setrunner1BackRate1] = useState([]);
//     const [runner1BackSize1, setrunner1BackSize1] = useState([]);
//     const [runner1LayRate1, setrunner1LayRate1] = useState([]);
//     const [runner1LaySize1, setrunner1LaySize1] = useState([]);
//     const [runner2BackRate1, setrunner2BackRate1] = useState([]);
//     const [runner2BackSize1, setrunner2BackSize1] = useState([]);
//     const [runner2LayRate1, setrunner2LayRate1] = useState([]);
//     const [runner2LaySize1, setrunner2LaySize1] = useState([]);

//     const [tieBackRate1, settieBackRate1] = useState([]);
//     const [tieLayRate1, settieLayRate1] = useState([]);
//     const [tieBackSize1, settieBackSize1] = useState([]);
//     const [tieLaySize1, settieLaySize1] = useState([]);
//     const [pnlMarket, setpnlMarket] = useState({})
//     const [pnlBook, setpnlBook] = useState({})
//     const [pnlFancy, setpnlFancy] = useState([])

//     const [pnlMarket2, setpnlMarket2] = useState({})
//     const [pnlBook2, setpnlBook2] = useState({})
//     const [ScoreData, setScoreData] = useState({})
//     const [newrefresh, setnewrefresh] = useState(true);
//     const [marketBetStatus, setmarketBetStatus] = useState(0);
//     const [liquidityStatus, setliquidityStatus] = useState(0);
//     const [fancyStakeInfo, setfancyStakeInfo] = useState(-1);
//     const [coinFactor, setcoinFactor] = useState(1);

// var arr2=[]
// for (let i = 0; i < matchList1.length; i++) {
//     arr2.push(matchList1[i].eventId);
// }
// setmatchlisteventid(arr2);
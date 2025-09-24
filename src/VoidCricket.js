import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import SettelPop from './SettelPop';
import Loader from './Loader';
import moment from 'moment';
import Pagination from 'react-js-pagination';
import Setteedmarketpop from './Setteedmarketpop'






const cookies = new Cookies();

export const VoidCricket = (props) => {
    const [refresh, setrefresh] = useState(true);
    const [cricketList, setcricketList] = useState([]);
    const [soccerList, setsoccerList] = useState([]);
    const [tennisList, settennisList] = useState([]);
    const [reload, setreload] = useState(true);
    const [cricket, setcricket] = useState(false);
    const [Sporttype, setSporttype] = useState(4)
    const [dec_matach_lkist, setdec_matach_lkist] = useState([])
    const [sportname, setsportname] = useState("Cricket");
    const [openSettlepop, setopenSettlepop] = useState(false)
    const [openSettledmarketpop, setopenSettledmarketpop] = useState(false)
    const [event_id, setevent_id] = useState();
    const [settleedmarket, setsettleedmarket] = useState(true)
    const [settment, setsettment] = useState(false)
    const [settled_Pmarket_list, setsettled_Pmarket_list] = useState([])
    const [updatesettlement, setupdatesettlement] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(50);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = settled_Pmarket_list.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(() => {
        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);
        axios.post('https://liveapi247.live/api4/DeclearedMatchesDetails', {
            sid: ssid,
            sportId: Sporttype,
        })
            .then(result => {
                setrefresh(false);
                var res = [];
                if (result.status === 200) {
                    //console.log(result.data)
                    setdec_matach_lkist(result.data)

                    setcricketList(res);
                }
            }
            ).catch(e => { });
    }, [Sporttype, reload, updatesettlement])

    useEffect(() => {
        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);
        axios.post('https://liveapi247.live/api4/Settled_Market', {
            sid: ssid,
            sportId: Sporttype,
        })
            .then(result => {
                setrefresh(false);
                setsettled_Pmarket_list(result.data)
            }
            ).catch(e => { });
    }, [Sporttype])

    const function_update_settelmentList = () => { setupdatesettlement(!updatesettlement) }

    const function_sportType = (type) => {
        setSporttype(type);
        if (type == "4") setsportname("Cricket")
        if (type == "1") setsportname("Soccer")
        if (type == "2") setsportname("Tennis")
    }

    const settelmatch = (id, eid) => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/MatchSettled', {
            sid: ssid,
            eventId: eid,
        }).then(result => {
            if (result.status === 200) {
                toast.success('Match Settle Successfully!!', { position: toast.POSITION.TOP_CENTER })
            }
        }
        ).catch(e => { });
    }

    const fun_open_sttle_match = (id, eid, bool) => {
        setopenSettlepop(bool);
        setevent_id(eid);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const fun_settleed_market = () => { setopenSettledmarketpop(true) }

    const fun_in_settledmarket = () => {
        setsettleedmarket(false);
        setsettment(true)

    }

    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {openSettlepop && <SettelPop event_id={event_id} setopenSettlepop={setopenSettlepop} function_update_settelmentList={function_update_settelmentList} setrefresh={setrefresh} />}
                    {openSettledmarketpop && <Setteedmarketpop setopenSettledmarketpop={setopenSettledmarketpop} fun_in_settledmarket={fun_in_settledmarket} setrefresh={setrefresh} />}
                    <div className="biab_body biab_fluid" id="biab_body" style={{ position: 'relative' }}>
                        {refresh && <div className="loading"> <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div></div>}
                        <div className="biab_wrapper js-wrapper">
                            <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                            <div className="biab_table-tabs js-table-tabs" style={{ width: '100%' }}>
                                <div style={{ float: 'left' }}>
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: '287px' }}>
                                        <li onClick={() => { function_sportType(4) }} className={`${(Sporttype === 4) ? "tab_active" : "tab"}`}> <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                        <li><a onClick={() => { function_sportType(1) }} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}>Soccer</a></li>
                                        <li><a onClick={() => { function_sportType(2) }} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}>Tennis</a></li>
                                        {/* <li><a onClick={() => { function_sportType(7522) }} className={`${(Sporttype === 7522) ? "tab_active" : "tab"}`}>BasketBall</a></li> */}
                                    </ul>
                                </div>
                                <div className="menu_add__market" style={{ height: '21px', width: '100px', float: 'right', paddingTop: '6px', display: (settleedmarket == true ? "block" : "none") }}
                                    onClick={() => { fun_settleed_market() }} > Settled Market
                                </div>
                                <div className="menu_add__market" style={{ height: '21px', width: '80px', float: 'right', paddingTop: '6px', display: (settment == true ? "block" : "none") }}
                                    onClick={() => { setsettleedmarket(true); setsettment(false) }}>Settlement
                                </div>
                            </div>
                            {settleedmarket == true &&
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
                                                                                <th colSpan={1} >Date</th>

                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="" data-original-title="true"> Event Name</th>
                                                                                <th> </th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text=""></th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Betfair">Winner</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="OddLimit"></th>

                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="ScoreCard"> Winner Name </th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Tv Link"></th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="Bookmaker">Declare Status</th>
                                                                                <th colSpan={1} data-toggle="tooltip" data-placement="auto" data-text="">Settle</th>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                    <div className="js-markets-list">
                                                                        {dec_matach_lkist.map((item, id) => {
                                                                            var winner_name = ""
                                                                            var D_Staus = ""
                                                                            if (item.winner == "A") winner_name = item.runnerName1;
                                                                            if (item.winner == "B") winner_name = item.runnerName2;
                                                                            if (item.winner == "T") winner_name = "DRAW";
                                                                            if (item.winner == "N") winner_name = "No Result";

                                                                            if (item.Status == "I") D_Staus = "In Progess.."
                                                                            if (item.Status == "C") D_Staus = "Complete"


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

                                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                                    <div className="biab_not-in-play">
                                                                                                        <span class="biab_market-time">{item.marketStartTime}</span>
                                                                                                    </div>
                                                                                                </td>

                                                                                                <td className="biab_market-title-cell " style={{ paddingTop: '12px' }}>
                                                                                                    <a id="marketPath" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                                        <div className="biab_market-title-team-names js-teams" style={{ textAlign: 'center' }}>{item.runnerName1} Vs {item.runnerName2}</div>
                                                                                                    </a>


                                                                                                </td>
                                                                                                <td className="js-inline-placement-label ">
                                                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                                                </td>
                                                                                                <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                                                                    <div className="biab_promoted-tooltip-inner">
                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                            <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="biab_market-title-cell " style={{ paddingTop: '12px' }}>
                                                                                                    <div className="biab_market-title-team-names js-teams" style={{ color: '#0074b1', textAlign: 'center' }}>{item.winner}</div>
                                                                                                </td>
                                                                                                <td ></td>

                                                                                                <td className="biab_divider-cell biab_hidden-xs" />

                                                                                                <td className="biab_market-title-cell " className="biab_market-title-team-names js-teams" style={{ color: '#0074b1', paddingLeft: '25px', fontWeight: 'bold', fontSize: '12px' }}>
                                                                                                    {winner_name}
                                                                                                </td>

                                                                                                <td ></td>
                                                                                                <td className="biab_divider-cell biab_hidden-xs" />
                                                                                                <td className="biab_market-title-cell " className="biab_market-title-team-names js-teams" style={{ color: '#0074b1', paddingLeft: '25px', fontWeight: 'bold', fontSize: '12px', color: 'green' }} >{D_Staus}</td>

                                                                                                <td className=" js-back-1 biab_bet-back js-bet-back biab_hidden-xs" id="colormaker" onClick={() => { fun_open_sttle_match(id, item.eventId, true) }}>
                                                                                                    <a>
                                                                                                        <i class="fas fa-plus-circle"></i>
                                                                                                    </a>
                                                                                                </td>
                                                                                                <td className="biab_buttons-cell ">
                                                                                                    <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span>
                                                                                                    <a className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link" />
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
                                </div>}


                            {settleedmarket == false &&
                                <React.Fragment>
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
                                                                        <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Market Id </th>
                                                                        <th class="Td_Reverse" style={{ width: '35%', textAlign: 'center' }}>Event Name</th>

                                                                        <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Winner</th>
                                                                        <th class="Td_Reverse" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>Action</th>
                                                                        <th class="Td_Reverse" style={{ width: '10%', fontSize: '24px', textAlign: 'center' }}>Staus</th>

                                                                    </tr>
                                                                    {currentPosts.map((item2, id) => {
                                                                        var matchTime;
                                                                        var today = moment();
                                                                        var Yesterday = moment().add(-1, 'day');
                                                                        var settled = "";

                                                                        if (moment(item2.marketStartTime).isSame(today, 'day')) {
                                                                            matchTime = moment(item2.marketStartTime).format('LT');
                                                                            matchTime = "Today" + " " + matchTime;
                                                                        }
                                                                        else if (moment(item2.marketStartTime).isSame(Yesterday, 'day')) {
                                                                            matchTime = 'Yesterday' + ' ' + moment(item2.marketStartTime).format('LT');;
                                                                        }
                                                                        else {
                                                                            matchTime = item2.marketStartTime;
                                                                        }
                                                                        if (item2.matchStatus == 4) settled = "SETTLED"


                                                                        return (
                                                                            <tr key={id} >
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{matchTime}</td>
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.eventId}</td>
                                                                                <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>{item2.marketId}</td>
                                                                                <td class="Td_Reverse" style={{ width: '35%', textAlign: 'center' }}>{item2.eventName}</td>
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center', color: 'green' }}> {item2.winner}</td>
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center', }}>
                                                                                    <a style={{ marginLeft: '-33px' }} href={`/SettledAllMarket/${item2.eventId}/${item2.marketId}`}>
                                                                                        <i class="fas fa-plus-circle"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center', fontSize: '14px', color: '#0074b1' }}>{settled}
                                                                                </td>

                                                                            </tr>
                                                                        )
                                                                    })}

                                                                </table>
                                                            </div>
                                                            {settled_Pmarket_list.length > 0 && <div className="pages" style={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}>
                                                                <Pagination prevPageText='PREV'
                                                                    pageRangeDisplayed={3}
                                                                    activePage={currentPage}
                                                                    nextPageText='NEXT'
                                                                    totalItemsCount={settled_Pmarket_list.length}
                                                                    onChange={handlePageChange}
                                                                    itemsCountPerPage={postsPerPage}
                                                                    hideFirstLastPages
                                                                />
                                                            </div>}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </React.Fragment>
                            }




                        </div>
                    </div>
                </div>}
        </React.Fragment>
    )
}

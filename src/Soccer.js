import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';




const cookies = new Cookies();

export const Soccer = (props) => {
    const [refresh, setrefresh] = useState(true);
    const [soccerList, setsoccerList] = useState([]);


    useEffect(() => {

        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);



        axios.post('https://liveapi247.live/api4/sportssoccer', {
            sid: ssid,
            sportId: 1
        })
            .then(result => {
                setrefresh(false);
                if (result.status === 200) {
                    var res = [];

                    for (let key in result.data) {

                        if (result.data.hasOwnProperty(key)) {
                            result.data[key].eventId = key;
                            res.push(result.data[key]);

                        }
                    }
                    setsoccerList(res);
                    //console.log(res);
                }

            }

            ).catch(e => {
                //setIsError(true);
            });
    }, [])
    return (
        <React.Fragment>
            <div className="biab_body biab_fluid" id="biab_body">
                {refresh && <div className="loading" style={{ display: 'block' }}> <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div></div>}

                <div className="biab_wrapper js-wrapper">
                    <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                    <div className="biab_table-tabs js-table-tabs">
                        <ul className="biab_table-content biab_tab-btns js-table-content biab_active" style={{ marginLeft: '120px' }}>
                            <li className={`${(props.tabMenu === 2) ? "ac-gn-link ac-gn-link-apple-btn123 " : "ac-gn-item ac-gn-apple"}`} id="Matches">
                                <Link className="ac-gn-link ac-gn-link-apple " data-tabtarget="settled" data-tabparent="past" to="/Cricket">Cricket<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
                            <li className={`${(props.tabMenu === 3) ? "ac-gn-link ac-gn-link-apple-btn123 " : "ac-gn-item ac-gn-apple"}`} id="Matches">
                                <Link className="bac-gn-link ac-gn-link-apple" data-tabtarget="cancelled" data-tabparent="past" to="/Soccer">Soccer<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
                            <li className={`${(props.tabMenu === 4) ? "ac-gn-link ac-gn-link-apple-btn123 " : "ac-gn-item ac-gn-apple"}`} id="Matches">
                                <Link className="ac-gn-link ac-gn-link-apple" data-tabtarget="Summery" data-tabparent="past" to="Tennis">Tennis<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
                        </ul>
                    </div>
                    <div className="biab_page-wrapper">
                        <div className="biab_page-holder">
                            <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                <div>
                                    <div className="js-inplay-sports-list">
                                        <div className=" biab_inplay-sport-wrapper">
                                            <div className="biab_inplay-sport-item-title">

                                                Soccer</div>
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
                                                                    <th colSpan={2}></th>
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
                                                            {soccerList.map((item, index) => {
                                                                return (
                                                                    <div id={index} className="biab_table-wrapper">
                                                                        <table className="biab_group-markets-table js-inplay-market" data-event-id={31087000} data-market-id="1.191364518">
                                                                            <colgroup>
                                                                                <col width={65} />
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
                                                                                        <div>
                                                                                            <div className="biab_in-play"><input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultValue />
                                                                                                <table className="biab_cricket">
                                                                                                    <tbody>
                                                                                                        <tr />
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                        <div className="biab_not-in-play">
                                                                                            <span class="biab_market-time">{item.openDate}</span>
                                                                                        </div>
                                                                                    </td>

                                                                                    <td className="biab_market-title-cell ">
                                                                                        <Link id="marketPath" to="#" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                            <div className="biab_market-title-team-names js-teams">{item.eventName}</div>
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

                                                                                    <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11921197}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> NSW Blues to win at odds of 1.24 or greater." data-original-title="true">
                                                                                                <div className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">
                                                                                                    <span className="js-odds biab_odds">{item.runner1backPrice1}</span>
                                                                                                    {/* <span className="biab_bet-amount">5382</span> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>

                                                                                    <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11921197}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-original-title="true">
                                                                                                <div className="biab_hidden-xs biab_empty-cell">
                                                                                                    <span className="js-odds biab_odds">{item.runner1layPrice1}</span>
                                                                                                    {/* <span className="biab_bet-amount">227945</span> */}
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
                                                                                                    {/* <span className="biab_bet-amount">43750</span> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={104487}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto">
                                                                                                <div className="biab_hidden-xs biab_empty-cell">
                                                                                                    <span className="js-odds biab_odds">{item.runner2layPrice1}</span>
                                                                                                    {/* <span className="biab_bet-amount">2904</span> */}
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
                                                <div className="js-coming-up-sport-region biab_inplay-sport-competitions-list biab-hide-tooltip">
                                                    <div className="biab_group-markets">
                                                        <table className="biab_group-markets-table biab_inplay-sport-table js-markets-list-header biab_hide">
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
                                                                    <th colSpan={2}>Coming up</th>
                                                                    <th />
                                                                    <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">1</th>
                                                                    <th className="biab_divider-cell" />
                                                                    <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">X</th>
                                                                    <th className="biab_divider-cell" />
                                                                    <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">2</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                        <div className="js-markets-list" /></div>
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
        </React.Fragment>
    )
}

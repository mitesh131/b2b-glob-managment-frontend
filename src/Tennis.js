import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export const Tennis = (props) => {

    const [refresh, setrefresh] = useState(true);
    const [tennisList, settennisList] = useState([]);

    useEffect(() => {

        var ssid = cookies.get('sid');
        if (!ssid) return;
        setrefresh(true);

        axios.post('https://liveapi247.live/api4/sportstennis', {
            sid: ssid,
            sportId: 2
        })
            .then(result => {
                setrefresh(false);
                var res = [];
                if (result.status === 200) {
                    for (let key in result.data) {

                        if (result.data.hasOwnProperty(key)) {
                            result.data[key].eventId = key;
                            res.push(result.data[key]);
                        }
                    }
                    settennisList(res);
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
                                <a className="ac-gn-link ac-gn-link-apple " data-tabtarget="settled" data-tabparent="past" href="/Cricket">Cricket</a><span id="tagLive" class="tag-live" ><strong></strong>2</span></li>
                            <li className={`${(props.tabMenu === 3) ? "ac-gn-link ac-gn-link-apple-btn123 " : "ac-gn-item ac-gn-apple"}`} id="Matches">
                                <a className="ac-gn-link ac-gn-link-apple " data-tabtarget="cancelled" data-tabparent="past" href="/Soccer">Soccer</a><span id="tagLive" class="tag-live" ><strong></strong>2</span></li>
                            <li className={`${(props.tabMenu === 4) ? "ac-gn-link ac-gn-link-apple-btn123 " : "ac-gn-item ac-gn-apple"}`} id="Matches">
                                <a className="ac-gn-link ac-gn-link-apple" data-tabtarget="Summery" data-tabparent="past" href="/Tennis">Tennis</a><span id="tagLive" class="tag-live" ><strong></strong>2</span></li>
                        </ul>
                    </div>
                    <div className="biab_page-wrapper">
                        <div className="biab_page-holder">
                            <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                                <div>
                                    <div className="js-inplay-sports-list">
                                        <div className=" biab_inplay-sport-wrapper">
                                            <div className="biab_inplay-sport-item-title">

                                                Tennis</div>
                                            <div className="js-markets-list" style={{ display: 'block' }}>
                                                <div className="js-coming-up-sport-region biab_inplay-sport-competitions-list biab-hide-tooltip">
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
                                                                <col width={50} />
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={2}></th>
                                                                    <th />
                                                                    <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">1</th>
                                                                    <th className="biab_divider-cell" />
                                                                    <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">2</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                        <div className="js-markets-list">
                                                            {tennisList.length == 0 &&

                                                                <div id={0} className="biab_table-wrapper">
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
                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell" />
                                                                                <td className="biab_market-inplay-cell js-market-inplay-cell" />
                                                                                <td className="biab_market-title-cell">
                                                                                    <a id="marketPath" href="/Cricket" style={{ color: 'black', textDecoration: 'none' }}>
                                                                                        <div className="biab_market-title-team-names js-teams"> There are no markets to be displayed</div></a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="js-inline-placement-component"><div className="biab_inline-placement" /></div>
                                                                    <div className="js-status-wrapper"><div /></div>
                                                                </div>

                                                            }


                                                            {tennisList.map((item, index) => {
                                                                return (
                                                                    <div id={index} className="biab_table-wrapper">
                                                                        <table className="biab_group-markets-table js-inplay-market" data-event-id={31085173} data-market-id="1.191310251">
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
                                                                                <col width={50} />
                                                                            </colgroup>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                        <div>
                                                                                            <div className="biab_in-play">
                                                                                                <input class="form-check-input" type="checkbox" id="flexCheckChecked" value="true" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                                        <div>
                                                                                            <div className="biab_not-in-play">

                                                                                                <span class="biab_market-time">{item.eventName}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>

                                                                                    <td className="biab_market-title-cell ">
                                                                                        <div className="biab_market-title-team-names js-teams">{item.runner1backPrice1}</div>
                                                                                    </td>
                                                                                    <td className="js-inline-placement-label ">
                                                                                        <div className="biab_inline-placement-labels-wrap" />
                                                                                    </td>
                                                                                    <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                                                        <div className="biab_promoted-tooltip-inner">
                                                                                            <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={2424953}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Pablo Cuevas to win at odds of 2.42 or greater.">
                                                                                                <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">{item.runner1layPrice1}</span>
                                                                                                    {/* <span className="biab_bet-amount">780</span> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={2424953}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Pablo Cuevas to win at odds of 2.58 or greater.">
                                                                                                <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.58</span><span className="biab_bet-amount">1053</span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_divider-cell biab_hidden-xs" />
                                                                                    <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11439844}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Aleksandar Kovacevic to win at odds of 1.64 or greater.">
                                                                                                <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.64</span><span className="biab_bet-amount">1659</span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={11439844}>
                                                                                        <div className="biab_cell-view">
                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Aleksandar Kovacevic to win at odds of 1.71 or greater.">
                                                                                                <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.67</span><span className="biab_bet-amount">582</span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31085173" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                        title="View all markets" /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className="js-inline-placement-component">
                                                                            <div className="biab_inline-placement" /></div>
                                                                        <div className="js-status-wrapper">
                                                                            <div /></div>
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
        </React.Fragment>
    )
}

import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Cricket } from './Cricket';


export const Home = (props) => {

    const [cricket, setcricket] = useState(false);
    const Cricketopen = ()=>{
        setcricket(!cricket)
    }
    return (
        <React.Fragment>
                   <div className="biab_body biab_fluid" id="biab_body">
            <div className="biab_wrapper js-wrapper">
                <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                <div className="biab_table-tabs js-table-tabs">
                   
                   <ul className="biab_table-content biab_tab-btns js-table-content biab_active" style={{marginLeft:"136px"}}>
                       <li className="ac-gn-item ac-gn-apple" id="Matches">
                           <Link to="/Cricket" className={`${(props.tabMenu===2)? "ac-gn-link ac-gn-link-apple ": "ac-gn-link ac-gn-link-apple "}`}     data-tabtarget="settled" data-tabparent="past">Cricket</Link>
                           </li>
                       <li className="ac-gn-item ac-gn-apple" id="Matches">
                           <Link to="/Soccer" className={`${(props.tabMenu===3)? "ac-gn-link ac-gn-link-apple ": "ac-gn-link ac-gn-link-apple "}`}   data-tabtarget="cancelled" data-tabparent="past">Soccer</Link></li>
                      <li className="ac-gn-item ac-gn-apple" id="Matches">
                          <Link to="/Tennis" className="ac-gn-link ac-gn-link-apple" data-tabtarget="Summery" data-tabparent="past">Tennis</Link>
                      </li>
                   </ul>
                   {/* <a href="#" className="biab_btn-refresh js-refresh biab_hidden-xs"><i className="fa fa-refresh" aria-hidden="true" /></a> */}
                   </div>        

                <div className="biab_page-wrapper">
                    <div className="biab_page-holder">
                        <div className="biab_inplay-sports-container js-inplay-sports-list-region">
                            <div>
                                <div className="js-inplay-sports-list">
                                   {props.tabMenu === 2 && <Cricket tabMenu={props.tabMenu}/>}
                                    <div className={` ${ cricket? "biab_inplay-sport-wrapper biab_opened" : "biab_inplay-sport-wrapper"}`} >
                                        <div className="biab_inplay-sport-item-title">
                                        <i className="fa biab_expand js-toggle-sport" onClick={Cricketopen}/> Cricket</div>
                                        <div className="js-markets-list"style={cricket=== true?{display: "none"}:{display: "block"}}>
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
                                                                <th></th>
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
                                                                                <div className="biab_in-play">
                                                                                    <table className="biab_cricket">
                                                                                        <tbody>
                                                                                            
                                                                                            <tr>
                                                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />

                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                          
                                                                            <Link to="/Runningmarketanlysis" style={{color: 'black', textDecoration: 'none'}} id="marketPath">
                                                                                <div className="biab_market-title-team-names js-teams">NSW Blues<br />Victoria</div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell ">
                                                                            <span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                    <i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11921197}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> NSW Blues to win at odds of 1.24 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                        <span className="js-odds biab_odds">1.18</span><span className="biab_bet-amount">5382</span>
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11921197}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> NSW Blues to win at odds of 1.25 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                        <span className="js-odds biab_odds">1.19</span><span className="biab_bet-amount">227945</span>
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">–</td>
                                                                        <td className="biab_green-cell biab_empty-cell biab_hidden-xs">–</td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={104487}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Victoria to win at odds of 5 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">6.2</span><span className="biab_bet-amount">43750</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={104487}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Victoria to win at odds of 5.2 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">6.6</span><span className="biab_bet-amount">2904</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31087000" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31082756} data-market-id="1.191312457">
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
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <table className="biab_cricket">
                                                                                        <tbody>
                                                                                           
                                                                                            <tr>
                                                                                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">SA Redbacks<br />Qld Bulls</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" >
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> SA Redbacks to win at odds of 4 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">4.1</span><span className="biab_bet-amount">312</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" >
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" >
                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                        <span className="js-odds biab_odds">6.4</span>
                                                                                        <span className="biab_bet-amount">283</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">–</td>
                                                                        <td className="biab_green-cell biab_empty-cell biab_hidden-xs">–</td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11871985}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" >
                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                        <span className="js-odds biab_odds">1.2</span>
                                                                                        <span className="biab_bet-amount">875</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={11871985}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Qld Bulls to win at odds of 1.28 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                        <span className="js-odds biab_odds">1.28</span>
                                                                                        <span className="biab_bet-amount">262</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell ">
                                                                            <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span>
                                                                            <a href="/customer/sport/event/31082756" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" />
                                                                                </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31078088} data-market-id="1.191222236">
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
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <table className="biab_cricket">
                                                                                        <tbody>
                                                                                           
                                                                                            <tr>
                                                                                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Tas Tigers<br />Western Australia</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11885284}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Tas Tigers to win at odds of 2 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.72</span><span className="biab_bet-amount">2456</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11885284}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Tas Tigers to win at odds of 7.4 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">4.8</span><span className="biab_bet-amount">231</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">–</td>
                                                                        <td className="biab_green-cell biab_empty-cell biab_hidden-xs">–</td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={104483}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Western Australia to win at odds of 1.16 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.27</span><span className="biab_bet-amount">875</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={104483}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Western Australia to win at odds of 2 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.58</span><span className="biab_bet-amount">4236</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31078088" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31078405} data-market-id="1.191374088">
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
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <span className="biab_market-time"><input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/></span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Otago<br />Northern Districts</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={86362}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Otago to win at odds of 11 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">11</span><span className="biab_bet-amount">399</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={86362}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Otago to win at odds of 880 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">880</span><span className="biab_bet-amount">326</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-2 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={60443}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> The Draw at odds of 1.18 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.24</span><span className="biab_bet-amount">871</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-2 js-bet-lay biab_hidden-xs" data-selection-id={60443}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> The Draw at odds of 4.9 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">4.9</span><span className="biab_bet-amount">891</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={86360}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Northern Districts to win at odds of 1.48 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.48</span><span className="biab_bet-amount">388</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={86360}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Northern Districts to win at odds of 880 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">880</span><span className="biab_bet-amount">436</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31078405" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                            <col width={4} />
                                                            <col className="biab_table-col" width="8%" />
                                                            <col className="biab_table-col" width="8%" />
                                                            <col width={50} />
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th colSpan={2}>Coming up</th>
                                                                <th></th>
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win."
                                                                    data-original-title="true">1</th>
                                                                <th className="biab_divider-cell" />
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">X</th>
                                                                <th className="biab_divider-cell" />
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win, the <strong>X</strong> marks the <strong>'Draw'</strong> and the <strong>2</strong> marks the <strong>'Away'</strong> to win."
                                                                    data-original-title="true">2</th>
                                                             
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                    <div className="js-markets-list">
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31062818} data-market-id="1.190618276">
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
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <table className="biab_cricket">
                                                                                        <tbody>
                                                                                           
                                                                                        <span class="biab_market-time"><input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/></span>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Sri Lanka<br />West Indies</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={7337}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Sri Lanka to win at odds of 2.84 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">3.3</span><span className="biab_bet-amount">36808</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={7337}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Sri Lanka to win at odds of 2.9 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">3.45</span><span className="biab_bet-amount">871</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-2 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={60443}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> The Draw at odds of 1.55 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.45</span><span className="biab_bet-amount">1964</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-2 js-bet-lay biab_hidden-xs" data-selection-id={60443}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> The Draw at odds of 1.57 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.46</span><span className="biab_bet-amount">83199</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={235}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> West Indies to win at odds of 70 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">60</span><span className="biab_bet-amount">4506</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={235}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> West Indies to win at odds of 75 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">65</span><span className="biab_bet-amount">3757</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31062818" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31085349} data-market-id="1.191313549">
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
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <span className="biab_market-time">
                                                                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/></span>
                                                                                    
                                                                                    </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Brisbane Heat WBBL<br />Adelaide Strikers WBBL</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={12217559}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Brisbane Heat WBBL to win at odds of 1.88 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.89</span><span className="biab_bet-amount">39290</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={12217559}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Brisbane Heat WBBL to win at odds of 1.91 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.91</span><span className="biab_bet-amount">95851</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">–</td>
                                                                        <td className="biab_green-cell biab_empty-cell biab_hidden-xs">–</td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={12215567}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Adelaide Strikers WBBL to win at odds of 2.1 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.08</span><span className="biab_bet-amount">370407</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={12215567}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Adelaide Strikers WBBL to win at odds of 2.14 or greater."
                                                                                    data-original-title="true">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.12</span><span className="biab_bet-amount">5952</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31085349" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="js-competitions-region biab_inplay-sport-competitions-list" /></div>
                                    </div>
                                    <div className=" biab_inplay-sport-wrapper">
                                        <div className="biab_inplay-sport-item-title"><i className="fa biab_expand js-toggle-sport" /> Soccer</div>
                                        <div className="js-markets-list" style={{display: 'block'}}>
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
                                                                <th colSpan={2}>In-Play</th>
                                                                <th></th>
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
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31087670} data-market-id="1.191382177">
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
                                                                            <div>
                                                                                <div className="biab_in-play"><span className="biab_market-time"><input class="form-check-input" type="checkbox" id="flexCheckChecked" value=""/></span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                        <Link to="/Soccer" style={{color: 'black', textDecoration: 'none'}} id="marketPath">
                                                                            <div className="biab_market-title-team-names js-teams">Deportivo Saprissa<br />AD San Carlos</div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs biab_empty-cell" data-selection-id={1328422}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={1328422}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Deportivo Saprissa to win at odds of 1.48 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.01</span><span className="biab_bet-amount">578094</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-2 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={58805}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> The Draw at odds of 5.1 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1000</span><span className="biab_bet-amount">1516</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-2 js-bet-lay biab_hidden-xs biab_empty-cell" data-selection-id={58805}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={16192067}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> AD San Carlos to win at odds of 7.8 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1000</span><span className="biab_bet-amount">1516</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs biab_empty-cell" data-selection-id={16192067}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31087670" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
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
                                                                <th></th>
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
                                    <div className=" biab_inplay-sport-wrapper">
                                        <div className="biab_inplay-sport-item-title">
                                            <i className="fa biab_expand js-toggle-sport" /> Tennis</div>
                                        <div className="js-markets-list" style={{display: 'block'}}>
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
                                                            <col width={50} />
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th colSpan={2}>In-Play</th>
                                                                <th></th>
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">1</th>
                                                                <th className="biab_divider-cell" />
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">2</th>
                                                             
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                    <div className="js-markets-list">
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31085107} data-market-id="1.191309777">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_in-play">
                                                                                    <table className="biab_tennis">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td className="biab_tennis-sets biab_home-tennis-sets">0</td>
                                                                                                <td className="biab_tennis-games biab_home-tennis-games">0</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="biab_tennis-sets biab_away-tennis-sets">0</td>
                                                                                                <td className="biab_tennis-games biab_away-tennis-games">0</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                        <Link to="/Tennis" style={{color: 'black', textDecoration: 'none'}} id="marketPath">

                                                                            <div className="biab_market-title-team-names js-teams">Matias Franco Descotte<br />Gerardo Lopez Villaseñ</div>
                                                                       </Link>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={8908192}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Matias Franco Descotte to win at odds of 2.62 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.5</span><span className="biab_bet-amount">1172</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={8908192}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Matias Franco Descotte to win at odds of 2.68 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.78</span><span className="biab_bet-amount">320</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={40249770}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Gerardo Lopez Villaseñ to win at odds of 1.6 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.56</span><span className="biab_bet-amount">34717</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={40249770}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Gerardo Lopez Villaseñ to win at odds of 1.61 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.66</span><span className="biab_bet-amount">1764</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31085107" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                                <th colSpan={2}>Coming up</th>
                                                                <th></th>
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">1</th>
                                                                <th className="biab_divider-cell" />
                                                                <th colSpan={2} data-toggle="tooltip" data-placement="auto" data-text="The <strong>1</strong> marks the <strong>'Home'</strong> to win and the <strong>2</strong> marks the <strong>'Away'</strong> to win.">2</th>
                                                             
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                    <div className="js-markets-list">
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31085173} data-market-id="1.191310251">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">09:15</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Pablo Cuevas<br />Aleksandar Kovacevic</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={2424953}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Pablo Cuevas to win at odds of 2.42 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.48</span><span className="biab_bet-amount">780</span></div>
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
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31084797} data-market-id="1.191302946">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">09:30</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Vives Marcos/Wu<br />Harrison/Novikov</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched">0</span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={41799562}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Vives Marcos/Wu to win at odds of 2.74 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.74</span><span className="biab_bet-amount">1816</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={41799562}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Vives Marcos/Wu to win at odds of 7.4 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">7.4</span><span className="biab_bet-amount">774</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11456581}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Harrison/Novikov to win at odds of 1.16 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.16</span><span className="biab_bet-amount">4937</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={11456581}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Harrison/Novikov to win at odds of 1.57 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.57</span><span className="biab_bet-amount">3169</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31084797" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31088836} data-market-id="1.191409825">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">09:30</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Christian Langmo<br />Zachary Svajda</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={9633989}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Christian Langmo to win at odds of 2.72 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.72</span><span className="biab_bet-amount">388</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={9633989}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Christian Langmo to win at odds of 2.76 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.76</span><span className="biab_bet-amount">4958</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={20832494}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Zachary Svajda to win at odds of 1.56 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.56</span><span className="biab_bet-amount">8772</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={20832494}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Zachary Svajda to win at odds of 1.59 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.59</span><span className="biab_bet-amount">3656</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31088836" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31090950} data-market-id="1.191449706">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">12:00</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">D Snigur<br />J Grabher</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched">0</span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={15153693}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> D Snigur to win at odds of 1.13 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.19</span><span className="biab_bet-amount">27892</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_empty-cell biab_hidden-xs" data-selection-id={15153693}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={8889609}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> J Grabher to win at odds of 2.34 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.42</span><span className="biab_bet-amount">10152</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_empty-cell biab_hidden-xs" data-selection-id={8889609}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31090950" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31090949} data-market-id="1.191449710">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">12:00</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">M Hibi<br />I Shinikova</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched">0</span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={9627639}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> M Hibi to win at odds of 1.41 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.51</span><span className="biab_bet-amount">14352</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_empty-cell biab_hidden-xs" data-selection-id={9627639}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={9628989}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> I Shinikova to win at odds of 1.87 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.6</span><span className="biab_bet-amount">11495</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_empty-cell biab_hidden-xs" data-selection-id={9628989}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                    <div className="biab_bet-content " /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31090949" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31089867} data-market-id="1.191426239">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">13:30</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Evgeny Karlovskiy<br />Johannes Haerteis</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={7412809}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Evgeny Karlovskiy to win at odds of 1.44 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.44</span><span className="biab_bet-amount">4281</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={7412809}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Evgeny Karlovskiy to win at odds of 1.53 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.53</span><span className="biab_bet-amount">4506</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={8575032}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Johannes Haerteis to win at odds of 2.9 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.9</span><span className="biab_bet-amount">1558</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={8575032}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Johannes Haerteis to win at odds of 3.3 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">3.3</span><span className="biab_bet-amount">1869</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31089867" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                        <div className="biab_table-wrapper">
                                                            <table className="biab_group-markets-table js-inplay-market" data-event-id={31089565} data-market-id="1.191420532">
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
                                                                    <col width={50} />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="biab_market-inplay-cell js-market-inplay-cell">
                                                                            <div>
                                                                                <div className="biab_not-in-play"><span className="biab_market-time">13:30</span></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_market-title-cell ">
                                                                            <div className="biab_market-title-team-names js-teams">Yanki Erel<br />Hiroki Moriya</div>
                                                                        </td>
                                                                        <td className="js-inline-placement-label ">
                                                                            <div className="biab_inline-placement-labels-wrap" />
                                                                        </td>
                                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched"></span>
                                                                            <div className="biab_promoted-tooltip-inner">
                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={12314694}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Yanki Erel to win at odds of 2.76 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.76</span><span className="biab_bet-amount">2183</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={12314694}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Yanki Erel to win at odds of 2.98 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.98</span><span className="biab_bet-amount">29407</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={5858055}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Hiroki Moriya to win at odds of 1.51 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.51</span><span className="biab_bet-amount">57270</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={5858055}>
                                                                            <div className="biab_cell-view">
                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Hiroki Moriya to win at odds of 1.57 or greater.">
                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.57</span><span className="biab_bet-amount">3840</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31089565" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
                                                                                title="View all markets" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="js-inline-placement-component">
                                                                <div className="biab_inline-placement" /></div>
                                                            <div className="js-status-wrapper">
                                                                <div /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="js-competitions-region biab_inplay-sport-competitions-list" /></div>
                                    </div>
                                </div>
                                <div className="biab_loading-spinner js-inplay-spinner biab_hide" style={{display: 'none'}} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}

import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export const DataCricket = (props) => {
    const [refresh,setrefresh] = useState(true);
    const [cricketList,setcricketList] = useState([]);
    const [soccerList,setsoccerList] = useState([]);
    const [tennisList,settennisList] = useState([]);
    const [reload,setreload] = useState(true);
    const [cricket, setcricket] = useState(false);
    
    return (
        <React.Fragment>
       
             <div className="biab_body biab_fluid" id="biab_body">
             {refresh && <div className="loading"> <div class="biab_loading-spinner js-inplay-spinner " style={{display: "block"}}></div></div>}

            <div className="biab_wrapper js-wrapper">
                <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                <div className="biab_table-tabs js-table-tabs" >
                   
                  
                   <ul className="path" style={{display:'flex',height:'27px',width:'287px'}}> 
                       <li> <a  className={`${(props.tabMenu ===8) ? "tab_active":"tab"}`}style={{marginLeft:' -14px'}} href="/DataCricket">Cricket</a></li>
                    
                       <li><a className={`${(props.tabMenu ===6) ? "tab_active":"tab"}`} href="/DataSoccer">Soccer</a></li>
                       <li><a className={`${(props.tabMenu ===7) ? "tab_active":"tab"}`} href="/DataTennis">Tennis</a></li>
                   </ul>
                   </div>   
           <div className="biab_page-wrapper">
    <div className="biab_page-holder">
        <div className="biab_inplay-sports-container js-inplay-sports-list-region">
            <div>
                <div className="js-inplay-sports-list">
                    <div className=" biab_inplay-sport-wrapper">
                        <div className="biab_inplay-sport-item-title">
                          Cricket</div>
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
                                                            <span class="biab_market-time">26 December<br/>13:30</span>
                                                            </div>
                                                        </td>

                                                        <td className="biab_market-title-cell ">
                                                            <Link id="marketPath" to="/DataAnalysis" style={{color: 'black', textDecoration: 'none'}}>
                                                                <div className="biab_market-title-team-names js-teams">NSW Blues<br />Victoria</div>
                                                            </Link>
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
                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11921197}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> NSW Blues to win at odds of 1.24 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount">
                                                                        <span className="js-odds biab_odds">1.18</span>
                                                                        <span className="biab_bet-amount">5382</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11921197}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> NSW Blues to win at odds of 1.25 or greater." data-original-title="true">
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
                                                        <td className="biab_buttons-cell ">
                                                            <span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span>
                                                            <a href="/customer/sport/event/31087000" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"/>
                                                            </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="js-inline-placement-component">
                                                <div className="biab_inline-placement"/>
                                                </div>
                                            <div className="js-status-wrapper">
                                                <div/>
                                                </div>
                                        </div>
                                        <div className="biab_table-wrapper">
                                            <table className="biab_group-markets-table js-inplay-market" >
                                                <colgroup>
                                                   
                                                    <col width={65} />
                                                    <col/>
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
                                                                
                                                                <div className="biab_in-not-play">
                                                                <span class="biab_market-time">26 December<br/>13:30</span>
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                        <td className="biab_market-title-cell ">
                                                            <div className="biab_market-title-team-names js-teams">SA Redbacks<br />Qld Bulls</div>
                                                        </td>
                                                        <td className="js-inline-placement-label ">
                                                            <div className="biab_inline-placement-labels-wrap" />
                                                        </td>
                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                            <div className="biab_promoted-tooltip-inner">
                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11871983}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> SA Redbacks to win at odds of 4 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">4.1</span><span className="biab_bet-amount">312</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11871983}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> SA Redbacks to win at odds of 7.8 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">6.4</span><span className="biab_bet-amount">283</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                        <td className="biab_blue-cell js-blue-cell biab_hidden-xs biab_empty-cell">–</td>
                                                        <td className="biab_green-cell biab_empty-cell biab_hidden-xs">–</td>
                                                        <td className="biab_divider-cell biab_hidden-xs" />
                                                        <td className="biab_blue-cell js-blue-cell js-back-1 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11871985}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Qld Bulls to win at odds of 1.19 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.2</span><span className="biab_bet-amount">875</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_green-cell biab_bet-lay js-lay-1 js-bet-lay biab_hidden-xs" data-selection-id={11871985}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Qld Bulls to win at odds of 1.28 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.28</span><span className="biab_bet-amount">262</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_buttons-cell "><span className="biab_hidden-xs biab_info-icon biab_rules-icon js-market-rules" title="Rules">i</span><a href="/customer/sport/event/31082756" className="biab_arrow-icon fa fa-chevron-right biab_event-link js-event-link"
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
                                                                <div className="biab_not-in-play">
                                                                <span class="biab_market-time">26 December<br/>13:30</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_market-title-cell ">
                                                            <div className="biab_market-title-team-names js-teams">Tas Tigers<br />Western Australia</div>
                                                        </td>
                                                        <td className="js-inline-placement-label ">
                                                            <div className="biab_inline-placement-labels-wrap" />
                                                        </td>
                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                            <div className="biab_promoted-tooltip-inner">
                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={11885284}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Tas Tigers to win at odds of 2 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">2.72</span><span className="biab_bet-amount">2456</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={11885284}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Tas Tigers to win at odds of 7.4 or greater." data-original-title="true">
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
                                                                <div className="biab_in-notplay">
                                                                <span class="biab_market-time">26 December<br/>13:30</span>
                                                                        </div>
                                                            </div>
                                                        </td>

                                                        <td className="biab_market-title-cell ">
                                                            <div className="biab_market-title-team-names js-teams">Otago<br />Northern Districts</div>
                                                        </td>
                                                        <td className="js-inline-placement-label ">
                                                            <div className="biab_inline-placement-labels-wrap" />
                                                        </td>
                                                        <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
                                                            <div className="biab_promoted-tooltip-inner">
                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text="true" /></div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_blue-cell js-blue-cell js-back-0 biab_bet-back js-bet-back biab_hidden-xs" data-selection-id={86362}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet for</strong> Otago to win at odds of 11 or greater." data-original-title="true">
                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">11</span><span className="biab_bet-amount">399</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="biab_green-cell biab_bet-lay js-lay-0 js-bet-lay biab_hidden-xs" data-selection-id={86362}>
                                                            <div className="biab_cell-view">
                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="This means you can <strong>bet against</strong> Otago to win at odds of 880 or greater." data-original-title="true">
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

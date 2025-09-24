import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export const DataSoccer = (props) => {
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
        <div className="biab_table-tabs js-table-tabs">
            {/* <ul className="biab_table-content biab_tab-btns js-table-content biab_active" style={{marginLeft: '120px'}}>
                <li className={`${(props.tabMenu === 8) ? "ac-gn-link ac-gn-link-apple-btn123 ":"ac-gn-item ac-gn-apple"}`} id="Matches">
                    <Link className="ac-gn-link ac-gn-link-apple " data-tabtarget="settled" data-tabparent="past" to="/DataCricket">Cricket<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
                <li className={`${(props.tabMenu === 9) ? "ac-gn-link ac-gn-link-apple-btn123 ":"ac-gn-item ac-gn-apple"}`} id="Matches">
                    <Link className="bac-gn-link ac-gn-link-apple" data-tabtarget="cancelled" data-tabparent="past" to="/DataSoccer">Soccer<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
                <li className={`${(props.tabMenu === 10) ? "ac-gn-link ac-gn-link-apple-btn123 ":"ac-gn-item ac-gn-apple"}`} id="Matches">
                    <Link className="ac-gn-link ac-gn-link-apple" data-tabtarget="Summery" data-tabparent="past" to="/DataTennis">Tennis<span id="tagLive" class="tag-live" ><strong></strong>2</span></Link></li>
            </ul> */}
             <ul className="path" style={{display:'flex',height:'27px',width:'193px'}}> 
                       <li > <Link className={`${(props.tabMenu ===8) ? "tab_active":"tab"}`}style={{marginLeft:' -14px'}} to="/DataCricket">Cricket</Link></li>
                    
                       <li><Link  className={`${(props.tabMenu ===6) ? "tab_active":"tab"}`}style={{textDecoration: 'underline'}} to="/DataSoccer">Soccer</Link></li>
                       <li>
                           <Link className={`${(props.tabMenu ===7) ? "tab_active":"tab"}`}to="/DataTennis">Tennis</Link>
                           </li>
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
                                                                        <div className="biab_in-not-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span></div>
                                                                    </div>
                                                                </td>

                                                                <td className="biab_market-title-cell ">
                                                                    <a id="marketPath" href="/Soccer" style={{color: 'black', textDecoration: 'none'}}>
                                                                        <div className="biab_market-title-team-names js-teams">Deportivo Saprissa<br />AD San Carlos</div>
                                                                    </a>
                                                                </td>
                                                                <td className="js-inline-placement-label ">
                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                </td>
                                                                <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
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
                        <div className="biab_loading-spinner js-inplay-spinner biab_hide" style={{display: 'none'}} /></div>
                </div>
            </div>
        </div>
    </div>
</div>    
        </React.Fragment>
    )
}

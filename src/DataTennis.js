import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export const DataTennis = (props) => {
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
                    <a className="ac-gn-link ac-gn-link-apple " data-tabtarget="settled" data-tabparent="past" href="/DataCricket">Cricket<span id="tagLive" class="tag-live" ><strong></strong>2</span></a></li>
                <li className={`${(props.tabMenu === 9) ? "ac-gn-link ac-gn-link-apple-btn123 ":"ac-gn-item ac-gn-apple"}`} id="Matches">
                    <a className="ac-gn-link ac-gn-link-apple " data-tabtarget="cancelled" data-tabparent="past" href="/DataSoccer">Soccer<span id="tagLive" class="tag-live" ><strong></strong>2</span></a></li>
                <li className={`${(props.tabMenu === 10) ? "ac-gn-link ac-gn-link-apple-btn123 ":"ac-gn-item ac-gn-apple"}`} id="Matches">
                    <a className="ac-gn-link ac-gn-link-apple" data-tabtarget="Summery" data-tabparent="past" href="/DataTennis">Tennis<span id="tagLive" class="tag-live" ><strong></strong>2</span></a></li>
            </ul> */}
             <ul className="path" style={{display:'flex',height:'27px',width:'287px'}}> 
                       <li> <a  className={`${(props.tabMenu ===8) ? "tab_active":"tab"}`}style={{marginLeft:' -14px'}} style={{    marginLeft:' -14px'}} href="/DataCricket">Cricket</a></li>
                    
                       <li><a className={`${(props.tabMenu ===6) ? "tab_active":"tab"}`} href="/DataSoccer">Soccer</a></li>
                       <li><a className={`${(props.tabMenu ===7) ? "tab_active":"tab"}`} style={{textDecoration: 'underline'}} href="/DataTennis">Tennis</a></li>
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
                                <div className="js-markets-list" style={{display: 'block'}}>
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
                                                                        <div className="biab_not-in-play">
                                                                      
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                            </div>
                                                                    </div>
                                                                </td>

                                                                <td className="biab_market-title-cell ">
                                                                    <div className="biab_market-title-team-names js-teams">Pablo Cuevas<br />Aleksandar Kovacevic</div>
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
                                                                        <div className="biab_not-in-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                            </div>
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
                                                                        <div className="biab_not-in-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                            </div>
                                                                    </div>
                                                                </td>

                                                                <td className="biab_market-title-cell ">
                                                                    <div className="biab_market-title-team-names js-teams">Christian Langmo<br />Zachary Svajda</div>
                                                                </td>
                                                                <td className="js-inline-placement-label ">
                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                </td>
                                                                <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
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
                                                                        <div className="biab_not-in-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                            </div>
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
                                                                        <div className="biab_not-in-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                            </div>
                                                                    </div>
                                                                </td>

                                                                <td className="biab_market-title-cell ">
                                                                    <div className="biab_market-title-team-names js-teams">Evgeny Karlovskiy<br />Johannes Haerteis</div>
                                                                </td>
                                                                <td className="js-inline-placement-label ">
                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                </td>
                                                                <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
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
                                                                        <div className="biab_not-in-play">
                                                                        <span class="biab_market-time">26 December<br/>13:30</span>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td className="biab_market-title-cell ">
                                                                    <div className="biab_market-title-team-names js-teams">Yanki Erel<br />Hiroki Moriya</div>
                                                                </td>
                                                                <td className="js-inline-placement-label ">
                                                                    <div className="biab_inline-placement-labels-wrap" />
                                                                </td>
                                                                <td className="biab_market-total-matched-cell "><span className="js-market-total-matched" />
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

import React from 'react'

export const RollAnalysis = () => {
    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>

                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: "481px" }}>

                                <li> <a style={{ marginLeft: "-17px" }} href="/DataCricket">Cricket <i class="fas fa-angle-right"></i> </a></li>
                                <li> <a href="/DataCricket">NSW Blues V Victoria <i class="fas fa-angle-right"></i> </a></li>
                                <li> <a href="">Match Odds </a></li>
                                <li> <a href="">Bookmaker </a></li>

                                <li><a href="/DataAnalysis">Fancy  </a></li>

                            </ul>
                        </div>
                        <div class="biab_page-wrapper">
                            <div class="biab_page-holder" style={{ margin: "-22px 6px -46px" }}>
                                <div class="biab_page-container">

                                    <div className="js-scroll-start" style={{ margin: "28px" }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'auto' }}>
                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '107px' }}>
                                            <div className="js-cancel-bets-wrapper">
                                                <div className="biab_cancel-all-bets-wrapper"><span className="js-cancel-all-btn biab_btn biab_cancel-btn biab_hide " style={{}}>Cancel All Unmatched Bets</span><span className="js-confirm-cancel-all-btn biab_btn biab_confirm-btn biab_hide " style={{}}>Confirm Cancellation</span></div>
                                            </div>


                                            <div className="js-loading biab_loading biab_hide"><i className="fa fa-spinner fa-pulse fa-3x fa-fw" /></div>
                                            <div className="biab_table-wrapper js-table-wrapper">
                                                <div className="biab_table-holder">
                                                    <div className="biab_info-msg js-info-msg biab_mybets-info biab_hide">Please be aware that back odds value for lay bet is approximate and rounded up to 0.01 precision</div>
                                                    <table className="biab_table biab_mybets">
                                                        <colgroup>
                                                            <col width={83} />
                                                            <col width={330} />
                                                            <col width={56} />
                                                            <col width={66} />
                                                            <col width={66} />
                                                            <col width={113} />
                                                            <col width={86} />
                                                            <col width={120} />
                                                            <col width={90} />
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th className>User Name</th>
                                                                <th className="biab_odd">Description</th>
                                                                <th className>Type</th>
                                                                <th className="biab_odd">Odds</th>
                                                                <th className>Stake</th>
                                                                <th className="biab_odd">Liability</th>
                                                                <th className>Total Winnings</th>
                                                                <th className="biab_odd">Potential profit</th>
                                                                <th className>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="biab_mybets-body js-mybets-body">
                                                            <tr>
                                                                <td class=" biab_bet-indicator biab_bet-side-lay biab_fancy-swap ">Adnan01</td>
                                                                <td class="biab_text-left biab_odd">
                                                                    <a class="biab_eventName" href="/customer/sport/event/31084115">Delhi Bulls v Abu Dhabi</a><span class="biab_selectionName"><strong style={{ display: 'inline' }}>Total Runs 24</strong></span> <a class="biab_selectionName" href="/customer/sport/fancyEvent/31084115/FIRST_INNINGS_FANCY">1st Innings 2 Over Line</a>
                                                                    <span
                                                                        class="biab_groupName">Abu Dhabi T10 | Bet ID: 60528833 </span>
                                                                </td>
                                                                <td style={{ textTransform: "capitalize" }}>Yes</td>
                                                                <td class="biab_odd">2.00</td>
                                                                <td class="">50.00</td>
                                                                <td class="biab_odd">50.00</td>
                                                                <td class="">100.00</td>
                                                                <td class="biab_odd">50.00</td>
                                                                <td class="" style={{ textTransform: "capitalize" }}>Roll Back</td>
                                                            </tr>
                                                            <tr>
                                                                <td class=" biab_bet-indicator biab_bet-side-back  ">agdemo</td>
                                                                <td class="biab_text-left biab_odd">
                                                                    <a class="biab_eventName" href="/customer/sport/event/31084115">Delhi Bulls v Abu Dhabi</a><span class="biab_selectionName"><strong style={{ display: 'inline' }}>Abu Dhabi</strong></span> <a class="biab_selectionName" href="/customer/sport/market/1.191297920">Match Odds</a>
                                                                    <span
                                                                        class="biab_groupName">Abu Dhabi T10 | Bet ID: 60528788 | Triggered by Cash Out </span>
                                                                </td>
                                                                <td class="" style={{ textTransform: "capitalize" }}>Back</td>
                                                                <td class="biab_odd"><span data-toggle="tooltip" data-popover="popover" data-same-container="true" data-placement="auto" data-text="The full prices is 1.53">1.53</span></td>
                                                                <td class="">100.00</td>
                                                                <td class="biab_odd">100.00</td>
                                                                <td class="">153.00</td>
                                                                <td class="biab_odd">53.00</td>
                                                                <td class="" style={{ textTransform: "capitalize" }}>Roll Back</td>
                                                            </tr>
                                                            <tr>
                                                                <td className=" biab_bet-indicator biab_bet-side-lay  ">ascv</td>
                                                                <td className="biab_text-left biab_odd"><a className="biab_eventName" href="/customer/sport/event/31086918">Nanjing Fengfan v Beijing Tech FC</a><span className="biab_selectionName"><strong style={{ display: 'inline' }}>Nanjing Fengfan</strong></span> <a className="biab_selectionName"
                                                                    href="/customer/sport/market/1.191366419">Match Odds</a><span className="biab_groupName">Chinese League 1 | Bet ID: 60511796</span></td>
                                                                <td className style={{ textTransform: 'capitalize' }}>Lay</td>
                                                                <td className="biab_odd"><span data-toggle="tooltip" data-popover="popover" data-same-container="true" data-placement="auto" data-text="The full prices is 1.19">1.19</span></td>
                                                                <td className>50.00</td>
                                                                <td className="biab_odd">9.50</td>
                                                                <td className>59.50</td>
                                                                <td className="biab_odd">50.00</td>
                                                                <td className style={{ textTransform: 'capitalize' }}>Roll Back</td>
                                                            </tr>
                                                            <tr>
                                                                <td className=" biab_bet-indicator biab_bet-side-lay  ">demo22</td>
                                                                <td className="biab_text-left biab_odd"><a className="biab_eventName" href="/customer/sport/event/31089867">Karlovskiy v Haerteis</a><span className="biab_selectionName"><strong style={{ display: 'inline' }}>Evgeny Karlovskiy</strong></span> <a className="biab_selectionName"
                                                                    href="/customer/sport/market/1.191426239">Match Odds</a><span className="biab_groupName">Manama Challenger 2021 | Bet ID: 60511746</span></td>
                                                                <td className style={{ textTransform: 'capitalize' }}>Lay</td>
                                                                <td className="biab_odd"><span data-toggle="tooltip" data-popover="popover" data-same-container="true" data-placement="auto" data-text="The full prices is 1.44">1.44</span></td>
                                                                <td className>50.00</td>
                                                                <td className="biab_odd">22.00</td>
                                                                <td className>72.00</td>
                                                                <td className="biab_odd">50.00</td>
                                                                <td className style={{ textTransform: 'capitalize' }}>Roll Back</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="biab_table-widget" style={{ display: 'none' }}>
                                                        <div className="biab_btns-holder"><a href="#" className="biab_widget-btn biab_btn-prev js-prev disabled">Previous</a><a href="#" className="biab_widget-btn biab_btn-next js-next disabled">Next</a></div>
                                                        <div className="biab_info"><span className="biab_counter js-counter">Page 1 of 1</span>
                                                            <div className="biab_view-per-page js-view-per-page" /></div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="biab_table-widget" style={{ marginTop: "40px" }}>
                                                <div className="biab_btns-holder">
                                                    <a href="#" className="biab_widget-btn biab_btn-prev js-prev disabled">Previous</a>
                                                    <a href="#" className="biab_widget-btn biab_btn-next js-next">Next</a></div>
                                                <div className="biab_info">
                                                    <span className="biab_counter js-counter">Page 1 of 10</span>
                                                    <div className="biab_view-per-page js-view-per-page">
                                                        <span className="js-tab biab_tab biab_active" data-value={10}>10</span>
                                                        <span className="js-tab biab_tab" data-value={20}>20</span>
                                                        <span className="js-tab biab_tab" data-value={50}>50</span>
                                                        <span className="js-tab biab_tab" data-value={100}>100</span></div></div></div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

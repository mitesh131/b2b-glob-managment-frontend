import React, { useState, useEffect } from 'react'

function Settlematches(props) {
    const [refresh, setrefresh] = useState(true);

    return (
        <React.Fragment>
           
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: "241px" }}>
                                <li> <a style={{ marginLeft: "-17px" }} href="/DataCricket">Cricket <i class="fas fa-angle-right"></i> </a></li>
                                <li> <a href="/DataCricket">Wellington V Auckland <i class="fas fa-angle-right"></i> </a></li>
                            </ul>
                        </div>
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder">
                                <div className="biab_page-container">
                                    <div id="biab_page" className="biab_page js-page">
                                        <div className="biab_banner biab_fluid-hidden biab_banner-main js-banner-main biab_hide" />
                                        <div className="biab_columns-holder js-columns-holder biab_has-aside-left" style={{ maxHeight: '722.5px' }}>
                                            {refresh && <div className="loading"> <div class="biab_loading-spinner js-inplay-spinner " style={{ display: "block" }}></div></div>}
                                            <div id="biab_content" className="biab_content" style={{ minHeight: '541.5px' }}>
                                                <div>
                                                    <div className="biab_sub-page-banner js-sub-page-banner" style={{ display: 'none !important' }}>
                                                        <div className="biab_banner-wrapper " style={{ maxHeight: '100%' }} /></div>
                                                    <div className="js-search-region biab_search biab_hidden-xs">
                                                        <div className="biab_search-container">
                                                            <div className="biab_search-page-title biab_visible-xs">Search</div>
                                                            <div className="js-search-results-container biab_search-results-container biab_hide"
                                                                style={{ display: 'none' }}>
                                                                <div className="biab_search-results-info js-search-results-info" /></div>
                                                            <div className="js-scroll-start" />
                                                            <div className="biab_scrollable js-scrollable biab_hide" style={{ display: 'none', position: 'relative', height: '511.5px', overflow: 'auto' }}>
                                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '511.5px' }}>
                                                                    <div className="biab_loading-spinner js-spinner biab_hide" style={{ display: 'none' }} />
                                                                    <div className="js-search-results-container biab_search-results-container biab_hide" style={{ display: 'none' }}>
                                                                        <div className="biab_search-results js-search-results" />
                                                                        <div className="js-show-more biab_show-more biab_hide">Show more</div>
                                                                    </div>
                                                                </div>
                                                                <div className="js-footer" style={{ marginTop: '0px' }}>
                                                                    <div id="biab_footer">
                                                                        <div className="biab_footer-inner biab_footer-desktop biab_hidden-xs">
                                                                            <div className="biab_footer-content">
                                                                                <p>Indibet Exchange is the newest sports exchange operator that offers incredible odds, liquidity and markets. We offer online odds with back and lay betting - a marketplace for you to bet on the outcome
                                                                                    of thousands of events. Enjoy an exciting variety of sports including football, tennis, cricket, horseracing, American football, basketball and more. Available in various languages - Indibet
                                                                                    Exchange is the ultimate destination for sports exchange betting.<a href="#webchat_widget">.</a></p>
                                                                                <ul className="biab_footer-nav">
                                                                                    <li><a href="/customer/pages/en/responsible_gambling">Responsible Gambling</a></li>
                                                                                    <li>
                                                                                        <span className="biab_separator" /><a href="/customer/pages/en/terms_and_conditions">Terms and Conditions</a></li>
                                                                                    <li>
                                                                                        <span className="biab_separator" /><a href="/customer/pages/en/rules_and_regulations">Rules and Regulations</a></li>
                                                                                    <li>
                                                                                        <span className="biab_separator" /><a href="/customer/pages/en/privacy_policy">Privacy Policy</a></li>
                                                                                </ul>
                                                                                <ul className="biab_footer-icons">
                                                                                    <li style={{ margin: '0 20px 0 0' }}><a href="https://ex.indibet.com/customer/" className="biab_adults-only">18+</a></li>
                                                                                    <li style={{ margin: '0 20px 0 0' }}><a className="biab_gamble-aware" href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">GambleAware</a></li>
                                                                                    <li style={{ width: '48px', margin: '0px' }}><a className="biab_curacao" href="#">Curacao</a>
                                                                                        <div data-apg-seal-id="7d92de7c-528e-4fc8-bb73-adb7ceb3caf4" data-apg-image-size={128} data-apg-image-type="basic-small">
                                                                                            <div style={{
                                                                                                display: 'block', position: 'relative', overflow: 'hidden', maxWidth: '128px', minWidth: '32px', backgroundImage:
                                                                                                    'url(https://7d92de7c-528e-4fc8-bb73-adb7ceb3caf4.snippet.antillephone.com/54f396e0-b046-49b1-9cb3-0c69281d7ea9-beacon.png)'
                                                                                            }}><a target="_blank" rel="nonoopener" href="https://validator.antillephone.com/validate?domain=ex.indibet.com&seal_id=6c6ba157fb30f9d753db1a0cb76ab8f9b9a388a04885b559fa75dd1655b2a8b67565760ea68ea2789a4f6b3976b35e39&stamp=de56848e1c69c8425cf40040256dd574"><img alt="" style={{ width: '100%', height: 'auto' }} src="https://7d92de7c-528e-4fc8-bb73-adb7ceb3caf4.snippet.antillephone.com/sealassets/de56848e1c69c8425cf40040256dd574-ex.indibet.com-6c6ba157fb30f9d753db1a0cb76ab8f9b9a388a04885b559fa75dd1655b2a8b67565760ea68ea2789a4f6b3976b35e39-c2VhbC5wbmc%3D?status=valid" /></a></div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                                <p />
                                                                            </div>
                                                                            <ul className="biab_footer-nav" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="js-content-region">
                                                        <div className="js-content-wrapper">
                                                            <div className="biab_market biab_handicap-market js-market biab_mmv-market  ">
                                                                <div className="biab_scrollable js-scrollable js-toggle-content" style={{ position: 'relative', height: '893.5px', overflow: 'auto' }}>
                                                                    <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '326px' }}>

                                                                        <div style={{ height: 'auto' }}>
                                                                            {/* {LiveMatchDashBoard.map((item, id) => {
                                                                                return ( */}
                                                                                    <div  className="biab_tab-content-holder ">
                                                                                        <div className="js-market-header-region" >
                                                                                            <div class="biab_multi-market-title js-collapse-toggler" style={{ height: '23px', marginLeft: '-1px' }}>Match Odds</div>
                                                                                        </div>
                                                                                        <div className="biab_hide js-market-table" style={{ marginTop: '0px', display: 'block' }}>
                                                                                            <div className="biab_tab-content js-sticky-header" style={{ position: 'relative', zIndex: 0, top: '0px', paddingRight: '0px', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                                                                <div className="biab_header-table">
                                                                                                    <table className="biab_market-table">
                                                                                                        <colgroup>
                                                                                                            <col width />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                        </colgroup>
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th colSpan={2} className="biab_no-bg biab_text-left">
                                                                                                                    <span className="js-total-lines-wrapper" style={{ display: 'block', textAlign: "end", marginRight: "31px" }}>
                                                                                                                        <span class="js-total-lines" /></span>
                                                                                                                    <span
                                                                                                                        className="biab_ah-show-all-button js-ah-show-all-button">Show all</span>
                                                                                                                    <span className="biab_ah-minimize-button js-ah-minimize-button">Minimize</span>
                                                                                                                    <span className="biab_ah-reset-view-button js-ah-reset-view-button">Reset View</span>
                                                                                                                </th>
                                                                                                                <th
                                                                                                                    className="biab_no-bg biab_fancy-market-column biab_back-all-column " colSpan={1}>Suspand</th>
                                                                                                                <th
                                                                                                                    className="biab_no-bg biab_text-right biab_back-all biab_back-all-column js-back-all" colSpan={1}>
                                                                                                                    <span>Back all</span></th>
                                                                                                                <th className="biab_no-bg biab_text-left biab_lay-all biab_lay-all-column js-lay-all " colSpan={1}>
                                                                                                                    <span>Lay all</span></th>
                                                                                                                <th className="biab_no-bg biab_text-right  ">

                                                                                                                </th>
                                                                                                                <th className="biab_no-bg biab_text-right  ">
                                                                                                                </th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="biab_tab-content ">
                                                                                                <div className="biab_market-selections js-market-selections ">
                                                                                                    <div className="biab_hide" data-selection-id={349} data-handicap={0} style={{ display: 'block' }}>
                                                                                                        <div>
                                                                                                            <div className="biab_selection-table js-selection-table">
                                                                                                                <div>
                                                                                                                    <table className="biab_market-table ">
                                                                                                                        <colgroup>
                                                                                                                            <col width />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                        </colgroup>
                                                                                                                        <tbody />
                                                                                                                    </table>
                                                                                                                    <div className="biab_market-table-wrapper">
                                                                                                                        <table className="biab_market-table">
                                                                                                                            <colgroup>
                                                                                                                                <col width />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />

                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                            </colgroup>

                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td className=" ">
                                                                                                                                        <span className="biab_game-title" title="South Africa">TeamA</span>
                                                                                                                                        <div className="js-selection-pl-wrap"> </div>
                                                                                                                                    </td>
                                                                                                                                    <td className=" ">
                                                                                                                                        Min<input id="inpid" class="min-inp" value="" type="number" />
                                                                                                                                        <div className="js-selection-pl-wrap">
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className=" ">
                                                                                                                                        <span className="biab_game-title" title="South Africa"></span>
                                                                                                                                        <div className="js-selection-pl-wrap">
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{}} style={{ borderBottom: '1px solid white', }} >
                                                                                                                                        <div class="biab_cell-view" style={{ position: 'absolute', bottom: '44px' }}>
                                                                                                                                            <div class="js-bet biab_bet-cell" style={{ backgroundColor: '#86ba00', width: '65px', zIndex: '1', top: "69px", height: '46px', marginLeft: "19px" }}>
                                                                                                                                                <div class="biab_bet-content ">

                                                                                                                                                    <input class="form-check-input" style={{ marginTop: '17px' }} type="checkbox" id="OMSAIA"  />
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet" style={{}} style={{ borderBottom: '1px solid white', }} >
                                                                                                                                        <div class="biab_cell-view" style={{ position: 'absolute', bottom: '44px' }}>
                                                                                                                                            <div class="js-bet biab_bet-cell" style={{ backgroundColor: '#86ba00', width: '65px', zIndex: '1', top: "69px", height: '46px', marginLeft: "19px" }}>
                                                                                                                                                <div class="biab_bet-content ">

                                                                                                                                                    <input class="form-check-input" style={{ marginTop: '17px' }} type="checkbox" id="OBSAIA"   />
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="349_hc_0">
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 178945.93  for</strong> the South Africa at odds of 1.03 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds">1.06</span>

                                                                                                                                                    <span className="biab_bet-amount">3163</span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="349_hc_0">
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" >
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds">1.07</span>

                                                                                                                                                    <span className="biab_bet-amount">4973</span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet" style={{ borderRight: "none" }}>
                                                                                                                                        <div class="js-bet biab_bet-cell" style={{ backgroundColor: 'white', width: '164px', zIndex: '1', top: '21px', height: '36px' }}>
                                                                                                                                            
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                        <div class="js-bet biab_bet-cell"  style={{ backgroundColor: 'white', width: '74px', zIndex: '1', top: '21px', height: '36px', marginLeft: "28px" }}>
                                                                                                                                            <img class="importfancy" alt="" src="data:image/png;base64,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" />
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>

                                                                                                                        </table>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="biab_betslip biab_hide js-betslip" />
                                                                                                            <div className="js-mobile-open-bets" /></div>
                                                                                                    </div>
                                                                                                    <div className="biab_hide" data-selection-id={228749} data-handicap={0} style={{ display: 'block' }}>
                                                                                                        <div>
                                                                                                            <div className="biab_selection-table js-selection-table">
                                                                                                                <div>
                                                                                                                    <table className="biab_market-table ">
                                                                                                                        <colgroup>
                                                                                                                            <col width />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                            <col className="biab_table-col" width="8%" />
                                                                                                                        </colgroup>
                                                                                                                        <tbody />
                                                                                                                    </table>
                                                                                                                    <div className="biab_market-table-wrapper">
                                                                                                                        <table className="biab_market-table">
                                                                                                                            <colgroup>
                                                                                                                                <col width />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                                <col className="biab_table-col" width="8%" />
                                                                                                                            </colgroup>
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td className=" ">
                                                                                                                                        <span className="biab_game-title" title="Netherlands">Team B</span>
                                                                                                                                        <div className="js-selection-pl-wrap">
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className=" ">
                                                                                                                                        Max<input id="inpid" class="min-inp" value=""type="number" />
                                                                                                                                        <div className="js-selection-pl-wrap">
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className=" ">

                                                                                                                                        <span className="biab_game-title" title="Netherlands"></span>
                                                                                                                                        <div className="js-selection-pl-wrap">
                                                                                                                                        </div>
                                                                                                                                    </td>

                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                        <div className="biab_cell-view" >
                                                                                                                                            <div className="js-bet biab_bet-cell">
                                                                                                                                                <div className="biab_bet-content " /></div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="biab_promoted-tooltip-inner ">
                                                                                                                                                <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip">
                                                                                                                                                    <i className="fas fa-info-circle" /></div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" >
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" >
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds">16</span>

                                                                                                                                                    <span className="biab_bet-amount">12</span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0">
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" >
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds">18</span>

                                                                                                                                                    <span className="biab_bet-amount">186</span></div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet" style={{ borderRight: "none" }}>
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" >
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds">

                                                                                                                                                    </span>

                                                                                                                                                    <span className="biab_bet-amount"></span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                    <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                        <div className="biab_cell-view">
                                                                                                                                            <div className="js-bet biab_bet-cell" >
                                                                                                                                                <div className="biab_bet-content biab_has-amount">

                                                                                                                                                    <span className="js-odds biab_odds"></span>

                                                                                                                                                    <span className="biab_bet-amount"></span></div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                {/* )
                                                                            })} */}
                                                                        </div>

                                                                        <div style={{ height: 'auto' }}>
                                                                            <div id="multiMarketContainer">
                                                                                <div className="biab_multi-market-title js-collapse-toggler" style={{ display: "flex", justifyContent: "space-between", height: "23px" }}> Fancy
                                                                                    <div className="biab_market-icons">
                                                                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" style={{ marginTop: '4px', position: 'absolute', right: '40.7px' }} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="js-fancy-markets-list" style={{ height: 'auto', overflowY: "scroll" }}   >
                                                                                    {/* {fancy_session.map((item2, index) => {
                                                                                        return ( */}
                                                                                            <div className="biab_market-table-wrapper biab_fancy-market-item">
                                                                                                <table className="biab_market-table">
                                                                                                    <colgroup>
                                                                                                        <col width />
                                                                                                        <col className="biab_table-col" width="16%" />
                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                        <col className="biab_table-col" width="8%" />

                                                                                                        <col className="biab_table-col" width="8%" />
                                                                                                        <col className="biab_table-col " width="8%" />
                                                                                                        <col className="biab_table-col " width="8%" />
                                                                                                        <col className="biab_table-col " width="8%" />
                                                                                                    </colgroup>
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td className="biab_fancy-market-selection-name">Fancy Name</td>
                                                                                                            <td className="biab_fancy-market-selection-tm js-market-total-matched" style={{textAlign:'center'}}>
                                                                                                                <a href="#/envelope-square" style={{ fontSize: '12px' }} ><i class="fa fa-envelope-square" style={{ fontSize: '24px' }}></i> </a>
                                                                                                            </td>
                                                                                                            <td className="biab_fancy-market-selection-tm js-market-total-matched" >Min <input className="min-inp" id="inpid" type="number" value="" /></td>
                                                                                                            <td className="biab_fancy-market-selection-tm js-market-total-matched">Max<input id="inpid" className="min-inp" type="number" value="" /></td>
                                                                                                            <td className="biab_bet js-fm-back-2 biab_grey-cell biab_bet-back biab_empty-cell biab_back-2 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0} style={{ borderRight: "none" }}>
                                                                                                                <div className="js-bet biab_bet-cell" style={{ backgroundColor: 'rgb(134, 186, 0)', width: '65px', zIndex: 1, height: '46px', marginLeft: '19px' }}>
                                                                                                                    <div className="biab_bet-content ">
                                                                                                                        <input className="form-check-input" type="checkbox" id="FMSAIA" style={{ marginTop: '17px' }}  /></div>
                                                                                                                </div>


                                                                                                            </td>
                                                                                                            <td className="biab_bet js-fm-back-1 biab_grey-cell biab_bet-back biab_empty-cell biab_back-1 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0}>
                                                                                                                <div className="js-bet biab_bet-cell" style={{ backgroundColor: 'rgb(134, 186, 0)', width: '65px', zIndex: 1, height: '46px', marginLeft: '19px' }}>
                                                                                                                    <div className="biab_bet-content ">
                                                                                                                        <input className="form-check-input" type="checkbox" id="FBSAIA"style={{ marginTop: '17px' }}  /></div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td className="biab_bet js-fm-back-0 biab_blue-cell biab_bet-back biab_empty-cell biab_back-0 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0}>
                                                                                                                <div className="biab_cell-view">
                                                                                                                    <div className="js-bet biab_bet-cell" >
                                                                                                                        <div className="biab_bet-content biab_make-offer-wrapper-lg">
                                                                                                                            <span className="biab_make-offer biab_make-offer-lg">17</span></div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td className="biab_bet js-fm-lay-0 biab_green-cell biab_bet-lay biab_empty-cell biab_lay-0 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0} >
                                                                                                                <div className="biab_cell-view">
                                                                                                                    <div className="js-bet biab_bet-cell"
                                                                                                                        data-original-title title>
                                                                                                                        <div className="biab_bet-content biab_make-offer-wrapper-lg">
                                                                                                                            <span className="biab_make-offer biab_make-offer-lg">19</span></div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td style={{ borderRight: "none" }} className="biab_bet js-fm-lay-1 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-1 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0}>
                                                                                                                <div className="biab_cell-view">
                                                                                                                    <div className="js-bet biab_bet-cell"
                                                                                                                        data-original-title title>
                                                                                                                        <div className="biab_bet-content " >
                                                                                                                            <dt className="smalldt">
                                                                                                                                <input className="biab_number" type="number" defaultValue=" " id="fan"  style={{ width: '80px', marginTop: '5px', height: '18px', marginLeft: '7px' }}  />
                                                                                                                            </dt>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '9px' }} className="biab_bet js-fm-lay-2 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-2 biab_line-market-cell" data-selection-id={15316}
                                                                                                                data-handicap={0}>
                                                                                                                <img id="dec" class="importfancy" style={{ marginLeft: '9px' }} alt="" src="data:image/png;base64,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" />
                                                                                                                <a href="#/times-circle-o"><i class="fa fa-times-circle-o" style={{ fontSize: '24px', marginLeft: '5px' }}></i></a>

                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>

                                                                                            </div>
                                                                                        {/* )
                                                                                    })} */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="js-quick-panel" />
                                                                <div className="js-mobile-placement-wrapper" />
                                                            </div>
                                                            <div className="biab_overlay js-overlay" />
                                                            <div className="js-event-rules" /></div>

                                                    </div>
                                                </div>
                                            </div>
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

export default Settlematches

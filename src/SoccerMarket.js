import React,{useState,useEffect} from 'react'

export const SoccerMarket = () => {
    const [onswitch, setonswitch] = useState(false)
    const [onswitch2, setonswitch2] = useState(false)
    const [onswitch3, setonswitch3] = useState(false)
    const [onswitch4, setonswitch4] = useState(false)
    const [onswitch5, setonswitch5] = useState(false)
    const [onswitch6, setonswitch6] = useState(false)




    
    const Switching = () => {
        setonswitch(!onswitch)
      }

      const Switching2 = () => {
        setonswitch2(!onswitch2)
      }
      const Switching3 = () => {
        setonswitch3(!onswitch3)
    }
    const Switching4 = () => {
        setonswitch4(!onswitch4)
    }
    const Switching5 = () => {
        setonswitch5(!onswitch5)
    }
    const Switching6 = () => {
        setonswitch6(!onswitch6)
    }
    return (
        <React.Fragment>
           <div className="biab_body biab_fluid" id="biab_body">
    <div className="biab_wrapper js-wrapper" style={{width:"1350px",marginTop:"31px"}}>
        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
        <div className="biab_page-wrapper">
            <div className="biab_page-holder">
                <div className="biab_page-container">
                    <div id="biab_page" className="biab_page js-page">
                        <div className="biab_banner biab_fluid-hidden biab_banner-main js-banner-main biab_hide" />
                        <div className="biab_columns-holder js-columns-holder biab_has-aside-left" style={{maxHeight: '722.5px'}}>
                            <div id="biab_content" className="biab_content" style={{minHeight: '541.5px'}}>
                                <div>
                                    <div className="biab_sub-page-banner js-sub-page-banner">
                                        <div className="biab_banner-wrapper " style={{maxHeight: '100%'}} /></div>
                                    <div className="js-search-region biab_search biab_hidden-xs">
                                        <div className="biab_search-container">
                                            <div className="biab_search-page-title biab_visible-xs">Search</div>
                                            <div className="js-search-results-container biab_search-results-container biab_hide" style={{display: 'none'}}>
                                                <div className="biab_search-results-info js-search-results-info" /></div>
                                            <div className="js-scroll-start" /></div>
                                    </div>
                                    <div className="js-content-region">
                                        <div>
                                            <div className="js-content-wrapper">
                                                <div className="biab_market biab_handicap-market js-market   ">
                                                    <div className="js-market-header-region">
                                                        <div>
                                                            <div className="biab_market-title biab_has-icon">
                                                                <div className="biab_market-title-name js-event-name">Xian Daxing Chongde v Hebei Elite</div>
                                                                <div className="biab_title-fav-star js-fav-star biab_hidden-xs" title="add to favourites"><i className="fa fa-star-o" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></div>
                                                            </div>
                                                            <div className="js-running-ball">
                                                                <div>
                                                                    <div className="biab_running-ball-wrapper js-half-time-list biab_hide">
                                                                        <div>
                                                                            <div className="biab_running-ball-half-time">
                                                                                <div className="biab_empty-bar">
                                                                                    <div className="biab_bar js-half-time-bar" style={{width: '0%'}} />
                                                                                    <div className="js-event-updates-half-time">
                                                                                        <div>
                                                                                            <div className="js-details-list" /></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="biab_running-ball-half-time">
                                                                                <div className="biab_empty-bar">
                                                                                    <div className="biab_bar js-half-time-bar" style={{width: '0%'}} />
                                                                                    <div className="js-event-updates-half-time">
                                                                                        <div>
                                                                                            <div className="js-details-list" /></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="js-drop-down-menu-region" />
                                                    <div className="js-scroll-start" />
                                                    <div className="biab_scrollable js-scrollable js-toggle-content" style={{position: 'relative', height: '517.5px', overflow: 'auto'}}>
                                                        <div className="biab_scrollable-content js-scrollable-content">
                                                            <div className="js-scroll-header">
                                                                
                                                            <div className="biab_cash-out-page-wrapper js-market-cash-out-btn-region">
                                                                <div className="biab_cash-out-button">
                                                                    <div className="js-bet-message-wrapper" /></div>
                                                            </div>
                                                            <div className="biab_pl-table-wrapper js-pl-table-wrapper biab_hide" />
                                                            <div className="biab_alert-bet-msg biab_hide biab_error-msg js-error-msg" /></div>
                                                        <div className="biab_tab-content-holder ">
                                                            <div className="biab_market-loading js-market-loading biab_hide" style={{display: 'none'}}><i className="fa fa-spinner fa-pulse fa-2x fa-fw" /></div>
                                                            <div className="biab_hide js-market-table" style={{display: 'block'}}>
                                                                <div className="biab_tab-content js-sticky-header" style={{paddingRight: '0px'}}>
                                                                    <div className="biab_header-table">
                                                                        <table className="biab_market-table">
                                                                            <colgroup>
                                                                                <col />
                                                                                <col className="biab_table-col" width="8%" />
                                                                                <col className="biab_table-col" width="8%" />
                                                                                <col className="biab_table-col" width="8%" />
                                                                                <col className="biab_table-col" width="8%" />
                                                                                <col className="biab_table-col" width="8%" />
                                                                                <col className="biab_table-col" width="8%" />
                                                                            </colgroup>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th colSpan={1} className="biab_no-bg biab_text-left">
                                                                                       
                                                                                            <span className="js-total-lines-wrapper" style={{display:
                                                                                            'none'}}>Lines: <span className="js-total-lines" /></span>
                                                                                            <span className="biab_ah-show-all-button js-ah-show-all-button">Show all</span><span className="biab_ah-minimize-button js-ah-minimize-button">Minimize</span>
                                                                                        <span
                                                                                            className="biab_ah-reset-view-button js-ah-reset-view-button">Reset View</span>
                                                                                    </th>
                                                                                    <th className="biab_no-bg biab_text-left">
                                                                                        </th>
                                                                                    <th
                                                                                        className="biab_no-bg biab_text-right biab_back-all biab_back-all-column js-back-all" colSpan={2}><span>Back all</span></th>
                                                                                        <th className="biab_no-bg biab_text-left biab_lay-all biab_lay-all-column js-lay-all " colSpan={1}><span>Lay all</span></th>
                                                                                        <th className="biab_no-bg biab_text-right  ">
                                                                                        <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }}>
                                                                                                                <option value="A">Sydney Sixers</option>
                                                                                                                <option value="B">Adelaide Strikers</option>
                                                                                                                <option value="T">Draw</option>
                                                                                                                <option value="T">Abonded</option>
                                                                                                                </select>
                                                                                        </th>
                                                                                        <th className="biab_no-bg biab_text-right  ">
                                                                                        <button className="btn-settled">Settled</button>
                                                                                        </th>
                                                                                </tr>
                                                                            </thead>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div className="biab_tab-content ">
                                                                    <div className="js-market-overlay ">
                                                                        <div /></div>
                                                                    <div className="biab_market-selections js-market-selections ">
                                                                        <div className="biab_hide" data-selection-id={23228756} data-handicap={0} style={{display: 'block'}}>
                                                                            <div>
                                                                                <div className="biab_selection-table js-selection-table">
                                                                                    <div>
                                                                                        <table className="biab_market-table ">
                                                                                            <colgroup>
                                                                                                <col />
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
                                                                                                    <col />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className=" "><span className="biab_game-title" title="Xian Daxing Chongde">Xian Daxing Chongde</span>
                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                <div className="biab_selection-pl js-selection-pl" style={{display: 'none'}}>
                                                                                                                    <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text="true"><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{display: 'none'}} /><span className="biab_pl-value-negative js-matched-pl-value-negative"
                                                                                                                            style={{display: 'none'}} />
                                                                                                                            <span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /><span className="js-matched-pl-separator" style={{display: 'none'}}>, </span>
                                                                                                                            <span className="js-matched-pl-value2" data-popover="popover"
                                                                                                                            data-placement="auto" style={{display: 'none'}} />
                                                                                                                            <span className="js-matched-pl-separator2" style={{display: 'none'}}>, </span>
                                                                                                                            <span
                                                                                                                            className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{display: 'none'}} />
                                                                                                                            <span className="biab_pl-prefix js-pl-prefix"
                                                                                                                            style={{display: 'none'}}>»</span>
                                                                                                                            <span className="biab_pl-values js-pl-unmatched-values">
                                                                                                                                <span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{display: 'none'}} />
                                                                                                                                <span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{display: 'none'}} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator" style={{display: 'none'}}>, </span><span
                                                                                                                            className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator2"
                                                                                                                            style={{display: 'none'}}>, </span>
                                                                                                                            <span className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /></span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet biab_empty-cell">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching2} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch2 ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch2 ? "on" : "off"}`}> {` ${onswitch2 ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch2 ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch2 ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch2 ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet biab_empty-cell">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch ? "on" : "off"}`}> {` ${onswitch ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>

                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="23228756_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 552  for</strong> the Xian Daxing Chongde at odds of 1.05 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                                                        <span className="js-odds biab_odds">1.01</span>
                                                                                                                    <span className="biab_bet-amount">36894</span></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="23228756_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 3447.57  against</strong> the Xian Daxing Chongde at odds of 1.09 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.02</span>
                                                                                                                    <span className="biab_bet-amount">2362</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet">
                                                                                                       
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 5955.77  against</strong> the Xian Daxing Chongde at odds of 1.11 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds"></span><span className="biab_bet-amount"></span></div>
                                                                                                                </div>
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
                                                                        <div className="biab_hide" data-selection-id={13107001} data-handicap={0} style={{display: 'block'}}>
                                                                            <div>
                                                                                <div className="biab_selection-table js-selection-table">
                                                                                    <div>
                                                                                        <table className="biab_market-table ">
                                                                                            <colgroup>
                                                                                                <col />
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
                                                                                                    <col />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className=" "><span className="biab_game-title" title="Hebei Elite">Hebei Elite</span>
                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                <div className="biab_selection-pl js-selection-pl" style={{display: 'none'}}>
                                                                                                                    <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text="true"><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{display: 'none'}} /><span className="biab_pl-value-negative js-matched-pl-value-negative"
                                                                                                                            style={{display: 'none'}} /><span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /><span className="js-matched-pl-separator" style={{display: 'none'}}>, </span><span className="js-matched-pl-value2" data-popover="popover"
                                                                                                                            data-placement="auto" style={{display: 'none'}} /><span className="js-matched-pl-separator2" style={{display: 'none'}}>, </span><span
                                                                                                                            className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="biab_pl-prefix js-pl-prefix"
                                                                                                                            style={{display: 'none'}}>»</span><span className="biab_pl-values js-pl-unmatched-values"><span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{display: 'none'}} /><span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{display: 'none'}} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator" style={{display: 'none'}}>, </span><span
                                                                                                                            className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator2"
                                                                                                                            style={{display: 'none'}}>, </span><span className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /></span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch3 ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching3} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch3 ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch3 ? "on" : "off"}`}> {` ${onswitch3 ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch3 ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch3 ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch3 ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch4 ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching4} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch4 ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch4 ? "on" : "off"}`}> {` ${onswitch4 ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch4 ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch4 ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch4 ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="13107001_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 410.61  for</strong> the Hebei Elite at odds of 36 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">36</span><span className="biab_bet-amount">488</span></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="13107001_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 42.61  against</strong> the Hebei Elite at odds of 1000 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1000</span><span className="biab_bet-amount">19</span></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_empty-cell biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                                                    <div className="biab_bet-content " /></div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_empty-cell biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                                                    <div className="biab_bet-content " /></div>
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
                                                                        <div className="biab_hide" data-selection-id={58805} data-handicap={0} style={{display: 'block'}}>
                                                                            <div>
                                                                                <div className="biab_selection-table js-selection-table">
                                                                                    <div>
                                                                                        <table className="biab_market-table ">
                                                                                            <colgroup>
                                                                                                <col />
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
                                                                                                    <col />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                    <col className="biab_table-col" width="8%" />
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className=" "><span className="biab_game-title" title="The Draw">The Draw</span>
                                                                                                            <div className="js-selection-pl-wrap">
                                                                                                                <div className="biab_selection-pl js-selection-pl" style={{display: 'none'}}>
                                                                                                                    <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text="true"><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{display: 'none'}} /><span className="biab_pl-value-negative js-matched-pl-value-negative"
                                                                                                                            style={{display: 'none'}} /><span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /><span className="js-matched-pl-separator" style={{display: 'none'}}>, </span><span className="js-matched-pl-value2" data-popover="popover"
                                                                                                                            data-placement="auto" style={{display: 'none'}} /><span className="js-matched-pl-separator2" style={{display: 'none'}}>, </span><span
                                                                                                                            className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="biab_pl-prefix js-pl-prefix"
                                                                                                                            style={{display: 'none'}}>»</span><span className="biab_pl-values js-pl-unmatched-values"><span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{display: 'none'}} /><span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{display: 'none'}} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator" style={{display: 'none'}}>, </span><span
                                                                                                                            className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{display: 'none'}} /><span className="js-unmatched-pl-separator2"
                                                                                                                            style={{display: 'none'}}>, </span><span className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{display:
                                                                                                                            'none'}} /></span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch6 ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching6} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch6 ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch6 ? "on" : "off"}`}> {` ${onswitch6 ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch6 ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch6 ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch6 ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                            <div className={` ${onswitch5 ? "one-click-bet-settings _clearfix select-mode-on one-click-active" : "one-click-bet-settings _clearfix select-mode-on one-click-disabled"}`} >
                                                                                                                                    <div onClick={Switching5} className="small one-click-switch ng-isolate-scope">
                                                                                                                                        <div className={`toggle-bg toggle-alternate ${onswitch5 ? "on" : "off"}`}>
                                                                                                                                            <label  className={` ${onswitch5 ? "on" : "off"}`}> {` ${onswitch5 ? "on" : "off"}`}</label>
                                                                                                                                            <input type="radio" name="toggle1"className={` ${onswitch5 ? "ng-valid ng-not-empty ng-dirty ng-touched" : "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse"}`}  />
                                                                                                                                            <input type="radio" name="toggle1" className={` ${onswitch5 ? "ng-valid ng-not-empty ng-dirty ng-touched ng-valid-parse" : "ng-valid ng-not-empty ng-dirty ng-touched"}`}
                                                                                                                                           />
                                                                                                                                            <span  className={`switch ${onswitch5 ? "on" : "off"}`} /></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="js-bet biab_bet-cell">
                                                                                                                                        <div className="biab_bet-content " /></div>
                                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="58805_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 313.77  for</strong> the The Draw at odds of 12 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount">
                                                                                                                        <span className="js-odds biab_odds">26</span>
                                                                                                                    <span className="biab_bet-amount">338</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="58805_hc_0">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 180.13  against</strong> the The Draw at odds of 1000 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                    <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1000</span><span className="biab_bet-amount">54</span></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_empty-cell biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                                                    <div className="biab_bet-content " /></div>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_empty-cell biab_hide-bet">
                                                                                                            <div className="biab_cell-view">
                                                                                                                <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="Click here to add an offer and wait for someone with an opposing opinion to accept your bet.">
                                                                                                                    <div className="biab_bet-content " /></div>
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
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="multiMarketContainer">
                                                            <div className="biab_alert-bet-msg biab_hide biab_error-msg js-error-msg" />
                                                            <div className="biab_multi-market biab_has-collapse js-multi-market">
                                                                <div className="biab_cash-out-page-wrapper js-market-cash-out-btn-region" />
                                                                <div className="js-content-region">
                                                                    <div>
                                                                        <div className="js-content-wrapper">
                                                                            <div className="biab_market biab_handicap-market js-market   ">
                                                                                <div className="js-drop-down-menu-region" />
                                                                                <div className="js-scroll-start" />
                                                                                <div className="js-quick-panel" />
                                                                                <div className="js-mobile-placement-wrapper" /></div>
                                                                            <div className="biab_overlay js-overlay" />
                                                                            <div className="js-event-rules" /></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="js-mobile-placement-wrapper" /></div>
                                                </div>
                                                <div className="js-quick-panel" />
                                                <div className="js-mobile-placement-wrapper" /></div>
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
</div> 
        </React.Fragment>
    )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
// import Loader from "./Loader";

const cookies = new Cookies();

export const BookMaker = () => {
    const url = window.location.href;
    const para = url.split('/');
    const event_id = para[5];
    const [import_market, setimport_market] = useState([]);
    const [fanMinStack, setfanMinStack] = useState('1000');
    const [fanMaxStack, setfanMaxStack] = useState('300000');
    const [flag, setflag] = useState();
    const [updateMarket, setupdateMarket] = useState(false);
    const [refresh, setrefresh] = useState(false);
    alert(event_id)



    useEffect(() => {
        var ssid = cookies.get('sid');

        axios.post('https://liveapi247.live/api4/ImportBookmaker', {
            sid: ssid,
            eventId: event_id
        }).then(result => {
            axios.post('https://liveapi247.live/api4/checkbookmaker', {
                sid: ssid,
                eventId: event_id,
            }).then(res => {
                if (res.data[0].marketId == result.data[0].marketId)
                    setflag(1);
                else
                    setflag(0);


            }).catch(e => { });

            setimport_market(result.data);
        }).catch(e => { });
    }, [event_id, updateMarket]);


    const marketimport = () => {
        setrefresh(true);

        var ssid = cookies.get('sid');

        axios.post('https://liveapi247.live/api4/livemarketImport', {
            sid: ssid,
            eventType: import_market[0].sportId,
            eventId: import_market[0].eventId,
            eventName: import_market[0].eventName,
            marketId: (import_market[0].marketId),
            marketName: import_market[0].marketName,
            selectionId1: import_market[0].runnerId1,
            runnerName1: import_market[0].runnerName1,
            selectionId2: import_market[0].runnerId2,
            runnerName2: import_market[0].runnerName2,
            marketStartTime: import_market[0].openDate,
            selectionIdTie: import_market[0].runnerId3,
            minStack: fanMinStack,
            maxStack: fanMaxStack,
            rateMode: import_market[0].importMode
        })
            .then(result => {

                if (result.status === 200) {
                    setrefresh(false);

                    setupdateMarket(!updateMarket)
                    toast.success('Import Match Successfully!!', { position: toast.POSITION.TOP_CENTER })

                }
                else if (result.status === 201) {
                    toast.warn('Opps, Match already imported!!', { position: toast.POSITION.TOP_CENTER })
                }
                else {
                    toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })

                }

            }).catch(e => { });



    }
    return (
        <React.Fragment>
            <div className="right_col" role="main" style={{ height: '100%' }}>
                <div className="biab_body biab_fluid" id="biab_body">
                    <div className="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                        <div className="biab_table-tabs js-table-tabs" />
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder">
                                <div className="biab_page-container">
                                    <div id="biab_page" className="biab_page js-page">
                                        <div className="biab_banner biab_fluid-hidden biab_banner-main js-banner-main biab_hide" />
                                        <div className="biab_columns-holder js-columns-holder biab_has-aside-left" style={{ maxHeight: '722.5px' }}>
                                            <div className="loading">
                                                <div className="biab_loading-spinner js-inplay-spinner " style={{ display: 'block' }} /></div>
                                            <div id="biab_content" className="biab_content" style={{ minHeight: '541.5px' }}>
                                                <div>
                                                    <div className="biab_sub-page-banner js-sub-page-banner">
                                                        <div className="biab_banner-wrapper " style={{ maxHeight: '100%' }} /></div>
                                                    <div className="js-search-region biab_search biab_hidden-xs">
                                                        <div className="biab_search-container">
                                                            <div className="biab_search-page-title biab_visible-xs">Search</div>
                                                            <div className="js-search-results-container biab_search-results-container biab_hide" style={{ display: 'none' }}>
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
                                                                                <p>Indibet Exchange is the newest sports exchange operator that offers incredible odds, liquidity and markets. We offer online odds with back and lay betting - a marketplace for you to bet
                                                                                    on the outcome of thousands of events. Enjoy an exciting variety of sports including football, tennis, cricket, horseracing, American football, basketball and more. Available in various
                                                                                    languages - Indibet Exchange is the ultimate destination for sports exchange betting.<a href="#webchat_widget">.</a></p>
                                                                                <ul className="biab_footer-nav">
                                                                                    <li><a href="/customer/pages/en/responsible_gambling">Responsible Gambling</a></li>
                                                                                    <li><span className="biab_separator" /><a href="/customer/pages/en/terms_and_conditions">Terms and Conditions</a></li>
                                                                                    <li><span className="biab_separator" /><a href="/customer/pages/en/rules_and_regulations">Rules and Regulations</a></li>
                                                                                    <li><span className="biab_separator" /><a href="/customer/pages/en/privacy_policy">Privacy Policy</a></li>
                                                                                </ul>
                                                                                <ul className="biab_footer-icons">
                                                                                    <li style={{ margin: '0px 20px 0px 0px' }}><a href="https://ex.indibet.com/customer/" className="biab_adults-only">18+</a></li>
                                                                                    <li style={{ margin: '0px 20px 0px 0px' }}><a className="biab_gamble-aware" href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">GambleAware</a></li>
                                                                                    <li style={{ width: '48px', margin: '0px' }}><a className="biab_curacao" href="#">Curacao</a>
                                                                                        <div data-apg-seal-id="7d92de7c-528e-4fc8-bb73-adb7ceb3caf4" data-apg-image-size={128} data-apg-image-type="basic-small">
                                                                                            <div style={{
                                                                                                display: 'block', position: 'relative', overflow: 'hidden', maxWidth: '128px', minWidth: '32px', backgroundImage:
                                                                                                    'url("https://7d92de7c-528e-4fc8-bb73-adb7ceb3caf4.snippet.antillephone.com/54f396e0-b046-49b1-9cb3-0c69281d7ea9-beacon.png")'
                                                                                            }}><a target="_blank" rel="nonoopener" href="https://validator.antillephone.com/validate?domain=ex.indibet.com&seal_id=6c6ba157fb30f9d753db1a0cb76ab8f9b9a388a04885b559fa75dd1655b2a8b67565760ea68ea2789a4f6b3976b35e39&stamp=de56848e1c69c8425cf40040256dd574"><img alt="" src="https://7d92de7c-528e-4fc8-bb73-adb7ceb3caf4.snippet.antillephone.com/sealassets/de56848e1c69c8425cf40040256dd574-ex.indibet.com-6c6ba157fb30f9d753db1a0cb76ab8f9b9a388a04885b559fa75dd1655b2a8b67565760ea68ea2789a4f6b3976b35e39-c2VhbC5wbmc%3D?status=valid" style={{ width: '100%', height: 'auto' }} /></a></div>
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
                                                        <div>
                                                            <div className="js-content-wrapper">
                                                                <div className="biab_market biab_handicap-market js-market biab_mmv-market  ">
                                                                    <div className="js-market-header-region">
                                                                        <div>
                                                                            <div className="biab_multi-market-title js-collapse-toggler"> BookMaker
                                                                                <div className="biab_market-icons" /></div>
                                                                            <div className="js-running-ball">
                                                                                <div>
                                                                                    <div className="biab_running-ball-wrapper js-half-time-list biab_hide">
                                                                                        <div>
                                                                                            <div className="biab_running-ball-half-time">
                                                                                                <div className="biab_empty-bar">
                                                                                                    <div className="biab_bar js-half-time-bar" style={{ width: '0%' }} />
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
                                                                                                    <div className="biab_bar js-half-time-bar" style={{ width: '0%' }} />
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
                                                                    <div className="biab_scrollable js-scrollable js-toggle-content" style={{ position: 'relative', height: '893.5px', overflow: 'auto' }}>
                                                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '326px' }}>
                                                                            <div className="js-scroll-header" style={{ position: 'relative', zIndex: 101, top: '0px', backgroundColor: 'rgb(255, 255, 255)', width: '100%' }}>
                                                                                <div className="biab_pl-table-wrapper js-pl-table-wrapper biab_hide" />
                                                                                <div className="biab_alert-bet-msg biab_hide biab_error-msg js-error-msg" /></div>
                                                                            <div className="biab_tab-content-holder ">
                                                                                <div className="biab_market-loading js-market-loading biab_hide" style={{ display: 'none' }}><i className="fa fa-spinner fa-pulse fa-2x fa-fw" /></div>
                                                                                <div className="biab_hide js-market-table" style={{ display: 'block', marginTop: '0px' }}>
                                                                                    <div className="biab_tab-content js-sticky-header" style={{ paddingRight: '0px', position: 'relative', zIndex: 0, backgroundColor: 'rgb(255, 255, 255)', top: '0px' }}>
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
                                                                                                            <span
                                                                                                                className="biab_ah-show-all-button js-ah-show-all-button">Show all</span><span className="biab_ah-minimize-button js-ah-minimize-button">Minimize</span><span className="biab_ah-reset-view-button js-ah-reset-view-button">Reset View</span></th>
                                                                                                        <th className="biab_no-bg biab_text-right biab_back-all biab_back-all-column js-back-all"
                                                                                                            colSpan={2}><span>Back all</span></th>
                                                                                                        <th className="biab_no-bg biab_text-left biab_lay-all biab_lay-all-column js-lay-all " colSpan={2}><span>Lay all</span></th>
                                                                                                        <th className="biab_no-bg biab_text-right  "><span className="biab_market-underrounds js-underrounds" data-toggle="tooltip" data-placement="auto" data-text="The competitiveness of the prices on offer, which is calculated by adding up the individual percentage chance of every selection based on the price that is being offered."> </span></th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="biab_tab-content ">
                                                                                        <div className="js-market-overlay ">
                                                                                            <div /></div>
                                                                                        <div className="biab_market-selections js-market-selections ">
                                                                                            <div className="biab_hide" data-selection-id={448} data-handicap={0} style={{ display: 'block' }}>
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
                                                                                                                    </colgroup>
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td className=" "><span className="biab_game-title" title="New Zealand">New Zealand</span>
                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                    <div className="biab_selection-pl js-selection-pl" style={{ display: 'none' }}>
                                                                                                                                        <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-matched-pl-value-negative" style={{ display: 'none' }}
                                                                                                                                        /><span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator">, </span><span
                                                                                                                                                className="js-matched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator2">, </span><span
                                                                                                                                                className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="biab_pl-prefix js-pl-prefix">»</span>
                                                                                                                                            <span
                                                                                                                                                className="biab_pl-values js-pl-unmatched-values"><span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{
                                                                                                                                                    display:
                                                                                                                                                        'none'
                                                                                                                                                }} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator2">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /></span>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 731.39  for</strong> the New Zealand at odds of 7.2 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">7.2</span><span className="biab_bet-amount">731</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 192.5  for</strong> the New Zealand at odds of 7.4 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">7.4</span><span className="biab_bet-amount">192</span></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="biab_promoted-tooltip-inner ">
                                                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text /></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="448_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 1143.15  for</strong> the New Zealand at odds of 7.6 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">7.6</span><span className="biab_bet-amount">1135</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="448_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 890.28  against</strong> the New Zealand at odds of 7.8 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">7.8</span><span className="biab_bet-amount">889</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 1838.28  against</strong> the New Zealand at odds of 8 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">8</span><span className="biab_bet-amount">1840</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 444.03  against</strong> the New Zealand at odds of 8.2 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">8.2</span><span className="biab_bet-amount">444</span></div>
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

                                                                                            <div className="biab_hide" data-selection-id={7659} data-handicap={0} style={{ display: 'block' }}>
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
                                                                                                                    </colgroup>
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td className=" "><span className="biab_game-title" title="Bangladesh">Bangladesh</span>
                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                    <div className="biab_selection-pl js-selection-pl" style={{ display: 'none' }}>
                                                                                                                                        <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-matched-pl-value-negative" style={{ display: 'none' }}
                                                                                                                                        /><span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator">, </span><span
                                                                                                                                                className="js-matched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator2">, </span><span
                                                                                                                                                className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="biab_pl-prefix js-pl-prefix">»</span>
                                                                                                                                            <span
                                                                                                                                                className="biab_pl-values js-pl-unmatched-values"><span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{
                                                                                                                                                    display:
                                                                                                                                                        'none'
                                                                                                                                                }} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator2">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /></span>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 87.54  for</strong> the Bangladesh at odds of 5.4 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.4</span><span className="biab_bet-amount">87</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 446.35  for</strong> the Bangladesh at odds of 5.5 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.5</span><span className="biab_bet-amount">446</span></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="biab_promoted-tooltip-inner ">
                                                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text /></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="7659_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 81.22  for</strong> the Bangladesh at odds of 5.6 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.6</span><span className="biab_bet-amount">84</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="7659_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 1224.79  against</strong> the Bangladesh at odds of 5.7 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.7</span><span className="biab_bet-amount">1224</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 977.26  against</strong> the Bangladesh at odds of 5.8 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.8</span><span className="biab_bet-amount">977</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 272.81  against</strong> the Bangladesh at odds of 5.9 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">5.9</span><span className="biab_bet-amount">272</span></div>
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
                                                                                            <div className="biab_hide" data-selection-id={60443} data-handicap={0} style={{ display: 'block' }}>
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
                                                                                                                    </colgroup>
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td className=" "><span className="biab_game-title" title="The Draw">The Draw</span>
                                                                                                                                <div className="js-selection-pl-wrap">
                                                                                                                                    <div className="biab_selection-pl js-selection-pl" style={{ display: 'none' }}>
                                                                                                                                        <div data-toggle="tooltip" data-placement="auto" className="biab_selection-pl-tooltip js-selection-pl-tooltip" data-text><span className="biab_pl-value-positive js-matched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-matched-pl-value-negative" style={{ display: 'none' }}
                                                                                                                                        /><span className="js-matched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator">, </span><span
                                                                                                                                                className="js-matched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-matched-pl-separator2">, </span><span
                                                                                                                                                className="js-matched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="biab_pl-prefix js-pl-prefix">»</span>
                                                                                                                                            <span
                                                                                                                                                className="biab_pl-values js-pl-unmatched-values"><span className="biab_pl-value-positive js-unmatched-pl-value-positive" style={{ display: 'none' }} /><span className="biab_pl-value-negative js-unmatched-pl-value-negative" style={{
                                                                                                                                                    display:
                                                                                                                                                        'none'
                                                                                                                                                }} /><span className="js-unmatched-pl-value1" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value2" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /><span style={{ display: 'none' }} className="js-unmatched-pl-separator2">, </span><span
                                                                                                                                                    className="js-unmatched-pl-value3" data-popover="popover" data-placement="auto" style={{ display: 'none' }} /></span>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-2 js-back-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 1721.74  for</strong> the The Draw at odds of 1.42 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.42</span><span className="biab_bet-amount">1725</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-back js-bet-back biab_back-1 js-back-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 7335.14  for</strong> the The Draw at odds of 1.43 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.43</span><span className="biab_bet-amount">7331</span></div>
                                                                                                                                    </div>
                                                                                                                                    <div className="biab_promoted-tooltip-inner ">
                                                                                                                                        <div className="biab_promoted-tooltip js-promoted-tooltip biab_hide biab_hide-tooltip"><i className="fas fa-info-circle" data-mobile="true" data-toggle="tooltip" data-text /></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_blue-cell js-blue-cell biab_bet-back js-bet-back biab_back-0 js-back-0" data-id="60443_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 2834.58  for</strong> the The Draw at odds of 1.44 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.44</span><span className="biab_bet-amount">2834</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_green-cell js-green-cell biab_bet-lay js-bet-lay biab_lay-0 js-lay-0" data-id="60443_hc_0">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 313.66  against</strong> the The Draw at odds of 1.45 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.45</span><span className="biab_bet-amount">327</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-1 js-lay-1 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 4584.6  against</strong> the The Draw at odds of 1.46 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.46</span><span className="biab_bet-amount">4584</span></div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                            <td className="biab_bet biab_grey-cell biab_bet-lay js-bet-lay biab_lay-2 js-lay-2 biab_hide-bet">
                                                                                                                                <div className="biab_cell-view">
                                                                                                                                    <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" data-text="<strong>Bet up to 1025.73  against</strong> the The Draw at odds of 1.47 to be matched instantly <strong>or</strong> choose your own odds and stake waiting for someone to accept your bet.">
                                                                                                                                        <div className="biab_bet-content biab_has-amount"><span className="js-odds biab_odds">1.47</span><span className="biab_bet-amount">1025</span></div>
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

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div> <div className="biab_tab-content-holder ">
                                                                                <div className="biab_market-loading js-market-loading biab_hide" style={{ display: 'none' }}><i className="fa fa-spinner fa-pulse fa-2x fa-fw" /></div>
                                                                                <div className="biab_hide js-market-table" style={{ marginTop: '0px', display: 'block' }}>
                                                                                    <div className="biab_tab-content ">
                                                                                        <div className="js-market-overlay ">
                                                                                            <div /></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="multiMarketContainer">
                                                                                <div>
                                                                                    <div className="js-content-wrapper">
                                                                                        <div className="biab_multi-market-tabs js-tabs " />
                                                                                        <div className="biab_multi-markets-content-message js-markets-message biab_hide">
                                                                                            <div>There are no markets to be displayed</div>
                                                                                        </div>
                                                                                        <div className="biab_clear" /></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
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
            </div>
        </React.Fragment>
    )
}

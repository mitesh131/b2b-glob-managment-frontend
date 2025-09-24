import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeclarePass from './DeclarePass';
import EditskyfancynamePopup from './EditskyfancynamePopup';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
import Loader from './Loader';
const cookies = new Cookies();
var rate_mode = 1;

export const FancyImport = () => {

    const url = window.location.href;
    const para = url.split('/');
    const event_id = para[5];
    const market_ID = para[6];
    const [refresh, setrefresh] = useState(false);
    const [importfancy, setimportfancy] = useState([]);
    const [fanMinStack, setfanMinStack] = useState('1');
    const [fanMaxStack, setfanMaxStack] = useState('800');
    const [updatefancy, setupdatefancy] = useState(false);
    const [EventNAme, setEventNAme] = useState()
    const [sportype, setsportype] = useState()
    const [sportID, setsportID] = useState()
    const [lenoffancy, setlenoffancy] = useState(0)
    const [importfancylist, setimportfancylist] = useState([])
    const [teamName, setteamName] = useState()
    const [ratemode123, setratemode123] = useState()
    const [selectsky_dimond_tab, setselectsky_dimond_tab] = useState(2)
    const [displaydimondskybuttoon, setdisplaydimondskybuttoon] = useState(false)
    const [fancy_e_id, setfancy_e_id] = useState();
    const [fancy_s_id, setfancy_s_id] = useState();
    const [facnyrunnername_edit, setfacnyrunnername_edit] = useState();
    const [openfancyeditname, setopenfancyeditname] = useState(false);





    var runner_Name;
    var mini, maxi;


    // const selectdiamondFancy = () => {
    //     setrefresh(true);
    //     var ssid = cookies.get('sid');
    //     axios.post('https://liveapi247.live/api4/diamondFancy', {
    //         sid: ssid,
    //         eventId: event_id
    //     }).then(result => {
    //         rate_mode = 2;
    //         //console.log(result.data);
    //         setimportfancylist(result.data)
    //         setrefresh(false);

    //     }).catch(e => { });

    // }

    const selectdiamondFancy = () => {
        setrefresh(true);
        var ssid = cookies.get('sid');
        axios.get("https://bxawscf.lionexch.com/exchange/member/playerService/queryFancyBetMarkets?eventId=" + event_id).then(result => {
            if (result.data.fancyBetMarkets.length > 0) {
                var fancyList = [];
                for (let i = 0, k = 0; i < result.data.fancyBetMarkets.length; i++) {
                    if (result.data.fancyBetMarkets[i].status == 2 || result.data.fancyBetMarkets[i].status == 10)
                        fancyList.push(result.data.fancyBetMarkets[i]);
                }
                axios.post('https://liveapi247.live/api4/importcheckfancy', {
                    sid: ssid,
                    eventId: event_id,
                }).then(res => {
                    var ifancyList = [];
                    for (let i = 0, k = 0; i < res.data.length; i++)
                        ifancyList.push(Number(res.data[i].selectionId));
                    setrefresh(false);
                    setEventNAme(fancyList[0].eventName);
                    setsportID(fancyList[0].eventType);
                    if (fancyList[0].eventType == 4) setsportype("Cricket");
                    if (fancyList[0].eventType == 1) setsportype("Soccer");
                    if (fancyList[0].eventType == 2) setsportype("Tennis");



                    var fancyList1 = fancyList.filter(function (el) { return ifancyList.indexOf(el.marketId) < 0; });
                    setimportfancy(fancyList1);
                    setlenoffancy(fancyList1.length)
                    for (var i = 0; fancyList1.length; i++) {
                        var ssid = cookies.get('sid');
                        axios.post('https://liveapi247.live/api4/skyFancydata', {
                            sid: ssid,
                            eventId: fancyList1[i].eventId,
                            marketId: fancyList1[i].marketId,
                            marketName: fancyList1[i].marketName,
                        }).then(result => { }).catch(e => { });

                    }
                    setrefresh(false)

                }).catch(e => { });



            }


        }).catch(e => { });

        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/skyfancyfetchdata', {
            sid: ssid,
            eventId: event_id
        }).then(result => {
            rate_mode = 2;
            setimportfancylist(result.data)
            setrefresh(false)
        }).catch(e => { });
    }
    const selectbetfairFancy = () => {
        setrefresh(true);
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/betfairFancy', {
            sid: ssid,
            eventId: event_id
        }).then(result => {
            rate_mode = 1;
            //console.log(result.data);
            setimportfancylist(result.data)
            setrefresh(false);
        }).catch(e => { });

    }

    console.log(rate_mode);
    const selectskyFancy = () => {
        setrefresh(true);
        var ssid = cookies.get('sid');
        axios.get("https://bxawscf.lionexch.com/exchange/member/playerService/queryFancyBetMarkets?eventId=" + event_id).then(result => {
            if (result.data.fancyBetMarkets.length > 0) {
                var fancyList = [];
                for (let i = 0, k = 0; i < result.data.fancyBetMarkets.length; i++) {
                    if (result.data.fancyBetMarkets[i].status == 2 || result.data.fancyBetMarkets[i].status == 10)
                        fancyList.push(result.data.fancyBetMarkets[i]);
                }

                axios.post('https://liveapi247.live/api4/importcheckfancy', {
                    sid: ssid,
                    eventId: event_id,
                }).then(res => {
                    var ifancyList = [];
                    for (let i = 0, k = 0; i < res.data.length; i++)
                        ifancyList.push(Number(res.data[i].selectionId));
                    setrefresh(false);
                    setEventNAme(fancyList[0].eventName);
                    setsportID(fancyList[0].eventType);
                    if (fancyList[0].eventType == 4) setsportype("Cricket");
                    if (fancyList[0].eventType == 1) setsportype("Soccer");
                    if (fancyList[0].eventType == 2) setsportype("Tennis");



                    var fancyList1 = fancyList.filter(function (el) { return ifancyList.indexOf(el.marketId) < 0; });
                    setimportfancy(fancyList1);
                    setlenoffancy(fancyList1.length)
                    for (var i = 0; fancyList1.length; i++) {
                        var ssid = cookies.get('sid');
                        axios.post('https://liveapi247.live/api4/skyFancydata', {
                            sid: ssid,
                            eventId: fancyList1[i].eventId,
                            marketId: fancyList1[i].marketId,
                            marketName: fancyList1[i].marketName,
                        }).then(result => { }).catch(e => { });

                    }
                    setrefresh(false)

                }).catch(e => { });



            }


        }).catch(e => { });

        var ssid = cookies.get('sid');
        setrefresh(true)
        axios.post('https://liveapi247.live/api4/skyfancyfetchdata', {
            sid: ssid,
            eventId: event_id
        }).then(result => {
            rate_mode = 3;
            setimportfancylist(result.data)
            setrefresh(false)
        }).catch(e => { });
    }


    useEffect(() => {

        var ssid = cookies.get("sid");
        setrefresh(true);

        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_id,
            marketId: market_ID,
        }).then((result) => {
            if (result.status === 200) {
                setteamName(result.data[0].eventName);
                setratemode123(result.data[0].rateMode);
                if (result.data[0].rateMode == 1) selectbetfairFancy();
                if (result.data[0].rateMode == 2) selectdiamondFancy();
                if (result.data[0].rateMode == 3) selectskyFancy();
                setrefresh(false);
            }
        }).catch((e) => { });
    }, [updatefancy])





    const fancyimportt = (index, runnname, eid, mid) => {
        setrefresh(true);
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/Livematch_importFancy', {
            sid: ssid,
            eventId: eid,
            selectionId: mid,
            runnerName: runnname,
            minStack: fanMinStack,
            maxStack: fanMaxStack,
            rateMode: rate_mode,
        }).then(result => {
            if (result.status === 200) {
                setimportfancy([]);
                setupdatefancy(!updatefancy);
                console.log(runnname)
                setrefresh(false);
                toast.success('Fancy Imports Successfully!!', { position: toast.POSITION.TOP_CENTER })
                if (rate_mode == 2) { }
                var ssid = cookies.get('sid');
                axios.post('https://liveapi247.live/api4/diamondimportcheckfancy', {
                    sid: ssid,
                    eventId: eid,
                    marketId: mid,
                }).then(result => {
                    setupdatefancy(!updatefancy);

                }).catch(e => { });
            } else if (result.status === 201) {
                toast.warn('Opps, Fancy alrerady imported !!', { position: toast.POSITION.TOP_CENTER })
            } else {
                toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })
            }

        }).catch(e => { });

    }



    const jumpdecleared = (index) => {

        var input = document.getElementById("runnam" + index);
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById("imp" + index).click();
            }
        });
    }
    const jumpdeclearedmin = (index) => {
        var input = document.getElementById("min" + index);
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById("imp" + index).click();
            }
        });
    }
    const jumpdeclearedmax = (index) => {

        var input = document.getElementById("max" + index);
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById("imp" + index).click();
            }
        });
    }

    const function_edit_fancy_name = (id, e_id, s_id, run_name) => {
        setopenfancyeditname(true);
        setfancy_e_id(e_id); setfancy_s_id(s_id);
        setfacnyrunnername_edit(run_name);
    }
    const flagtempeditfancy = () => {
        setupdatefancy(!updatefancy);
    }

    return (
        <React.Fragment>

            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {openfancyeditname && <EditskyfancynamePopup fancy_e_id={fancy_e_id} fancy_s_id={fancy_s_id} facnyrunnername_edit={facnyrunnername_edit} setopenfancyeditname={setopenfancyeditname} openfancyeditname={openfancyeditname} flagtempeditfancy={flagtempeditfancy} />}
                    {importfancylist.length != 0 &&
                        <div className="right_col" role="main" style={{ height: '100%' }}>
                            <div className="right_col" role="main" style={{ height: '100%' }}>
                                <div className="right_col" role="main" style={{ height: '100%' }}>
                                    <div className="biab_body biab_fluid" id="biab_body">
                                        <div className="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                                            <div className="biab_table-tabs js-table-tabs" />
                                            <div className="biab_table-tabs js-table-tabs">
                                                <div className="path" style={{ height: '27px', width: '100%' }}>
                                                    <div style={{ float: 'left' }}>
                                                        <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                                            <li> <a style={{ marginLeft: "-17px" }} href={`/Manage/${sportID}`} >Cricket<i class="fas fa-angle-right"></i> </a></li>
                                                            <li> <a href="">{teamName}<i class="fas fa-angle-right"></i> </a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="path" style={{ height: '27px', width: '300px', float: 'right', display: 'none' }}>
                                                        <div style={{ height: '27px', width: '50px', float: 'right' }} onClick={() => { setdisplaydimondskybuttoon(true) }}></div>
                                                        <div >
                                                            <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                                                <li style={{ width: '100px' }}><a style={{ marginLeft: ' -14px' }} >Betfair</a></li>
                                                                <div className={`${(selectsky_dimond_tab === 2) ? "menu_add__market_Active" : "menu_add__market"}`} onClick={() => { selectdiamondFancy(); setselectsky_dimond_tab(2) }}>Diamond</div>
                                                                <div className={`${(selectsky_dimond_tab === 3) ? "menu_add__market_Active" : "menu_add__market"}`} onClick={() => { selectskyFancy(); setselectsky_dimond_tab(3) }}>Sky</div>
                                                                <div className={`${(selectsky_dimond_tab === 1) ? "menu_add__market_Active" : "menu_add__market"}`} onClick={() => { selectbetfairFancy(); setselectsky_dimond_tab(1) }}>Betfair</div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="biab_page-wrapper">
                                                <div className="biab_page-holder">
                                                    <div className="biab_page-container">
                                                        <div id="biab_page" className="biab_page js-page">
                                                            <div className="biab_columns-holder js-columns-holder biab_has-aside-left" style={{ maxHeight: '722.5px' }}>
                                                                <div id="biab_content" className="biab_content" style={{ minHeight: '641.5px' }}>
                                                                    <div className="js-content-region">
                                                                        <div className="js-content-wrapper">
                                                                            <div className="biab_market biab_handicap-market js-market biab_mmv-market  ">
                                                                                <div className="biab_scrollable js-scrollable js-toggle-content" style={{ position: 'relative', height: '893.5px', overflow: 'auto' }}>
                                                                                    <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '326px' }}>
                                                                                        <div className="biab_multi-market-title js-collapse-toggler"> Fancy </div>
                                                                                        <div className="biab_market-body js-fancy-markets-region" >
                                                                                            <div className="js-fancy-markets-list-region biab_fancy-markets-list">
                                                                                                <div className="js-fancy-lines-toggle-wrapper biab_fancy-markets-toggle biab_fancy-swap">
                                                                                                    <div className="js-fancy-markets-list">
                                                                                                        <div className="biab_market-table-wrapper biab_fancy-market-item" >
                                                                                                            <table className="biab_market-table">
                                                                                                                <colgroup>
                                                                                                                    <col />
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
                                                                                                                    {importfancylist.map(function (item, id) {
                                                                                                                        //console.log(item,'fancydata');
                                                                                                                        return (
                                                                                                                            <tr>
                                                                                                                                <td className="biab_fancy-market-selection-name" onClick={() => { jumpdecleared(id) }} onClick={() => { function_edit_fancy_name(id, item.eventId, item.marketId, item.marketName) }} id={"runnam" + id} style={{ cursor: 'pointer', color: 'black', fontWeight: 'bold', fontSize: '11px' }} >{item.marketName} </td>
                                                                                                                                <td className="biab_fancy-market-selection-tm js-market-total-matched" style={{ borderRight: 'block', borderLeft: 'none', cursor: 'pointer' }} />
                                                                                                                                <td className="biab_fancy-market-selection-tm js-market-total-matched" style={{ borderRight: 'block', borderLeft: 'none', cursor: 'pointer' }} />
                                                                                                                                <td className="biab_fancy-market-selection-tm js-market-total-matched" style={{ borderRight: 'block', borderLeft: 'none', cursor: 'pointer' }} />
                                                                                                                                <td className="biab_bet js-fm-back-2 biab_grey-cell biab_bet-back biab_empty-cell biab_back-2 biab_line-market-cell"
                                                                                                                                    data-selection-id={15316} data-handicap={0} style={{ borderRight: 'none', borderLeft: 'none' }} />
                                                                                                                                <td className="biab_bet js-fm-back-1 biab_grey-cell biab_bet-back biab_empty-cell biab_back-1 biab_line-market-cell"
                                                                                                                                    data-selection-id={15316} data-handicap={0} id={"imp" + id} onClick={() => { fancyimportt(id, item.marketName, item.eventId, item.marketId) }}>
                                                                                                                                    <img className="importfancy" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAACcNJREFUeF7tnH9wVNUVx7/nvRDCD7U/THEkKtm3pDPFtuJQaDYRtT8GpB1bR0GQKhZHWqQzbe1QtWU3+yMw/YNRa7UoorXQqoXWdiwda9sZRsi+hB91oC2jpuyGQGyhtDDA8iPsvns6L2Q3L8sGdt+v3cT3/n33nXPv555333nnnnsI3uUKAXJFi6cEHmiXjMAD7YF2iYBLajyL9kC7RMAlNZ5Fe6BdIuCSGs+iPdAuEXBJjWfRHmiXCLikxrPoDzJo/6qttUjLASFhKhhTiDAJTFcx4cMA1xBIAOgF+BiDDhE4yQLvQqJdVVp1R2d42n9d4le0moqxaH+0bYrGuFsi6ctMuIFgLuDFgCBgNwv+vSZJv+oONr5TNA0HG5YX9HO7RtUf6Z1PTN8iYLoD42QA7YJ5TZc49yrCt2Yc0FGUyPKADm+pUqTRiwH8EIRri+qpxUbM2A8glvx7z8+xaZ5mUVzJj7sOur41PlNi/BSgKUP1lsEaQG8DUCF4D5HUKSTRk8qc+9+RvUfOYEotTRj3kdFjTp2ulThTB1luIOIbGGgEaCoB8tCy8TciLE2sCKgl07LwgGug6x5Xx1SneDVI+iaBpfw+M6AR4y8AXu4V2NwTDhw1M66rw1uurJFG306EhQy6ZQhd+sf0J0LrfXR/+NazZvSU+owroH3hbQ0ky78BcH0BwGeI+fkMVT3ZHZzRVeoALtbeF+uYDBYPE+F+ADUX6qY9aYg7DwabEnbqLSTLcdC+iPp5kvBrAB8ydkD3DsB4KS1E8GC4+V9ODtTXsu1aVMk/ImA+8rwZBh8TTHfsDwXecrIPjoKuj6hzJQm/AFA9CDJzJ0FanAg1xp0cXL5sfdIhYx0xJg2+x70gWpBYEfitU/1xDHQ/5JcBVOUNakPqeGrp4dWzTjk1qIsuJ4/8+QqMG/sCEd2Z1y7NEPOTwebXnOiXI6DrI21flCR5M8A5Sz6/VPDyZKjpcScGUqpMX6y9hcAtg5cS7tWYZjmxjNgOWv/wQZa2E8i4JqeZsCi5IvBKqUCcbK+sVJewwBoCcl4QM46miafb/YG0FbTuwo1O8U7QgI+su20QuDfZUlmQsxOoxNRvAFhjtGwGfpwMBr5j5yTbCtoXU58mYFneh+97lbJcDAXOH1UjTAjl7jN6EqHANRUJWv/jI5a2DP5B4A2JYNN9dnbYKVm+mHqIgAl98isW9NyNsvKput3GHxJm7jw1ZvyNh5d/uizeRakTosTUrzLwLPSPNrQlyeBNm0uVcbH2tiwdSiz+IEBrs4r6QpVMM932k+0EY7cs66CX7Bql1J3bZ4zCEfhn+4JNenTOu/oJWAZd3xq/V2Jab7DmM2lN+J3+rR5uM2gZtC+mdhAwY+CLTU8lQo3fHm4gnO6vJdD+VR2fYE3sNVizpkGebHcUzmkIbsi3BFqJtEUhScEB0PynZLBplhsdt0uH0qoGwNCXvhrBYkFXqHmbXbKNcqyBjqn6LshUg6O/KBEK5NZrJzpst0wlpnYCmNwv96Rg8SUnYJsG7X9sa60YW3U4u1utbz+d0+hjZndG7AZYrDwlqh4Eoc7Q3hHY5kFH4l9hiX6XWzaYdyZDTU7sZBfLzFS7SdH2GTLxmwCuMMJmkuYkV3y2zZTQAg+ZBu2LxMMkkR5m7LucCMTYNchLyXEDtmnQSkzdCGCuwa37eiLU+NKlBlWp952GbQF0fCdA0wygm4f7L7eTsC2Abj8AcC6UyJnq65KRaQcq1WKL7ZdTsE2D9sXaUwQelx1AqmbceCcjdXp0DYAeuKotFprN7VICYmFXsPl1M3JNg1Ziatq48ZrQGmWE+7I8HbmUmPo+gKsdEV680J5E0NyGwHACfRAY5O8Wj8e+lu8nggGjz120ZNOg3V46fLGOOQR+1vhdKHqUtjSk4xBYkGhpfMOMONOgldjI/Bj6WjuaSWhvgGi8AehxTROz94ebO8xA1p+xAHrkuXdKtL0JxLrFXjbgtuJEBjy7O9TUbhayRdAj64elP4r3x0GQgRMZtg7ZEmhfVI2QYYt+OP+C90PWLflyg9WeBGG2XXnUppcOf35QCdiRDAYGdlqsvGcuPntdNN5YRaRb8mDInLktEZppWxKmedCPba3lsVWHs+v8sA2TxtQeABONlswZbU4ycpNtkTtLS4f+sDIiAv/tnQCfD/wzp1iSb7MzPJqdQNMW3Qc6okYhIbeVBcabiVBgtotvvmVVuqfBYD2Hu4Yhz+sKzai8rSz9bCCT9I/saPWERg3pyd3Bm209ImGZZgUIsGTRev99UXUHET4z4Hd66QaF5tUO0PcQ4ZcGq/YSaAqQtgwaeoLjJ+veBcGfg814MRkKPFABb2zFdME6aAD1MfUBCVhnsGovyTFvim0BjY0sK++1X5i2eyJ1Y7kOBZVqykpEvYOlvsx/AcEPJlua/lCqjIu1twe0btWFEtEZ6xOhwCI7O+yULCWm/ie3e1Oxiej9o/dF488Q0UNGGAx6OBlsfMIpQHbIrY+2/UAiaeWA51TBRyv0Tg7Lw0LR+P1M9EL2ZBYD/67YjH+jVfnC2xtI1nbkZf6kwXxfItT0qh0WaJcMpQ8y1hEoVw1BMJZ3hQKr7dJhyy/4UJ0Z4kCnBojlyWBzRSwjvlb1UTBWGs8YAsPoQGcWvr9VnSuYXzFaS989xvrUiZMPlcsbufL7bZddPp7WEpF+AN94pSFwd6LFmfPgtnkdhazbH22bxyRtuODQPfAeERbbFVQv9jU/X5SFXtTjYXnPnGWIhU6dA9d1OQpaV+ALb/sCybJeRsKYraknRbpWRkJpfesa8KiVDHwtvygWA0c1Ie7qbmneUuyEmWnnOOg+2Ku2N5CWea1QeR8GThPzugxlnrQ76uePxRUB+i4BejigYGGUcxrf1RMO7DMDr5RnXAGddf2qU7QaxEsLlVqzq9TPxFXbPzpay9wO0D0APjf4Y3ceTd85SKKntczZR0ZUqR/jzE+KqjfLhGcAXKp41V/1UmrEtBtI/1NI8vniVbjlNPZuognTP14z5tTRWlmqmcgsGkgvRghqZOASxatoDzGWuZ356ppFD3rNsuXYiFcAZOvh9qFeZwa6wYh+YMqxDQa+sbpeqptPhGUOFRjUl4kdIPFU8kDNRqydpidmluUqj0UXGKoSjl8PmeaBYUfJzD0s+PUM8aYDoebcOciyEO5XWjGgjRAuLAJLerGpqxi5IrDMoF5iPgbiQ2BKMtE7DO3tUVqN6hWBLadJlVl3RVp0mZk4ot4D7QjWC4V6oD3QLhFwSY1n0R5olwi4pMazaA+0SwRcUuNZtAfaJQIuqfEs2gPtEgGX1HgW7RLo/wPBA/iIGAD1LAAAAABJRU5ErkJggg==" />
                                                                                                                                </td>
                                                                                                                                <td className="biab_bet js-fm-back-0 biab_blue-cell biab_bet-back biab_empty-cell biab_back-0 biab_line-market-cell"
                                                                                                                                    data-selection-id={15316} data-handicap={0}>
                                                                                                                                    <div class="biab_cell-view">
                                                                                                                                        <div class="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" >
                                                                                                                                            <div class="biab_bet-content biab_has-amount">
                                                                                                                                                <span class="js-odds biab_odds">22</span>
                                                                                                                                                <span class="biab_bet-amount">81</span>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                                <td className="js-lay-cell-0 biab_green-cell biab_bet biab_bet-lay biab_lay-0 biab_line-market-cell" data-id="15316_hc_0"
                                                                                                                                    data-selection-id={15316} data-handicap={0}>
                                                                                                                                    <div className="biab_cell-view">
                                                                                                                                        <div className="js-bet biab_bet-cell" data-toggle="tooltip" data-placement="auto" >
                                                                                                                                            <div className="biab_bet-content biab_has-amount">

                                                                                                                                                <span className="js-odds biab_odds">22</span>
                                                                                                                                                <span className="biab_bet-amount">81</span></div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                                <td className="biab_bet js-fm-lay-1 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-1 biab_line-market-cell"
                                                                                                                                    data-selection-id={15316} data-handicap={0} style={{ borderRight: 'none' }}>Min
                                                                                                                                    <input id={"min" + id} onClick={() => { jumpdeclearedmin(id) }} className="min-inp" type="number" defaultValue={fanMinStack} /></td>
                                                                                                                                <td className="biab_bet js-fm-lay-1 biab_grey-cell biab_bet-lay biab_empty-cell biab_lay-1 biab_line-market-cell"
                                                                                                                                    data-selection-id={15316} data-handicap={0} style={{ borderRight: 'none' }}>Max
                                                                                                                                    <input id={"max" + id} onClick={() => { jumpdeclearedmax(id) }} className="min-inp" type="number" defaultValue={fanMaxStack} /></td>
                                                                                                                            </tr>
                                                                                                                        )
                                                                                                                    })}
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
                    }
                </div>}

            {importfancylist.length == 0 && refresh == false && <>
                <div className="right_col" role="main" style={{ height: '100%' }}>
                    <div className="right_col" role="main" style={{ height: '100%' }}>
                        <div className="right_col" role="main" style={{ height: '100%' }}>
                            <div className="biab_body biab_fluid" id="biab_body">
                                <div className="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                                    <div className="biab_table-tabs js-table-tabs" />
                                    <div className="biab_table-tabs js-table-tabs" style={{ marginLeft: '40px', marginRight: '40px' }}>
                                        <div className="path" style={{ height: '27px', width: '100%' }}>
                                            <div style={{ float: 'left' }}>
                                                <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                                    <li> <a style={{ marginLeft: "-17px" }} href={`/Manage/${sportID}`} >Cricket<i class="fas fa-angle-right"></i> </a></li>
                                                    <li> <a href="">{teamName}<i class="fas fa-angle-right"></i> </a></li>
                                                </ul>
                                            </div>
                                            <div className="path" style={{ height: '27px', width: '300px', float: 'right' }}>
                                                <div style={{ height: '27px', width: '50px', float: 'right' }} onClick={() => { setdisplaydimondskybuttoon(true) }}></div>
                                                <div>
                                                    <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto', display: 'none' }}>
                                                        <li style={{ width: '100px' }}><a style={{ marginLeft: ' -14px' }} >IMPORT</a></li>
                                                        <div className="menu_add__market" onClick={() => { selectdiamondFancy() }}>Diamond</div>
                                                        <div className="menu_add__market" onClick={() => { selectskyFancy() }}>Sky</div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="abcd" >
                                        Fancy List is Empty
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
            }

        </React.Fragment>
    )
}




        // select sky code
        // useEffect(() => {
        //     var ssid = cookies.get('sid');
        //     axios.get("https://bvincap.skyexchange.com/exchange/member/playerService/queryFancyBetMarkets?eventId=" + event_id).then(result => {
        //         if (result.data.fancyBetMarkets.length > 0) {
        //             //setimportfancy(result.data.fancyBetMarkets);
        //             //console.log(result.data);
        //             rate_mode = 1;
        //             var fancyList = [];
        //             for (let i = 0, k = 0; i < result.data.fancyBetMarkets.length; i++) {
        //                 if (result.data.fancyBetMarkets[i].status == 2 || result.data.fancyBetMarkets[i].status == 10) {
        //                     fancyList.push(result.data.fancyBetMarkets[i]);
        //                     //console.log(result.data.fancyBetMarkets[i])
        //                 }

        //             }

        //             axios.post('https://liveapi247.live/api4/importcheckfancy', {
        //                 sid: ssid,
        //                 eventId: event_id,
        //             }).then(res => {
        //                 var ifancyList = [];
        //                 for (let i = 0, k = 0; i < res.data.length; i++)
        //                     ifancyList.push(Number(res.data[i].selectionId));
        //                 //console.log(fancyList);
        //                 setEventNAme(fancyList[0].eventName);
        //                 setsportID(fancyList[0].eventType);

        //                 if (fancyList[0].eventType == 4) setsportype("Cricket");
        //                 if (fancyList[0].eventType == 1) setsportype("Soccer");
        //                 if (fancyList[0].eventType == 2) setsportype("Tennis");



        //                 var fancyList1 = fancyList.filter(function (el) {
        //                     return ifancyList.indexOf(el.marketId) < 0;
        //                 });
        //                 setimportfancy(fancyList1);
        //                 setimportfancylist(fancyList1)
        //                 setlenoffancy(fancyList1.length)
        //                 setrefresh(false)

        //                 //console.log(fancyList1);
        //             }).catch(e => { });
        //         }


        //     }).catch(e => { });

        // }, [updatefancy]);

    //////////// Fancy import Code
    // const fancyimportt = (index, runnname) => {
    //     setrefresh(true);

    //     runner_Name = document.getElementById("runnam" + index).value;
    //     mini = document.getElementById("min" + index).value;
    //     maxi = document.getElementById("max" + index).value;
    //     var ssid = cookies.get('sid');
    //     axios.post('https://liveapi247.live/api4/Livematch_importFancy', {
    //         sid: ssid,
    //         eventId: importfancy[index].eventId,
    //         selectionId: importfancy[index].marketId,
    //         runnerName: runnname,
    //         minStack: fanMinStack,
    //         maxStack: fanMaxStack,
    //         rateMode: rate_mode,
    //     }).then(result => {
    //         if (result.status === 200) {
    //             setimportfancy([]);
    //             setupdatefancy(!updatefancy);
    //             setrefresh(false);
    //             toast.success('Fancy Imports Successfully!!', { position: toast.POSITION.TOP_CENTER })
    //         } else if (result.status === 201) {
    //             toast.warn('Opps, Fancy alrerady imported !!', { position: toast.POSITION.TOP_CENTER })
    //         } else {
    //             toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })
    //         }
    //     }).catch(e => { });
    // }





// doamind fancy code rough
 // useEffect(() => {
        //     var ssid = cookies.get('sid');
        //     axios.post('https://liveapi247.live/api4/diamondFancy',{
        //         sid: ssid,
        //         eventId: event_id
        //     }).then(result => {
        //         if (result.data.length > 0) {
        //             //console.log(result.data);
        //             setimportfancylist(result.data)

        //             rate_mode = 1;
        //             var fancyList = [];
        //             for (let i = 0, k = 0; i < result.data.length; i++) {
        //                 if (result.data[i].status == 2 || result.data[i].status == 10) {
        //                     fancyList.push(result.data[i]);
        //                     //console.log(result.data[i])
        //                 }

        //             }

        //             axios.post('https://liveapi247.live/api4/importcheckfancy', {
        //                 sid: ssid,
        //                 eventId: event_id,
        //             }).then(res => {
        //                 var ifancyList = [];
        //                 for (let i = 0, k = 0; i < res.data.length; i++)
        //                     ifancyList.push(Number(res.data[i].selectionId));
        //                 //console.log(fancyList);
        //                 setEventNAme(fancyList[0].eventName);
        //                 setsportID(fancyList[0].eventType);

        //                 if(fancyList[0].eventType == 4) setsportype("Cricket");
        //                 if(fancyList[0].eventType == 1) setsportype("Soccer");
        //                 if(fancyList[0].eventType == 2) setsportype("Tennis");



        //                 var fancyList1 = fancyList.filter(function (el) {
        //                     return ifancyList.indexOf(el.marketId) < 0;
        //                 });
        //                 setimportfancy(fancyList1);
        //                 setlenoffancy(fancyList1.length)
        //                 setrefresh(false)

        //                 //console.log(fancyList1);
        //             }).catch(e => { });
        //         }


        //     }).catch(e => { });


        // }, [updatefancy]);

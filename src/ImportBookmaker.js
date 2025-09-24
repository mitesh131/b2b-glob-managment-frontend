import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment, { suppressDeprecationWarnings } from 'moment';
import { toast } from 'react-toastify'
import Loader from "./Loader";

const cookies = new Cookies();

export const ImportBookmaker = () => {
    const url = window.location.href;
    const para = url.split('/');
    const event_id = para[5];
    const market_ID = para[6];
    const [import_market, setimport_market] = useState([]);
    const [fanMinStack, setfanMinStack] = useState('1');
    const [fanMaxStack, setfanMaxStack] = useState('100');
    const [flag, setflag] = useState();
    const [updateMarket, setupdateMarket] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const [sportName, setsportName] = useState()
    const [sportype, setsportype] = useState()
    const [sportID, setsportID] = useState()
    const [lenofmarket, setlenofmarket] = useState(0)



    useEffect(() => {
        var ratemode;
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_id,
            marketId: market_ID,
        }).then((result) => {
            if (result.status === 200) {
                if (result.data[0].rateMode == 2) ratemode = 2;
                if (result.data[0].rateMode == 3) ratemode = 3;
                if (result.data[0].rateMode == 1) ratemode = 1;
            }
        }).catch((e) => { });

        var ssid = cookies.get('sid');
        setrefresh(true)

        axios.post('https://liveapi247.live/api4/ImportBookmaker', {
            sid: ssid,
            eventId: event_id
        }).then(result => {
            setsportName(result.data[0].eventName)
            setsportID(result.data[0].sportId)
            if (result.data[0].sportId == 4) setsportype("Cricket");
            if (result.data[0].sportId == 1) setsportype("Soccer");
            if (result.data[0].sportId == 2) setsportype("Tennis");
            if (result.data.length > 0) {
                var BookList = [];
                for (let i = 0, k = 0; i < result.data.length; i++) {
                    if (result.data[i].importMode == ratemode) {
                        BookList.push(result.data[i]);
                    }
                }
                //console.log("matchList:-", BookList)

                axios.post('https://liveapi247.live/api4/checkbookmaker', {
                    sid: ssid,
                    eventId: event_id,
                }).then(res => {
                    var iBookList = [];
                    for (let i = 0, k = 0; i < res.data.length; i++)
                        iBookList.push(res.data[i].marketId);
                    var BookList1 = BookList.filter(function (el) {
                        return iBookList.indexOf(el.marketId) < 0;
                    });
                    setimport_market(BookList1);
                    setlenofmarket(BookList1.length)
                    setrefresh(false)

                }).catch(e => { });

            }

            //setimport_market(result.data);
            //console.log("ompk", result.data)
        }).catch(e => { });

        setrefresh(false)
    }, [event_id, updateMarket]);


    const marketimport = (id) => {
        setrefresh(true);

        var ssid = cookies.get('sid');

        axios.post('https://liveapi247.live/api4/livemarketImport', {
            sid: ssid,
            eventType: import_market[id].sportId,
            eventId: import_market[id].eventId,
            eventName: import_market[id].eventName,
            marketId: (import_market[id].marketId),
            marketName: import_market[id].marketName,
            selectionId1: import_market[id].runnerId1,
            runnerName1: import_market[id].runnerName1,
            selectionId2: import_market[id].runnerId2,
            runnerName2: import_market[id].runnerName2,
            marketStartTime: import_market[id].openDate,
            selectionIdTie: import_market[id].runnerId3,
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


    // const Market_editmininum=(id,eid,mid)=>{
    //     var ssid = cookies.get('sid');  
    //     var min=document.getElementById("Ma_Min"+id).value;    
    //     axios.post('https://liveapi247.live/api4/changemarketminStake', {
    //     sid: ssid,
    //     eventId:eid,
    //     marketId:mid,
    //     minStack:min,
    //     }) .then(result => {if(result.status === 200) {
    //       //  setupdateMarket(!updateMarket00);
    //      }
    //     }).catch(e => {}); 
    // }
    // const Market_editmaximum=(id,eid,mid)=>{
    //     var ssid = cookies.get('sid');  
    //     var max=document.getElementById("Ma_Max"+id).value;    
    //     axios.post('https://liveapi247.live/api4/changemarketmaxStake', {
    //     sid: ssid,
    //     eventId:eid,
    //     marketId:mid,
    //     maxStack:max,
    //     }) .then(result => {if(result.status === 200) { 
    //        // setupdateMarket(!updateMarket);
    //     }
    //     }).catch(e => {}); 
    // }

    return (
        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {lenofmarket != 0 &&
                        <div className="right_col" role="main" style={{ height: '100%' }}>
                            <div className="biab_body biab_fluid" id="biab_body">
                                <div className="biab_wrapper js-wrapper" style={{ width: '1350px' }}>
                                    <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                                    <div className="biab_table-tabs js-table-tabs" />
                                    <div className="biab_table-tabs js-table-tabs">
                                        <ul className="path" style={{ display: 'flex', height: '27px', width: "auto" }}>
                                            <li> <a style={{ marginLeft: "-17px" }} href={`/Manage/${sportID}`} >{sportype} <i class="fas fa-angle-right"></i> </a></li>
                                            <li> <a href="">{sportName}<i class="fas fa-angle-right"></i> </a></li>

                                        </ul>
                                    </div>
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
                                                                    <div className="biab_banner-wrapper " style={{ maxHeight: '100%' }} />
                                                                </div>



                                                                <div className="js-content-region">
                                                                    <div>
                                                                        <div className="js-content-wrapper">
                                                                            <div className="biab_market biab_handicap-market js-market biab_mmv-market  ">

                                                                                {import_market.map(function (item, id) {
                                                                                    return (
                                                                                        <div key={id} style={{ height: '130px' }}>


                                                                                            <div className="biab_multi-market-title js-collapse-toggler" onClick={() => { marketimport(id); }} style={{ height: '22px' }}> {item.marketName}
                                                                                                <div className="biab_market-icons" />
                                                                                                <img style={{ position: "absolute", right: "12px", height: "30px", top: "-1px", filter: "brightness(0.5)" }} class="importfancy" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAACcNJREFUeF7tnH9wVNUVx7/nvRDCD7U/THEkKtm3pDPFtuJQaDYRtT8GpB1bR0GQKhZHWqQzbe1QtWU3+yMw/YNRa7UoorXQqoXWdiwda9sZRsi+hB91oC2jpuyGQGyhtDDA8iPsvns6L2Q3L8sGdt+v3cT3/n33nXPv555333nnnnsI3uUKAXJFi6cEHmiXjMAD7YF2iYBLajyL9kC7RMAlNZ5Fe6BdIuCSGs+iPdAuEXBJjWfRHmiXCLikxrPoDzJo/6qttUjLASFhKhhTiDAJTFcx4cMA1xBIAOgF+BiDDhE4yQLvQqJdVVp1R2d42n9d4le0moqxaH+0bYrGuFsi6ctMuIFgLuDFgCBgNwv+vSZJv+oONr5TNA0HG5YX9HO7RtUf6Z1PTN8iYLoD42QA7YJ5TZc49yrCt2Yc0FGUyPKADm+pUqTRiwH8EIRri+qpxUbM2A8glvx7z8+xaZ5mUVzJj7sOur41PlNi/BSgKUP1lsEaQG8DUCF4D5HUKSTRk8qc+9+RvUfOYEotTRj3kdFjTp2ulThTB1luIOIbGGgEaCoB8tCy8TciLE2sCKgl07LwgGug6x5Xx1SneDVI+iaBpfw+M6AR4y8AXu4V2NwTDhw1M66rw1uurJFG306EhQy6ZQhd+sf0J0LrfXR/+NazZvSU+owroH3hbQ0ky78BcH0BwGeI+fkMVT3ZHZzRVeoALtbeF+uYDBYPE+F+ADUX6qY9aYg7DwabEnbqLSTLcdC+iPp5kvBrAB8ydkD3DsB4KS1E8GC4+V9ODtTXsu1aVMk/ImA+8rwZBh8TTHfsDwXecrIPjoKuj6hzJQm/AFA9CDJzJ0FanAg1xp0cXL5sfdIhYx0xJg2+x70gWpBYEfitU/1xDHQ/5JcBVOUNakPqeGrp4dWzTjk1qIsuJ4/8+QqMG/sCEd2Z1y7NEPOTwebXnOiXI6DrI21flCR5M8A5Sz6/VPDyZKjpcScGUqpMX6y9hcAtg5cS7tWYZjmxjNgOWv/wQZa2E8i4JqeZsCi5IvBKqUCcbK+sVJewwBoCcl4QM46miafb/YG0FbTuwo1O8U7QgI+su20QuDfZUlmQsxOoxNRvAFhjtGwGfpwMBr5j5yTbCtoXU58mYFneh+97lbJcDAXOH1UjTAjl7jN6EqHANRUJWv/jI5a2DP5B4A2JYNN9dnbYKVm+mHqIgAl98isW9NyNsvKput3GHxJm7jw1ZvyNh5d/uizeRakTosTUrzLwLPSPNrQlyeBNm0uVcbH2tiwdSiz+IEBrs4r6QpVMM932k+0EY7cs66CX7Bql1J3bZ4zCEfhn+4JNenTOu/oJWAZd3xq/V2Jab7DmM2lN+J3+rR5uM2gZtC+mdhAwY+CLTU8lQo3fHm4gnO6vJdD+VR2fYE3sNVizpkGebHcUzmkIbsi3BFqJtEUhScEB0PynZLBplhsdt0uH0qoGwNCXvhrBYkFXqHmbXbKNcqyBjqn6LshUg6O/KBEK5NZrJzpst0wlpnYCmNwv96Rg8SUnYJsG7X9sa60YW3U4u1utbz+d0+hjZndG7AZYrDwlqh4Eoc7Q3hHY5kFH4l9hiX6XWzaYdyZDTU7sZBfLzFS7SdH2GTLxmwCuMMJmkuYkV3y2zZTQAg+ZBu2LxMMkkR5m7LucCMTYNchLyXEDtmnQSkzdCGCuwa37eiLU+NKlBlWp952GbQF0fCdA0wygm4f7L7eTsC2Abj8AcC6UyJnq65KRaQcq1WKL7ZdTsE2D9sXaUwQelx1AqmbceCcjdXp0DYAeuKotFprN7VICYmFXsPl1M3JNg1Ziatq48ZrQGmWE+7I8HbmUmPo+gKsdEV680J5E0NyGwHACfRAY5O8Wj8e+lu8nggGjz120ZNOg3V46fLGOOQR+1vhdKHqUtjSk4xBYkGhpfMOMONOgldjI/Bj6WjuaSWhvgGi8AehxTROz94ebO8xA1p+xAHrkuXdKtL0JxLrFXjbgtuJEBjy7O9TUbhayRdAj64elP4r3x0GQgRMZtg7ZEmhfVI2QYYt+OP+C90PWLflyg9WeBGG2XXnUppcOf35QCdiRDAYGdlqsvGcuPntdNN5YRaRb8mDInLktEZppWxKmedCPba3lsVWHs+v8sA2TxtQeABONlswZbU4ycpNtkTtLS4f+sDIiAv/tnQCfD/wzp1iSb7MzPJqdQNMW3Qc6okYhIbeVBcabiVBgtotvvmVVuqfBYD2Hu4Yhz+sKzai8rSz9bCCT9I/saPWERg3pyd3Bm209ImGZZgUIsGTRev99UXUHET4z4Hd66QaF5tUO0PcQ4ZcGq/YSaAqQtgwaeoLjJ+veBcGfg814MRkKPFABb2zFdME6aAD1MfUBCVhnsGovyTFvim0BjY0sK++1X5i2eyJ1Y7kOBZVqykpEvYOlvsx/AcEPJlua/lCqjIu1twe0btWFEtEZ6xOhwCI7O+yULCWm/ie3e1Oxiej9o/dF488Q0UNGGAx6OBlsfMIpQHbIrY+2/UAiaeWA51TBRyv0Tg7Lw0LR+P1M9EL2ZBYD/67YjH+jVfnC2xtI1nbkZf6kwXxfItT0qh0WaJcMpQ8y1hEoVw1BMJZ3hQKr7dJhyy/4UJ0Z4kCnBojlyWBzRSwjvlb1UTBWGs8YAsPoQGcWvr9VnSuYXzFaS989xvrUiZMPlcsbufL7bZddPp7WEpF+AN94pSFwd6LFmfPgtnkdhazbH22bxyRtuODQPfAeERbbFVQv9jU/X5SFXtTjYXnPnGWIhU6dA9d1OQpaV+ALb/sCybJeRsKYraknRbpWRkJpfesa8KiVDHwtvygWA0c1Ie7qbmneUuyEmWnnOOg+2Ku2N5CWea1QeR8GThPzugxlnrQ76uePxRUB+i4BejigYGGUcxrf1RMO7DMDr5RnXAGddf2qU7QaxEsLlVqzq9TPxFXbPzpay9wO0D0APjf4Y3ceTd85SKKntczZR0ZUqR/jzE+KqjfLhGcAXKp41V/1UmrEtBtI/1NI8vniVbjlNPZuognTP14z5tTRWlmqmcgsGkgvRghqZOASxatoDzGWuZ356ppFD3rNsuXYiFcAZOvh9qFeZwa6wYh+YMqxDQa+sbpeqptPhGUOFRjUl4kdIPFU8kDNRqydpidmluUqj0UXGKoSjl8PmeaBYUfJzD0s+PUM8aYDoebcOciyEO5XWjGgjRAuLAJLerGpqxi5IrDMoF5iPgbiQ2BKMtE7DO3tUVqN6hWBLadJlVl3RVp0mZk4ot4D7QjWC4V6oD3QLhFwSY1n0R5olwi4pMazaA+0SwRcUuNZtAfaJQIuqfEs2gPtEgGX1HgW7RLo/wPBA/iIGAD1LAAAAABJRU5ErkJggg==" />
                                                                                            </div>




                                                                                            <div className="biab_scrollable js-scrollable js-toggle-content" style={{ position: 'relative', height: '893.5px', overflow: 'auto' }}>
                                                                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '326px' }}>
                                                                                                    <div className="js-scroll-header" style={{ position: 'relative', zIndex: 101, top: '0px', backgroundColor: 'rgb(255, 255, 255)', width: '100%' }}>
                                                                                                        <div className="biab_pl-table-wrapper js-pl-table-wrapper biab_hide" />
                                                                                                        <div className="biab_alert-bet-msg biab_hide biab_error-msg js-error-msg" /></div>
                                                                                                    <div className="biab_tab-content-holder ">
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
                                                                                                                                            </colgroup>
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td className=" "><span className="biab_game-title" title="New Zealand">{item.runnerName1}</span>
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
                                                                                                                                                    <td className=" ">
                                                                                                                                                        Min<input class="min-inp" id={"Ma_Min" + id} type="number" defaultValue={fanMinStack} /*onChange={()=>{Market_editmininum(id,item.eventId,item.marketId)}}*/ />
                                                                                                                                                        <div className="js-selection-pl-wrap">
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
                                                                                                                                            </colgroup>
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td className=" "><span className="biab_game-title" title="Bangladesh">{item.runnerName2}</span>
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
                                                                                                                                                    <td className=" ">
                                                                                                                                                        Max<input class="min-inp" id={"Ma_Max" + id} type="number" defaultValue={fanMaxStack} /*onChange={()=>{Market_editmaximum(id,item.eventId,item.marketId)}}*/ />
                                                                                                                                                        <div className="js-selection-pl-wrap">
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
                                                                                                                    {item.runnerId3 != "" &&
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
                                                                                                                    }
                                                                                                                </div>
                                                                                                            </div>






                                                                                                        </div>
                                                                                                    </div>


                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    )
                                                                                })}




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
                            </div>
                        </div>
                    }
                    {lenofmarket == 0 &&
                        <div class="abcd" >
                            Market List is Empty
                        </div>
                    }
                </div>}
        </React.Fragment>
    )
}

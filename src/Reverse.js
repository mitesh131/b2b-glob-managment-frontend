import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios';
import FancyReversePop from './FancyReversePop'
import MarketReversePop from './MarketReversePop'
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import Loader from './Loader';
import {fixText, fixValue} from "./module/utils";
import { HiMiniArrowSmallRight } from 'react-icons/hi2';

const cookies = new Cookies();
const url = window.location.href;
const para = url.split('/');
const event_Id = para[4];
const market_ID = para[5];

// var namee=Event_Name.replace('%20', ' ');


function Reverse(props) {

    const [decelared_markett, setdecelared_markett] = useState([])
    const [decelared_fancyList, setdecelared_fancyList] = useState([]);
    const [decelared_fancyList2_managebets, setdecelared_fancyList2_managebets] = useState([]);

    const [reverseAction, setreverseAction] = useState()
    const [updatedec_fancy_list, setupdatedec_fancy_list] = useState()
    const [updatedec_market_list, setupdatedec_market_list] = useState()
    const [lenthofmarket, setlenthofmarket] = useState(0);
    const [lengthoffanacy, setlengthoffanacy] = useState(0);
    const [Event_Name, setEvent_Name] = useState()
    const [matchreverseAction, setmatchreverseAction] = useState()
    const [OpenReverseFancyPopup, setOpenReverseFancyPopup] = useState(false)
    const [OpenMarketFancyPopup, setOpenMarketFancyPopup] = useState(false)
    const [calcleeid, setcalcleeid] = useState()
    const [calclesid, setcalclesid] = useState()
    const [Mcalcleeid, setMcalcleeid] = useState()
    const [Mcalclesid, setMcalclesid] = useState()
    const [refresh, setrefresh] = useState(false);


    const updatemanrket = () => {
        setupdatedec_market_list(!updatedec_market_list)
    }
    const updatefanbcylist = () => {
        setupdatedec_fancy_list(!updatedec_fancy_list)
    }

    useEffect(() => {

        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/Decleared_Match_Market", {
            sid: ssid,
            eventId: event_Id,
        })
            .then((result) => {

                if (result.status === 200) {
                    setdecelared_markett(result.data);
                    setlenthofmarket((result.data).length)
                }
            })
            .catch((e) => { });
    }, [])


    useEffect(() => {

        var ssid = cookies.get("sid");

        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_Id,
            marketId: market_ID,
        })
            .then((result) => {

                if (result.status === 200) {
                    setEvent_Name(result.data[0].eventName);
                    //console.log(result.data[0].eventName);

                }
            })
            .catch((e) => { });
    }, [updatedec_market_list])


    const call_Decleared_fancy_Market2 = async() => {
        setrefresh(true)
        var ssid = cookies.get("sid");

        await axios.post("https://liveapi247.live/api4/Decleared_fancy_Market", {
            sid: ssid,
            eventId: event_Id,
        })
            .then((result) => {
                setrefresh(false)
                if (result.status === 200) {
                    setdecelared_fancyList(result.data);
                    setlengthoffanacy((result.data).length)
                }
            })

    }

    const call_Decleared_fancy_Market1 = async() => {
        setrefresh(true);

        // await axios.post("https://millionbet247.com/api/house/Decleared_fancy_Market", {
        //     sid: 'U2FsdGVkX1+HPj5P1WT53zyneJT16UKleKqnIleaqkddAfQFtRcy6Cpaju6kH2BoPQdO4WR1k2CbAT22s2xgqQ==',
        //     eventId: event_Id,
        // })
        await axios.post("https://liveapi247.live/api4/getDeclareFancyData", {
            eventId: event_Id,
        }).then((result) => {
                setrefresh(false);
                if (result.status === 200) {
                    if(result && result.data && result.data.data && Array.isArray(result.data.data)){
                         setdecelared_fancyList2_managebets(result.data.data);
                    }
                } else {
                    toast.error('Manage bets Api error (Change Token and try)', { position: toast.POSITION.TOP_CENTER });
                }
                call_Decleared_fancy_Market2();
        })
    }


    useEffect(() => {
        call_Decleared_fancy_Market1();
    }, [updatedec_fancy_list])

    const function_reversefancy = (id, bool, eid, sid) => {
        if (reverseAction == 1) {
            setcalcleeid(eid);
            setcalclesid(sid);
            setOpenReverseFancyPopup(bool)
        }
        else if ((reverseAction == 2))
            toast.warn('Void Action is Comming SOON !!!!', { position: toast.POSITION.TOP_CENTER });
        else
            toast.warn('Kindly Select Action First!!', { position: toast.POSITION.TOP_CENTER });
    }

    const function_reverseMarket = (id, bool, eid, sid) => {
        if (matchreverseAction == 1) {
            setMcalcleeid(eid);
            setMcalclesid(sid);
            setOpenMarketFancyPopup(bool)
        }
        else if ((matchreverseAction == 2))
            toast.warn('Void Action is Comming SOON !!!!', { position: toast.POSITION.TOP_CENTER });
        else
            toast.warn('Kindly Select Action First!!', { position: toast.POSITION.TOP_CENTER });
    }



    const fancyList = useCallback(()=> {

        return decelared_fancyList.map((item2, id2) => {
            var Declare_status = "";
            if (item2.Status == null) Declare_status = "Running..."
            if (item2.Status == "C") Declare_status = "Done"
            if (item2.Status == "I") Declare_status = "In..Progress.."
            let manageBetDecelaredObj = {};
            let manageBetresult = null;

            const manageBetDecelaredCurrArr = ()=> decelared_fancyList2_managebets.filter(i=> (i.marketId == item2.selectionId && i.eventId && item2.eventId));
            if(manageBetDecelaredCurrArr().length !== 0){
                manageBetDecelaredObj = manageBetDecelaredCurrArr()[0];
                // new
                manageBetresult = manageBetDecelaredObj?.resultRuns ? fixValue(manageBetDecelaredObj?.resultRuns, 'number') : 0;

                // old
                // manageBetresult = manageBetDecelaredObj?.resultRuns ? fixText(manageBetDecelaredObj?.resultRuns) : '';
            }

            const thisItemBetResult = item2.result ? fixText(item2.result) : 0;

            return (
                <tr key={id2}>
                    <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.selectionId}</td>
                    <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>{item2.id}</td>
                    <td class="Td_Reverse" style={{ width: '25%', textAlign: 'center' }}>{item2.runnerName}</td>
                    <td class="Td_Reverse"
                        style={{ textAlign: 'center', display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%', ...(manageBetDecelaredCurrArr().length === 0 ? { backgroundColor: 'orange' } : {}) }}>
                        <span style={manageBetresult !== thisItemBetResult ? {color: 'red', fontSize: '1rem', textDecoration: 'line-through'} : {}}>{item2.result}</span>
                        {manageBetresult !== thisItemBetResult ? <>
                            <HiMiniArrowSmallRight size="1rem" />
                            <span style={{ color: 'rgb(0 166 18)'}}> {manageBetresult}</span>
                        </> : null}

                    </td>
                    <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center', color: (item2.gameStatus == 2 ? "red" : "green") }}> {Declare_status}</td>
                    {item2.gameStatus == 1 && item2.gameStatus == 0 &&
                        <td class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }} >
                            <div id="divmain" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setreverseAction(e.target.value)} >
                                    <option value="0">Select</option>
                                    <option value="1">Reverse</option>
                                    <option value="2">Void</option>

                                </select>
                                <img onClick={() => { function_reversefancy(id2, true, item2.eventId, item2.selectionId) }} class="importfancy" alt="" src="data:image/png;base64,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" />
                            </div>
                        </td>}
                    {item2.gameStatus == 2 &&
                        <td class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }} >
                            <div id="divmain" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setreverseAction(e.target.value)} >
                                    <option value="0">Select</option>
                                    <option value="1">Reverse</option>
                                    <option value="2">Void</option>

                                </select>
                                <img onClick={() => { function_reversefancy(id2, true, item2.eventId, item2.selectionId) }} class="importfancy" alt="" src="data:image/png;base64,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" />
                            </div>
                        </td>}
                </tr>
            )
        })

    }, [decelared_fancyList, decelared_fancyList2_managebets, reverseAction])



    return (

        <React.Fragment>
            {refresh === true &&
                <Loader />}
            {refresh == false &&
                <div>
                    {OpenReverseFancyPopup && <FancyReversePop updatefanbcylist={updatefanbcylist} function_reversefancy={function_reversefancy} setOpenReverseFancyPopup={setOpenReverseFancyPopup} calcleeid={calcleeid} calclesid={calclesid} setrefresh={setrefresh} />}
                    {OpenMarketFancyPopup && <MarketReversePop updatemanrket={updatemanrket} function_reverseMarket={function_reverseMarket} setOpenMarketFancyPopup={setOpenMarketFancyPopup} Mcalcleeid={Mcalcleeid} Mcalclesid={Mcalclesid} setrefresh={setrefresh} />}
                    <body class="biab_fluid_body biab_desktop">
                        <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                            <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                                <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                                <div className="biab_table-tabs js-table-tabs">
                                    <ul className="path" style={{ display: 'flex', height: '27px', width: 'auto' }}>
                                        <li> <a style={{ marginLeft: "-17px" }} href="/RollCricket">Cricket <i class="fas fa-angle-right"></i> </a></li>
                                        <li> <a >{Event_Name}<i class="fas fa-angle-right"></i> </a></li>

                                    </ul>
                                </div>
                                <div class="biab_page-wrapper">
                                    <div class="biab_page-holder" style={{ margin: "-22px 6px -46px" }}>
                                        <div class="biab_page-container">

                                            <div className="js-scroll-start" style={{ margin: "28px" }} />
                                            <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'auto' }}>
                                                <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '107px' }}>
                                                    {lenthofmarket > 0 &&
                                                        <div style={{ marginBottom: '20px' }}>
                                                            <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> Market</div>
                                                            <div>
                                                                <table class="tableReverse">
                                                                    <tr class="Td_Reverse">
                                                                        <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Market ID</th>
                                                                        <th class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>DateTime</th>
                                                                        <th class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>Maket </th>
                                                                        <th class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>Result</th>
                                                                        <th class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }}>Reverse</th>
                                                                    </tr>
                                                                    {decelared_markett.map((item, id) => {
                                                                        return (
                                                                            <tr key={id}>
                                                                                <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item.marketId}</td>
                                                                                <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>{item.marketStartTime}</td>
                                                                                <td class="Td_Reverse" style={{ width: '30%', textAlign: 'center' }}>{item.marketName}</td>
                                                                                <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}> {item.winner}</td>
                                                                                <td class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }}>
                                                                                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                                                                        <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setmatchreverseAction(e.target.value)} >
                                                                                            <option value="0">Select</option>
                                                                                            <option value="1">Reverse</option>
                                                                                            <option value="2">Void</option>

                                                                                        </select>
                                                                                        <img onClick={() => { function_reverseMarket(id, true, item.eventId, item.marketId) }} class="importfancy" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAACcNJREFUeF7tnH9wVNUVx7/nvRDCD7U/THEkKtm3pDPFtuJQaDYRtT8GpB1bR0GQKhZHWqQzbe1QtWU3+yMw/YNRa7UoorXQqoXWdiwda9sZRsi+hB91oC2jpuyGQGyhtDDA8iPsvns6L2Q3L8sGdt+v3cT3/n33nXPv555333nnnnsI3uUKAXJFi6cEHmiXjMAD7YF2iYBLajyL9kC7RMAlNZ5Fe6BdIuCSGs+iPdAuEXBJjWfRHmiXCLikxrPoDzJo/6qttUjLASFhKhhTiDAJTFcx4cMA1xBIAOgF+BiDDhE4yQLvQqJdVVp1R2d42n9d4le0moqxaH+0bYrGuFsi6ctMuIFgLuDFgCBgNwv+vSZJv+oONr5TNA0HG5YX9HO7RtUf6Z1PTN8iYLoD42QA7YJ5TZc49yrCt2Yc0FGUyPKADm+pUqTRiwH8EIRri+qpxUbM2A8glvx7z8+xaZ5mUVzJj7sOur41PlNi/BSgKUP1lsEaQG8DUCF4D5HUKSTRk8qc+9+RvUfOYEotTRj3kdFjTp2ulThTB1luIOIbGGgEaCoB8tCy8TciLE2sCKgl07LwgGug6x5Xx1SneDVI+iaBpfw+M6AR4y8AXu4V2NwTDhw1M66rw1uurJFG306EhQy6ZQhd+sf0J0LrfXR/+NazZvSU+owroH3hbQ0ky78BcH0BwGeI+fkMVT3ZHZzRVeoALtbeF+uYDBYPE+F+ADUX6qY9aYg7DwabEnbqLSTLcdC+iPp5kvBrAB8ydkD3DsB4KS1E8GC4+V9ODtTXsu1aVMk/ImA+8rwZBh8TTHfsDwXecrIPjoKuj6hzJQm/AFA9CDJzJ0FanAg1xp0cXL5sfdIhYx0xJg2+x70gWpBYEfitU/1xDHQ/5JcBVOUNakPqeGrp4dWzTjk1qIsuJ4/8+QqMG/sCEd2Z1y7NEPOTwebXnOiXI6DrI21flCR5M8A5Sz6/VPDyZKjpcScGUqpMX6y9hcAtg5cS7tWYZjmxjNgOWv/wQZa2E8i4JqeZsCi5IvBKqUCcbK+sVJewwBoCcl4QM46miafb/YG0FbTuwo1O8U7QgI+su20QuDfZUlmQsxOoxNRvAFhjtGwGfpwMBr5j5yTbCtoXU58mYFneh+97lbJcDAXOH1UjTAjl7jN6EqHANRUJWv/jI5a2DP5B4A2JYNN9dnbYKVm+mHqIgAl98isW9NyNsvKput3GHxJm7jw1ZvyNh5d/uizeRakTosTUrzLwLPSPNrQlyeBNm0uVcbH2tiwdSiz+IEBrs4r6QpVMM932k+0EY7cs66CX7Bql1J3bZ4zCEfhn+4JNenTOu/oJWAZd3xq/V2Jab7DmM2lN+J3+rR5uM2gZtC+mdhAwY+CLTU8lQo3fHm4gnO6vJdD+VR2fYE3sNVizpkGebHcUzmkIbsi3BFqJtEUhScEB0PynZLBplhsdt0uH0qoGwNCXvhrBYkFXqHmbXbKNcqyBjqn6LshUg6O/KBEK5NZrJzpst0wlpnYCmNwv96Rg8SUnYJsG7X9sa60YW3U4u1utbz+d0+hjZndG7AZYrDwlqh4Eoc7Q3hHY5kFH4l9hiX6XWzaYdyZDTU7sZBfLzFS7SdH2GTLxmwCuMMJmkuYkV3y2zZTQAg+ZBu2LxMMkkR5m7LucCMTYNchLyXEDtmnQSkzdCGCuwa37eiLU+NKlBlWp952GbQF0fCdA0wygm4f7L7eTsC2Abj8AcC6UyJnq65KRaQcq1WKL7ZdTsE2D9sXaUwQelx1AqmbceCcjdXp0DYAeuKotFprN7VICYmFXsPl1M3JNg1Ziatq48ZrQGmWE+7I8HbmUmPo+gKsdEV680J5E0NyGwHACfRAY5O8Wj8e+lu8nggGjz120ZNOg3V46fLGOOQR+1vhdKHqUtjSk4xBYkGhpfMOMONOgldjI/Bj6WjuaSWhvgGi8AehxTROz94ebO8xA1p+xAHrkuXdKtL0JxLrFXjbgtuJEBjy7O9TUbhayRdAj64elP4r3x0GQgRMZtg7ZEmhfVI2QYYt+OP+C90PWLflyg9WeBGG2XXnUppcOf35QCdiRDAYGdlqsvGcuPntdNN5YRaRb8mDInLktEZppWxKmedCPba3lsVWHs+v8sA2TxtQeABONlswZbU4ycpNtkTtLS4f+sDIiAv/tnQCfD/wzp1iSb7MzPJqdQNMW3Qc6okYhIbeVBcabiVBgtotvvmVVuqfBYD2Hu4Yhz+sKzai8rSz9bCCT9I/saPWERg3pyd3Bm209ImGZZgUIsGTRev99UXUHET4z4Hd66QaF5tUO0PcQ4ZcGq/YSaAqQtgwaeoLjJ+veBcGfg814MRkKPFABb2zFdME6aAD1MfUBCVhnsGovyTFvim0BjY0sK++1X5i2eyJ1Y7kOBZVqykpEvYOlvsx/AcEPJlua/lCqjIu1twe0btWFEtEZ6xOhwCI7O+yULCWm/ie3e1Oxiej9o/dF488Q0UNGGAx6OBlsfMIpQHbIrY+2/UAiaeWA51TBRyv0Tg7Lw0LR+P1M9EL2ZBYD/67YjH+jVfnC2xtI1nbkZf6kwXxfItT0qh0WaJcMpQ8y1hEoVw1BMJZ3hQKr7dJhyy/4UJ0Z4kCnBojlyWBzRSwjvlb1UTBWGs8YAsPoQGcWvr9VnSuYXzFaS989xvrUiZMPlcsbufL7bZddPp7WEpF+AN94pSFwd6LFmfPgtnkdhazbH22bxyRtuODQPfAeERbbFVQv9jU/X5SFXtTjYXnPnGWIhU6dA9d1OQpaV+ALb/sCybJeRsKYraknRbpWRkJpfesa8KiVDHwtvygWA0c1Ie7qbmneUuyEmWnnOOg+2Ku2N5CWea1QeR8GThPzugxlnrQ76uePxRUB+i4BejigYGGUcxrf1RMO7DMDr5RnXAGddf2qU7QaxEsLlVqzq9TPxFXbPzpay9wO0D0APjf4Y3ceTd85SKKntczZR0ZUqR/jzE+KqjfLhGcAXKp41V/1UmrEtBtI/1NI8vniVbjlNPZuognTP14z5tTRWlmqmcgsGkgvRghqZOASxatoDzGWuZ356ppFD3rNsuXYiFcAZOvh9qFeZwa6wYh+YMqxDQa+sbpeqptPhGUOFRjUl4kdIPFU8kDNRqydpidmluUqj0UXGKoSjl8PmeaBYUfJzD0s+PUM8aYDoebcOciyEO5XWjGgjRAuLAJLerGpqxi5IrDMoF5iPgbiQ2BKMtE7DO3tUVqN6hWBLadJlVl3RVp0mZk4ot4D7QjWC4V6oD3QLhFwSY1n0R5olwi4pMazaA+0SwRcUuNZtAfaJQIuqfEs2gPtEgGX1HgW7RLo/wPBA/iIGAD1LAAAAABJRU5ErkJggg==" />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </table>
                                                            </div>
                                                        </div>}
                                                    {lengthoffanacy > 0 &&
                                                        <div style={{ marginBottom: '20px' }}>
                                                            <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> Fancy</div>
                                                            <div>
                                                                <table class="tableReverse">
                                                                    <tr class="Td_Reverse">
                                                                        <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Market ID</th>
                                                                        <th class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>Fancy ID</th>
                                                                        <th class="Td_Reverse" style={{ width: '25%', textAlign: 'center' }}>Fancy Name </th>
                                                                        <th class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>Result</th>
                                                                        <th class="Td_Reverse" style={{ width: '15%', textAlign: 'center' }}>Declare Status</th>
                                                                        <th class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }}>Reverse</th>
                                                                    </tr>
                                                                    {fancyList()}
                                                                    {/*{decelared_fancyList.map((item2, id2) => {*/}
                                                                    {/*    var Declare_status = "";*/}
                                                                    {/*    if (item2.Status == null) Declare_status = "Running..."*/}
                                                                    {/*    if (item2.Status == "C") Declare_status = "Done"*/}
                                                                    {/*    if (item2.Status == "I") Declare_status = "In..Progress.."*/}
                                                                    {/*    let manageBetDecelaredObj = {};*/}
                                                                    {/*    const manageBetDecelaredCurrArr = ()=> decelared_fancyList2_managebets.filter(i=> (i.selectionId == item2.selectionId && i.eventId && item2.eventId));*/}
                                                                    {/*    if(manageBetDecelaredCurrArr().length !== 0){*/}
                                                                    {/*        manageBetDecelaredCurrArr()[0] = manageBetDecelaredObj;*/}
                                                                    {/*    }*/}
                                                                    {/*    console.log('manageBetDecelaredObj', manageBetDecelaredObj)*/}
                                                                    {/*    return (*/}
                                                                    {/*        <tr key={id2}>*/}
                                                                    {/*            <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}>{item2.selectionId}</td>*/}
                                                                    {/*            <td class="Td_Reverse" style={{ width: '20%', textAlign: 'center' }}>{item2.id}</td>*/}
                                                                    {/*            <td class="Td_Reverse" style={{ width: '25%', textAlign: 'center' }}>{item2.runnerName}</td>*/}
                                                                    {/*            <td class="Td_Reverse" style={{ width: '10%', textAlign: 'center' }}> {item2.result}</td>*/}
                                                                    {/*            <td class="Td_Reverse" style={{ width: '15%', textAlign: 'center', color: (item2.gameStatus == 2 ? "red" : "green") }}> {Declare_status}</td>*/}
                                                                    {/*            {item2.gameStatus == 1 && item2.gameStatus == 0 &&*/}
                                                                    {/*                <td class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }} >*/}
                                                                    {/*                    <div id="divmain" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>*/}
                                                                    {/*                        <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setreverseAction(e.target.value)} >*/}
                                                                    {/*                            <option value="0">Select</option>*/}
                                                                    {/*                            <option value="1">Reverse</option>*/}
                                                                    {/*                            <option value="2">Void</option>*/}

                                                                    {/*                        </select>*/}
                                                                    {/*                        <img onClick={() => { function_reversefancy(id2, true, item2.eventId, item2.selectionId) }} class="importfancy" alt="" src="data:image/png;base64,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" />*/}
                                                                    {/*                    </div>*/}
                                                                    {/*                </td>}*/}
                                                                    {/*            {item2.gameStatus == 2 &&*/}
                                                                    {/*                <td class="Td_Reverse" style={{ width: '20%', fontSize: '24px', textAlign: 'center' }} >*/}
                                                                    {/*                    <div id="divmain" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>*/}
                                                                    {/*                        <select id="winner_team" name="winner_team" style={{ height: "25px", width: '107px', marginTop: '4px' }} onChange={(e) => setreverseAction(e.target.value)} >*/}
                                                                    {/*                            <option value="0">Select</option>*/}
                                                                    {/*                            <option value="1">Reverse</option>*/}
                                                                    {/*                            <option value="2">Void</option>*/}

                                                                    {/*                        </select>*/}
                                                                    {/*                        <img onClick={() => { function_reversefancy(id2, true, item2.eventId, item2.selectionId) }} class="importfancy" alt="" src="data:image/png;base64,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" />*/}
                                                                    {/*                    </div>*/}
                                                                    {/*                </td>}*/}
                                                                    {/*        </tr>*/}
                                                                    {/*    )*/}
                                                                    {/*})}*/}
                                                                </table>
                                                            </div>
                                                        </div>}

                                                    {lenthofmarket == 0 && lengthoffanacy == 0 &&
                                                        <div style={{ height: '100px', width: '100%', backgroundColor: 'whitesmoke', color: 'gray', fontSize: '15px', fontWeight: 'bold', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                            No market available
                                                        </div>
                                                    }









                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>}
        </React.Fragment>
    )
}

export default Reverse



// const function_reverseMarket = (id, mid) => {
    //     //console.log(matchreverseAction,"ompk",mid,event_Id)
    //     if ( matchreverseAction== 1) {
    //         var ssid = cookies.get("sid");
    //         axios.post("https://liveapi247.live/api4/ReverseMatch", {
    //             sid: ssid,
    //             eventId: event_Id,
    //             marketId: mid
    //         })
    //         .then((result) => {
    //                 if (result.status === 200) {
    //                     toast.success('Market Reverse Successfully!!', { position: toast.POSITION.TOP_CENTER })
    //                     setupdatedec_market_list(!updatedec_market_list)
    //                 }
    //             })
    //             .catch((e) => { });
    //     }

    // }


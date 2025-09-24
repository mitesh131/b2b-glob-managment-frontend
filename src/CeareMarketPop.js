import React, { useEffect, useState } from 'react'
import DeclarePass from './DeclarePass';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();
var runn1, runn2;

function CeareMarketPop(props) {
    const event_id = props.event_Id;
    const market_ID = props.market_ID;
    const [MarketName, setMarketName] = useState();
    const [fanMinStack, setfanMinStack] = useState('1');
    const [fanMaxStack, setfanMaxStack] = useState('1000');
    const [Event_Name, setEvent_Name] = useState([])
    const [runn1, setrunn1] = useState();
    const [runn2, setrunn2] = useState();
    const [mname, setmname] = useState();
    const [DRAW, setDRAW] = useState(false);
    const [runn_Name1, setrunn_Name1] = useState();
    const [runn_Name2, setrunn_Name2] = useState();
    const [openeventiputbox, setopeneventiputbox] = useState(false)

    const characters = '123450789';


    useEffect(() => {
        var ssid = cookies.get("sid");
        axios.post("https://liveapi247.live/api4/OnlyEventName", {
            sid: ssid,
            eventId: event_id,
            marketId: market_ID,
        }).then((result) => {
            if (result.status === 200) {
                setEvent_Name(result.data);
                setrunn1(result.data[0].runnerName1)
                setrunn2(result.data[0].runnerName2)
                setmname(result.data[0].eventName)
            }
        })
            .catch((e) => { });
    }, [])


    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const Manual_Market_id = "Mid1" + generateString(9) // Function called here and generate Selection id in variable


    const creat_market = () => {
        var drawval;
        if (DRAW == true)
            drawval = "123456";
        if (DRAW == false)
            drawval = "";

        props.setrefresh(true);
        var ssid = cookies.get('sid');

        axios.post('https://liveapi247.live/api4/Create_Manula_Market', {
            sid: ssid,
            sportId: Event_Name[0].sportId,
            eventId: Event_Name[0].eventId,
            eventName: Event_Name[0].eventName,
            marketId: Manual_Market_id,
            marketName: MarketName,
            selectionId1: Event_Name[0].runnerId1,
            runnerName1: runn_Name1,
            selectionId2: Event_Name[0].runnerId2,
            runnerName2: runn_Name2,
            marketStartTime: Event_Name[0].marketStartTime,
            selectionIdTie: drawval,
            minStack: fanMinStack,
            maxStack: fanMaxStack,
        })
            .then(result => {

                if (result.status === 200) {
                    props.setrefresh(false);
                    props.mMarket()
                    toast.success('Create Matches Successfully!!', { position: toast.POSITION.TOP_CENTER })
                    props.setopencratemarketmatch(false)
                }
                else if (result.status === 201) {
                    toast.warn('Opps, Match already imported!!', { position: toast.POSITION.TOP_CENTER })
                }
                else {
                    toast.warn('Opps, Somthings wents Wrong!!!', { position: toast.POSITION.TOP_CENTER })

                }

            }).catch(e => { });

    }

    const selectchangefun = (val) => {
        if (val == "1")
            setopeneventiputbox(true);
        setMarketName(val)


    }
    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop" >
                <div class="biab_body biab_fluid" id="biab_body">

                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop_market">
                            <div className="biab_modal-content js-modal-content" style={{ height: '600px', borderRadius: '10px' }} >
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.setopencratemarketmatch(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title" style={{ fontSize: '15px', fontWeight: 'bold' }}>Create Market </h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "500px" }} >
                                    <div className="fancycerateelementmain" style={{ marginTop: '20px' }} >
                                        <div className="fancycerateelementmain_left">Enter Market Name</div>
                                        <div className="fancycerateelementmain_Right">
                                            <input className="fancycerateelementmain_imput" style={{ borderRadius: '5px', display: openeventiputbox == true ? "block" : "none" }} id="fancyname" type="text" placeholder="Enter Market name " onChange={(e) => setMarketName(e.target.value)} />
                                            <select id="winner_team" name="winner_team" style={{ height: "32px", width: '41.8%', zIndex: '99', position: 'absolute', borderRadius: '5px', display: openeventiputbox == false ? "block" : "none" }} onChange={(e) => selectchangefun(e.target.value)} >
                                                <option value="0">Select</option>
                                                <option value="Bookmaker">Bookmaker</option>
                                                <option value="Match Odds">Match Odds</option>
                                                <option value="Super Over">Super Over</option>
                                                <option value="Tie Match">Complete Match</option>
                                                <option value="Tie Match">Tie Match</option>
                                                <option value="Tie Match">Toss</option>
                                                <option value="1">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" style={{ marginTop: '10px' }} >
                                        <div className="fancycerateelementmain_left">Select Runner Name1</div>
                                        <div className="fancycerateelementmain_Right">
                                            <select id="winner_team" name="winner_team" style={{ height: "32px", width: '41.8%', zIndex: '99', position: 'absolute', borderRadius: '5px' }} onChange={(e) => setrunn_Name1(e.target.value)}>
                                                <option value="0">Select</option>
                                                <option value={runn1}>{runn1}</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" style={{ marginTop: '10px' }} >
                                        <div className="fancycerateelementmain_left">Select Runner Name2</div>
                                        <div className="fancycerateelementmain_Right">
                                            <select id="winner_team" name="winner_team" style={{ height: "32px", width: '41.8%', zIndex: '99', position: 'absolute', borderRadius: '5px' }} onChange={(e) => setrunn_Name2(e.target.value)}>
                                                <option value="0">Select</option>
                                                <option value={runn2}>{runn2}</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" >
                                        <div className="fancycerateelementmain_left">Mininum</div>
                                        <div className="fancycerateelementmain_Right">
                                            <input className="fancycerateelementmain_imput" style={{ borderRadius: '5px' }} id="minim" type="text" placeholder="Enter" value={fanMinStack} onChange={(e) => setfanMinStack(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" >
                                        <div className="fancycerateelementmain_left">Maximun</div>
                                        <div className="fancycerateelementmain_Right">
                                            <input className="fancycerateelementmain_imput" style={{ borderRadius: '5px' }} id="mixy" type="text" placeholder="Enter" value={fanMaxStack} onChange={(e) => setfanMaxStack(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" style={{ marginTop: '5px' }} >
                                        <div className="fancycerateelementmain_left">Draw</div>
                                        <div className="fancycerateelementmain_Right">
                                            <input className="fancycerateelementmain_imput" style={{ marginTop: '5px', height: '20px', width: '20px' }} id="drawbtn" type="Radio" placeholder="Enter" onClick={() => setDRAW(true)} />

                                        </div>
                                    </div>
                                    <div className="fancycerateelementmain" >
                                        <div className="fancycerateelementmain_left"></div>
                                        <div className="fancycerateelementmain_Right" style={{ display: 'flex' }}>
                                            <div className="menu_add__fancy" onClick={() => { creat_market() }}  >Create</div>
                                            <div className="menu_add__fancy" onClick={() => { props.setopencratemarketmatch(false) }} >Cancle</div>
                                        </div>
                                    </div>

                                </div>
                            </div></div>
                        <div className="biab_modal-backdrop biab_fade biab_in js-backdrop" /></div>
                </div>
            </body>
        </React.Fragment>
    )
}

export default CeareMarketPop

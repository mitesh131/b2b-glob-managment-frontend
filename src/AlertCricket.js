import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import moment from 'moment';
import Switch from "react-switch";
import Bookdata from './Bookdata';
import Loader from './Loader';




const cookies = new Cookies();
var CAIA = "CAIA";
const url = window.location.href;
const para = url.split('/');
const sport_id = para[4];

export const AlertCricket = (props) => {
    const [refresh, setrefresh] = useState(true);
    const [cricketList, setcricketList] = useState([]);
    const [reload, setreload] = useState(true);
    const [Sporttype, setSporttype] = useState(4)
    const [dec_matach_lkist, setdec_matach_lkist] = useState([])
    const [sportname, setsportname] = useState("Cricket");
    const [matchList, setmatchList] = useState([])
    const [updatemarketdate, setupdatemarketdate] = useState(false);

    const function_sportType = (type) => {
        setSporttype(type);
        if (type == "4") setsportname("Cricket")
        if (type == "1") setsportname("Soccer")
        if (type == "2") setsportname("Tennis")
    }

    

    return (
        <React.Fragment>

            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div class="biab_wrapper js-wrapper" style={{ width: "1347px" }}>
                        <div id="biab_message-dialog" class="biab_message-dialog-wrapper"></div>
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: '287px' }}>
                                <li onClick={() => { function_sportType(4) }} className={`${(Sporttype === 4) ? "tab_active" : "tab"}`} > <a style={{ marginLeft: ' -14px' }} >Cricket</a></li>
                                <li onClick={() => { function_sportType(1) }} className={`${(Sporttype === 1) ? "tab_active" : "tab"}`}><a>Soccer</a></li>
                                <li onClick={() => { function_sportType(2) }} className={`${(Sporttype === 2) ? "tab_active" : "tab"}`}><a>Tennis</a></li>
                            </ul>
                        </div>
                        <div class="biab_page-wrapper">
                            <div class="biab_page-holder" style={{ margin: "-28px 0px -46px" }}>
                                <div class="biab_page-container">

                                    <div className="js-scroll-start" style={{ margin: "28px" }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'auto' }}>
                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '60px' }}>

                                            <div style={{ marginBottom: '20px', marginLeft: '0px' }}>
                                                <div style={{ height: '30px', width: '100%', backgroundColor: '#0074b1', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}> {sportname}</div>
                                                
                                                  <div style={{height:'400px', width:'100%', backgroundColor:'whitesmoke', color:'gray', fontSize:'25px', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center'}}>Comming Soon!</div>
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





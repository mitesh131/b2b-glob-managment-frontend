import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import moment from 'moment';
import Switch from "react-switch";
import Bookdata from './Bookdata';
import Loader from './Loader';
import UpdateCookieModal from "./UpdateCookieModal";




const cookies = new Cookies();
const url = window.location.href;

const Settings = ({ setrefresh}) => {
    const [loading, setLoading] = useState(false);
    const [openCookieModal, setOpenCookieModal] = useState(false);



    return (
        <React.Fragment>
            {loading && <Loader />}
            {openCookieModal && <UpdateCookieModal close={()=> setOpenCookieModal(false)} setLoading={setLoading} />}
            <body class="biab_fluid_body biab_desktop">
            <div class="biab_body biab_fluid biab_account-page" id="biab_body">
                <div className="biab_wrapper js-wrapper" style={{width: "1347px"}}>
                    <div className="biab_table-tabs js-table-tabs"></div>
                    <div className="biab_page-wrapper">
                        <div className="biab_page-holder" style={{margin: "-28px 0px -46px"}}>
                            <div className="biab_page-container">

                                <div className="js-scroll-start" style={{margin: "28px"}}/>

                                <div className="biab_scrollable js-scrollable"
                                     style={{position: 'relative', overflow: 'auto'}}>
                                    <div className="biab_scrollable-content js-scrollable-content"
                                         style={{marginBottom: '60px'}}>

                                        <div style={{marginBottom: '20px', marginLeft: '0px'}}>
                                            <div style={{
                                                height: '30px',
                                                width: '100%',
                                                backgroundColor: '#0074b1',
                                                color: 'white',
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                paddingLeft: '10px'
                                            }}>Settings
                                            </div>

                                            <table className="tableReverse">
                                                <tr className="Td_Reverse">
                                                    <td style={{ padding: '10px', width: '20%'}}>Cookie Update</td>
                                                    <td style={{padding: '10px'}}>
                                                        <button className="search-but"
                                                                style={{ position: 'relative', top: '10px', left: 0}}
                                                                onClick={() => setOpenCookieModal(true)}>Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                                {/*<div style={{*/}
                                                {/*    height: '400px',*/}
                                                {/*    width: '100%',*/}
                                                {/*    backgroundColor: 'whitesmoke',*/}
                                                {/*    color: 'gray',*/}
                                                {/*    fontSize: '25px',*/}
                                                {/*    fontWeight: 'bold',*/}
                                                {/*    display: 'flex',*/}
                                                {/*    justifyContent: 'center',*/}
                                                {/*    alignItems: 'center'*/}
                                                {/*}}>*/}
                                                {/*    test*/}
                                                {/*</div>*/}
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

export default Settings;





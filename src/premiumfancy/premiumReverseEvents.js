import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";
import axios from "axios";
import Loader from "../Loader";

const PremiumReverseEvents = (propp) => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const props = propp?.match?.params;
    const { search } = useLocation();
    const searchParams = queryString.parse(search)
    console.log('searchParams', searchParams)

    const cookies = new Cookies();
    var ssid = cookies.get('sid');

    const getEventMarketData = (index) => {
        setLoading(true);
        axios.post('https://liveapi247.live/api4/pbDeclareMarket', {
            sid: ssid,
            sportId: searchParams?.sportsId
        }).then(result => {
            setLoading(false);
            if (result.status === 200) {
                setEventData(result.data);
                console.log('result', result.data)
            }
        })
    }

    useEffect(() => {
        if(searchParams?.sportsId) {
            getEventMarketData();
        }
    }, [searchParams?.sportsId]);


    return (
        <>
            {loading &&
                <Loader />}
            <div>
                <div className="biab_body biab_fluid biab_account-page" id="biab_body">
                    <div className="biab_wrapper js-wrapper" style={{ width: '1347px' }}>
                        <div id="biab_message-dialog" className="biab_message-dialog-wrapper" />
                        <div className="biab_table-tabs js-table-tabs">
                            <ul className="path" style={{ display: 'flex', height: '27px', width: '360px' }}>
                                <li className={(searchParams?.sportsId == 4) ? "tab-active" : "tab"}>
                                    <Link to="/premiumreverseevents?sportsId=4" style={{ fontSize: '15px'}}>
                                        Cricket
                                    </Link>
                                    {/*<a style={{ marginLeft: '-14px' }} onClick={() => { setTabchange(0) }}>Cricket</a>*/}
                                </li>
                                <li className={(searchParams?.sportsId == 1) ? "tab-active" : "tab"}>
                                    <Link to="/premiumreverseevents?sportsId=1" style={{ fontSize: '15px'}}>
                                        Soccer
                                    </Link>
                                </li>
                                <li className={(searchParams?.sportsId == 2) ? "tab-active" : "tab"}>
                                    <Link to="/premiumreverseevents?sportsId=2" style={{ fontSize: '15px'}}>
                                        Tennis
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="biab_page-wrapper">
                            <div className="biab_page-holder" style={{ margin: '-28px 0px -46px' }}>
                                <div className="biab_page-container">
                                    <div className="js-scroll-start" style={{ margin: '28px' }} />
                                    <div className="biab_scrollable js-scrollable" style={{ position: 'relative', overflow: 'hidden' }}>
                                        <div className="biab_scrollable-content js-scrollable-content" style={{ marginBottom: '60px' }}>
                                            <div style={{ marginBottom: '20px', marginLeft: '0px' }}>
                                                {/*<div style={{ height: '30px', width: '100%', backgroundColor: 'rgb(0, 116, 177)', color: 'white', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '10px' }}>*/}
                                                {/*    Cricket*/}
                                                {/*</div>*/}
                                                {eventData.length !== 0 ? eventData.map(i=> (
                                                    <div style={{ display: 'flex', backgroundColor: 'whitesmoke' }}>
                                                        {/*<div className="fukka" style={{ height: '45px', width: '6%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(134, 186, 0)' }}>*/}
                                                        {/*    <input className="form-check-input" type="checkbox" onChange={()=> null} />*/}
                                                        {/*</div>*/}
                                                        <div className="fukka" style={{ cursor: 'pointer', height: '45px', width: '10%', border: '1px solid white', textAlign: 'center', backgroundColor: 'whitesmoke' }}>{i.marketStartTime}</div>
                                                        <Link to={`/premiumreversedetails?${queryString.stringify({sportsId: i.sportId, eventId: i.eventId, eventName: i.eventName})}`}
                                                              style={{ height: '45px', width: '24%', border: '1px solid white', textAlign: 'left', lineHeight: '17px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 700, cursor: 'pointer', paddingLeft: '5px', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <div style={{ textDecoration: 'none', color: 'black' }}>
                                                                {i.eventName}
                                                            </div>
                                                        </Link>
                                                        {/*<a href="/premiumfancy" style={{ height: '45px', width: '24%', border: '1px solid white', textAlign: 'left', lineHeight: '17px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 700, cursor: 'pointer', paddingLeft: '5px', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>*/}

                                                        {/*</a>*/}
                                                        <div className="fukka" style={{ height: '45px', width: '10%', border: '1px solid white', textAlign: 'center', fontWeight: 700 }}> {i.eventId}</div>
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(165, 215, 255)', fontWeight: 700 }}>Skyfair</div>
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(249, 201, 209)' }}>
                                                            <input type="checkbox" className="btn" id="B_logo32" /><a style={{ color: 'rgb(39, 58, 71)', fontSize: '12px', paddingLeft: '5px', paddingRight: '15px', fontWeight: 'bold' }}>B.Maker</a>
                                                        </div>
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(165, 215, 255)' }}>
                                                            <input type="checkbox" className="btn" id="F_logo32" /><a style={{ color: 'rgb(39, 58, 71)', fontSize: '12px', paddingLeft: '5px', paddingRight: '15px', fontWeight: 'bold' }}>Fancy</a>
                                                        </div>
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(249, 201, 209)' }} />
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(165, 215, 255)', fontWeight: 700 }} />
                                                        <div className="fukka" style={{ height: '45px', width: '8%', border: '1px solid white', textAlign: 'center', backgroundColor: 'rgb(249, 201, 209)', fontWeight: 700 }} />
                                                    </div>
                                                )) : <h3 style={{ paddingTop: '20px'}}>Data Not found</h3>}



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PremiumReverseEvents

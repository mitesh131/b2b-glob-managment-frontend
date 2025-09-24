import React, {useEffect, useState} from 'react'
import axios from "axios";
import Cookies from "universal-cookie";
import {Link, useHistory, useLocation} from "react-router-dom";
import queryString from 'query-string';
import Loader from "../Loader";
import DeclaredPremium from  './component/declared-premium';
import { useList } from "react-use";
import { pushAndUpdateReUseArrListObjValue } from '../module/utils';
import ReversePremium from "./component/reverse-premium";
import {toast} from "react-toastify";

const PremiumReverseDetail = (propp) => {
    const [marketRunners, setMarketRunners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [premDeclListArr, { set, push: pushPremList, updateAt: updatePremList, insertAt, update, updateFirst, upsert, sort, filter, removeAt, clear: clearPremList, reset }] = useList([]);
    const [declaredModal, setDeclaredModal] = useState({
        show: false,
        data: {}
    });
    // const props = propp?.match?.params;

    const { search } = useLocation();
    const searchParams = queryString.parse(search)
    // console.log('searchParams', searchParams)
    const cookies = new Cookies();
    var ssid = cookies.get('sid');

    const getMarketRunnersData = async () => {
        setLoading(true);
        await axios.post('https://liveapi247.live/api6/declaredPremiumMarkets', {
            // sid: ssid,
            sportId: searchParams?.sportsId,
            eventId: searchParams?.eventId
        }).then(result => {
            setLoading(false);
            if (result.status === 200) {
                setMarketRunners(result.data.data);
            }
        })
    }

    useEffect(() => {
        if(searchParams?.eventId && searchParams?.sportsId){
            getMarketRunnersData();
        }
    }, [searchParams?.sportsId, searchParams?.eventId]);


    return (
        <React.Fragment>
            {loading &&
                <Loader />}
            {declaredModal.show && (
                <ReversePremium  {...declaredModal?.data} onHide={()=> setDeclaredModal({show: false})} setLoading={setLoading} />
            )}
            <div className="fancy-container" >
                <div className="pfancy-header">
                    <h3 style={{ fontSize: '1rem'}}>
                        {searchParams?.eventName}
                    </h3>
                </div>
                {marketRunners?.length !== 0 ? (
                    <table className="premium-table">
                        <thead>
                            <tr style={{ height: '25px'}}>
                                <td style={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Premium Market</td>
                                <td style={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Declared</td>
                                <td style={{ fontWeight: 'bold', fontSize: '0.9rem'}}>Reverse</td>
                            </tr>
                        </thead>
                        <tbody>
                        {marketRunners.map(i=> {
                            let declaredSelectionName = '';
                            let declaredId = 0;
                            const getDeclaredRunner = i?.runners?.filter(f=> f.id == i.type);
                            if(getDeclaredRunner.length !== 0){
                                declaredSelectionName = getDeclaredRunner[0].selectionName;
                                declaredId = getDeclaredRunner[0].id;
                            }

                            return (
                                <tr style={{ height: '45px'}}>
                                    <td><h3>{i?.marketName}</h3></td>
                                    <td><h3>{declaredSelectionName}</h3></td>

                                    <td>
                                        <button
                                            onClick={()=> {
                                                if(declaredId) {
                                                    setDeclaredModal({show: true, data: { teamName: declaredId, eventId: i.eventId, marketId: i.marketId, marketName: i.marketName}})
                                                } else {
                                                    toast.error('Id Not found failed', { position: toast.POSITION.TOP_CENTER });
                                                }
                                            }}
                                            style={{
                                                background: 'transparent',
                                                outline: '0px',
                                                border: '0px',
                                                cursor: 'pointer',
                                                opacity: 1,
                                            }}
                                        >
                                            <img className="importfancy" alt="" src="data:image/png;base64,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" />
                                        </button>

                                    </td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                ): <h3 style={{ paddingTop: '20px'}}>Data Not found</h3>}


            </div>
        </React.Fragment>
    )
}

export default PremiumReverseDetail

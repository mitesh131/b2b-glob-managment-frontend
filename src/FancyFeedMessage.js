import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();

function FancyFeedMessage(props) {
    const event_id = props.feedeid;
    const slection_id = props.feedsid;
    const [message, setmessage] = useState();


    const submitte = () => {
        var ssid = cookies.get('sid');
        axios.post('https://liveapi247.live/api4/feedFancyMessage', {
            sid: ssid,
            feedMessage: message,
            eventId: event_id,
            selectionId: slection_id,
            //id:fancy_id,
        }).then(result => {
            if (result.status === 200) {
                toast.success('feed message upadted successfully', { position: toast.POSITION.TOP_CENTER })
            }

        }).catch(e => { });

        props.function_open_FeedMessage(false);
    }
    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop">
                <div class="biab_body biab_fluid" id="biab_body">
                    <div class="biab_heads-up-over biab_hidden" id="biab_headsUpOver">

                    </div>
                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop">
                            <div className="biab_modal-content js-modal-content">
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.function_open_FeedMessage(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">Feed Message for Fancy</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "80px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label" >Message</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <textarea class="search-input" id="password" type="text" defaultValue="" style={{ width: '280px' }} onChange={(e) => setmessage(e.target.value)} />
                                            <button class="search-but" id="searchUserId" style={{ marginTop: '0px', position: 'absolute', zIndex: '99', right: '-70px' }} onClick={() => { submitte() }}  >Update</button>
                                        </div>
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

export default FancyFeedMessage

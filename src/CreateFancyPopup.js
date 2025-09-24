import React, { useEffect, useState } from 'react'
import DeclarePass from './DeclarePass';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();

export default function CreateFancyPopup(props) {
    const event_id = props.event_Id;
    const [fancyName, setfancyName] = useState();
    const [fanMinStack, setfanMinStack] = useState('1');
    const [fanMaxStack, setfanMaxStack] = useState('1000');
    const characters = '123450789';



    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const selection_id = "Sid1" + generateString(9) // Function called here and generate Selection id in variable





    const creat_fancy = () => {

        if (fancyName != 'undefined') {
            props.setrefresh(true)
            var ssid = cookies.get("sid");
            axios.post('https://liveapi247.live/api4/InsertManual_fancy_Session', {
                sid: ssid,
                eventId: event_id,
                selectionId: selection_id,
                runnerName: fancyName,
                minStack: fanMinStack,
                maxStack: fanMaxStack,
            }).then(result => {
                if (result.status === 200) {
                    toast.success('Manual Fancy Create successfully', { position: toast.POSITION.TOP_CENTER })
                    props.mfancy();
                }

            }).catch(e => { });
        }

        props.setopencratemarket(false);



    }

    return (
        <React.Fragment>
            <body class="biab_fluid_body biab_desktop" >
                <div class="biab_body biab_fluid" id="biab_body">

                    <div className="biab_modal biab_modal-wrapper biab_fade js-modal biab_in" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                        <div className="biab_modal-dialog" id="dialogpop_fancy">
                            <div className="biab_modal-content js-modal-content" style={{ height: '600px', borderRadius: '10px' }} >
                                <div className="biab_modal-header js-modal-header">
                                    <button onClick={() => { props.setopencratemarket(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title" style={{ fontSize: '15px', fontWeight: 'bold' }}>Create Fancy </h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "500px" }} >
                                    <div className="fancycerateelementmain" style={{ marginTop: '20px' }} >
                                        <div className="fancycerateelementmain_left">Fancy Name</div>
                                        <div className="fancycerateelementmain_Right">
                                            <input className="fancycerateelementmain_imput" style={{ borderRadius: '5px' }} id="fancyname" type="text" placeholder="Enter fancy name " onChange={(e) => setfancyName(e.target.value)} />
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
                                    <div className="fancycerateelementmain" >
                                        <div className="fancycerateelementmain_left"></div>
                                        <div className="fancycerateelementmain_Right" style={{ display: 'flex' }}>
                                            <div className="menu_add__fancy" onClick={() => { creat_fancy() }}  >Create</div>
                                            <div className="menu_add__fancy" onClick={() => { props.setopencratemarket(false) }} >Cancle</div>
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

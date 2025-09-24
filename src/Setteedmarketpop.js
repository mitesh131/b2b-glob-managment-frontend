import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
const cookies = new Cookies();




function Setteedmarketpop(props) {

    
    const [mmpassword, setmmpassword] = useState('');
    useEffect(() => {
        document.getElementById("password").select();
        var input = document.getElementById('password');
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                submitte();
            }
        });
    }, []);

   const submitte = () => {
        var num1=(document.getElementById("password").value);
        if(num1=="Aryan007") 
            props.fun_in_settledmarket();
         else
            toast.warn('Plase Enter Correct Password... It can be access by only admin', { position: toast.POSITION.TOP_CENTER });
        props.setopenSettledmarketpop(false);

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
                                    <button onClick={() => { props.setopenSettledmarketpop(false) }} type="button" className="biab_close js-close" data-dismiss="modal" aria-label="Close">
                                        <i class="fas fa-times"></i></button>
                                    <h4 className="biab_modal-title">Settled Market</h4>
                                </div>
                                <div className="biab_modal-body biab_rules-modal-body js-modal-body" style={{ height: "71px" }} >
                                    <div class="form-group"><label class="col-sm-2 control-label">Password</label>
                                        <div class="search-wrap" id="userSearchUl"><div>
                                            <input class="search-input" id ="password" type="text" value={mmpassword} onChange={(e) => setmmpassword(e.target.value)} />
                                            <button class="search-but" id="searchUserId" onClick={() => { submitte() }}>Submit</button>
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

export default Setteedmarketpop

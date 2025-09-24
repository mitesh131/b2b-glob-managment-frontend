import React, { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'

const ENDPOINT = "http://localhost:6500/";
let socket;
 
function FeedRate() {

    const [runactive1, setrunactive1] = useState(false);
    const [runactive2, setrunactive2] = useState(false);
    const [rateDiff, setrateDiff] = useState("0");

    const [lay1, setlay1] = useState("");
    const [back1, setback1] = useState("");
    const [lay2, setlay2] = useState("");
    const [back2, setback2] = useState("");
    const [Switched1, setSwitched1] = useState(true);
    const [Switched2, setSwitched2] = useState(true);
    const [Switched3, setSwitched3] = useState(false);
    const [Switched4, setSwitched4] = useState(false);


    const handleSwitched1 = () => { setSwitched1(!Switched1) }
    const handleSwitched2 = () => { setSwitched2(!Switched2) }
    const handleSwitched3 = () => { setSwitched3(!Switched3) }
    const handleSwitched4 = () => { setSwitched4(!Switched4) }





    useEffect(() => {
        document.getElementById("enableSparkCheck1").className = "switch_off";
        document.getElementById("enableSparkCheck2").className = "switch_off";
        return () => { }
    }, [])


    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: [`websocket`] });

        socket.on("connect", () => {
            //alert("Connected!!!");
        })
        console.log(socket);

        socket.emit('joined', "user");

        socket.on('welcome', (data) => {
            console.log(data.message);
        })

        socket.on('feedmessage', (data) => {
            console.log(data.input);
            if (data.input != "") {
                let rate = parseInt(data.input);
                setback1("1." + (rate));
                setlay1("1." + ((rate) + parseInt(rateDiff)));
            }
            else {
                setback1("");
                setlay1("");
            }

        })

        socket.on('feedmessage2', (data) => {
            console.log(data.input2);
            if (data.input2 != "") {
                let rate2 = parseInt(data.input2);
                setback2("1." + (rate2));
                setlay2("1." + ((rate2) + parseInt(rateDiff)));
            }
            else {
                setback2("");
                setlay2("");
            }

        })



        return () => {
            socket.emit('disconnected');
            socket.off();
        }
    }, []);


    const Edit_diff = () => {
        var temp = document.getElementById('rate_differ').value;
        setrateDiff(temp);
        alert(rateDiff);
        document.getElementById('rate_differ').value = "";

    }



    const handleKeyPress1 = (target) => {
        var input = document.getElementById("rateA").value;
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive1 == false) {
                socket.emit('feedrate', input);
                document.getElementById("enableRateCheck").className = "switch_on";
                setrunactive1(true);
            }
            else {
                socket.emit('feedrate', "");
                document.getElementById("enableRateCheck").className = "switch_off";
                document.getElementById("rateA").value = "";
                setrunactive1(false);
            }



        }
    }

    const handleKeyPress2 = (target) => {
        var input2 = document.getElementById("rateB").value;
        if (target.charCode == 13) {
            target.preventDefault();
            if (runactive2 == false) {
                socket.emit('feedrate2', input2);
                document.getElementById("enableRate2Check").className = "switch_on";
                setrunactive2(true);
            }
            else {
                socket.emit('feedrate2', "");
                document.getElementById("enableRate2Check").className = "switch_off";
                document.getElementById("rateB").value = "";
                setrunactive2(false);
            }



        }
    }






    return (
        <React.Fragment>
            <div class="overall_desktopview">
                <div class="CricketMainHead">
                    <div class="CricketMainHeadMenu" style={{ width: '97%', justifyContent: 'left', paddingLeft: '10px', fontSize: '18px' }} >
                        <div style={{ width: '100%', float: 'left', fontSize: '15px' }} > India Vs Pakistan</div>
                    </div>
                </div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <React.Fragment>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th colspan="6" style={{ backgroundColor: '#444', color: '#fff', height: '40px', backgroundColor: '#2A3F54' }}>
                                        <div style={{ backgroundColor: '#444', color: '#fff', height: '40px', backgroundColor: '#2A3F54', paddingTop: '10px' }}>
                                            <div style={{ backgroundColor: '#444', colosr: '#fff', height: '40px', backgroundColor: '#2A3F54', width: '25%', float: 'left' }}>
                                                <div style={{ float: "left", width: '50%' }}>
                                                    <div style={{ display: 'flex', float: 'left', paddingTop: '4px' }}><span style={{ paddingTop: '5px' }}>Auto</span>&nbsp;&nbsp;
                                                        <a onClick={handleSwitched3} className={` ${(Switched3 === false) ? "switch_off" : "switch_on"}`} class="switch_on" id="enableSparkCheck1">
                                                            <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                        <span style={{ margin: '7px' }}><strong></strong></span>
                                                    </div>

                                                </div>
                                                <div style={{ float: "left", width: '50%' }}>
                                                    <div style={{ display: 'flex', float: 'left', paddingTop: '4px' }}><span style={{ paddingTop: '5px' }}>Manual</span>&nbsp;&nbsp;
                                                        <a onClick={handleSwitched4} className={` ${(Switched4 === false) ? "switch_off" : "switch_on"}`} class="switch_on" id="enableSparkCheck2">
                                                            <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                        <span style={{ margin: '7px' }}><strong></strong></span>
                                                    </div>
                                                </div>


                                            </div>

                                            <div style={{ backgroundColor: '#444', color: '#fff', height: '40px', backgroundColor: '#2A3F54', width: '25%', float: 'left' }}>
                                                <div style={{ float: 'left', paddingTop: '7px' }}>Rate difference</div>
                                                <div style={{ float: 'left', marginLeft: '5px' }}><input type="number" id="rate_differ" style={{ color: "black", height: '30px', width: '100px', paddingLeft: '10px' }} /> </div>
                                                <div onClick={() => { Edit_diff() }}> <span class="editsybmol" style={{ color: 'white' }}  ><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></span></div>
                                            </div>

                                            <div style={{ backgroundColor: '#444', color: '#fff', height: '40px', backgroundColor: '#2A3F54', width: '25%', float: 'left' }}>
                                                <div style={{ float: 'left', paddingTop: '7px' }}>Minimum</div>
                                                <div style={{ float: 'left', marginLeft: '10px' }}><input type="number" id="rate_difference" style={{ color: "black", height: '30px', width: '100px', paddingLeft: '10px' }} /> </div>

                                            </div>

                                            <div style={{ backgroundColor: '#444', color: '#fff', height: '40px', backgroundColor: '#2A3F54', width: '25%', float: 'left' }}>
                                                <div style={{ float: 'left', paddingTop: '7px' }}>Minimum</div>
                                                <div style={{ float: 'left', marginLeft: '10px' }}><input type="number" id="rate_difference" style={{ color: "black", height: '30px', width: '100px', paddingLeft: '10px' }} /> </div>

                                            </div>
                                        </div>

                                    </th>
                                </tr>
                                <tr>
                                    <th style={{ backgroundColor: '#49494A', width: '20%', background: '#2A3F54', color: 'white', textAlign: 'center' }}>RUNNER</th>
                                    <th class="bet-odds-type bet-place-tbl-th" style={{ width: "20%", background: '#2A3F54', color: 'white', textAlign: 'center' }}>Back</th>
                                    <th class="bet-odds-type bet-place-tbl-th" style={{ width: "20%", background: '#2A3F54', color: 'white', textAlign: 'center' }}>Lay</th>
                                    <th style={{ backgroundColor: '#49494A', maxWidth: '150px', width: '40%', background: '#2A3F54', color: 'white', textAlign: 'center' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: "#fff" }}>
                                    <th class="predict"><p id="runnerName">India</p></th>
                                    <td style={{ textAlign: 'center', backgroundColor: '#72bbef', fontWeight: ' bold', fontSize: '20px' }} id="1.185332043runner1BackRate">{back1}</td>
                                    <td style={{ textAlign: 'center', backgroundColor: '#faa9ba', fontWeight: ' bold', fontSize: '20px' }} id="1.185332043runner1LayRate">{lay1}</td>
                                    <td style={{ textAlign: 'left', maxWidth: '150px' }}>
                                        <form id="frmTeamA" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <input type="text" autocomplete="off" id="rateA" onKeyPress={handleKeyPress1} style={{ fontSize: '20px', border: '1px solid', height: '30px', width: '100px', paddingLeft: '10px' }} />
                                            <div style={{ display: 'flex', float: 'right', marginLeft: '15px' }}>
                                                <a onClick={handleSwitched1} className="switch_off" id="enableRateCheck">
                                                    <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                <span style={{ margin: '7px' }}><strong></strong></span>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: "#fff" }}>
                                    <th class="predict"><p id="runnerName">Pakistan</p></th>
                                    <td style={{ textAlign: 'center', backgroundColor: '#72bbef', fontWeight: 'bold', fontSize: '20px' }} id="1.185332043runner2BackRate">{back2}</td>
                                    <td style={{ textAlign: 'center', backgroundColor: '#faa9ba', fontWeight: 'bold', fontSize: '20px' }} id="1.185332043runner2LayRate">{lay2}</td>
                                    <td style={{ textAlign: 'left', maxWidth: '150px' }}>
                                        <form id="frmTeamA" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <input type="text" autocomplete="off" id="rateB" onKeyPress={handleKeyPress2} style={{ fontSize: '20px', border: '1px solid', height: '30px', width: '100px', paddingLeft: '10px' }} />
                                            <div style={{ display: 'flex', float: 'right', marginLeft: '15px' }}>
                                                <a onClick={handleSwitched2} className="switch_off" id="enableRate2Check">
                                                    <input type="hidden" id="sparkValue" value="1" /><span></span></a>
                                                <span style={{ margin: '7px' }}><strong></strong></span>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                    </React.Fragment>


                </div>

            </div>


        </React.Fragment>
    )
}

export default FeedRate


// onChange={() => {test() }}

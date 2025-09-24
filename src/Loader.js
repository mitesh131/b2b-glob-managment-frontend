import React from 'react'

export default function Loader() {
    return (
        <React.Fragment>
            <div class="bl-Preloader" id="__-plContainer">
                <div class="bl-Preloader_Header">
                    <div class="bl-Preloader_ProductHeader "></div>
                    <div class="bl-Preloader_MainHeader ">
                        <div class="bl-Preloader_MainHeaderLogo "></div>
                    </div>
                </div>
                <div class="bl-Preloader_SpinnerContainer ">
                    <div class="bl-Preloader_Spinner "></div>
                </div>
            </div>
            {/* <div style={{backgroundColor:'whitesmoke',height:'600px', width:'93%', margin:'50px', fontSize:'25px',
        fontWeight:'bold',color:'gray',justifyContent:'center',display:'flex',alignItems:'center'}}>Patience is companion of wisdom !!</div> */}
        </React.Fragment>
    )
}

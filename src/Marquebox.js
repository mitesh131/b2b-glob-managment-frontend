import React from 'react'

export const Marquebox = () => {
    return (
        <div>
           
           <div class="marquee-box" style={{ overflow: "hidden", position: "relative", top: "2px"  }}>
                <h4>News</h4>

                <marquee width="90%" direction="left" onClick={()=>{clickingr()}} >
                    <div class="js-marquee" style={{ marginRight: ' 0px', float: ' left' }}  ><span className="marquee-spn">07 Dec 2021</span>  {message} This is over exchange</div>
                </marquee>
            </div> 
        </div>
    )
}

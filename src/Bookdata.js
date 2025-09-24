import React from 'react'

export default function Bookdata() {
  return (
    <React.Fragment>
      <div id="createModal" className="pop_bg" style={{ top: 0, display: 'block' }}>
        <div className="pop_box "><a className="close_pop">close_pop</a>
          <h3>Add Bookmaker</h3>
          <ul className="half_box add-member-box">
            <li className="add_account_box">
              <dl className="border_b" style={{ textAlign: 'center', borderBottom: '0px solid #BFBFBF' }}><dt>Date</dt>
                <dd><input id="userName" type="text" placeholder="Enter" maxLength={16} defaultValue="wl1" /><span id="userNameErrorText" className="error-text" /></dd><dt>Event Name</dt>
                <dd><input id="userPassword" type="password" placeholder="Enter" defaultValue={1234} /><span id="passwordErrorText" className="error-text" /></dd><dt>Market Name</dt>
                <dd><input id="repeatPassword" type="password" placeholder="Enter" defaultValue /><span id="repeatPasswordErrorText" className="error-text" /></dd>
              </dl>
              <dl className style={{ textAlign: 'center' }}><dt>Min stack</dt>
                <dd><input id="firstName" type="text" placeholder="Enter" maxLength={16} defaultValue /><span id="firstErrorText" className="error-text" /></dd><dt>max stack</dt>
                <dd><input id="lastName" type="text" placeholder="Enter" maxLength={16} defaultValue=" " /></dd>

              </dl>
            </li>

          </ul>
          <div className="btn_box"><a id="createBtn" className="btn-send">Done</a></div>
        </div>
      </div>

    </React.Fragment>
  )
}

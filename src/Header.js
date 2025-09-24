import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios';
import "./All.css"
import { ChoosLanguage } from "./ChoosLanguage"
import PremiumFancy from "./premiumfancy/Premiumfancy";
import PremiumEvent from './premiumfancy/premiumEvent'
import { Home } from './Home';
import { Settlement } from "./Settlement"
import { Runningmarketanlysis } from './Runningmarketanlysis';
import { Cricket } from "./Cricket"
import { RollCricket } from './RollCricket'
import { TvLinkpopup } from './TvLinkpopup';
import { Soccer } from './Soccer';
import { AlertCricket } from './AlertCricket';
import { Tennis } from './Tennis';
import { DataCricket } from './DataCricket'
import { DataTennis } from './DataTennis'
import { DataSoccer } from './DataSoccer'
import { RollAnalysis } from './RollAnalysis'
import { VoidCricket } from './VoidCricket';
import { Banner } from './Banner';
import { SoccerMarket } from './SoccerMarket'
import { DataAnalysis } from './DataAnalysis';
import Fancy from './Fancy';
import { ImportBookmaker } from './ImportBookmaker';
import { FancyImport } from './FancyImport';
import { ScoreLink } from './ScoreLink';
import { BookMaker } from './BookMaker';
import { Manage } from './Manage';
import { OddLimitPopup } from './OddLimitPopup';
import Login from './Login';
import BetMonitoring from './BetMonitoring';
import Settlematches from './Settlematches';
import Reverse from './Reverse';
import ManualMarket from './ManualMarket';
import Feedratemakte from './Feedratemakte';
import FeedRate from './FeedRate';
import SettledAllMarket from './SettledAllMarket'
import FeedrateFancy from './FeedrateFancy';
import queryString from 'query-string';
import PremiumReverseEvents from "./premiumfancy/premiumReverseEvents";
import PremiumReverseDetail from "./premiumfancy/PremiumReverseDetail";
import Settings from "./settings";


const cookies = new Cookies();



export function detectMobile() {
  var check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

var isMobile = detectMobile();


export const Header = (props) => {
  var eventT = 2;
  if (props.match.params.eventType === 'Settlement') { eventT = 1; }
  if (props.match.params.eventType === 'Cricket') { eventT = 2; }
  if (props.match.params.eventType === 'Soccer') { eventT = 3; }
  if (props.match.params.eventType === 'Tennis') { eventT = 4; }
  if (props.match.params.eventType === 'Runningmarketanlysis') { eventT = 5; }
  if (props.match.params.eventType === 'BetMonitoring') { eventT = 8; }
  if (props.match.params.eventType === 'DataSoccer') { eventT = 9; }
  if (props.match.params.eventType === 'DataTennis') { eventT = 10; }
  if (props.match.params.eventType === 'RollCricket') { eventT = 11; }
  if (props.match.params.eventType === 'AlertCricket') { eventT = 14; }
  if (props.match.params.eventType === 'VoidCricket') { eventT = 23; }
  if (props.match.params.eventType === 'EventCricket') { eventT = 26; }
  if (props.match.params.eventType === 'SoccerMarket') { eventT = 27; }
  if (props.match.params.eventType === 'DataAnalysis') { eventT = 28; }
  if (props.match.params.eventType === 'RollAnalysis') { eventT = 29; }
  if (props.match.params.eventType === 'Fancy') { eventT = 31; }
  if (props.match.params.eventType === 'BookMaker') { eventT = 32; }
  if (props.match.params.eventType === 'Manage') { eventT = 33; }
  if (props.match.params.eventType === 'FancyImport') { eventT = 34; }
  if (props.match.params.eventType === 'ImportBookmaker') { eventT = 35; }
  if (props.match.params.eventType === 'Settlementt') { eventT = 36; }
  if (props.match.params.eventType === 'Settlematch') { eventT = 37; }
  if (props.match.params.eventType === 'Reverse') { eventT = 38; }
  if (props.match.params.eventType === 'ManualMarket') { eventT = 39; }
  if (props.match.params.eventType === 'Feedratemakte') { eventT = 40; }
  if (props.match.params.eventType === 'Feedrate') { eventT = 41; }
  if (props.match.params.eventType === 'SettledAllMarket') { eventT = 42; }
  if (props.match.params.eventType === 'FeedrateFancy') { eventT = 43; }
  if (props.match.params.eventType === 'PremiumFancy') { eventT = 44; }
  if (props.match.params.eventType === 'PremiumEvent') { eventT = 45; }
  if (props.match.params.eventType === 'premiumreverseevents') { eventT = 46; }
  if (props.match.params.eventType === 'premiumreversedetails') { eventT = 47; }


  if (props.match.params.eventType === 'Banner') { eventT = 51; }

  if (props.match.params.eventType === 'settings') { eventT = 52; }






  const [isLoggedIn, setLoggedIn] = useState(null);
  const [tabMenu, setTabMenu] = useState(eventT);
  const [user, setuser] = useState('');
  const [TvClick, setTvClick] = useState(false)
  const [ScoreClick, setScoreClick] = useState(false)
  const [OddLimitClick, setOddLimitClick] = useState(false)
  const [tvindex, settvindex] = useState("")
  const [eventt_iidd, seteventt_iidd] = useState("");
  const [countofsportlist, setcountofsportlist] = useState()
  const [E_id_socre, setE_id_socre] = useState("")
  const [E_id_index, setE_id_index] = useState("")


  const checkShowLogin = (bool) => { setLoggedIn(bool); }
  const OddLimitOpen = () => { setOddLimitClick(true) }
  const OddLimitClose = () => { setOddLimitClick(false) }
  //const ScoreClickOpen = () => { setScoreClick(true) }
  const ScoreClickClose = () => { setScoreClick(false) }
  const TvClickClose = () => { setTvClick(false) }
  const TvClickOpen = (index, bool, eid) => {
    setTvClick(bool)
    seteventt_iidd(eid);
    settvindex(index)
  }

  const ScoreClickOpen = (index, bool, e_id) => {
    setE_id_socre(e_id)
    setScoreClick(bool)
    setE_id_index(index);
    alert(e_id);

  }

  useEffect(() => {
    setTabMenu(eventT);
  }, [eventT]);


  useEffect(() => {
    if (cookies.get('sid')) {
      setLoggedIn(true);
      var ssid = cookies.get('sid');
      axios.post('https://liveapi247.live/api4/MatchManagerInfo', {
        sid: ssid
      }).then(result => {
        if (result.status === 200) {
          setuser(result.data.id)
          //console.log(result.data);
        } else {
          setLoggedIn(false);
          cookies.remove('sid', { path: '/' });
        }
      }).catch(e => { });
    } else { setLoggedIn(false); }
  }, [isLoggedIn]);



  return (
    <React.Fragment>

      {isLoggedIn === false &&
        <Login checkShowLogin={checkShowLogin} />}


      {isLoggedIn === true &&
        <div className="container body" style={{ height: '100%' }}>
          <div className="main_container" style={{ height: '100%' }}>
            <ChoosLanguage />
            <div id="page">

              <nav id="ac-globalnav" className="js no-touch no-windows no-firefox">
                <div className="ac-gn-content">
                  <ul className="ac-gn-list" >
                    <li className="ac-gn-item ac-gn-apple">
                      <Link to="/settings" id="settings" className={`${tabMenu === 52 ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} >Settings</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-apple">
                      <Link to="/Cricket" id="menu_my_report" className={`${(tabMenu === 2 || tabMenu === 3 || tabMenu === 4) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} >Sports</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-store">
                      <Link to="/Settlement" className={`${(tabMenu === 1 || tabMenu === 6 || tabMenu === 7 || tabMenu === 5) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} >Event Management</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-store">
                      <Link to={`/PremiumEvent?${queryString.stringify({sportsId: 4})}`} className={`ac-gn-link ${(tabMenu === 44 || tabMenu === 45) ? 'ac-gn-link-apple-active' : "ac-gn-link ac-gn-link-apple"}`} >Premium</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-store">
                      <Link to={`/premiumreverseevents?${queryString.stringify({sportsId: 4})}`} className={`ac-gn-link ${(tabMenu === 46 || tabMenu === 47) ? 'ac-gn-link-apple-active' : "ac-gn-link ac-gn-link-apple"}`}> Premium Reverse</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-store">
                      <Link to="/Manage" className={`${(tabMenu === 33 || tabMenu === 34 || tabMenu === 35) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} > Manage</Link>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-store">
                      <a href="/BetMonitoring" className={`${(tabMenu === 8 || tabMenu === 28) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`}  >Bets Monitoring </a>
                    </li>

                    <li className="ac-gn-item ac-gn-item-menu ac-gn-ipad">
                      <a className={`${(tabMenu === 11 || tabMenu === 12 || tabMenu === 13 || tabMenu === 29 || tabMenu === 38) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple "}`} href="/RollCricket" >Roll Back</a>
                    </li>
                    <li className="ac-gn-item ac-gn-item-menu ac-gn-iphone">
                      <a className={`${(tabMenu === 14 || tabMenu === 15 || tabMenu === 16 || tabMenu === 30) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} href="/AlertCricket" > Alert Bets </a>
                    </li>

                    <li className="ac-gn-item ac-gn-item-menu ac-gn-tvhome">
                      <a className={`${(tabMenu === 23 || tabMenu === 24 || tabMenu === 25) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} href="/VoidCricket" > Settlement </a>
                    </li>

                    <li className="ac-gn-item ac-gn-item-menu ac-gn-iphone">
                      <a className={`${(tabMenu === 51) ? "ac-gn-link ac-gn-link-apple-active" : "ac-gn-link ac-gn-link-apple"}`} href="/Banner" > Banner </a>
                    </li>

                    <li class="ac-gn-link ac-gn-link-apple-btn123 " style={{ height: '38px' }}><a class="ac-gn-link ac-gn-link-apple" data-tabtarget="banner" data-tabparent="past" onClick={() => { cookies.remove('sid', { path: '/' }); setTimeout(() => { window.location.href = '/'; }, 200); }} >Logout</a></li>


                  </ul>
                  <aside id="ac-gn-searchview" className="ac-gn-searchview" role="search" data-analytics-region="search">
                    <div className="ac-gn-searchview-content">
                      <div className="ac-gn-searchview-bar">
                        <div className="ac-gn-searchview-bar-wrapper">
                          <form id="ac-gn-searchform" className="ac-gn-searchform" action="/in/search" method="get">
                            <div className="ac-gn-searchform-wrapper">
                              <input id="ac-gn-searchform-input" className="ac-gn-searchform-input" type="text" aria-label="Search apple.com" placeholder="Search apple.com" autoCorrect="off" autoCapitalize="off" autoComplete="off" spellCheck="false" role="combobox" aria-autocomplete="list"
                                aria-expanded="true" aria-owns="quicklinks suggestions" />
                              <input id="ac-gn-searchform-src" type="hidden" name="src" defaultValue="globalnav" />
                              <button id="ac-gn-searchform-submit" className="ac-gn-searchform-submit" type="submit" disabled aria-label="Submit Search"> </button>
                              <button id="ac-gn-searchform-reset" className="ac-gn-searchform-reset" type="reset" disabled aria-label="Clear Search">
                                <span className="ac-gn-searchform-reset-background" />
                              </button>
                            </div>
                          </form>
                          <button id="ac-gn-searchview-close-small" className="ac-gn-searchview-close ac-gn-searchview-close-small" aria-label="Cancel Search">
                            <span className="ac-gn-searchview-close-cancel" aria-hidden="true">
                              Cancel
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button id="ac-gn-searchview-close" className="ac-gn-searchview-close" aria-label="Cancel Search">
                      <span className="ac-gn-searchview-close-wrapper">
                        <span className="ac-gn-searchview-close-left" />
                        <span className="ac-gn-searchview-close-right" />
                      </span>
                    </button>
                  </aside>
                  <aside className="ac-gn-bagview" data-analytics-region="bag">
                    <div className="ac-gn-bagview-scrim">
                      <span className="ac-gn-bagview-caret ac-gn-bagview-caret-small" />
                    </div>
                    <div className="ac-gn-bagview-content" id="ac-gn-bagview-content">
                    </div>
                  </aside>
                </div>
              </nav>

            </div>
            <div className="right_col" role="main" style={{ height: '100%' }}>

              {tabMenu === 1 && <Settlement EventT={props.match.params.eventT} tabMenu={tabMenu} />}
              {tabMenu === 2 && <Cricket tabMenu={tabMenu} setcountofsportlist={setcountofsportlist} />}
              {tabMenu === 3 && <Soccer tabMenu={tabMenu} />}
              {tabMenu === 4 && <Tennis tabMenu={tabMenu} />}
              {tabMenu === 5 && <Runningmarketanlysis />}
              {tabMenu === 8 && <BetMonitoring tabMenu={tabMenu} />}
              {tabMenu === 9 && <DataSoccer tabMenu={tabMenu} />}
              {tabMenu === 10 && <DataTennis tabMenu={tabMenu} />}
              {tabMenu === 11 && <RollCricket tabMenu={tabMenu} />}
              {tabMenu === 14 && <AlertCricket tabMenu={tabMenu} />}
              {tabMenu === 23 && <VoidCricket tabMenu={tabMenu} />}
              {tabMenu === 27 && <SoccerMarket tabMenu={tabMenu} />}
              {tabMenu === 28 && <DataAnalysis tabMenu={tabMenu} />}
              {tabMenu === 29 && <RollAnalysis tabMenu={tabMenu} />}
              {tabMenu === 31 && <Fancy tabMenu={tabMenu} />}
              {tabMenu === 45 && <PremiumEvent {...props} />}
              {tabMenu === 32 && <BookMaker tabMenu={tabMenu} />}
              {tabMenu === 33 && <Manage OddLimitOpen={OddLimitOpen} TvClickOpen={TvClickOpen} tabMenu={tabMenu} ScoreClickOpen={ScoreClickOpen} />}
              {tabMenu === 34 && <FancyImport tabMenu={tabMenu} />}
              {tabMenu === 35 && <ImportBookmaker tabMenu={tabMenu} />}
              {tabMenu === 37 && <Settlematches tabMenu={tabMenu} />}
              {tabMenu === 38 && <Reverse tabMenu={tabMenu} />}
              {tabMenu === 39 && <ManualMarket tabMenu={tabMenu} />}
              {tabMenu === 40 && <Feedratemakte tabMenu={tabMenu} />}
              {tabMenu === 41 && <FeedRate tabMenu={tabMenu} />}
              {tabMenu === 42 && <SettledAllMarket tabMenu={tabMenu} />}
              {tabMenu === 43 && <FeedrateFancy tabMenu={tabMenu} />}
              {tabMenu === 44 && <PremiumFancy />}
              {tabMenu === 46 &&  <PremiumReverseEvents/>}
              {tabMenu === 47 && <PremiumReverseDetail/>}
              {tabMenu === 51 && <Banner tabMenu={tabMenu} />}
              {tabMenu === 52 && <Settings />}

              {OddLimitClick === true && <OddLimitPopup OddLimitClose={OddLimitClose} />}
              {TvClick === true && <TvLinkpopup TvClickClose={TvClickClose} eventt_iidd={eventt_iidd} tvindex={tvindex} />}
              {ScoreClick === true && <ScoreLink ScoreClickClose={ScoreClickClose} E_id_index={E_id_index} E_id_socre={E_id_index} />}

            </div>
          </div>
        </div>}




    </React.Fragment>
  )
}

import { Logo } from "../Header/Header";
import Msg from "../Msg/Msg";
import "./Display.css";

function Display() {
  return (
    <>
      <div className="display">
        <div className="parent">
          <div className="div1">
            <form class="nosubmit">
              <input class="nosubmit" type="search" placeholder="Search..." />
            </form>
            <div className="fnds">
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
              <Allfnds />
            </div>
          </div>
          <div className="div2">
            <div className="msg">
              <Msg/>
            </div>
          </div>

          {/* <div className="div3"> </div> */}
          <div className="div4">
            <div className="sendbar">
            <i class="fa-regular fa-face-smile"></i>
              <input type="text" placeholder="Enter Your Messages! " />
              <i class="fa-solid fa-microphone"></i>
            </div>
             </div>
        </div>
      </div>
    </>
  );
}
export default Display;

export function Allfnds() {
  return (
    <>
      <div className="allfnd">
        <div className="fndcontent">
          <div className="nameandlstmsg">
            <Logo></Logo>
            <div className="logoandname">
              <h3>Your Fnd <span className="active"><i class="fa-solid fa-circle"></i></span></h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <p className="timeing">17:54</p>
        </div>
      </div>
    </>
  );
}
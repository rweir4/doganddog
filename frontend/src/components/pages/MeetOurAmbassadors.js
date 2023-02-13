import React from "react";
import Ambassadors from "../socialMedia/ambassadors";

const MeetOurAmbassadors = () => {
  return (
    <div id='page-content' className='ambassadors font-title extra-spacing'>
      {/* <div className='space-before'>Meet Our Ambassadors</div> */}
      <div className='space-before space-after'>
        We're launching an ambassador program!
      </div>
      <Ambassadors />
    </div>
  );
};

export default MeetOurAmbassadors;
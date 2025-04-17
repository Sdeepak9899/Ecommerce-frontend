/** @format */
'use client';
import { useState } from 'react';
import Top from './Content';
import COntentImage from './ContentImages2';
import SidebarNav from './Siderbar';
import COntentImage1 from './ContentImage1';
import COntentImage2 from './ContentImages2';
import COntentImage3 from './ContentImage3';
import COntentImage4 from './ContentImage4';

export default function ContentIndex() {
  const [pageSelect, setPageSelect] = useState(1);
  return (
    <div className="flex">
      <div>
        <SidebarNav />
      </div>
      <div className="flex flex-col  flex-wrap ">
        <Top pageSelect={pageSelect} setPageSelect={setPageSelect} />
        {pageSelect === 0 && <COntentImage1 />}
        {pageSelect === 1 && <COntentImage2 />}
        {pageSelect === 2 && <COntentImage3 />}
        {pageSelect === 3 && <COntentImage4 />}
        {/* <COntentImage /> */}
        {/* <COntentImage1 /> */}
        {/* <COntentImage3/> */}
        {/* <COntentImage4 /> */}
      </div>
    </div>
  );
}

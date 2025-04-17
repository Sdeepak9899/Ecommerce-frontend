/** @format */
import Top from './Content';
import COntentImage from './ContentImages';
import SidebarNav from './Siderbar';

export default function ContentIndex() {
  return (
    <div className="flex">
      <div>
        <SidebarNav />
      </div>
      <div className="flex flex-col  flex-wrap ">
        <Top  />
        <COntentImage />
      </div>
    </div>
  );
}

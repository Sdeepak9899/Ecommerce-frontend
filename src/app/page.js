/** @format */

import SimpleSlider from '@/components/home/best_seller';
import Cart from '@/components/home/cart';
import Follow from '@/components/home/follow';
import MultipleItems from '@/components/home/Shop';
// import Testimonials from '@/components/home/testimonials';
import Video from '@/components/home/video';

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col gap-10">
      <Cart />
      <MultipleItems />
      <Video />
      <SimpleSlider />
      <Follow />
      {/* <Testimonials /> */}
    </div>
  );
}

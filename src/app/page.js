/** @format */

import Cart from '@/components/home/cart';
import Follow from '@/components/home/follow';
import MultipleItems from '@/components/home/Shop';
import Video from '@/components/home/video';

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col gap-10">
      <Cart />
      <MultipleItems />
      <Video />
      <Follow />
    </div>
  );
}

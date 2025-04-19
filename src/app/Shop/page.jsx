/** @format */

import ContentIndex from '@/components/shop/contentIndex';
import ShopHero from '@/components/shop/ShopHero';
import SidebarNav from '@/components/shop/Siderbar';

export default function Pages() {
  return (
    <div>
      <ShopHero />
      <div className="flex px-2 sm:px-4">
        <ContentIndex />
      </div>
    </div>
  );
}

/** @format */

import ContactBody from '@/components/contact/Details';
import Hero from '@/components/contact/Hero';
import Contactmap from '@/components/contact/Map';

export default function Pages() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <div className="w-[95%]">
        <Contactmap />
        <ContactBody />
      </div>
    </div>
  );
}

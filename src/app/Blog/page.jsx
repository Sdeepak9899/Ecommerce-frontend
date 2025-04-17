/** @format */

import BlogHero from '@/components/blog/BlogHero';
import Blogbody_img from '@/components/blog/Content';
import Blog_sidebar from '@/components/blog/sidebar';

export default function Blog() {
  return (
    <div className="flex flex-col items-center">
      <BlogHero />
      <div className="flex xl:m-8 max-lg:flex-col-reverse gap-5 max-lg:m-6 max-md:4 lg:m-4">
        <Blog_sidebar />
        <Blogbody_img />
      </div>
    </div>
  );
}

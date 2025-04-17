/** @format */

export default function Content() {
  return (
    <div className="flex flex-col m-12 justify-center items-center flex-wrap max-lg:m-10 max-md:m-8 max-sm:m-6">
      <div className="rounded-3xl overflow-hidden">
        <img
          src="/aboutus/about-us-top.jpg"
          alt="About Us"
          className="w-full h-auto"
        />
      </div>

      <div className="text-center mt-4 flex flex-col justify-center items-center flex-wrap m-12 max-lg:m-8 max-md:m-6 max-sm:m-2">
        <h2 className="text-4xl font-semibold">
          Dress to Impress: Mastering the Art of Personal Style
        </h2>
        <p className="text-lg mt-2 w-full">
          Fashion trends can be understood as changes in the clothing style of
          the majority of people in a country or around the world. In
          particular, these changes create influence that causes others to
          follow suit. Usually, fashion trends often originate from experts,
          famous designers or popular trends according to the tastes of the
          crowd…
        </p>
      </div>

      <div className="flex justify-center gap-12 m-14 max-lg:m-10 max-md:flex-col max-md:items-center max-sm:m-6 max-md:text-center">
        <div className="w-2/4 flex flex-col justify-center gap-4 max-md:w-full max-md:gap-0">
          <h2 className="text-4xl font-semibold">Fashion trends 2023</h2>
          <p>
            With fashion trends constantly changing, many trends can appear at
            the same time. But only a few can become prominent and well known.
            Sometimes, fashion trends are only in a small aspect, for example:
            Matching clothes in the same color tone
          </p>
        </div>
        <div className="w-2/4 rounded-2xl max-md:w-full">
          <img
            src="/aboutus/about-Fashion trends.jpg"
            alt="Fashion Trends"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

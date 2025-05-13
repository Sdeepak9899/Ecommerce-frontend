/** @format */

'use client';

import Slider from 'react-slick';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
          dots: true,
        },
      },
    ],
  };

  const sliderData = [
    {
      title: ['Unveiling', "This Season's", 'Fashion'],
      description: 'Shop now',
      imageSrc:
        'https://bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-1.jpg',
      alt: 'Fashion Model',
      id: 1,
    },
    {
      title: ['This is A', 'Long Open', 'Robe'],
      description: 'Shop now',
      imageSrc:
        'https://bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-2.jpg',
      alt: 'Fashion Model 1',
      id: 2,
    },
    {
      title: ['Epitome', "Of The Big's 2", 'Sweater'],
      description: 'Shop now',
      imageSrc:
        'https://bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-3.jpg',
      alt: 'Fashion Model 2',
      id: 3,
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {sliderData.map((item) => (
          <div key={item.id} className="relative w-full min-h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageSrc})` }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20">
              {item.title.map((line, idx) => (
                <h2
                  key={idx}
                  className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
                >
                  {line}
                </h2>
              ))}
              <p className="mt-4 text-base sm:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;

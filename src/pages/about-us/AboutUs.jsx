import React from 'react'
import  { useState } from 'react';
import Layout from '../../components/Layout';

const pillarsData = [
  {
    title: "Evangelism & Mission",
    scripture1: "“We Exist to Communicate God’s Word”",
    scripture2:
      "“God’s purpose in all this was to use the church to display his wisdom in its rich variety.” – Ephesians 3:10 NLT",
    description:
      "PHM is a church built on a noble mandate of bringing souls back to Jesus Christ (Matthew 28:18-20). We recognize the urgency and importance of bringing the light of Christ to Rwanda and other nations without a viable Church. We respond to that great mandate through the L.I.G.H.T model:",
    list: [
      "Leading people to Christ through proclamation, evangelism and church planting",
      "Instilling Christian values in leaders",
      "Giving support and empowering the poor",
      "Healing and Caring for the sick",
      "Teaching the next generation",
    ],
  },
  {
    title: "Discipleship",
    description:
      "Growing believers to spiritual maturity and equipping them to live out their faith daily.",
  },
  {
    title: "Fellowship",
    description:
      "Building a loving community where people support, encourage, and strengthen each other in Christ.",
  },
  {
    title: "Ministry",
    description:
      "Serving others with compassion and using our God-given gifts to impact the world.",
  },
  {
    title: "Worship",
    description:
      "Honoring God in spirit and truth through prayer, music, and a lifestyle of devotion.",
  },
];

const AboutUs = () => {
      const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Layout>
           <section className="relative h-[50vh] w-full">
        <img
          src="/src/assets/nav.jpg" 
          alt="Church background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-6 left-6 z-10 text-white ml-6 mb-6">
          <h2 className="text-3xl font-bold">Who we Are</h2>
          <p className="text-sm">ABOUT US | WHO WE ARE</p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-12'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Story</h2>
        <div className='grid md:grid-cols-3 gap-6'>
            <div className='col-span-1'>
                <h4 className='text-lg font-medium text-gray-600'>Why we Started it?</h4> </div>
                <div className='col-span-2 space-y-4 text-gray-700 leading-relaxed'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              ultricies sapien, nec finibus eros. Vestibulum condimentum commodo
              aliquam. Donec ultricies, tortor nec pharetra imperdiet, mi mauris
              pellentesque risus, in tincidunt dui quam sed ipsum. Vivamus sit
              amet magna et elit viverra facilisis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              ultricies sapien, nec finibus eros. Vestibulum condimentum commodo
              aliquam. Donec ultricies, tortor nec pharetra imperdiet, mi mauris
              pellentesque risus, in tincidunt dui quam sed ipsum. Vivamus sit
              amet magna et elit viverra facilisis.</p>
                </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 border-t pt-12'>
        <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Vision Statement</h3>
            <p className='italic text-gray-600 mb-2'>“Seeing broken lives restored, transformed and shaped to fulfill
            God’s Purposes.” – Jeremiah 18:1–6</p>
        </div>

        <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Mission Statement</h3>
            <p className='text-gray-700 leading-relaxed'>  The Vision is accomplished through Preaching of the Gospel
            (Evangelism), Building God’s Family (Fellowship), Maturing &amp;
            Equipping the Saints (Discipleship), Loving and Caring for the
            Hurting World (Ministry) as a way of Fulfilling God’s Purpose
            (Worship).</p>
        </div>
      </section>

       <section className="max-w-6xl mx-auto px-6 py-12 border-t pt-12">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 relative">
        Pillars
        <div className="w-16 h-1 bg-secondary-500 mx-auto mt-2 rounded"></div>
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left side - list of pillars */}
        <div className="flex flex-col space-y-4">
          {pillarsData.map((pillar, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "text-secondary-500 border-l-4 border-secondary-500 pl-3"
                  : "text-gray-800 hover:text-secondary-500"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Right side - active pillar content */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xl font-semibold text-secondary-500">
            {pillarsData[activeIndex].title}
          </h4>

          {pillarsData[activeIndex].scripture1 && (
            <p className="italic text-gray-700">
              {pillarsData[activeIndex].scripture1}
            </p>
          )}
          {pillarsData[activeIndex].scripture2 && (
            <p className="italic text-gray-700">
              {pillarsData[activeIndex].scripture2}
            </p>
          )}

          <p className="text-gray-700">{pillarsData[activeIndex].description}</p>

          {pillarsData[activeIndex].list && (
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              {pillarsData[activeIndex].list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default AboutUs
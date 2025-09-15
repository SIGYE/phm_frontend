import React from 'react'
import Layout from '../../components/Layout';
import { useState } from "react";

const ministriesData = [
  {
    title: "Children’s Ministry",
    scripture: `“And these words that I command you today shall be on your heart. 
    You shall teach them diligently to your children, and shall talk of them when 
    you sit in your house, and when you walk by the way, and when you lie down, 
    and when you rise.” – Deuteronomy 6:6-7 ESV`,
    description: `God has continued to bless PHM Members with families and children. 
    This comes with a responsibility of creating a conducive environment for the children 
    to learn about God, interact with the world through play and grow into what God intended 
    them to be. We have an English Sunday school for our first service and a Kinyarwanda 
    Sunday school for second service.`,
  },
  {
    title: "CLAY – Christ Life Among Youth",
    scripture: "1 Timothy 4:12 – Let no one despise you for your youth...",
    description: `The youth ministry empowers young believers to grow in faith, 
    serve God, and be examples in their communities.`,
  },
  {
    title: "Couples' Ministry",
    scripture: "Ephesians 5:31 – Therefore a man shall leave his father and mother...",
    description: `This ministry focuses on building strong marriages rooted in God’s Word.`,
  },
  {
    title: "Teens Ministry",
    scripture: "Jeremiah 29:11 – For I know the plans I have for you...",
    description: `Equipping teenagers with biblical truth and helping them grow in Christ.`,
  },
  {
    title: "Men of Integrity",
    scripture: "Proverbs 27:17 – Iron sharpens iron, and one man sharpens another.",
    description: `Men gather to build one another up in faith and integrity.`,
  },
  {
    title: "Virtuous Women",
    scripture: "Proverbs 31:30 – Charm is deceptive, and beauty is fleeting...",
    description: `Women are equipped to grow spiritually, serve their families and community.`,
  },
  {
    title: "Ladies of Destiny",
    scripture: "Jeremiah 1:5 – Before I formed you in the womb I knew you...",
    description: `Helping ladies discover and walk in their God-given purpose.`,
  },
  {
    title: "Young Men",
    scripture: "1 John 2:14 – I write to you, young men, because you are strong...",
    description: `Empowering young men to be godly leaders in church and society.`,
  },
];

const Ministries = () => {
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
          <h2 className="text-3xl font-bold">Ministries</h2>
          <p className="text-sm">ABOUT US | MINISTRIES</p>
        </div>
      </section>

       <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
      <aside className="space-y-4">
        <ul className="space-y-3 font-medium text-gray-700">
          {ministriesData.map((ministry, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "text-secondary-500 font-semibold border-l-4 border-secondary-500 pl-2"
                  : "hover:text-secondary-500"
              }`}
            >
              {ministry.title}
            </li>
          ))}
        </ul>
      </aside>

      <div className="md:col-span-2 space-y-6">
        <blockquote className="border-l-4 border-secondary-500 pl-4 italic text-gray-700 text-[17px]">
          {ministriesData[activeIndex].scripture}
        </blockquote>

        <p className="text-gray-700 leading-relaxed text-[17px]">
          {ministriesData[activeIndex].description}
        </p>
      </div>
    </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
  <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
    Gallery
    <div className="w-16 h-1 bg-secondary-500 mx-auto mt-2 rounded"></div>
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src="/src/assets/ministry1.jpg"
        alt="Easter Sunday"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
        <p className="text-sm text-gray-200">5th April 2025</p>
        <h3 className="font-semibold text-white">Easter Sunday</h3>
      </div>
    </div>

    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src="/src/assets/ministry2.jpg"
        alt="Easter Sunday"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
        <p className="text-sm text-gray-200">5th April 2025</p>
        <h3 className="font-semibold text-white">Easter Sunday</h3>
      </div>
    </div>

    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src="/src/assets/ministry3.jpg"
        alt="Easter Sunday"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
        <p className="text-sm text-gray-200">5th April 2025</p>
        <h3 className="font-semibold text-white">Easter Sunday</h3>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}

export default Ministries
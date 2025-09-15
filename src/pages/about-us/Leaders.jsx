import React from 'react'
import Layout from '../../components/Layout'
import JimmySandra from '../../assets/JimmySandra.png'
import leader1 from '../../assets/leader1.png'
import leader2 from '../../assets/leader2.png'
import leader3 from '../../assets/leader3.png'
import leader4 from '../../assets/leader4.png'
import leader5 from '../../assets/leader5.png'
import nav from '../../assets/nav.jpg';

const leadersData = [
  {
    id: 1,
    name: "James & Sandra MUYANGO",
    title: "Sr. Leadership",
    verse: "“...Do all that you have in mind. Go ahead; I am with you heart and soul.” – 1 Samuel 14:6",
    description: "We believe that God has called us to lead and guide His people with love and humility.",
    image: JimmySandra,
  },
  {
    id: 2,
    name: "Emmanuel Amani & Belinda KAYITABA",
    title: "Missions & Evangelism",
    description:
      "We strive to obey the great commission (Matthew 28:19–20) by reaching nations with the love and truth of Christ.",
    image: leader1,
  },
  {
    id: 3,
    name: "Ps. Deo & M. Therese MUVUNYI",
    title: "Fellowship",
    description:
      "We believe in building God’s family and welcome you to find a home with us.",
    image: leader2,
  },
{
    id: 4,
    name: "Ps. Deo & M. Therese MUVUNYI",
    title: "Fellowship",
    description:
      "We believe in building God’s family and welcome you to find a home with us.",
    image: leader3,
  },
  {
    id: 5,
    name: "Ps. Hyacinthe & Emelyne Rukeribuga",
    title: "Ministry",
    description:
      "We believe that every believer is called to serve God. Therefore we use our time, talents, and resources to serve God’s people.",
    image: leader4,
  },
  {
    id: 6,
    name: "Brother Emmanuel & Clarisse Rwagasana",
    title: "Worship",
    description:
      "We believe that worship is how we express our love to God and prepare our hearts to receive His Word.",
    image: leader5,
  },
];

const Leaders = () => {
  return (
   <Layout>
    <section className="relative h-[50vh] w-full">
        <img
          src={nav}
          alt="Connect Group Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-6 left-6 z-10 text-white ml-6 mb-6">
          <h2 className="text-3xl font-bold">Leadership</h2>
          <p className="text-sm">ABOUT US | LEADERSHIP</p>
        </div>
      </section>


     <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Leadership
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadersData.map((leader) => (
            <div
              key={leader.id}
              className="relative bg-white shadow-md overflow-hidden"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[500px] object-cover"
              />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-secondary-50 bg-opacity-95 p-4 rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105">
  <h3 className="text-lg font-semibold text-gray-900 text-center">
    {leader.name}
  </h3>
  <p className="text-sm text-primary-500 font-medium text-center">
    {leader.title}
  </p>
                {leader.verse && (
                  <p className="text-sm italic text-gray-700 mt-2">
                    {leader.verse}
                  </p>
                )}
                <p className="text-sm text-gray-700 mt-2">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
   </Layout>
  )
}

export default Leaders
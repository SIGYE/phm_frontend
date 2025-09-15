import React from 'react'
import Layout from '../../components/Layout';
import connect1 from '../../assets/connect1.png';

const ConnectGroup = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <img
          src="/src/assets/nav.jpg"
          alt="Connect Group Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-6 left-6 z-10 text-white ml-6 mb-6">
          <h2 className="text-3xl font-bold">Connect Groups</h2>
          <p className="text-sm">ABOUT US | CONNECT GROUPS</p>
        </div>
      </section>

    {/* What They Are */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="inline-block">
    <h2 className="text-2xl font-bold text-gray-900">What They Are</h2>
    <div className="w-16 h-1 bg-secondary-500 mt-1"></div>
  </div>
  
  <p className="italic text-gray-600 text-sm mt-6 mb-6">
    “They worshiped together in the temple each day and met in their homes …” – Acts 2:46
  </p>
  <p className="text-gray-700 leading-relaxed">
    As the church grows, we don’t want to become impersonal but rather a place where every member belongs
    and connects with the rest of the body of Christ. Connect Groups are small gatherings of 10 people
    where there is an opportunity to know and love one another, to connect people to God for a deeper,
    personal relationship with Him. Together they reach out to non-believers in their circles of influence
    with this good news of forgiveness and reconciliation to God through Christ.
  </p>
</section>

{/* In a Connect Group */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="inline-block mb-6">
    <h2 className="text-xl font-bold text-gray-900">In a Connect Group</h2>
    <div className="w-16 h-1 bg-secondary-500 mt-1"></div>
  </div>

  <ul className="space-y-3 text-gray-700 list-disc list-inside">
    <li>We do bible study together and learn from each other <span className="font-medium">(Discipleship)</span></li>
    <li>We plan outreach activities to share the gospel <span className="font-medium">(Evangelism)</span></li>
    <li>We have moments to know, encourage and support one another <span className="font-medium">(Fellowship)</span></li>
    <li>We have moments of praying and worshipping God <span className="font-medium">(Worship)</span></li>
    <li>CG members have an opportunity to serve and grow in their giftings <span className="font-medium">(Ministry)</span></li>
  </ul>
</section>


      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          Gallery
          <div className="w-16 h-1 bg-secondary-500 mx-auto mt-2 rounded"></div>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={connect1}
              alt="Connect Group"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={connect1}
              alt="Connect Group"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={connect1}
              alt="Connect Group"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ConnectGroup

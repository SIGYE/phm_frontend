import React from 'react'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const sermons = [
    {
        id: 1,
        title: "The Power of Faith",
        date: "5th June 2025",
        image: "/src/assets/sermon1.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "What's Life after Death?",
        date: "5th June 2025",
        image: "/src/assets/sermon2.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Jesus Came to bring Joy",
        date: "5th June 2025",
        image: "/src/assets/sermon3.jpg",
        link: "#",
    },
       {
        id: 4,
        title: "The Power of Faith",
        date: "5th June 2025",
        image: "/src/assets/sermon1.jpg",
        link: "#",
    },
       {
        id: 5,
        title: "What's Life after Death",
        date: "5th June 2025",
        image: "/src/assets/sermon2.jpg",
        link: "#",
    },
       {
        id: 6,
        title: "Jesus Came to bring Joy",
        date: "5th June 2025",
        image: "/src/assets/sermon3.jpg",
        link: "#",
    },
       {
        id: 7,
        title: "The Power of Faith",
        date: "5th June 2025",
        image: "/src/assets/sermon1.jpg",
        link: "#",
    },
    {
        id: 8,
        title: "What's Life after Death?",
        date: "5th June 2025",
        image: "/src/assets/sermon2.jpg",
        link: "#",
    },
    {
        id: 9,
        title: "Jesus Came to bring Joy",
        date: "5th June 2025",
        image: "/src/assets/sermon3.jpg",
        link: "#",
    }
];

const Sermons = () => {
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
          <h2 className="text-3xl font-bold">Latest Sermons</h2>
          <p className="text-sm">HOME | SERMONS</p>
        </div>
      </section>

    
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className='relative group overflow-hidden rounded-lg shadow-lg'
            >
              <img
                src={sermon.image}
                alt={sermon.title}
                className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4'>
                <p className='text-sm text-gray-200'>{sermon.date}</p>
                <h3 className='text-lg font-semibold text-white'>{sermon.title}</h3>
                <a href={sermon.link} className='text-orange-400 text-sm font-medium mt-1 hover:underline'>
                  Watch Sermon
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
            href="https://www.youtube.com"
            target='_blank'
            className='text-orange-700 hover:underline font-medium'
          >
            Visit our Youtube Channel for more
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Sermons
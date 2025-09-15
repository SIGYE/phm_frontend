import React from 'react'
import Layout from '../components/Layout';
import { CiLocationOn } from "react-icons/ci";
import { LuTimer } from "react-icons/lu";

const events = [
    {
        id: 1,
        title: "Cost of Following Jesus",
        date: "2025-05-30",
        location: "Masaka, Kigali, Rwanda",
        time: "2:00pm - 7:00pm",
        image: "/src/assets/event1.jpg",
        description: "Join us for an inspiring event on the Cost of Following Jesus. Discover the true meaning of discipleship and the sacrifices it entails. Don't miss this transformative experience!",
    },
     {
        id: 2,
        title: "Cost of Following Jesus",
        date: "2025-05-30",
        location: "Masaka, Kigali, Rwanda",
        time: "2:00pm - 7:00pm",
        image: "/src/assets/event2.jpg",
        description: "Join us for an inspiring event on the Cost of Following Jesus. Discover the true meaning of discipleship and the sacrifices it entails. Don't miss this transformative experience!",
    },
     {
        id: 3,
        title: "Cost of Following Jesus",
        date: "2025-05-30",
        location: "Masaka, Kigali, Rwanda",
        time: "2:00pm - 7:00pm",
        image: "/src/assets/event3.jpg",
        description: "Join us for an inspiring event on the Cost of Following Jesus. Discover the true meaning of discipleship and the sacrifices it entails. Don't miss this transformative experience!",
    },
];

const formatDate = (dateStr) => {
    const date =  new Date(dateStr);
    const month = date.toLocaleString("en-US", {month: "short"}).toUpperCase();
    const day = date.getDate();
    return { month, day };
};

const Events = () => {
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
          <h2 className="text-3xl font-bold">Events</h2>
          <p className="text-sm">HOME | EVENTS</p>
        </div>
      </section>

        <section className='max-w-6xl mx-auto px-6 py-12 space-y-10'>
            {events.map((event) => {
                const { month, day } = formatDate(event.date);
                return(
                    <div
                    key={event.id}
                    className='grid grid-cols-1 md:grid-cols-4 gap-6 items-center'
                    >
                        <div className='flex flex-col items-center justify-center md:pr-4'>
                            <span className='text-2xl font-semibold text-gray-500'>{month}</span>
                            <span className='block w-7 h-1 bg-secondary-500 mt-2 mr-4 mb-2'></span>
                            <span className='text-4xl font-bold text-gray-900'>{day}</span>
                        </div>

                        <div className='md:col-span-1'>
                            <img src={event.image} alt={event.title}  className='w-50 h-48 md:h-64 md:w-66 object-cover rounded-lg'/>
                        </div>

                        <div className='md:col-span-2'>
                            <h3 className='text-2xl font-semibold text-gray-900 mb-2'>{event.title}</h3>
                            <p className='flex flex-row text-lg text-gray-600 mb-1'><CiLocationOn className='mt-1.5 mr-1'/>{event.location}</p>
                            <p className='flex flex-row text-lg text-gray-600 mb-2'><LuTimer className='mt-1 mr-1'/>{event.time}</p>
                            <p className='text-xl text-gray-700'>{event.description}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    </Layout>
  )
}

export default Events
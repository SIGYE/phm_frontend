import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom"; 
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import church1 from '../assets/church1.jpg';
import church2 from '../assets/church2.jpg';
import church3 from '../assets/church3.jpg';
import church4 from '../assets/church4.jpg';
import church5 from '../assets/church5.jpg';
import church6 from '../assets/church6.jpg';
import church7 from '../assets/church7.jpg';
import JimmySandra from '../assets/JimmySandra.png';
import sermon1 from '../assets/sermon1.jpg';
import sermon2 from '../assets/sermon2.jpg';
import sermon3 from '../assets/sermon3.jpg';


export default function HomeScreen() {

     const slides = [
    {
      image: church1,
      title: "Welcome to the Potter's Hand Church.",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",
    },
    {
      image: church2,
  title: "Welcome to the Potter's Hand Church.",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },
    {
      image: church3,
      title: "Welcome to the Potter's Hand Church",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },
       {
      image: church4,
      title: "Welcome to the Potter's Hand Church",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },
       {
      image: church5,
     title: "Welcome to the Potter's Hand Church",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },
       {
      image: church6,
       title: "Welcome to the Potter's Hand Church",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },
       {
      image: church7,
       title: "Welcome to the Potter's Hand Church",
      subtitle:
        "“Seeing broken lives restored, transformed and shaped to fulfill God’s Purposes.”",
      verse: "Jeremiah 18:1-6",    },

  ];

    const [openQuestion, setOpenQuestion] = useState(null);
    const [activeFaqCategory, setActiveFaqCategory] = useState("first");
    const [activeTab, setActiveTab] = useState("weekly");
    const scrollRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
const slideDuration = 5000; 
const [progress, setProgress] = useState(0);

useEffect(() => {
  setProgress(0); 

  const progressInterval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(progressInterval);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        return 0; 
      }
      return prev + (100 / (slideDuration / 100)); 
    });
  }, 100); 

  return () => clearInterval(progressInterval);
}, [currentSlide, slides.length]);


    const toggleQuestion = (index) =>{
        setOpenQuestion(openQuestion === index ? null : index);
    };
      const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };



   const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];



    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

    return (
        <div className="w-full">
    <Navbar />
<section className="relative h-[90vh] overflow-hidden">
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
    </div>

    <div className="relative z-10 text-left text-white px-8 md:px-16 max-w-3xl flex flex-col justify-center h-full">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {slides[currentSlide].title}
      </h1>
      <p className="mt-4 italic text-lg md:text-xl text-gray-100">
        {slides[currentSlide].subtitle}
      </p>
      <p className="text-gray-300 font-semibold mt-1">
        {slides[currentSlide].verse}
      </p>

      <div className="mt-8 flex space-x-4">
        <button className="flex items-center px-6 py-3 bg-primary-500 rounded-full font-semibold hover:bg-orange-700 transition">
          Visit Church
          <span className="ml-2">→</span>
        </button>
        <button className="flex items-center px-6 py-3 border-2 border-secondary-50 rounded-full font-semibold hover:bg-secondary-50 hover:text-black transition">
          Watch Sermons
        </button>
      </div>
    </div>

    <div className="absolute bottom-4 left-0 right-0 px-8 z-20">
      <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-1 bg-primary-500 transition-all duration-500 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>

    <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="p-2 rounded-full bg-white/70 hover:bg-white transition"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
        className="p-2 rounded-full bg-white/70 hover:bg-white transition"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  </section>


            {/*Senior Pastor Section*/}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <img src={JimmySandra} alt="Pastor Jimmy & Sandra" className="rounded-xl shadow-lg"/>
                </div>
                <div>
                    <h4 className="text-gray-500 uppercase tracking-wide font-semibold ">Meet our Senior Pastor</h4>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Ps. Jimmy & Sandra Muyango</h2>
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Welcome to Potter's Hand Ministries! We are honored you've taken the
            time to visit us, and we believe you're here for a purpose. Our mission
            is to lead people into a genuine relationship with Jesus Christ and
            encourage daily spiritual growth through our five core pillars:
            Evangelism, Discipleship, Fellowship, Ministry, and Worship. No matter
            where you are on your spiritual journey, know that hope and healing are
            found in Jesus.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        As Senior Pastors, we joyfully serve this church family and walk
            alongside you every step of the way. Whether you join us online or in
            person, you are deeply loved, valued, and never alone. We look forward
            to seeing how God will work in your life and invite you to experience
            His grace and restoration.
                    </p>
                    <p className="mt-6 italic text-gray-600">
                        “Come to Me, all you who are weary and burdened, and I will give you
            rest.” <span className="not-italic">(Matthew 11:28)</span>
                    </p>
                    <p className="italic text-gray-600">
                         “Though your sins are like scarlet, they shall be as white as snow.”
            <span className="not-italic">(Isaiah 1:18)</span>
                    </p>
                </div>
            </section>
            {/*What's happening section*/}
         <section className="py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">What's Happening</h2>
    <p className="text-gray-600 mb-8 max-w-2xl">
      Join us for worship, fellowship, and spiritual growth. Come as you are
      and experience God's love in community.
    </p>

    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div className="flex justify-start">
        <button className="px-6 py-3 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition w-auto">
          Plan Your Visit
        </button>
      </div>

      <div>
        <div className="flex space-x-6 border-b mb-6">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`pb-2 font-medium ${
              activeTab === "weekly"
                ? "border-b-2 border-primary-500 text-primary-500"
                : "text-gray-500"
            }`}
          >
            WEEKLY
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`pb-2 font-medium ${
              activeTab === "events"
                ? "border-b-2 border-orange-600 text-orange-600"
                : "text-gray-500"
            }`}
          >
            EVENTS
          </button>
        </div>
        {activeTab === "weekly" && (
          <div className="space-y-6">
            <p className="text-gray-500 font-medium">Sunday</p>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-800">
                English Church Service
              </h4>
              <p className="text-gray-600 text-sm">
                9:00am - 10:30am • Worship and fellowship in English
              </p>
            </div>

            <p className="text-gray-500 font-medium">Sunday</p>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-800">
                Kinyarwanda Church Service
              </h4>
              <p className="text-gray-600 text-sm">
                10:45am - 1:00pm • Worship and fellowship in Kinyarwanda
              </p>
            </div>

            <p className="text-gray-500 font-medium">Monday</p>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-800">
                Connect Group
              </h4>
              <p className="text-gray-600 text-sm">
                10:45am - 1:00pm • Bible Study & Fellowship
              </p>
            </div>

            <p className="text-gray-500 font-medium">Wednesday</p>
            <div>
              <h4 className="font-semibold text-gray-800">Amateraniro</h4>
              <p className="text-gray-600 text-sm">
                17:30 - 19:30 • Wednesday fellowship and prayer service
              </p>
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div className="mt-4">
            <p className="text-gray-500 font-medium mb-2">Upcoming Events</p>
            <div className="text-gray-600 italic">
              Upcoming events will be listed here.
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

{/*take next step*/}
          <section className="py-16 px-6 md:px-12 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Take your Next Step</h2>
            <p className="text-gray-600">Join a family at Potter's Hand Ministries</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-4 bg-secondary-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-primary-500">01.</span><br />
          Children's Ministry
        </h3>
        <p className="text-gray-600 text-sm italic mb-3">
          “And these words that I command you today shall be on your heart. You shall teach them diligently to your children...” (Deuteronomy 6:6-7)
        </p>
        <a
          href="#"
          className="group relative text-gray-600 hover:text-orange-800 transition font-medium text-sm"
        >
          Learn more
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div className="p-4 bg-secondary-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-primary-500">02.</span><br />
          CLAY - Christ Life Among Youth
        </h3>
        <p className="text-gray-600 text-sm italic mb-3">
          “Don’t let anyone think less of you because you are young. Be an example...” (1 Timothy 4:12)
        </p>
        <a
          href="#"
          className="group relative text-gray-600 hover:text-orange-800 transition font-medium text-sm"
        >
          Learn more
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div className="p-4 bg-secondary-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-primary-500">03.</span><br />
          Couples' Ministry
        </h3>
        <p className="text-gray-600 text-sm italic mb-3">
          “With all humility and gentleness, with patience, bearing with one another in love...” (Ephesians 4:2-3)
        </p>
        <a
          href="#"
          className="group relative text-gray-600 hover:text-orange-800 transition font-medium text-sm"
        >
          Learn more
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
        </div>
      </div>
    </section>

        {/*FAQ Section*/}
        <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions
                <span className="block w-24 h-0.5 bg-secondary-500 mx-auto mt-2"></span>
                </h2>
                <div className="grid md:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <button 
                        onClick={() => setActiveFaqCategory("first")}
                        className={`block text-left text-xl font-medium ${activeFaqCategory === "first" ? "text-secondary-500 border-1-4 border-secondary-500 pl-2" : "text-gray-600 hover:text-secondary-500"}`}
                        >First-Time Visitors</button>

                        <button
                        onClick={() =>setActiveFaqCategory("involved")}
                       className={`block text-left text-xl font-medium ${activeFaqCategory === "invloved" ? "text-secondary-500 border-1-4 border-secondary-500 pl-2" : "text-gray-600 hover:text-secondary-500"}`}
                        >Getting Involved</button>

                        <button
                        onClick={() =>setActiveFaqCategory("practical")}
                       className={`block text-left text-xl font-medium ${activeFaqCategory === "practical" ? "text-secondary-500 border-1-4 border-secondary-500 pl-2" : "text-gray-600 hover:text-secondary-500"}`}
                        >Practical Questions</button>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        {activeFaqCategory === "first" && (
                            <>
                            <div className="border-b pb-4">
                                <button className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
                                onClick={() => toggleQuestion(1)}
                                >
                                    What should I expect when I visit?
                                    <span>{openQuestion === 1 ? "-" : "+"}</span>
                                </button>
                                {openQuestion === 1 && (
                                    <p className="mt-2 text-gray-600 text-lg">Our services are welcoming and casual. Come as you are! Service typically includes worship music, prayer, and a message from Scripture. We'd love to meet you at our welcome center.</p>
                                )}
                            </div>
                            <div className="border-b pb-4">
                                <button className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
                                onClick={() => toggleQuestion(2)}
                                >
                                    Is there parking available?
                                    <span>{openQuestion === 2 ? "-" : "+"}</span>
                                </button>
                                {openQuestion === 2 && (
                                <p className="mt-2 text-gray-600 text-lg">
                                    Yes, we provide parking space for all visitors.
                                </p>
                                )}
                            </div>
                               <div className="border-b pb-4">
                                <button className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
                                onClick={() => toggleQuestion(3)}
                                >
                                    Do you provide childcare during services?
                                    <span>{openQuestion === 3 ? "-" : "+"}</span>
                                </button>
                                {openQuestion === 3 && (
                                <p className="mt-2 text-gray-600 text-lg">
                                    Yes, we provide childcare during services.
                                </p>
                                )}
                            </div>
                            </>
                        )}

                        {activeFaqCategory === "involved" && (
                            <div className="text-gray-600 italic">Details on volunteering and ministry involvement will go here.</div>
                        )}

                        {activeFaqCategory === "practical" && (
<div className="text-gray-600 italic">Practical info such as directions, accessibility, and more will go here.</div>
)}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Sermons</h2>
                <div className="w-16 h-1 bg-secondary-500 mx-auto mb-10"></div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img src={sermon1} alt="Sermon 1" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left text-white">
                            <p className="text-sm mb-1">5<sup>th</sup>June 2025</p>
                            <h3 className="text-lg font-semibold">Jesus Came to bring Joy</h3>
                            <a href="#" className="text-orange-400 font-medium hover:underline">Watch Sermon</a>
                        </div>
                    </div>

                         <div className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img src={sermon2} alt="Sermon 2" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left text-white">
                            <p className="text-sm mb-1">5<sup>th</sup>June 2025</p>
                            <h3 className="text-lg font-semibold">What's Life after Death</h3>
                            <a href="#" className="text-orange-400 font-medium hover:underline">Watch Sermon</a>
                        </div>
                    </div>

                         <div className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img src={sermon3} alt="Sermon 3" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left text-white">
                            <p className="text-sm mb-1">5<sup>th</sup>June 2025</p>
                            <h3 className="text-lg font-semibold">Jesus Came to bring Joy</h3>
                            <a href="#" className="text-orange-400 font-medium hover:underline">Watch Sermon</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}
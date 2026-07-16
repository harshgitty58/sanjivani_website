"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 4,
    name: "Nikita Kalbhor",
    date: "2024-07-09",
    rating: 5,
    text: "The purpose of life is not to be happy, it is to be useful — to make some difference that you have lived and lived well.",
    avatar: "N",
  },
  {
    id: 5,
    name: "Snehil Suhas",
    date: "2024-05-02",
    rating: 4,
    text: "I want to express my sincere gratitude to Sanjivani for the incredible learning experience I've had with your organisation.",
    avatar: "S",
  },
  {
    id: 6,
    name: "Harsh K",
    date: "2024-07-22",
    rating: 5,
    text: "We conducted a food drive helping the needy and poor in ways that truly changed me.",
    avatar: "H",
  },
  {
    id: 1,
    name: "Tanay Jain",
    date: "2024-10-02",
    rating: 4,
    text: "Engaging with Sanjivani has been incredibly rewarding. We created posters, gathered donations, and distributed food to the underprivileged.",
    avatar: "T",
  },
  {
    id: 2,
    name: "Tejas Patil",
    date: "2024-12-09",
    rating: 5,
    text: "Annapurna Mission to distribute free food to needy individuals. We witnessed the gratitude and relief on the faces of those who received the meals.",
    avatar: "T",
  },
  {
    id: 3,
    name: "Tanmay B",
    date: "2024-08-29",
    rating: 5,
    text: "My experience with Sanjivani NGO has been truly remarkable. The organization's commitment to helping the poor and needy is commendable.",
    avatar: "T",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width >= 640 && width <= 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0
        ? Math.floor((reviews.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <section className="w-full bg-[#f2f1f9] pb-12 pt-0 md:pb-16 md:pt-0 px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800">
            EXCELLENT
          </h2>
          <div className="flex gap-1 mt-3">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
          </div>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
            Based on <span className="font-bold">46 reviews</span>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="w-20 sm:w-28 mt-3"
          />
        </div>

        <div className="w-full lg:w-2/3 relative flex items-center">
          <button
            onClick={prev}
            className="absolute left-2 sm:-left-3 md:-left-6 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex w-full gap-6 sm:gap-8 overflow-hidden items-stretch transition-all">
            {reviews
              .slice(current, current + itemsPerPage)
              .map((review) => (
                <div
                  key={review.id}
                  className="flex-1 border rounded-2xl bg-white shadow-sm p-4 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-w-0"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      {review.avatar.startsWith("/") ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                          {review.avatar}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                          {review.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {review.date}
                        </p>
                      </div>
                      <img
                        src="/images/owner.jpg"
                        alt="Owner"
                        className="ml-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex gap-1 mt-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>

                    <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg leading-snug">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <button
            onClick={next}
            className="absolute right-2 sm:-right-3 md:-right-6 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

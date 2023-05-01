import React from 'react'
import { eventsData } from "../Data/EventsData";
import './HomeArticles.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay ,Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';




function HomeArticles() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  return (
    <div>


<Swiper
                      className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                      breakpoints={breakpoints}
                      slidesPerGroup={breakpoints.slidesPerGroup}
                      slidesPerView={breakpoints.slidesPerView}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      navigation
                      autoplay={{ delay: 10000 }}
                    >
                      {eventsData.map((event) => (
                        <SwiperSlide
                          key={event.id}
                          className="flex max-w-xl px-16 flex-col items-start justify-between"
                        >
                          <div className="flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={event.date}
                              className="text-gray-500 mb-8 mt-8"
                            >
                              {event.date}
                            </time>
                          </div>
                          <div className="group relative">
                            <img
                              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                              src={event.eventImg}
                              alt="blog"
                            />
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <Link to={`/Article/${event.id}`}>
                                <span className="absolute inset-0" />
                                {event.title}
                              </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                              {event.details}
                            </p>
                          </div>
                          <div className="relative mt-8 flex items-center gap-x-4">
                            <img
                              src={event.authorImg}
                              alt=""
                              className="h-10 w-10 rounded-full bg-gray-50"
                            />
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-gray-900">
                                <a href={event.id}>
                                  <span className="absolute inset-0" />
                                  {event.authorName}
                                </a>
                              </p>
                              <p className="text-gray-600">
                                {event.authorTitle}
                              </p>
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                        </SwiperSlide>
                      ))}
                    </Swiper>
    </div>
  )
}

export default HomeArticles
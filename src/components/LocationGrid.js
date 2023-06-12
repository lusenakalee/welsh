import React from "react"
import GridSide from "../assets/gridside.png"
import Grid2 from "../assets/grid2.png"
import Grid3 from "../assets/grid3.png"
import Grid4 from "../assets/grid4.png"





const features = [
    { name: 'Integrity', description: 'We are honest, trustworthy, respectful and ethical in our actions. We honour our promises and are accountable for all our actions.' },
    { name: 'Diligence', description: 'We are meticulous and thorough in our quest to help businesses achieve their objectives.' },
    { name: 'Excellence', description: 'Excellence is our culture. We deliver quality service within the shortest period.' },
    { name: 'Alliances', description: 'We have over the years established service and stakeholder alliances with local and international partners. This enables us to deliver quality client-focused service across the globe.' },
    { name: 'Leadership', description: 'We provide both transformational and thought leadership in the market.' },
    { name: 'Teamwork', description: 'We believe that teamwork breeds efficiency and effectiveness. Teams have been set up within the firm to enable us to continuously provide world-class legal advice and solutions.' },
  ]
  
  export default function LocationGrid() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values in Action.</h2>
            <p className="mt-4 text-gray-500">
            These are the guiding principles that drive our organization forward. We are proud of our commitment to integrity, diligence, excellence, alliances, leadership and teamwork and we believe that they are the key to our continued success and growth.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={Grid4}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={GridSide}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={Grid2}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={Grid3}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  
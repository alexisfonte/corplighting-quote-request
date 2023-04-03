
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import showImage from "../assets/clav-show.jpeg";
import clavPlane from "../assets/clavPlane.jpeg";
import superbowl from "../assets/superbowl.jpeg";
import blueshow from "../assets/blueshow.jpeg";



const tabs = [
    {
        name: 'Lighting',
        features: [
            {
                name: 'Extraordinary Lights',
                description:
                'Corporate Lighting and Audio can provide a stage wash, decor lighting, concert lighting, projected gobo\'s, color changers and spotlights.  Whether conventional, automated, and/or LED lighting we have the fixtures.',
                imageSrc: showImage,
                imageAlt: 'Show Image',
            },
        ],
    },
    {
        name: 'Audio',
        features: [
            {
                name: 'Booming Sound',
                description:
                'We have high quality scalable systems and the right technicians to deliver your message to every seat in the venue, big or small.',
                imageSrc: clavPlane,
                imageAlt:
                'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
            },
        ],
    },
    {
        name: 'Video',
        features: [
            {
                name: 'Picture Perfect Projections',
                description:
                'Our industry experts can handle all of your visual needs.  We specialize in services from projection mapping to breakout room support packages.  Nothing will impress your audience more than our impressive displays.',
                imageSrc: superbowl,
                imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
            },
        ],
    },
    {
        name: 'Design',
        features: [
            {
                name: "Inspired Design",
                description:
                'We have designers on staff that can take your dream and turn it into reality.  Any theme or concept you have in mind we can bring to life functionally and aesthetically pleasing for any client.',
                imageSrc: blueshow,
                imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Hero() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 py-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Audio Visual Equiptment Rentals
            </h2>
            <p className="mt-4 text-gray-500">
            Corporate Lighting and Audio is a full service production company providing audio, lighting and audio visual services for conventions, meetings, concerts and special events. We carry a full line of audio, lighting, video and scenic equipment.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

export default Hero;

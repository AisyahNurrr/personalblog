import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

// Daftar hobi, tanpa tautan atau GitHub
const hobbies = [
  {
    name: "My First Hobbies",
    description:
      "I like to watch movies or dramas, especially K-Dramas, when I have a free time or when I'm bored.",
    image: "/drama.jpg",
  },
  {
    name: "My Second Hobbies",
    description:
      "This is one of the K-pop group that i like called ENHYPEN",
    image: "/enhypen.jpg",
  }
  
]

const HobbiesSection = () => {
  return (
    <section id="hobbies">
      <h1 className="my-10 text-center font-bold text-4xl">
        Hobbies
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {hobbies.map((hobby, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={hobby.image}
                      alt={hobby.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{hobby.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HobbiesSection

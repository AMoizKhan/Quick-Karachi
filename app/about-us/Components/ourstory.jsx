export default function OurStory() {
  return (
    <section className="bg-white py-20">
      <div className=" mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
            <div className="flex justify-center mb-16">
          <div className="relative inline-block px-8 py-4">
            <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-red-600"></span>
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-red-600"></span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
              Our Story
            </h2>
          </div>
        </div>

          
          {/* <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div> */}
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            From humble beginnings to Karachi's trusted transportation service
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="space-y-6 text-lg leading-9 text-gray-700">
                <p className="text-2xl font-light text-gray-800">
                  <span className="font-semibold text-red-600">Back in 2021</span>, I
                  was just another student trying to get to university on time. Like
                  many students in Karachi, I faced the same daily challenges:
                  overcrowded buses, long waits for rickshaws under the scorching sun,
                  and the frustration of leaving home early but still arriving late.
                </p>

                <p>
                  There were days when I missed lectures because transportation failed
                  me. And even when I made it to university, the exhausting journey
                  often left me too tired to focus on what mattered most—learning and
                  building my future.
                </p>

                <div className="bg-red-50 rounded-2xl px-8 py-6 my-8 border-l-4 border-red-600">
                  <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                    "What if transportation was reliable enough that students never had
                    to worry about reaching on time?"
                  </p>
                </div>

                <p>
                  With that idea in mind, the journey began with a single Suzuki Mehran
                  and a determination to make daily travel easier, safer, and more
                  comfortable.
                </p>

                <p>
                  Today, we proudly serve students, professionals, families, and
                  institutions across Karachi. Yet our mission remains unchanged: to
                  provide transportation that people can trust.
                </p>

                <p className="text-xl font-semibold text-gray-900 pt-4">
                  From one Mehran to a growing community of satisfied passengers, our
                  story has always been about helping people move forward.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - TIMELINE/MILESTONES */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Beginning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  What started with one Suzuki Mehran in 2021 has now become a trusted
                  transportation service across Karachi.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Safe, reliable and comfortable transportation for students,
                  professionals and families across the city.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center shadow-xl">
                <h3 className="text-4xl font-bold text-white leading-tight">
                  No Stress.
                </h3>
                <h3 className="text-4xl font-bold text-red-500 leading-tight mt-2">
                  No Delays.
                </h3>
                <div className="w-20 h-0.5 bg-red-500 mx-auto my-5 rounded-full"></div>
                <p className="text-white text-xl font-light">
                  Just <span className="font-bold text-red-500">Quick Karachi.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
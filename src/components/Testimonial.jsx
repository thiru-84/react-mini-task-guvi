

function Testimonial() {
  return (
    <div className="container mx-auto mt-20">
    <div className="flex justify-evenly items-center">
      {/* <!-- Testimonial 1 --> */}
      <div className="flex-col flex justify-center items-center">
        <img src="./src/assets/fourthimage.png" alt="" className="rounded-full w-16 h-16" />
        <h1 className="text-xl font-semibold text-black">
          {"You made it so simple"}
        </h1>
        <p className="text-sm text-gray-600 w-56 text-center mt-6">
          My new site is so much faster and easier to work with than my old site.
        </p>
        <p className="font-semibold text-xl text-black mt-8">Corey Valdez</p>
        <p className="text-sm">Founder at Zenix</p>
      </div>
      {/* <!-- Testimonial 2 --> */}
      <div className="flex-col flex justify-center items-center">
        <img src="./src/assets/fifthimage.png" alt="" className="rounded-full w-16 h-16" />
        <h1 className="text-xl font-semibold text-black">
          {"You made it so simple"}
        </h1>
        <p className="text-sm text-gray-600 w-56 text-center mt-6">
          My new site is so much faster and easier to work with than my old site.
        </p>
        <p className="font-semibold text-xl text-black mt-8">Corey Valdez</p>
        <p className="text-sm">Founder at Zenix</p>
      </div>
    </div>
  </div>
  )
}

export default Testimonial



function Manage() {
  return (
    <div className="container mx-auto mt-10">
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          Manage your projects fast
        </h1>
        <p className="text-gray-600">With lots of unique blocks,
          you can easily build a page
          without coding. Build your next landing page.</p>
      </div>
      <div className="flex justify-center items-center gap-16">
        <div className="flex justify-center items-center w-96">
          <img src="./src/assets/thirdimage.png" alt="" className="rounded shadow-lg" />
        </div>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div
              className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
              1
            </div>
            <div className="-mt-1">
              <h3 className="text-2xl font-semibold text-black">
                Create a project
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div
              className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
              2
            </div>
            <div className="-mt-1">
              <h3 className="text-2xl font-semibold text-black">
                Assign related people
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div
              className="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
              3
            </div>
            <div className="-mt-1">
              <h3 className="text-2xl font-semibold text-black">
                Make it done on-time
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Manage

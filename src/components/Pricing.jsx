

function Pricing() {
  return (
    <div className="container mx-auto mt-10 ">
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Pricing & Plans</h2>
        <p className="text-sm text-gray-400 text-center mb-10">With lots of unique blocks, you can easily
          build a page without coding.
          Build your next landing page.</p>
      </div>

      <div className="flex justify-center space-x-6 m-8 mb-15">
        {/* <!-- basic plan --> */}
        <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
          <span className="text-indigo-700 font-semibold mb-4">BASIC</span>
          <h2 className="text-4xl font-bold mb-3">$29</h2>
          <p className="text-gray-600 mb-6">One time purchase</p>
          <p className="text-gray-600 mb-8 text-center">With lots of unique blocks, you can easily
            build a page without coding.
            Build your next landing page.</p>
          <button className="bg-indigo-600 text-white px-6 py-3 
                        rounded-full ">Get Started for free</button>
        </div>

        {/* <!-- standard plan --> */}
        <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
          <span className="text-indigo-700 font-semibold mb-4">STANDARD</span>
          <h2 className="text-4xl font-bold mb-3">$29</h2>
          <p className="text-gray-600 mb-6">One time purchase</p>
          <p className="text-gray-600 mb-8 text-center">With lots of unique blocks, you can easily
            build a page without coding.
            Build your next landing page.</p>
          <button className="bg-indigo-600 text-white px-6 py-3 
                        rounded-full ">Get Started for free</button>
        </div>

        {/* <!-- premium plan --> */}
        <div className="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
          <span className="text-indigo-700 font-semibold mb-4">PREMIUM</span>
          <h2 className="text-4xl font-bold mb-3">$29</h2>
          <p className="text-gray-600 mb-6">One time purchase</p>
          <p className="text-gray-600 mb-8 text-center">With lots of unique blocks, you can easily
            build a page without coding.
            Build your next landing page.</p>
          <button className="bg-indigo-600 text-white px-6 py-3 
                    rounded-full ">Get Started for free</button>
        </div>

      </div>

      <div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold mb-2">Can I use Albino for my clients?</h4>
              <p className="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build
                your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
              <a href="#" className="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold mb-2">Does it work with WordPress?</h4>
              <p className="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build
                your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
              <a href="#" className="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold mb-2">Do I get free updates?</h4>
              <p className="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build
                your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
              <a href="#" className="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold mb-2">Will you provide support?</h4>
              <p className="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build
                your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
              <a href="#" className="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-gray-400">
          Havent got your answer? <a href="#" className="text-indigo-400">Contact our support now</a>
        </p>
      </div>
    </section>
  </div>
  )
}

export default Pricing

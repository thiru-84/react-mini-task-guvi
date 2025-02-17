

function Nav() {
  return (
    <div className="container mx-auto">
    <header className="flex justify-between items-center px-8 py-5 bg-white shadow">
      <div className="text-xl font-semibold text-black">Brainwave.io</div>
      <nav className="flex space-x-4 text-gray-600">
        <a href="" className="hover:text-gray-900">Demos</a>
        <a href="" className="hover:text-gray-900">Pages</a>
        <a href="" className="hover:text-gray-900">Support</a>
        <a href="" className="hover:text-gray-900">Contact</a>
      </nav>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Get Started Free
      </button>
    </header>

    <main className="text-center mt-12">
      <h1 className="text-4xl font-semibold text-black">
        Get things done by awesome remote team
      </h1>
      <p className="text-gray-500 mt-4">We share common trends and strategies for improving your rental income and making
        sure you stay in high demand.</p>
      <div className="flex justify-center mt-5 space-x-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started for free
        </button>
        <button className="bg-transparent border border-gray-500 px-4 py-2 rounded">
          Learn More
        </button>
      </div>

      <div className="flex justify-center mt-12">
        <img className="w-2/4 rounded shadow-lg" src="./src/assets/firstimage.png" alt="" />
      </div>
    </main>

    {/* <!-- Features --> */}
    <section className="mt-12 grid grid-cols-3 gap-6 text-center">
      <div>
        <h1 className="text-xl font-semibold mt-6">Project management</h1>
        <p className="text-sm mt-3 text-gray-700">With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-6">Time tracking</h1>
        <p className="text-sm mt-3 text-gray-700">With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-6">Beautiful mobile app</h1>
        <p className="text-sm mt-3 text-gray-700">With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.</p>
      </div>

    </section>
  </div>
  )
}

export default Nav

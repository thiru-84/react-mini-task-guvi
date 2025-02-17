

function Block() {
  return (
    <div className="flex justify-center space-x-6 bg-white py-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-black  mr-20">Build better landing page fast</h2>
      <p className="text-gray-600 mt-2 text-wrap text-left ">With lots of unique blocks, you can easily build a page
        without coding. <br/> Build your next landing page.</p>
    </div>
    <div className="flex justify-evenly space-x-6 mt-8 ">
      <button className="w-25 h-10 px-2 bg-blue-100 text-blue-700 rounded ml-16">Learn more</button>
      <button className="w-25 h-10 px-2 bg-blue-600 text-white  rounded">Get it now</button>
    </div>
  </div>
  )
}

export default Block

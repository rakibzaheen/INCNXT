
export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
      <div className="max-w-lg mx-auto">
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full px-3 py-2 border rounded-lg"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

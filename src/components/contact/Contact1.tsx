export default function Contact1() {
  return (
    
    <section className="bg-black-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-white-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white-700">Message</label>
            <textarea
              className="w-full border rounded-lg p-2"
              rows={5}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-black text-black px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

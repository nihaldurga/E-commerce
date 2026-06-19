export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Sri Durga Traders
          </h2>

          <p>📍 Your Shop Address</p>

          <p className="mt-4">
            📞 +91 95505 511020
          </p>

          <p className="mt-4">
            📧 info@sridurgatraders.com
          </p>
        </div>

        <div>

          <a
            href="https://wa.me/919550511020"
            target="_blank"
            className="
              block
              bg-green-600
              text-white
              text-center
              py-4
              rounded-xl
              mb-4
            "
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+919550511020"
            className="
              block
              bg-orange-600
              text-white
              text-center
              py-4
              rounded-xl
            "
          >
            Call Now
          </a>

        </div>

      </div>

    </div>
  );
}
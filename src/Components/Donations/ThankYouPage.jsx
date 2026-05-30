export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-red-100">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
          Thank You!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Your donation has been received successfully.
          <br />
          Thank you for supporting
          <span className="font-semibold text-red-700">
            {" "}
            Dklean Health Care Public Charitable Trust
          </span>
          .
        </p>

        {/* Donation Card */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8 text-left shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Transaction Status</p>
              <p className="font-semibold text-green-600">Successful</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="font-semibold">UPI / Razorpay</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Donation Date</p>
              <p className="font-semibold">{new Date().toLocaleDateString()}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Receipt</p>
              <p className="font-semibold text-red-700">Generated</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-8">
          <p className="text-green-700 leading-relaxed">
            Your contribution will help provide medical support, treatment, and
            care to patients in need.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold transition-all duration-300 shadow-md"
          >
            Back To Home
          </button>

          <button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-xl border border-red-700 text-red-700 hover:bg-red-50 font-semibold transition-all duration-300"
          >
            Download Receipt
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Dklean Health Care Public Charitable
          Trust
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-[#f8f5ef]">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-2">
          Ora – Privacy Policy
        </h1>
        <div className="text-center text-lg md:text-xl mb-8 text-gray-700">
          Last updated: 6/5/2025
        </div>
        <div className="text-lg md:text-xl font-sans mb-8 text-gray-900">
          Ora respects your privacy and is committed to creating a safe, quiet
          space for spiritual reflection. This Privacy Policy explains how Ora
          handles your information.
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">What We Collect</h2>
        <div className="text-lg md:text-xl font-sans mb-6 text-gray-900">
          Ora is designed to store your journal entries, reflections, and
          responses locally on your device. We do not store, access, or transmit
          your data to any external server unless you opt in to an AI-generated
          feature.
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">
          Use of AI (Optional)
        </h2>
        <div className="text-lg md:text-xl font-sans mb-4 text-gray-900">
          If you choose to generate spiritual insight on a journal or prayer
          entry, the content you submit will be sent to OpenAI, our trusted
          third-party AI provider, for processing. This is the only time your
          data ever leaves your device.
        </div>
        <div className="text-lg md:text-xl font-sans mb-6 text-gray-900">
          The request is one-time, and OpenAI's privacy policy governs how the
          data is handled on their side.{" "}
          <a
            href="https://openai.com/privacy"
            className="underline text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://openai.com/privacy
          </a>
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">No Tracking</h2>
        <div className="text-lg md:text-xl font-sans mb-6 text-gray-900">
          Ora does not use analytics, cookies, or trackers. We do not collect
          personal information, location data, or usage patterns.
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">Your Control</h2>
        <div className="text-lg md:text-xl font-sans mb-6 text-gray-900">
          All journal content and reflections remain under your control. You can
          clear, modify, or delete them at any time via your browser or device
          settings.
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">Questions?</h2>
        <div className="text-lg md:text-xl font-sans mb-6 text-gray-900">
          This app is built with prayerful care. If you have any questions about
          privacy, please contact the developer at:{" "}
          <a
            href="mailto:soriano.jeffm@gmail.com"
            className="underline text-blue-700"
          >
            soriano.jeffm@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

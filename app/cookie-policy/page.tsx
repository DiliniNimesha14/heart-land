export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        Our website uses cookies to improve your browsing experience. By continuing to use our site,
        you agree to our use of cookies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device that help us analyze web traffic and
        remember your preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>Strictly Necessary:</b> Essential for the website to function (e.g., navigating pages).</li>
        <li><b>Performance/Analytics:</b> We use tools like Google Analytics to understand how visitors interact with our site.</li>
        <li><b>Functionality:</b> To remember choices you make, such as language preferences.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
      <p className="mb-4">
        You can choose to accept or decline cookies through your browser settings. However,
        disabling cookies may prevent you from taking full advantage of the website&apos;s features.
      </p>
    </main>
  );
}
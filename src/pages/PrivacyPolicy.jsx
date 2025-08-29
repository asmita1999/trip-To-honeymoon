import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          At <strong>TripToHoneymoon</strong>, we value your privacy and are dedicated to protecting
          the personal information you share with us. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your data when you visit our website —{' '}
          <a
            href="https://www.triptohoneymoon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.triptohoneymoon.com
          </a>. Whether you are booking your dream honeymoon or simply exploring destinations,
          your trust is our top priority.
        </p>

        {/* External links disclaimer */}
        <p className="text-gray-700 mb-6">
          Our website may contain links to third-party platforms, including partner services and
          co-branded pages. While we aim to collaborate with trustworthy providers,{' '}
          <a
            href="https://www.triptohoneymoon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.triptohoneymoon.com
          </a>{' '}
          does not control or assume responsibility for the content or privacy practices of these
          external websites. We encourage you to read the privacy policies of any site you visit through
          our platform to understand how your information may be used or shared.
        </p>

        {/* Policy Promise */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Privacy Commitment</h2>
        <p className="text-gray-700 mb-4">
          Your personal data is the cornerstone of the services we provide. At <strong>TripToHoneymoon</strong>,
          we are committed to handling your information with care, transparency, and integrity.
          Whether you're signing up for an account, booking a package, or reaching out to our support
          team, we treat your data with the same level of confidentiality we would expect for ourselves.
        </p>

        <p className="text-gray-700 mb-2">
          Here's what you can expect from our privacy promise:
        </p>

        {/* List of Promises */}
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            We strictly protect all customer information using industry-standard security protocols
            and confidentiality agreements.
          </li>
          <li>
            We collect and use only the necessary information required to deliver exceptional travel
            services — such as creating custom itineraries, offering relevant packages, and sharing
            exclusive offers.
          </li>
          <li>
            Access to your information is restricted to authorized employees trained in responsible
            data handling. Any misuse of customer data by our team is not tolerated and subject to
            disciplinary measures.
          </li>
          <li>
            We do not sell or disclose your personal data to third-party companies unless we have
            received your explicit consent or are required by legal authorities to do so.
          </li>
          <li>
            In certain cases, we may work with trusted travel partners to offer you extended services.
            These partners are selected with care, and we ensure your data is shared only when you’ve
            expressed interest in their offerings.
          </li>
          <li>
            Any third-party vendors or service providers we engage are bound by contracts that enforce
            compliance with our strict privacy standards. Audits may be conducted to ensure accountability.
          </li>
          <li>
            We strive to keep your data accurate and up to date. You may request access to your personal
            information or ask for corrections, subject to applicable legal constraints.
          </li>
        </ul>

        {/* Contact Information */}
        <p className="text-gray-700">
          If you have any questions, concerns, or requests regarding your personal information or this
          privacy policy, please don’t hesitate to contact us at:{' '}
          <strong className="text-gray-900">support@triptohoneymoon.com</strong>. We're here to help you
          enjoy a secure and seamless experience as you plan the trip of your lifetime.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

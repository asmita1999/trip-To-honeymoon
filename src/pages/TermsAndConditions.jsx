import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 ">
          Terms Of Use
        </h1>
        <p className="text-sm text-gray-500 mb-10 text-center">
          Last Updated: August 27, 2025
        </p>

        <p className="mb-6 leading-relaxed">
          These Terms and Conditions govern your use of the TripToHoneymoon website and services.
          By accessing or using our services, you agree to be bound by these terms.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Services</h2>
          <p className="leading-relaxed">
            We offer complete website design and development solutions including UI/UX design,
            frontend & backend development, SEO, hosting setup, and maintenance. All services
            are subject to a formal agreement or proposal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Use of Our Website</h2>
          <p className="leading-relaxed">
            You agree to use our website for lawful purposes only. You must not engage in any
            activity that disrupts or interferes with the website's functionality or security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Payment & Refunds</h2>
          <p className="leading-relaxed">
            Payments for services are due as per the terms agreed in the project contract. Refunds,
            if applicable, are provided according to our refund policy stated in the agreement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, designs, and code provided by TripToHoneymoon remain our intellectual
            property until full payment is received. After that, ownership will transfer as per
            the agreement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="leading-relaxed">
            TripToHoneymoon is not liable for any indirect, incidental, or consequential damages
            arising out of the use or inability to use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Modifications</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on
            this page with a revised "Last Updated" date.
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:abc123@gmail.com"
              className="text-blue-600 hover:underline"
            >
              abc123@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;

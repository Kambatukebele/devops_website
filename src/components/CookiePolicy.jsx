import React from 'react'

const CookiePolicy = () => {
  return (
    <section className='w-full h-fit py-12 lg:py-24'>
      <div className='container px-4'>
        <div>
          <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
            <h1 className="text-4xl text-left text-gray_900 font-bold leading-10 md:text-5xl lg:w-full lg:text-6xl lg:leading-tight">
              Cookies Policy for Qubitz
            </h1>
            <p className='text-lg font-normal lg:max-w-2xl'>
              Effective Date: [Insert Date]
            </p>
            <p className='text-lg font-normal lg:max-w-2xl'>
            Welcome to Qubitz!
            This Cookies Policy explains how we use cookies and similar technologies to recognize you when you visit our web app (Qubitz), and how you can control them.
            </p>
          </div>
          <div className='h-64 block'>
          </div>
          <div className='my-5 lg:max-w-2xl'>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>1. What are Cookies?</h3>
              <p className='text-lg font-normal'>
              Cookies are small data files placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to “remember” you and your preferences, either for a single visit (through a “session cookie”) or for multiple repeat visits (using a “persistent cookie”).
              </p>
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>2. How Qubitz Uses Cookies</h3>
              <div className='w-full'>
                <p className='text-lg font-normal'>
                We use cookies to:                 
                </p>
                <ul className='list-disc list-inside indent-4'>
                  <li>Ensure the web app functions properly</li>
                  <li>Enhance your experience by remembering your preferences</li>
                  <li>Understand how you interact with our content</li>
                  <li>Improve our services through analytics</li>
                  <li>Provide secure login functionality (where applicable)</li>
                </ul>
              </div>
              <div className='w-full'>
                <p className='text-lg font-normal'>
                Types of cookies we use include:                 
                </p>
                <ul className='list-disc list-inside indent-4'>
                  <li>Essential Cookies: Necessary for the app to operate.</li>
                  <li>Performance and Analytics Cookies: Help us understand how users interact with our web app.</li>
                  <li>Functional Cookies: Remember your settings and preferences.</li>
                  <li>Security Cookies: Used to protect user accounts and data.</li>
                </ul>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>3. Third-Party Cookies</h3>
              <p className='text-lg font-normal'>
                Some cookies we use may be placed by trusted third-party services for analytics (e.g., Google Analytics) or authentication services. These third parties may collect information about your online activities across different websites.
              </p>
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>4. Managing Cookies</h3>
              <p className='text-lg font-normal'>
                You have the right to accept or refuse cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
                However, disabling cookies may affect the functionality of our web app.
                <br />
                  To manage cookies, you can typically find the options in your browser’s “Settings” or “Preferences” menu.
              </p>
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>5. Updates to This Policy</h3>
              <p className='text-lg font-normal'>
                We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                <br />
                Please review this policy periodically to stay informed about our use of cookies.
              </p>
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 mb-5'>
              <h3 className='text-xl font-semibold'>6. Contact Us</h3>
              <p className='text-lg font-normal'>
                If you have any questions about our use of cookies, please contact us at:
                <br />
                Qubitz IT Consulting
                <br />
                Email: [Insert Email Address]
                <br />
                Phone: [Insert Phone Number]
              </p>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default CookiePolicy
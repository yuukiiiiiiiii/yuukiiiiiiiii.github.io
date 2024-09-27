import React, { useState } from 'react';

export default function AndroIDELanding() {
  const [email, setEmail] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your email submission logic here
    console.log('Email submitted:', email);
    // Clear the email input after submission
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-purple-700 py-2 px-4 flex items-center justify-between shadow-md sticky top-0 z-10">
        <h1 className="text-xl font-bold">AndroIDE</h1>
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="text-white">
          {isDrawerOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {isDrawerOpen && (
        <nav className="bg-purple-600 p-4">
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-gray-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#support" className="hover:text-gray-300">Support</a></li>
          </ul>
        </nav>
      )}

      <main className="flex-grow p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Build Amazing Apps with AndroIDE</h2>
            <p className="text-lg mb-8">Your all-in-one IDE for Android development.</p>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
                <p className="text-gray-400">User-friendly interface for quick access to essential tools.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Cross-Platform</h4>
                <p className="text-gray-400">Develop apps for multiple platforms seamlessly.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Customizable</h4>
                <p className="text-gray-400">Tailor your development environment to suit your needs.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Integrated Debugger</h4>
                <p className="text-gray-400">Easily troubleshoot your code with our built-in debugger.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-purple-700 p-8 rounded-lg shadow-lg text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Ready to elevate your Android development?</h3>
            <p className="text-xl mb-6">Join thousands of developers who trust AndroIDE for their projects.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange}
                placeholder="Enter your email" 
                className="bg-gray-700 text-white border-gray-600 focus:border-purple-400 rounded p-2" 
                required 
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                Start Free Trial
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-6 text-center">
        <p className="text-gray-400">&copy; 2024 AndroIDE. All rights reserved.</p>
      </footer>
    </div>
  );
        }

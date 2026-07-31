import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
  <div className="mx-auto max-w-7xl px-6 py-14">

    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          DevUI
        </h2>

        <p className="text-sm leading-7 text-gray-400">
          Build modern, responsive, and beautiful web applications with
          reusable React components.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-white">
          Quick Links
        </h3>

        <ul className="space-y-3">
          <li><a href="#" className="transition hover:text-cyan-400">Home</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Components</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Templates</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Pricing</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-white">
          Resources
        </h3>

        <ul className="space-y-3">
          <li><a href="#" className="transition hover:text-cyan-400">Documentation</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Blog</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Support</a></li>
          <li><a href="#" className="transition hover:text-cyan-400">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="mb-5 text-lg font-semibold text-white">
          Newsletter
        </h3>

        <p className="mb-4 text-sm text-gray-400">
          Subscribe to receive updates and new components.
        </p>

        <div className="flex overflow-hidden rounded-xl border border-gray-700">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
          />

          <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 font-semibold text-white transition hover:opacity-90">
            Join
          </button>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">

      <p className="text-sm text-gray-500">
        © 2026 DevUI. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        <a href="#" className="transition hover:text-cyan-400">GitHub</a>
        <a href="#" className="transition hover:text-cyan-400">LinkedIn</a>
        <a href="#" className="transition hover:text-cyan-400">Twitter</a>
        <a href="#" className="transition hover:text-cyan-400">Facebook</a>
      </div>

    </div>

  </div>
</footer>
            </div>
        );
    }
}

export default Footer;
// "use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="isolate bg-black px-6 pt-24 sm:pt-32 lg:px-8">
      <Header />
      <div className="mx-auto max-w-2xl text-center pt-20">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Contact Me
        </h2>
      </div>
      <form
        action={`https://formspree.io/f/${process.env.FORM_ID}`}
        method="POST"
        className="mx-auto mt-10 max-w-xl sm:mt-20"
      >
        <div className="flex flex-col gap-x-8 gap-y-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-200"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-200"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-200"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

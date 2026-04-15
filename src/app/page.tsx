// app/page.tsx or pages/index.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Voice call app",
    description:
      "A real-time voice and video calling app using ZegoCloud SDK and React Native.",
    video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749225166/call-app-vid-preview_vlipa4.mp4`,
    codeLink: "https://github.com/aekimena/react-native-call-app",
    apkLink: "/apks/callapp.apk",
  },
  {
    title: "Face liveness verification",
    description: "Instant face verification with kairos api and React Native",
    video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749225283/face-verify-vid-preview_xt8lrl.mp4`,
    codeLink: "https://github.com/aekimena/face-verification",
    apkLink: "/apks/callapp.apk",
  },
  // {
  //   title: "Flight booking app",
  //   description: "Flight booking app (Google flights mobile clone)",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1752271241/price_graph_screen_record_yywsfn.mp4`,
  //   codeLink: "https://github.com/aekimena/book-flights-app",
  //   apkLink: "/apks/callapp.apk",
  // },
  // {
  //   title: "Rn chat app",
  //   description: "Chat app built with socket.io,",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749226433/chat-app-vid-preview_ykcv6s.mp4`,
  //   codeLink: "https://github.com/aekimena/rn-chat-app",
  //   apkLink: "/apks/callapp.apk",
  // },

  // {
  //   title: "Rn shop app",
  //   description: "Marketplace app with flutterwave payment gateway",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749227249/shop-app-vid-prev_zvi4h2.mp4`,
  //   codeLink: "https://github.com/aekimena/rn-shop-app",
  //   apkLink: "/apks/callapp.apk",
  // },
  // {
  //   title: "Rn location tracker app",
  //   description:
  //     "Search any location and direction. Built with google maps sdk",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749221814/location-vid-preview_bkjx7x.mp4`,
  //   codeLink: "https://github.com/aekimena/rn-location-tracker",
  //   apkLink: "/apks/callapp.apk",
  // },
  {
    title: "aekimena-month-year-picker",
    description:
      "I built a sleek and customizable month year picker for react native applications currently hosted on npm.",
    video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749224704/date-picker-vid-preview_giueea.mp4`,
    codeLink: "https://www.npmjs.com/package/aekimena-month-year-picker",
    apkLink: "/apks/callapp.apk",
  },
  // {
  //   title: "Rn auction app",
  //   description:
  //     "Post your art, bid. Built with React Native, mongoDB, express, socket.io",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749231357/auction-app-vid-prev_uznqaj.mp4`,
  //   codeLink: "https://github.com/aekimena/rn-auction-app",
  //   apkLink: "/apks/callapp.apk",
  // },

  // {
  //   title: "Rn social app",
  //   description:
  //     "Share photos & more on this app. Built with React Native, mongoDB, express, socket.io,",
  //   video: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/video/upload/v1749229890/social-app-vid-prev_ik2wcn.mp4`,
  //   codeLink: "https://github.com/aekimena/rn-social-app",
  //   apkLink: "/apks/callapp.apk",
  // },
];

const featuredProjects = [
  {
    id: "1",
    title: "NearbyChat",
    description:
      "A peer-to-peer chat app that allows users to connect and exchange messages without internet access — using only Wi-Fi and mobile hotspot.",
    link: "https://github.com/aekimena/workman",
    codeLink: "https://github.com/aekimena/nearby-chat",
    // apkLink: "https://expo.dev/artifacts/eas/reWrVNqLvQDaa1sexvXXJS.apk",
    apkLink: "https://expo.dev/artifacts/eas/vwjtfigmttj1b5yvQHfK4s.apk",
  },
  {
    id: "5",
    title: "Month year picker | Open Source NPM Package",
    description:
      "Customizable month/year picker component for React Native. Built with TypeScript for full type safety and excellent developer experience",
    link: "https://www.npmjs.com/package/aekimena-month-year-picker",
    codeLink: "https://www.npmjs.com/package/aekimena-month-year-picker",
    // apkLink: "https://expo.dev/artifacts/eas/reWrVNqLvQDaa1sexvXXJS.apk",
    // apkLink: "https://github.com/aekimena/nearby-chat",
  },
  {
    id: "11",
    title: "Progressly",
    description:
      "Productivity app that tracks your day, month, and year progress in real time and sends personalized notifications as you reach each 10% milestone.",
    codeLink: "https://github.com/aekimena/progressly-app",
    apkLink: "https://expo.dev/artifacts/eas/uEv4Sr1QrBFYNMiJwq9owL.apk",
  },
  {
    id: "2",
    title: "Workman",
    description:
      "An app that enables people to quickly find and offer small, local, low-friction jobs that pay cash or wallet credit — no long contracts, no remote work, highly local and trustworthy.",
    link: "https://github.com/aekimena/workman",
    codeLink: "https://github.com/aekimena/workman",
    apkLink: "https://expo.dev/artifacts/eas/dAcy5BXMYZx3yEfwxuvnUN.apk",
  },
  {
    id: "2.5",
    title: "Giggin'",
    description:
      "A two-sided app for clients and skilled professionals to connect and get work done quickly, conveniently, and from trusted listings.",
    link: "https://github.com/aekimena/Giggin",
    codeLink: "https://github.com/aekimena/Giggin",
    apkLink: "https://expo.dev/artifacts/eas/5qeXHWFjE9HhTr6mE4pM6N.apk",
  },

  {
    id: "3",
    title: "Homebuddy",
    description:
      "A modern real estate app that makes it easy for users to find and rent houses or apartments anywhere in Nigeria — quickly, conveniently, and from trusted listings",
    link: "https://github.com/aekimena/homebuddy",
    codeLink: "https://github.com/aekimena/homebuddy",
    apkLink: "https://expo.dev/artifacts/eas/gPkj6DE1143QVSrrhGrKZt.apk",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-8">
      <Header />
      <section className="flex flex-col items-center mb-14 pt-20">
        <Image
          src="/images/ae-avatar.jpg" // You can use a remote URL here too
          alt="Profile"
          width={150}
          height={150}
          // className="rounded-full"
          style={{ borderRadius: 150, height: 150, width: 150 }}
          // className="rounded-full shadow-lg object-cover"
        />
        <h1 className="mt-4 text-3xl font-bold">Arinze Emmanuel</h1>
        <p className="text-gray-200 text-base mt-2 text-center">
          Fullstack Developer (Web, Mobile & Backend Systems)
        </p>
      </section>
      {/* <h1 className="text-4xl font-bold mb-10 text-center">My App Portfolio</h1> */}
      {/*  */}

      <section className="mb-20 pt-10">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center"
          style={{ backgroundColor: "#121212" }}
        >
          {/* LEFT: IMAGE */}
          <div className="w-full md:w-1/2">
            <Image
              src="/marketplace_image.png"
              alt="Project Screenshot"
              width={800}
              height={500}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Highlighted Project
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Marketplace (Fullstack)
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              A fully functional marketplace platform built with Next.js,
              featuring real-time product discovery, advanced search filtering,
              engagement-based ranking, and location-aware listings.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="mt-6 space-y-2 text-gray-200 text-sm">
              <li>• Advanced product search with ranking algorithm</li>
              <li>• Location-based filtering (nearby sellers)</li>
              <li>• Engagement tracking (views, likes, wishlist, reviews)</li>
              <li>• Secure authentication & seller verification</li>
              <li>• Cloudinary media handling with optimization</li>
            </ul>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Next.js",
                "Typescript",
                "Node.js",
                "MongoDB",
                "Express",
                "Cloudinary",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs border border-white/20 px-3 py-1 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://arimi.co"
                target="_blank"
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Visit website
              </a>

              {/* <a
                href="#"
                target="_blank"
                className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white/10 transition"
              >
                View Code
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="">
        <h2 className="text-2xl font-medium text-white">Featured Projects</h2>
        {/* <p className="mt-2 font-light text-gray-200">
          Some of the cool stuff I’ve built recently.
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow p-5 flex-row flex items-center gap-14"
            style={{ backgroundColor: "#121212" }}
          >
            <div>
              <h1 className="text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <p className="font-light text-white mt-3">
                {project.description}
              </p>
              <div className="flex flex-row gap-x-3 mt-4">
                {project?.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center
                  border
                  border-white
                  bg-transparent
                  text-white rounded-full px-4 py-2 text-sm hover:bg-white/10
                  active:bg-white/20
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/30 disabled:opacity-50
disabled:cursor-not-allowed"
                  >
                    View Code
                  </a>
                )}
                {project?.apkLink && (
                  <a
                    href={project.apkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center
                  border
                  border-white
                  bg-transparent
                  text-white rounded-full px-4 py-2 text-sm hover:bg-white/10
                  active:bg-white/20
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/30 disabled:opacity-50
disabled:cursor-not-allowed"
                  >
                    Download APK
                  </a>
                )}
              </div>
            </div>
            {/* <div>//</div> */}
            {/* <ArrowRightIcon aria-hidden="true" className="size-15 text-white" /> */}
          </div>
        ))}
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-medium text-white">More Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            style={{ backgroundColor: "#121212" }}
          >
            <div className="p-3">
              <video
                src={project.video}
                className="w-full h-64 object-center"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
border
border-white
bg-transparent
text-white rounded-full px-4 py-2 text-sm hover:bg-white/10
active:bg-white/20
focus:outline-none
focus:ring-2
focus:ring-white/30 disabled:opacity-50
disabled:cursor-not-allowed"
                >
                  View Code
                </a>
                {/* <a
                  href={project.apkLink}
                  download
                  className=" text-white px-4 py-2 rounded hover:bg-green-700 outline"
                >
                  Get APK
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}

// app/page.tsx or pages/index.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
    title: "Workman",
    description:
      "An app that enables people to quickly find and offer small, local, low-friction jobs that pay cash or wallet credit — no long contracts, no remote work, highly local and trustworthy.",
    link: "https://github.com/aekimena/workman",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-8">
      <Header />
      <section className="flex flex-col items-center mb-12 pt-20">
        <Image
          src="/images/ae-avatar.jpg" // You can use a remote URL here too
          alt="Profile"
          width={140}
          height={140}
          style={{ borderRadius: 140 / 2, height: 140, width: 140 }}
          // className="rounded-full shadow-lg object-cover"
        />
        <h1 className="mt-4 text-3xl font-bold">Arinze Emmanuel</h1>
        <p className="text-gray-200 text-base mt-2">
          Mobile App Developer (React Native)
        </p>
      </section>
      {/* <h1 className="text-4xl font-bold mb-10 text-center">My App Portfolio</h1> */}
      <div className="">
        <h2 className="text-2xl font-medium text-white">Featured Projects</h2>
        <p className="mt-2 font-light text-gray-200">
          Some of the cool stuff I’ve built recently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {featuredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  border
                  border-white
                  bg-transparent
                  text-white rounded-full px-4 py-2 text-base hover:bg-white/10
                  active:bg-white/20
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/30"
                >
                  View Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  border
                  border-white
                  bg-transparent
                  text-white rounded-full px-4 py-2 text-base hover:bg-white/10
                  active:bg-white/20
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/30"
                >
                  Download APK
                </a>
              </div>
            </div>
            {/* <div>//</div> */}
            {/* <ArrowRightIcon aria-hidden="true" className="size-15 text-white" /> */}
          </a>
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
text-white rounded-full px-4 py-2 text-base hover:bg-white/10
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

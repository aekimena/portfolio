import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="isolate bg-black px-6 pt-24 sm:pt-32 lg:px-8 min-h-screen">
      <Header />
      <div className="mx-auto max-w-2xl text-center pt-20">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-6 pt-10">
          Hi, I&apos;m <span className="font-semibold">Arinze Emmanuel</span> —
          a React Native developer with 3 years experience building fast,
          intuitive, and scalable mobile apps. I specialize in crafting
          cross-platform experiences that feel native and solve real-world
          problems.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My skills typically includes React Native (with Expo or bare
          workflow), Typescript, Redux Toolkit, Zustand, Tanstack Query,
          Firebase, MongoDB, Node.js, Express js, push notifications via Notifee
          or FCM, SQLite, Animations and transitions, Real-time data handling,
          Payment gateways. I enjoy working on both the front and back ends to
          bring ideas to life.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I focus on performance, simplicity, and user experience. I&apos;m
          always learning and love exploring new tools that improve development
          speed and app quality.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          If you’re looking for a reliable React Native developer who delivers
          clean code, fast iterations, and functional UI/UX, let’s connect.
        </p>

        <p className="text-lg leading-relaxed">Thanks for stopping by 👋</p>
      </div>
      <Footer />
    </div>
  );
}

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
          a Fullstack Developer with 5 years of experience building fast,
          scalable, and user-focused web and mobile applications. I specialize
          in developing complete products end-to-end, from intuitive frontends
          to robust backend systems that power real-world solutions.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My skill set spans across Next.js, React Native, TypeScript, Node.js,
          Express, and MongoDB, along with modern tools like Zustand, TanStack
          Query, and Firebase. I’ve built systems featuring advanced search,
          real-time data handling, location-based services, secure
          authentication, media management with Cloudinary, and scalable API
          architectures.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I enjoy working across the full stack — designing seamless user
          experiences on the frontend while engineering efficient, maintainable,
          and scalable logic on the backend. My approach prioritizes
          performance, clean architecture, and simplicity.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          If you’re looking for a developer who can take an idea from concept to
          a fully functional product — with clean code, thoughtful UX, and solid
          backend systems — let’s connect.
        </p>
      </div>
      <Footer />
    </div>
  );
}

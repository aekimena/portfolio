import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WhyWorkWithMe() {
  return (
    <div className="isolate bg-black px-6 pt-24 sm:pt-32 lg:px-8">
      <Header />
      <div className="mx-auto max-w-2xl text-center pt-20">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Why work with me?
        </h2>

        <p className="text-lg leading-relaxed mb-6 pt-10">
          I've worked remotely with cross-functional teams — designers, backend
          engineers, and project managers — across time zones. I understand how
          to communicate clearly, meet deadlines, and keep things moving
          forward.
        </p>
        <p className="text-lg leading-relaxed mb-6 ">
          With years of hands-on experience and the strategic use of AI tools, I
          move fast — staying ahead of trends, automating repetitive work, and
          solving problems with clarity and speed.
        </p>
        <p className="text-lg leading-relaxed mb-6 ">
          I learn new tools, libraries, and technologies on the go. Whether it's
          integrating a new SDK or switching up the stack, I pick things up
          quickly and deliver results without slowing down the team.
        </p>
        <p className="text-lg leading-relaxed mb-6 ">
          In short, I’m reliable, flexible, and focused on building quality apps
          that work — and ship.
        </p>
      </div>
      <Footer />
    </div>
  );
}

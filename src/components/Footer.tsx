const links = [
  { title: "Linkedin", url: "https://linkedin.com/in/aekimena" },
  { title: "X", url: "https://x.com/aekimena" },
  { title: "Github", url: "https://github.com/aekimena" },
];

export default function Footer() {
  return (
    <footer className="w-full py-20 text-white text-center">
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="text-base font-medium hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
}

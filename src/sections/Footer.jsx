import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-2">
        <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
          My Resume
        </a>
        <p>|</p>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer" title={social.name}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

      <p>© 2025 Satyam. All rights reserved.</p>
    </section>
  );
};

export default Footer;

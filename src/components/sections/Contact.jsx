import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12 flex gap-6">
        <a
          href={user_info.socials.facebook}
          title="Facebook"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300 hover:scale-150"
        >
          <FaFacebook className="self-center text-lg text-red-800 dark:text-red-500" />
        </a>
        <a
          href={user_info.socials.twitter}
          title="Twitter"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 hover:scale-150"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
        </a>
        <a
          href={user_info.socials.instagram}
          title="Instagram"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 hover:scale-150"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
        </a>
        <a
          href={user_info.socials.linkedin}
          title="LinkedIn"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 hover:scale-150"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30 hover:underline"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
      <span className="text-center block mt-6 text-zinc-600 dark:text-zinc-300">
        Thank you for visiting my portfolio! <br />
        <span className="text-red-800 dark:text-red-500 text-lg font-bold">
          Have A Great {dayName}!
        </span>
      </span>
    </section>
  );
}

export default Contact;

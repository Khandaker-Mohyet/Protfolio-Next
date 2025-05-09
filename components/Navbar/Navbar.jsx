"use client";
import { ModeToggle } from "../ui/MoodToggle/MoodToggle";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <div className="w-full fixed z-50 backdrop-blur-lg bg-background/70">
      <nav className="px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="#home" className="text-2xl font-medium">
            K. Mohyet
          </a>
        </div>
        {/* Nav list */}
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8  px-12 py-3}`}
        >
          <li>
            <a
              href="#home"
              className="dark:text-neutral-400 dark:hover:text-white transition-all duration-150 "
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="dark:text-neutral-400 dark:hover:text-white transition-all duration-150">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="dark:text-neutral-400 dark:hover:text-white transition-all duration-150">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="dark:text-neutral-400 dark:hover:text-white transition-all duration-150">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="dark:text-neutral-400 dark:hover:text-white transition-all duration-150 ">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/tamim-ahmed-dev/" target="_blank">
            <Button variant="ghost" size="icon">
              <FaLinkedin />
            </Button>
          </a>
          <a href="https://github.com/TamimAhmedCD" target="_blank">
            <Button variant="ghost" size="icon">
              <FaGithub />
            </Button>
          </a>
          <ModeToggle></ModeToggle>
        </div>
      </nav>
      <Separator />
    </div>
  );
};

export default Navbar;

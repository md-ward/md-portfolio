import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactLinks } from "@/lib/links";

export default function Footer() {
  return (
    <footer className=" w-full bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4">
          {contactLinks.map((link, index) => (
            <Link
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={link.href}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <p className="text-gray-500 mt-4">
          © {new Date().getFullYear()}  Mohammad Ward. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

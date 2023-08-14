"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="lg:py-12 py-8 flex lg:flex-row flex-col">
      <div className="lg:w-1/2 flex flex-col  space-y-4">
        <span className="lg:text-6xl md:text-4xl text-3xl">
          Frequently Asked Questions
        </span>
        <div className="flex  lg:flex-col flex-row lg:space-y-4 lg:space-x-0 space-x-2">
          <div className="flex flex-col">
            <span>
              If you need help or an application accommodation please reach out
              to us by emailing
            </span>
            <a href="/" className="text-[#009a7b]">
              careers@thesill.com.
            </a>
          </div>
          <img
            src="https://www.thesill.com/_vercel/image?url=/_nuxt/img/half_title.323c72e.png&w=768&q=100"
            alt="heart"
            className="lg:w-1/3 md:w-1/6 hidden md:block object-fill"
          />
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col space-y-4 py-12 lg:py-0">
        <span className="md:text-4xl text-3xl  pb-6 border-b">
          Careers at The Sill
        </span>

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen1(!open1)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open1 && "text-[#009a7b] italic"
            }`}
          >
            How do I know if my application was received?
          </span>
          {open1 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open1 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Once you submit your application you’ll receive an email
              confirming it’s in our system. We personally review each
              application we receive, so it may take us up to a week to follow
              up on its status.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen2(!open2)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open2 && "text-[#009a7b] italic"
            }`}
          >
            I’m interested in a position at The Sill, but nothing that you’re
            hiring for matches my qualifications. What should I do?
          </span>
          {open2 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open2 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Please reach out! We’re always more than happy to keep your resume
              on file - email it to us at
              <a href="/" className="text-[#009a7b] px-1">
                careers@thesill.com.
              </a>
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen3(!open3)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open3 && "text-[#009a7b] italic"
            }`}
          >
            Do you offer internships?
          </span>
          {open3 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open3 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              We don't have an internship program at this time. We have
              internship opportunities that arise infrequently. If we have an
              internship position available, it will be posted on this page.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>
    </div>
  );
};

export default FAQ;

"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { TbMailForward } from "react-icons/tb";
import { useState, ChangeEvent, FormEvent } from "react";
import { validateEmail } from "@/utils/functions/validateEmail";

interface InputState {
  name: string;
  email: string;
  message: string;
}

interface ErrorState {
  email: boolean;
  required: boolean;
}

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState<InputState>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<ErrorState>({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (message.email && message.message && message.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: FormEvent) => {
    debugger;
    e.preventDefault();
    if (!message.email || !message.message || !message.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
    };

    try {
      debugger;
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          name: message.name,
          email: message.email,
          message: message.message,
        },
        options
      );
      debugger;

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setMessage({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      debugger;
      toast.error(error?.text || error.message || "An error occurred");
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });

    if (name === "email") {
      setError({ ...error, email: !validateEmail(value) });
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength={100}
              required
              name="name"
              value={message.name}
              onChange={handleInputChange}
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Email: </label>
            <input
              required
              type="email"
              name="email"
              maxLength={100}
              value={message.email}
              onBlur={checkRequired}
              onChange={handleInputChange}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Message: </label>
            <textarea
              rows={4}
              required
              name="message"
              maxLength={500}
              onBlur={checkRequired}
              value={message.message}
              onChange={handleInputChange}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-sm text-red-400">
                Name, Email, and Message are required!
              </p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
            >
              <span>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

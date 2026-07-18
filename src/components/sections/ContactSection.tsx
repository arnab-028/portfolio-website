"use client";
import React, { useState, useRef } from "react";
import { Send, Mail, Phone, MapPin, Loader2, Home } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.message) return;
    
    setLoading(true);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstname} ${formData.lastname}`.trim(),
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.firstname}`,
          from_name: "Arnab Kumar Ghosh Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        // Trigger confetti explosion
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#3b82f6", "#a855f7", "#22c55e", "#ffffff"],
        });
        
        // Reset form data
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        alert("Submission failed. Please configure your Web3Forms access key or send an email to arnabg774@gmail.com directly.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please check your internet connection or email arnabg774@gmail.com directly.");
    } finally {
      setLoading(false);
    }

    // Reset success banner after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-neutral-950 relative flex items-center justify-center flex-col px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 items-start justify-center">
        
        {/* Left Side: Contact Information */}
        <div className="flex-1 space-y-8 lg:max-w-md">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-blue-400">
              Reach Out
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Get In Touch
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Have a network design, automation requirement, or contract position? Fill out the form or drop an email directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Email Address</p>
                <a href="mailto:arnabg774@gmail.com" className="text-sm text-neutral-300 hover:text-white transition duration-200">
                  arnabg774@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Phone number</p>
                <a href="tel:+916290573865" className="text-sm text-neutral-300 hover:text-white transition duration-200">
                  +91 6290573865
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-teal-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Current Location</p>
                <p className="text-sm text-neutral-300">Mumbai, Maharashtra (India)</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Permanent Address</p>
                <p className="text-sm text-neutral-300">Chandannagar, West Bengal - 712136</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full max-w-lg relative z-20 rounded-2xl border border-neutral-900 bg-neutral-950/80 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          {submitted ? (
            <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl animate-bounce">
                🎉
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">Message Received!</h3>
              <p className="text-sm text-neutral-400 max-w-xs">
                Thank you for reaching out, Arnab will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstname" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    First Name
                  </label>
                  <InputContainer>
                    <input
                      type="text"
                      id="firstname"
                      required
                      placeholder="Arnab"
                      value={formData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                      className="w-full h-10 px-3 border-none bg-neutral-900 text-white rounded-lg text-sm placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition"
                    />
                  </InputContainer>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lastname" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Last Name
                  </label>
                  <InputContainer>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Ghosh"
                      value={formData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      className="w-full h-10 px-3 border-none bg-neutral-900 text-white rounded-lg text-sm placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition"
                    />
                  </InputContainer>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Email Address
                </label>
                <InputContainer>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="arnabg774@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 border-none bg-neutral-900 text-white rounded-lg text-sm placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition"
                  />
                </InputContainer>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Message
                </label>
                <InputContainer>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or job description..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-2.5 px-3 border-none bg-neutral-900 text-white rounded-lg text-sm placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition resize-none"
                  />
                </InputContainer>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-neutral-100 hover:bg-white text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

// Input Container tracking hover mouse movements for glow border effect (Aceternity style)
const InputContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="p-[1px] rounded-lg transition duration-300 group relative bg-neutral-900 overflow-hidden"
      style={{
        background: `radial-gradient(
          120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
          rgba(59, 130, 246, 0.4) 0%,
          transparent 80%
        )`,
      }}
    >
      <div className="relative rounded-[7px] overflow-hidden">{children}</div>
    </div>
  );
};

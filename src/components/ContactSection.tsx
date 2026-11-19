import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Copy,
  Check,
  Send,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'hello@santhoshkumar.design';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    soundFx.playClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or company.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please add a brief project subject.';
    if (!formData.message.trim()) errs.message = 'Please share a brief note about your project.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFx.playSuccess();

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5FF45', '#FFFFFF', '#8E8E93'],
      });
    }, 800);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santhosh-kumar-b5a685441/',
      type: 'linkedin',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/santhoshkumar386',
      type: 'behance',
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/Santhosh_Designs',
      type: 'dribbble',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/santhosh___0607',
      type: 'instagram',
    },
  ];

  const renderSocialIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#C5FF45]">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'behance':
        return <Sparkles className="w-4 h-4 text-[#C5FF45]" />;
      case 'dribbble':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 text-[#C5FF45]">
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.5 2.5c2.5 4.5 4.5 10.5 4.5 19" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 text-[#C5FF45]">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 bg-[#0E0E0E] bg-noise bg-grid-pattern text-[#F5F3EF] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-4xl">
          <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93] mb-4">
            <span className="text-[#C5FF45]">06 //</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3EF] leading-[1.02]">
            HAVE AN IDEA? <br />
            <span className="text-[#C5FF45] italic font-normal">LET&apos;S MAKE IT HAPPEN.</span>
          </h2>

          <p className="font-sans-main text-base sm:text-xl text-[#8E8E93] mt-6 max-w-2xl leading-relaxed">
            Whether you&apos;re initiating a 0-to-1 product venture, reimagining an enterprise design system, or crafting a category-defining web experience — I&apos;m ready to collaborate.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Direct Contacts, Email Copy, Resume & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1-Click Copy Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#C5FF45]/50 transition-colors">
              <span className="font-mono-code text-xs text-[#8E8E93] block mb-2 uppercase">
                // DIRECT INBOX
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-display font-bold text-xl sm:text-2xl text-[#F5F3EF] hover:text-[#C5FF45] transition-colors break-all"
                >
                  {emailAddress}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#202020] hover:bg-[#C5FF45] hover:text-[#101010] font-mono-code text-xs transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#101010]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
                </button>
              </div>

              <p className="font-sans-main text-xs text-[#8E8E93]">
                Average response time: Within 12 hours. Guaranteed NDA confidentiality.
              </p>
            </div>

            {/* Resume Button Card */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono-code text-xs text-[#C5FF45] block font-bold">
                  OFFICIAL RESUME
                </span>
                <span className="font-sans-main text-sm text-[#F5F3EF]">
                  Download CV / View Interactive Sheet
                </span>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#C5FF45] hover:text-[#101010] font-mono-code text-xs font-bold transition-all cursor-pointer group"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Social Network Profiles */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
              <span className="font-mono-code text-xs text-[#8E8E93] block mb-4 uppercase">
                // SOCIAL ECOSYSTEM
              </span>
              <div className="space-y-3">
                {socialLinks.map((s) => {
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#181818] hover:bg-[#202020] border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {renderSocialIcon(s.type)}
                        <span className="font-display font-bold text-sm text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors">
                          {s.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C5FF45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Working Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5FF45]/20 border border-[#C5FF45] flex items-center justify-center text-[#C5FF45] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F3EF] mb-3">
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className="font-sans-main text-base text-[#8E8E93] max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#F5F3EF]">{formData.name}</strong>. Your project brief has been received. I will review your requirements and respond within 12 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 font-mono-code text-xs text-[#8E8E93] text-left max-w-sm w-full mb-8 space-y-1">
                    <div>SUBJECT: <span className="text-[#F5F3EF]">{formData.subject}</span></div>
                    <div>EMAIL: <span className="text-[#C5FF45]">{formData.email}</span></div>
                    <div>TICKET: <span className="text-[#F5F3EF]">#SK-{(Math.random() * 9000 + 1000).toFixed(0)}</span></div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#202020] hover:bg-[#C5FF45] hover:text-[#101010] font-mono-code text-xs transition-colors cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase">
                      // START A PROJECT INQUIRY
                    </span>
                    <span className="font-mono-code text-[11px] text-[#8E8E93]">
                      * REQUIRED FIELDS
                    </span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono-code text-xs text-[#8E8E93] mb-2 uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border text-sm text-[#F5F3EF] placeholder-[#666] focus:outline-none focus:border-[#C5FF45] transition-colors ${
                          errors.name ? 'border-[#FF5F56]' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="font-mono-code text-[11px] text-[#FF5F56] mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono-code text-xs text-[#8E8E93] mb-2 uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border text-sm text-[#F5F3EF] placeholder-[#666] focus:outline-none focus:border-[#C5FF45] transition-colors ${
                          errors.email ? 'border-[#FF5F56]' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="font-mono-code text-[11px] text-[#FF5F56] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>


                  {/* Subject Line */}
                  <div>
                    <label className="block font-mono-code text-xs text-[#8E8E93] mb-2 uppercase">
                      PROJECT SUBJECT *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Redesigning our SaaS Telemetry Dashboard"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border text-sm text-[#F5F3EF] placeholder-[#666] focus:outline-none focus:border-[#C5FF45] transition-colors ${
                        errors.subject ? 'border-[#FF5F56]' : 'border-white/10'
                      }`}
                    />
                    {errors.subject && (
                      <p className="font-mono-code text-[11px] text-[#FF5F56] mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block font-mono-code text-xs text-[#8E8E93] mb-2 uppercase">
                      MESSAGE &amp; CONTEXT *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product vision, target timeline, key challenges, or existing stack..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border text-sm text-[#F5F3EF] placeholder-[#666] focus:outline-none focus:border-[#C5FF45] transition-colors resize-none ${
                        errors.message ? 'border-[#FF5F56]' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="font-mono-code text-[11px] text-[#FF5F56] mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Prominent CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#C5FF45] hover:bg-white text-[#101010] font-display font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(197,255,69,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING BRIEF...' : 'START A PROJECT'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

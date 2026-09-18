'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  HelpCircle,
  Building2
} from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  TwitterXIcon, 
  YoutubeIcon 
} from '@/components/ui/SocialIcons';
import { faqList } from '@/data/impact';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      try {
        const saved = JSON.parse(localStorage.getItem('inamigos_inquiries') || '[]');
        localStorage.setItem(
          'inamigos_inquiries',
          JSON.stringify([{ ...formData, timestamp: new Date().toISOString() }, ...saved])
        );
      } catch (err) {
        console.error(err);
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 700);
  };

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Connect With InAmigos Foundation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about volunteer drives, CSR partnerships, animal rescue SOS, or donations? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Split Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Reach Our Desk</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                We Are Here For You
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Reach out directly to our central coordinator desk or connect with our regional chapters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Registered Office</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    InAmigos Foundation Central Secretariat
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Plot No. 14, Institutional Area, Sector 44, Gurugram, Delhi NCR – 122003, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Inquiries</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    <a href="mailto:support@inamigosfoundation.org.in" className="hover:text-emerald-600">
                      support@inamigosfoundation.org.in
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Helpline & WhatsApp</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    +91 98712 34567 / +91 11 4567 8900
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Monday to Saturday, 09:30 AM – 06:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Follow Grassroots Updates
              </h4>
              <div className="flex items-center gap-2.5">
                <a href="https://www.instagram.com/inamigos/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/inamigos.inamigos" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/inamigos-foundation/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://x.com/InamigosF" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors">
                  <TwitterXIcon className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@inamigosfoundation" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Interactive Map Mockup */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">National Secretariat Map</h4>
              <p className="text-xs text-slate-500">
                Delhi NCR HQ: Sector 44, Gurugram • Visitors welcome with prior appointment.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                  GPS Coordinates: 28.4595° N, 77.0266° E
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Direct Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              Our support desk will respond via email or phone promptly.
            </p>

            {success ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your query and an InAmigos team member will connect with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Batra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="Volunteer Programs">Volunteer / Internship (Project Vikas)</option>
                      <option value="CSR & Corporate Partnership">Corporate CSR Partnerships</option>
                      <option value="Animal Emergency SOS (Jeev)">Animal Emergency Rescue (Jeev)</option>
                      <option value="Donation & 80G Tax Exemption">Donations & 80G Tax Receipts</option>
                      <option value="Media & Press">Media & Public Relations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you or collaborate together?..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending Message...' : 'Send Message to Desk'}</span>
                </button>
              </form>
            )}

            {/* FAQ Accordion */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-3">
                {faqList.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          expandedFaq === i ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>
                    {expandedFaq === i && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

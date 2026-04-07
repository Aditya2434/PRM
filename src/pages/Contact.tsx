// src/pages/Contact.tsx
import React, { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactStrip from '../components/sections/ContactStrip';
import { ChevronRight, Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResultMessage('');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e0c4e386-1dea-4873-86d2-5edee06ea579",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          from_name: "Paragon Refractories Website",
        }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setResultMessage("Thank you! Your message has been sent successfully.");
        // Clear the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setResultMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResultMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Premium Hero Section */}
        <section className="relative bg-[#0f172a] py-32 md:py-48 overflow-hidden flex items-center min-h-[40vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920')" }}
          ></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80"></div>
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-[40px] md:text-[56px] font-['Helvetica_Neue',_Helvetica,_sans-serif] font-bold text-white mb-6 tracking-[0.5px] drop-shadow-lg">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 text-[16px] font-['Inter',_sans-serif] font-medium text-white/90 bg-white/10 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span className="text-white">Contact</span>
            </div>
          </div>
        </section>

        {/* Enhanced Form Section */}
        <section className="py-24 bg-gray-50 relative">
          {/* Decorative background gradient */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              
              {/* Left Column: Contact Info Cards */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="w-12 h-1.5 bg-[#e63946] mb-8 rounded-full"></div>
                <h2 className="text-[32px] md:text-[48px] font-['Helvetica_Neue',_Helvetica,_sans-serif] font-bold text-[#0f172a] mb-6 tracking-[0.2px] leading-[1.2]">
                  Let's Build <br /> Something Great.
                </h2>
                <p className="text-[18px] md:text-[20px] font-['Inter',_sans-serif] font-normal text-gray-600 leading-[1.6] mb-12">
                  Reach out to us for detailed product specifications, custom refractory solutions, or general inquiries. Our experts are here to help.
                </p>
                
                {/* Info Cards */}
                <div className="space-y-6">
                  {/* Phone Card */}
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(230,57,70,0.1)] transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#e63946] group-hover:text-white transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-['Inter',_sans-serif] font-medium text-gray-400 mb-1">Direct Line</h4>
                      <p className="text-[20px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">+91 9932317334</p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(230,57,70,0.1)] transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#e63946] group-hover:text-white transition-colors duration-300">
                      <Mail className="w-6 h-6 text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-['Inter',_sans-serif] font-medium text-gray-400 mb-1">Email Support</h4>
                      <p className="text-[18px] md:text-[20px] font-['Inter',_sans-serif] font-medium text-[#0f172a] break-all">paragonrefractories22@gmail.com</p>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(230,57,70,0.1)] transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#e63946] group-hover:text-white transition-colors duration-300 shrink-0">
                      <MapPin className="w-6 h-6 text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-['Inter',_sans-serif] font-medium text-gray-400 mb-1">Office Location</h4>
                      <p className="text-[18px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">Durgapur, West Bengal, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: The Elevated Form Card */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-gray-100">
                  <h3 className="text-[24px] font-['Helvetica_Neue',_Helvetica,_sans-serif] font-bold text-[#0f172a] mb-8">
                    Send us a message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                          First Name <span className="text-[#e63946]">*</span>
                        </Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={handleChange}
                          className="h-14 bg-gray-50/50 border-gray-200 rounded-xl px-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800" 
                          required 
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                          Last Name <span className="text-[#e63946]">*</span>
                        </Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={handleChange}
                          className="h-14 bg-gray-50/50 border-gray-200 rounded-xl px-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                          Email Address <span className="text-[#e63946]">*</span>
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="h-14 bg-gray-50/50 border-gray-200 rounded-xl px-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800" 
                          required 
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                          Phone Number
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-14 bg-gray-50/50 border-gray-200 rounded-xl px-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                        Subject <span className="text-[#e63946]">*</span>
                      </Label>
                      <Input 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-14 bg-gray-50/50 border-gray-200 rounded-xl px-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800" 
                        required 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-[16px] font-['Inter',_sans-serif] font-medium text-[#0f172a]">
                        Message <span className="text-[#e63946]">*</span>
                      </Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[160px] bg-gray-50/50 border-gray-200 rounded-xl px-4 py-4 focus-visible:ring-[#e63946]/20 focus-visible:border-[#e63946] resize-y transition-all duration-300 text-[16px] font-['Inter',_sans-serif] font-normal text-gray-800"
                        required 
                      />
                    </div>

                    {/* Feedback Messages */}
                    {status === 'success' && (
                      <div className="flex items-center gap-3 text-green-700 bg-green-50 p-5 rounded-xl border border-green-200">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <span className="text-[16px] font-['Inter',_sans-serif] font-medium">{resultMessage}</span>
                      </div>
                    )}
                    
                    {status === 'error' && (
                      <div className="flex items-center gap-3 text-red-700 bg-red-50 p-5 rounded-xl border border-red-200">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        <span className="text-[16px] font-['Inter',_sans-serif] font-medium">{resultMessage}</span>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-[#e63946] hover:bg-[#c1121f] text-white h-16 text-[18px] font-['Inter',_sans-serif] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-[0_8px_20px_rgb(230,57,70,0.25)] hover:shadow-[0_8px_25px_rgb(230,57,70,0.4)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                        {status !== 'submitting' && <Send className="w-5 h-5 ml-3" />}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Info Strip */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
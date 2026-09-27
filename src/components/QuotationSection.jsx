import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Loader2, Layers, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';

const EQUIPMENT_CATEGORIES = [
  'Aluminium Ladders',
  'FRP Ladders',
  'Tower Ladders',
  'Scaffolding',
  'Scissor Lifts',
  'Lifting Equipment',
  'Material Handling Equipment',
  'Other'
];

export default function QuotationSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    equipment: '',
    quantity: '',
    requirement: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
      if (cleanPhone.length < 10) {
        errs.phone = 'Please enter a valid phone number (at least 10 digits).';
      }
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.equipment) {
      errs.equipment = 'Please select an equipment category.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please tell us about your requirement.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Structured for future API integration
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      equipment: '',
      quantity: '',
      requirement: '',
      message: ''
    });
    setErrors({});
    setStatus('idle');
  };

  // Build pre-filled WhatsApp link (Section 13)
  const buildWhatsAppLink = () => {
    const productStr = formData.equipment || 'Access / Lifting Equipment';
    const quantityStr = formData.quantity || '1 unit';
    const companyStr = formData.company ? formData.company : 'Direct Buyer';
    const reqStr = formData.requirement || 'Industrial application';

    const text = `Hello Creative Work Solutions,\n\nI am interested in your equipment.\n\nProduct: ${productStr}\nQuantity: ${quantityStr}\nCompany: ${companyStr}\nRequirement: ${reqStr}\n\nPlease share the available details and quotation.\n\nThank you.`;

    return `https://wa.me/917989651726?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="enquiry-section"
      aria-label="Main Equipment Quotation Section"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-[#D9E1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: 40% Editorial Guidance (Section 6) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#1268B3]" />
                <span>REQUEST A QUOTATION</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Tell Us What <br />
                <span className="text-[#1268B3]">You Need.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed max-w-md">
                Share your equipment requirement and project details. Our team can review your enquiry and get back to you with dimensional recommendations and pricing.
              </p>
            </div>

            {/* Small Structured Products Block (Section 6) */}
            <div className="p-6 bg-[#F5F7F9] border border-[#D9E1E8] rounded-sm space-y-4">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#111827] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#1268B3]" />
                <span>PRODUCTS</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-[#111827]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                  <span>Access Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                  <span>Lifting Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                  <span>Material Handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                  <span>Scaffolding</span>
                </div>
              </div>
            </div>

            {/* Direct Factory Quotation Notice */}
            <div className="flex items-start gap-3 text-xs text-[#667085] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#1268B3] flex-shrink-0 mt-0.5" />
              <span>
                Direct factory pricing from our Saidabad facility with GST tax invoicing and dimensional load ratings.
              </span>
            </div>
          </div>

          {/* RIGHT: 60% Large Quotation Form (Visual Focus) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D9E1E8] p-6 sm:p-8 lg:p-10 rounded-sm shadow-subtle">
              
              <div className="border-b border-[#D9E1E8] pb-5 mb-7 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight">
                    REQUEST A QUOTATION
                  </h3>
                  <span className="text-xs text-[#667085] mt-1 block">
                    Fields marked with <span className="text-[#1268B3]">*</span> are required
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1268B3] font-bold hidden sm:inline-block">
                  RFQ FORM
                </span>
              </div>

              {status === 'success' ? (
                /* SUCCESS STATE (Section 12) */
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-extrabold text-[#111827]">
                      Thank you.
                    </h4>
                    <p className="text-sm text-[#667085] mt-2 max-w-md mx-auto leading-relaxed">
                      Your enquiry has been prepared successfully. Our technical desk will review your specifications.
                    </p>
                  </div>

                  {/* Secondary WhatsApp forward on success */}
                  <div className="pt-2">
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>CONTINUE ON WHATSAPP →</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#D9E1E8]">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-bold font-mono uppercase tracking-wider text-[#1268B3] hover:underline cursor-pointer"
                    >
                      Submit another quotation request
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* FORM (Section 7, 8, 9, 10, 11) */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Full Name <span className="text-[#1268B3]">*</span>
                      </label>
                      <input
                        id="quote-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh V."
                        className={`w-full px-4 h-[52px] sm:h-[56px] bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden ${
                          errors.name
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                            : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="quote-company" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Company Name
                      </label>
                      <input
                        id="quote-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Pvt Ltd"
                        className="w-full px-4 h-[52px] sm:h-[56px] bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Phone Number <span className="text-[#1268B3]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 h-[52px] sm:h-[56px] bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                            : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Email Address <span className="text-[#1268B3]">*</span>
                      </label>
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className={`w-full px-4 h-[52px] sm:h-[56px] bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden ${
                          errors.email
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                            : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Equipment / Product (Section 8) & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="quote-equipment" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Equipment / Product <span className="text-[#1268B3]">*</span>
                      </label>
                      <select
                        id="quote-equipment"
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleChange}
                        className={`w-full px-4 h-[52px] sm:h-[56px] bg-white border text-sm text-[#111827] rounded-sm transition-all outline-hidden ${
                          errors.equipment
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                            : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.equipment}
                      >
                        <option value="">Select Equipment Category</option>
                        {EQUIPMENT_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.equipment && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.equipment}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="quote-quantity" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                        Quantity
                      </label>
                      <input
                        id="quote-quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 1 unit"
                        className="w-full px-4 h-[52px] sm:h-[56px] bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Row 4: Requirement Type */}
                  <div>
                    <label htmlFor="quote-requirement" className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                      Requirement / Application Environment
                    </label>
                    <input
                      id="quote-requirement"
                      name="requirement"
                      type="text"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="e.g. Warehouse high-bay racking, plant maintenance, construction façade..."
                      className="w-full px-4 h-[52px] sm:h-[56px] bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden"
                    />
                  </div>

                  {/* Row 5: Message Field (Section 9) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="quote-message" className="block text-xs font-bold uppercase tracking-wider text-[#111827]">
                        TELL US ABOUT YOUR REQUIREMENT <span className="text-[#1268B3]">*</span>
                      </label>
                    </div>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your working elevation, dimensions, weight capacity, or site conditions..."
                      className={`w-full p-4 min-h-[140px] max-h-[220px] bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden resize-y ${
                        errors.message
                          ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                          : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    <p className="text-[11px] text-[#667085] mt-1.5">
                      Include project type, required quantity, dimensions or other relevant information if available.
                    </p>
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Actions: Primary CTA (Section 10) & Secondary WhatsApp (Section 13) */}
                  <div className="pt-3 space-y-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group w-full h-[52px] sm:h-[58px] bg-[#1268B3] hover:bg-[#071A2B] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>REQUESTING QUOTATION...</span>
                        </>
                      ) : (
                        <>
                          <span>REQUEST QUOTATION</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    {/* WhatsApp Option (Section 13) */}
                    <div className="pt-3 border-t border-[#D9E1E8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-[#667085] font-medium">
                        Prefer WhatsApp?
                      </span>
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#25D366] transition-colors py-1"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>CHAT WITH US →</span>
                      </a>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

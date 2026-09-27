import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

const PRODUCT_OPTIONS = [
  'Aluminium Step & Platform Ladders',
  'Aluminium Wall Extension Ladders',
  'FRP Non-Conductive Ladders',
  'Tiltable Aluminium Tower Ladders',
  'Hydraulic Scissor Lift Platforms',
  'Dual Mast Aerial Work Platforms',
  'Aluminium Mobile Scaffolding Towers',
  'Hydraulic Drum Lifters & Tilters',
  'Platform Trolleys & Material Handling',
  'Custom Industrial Access Specification'
];

const REQUIREMENT_TYPES = [
  'Industrial Plant Operations',
  'Warehouse & Logistics Facility',
  'Construction & Façade Access',
  'Electrical & Substation Maintenance',
  'Commercial Facility Management',
  'Annual Rate Contract / Tender Requisition'
];

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '1',
    requirement: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.product) {
      newErrors.product = 'Please select the equipment category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    setIsSubmitting(true);

    // Simulate prepared enquiry submission (structured for API hookup)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: '',
      quantity: '1',
      requirement: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  // Build WhatsApp pre-filled message URL
  const buildWhatsAppUrl = () => {
    const productStr = formData.product || 'Access / Lifting Equipment';
    const qtyStr = formData.quantity || '1 unit';
    const compStr = formData.company ? formData.company : 'Direct Buyer';
    const reqStr = formData.requirement || 'Industrial application';

    const text = `Hello Creative Work Solutions,\n\nI am interested in your equipment.\n\nProduct: ${productStr}\nQuantity: ${qtyStr}\nCompany: ${compStr}\nRequirement: ${reqStr}\n\nPlease share the quotation and details.\n\nThank you.`;

    return `https://wa.me/917989651726?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white border border-[#D9E1E8] p-6 sm:p-8 lg:p-10 rounded-sm shadow-subtle">
      {/* Form Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-1.5">
          <span className="w-1.5 h-1.5 bg-[#1268B3]" />
          <span>TECHNICAL ESTIMATE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          REQUEST A QUOTATION
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
          Provide your equipment requirements. Our technical sales desk will prepare an itemized specification and formal price estimate.
        </p>
      </div>

      {isSuccess ? (
        /* Success State */
        <div className="py-8 text-center space-y-5">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#111827]">
              ✓ Enquiry prepared successfully.
            </h4>
            <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto mt-2 leading-relaxed">
              Your quotation requirement has been compiled for our engineering team. For immediate urgent coordination, you can also send this directly via WhatsApp.
            </p>
          </div>

          {/* Quick WhatsApp Forward */}
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONTINUE ON WHATSAPP →</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#D9E1E8]">
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-bold font-mono text-[#1268B3] hover:underline uppercase tracking-wider cursor-pointer"
            >
              Prepare another quotation request
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rfq-name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Name <span className="text-[#1268B3]">*</span>
              </label>
              <input
                id="rfq-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh V."
                className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden min-h-[44px] ${
                  errors.name
                    ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                    : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                }`}
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="rfq-company" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Company / Organization
              </label>
              <input
                id="rfq-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Apex Industrial Pvt Ltd"
                className="w-full px-4 py-3 bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden min-h-[44px]"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="rfq-phone" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Phone <span className="text-[#1268B3]">*</span>
              </label>
              <input
                id="rfq-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden min-h-[44px] ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                    : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                }`}
                aria-required="true"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="rfq-email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Email <span className="text-[#1268B3]">*</span>
              </label>
              <input
                id="rfq-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="procurement@company.com"
                className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm transition-all outline-hidden min-h-[44px] ${
                  errors.email
                    ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                    : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                }`}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Product / Equipment & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="rfq-product" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Product / Equipment <span className="text-[#1268B3]">*</span>
              </label>
              <select
                id="rfq-product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border text-sm text-[#111827] rounded-sm transition-all outline-hidden min-h-[44px] ${
                  errors.product
                    ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500/20'
                    : 'border-[#D9E1E8] focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20'
                }`}
                aria-required="true"
                aria-invalid={!!errors.product}
              >
                <option value="">Select Equipment Category</option>
                {PRODUCT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.product && (
                <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.product}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="rfq-quantity" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Quantity
              </label>
              <input
                id="rfq-quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="1 unit"
                className="w-full px-4 py-3 bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden min-h-[44px]"
              />
            </div>
          </div>

          {/* Row 4: Requirement Application */}
          <div>
            <label htmlFor="rfq-requirement" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
              Requirement / Application Sector
            </label>
            <select
              id="rfq-requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[#D9E1E8] text-sm text-[#111827] rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden min-h-[44px]"
            >
              <option value="">Select Operational Environment (Optional)</option>
              {REQUIREMENT_TYPES.map((req) => (
                <option key={req} value={req}>
                  {req}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Message / Technical Specifications */}
          <div>
            <label htmlFor="rfq-message" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#111827] mb-1.5">
              Message / Specific Dimensions or Working Height
            </label>
            <textarea
              id="rfq-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Specify required platform height, working elevation, payload capacity, or delivery timeline..."
              className="w-full px-4 py-3 bg-white border border-[#D9E1E8] text-sm text-[#111827] placeholder:text-[#667085]/50 rounded-sm focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/20 transition-all outline-hidden resize-y min-h-[100px]"
            />
          </div>

          {/* Action Row: Primary Submit + Secondary WhatsApp Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex-1 px-8 py-4 bg-[#1268B3] hover:bg-[#1597E5] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm min-h-[48px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>PREPARING QUOTATION...</span>
                </>
              ) : (
                <>
                  <span>REQUEST QUOTATION</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Secondary WhatsApp Action (Section 14) */}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#F5F7F9] hover:bg-[#E5E9EE] border border-[#D9E1E8] hover:border-[#25D366] text-[#111827] hover:text-[#25D366] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              title="Chat directly with our sales desk on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>CHAT ON WHATSAPP →</span>
            </a>

          </div>

          {/* Privacy & Response Disclaimer */}
          <div className="pt-2 text-[11px] text-[#667085] font-mono flex items-center justify-between">
            <span>• Direct Hyderabad factory pricing</span>
            <span>• 24–48 Hr turnaround</span>
          </div>

        </form>
      )}
    </div>
  );
}

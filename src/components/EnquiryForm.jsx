import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Phone, Mail, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

const EQUIPMENT_CATEGORIES = [
  'Aluminum Ladders & Scaffolding',
  'Hydraulic Pallet Trucks & Stackers',
  'Aerial Work Platforms',
  'Mobile Access Towers',
  'Drum Handling Equipment',
  'Custom Fabricated Access Solutions'
];

export default function EnquiryForm({ initialProduct = null, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    equipmentCategory: '',
    productModel: '',
    quantity: '1',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (initialProduct) {
      // Map product category or title to our 6 categories if possible
      let matchedCategory = 'Aluminum Ladders & Scaffolding';
      if (initialProduct.category === 'material-handling') {
        matchedCategory = 'Hydraulic Pallet Trucks & Stackers';
      } else if (initialProduct.category === 'scaffolding') {
        matchedCategory = 'Mobile Access Towers';
      } else if (initialProduct.category === 'aerial-platforms') {
        matchedCategory = 'Aerial Work Platforms';
      }

      setFormData((prev) => ({
        ...prev,
        equipmentCategory: matchedCategory,
        productModel: `${initialProduct.name} (${initialProduct.model || 'Standard'})`
      }));
    }
  }, [initialProduct]);

  const validate = () => {
    const newErrors = {};

    // 1. Full Name (Required)
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // 3. Email (Required, Valid format)
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address (e.g. name@company.com).';
      }
    }

    // 4. Phone Number (Required, 10-digit Indian pattern)
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else {
      const cleaned = formData.phoneNumber.replace(/[\s\-()]/g, '');
      const phoneRegex = /^(?:(?:\+|0{0,2})91)?[6789]\d{9}$/;
      if (!phoneRegex.test(cleaned)) {
        newErrors.phoneNumber = 'Enter a valid 10-digit Indian phone number (e.g. 9876543210 or +91 98765 43210).';
      }
    }

    // 5. Equipment Category (Required dropdown)
    if (!formData.equipmentCategory) {
      newErrors.equipmentCategory = 'Please select an equipment category.';
    }

    // 8. Message / Requirements (Required)
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details of your application or requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters detailing your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
      equipmentCategory: true,
      message: true
    });

    if (!validate()) return;

    setStatus('submitting');

    // Simulate reliable frontend submission without claiming fake email dispatch
    setTimeout(() => {
      setStatus('success');
      if (onSuccess) {
        onSuccess(formData);
      }
    }, 700);
  };

  const handleReset = () => {
    setStatus('idle');
    setTouched({});
    setErrors({});
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      equipmentCategory: '',
      productModel: '',
      quantity: '1',
      message: ''
    });
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-sm text-center space-y-5 animate-fade-in">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
          <CheckCircle className="w-7 h-7" />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block">
            Enquiry Recorded Successfully
          </span>
          <h3 className="text-xl font-extrabold text-industrial-dark tracking-tight">
            Thank You, {formData.fullName}
          </h3>
          <p className="text-xs sm:text-sm text-industrial-text-muted max-w-md mx-auto leading-relaxed">
            Your quotation request for <strong className="text-industrial-dark">{formData.equipmentCategory}</strong> has been logged. Our Hyderabad technical engineering desk will review your specifications and contact you shortly.
          </p>
        </div>

        {/* Summary Card */}
        <div className="p-4 bg-industrial-bg-subtle rounded-sm text-left text-xs font-mono space-y-1.5 max-w-md mx-auto border border-gray-200">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pb-1 border-b border-gray-200">
            Enquiry Summary
          </div>
          <p><span className="text-gray-500">Contact:</span> <strong className="text-industrial-dark">{formData.fullName}</strong></p>
          {formData.companyName && <p><span className="text-gray-500">Company:</span> {formData.companyName}</p>}
          <p><span className="text-gray-500">Phone:</span> {formData.phoneNumber}</p>
          <p><span className="text-gray-500">Email:</span> {formData.email}</p>
          <p><span className="text-gray-500">Category:</span> {formData.equipmentCategory}</p>
          {formData.productModel && <p><span className="text-gray-500">Model:</span> {formData.productModel}</p>}
          {formData.quantity && <p><span className="text-gray-500">Quantity:</span> {formData.quantity} unit(s)</p>}
        </div>

        {/* Immediate direct contact fallback */}
        <div className="pt-2 border-t border-gray-200 max-w-md mx-auto">
          <p className="text-xs text-gray-600 mb-3">
            Need an urgent response or immediate site delivery quote?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-industrial-dark hover:bg-industrial-steel text-white text-xs font-bold font-mono uppercase tracking-wider rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-steel" />
              <span>Call +91 79896 51726</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 hover:border-industrial-steel text-industrial-dark text-xs font-semibold rounded-sm transition-colors"
            >
              <span>Submit Another Request</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* 1. Full Name & 2. Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-industrial-dark mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            placeholder="e.g. Ramesh Reddy"
            autoComplete="name"
            aria-invalid={touched.fullName && !!errors.fullName}
            className={`w-full text-xs px-3.5 py-2.5 bg-white border ${
              touched.fullName && errors.fullName
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-gray-300 hover:border-gray-400'
            } rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all`}
          />
          {touched.fullName && errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-industrial-dark mb-1">
            Company / Organization <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            placeholder="e.g. L&T Construction, BHEL, Amazon FC"
            autoComplete="organization"
            className="w-full text-xs px-3.5 py-2.5 bg-white border border-gray-300 hover:border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all"
          />
        </div>
      </div>

      {/* 3. Email & 4. Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-industrial-dark mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="procurement@company.com"
            autoComplete="email"
            aria-invalid={touched.email && !!errors.email}
            className={`w-full text-xs px-3.5 py-2.5 bg-white border ${
              touched.email && errors.email
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-gray-300 hover:border-gray-400'
            } rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all`}
          />
          {touched.email && errors.email && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-bold text-industrial-dark mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            onBlur={() => handleBlur('phoneNumber')}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            aria-invalid={touched.phoneNumber && !!errors.phoneNumber}
            className={`w-full text-xs px-3.5 py-2.5 bg-white border font-mono ${
              touched.phoneNumber && errors.phoneNumber
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-gray-300 hover:border-gray-400'
            } rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all`}
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      {/* 5. Equipment Category (Required Dropdown) */}
      <div>
        <label htmlFor="equipmentCategory" className="block text-xs font-bold text-industrial-dark mb-1">
          Equipment Category <span className="text-red-500">*</span>
        </label>
        <select
          id="equipmentCategory"
          name="equipmentCategory"
          value={formData.equipmentCategory}
          onChange={(e) => handleChange('equipmentCategory', e.target.value)}
          onBlur={() => handleBlur('equipmentCategory')}
          aria-invalid={touched.equipmentCategory && !!errors.equipmentCategory}
          className={`w-full text-xs px-3.5 py-2.5 bg-white border ${
            touched.equipmentCategory && errors.equipmentCategory
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-gray-300 hover:border-gray-400'
          } rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all`}
        >
          <option value="">-- Select Required Category --</option>
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {touched.equipmentCategory && errors.equipmentCategory && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.equipmentCategory}
          </p>
        )}
      </div>

      {/* 6. Product or Model & 7. Estimated Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="productModel" className="block text-xs font-bold text-industrial-dark mb-1">
            Product or Model <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="productModel"
            name="productModel"
            value={formData.productModel}
            onChange={(e) => handleChange('productModel', e.target.value)}
            placeholder="e.g. CWS-EXT-01, Scaffolding Tower 10m, Pallet Truck 2.5T"
            className="w-full text-xs px-3.5 py-2.5 bg-white border border-gray-300 hover:border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-xs font-bold text-industrial-dark mb-1">
            Estimated Quantity <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="1000"
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 bg-white border border-gray-300 hover:border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel font-mono transition-all"
          />
        </div>
      </div>

      {/* 8. Message / Requirements (Required) */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-industrial-dark mb-1">
          Detailed Requirements / Specifications <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder="Please describe working height, load capacity, site constraints, wheel specifications, or delivery location..."
          aria-invalid={touched.message && !!errors.message}
          className={`w-full text-xs px-3.5 py-2.5 bg-white border ${
            touched.message && errors.message
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-gray-300 hover:border-gray-400'
          } rounded-sm focus:outline-none focus:ring-2 focus:ring-industrial-steel transition-all`}
        />
        {touched.message && errors.message && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button with Submitting Spinner & Prevention of Duplicate Clicks */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-industrial-dark hover:bg-industrial-steel text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-industrial-steel" />
              <span>Submitting RFQ...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-industrial-steel" />
              <span>Submit RFQ & Request Quotation</span>
            </>
          )}
        </button>
      </div>

      {/* Trust & Phone Footer */}
      <div className="text-center pt-2">
        <p className="text-[11px] text-gray-500 font-mono">
          Direct Sales Desk: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-industrial-steel font-bold hover:underline">{COMPANY_INFO.phone}</a> • Mon–Sat 9:00 AM – 7:00 PM IST
        </p>
      </div>
    </form>
  );
}

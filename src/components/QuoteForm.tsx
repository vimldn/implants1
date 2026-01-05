'use client'

import { useState } from 'react'

interface QuoteFormProps {
  cityName?: string
  serviceName?: string
  variant?: 'default' | 'hero' | 'sidebar'
}

export default function QuoteForm({ cityName, serviceName, variant = 'default' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    treatmentType: '',
    missingTeeth: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (isSubmitted) {
    return (
      <div className={`bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-2xl p-8 text-center`}>
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You! 🦷</h3>
        <p className="text-slate-600">
          Your consultation request has been received. A {cityName ? `${cityName} ` : ''}dental implant specialist will contact you within 24 hours to discuss your treatment options.
        </p>
      </div>
    )
  }

  const isHero = variant === 'hero'
  const isCompact = variant === 'sidebar'

  return (
    <div className={`${isHero ? 'bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-6 md:p-8 border border-slate-100' : ''}`}>
      {isHero && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Free Consultation Worth £95
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">Get Your Free Assessment</h3>
          <p className="text-slate-500">CT scan included • No obligation</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={isCompact ? 'space-y-4' : 'space-y-5'}>
        <div className={isCompact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400"
              placeholder="07123 456789"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-semibold text-slate-700 mb-2">Postcode</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              required
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400"
              placeholder="SW1A 1AA"
            />
          </div>

          <div>
            <label htmlFor="treatmentType" className="block text-sm font-semibold text-slate-700 mb-2">Treatment Interest</label>
            <select
              id="treatmentType"
              name="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 appearance-none"
            >
              <option value="">Select treatment</option>
              <option value="single">Single Tooth Implant</option>
              <option value="multiple">Multiple Implants</option>
              <option value="all-on-4">All-on-4 (Full Arch)</option>
              <option value="all-on-6">All-on-6 (Full Arch)</option>
              <option value="full-mouth">Full Mouth Implants</option>
              <option value="implant-dentures">Implant Dentures</option>
              <option value="not-sure">Not Sure - Need Advice</option>
            </select>
          </div>

          <div>
            <label htmlFor="missingTeeth" className="block text-sm font-semibold text-slate-700 mb-2">Missing Teeth</label>
            <select
              id="missingTeeth"
              name="missingTeeth"
              value={formData.missingTeeth}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 appearance-none"
            >
              <option value="">Select option</option>
              <option value="1">1 tooth</option>
              <option value="2-3">2-3 teeth</option>
              <option value="4-6">4-6 teeth</option>
              <option value="upper-arch">Full upper arch</option>
              <option value="lower-arch">Full lower arch</option>
              <option value="both-arches">Both arches (full mouth)</option>
              <option value="dentures">Currently wear dentures</option>
            </select>
          </div>
        </div>

        {!isCompact && (
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Tell Us About Your Situation (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400 resize-none"
              placeholder="Any additional details about your dental situation..."
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            <>
              Get My Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-6 pt-2">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Free
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            No Obligation
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            0% Finance
          </div>
        </div>
      </form>
    </div>
  )
}

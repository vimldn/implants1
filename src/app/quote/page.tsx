import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get Free Dental Implant Consultation | No Obligation',
  description: 'Get a free dental implant consultation from specialist UK dentists. Compare prices and find the best treatment for your missing teeth.',
}

export default function QuotePage() {
  return (
    <>
      <section className="hero-gradient py-16 md:py-20">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Free Consultation</span>
          </nav>
          <div className="max-w-xl">
            <h1 className="heading-1 text-white mb-6">Get Your <span className="text-emerald-400">Free</span> Consultation</h1>
            <p className="text-xl text-blue-100">Book a free consultation with specialist implant dentists. Includes CT scan. No obligation, just expert advice on restoring your smile.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Tell Us About Your Dental Situation</h2>
                <QuoteForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: '🦷', title: 'Specialist Dentists', desc: 'GDC registered implant experts' },
                    { icon: '✅', title: 'Free CT Scan', desc: 'Worth £150, included free' },
                    { icon: '💰', title: '0% Finance', desc: 'Spread payments interest-free' },
                    { icon: '⚡', title: 'Quick Response', desc: 'Hear back within 24 hours' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <strong className="text-slate-900">{item.title}</strong>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-3">Need Help Deciding?</h3>
                <p className="text-slate-600 text-sm mb-4">Our team can answer your questions about dental implant options.</p>
                <a href="tel:08001234567" className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  0800 123 4567
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                <div className="flex -space-x-2 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white" />
                  ))}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600"><strong className="text-slate-900">4.9/5</strong> from 2,847 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

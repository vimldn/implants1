import Link from 'next/link'
import { cities, services } from '@/data/cities'

export default function Footer() {
  const popularCities = cities.filter(c => c.tier === 1).slice(0, 8)
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-tight">UK Dental</span>
                <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">Implants</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Connecting UK patients with specialist implant dentists since 2024. Your journey to a restored smile starts here.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDC Registered
              </span>
              <span className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                0% Finance
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Treatments</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Top Locations</h4>
            <ul className="space-y-3">
              {popularCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                    Implants {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                  View all locations
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:08001234567" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">0800 123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ukdentalimplants.co.uk" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">info@ukdentalimplants.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm">Mon-Fri: 9am-6pm<br />Sat: 10am-4pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} UK Dental Implants. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="text-slate-500 hover:text-slate-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

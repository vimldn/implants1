import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { cities, services } from '@/data/cities'

export default function HomePage() {
  const popularCities = cities.filter(c => c.tier === 1)
  const tier2Cities = cities.filter(c => c.tier === 2).slice(0, 12)

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-950/50 to-transparent" />
        
        <div className="container-main relative py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-sm font-semibold">Over 500 Specialist Implant Dentists</span>
              </div>
              
              <h1 className="heading-1 text-white mb-6">
                Restore Your Smile with{' '}
                <span className="text-emerald-400">Dental Implants</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-xl lg:max-w-none leading-relaxed">
                Permanent tooth replacement from specialist UK dentists. Get free consultations, 
                <strong className="text-white"> compare up to 3 quotes</strong>, and find affordable 
                payment plans with 0% finance available.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                {[
                  { icon: '🦷', text: 'Permanent Solution' },
                  { icon: '✓', text: '0% Finance' },
                  { icon: '✓', text: 'Free CT Scan' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white shadow-md" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-200 text-sm"><strong className="text-white">4.9/5</strong> from 2,847 reviews</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100 py-12 -mt-1">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Specialist Dentists', color: 'from-blue-500 to-blue-600' },
              { value: '25+', label: 'Year Implant Life', color: 'from-emerald-500 to-emerald-600' },
              { value: '4.9', label: 'Average Rating', color: 'from-blue-600 to-blue-700' },
              { value: '0%', label: 'Finance Available', color: 'from-emerald-600 to-emerald-700' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">Dental Implant Treatments</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From single tooth replacement to full mouth restoration, find the right solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const colors = ['from-blue-500 to-blue-600', 'from-emerald-500 to-emerald-600', 'from-slate-600 to-slate-700', 'from-blue-600 to-blue-700', 'from-emerald-600 to-emerald-700', 'from-blue-400 to-blue-500']
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="card p-6 group hover:shadow-xl">
                  <div className={`w-14 h-14 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">🦷</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.shortDesc}</p>
                  <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your journey to a restored smile in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />
            
            {[
              { num: '1', icon: '📝', title: 'Share Your Situation', desc: 'Tell us about your missing teeth and goals', color: 'from-blue-500 to-blue-600' },
              { num: '2', icon: '🔍', title: 'Compare Specialists', desc: 'Get free consultations from up to 3 dentists', color: 'from-emerald-500 to-emerald-600' },
              { num: '3', icon: '🦷', title: 'Start Treatment', desc: 'Choose your provider and restore your smile', color: 'from-blue-600 to-blue-700' },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10`}>
                  <span className="text-3xl">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-accent text-lg">
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-slate-900 mb-4">Implant Specialists Near You</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialist implant dentists across all major UK cities
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Major Cities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {popularCities.map((city) => (
                <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-white hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-700 hover:text-blue-600 font-medium transition-all border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tier2Cities.map((city) => (
                <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-white hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-600 hover:text-blue-600 font-medium transition-all border border-slate-100 hover:border-blue-200 text-sm">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/locations" className="btn-secondary">
              View All {cities.length} Locations
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with dental implants. Free consultations available now.
          </p>
          <Link href="/quote" className="btn-accent text-lg">
            Get Your Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { cities, regions, getCitiesByRegion, getCitiesByTier } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Dental Implant Specialists Near You | All UK Locations',
  description: 'Find specialist dental implant dentists across the UK. Get free consultations in your local area with 0% finance available.',
}

export default function LocationsPage() {
  const tier1 = getCitiesByTier(1)
  const tier2 = getCitiesByTier(2)
  const tier3 = getCitiesByTier(3)
  const tier4 = getCitiesByTier(4)

  return (
    <>
      <section className="hero-gradient py-16 md:py-20">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Locations</span>
          </nav>
          <h1 className="heading-1 text-white mb-6">Dental Implant Specialists Across the <span className="text-emerald-400">UK</span></h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Find specialist implant dentists in your area. We cover {cities.length} cities and towns throughout England, Scotland, Wales and Northern Ireland.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: cities.length, label: 'Locations Covered' },
              { value: regions.length, label: 'UK Regions' },
              { value: '500+', label: 'Specialist Dentists' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-2">Major Cities</h2>
          <p className="text-slate-600 mb-6">Dental implant specialists in the UK&apos;s largest cities</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {tier1.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-xl text-center text-blue-700 font-semibold transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-2">Large Cities</h2>
          <p className="text-slate-600 mb-6">Implant dentists in major urban areas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tier2.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-white hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-700 hover:text-blue-600 font-medium transition-colors border border-slate-100 hover:border-blue-200">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-2">Medium Cities</h2>
          <p className="text-slate-600 mb-6">Tooth implant services in growing urban centres</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tier3.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-white hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-600 hover:text-blue-600 font-medium transition-colors border border-slate-100 hover:border-blue-200 text-sm">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-2">Large Towns</h2>
          <p className="text-slate-600 mb-6">Local dental implant providers across the UK</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {tier4.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-white hover:bg-blue-50 px-3 py-2 rounded-lg text-center text-slate-600 hover:text-blue-600 font-medium transition-colors border border-slate-100 text-xs">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-8 text-center">Browse by Region</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const regionCities = getCitiesByRegion(region)
              return (
                <div key={region} className="card p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </span>
                    {region}
                    <span className="text-sm font-normal text-slate-400">({regionCities.length})</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {regionCities.slice(0, 8).map((city) => (
                      <Link key={city.slug} href={`/locations/${city.slug}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                        {city.name}
                      </Link>
                    ))}
                    {regionCities.length > 8 && <span className="text-sm text-slate-400">+{regionCities.length - 8} more</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">Can&apos;t Find Your Location?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We cover most of the UK. Enter your postcode to find specialist implant dentists near you.
          </p>
          <Link href="/quote" className="btn-accent">
            Get Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

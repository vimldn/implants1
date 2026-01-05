import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllCitySlugs, services, getCitiesByRegion, regionImplantData, patientDemographics } from '@/data/cities'
import QuoteForm from '@/components/QuoteForm'

interface PageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return { title: 'City Not Found' }

  return {
    title: `Dental Implants ${city.name} | From £1,800 Per Tooth`,
    description: `Get dental implants in ${city.name} from £1,800. Compare prices from specialist implant dentists in ${city.region}. Free CT scan, 0% finance. Book your consultation.`,
    keywords: [
      `dental implants ${city.name}`, `tooth implant ${city.name}`, `All-on-4 ${city.name}`,
      `implant dentist ${city.name}`, `dental implant cost ${city.name}`, `${city.name} implants`,
    ],
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const nearbyCities = getCitiesByRegion(city.region).filter(c => c.slug !== city.slug).slice(0, 8)
  const implantData = regionImplantData[city.region] || "Various specialist implant dentists serving the local community"
  const demographics = patientDemographics[city.region] || "adults seeking permanent tooth replacement"

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-400/10 to-transparent" />
        
        <div className="container-main relative py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white font-medium">{city.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm font-medium">{city.region} • Specialist Implant Dentists</span>
              </div>

              <h1 className="heading-1 text-white mb-6">
                Dental Implants in{' '}
                <span className="text-emerald-400">{city.name}</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Restore your smile with dental implants in {city.name}. Get a free consultation from specialist 
                implant dentists in {city.name} and throughout {city.region}. Compare prices, access 0% finance, 
                and find the best treatment for your needs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { value: 'From £1,800', label: 'Per Implant' },
                  { value: '0%', label: 'Finance Available' },
                  { value: '25+', label: 'Year Lifespan' },
                  { value: 'Free', label: 'CT Scan' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {['GDC Registered', 'Free CT Scan', 'Lifetime Guarantee'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm variant="hero" cityName={city.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Rich SEO Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="prose-content text-lg">
              <h2 className="heading-2 text-slate-900 mb-6">
                Why Choose Dental Implants in {city.name}?
              </h2>
              
              <p>
                Dental implants have become the gold standard for replacing missing teeth in {city.name}, offering 
                a permanent solution that looks, feels, and functions just like natural teeth. {implantData}. 
                Whether you&apos;ve lost a single tooth due to decay or injury, or need to replace multiple teeth 
                or even a full arch, dental implants provide the most reliable and long-lasting restoration 
                available in modern dentistry.
              </p>

              <p>
                The demand for dental implants in {city.name} continues to grow among {demographics}. Unlike 
                dentures that can slip and require adhesives, or bridges that depend on neighbouring teeth for 
                support, dental implants are anchored directly into your jawbone using titanium posts that fuse 
                with the bone through a process called osseointegration. This creates a foundation as strong as 
                natural tooth roots, supporting crowns, bridges, or dentures that won&apos;t move, click, or cause 
                embarrassment.
              </p>

              <h2 className="heading-2 text-slate-900 mt-12 mb-6">
                Dental Implant Costs in {city.name}: What to Expect
              </h2>

              <p>
                Dental implant costs in {city.name} typically range from £1,800 to £3,500 for a single tooth 
                implant, which includes the titanium implant post, abutment connector, and porcelain crown. 
                For patients requiring multiple implants, costs increase accordingly—a two-tooth implant bridge 
                costs £3,600-£7,000, while partial arch replacements using 2-3 implants to support a bridge 
                range from £5,000-£12,000.
              </p>

              <p>
                Full arch solutions offer significant savings compared to individual implants. All-on-4 treatment, 
                which uses four strategically placed implants to support a complete arch of teeth, costs between 
                £12,000-£20,000 per arch in {city.name}. All-on-6 treatment provides additional stability for 
                £15,000-£25,000 per arch. Full mouth restoration replacing both arches typically ranges from 
                £25,000-£50,000 depending on the technique and materials chosen. Many {city.name} dental 
                practices offer 0% finance options to spread these costs over 12-60 months.
              </p>

              <h2 className="heading-2 text-slate-900 mt-12 mb-6">
                The Dental Implant Process in {city.name}
              </h2>

              <p>
                Your dental implant journey in {city.name} begins with a comprehensive consultation including 
                3D CT scanning to assess your jawbone density, map nerve pathways, and plan precise implant 
                placement. This advanced imaging, often included free in your consultation, allows your implant 
                surgeon to determine exactly where implants should be positioned for optimal results and to 
                identify whether preparatory treatments like bone grafting or sinus lifts are needed.
              </p>

              <p>
                The implant placement procedure itself is typically performed under local anaesthetic, though 
                sedation options are available for anxious patients. The titanium implant post is inserted into 
                the jawbone through a small incision in the gum. After placement, a healing period of 3-6 months 
                allows the implant to fuse with the bone. During this time, you may wear a temporary restoration. 
                Once healed, an abutment is attached to the implant, and your custom-made crown, bridge, or 
                denture is fitted—giving you a permanent, natural-looking smile.
              </p>

              <h2 className="heading-2 text-slate-900 mt-12 mb-6">
                Finding the Best Implant Dentist in {city.name}
              </h2>

              <p>
                Choosing the right implant dentist in {city.name} is crucial for achieving excellent results. 
                Look for practitioners who specialise in implant dentistry with extensive training beyond standard 
                dental qualifications—ideally those who have completed postgraduate implant courses and place 
                hundreds of implants annually. GDC (General Dental Council) registration is essential, and many 
                top implant dentists hold additional qualifications from organisations like the International 
                Congress of Oral Implantologists (ICOI) or the Association of Dental Implantology (ADI).
              </p>

              <p>
                Our network connects you with experienced implant specialists across {city.name} and the wider 
                {city.region} area. All our partner practices use premium implant systems from manufacturers 
                like Straumann, Nobel Biocare, and Dentsply, offering comprehensive guarantees on their work. 
                By comparing consultations from multiple providers, you can find the best combination of 
                expertise, technology, and value for your dental implant treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-4 text-center">
            Dental Implant Treatments in {city.name}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-center mb-12">
            Our {city.name} specialists offer a complete range of implant solutions for every situation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const colors = ['from-blue-500 to-blue-600', 'from-emerald-500 to-emerald-600', 'from-slate-600 to-slate-700', 'from-blue-600 to-blue-700', 'from-emerald-600 to-emerald-700', 'from-blue-400 to-blue-500']
              return (
                <div key={service.slug} className="card p-6 group hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">🦷</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title} {city.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Professional {service.keyword.toLowerCase()} from specialist dentists in {city.name} and throughout {city.region}.
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-slate-900 mb-6">
                Dental Implant Prices in {city.name}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Get transparent dental implant pricing from specialist {city.name} providers. All quotes include 
                consultation, CT scan, implants, and restorations.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: '🦷', title: 'Permanent Solution', desc: 'Implants last 25+ years with proper care' },
                  { icon: '💪', title: 'Preserves Bone', desc: 'Prevents jawbone loss after tooth extraction' },
                  { icon: '🍎', title: 'Eat Anything', desc: 'No dietary restrictions unlike dentures' },
                  { icon: '😊', title: 'Natural Look', desc: 'Custom crowns match your existing teeth' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Implant Prices in {city.name}</h3>
              <div className="space-y-4">
                {[
                  { type: 'Single Tooth Implant', price: '£1,800 - £3,500', desc: 'One missing tooth' },
                  { type: 'Implant Bridge (3 teeth)', price: '£3,500 - £6,000', desc: 'Multiple adjacent' },
                  { type: 'All-on-4 (per arch)', price: '£12,000 - £20,000', desc: 'Full arch solution' },
                  { type: 'Full Mouth (both arches)', price: '£25,000 - £50,000', desc: 'Complete restoration' },
                ].map((item) => (
                  <div key={item.type} className="flex justify-between items-center py-3 border-b border-white/20 last:border-0">
                    <div>
                      <span className="text-white font-medium">{item.type}</span>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                    <span className="font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-blue-200 mt-6">*0% finance available. Prices include CT scan & consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-4 text-center">
            Dental Implant FAQs for {city.name} Patients
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-center mb-12">
            Common questions from {city.name} residents about dental implant treatment
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: `How much do dental implants cost in ${city.name}?`,
                a: `Single tooth dental implants in ${city.name} typically cost £1,800-£3,500 including the implant, abutment and crown. All-on-4 full arch treatment ranges from £12,000-£20,000 per arch, while full mouth restoration costs £25,000-£50,000. Most practices offer 0% finance options.`
              },
              {
                q: `How long do dental implants last?`,
                a: `With proper care and regular dental check-ups, dental implants can last 25 years or more—many last a lifetime. The titanium implant post itself is designed to be permanent, while the crown may need replacement after 15-20 years due to normal wear.`
              },
              {
                q: `Can I get dental implants on the NHS in ${city.name}?`,
                a: `Dental implants are rarely available on the NHS as they're considered a cosmetic treatment. NHS funding is typically reserved for cases involving trauma, cancer reconstruction, or congenital defects. Most patients in ${city.name} access implants through private dental care with flexible payment options.`
              },
              {
                q: `Is dental implant surgery painful?`,
                a: `Dental implant surgery is performed under local anaesthetic, so you won't feel pain during the procedure. Most patients report less discomfort than expected during recovery—similar to a tooth extraction. Sedation options are available for anxious patients.`
              },
            ].map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyCities.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <h2 className="heading-3 text-slate-900 mb-6">Dental Implant Specialists Near {city.name}</h2>
            <p className="text-slate-600 mb-8">We also cover these nearby {city.region} locations:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/locations/${nearbyCity.slug}`}
                  className="bg-slate-50 hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-700 hover:text-blue-600 font-medium transition-all border border-slate-100 hover:border-blue-200"
                >
                  {nearbyCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Restore Your Smile in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with dental implants. Book your free consultation today.
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

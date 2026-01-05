import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, cities } from '@/data/cities'
import QuoteForm from '@/components/QuoteForm'

interface PageProps {
  params: { service: string }
}

const serviceContent: Record<string, {
  heroTitle: string
  heroSubtitle: string
  benefits: { icon: string; title: string; desc: string }[]
  mainContent: { h2: string; paragraphs: string[] }[]
  priceRange: string
}> = {
  'dental-implants': {
    heroTitle: 'Dental Implants',
    heroSubtitle: 'The gold standard for permanent tooth replacement. Restore your smile with implants that look, feel, and function like natural teeth.',
    benefits: [
      { icon: '🦷', title: 'Permanent Solution', desc: 'Implants last 25+ years' },
      { icon: '💪', title: 'Preserves Bone', desc: 'Prevents jawbone deterioration' },
      { icon: '🍎', title: 'Eat Anything', desc: 'No dietary restrictions' },
      { icon: '😊', title: 'Natural Look', desc: 'Custom-matched to your teeth' },
    ],
    mainContent: [
      {
        h2: 'What Are Dental Implants?',
        paragraphs: [
          'Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. Once the implant fuses with the bone through a process called osseointegration, it provides a permanent foundation for replacement teeth—whether that\'s a single crown, a bridge, or a full arch of teeth. This makes implants the closest thing to natural teeth available in modern dentistry.',
          'Unlike dentures that rest on the gums or bridges that rely on adjacent teeth, dental implants are anchored directly in the bone. This provides unmatched stability and prevents the bone loss that naturally occurs when teeth are missing. The result is a restoration that doesn\'t slip, doesn\'t affect speech, and allows you to eat all the foods you love with complete confidence.',
        ]
      },
      {
        h2: 'Benefits of Dental Implants',
        paragraphs: [
          'The advantages of dental implants extend far beyond aesthetics. By replacing the tooth root, implants stimulate the jawbone just like natural teeth, preventing the bone resorption that occurs after tooth loss. This preserves your facial structure and prevents the sunken appearance often associated with missing teeth or long-term denture wear. Many patients report looking years younger after implant treatment.',
          'Functionally, dental implants restore nearly 100% of natural biting force, compared to just 25-50% with traditional dentures. This means you can enjoy steaks, apples, corn on the cob, and all the foods you may have been avoiding. There are no dietary restrictions, no embarrassing slippage during meals, and no need for adhesives. Plus, caring for implants is just like caring for natural teeth—regular brushing, flossing, and dental check-ups.',
        ]
      },
      {
        h2: 'Are Dental Implants Right for You?',
        paragraphs: [
          'Most adults with good general health are candidates for dental implants. The key requirement is having sufficient jawbone density to support the implant—though bone grafting procedures can often build up the bone in patients who initially lack adequate volume. Conditions like uncontrolled diabetes, heavy smoking, or certain medications may affect healing, but many of these factors can be managed with proper planning.',
          'The best way to determine your suitability is through a comprehensive consultation with an implant specialist. Using 3D CT scanning, they can assess your bone density, map nerve pathways, and identify any potential complications before treatment begins. This advanced planning ensures predictable results and allows your dentist to recommend the most appropriate implant solution for your specific situation.',
        ]
      }
    ],
    priceRange: '£1,800 - £50,000',
  },
  'single-tooth-implants': {
    heroTitle: 'Single Tooth Implants',
    heroSubtitle: 'The ideal solution for replacing one missing tooth. A single implant preserves adjacent teeth and provides a permanent, natural-looking restoration.',
    benefits: [
      { icon: '✨', title: 'Preserve Natural Teeth', desc: 'No drilling of adjacent teeth' },
      { icon: '🎯', title: 'Precise Match', desc: 'Custom crown blends perfectly' },
      { icon: '⚡', title: 'Quick Recovery', desc: 'Most return to normal in days' },
      { icon: '💎', title: 'Long-lasting', desc: '25+ years with proper care' },
    ],
    mainContent: [
      {
        h2: 'Why Choose a Single Tooth Implant?',
        paragraphs: [
          'When you lose a single tooth, a dental implant offers significant advantages over traditional alternatives like bridges. Unlike a bridge, which requires grinding down healthy adjacent teeth to create anchor points, a single tooth implant stands independently. This preserves the integrity of your neighbouring teeth and makes future dental work much simpler if ever needed.',
          'A single tooth implant consists of three components: the titanium implant post that integrates with your jawbone, an abutment that connects the post to the visible tooth, and a custom-crafted porcelain crown that matches your natural teeth in colour, shape, and size. The result is virtually indistinguishable from a natural tooth—most people can\'t tell the difference, even up close.',
        ]
      },
      {
        h2: 'The Single Tooth Implant Process',
        paragraphs: [
          'Your treatment begins with a detailed consultation including 3D CT scanning to plan precise implant placement. The implant surgery itself typically takes 30-60 minutes under local anaesthetic. A small incision is made in the gum, and the titanium post is carefully inserted into the prepared site in your jawbone. The gum is then closed, and healing begins.',
          'Over the next 3-6 months, the implant undergoes osseointegration—fusing with your jawbone to create a foundation as strong as natural tooth roots. During this time, a temporary tooth can be worn if the implant is in a visible area. Once healed, your dentist attaches the abutment and takes impressions for your permanent crown, which is custom-made to blend seamlessly with your smile.',
        ]
      },
      {
        h2: 'Single Tooth Implant Cost and Value',
        paragraphs: [
          'A single tooth implant in the UK typically costs £1,800-£3,500, including the implant, abutment, and crown. While this is more than a traditional bridge upfront, implants often prove more economical over time. Bridges typically need replacement every 10-15 years, while implants can last a lifetime with proper care.',
          'When comparing options, consider that bridges require preparation of adjacent teeth (removing healthy enamel) and don\'t prevent bone loss. Over time, the bone under a bridge resorbs, potentially affecting appearance and requiring further dental work. A single tooth implant avoids these issues entirely, making it the most conservative and long-lasting solution for replacing one missing tooth.',
        ]
      }
    ],
    priceRange: '£1,800 - £3,500',
  },
  'all-on-4': {
    heroTitle: 'All-on-4 Implants',
    heroSubtitle: 'A complete arch of fixed teeth supported by just four implants. The revolutionary solution for those who\'ve lost all teeth or need full arch replacement.',
    benefits: [
      { icon: '⚡', title: 'Same-Day Teeth', desc: 'Walk out with a new smile' },
      { icon: '💰', title: 'Cost-Effective', desc: 'Fewer implants needed' },
      { icon: '🔄', title: 'No Bone Grafting', desc: 'Often avoids extra surgery' },
      { icon: '🏆', title: 'Proven Results', desc: '98%+ success rate' },
    ],
    mainContent: [
      {
        h2: 'What is All-on-4 Treatment?',
        paragraphs: [
          'All-on-4 is a revolutionary dental implant technique that uses just four strategically placed implants to support an entire arch of fixed teeth. Developed by Nobel Biocare, this approach positions two implants vertically at the front of the jaw and two at 45-degree angles at the back. This angulation maximises contact with available bone and often eliminates the need for bone grafting procedures.',
          'The "All-on-4" name refers to supporting all teeth on four implants—though the concept can be adapted to use more implants (All-on-6) when additional stability is desired. The key innovation is that patients can receive a full set of functional, fixed teeth in a single day, transforming lives for people who have struggled with failing teeth or ill-fitting dentures.',
        ]
      },
      {
        h2: 'Benefits of All-on-4 Over Dentures',
        paragraphs: [
          'Traditional dentures replace only the visible parts of teeth, not the roots. Without root stimulation, the jawbone gradually resorbs—patients can lose up to 25% of bone width in the first year alone. This leads to shrinking ridges, loose dentures requiring constant adjustment, and the sunken facial appearance associated with long-term denture wear. All-on-4 implants prevent this by stimulating the bone like natural teeth.',
          'Functionally, All-on-4 restores up to 90% of natural biting force compared to just 25-50% with dentures. There\'s no clicking, no slipping, no sore spots from ill-fitting plates. You can eat steak, bite into apples, and speak with complete confidence. Because the teeth are fixed (non-removable), there\'s no embarrassing moment of taking teeth out—your new smile is part of you 24/7.',
        ]
      },
      {
        h2: 'All-on-4 Treatment Timeline',
        paragraphs: [
          'One of All-on-4\'s greatest advantages is same-day teeth. On the morning of your surgery, any remaining teeth are extracted, four implants are placed, and a temporary fixed bridge is attached—all in one appointment. You walk out with a complete set of functional teeth. This temporary bridge is worn for 3-6 months while the implants integrate with your bone.',
          'After the healing period, your temporary bridge is replaced with your final prosthesis—a custom-crafted, permanent set of teeth made from high-quality materials like zirconia or acrylic with porcelain. This final restoration is designed for optimal aesthetics and function, giving you a smile that looks completely natural and can last decades with proper care.',
        ]
      }
    ],
    priceRange: '£12,000 - £20,000 per arch',
  },
  'all-on-6': {
    heroTitle: 'All-on-6 Implants',
    heroSubtitle: 'Enhanced stability with six implants per arch. The premium solution for maximum security and long-term peace of mind.',
    benefits: [
      { icon: '💪', title: 'Extra Stability', desc: 'Six points of support' },
      { icon: '🛡️', title: 'Added Security', desc: 'Redundancy if issues arise' },
      { icon: '🦴', title: 'Better for Some Jaws', desc: 'Ideal for certain bone types' },
      { icon: '✨', title: 'Premium Option', desc: 'Maximum confidence' },
    ],
    mainContent: [
      {
        h2: 'Why Choose All-on-6?',
        paragraphs: [
          'All-on-6 follows the same principle as All-on-4 but uses six implants instead of four to support a full arch of teeth. This additional support can be beneficial for patients with larger jaws, those who grind their teeth, or anyone wanting the extra security that comes with six anchor points instead of four. Some practitioners prefer All-on-6 for the upper jaw, where bone density is typically lower.',
          'The extra implants distribute biting forces across more points, potentially reducing stress on individual implants and the prosthesis. This can be particularly advantageous for patients who place high demands on their teeth or those concerned about long-term durability. While All-on-4 has excellent success rates, All-on-6 offers an additional margin of safety.',
        ]
      },
      {
        h2: 'All-on-6 vs All-on-4: Which is Right for You?',
        paragraphs: [
          'The choice between All-on-4 and All-on-6 depends on individual factors including jaw anatomy, bone density, bite strength, and personal preferences. Both techniques offer excellent outcomes with success rates above 95%. Your implant surgeon will assess your specific situation using 3D imaging and recommend the approach most likely to achieve optimal long-term results.',
          'All-on-6 typically costs more than All-on-4—usually £15,000-£25,000 per arch compared to £12,000-£20,000. The additional investment covers two more implants and the extra surgical time required. For many patients, this added cost is worthwhile for the extra peace of mind and potentially greater longevity it provides.',
        ]
      },
      {
        h2: 'The All-on-6 Experience',
        paragraphs: [
          'Like All-on-4, All-on-6 treatment typically allows same-day teeth—you can receive a temporary fixed bridge on the day of surgery. The process involves removing any remaining teeth, placing six implants at strategic positions around the arch, and attaching your temporary prosthesis. Recovery is similar to All-on-4, with most patients managing discomfort well with standard pain medication.',
          'After 3-6 months of healing, your final prosthesis is fitted. This permanent restoration is custom-designed using digital impressions and high-quality materials. Many patients opt for full zirconia restorations, which offer superior aesthetics and durability. With proper care including regular dental check-ups and good oral hygiene, All-on-6 restorations can last 20 years or more.',
        ]
      }
    ],
    priceRange: '£15,000 - £25,000 per arch',
  },
  'full-mouth-implants': {
    heroTitle: 'Full Mouth Implants',
    heroSubtitle: 'Complete smile restoration for both arches. Transform your entire mouth with a permanent, natural-looking solution.',
    benefits: [
      { icon: '🔄', title: 'Complete Transformation', desc: 'Replace all teeth permanently' },
      { icon: '😁', title: 'Life-Changing', desc: 'Restore confidence fully' },
      { icon: '🍽️', title: 'Full Function', desc: 'Eat anything you want' },
      { icon: '⏳', title: 'Long-Term Value', desc: 'Decades of reliable use' },
    ],
    mainContent: [
      {
        h2: 'What Are Full Mouth Dental Implants?',
        paragraphs: [
          'Full mouth dental implants replace all teeth in both the upper and lower jaws with fixed, permanent prostheses supported by implants. This comprehensive treatment is ideal for patients who have lost all their teeth, have severely failing teeth requiring extraction, or are unhappy with full dentures. The result is a complete new smile that functions like natural teeth.',
          'Several techniques can achieve full mouth restoration. All-on-4 or All-on-6 methods use 4-6 implants per arch to support fixed bridges. Alternatively, individual implants can support separate crowns or bridges throughout the mouth. Your implant surgeon will recommend the approach best suited to your bone structure, budget, and treatment goals.',
        ]
      },
      {
        h2: 'Full Mouth Implant Options',
        paragraphs: [
          'The most common approach for full mouth restoration is dual-arch All-on-4 or All-on-6 treatment—placing implant-supported bridges in both the upper and lower jaws. This typically uses 8-12 implants total and provides fixed teeth that never need removal. Costs range from £25,000-£50,000 for both arches depending on the technique and materials chosen.',
          'For patients wanting the most natural feel possible, individual implants throughout the mouth are an option—though this requires more implants and significantly higher costs (often £50,000-£70,000+). Hybrid approaches are also possible, such as All-on-4 in one arch and individual implants in the other. Your consultation will explore all options to find the best solution for your needs.',
        ]
      },
      {
        h2: 'The Life-Changing Impact',
        paragraphs: [
          'Full mouth implant patients consistently report the treatment as life-changing. Many have suffered for years with painful, failing teeth or struggled with loose, uncomfortable dentures. The transformation to fixed, functional teeth restores not just the ability to eat and speak normally, but confidence, social comfort, and overall quality of life.',
          'Research shows that full mouth implant patients experience significant improvements in nutrition (able to eat healthier foods), social engagement (no longer avoiding situations involving eating), and psychological wellbeing. Many report feeling years younger and describe their new teeth as the best investment they\'ve ever made in themselves.',
        ]
      }
    ],
    priceRange: '£25,000 - £50,000',
  },
  'implant-dentures': {
    heroTitle: 'Implant Dentures',
    heroSubtitle: 'Secure, stable dentures that click onto implants. The affordable alternative to fixed implant teeth.',
    benefits: [
      { icon: '🔒', title: 'Secure Fit', desc: 'No more slipping or clicking' },
      { icon: '💰', title: 'More Affordable', desc: 'Fewer implants needed' },
      { icon: '🧹', title: 'Easy to Clean', desc: 'Remove for thorough cleaning' },
      { icon: '↔️', title: 'Upgradeable', desc: 'Can convert to fixed later' },
    ],
    mainContent: [
      {
        h2: 'What Are Implant Dentures?',
        paragraphs: [
          'Implant dentures—also called implant-retained dentures or overdentures—are removable dentures that snap onto dental implants for secure retention. Unlike traditional dentures that rely on suction or adhesives, implant dentures are anchored to 2-4 implants, providing stability that prevents slipping, clicking, and the sore spots caused by ill-fitting conventional dentures.',
          'The denture itself is similar to a traditional denture but with attachment mechanisms built into the underside. These click onto abutments on the implants, holding the denture firmly in place during eating and speaking. When you want to clean the denture or for sleeping, simply unclip it from the implants. This combination of security and removability appeals to many patients.',
        ]
      },
      {
        h2: 'Implant Dentures vs Fixed Implant Teeth',
        paragraphs: [
          'Implant dentures offer a middle ground between traditional dentures and fully fixed implant teeth like All-on-4. They require fewer implants (typically 2-4 versus 4-6) and cost significantly less—usually £6,000-£15,000 per arch compared to £12,000-£20,000+ for fixed options. This makes them an excellent choice for patients seeking improved denture stability on a tighter budget.',
          'The trade-off is that implant dentures are removable rather than permanently fixed. Some patients see this as an advantage—easier cleaning and the option to remove at night. Others prefer the permanence of fixed teeth. Implant dentures can often be converted to fixed restorations later if desired, simply by adding more implants—making them a flexible first step.',
        ]
      },
      {
        h2: 'Types of Implant Denture Attachments',
        paragraphs: [
          'Several attachment systems connect implant dentures to implants. Ball attachments use a ball-shaped abutment that clicks into a socket in the denture—simple and effective. Bar attachments connect multiple implants with a metal bar, and the denture clips over this bar for maximum stability. Locator attachments offer a low-profile design and easy maintenance.',
          'Your implant dentist will recommend the attachment system best suited to your jaw anatomy and the number of implants placed. All systems significantly improve denture stability compared to conventional dentures. Most patients report that implant dentures feel completely different—secure, stable, and comfortable in a way their old dentures never were.',
        ]
      }
    ],
    priceRange: '£6,000 - £15,000 per arch',
  },
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} UK | Free Consultation & 0% Finance`,
    description: `Get ${service.keyword.toLowerCase()} from specialist UK dentists. Compare prices, find local providers, and book your free consultation today.`,
    keywords: [service.keyword, `${service.keyword} UK`, `${service.keyword} cost`, `${service.keyword} near me`, `best ${service.keyword}`, `${service.keyword} price`],
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find(s => s.slug === params.service)
  if (!service) notFound()

  const content = serviceContent[params.service]
  const popularCities = cities.filter(c => c.tier === 1)

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient-warm overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        
        <div className="container-main relative py-16 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="heading-1 text-white mb-6">
                <span className="text-emerald-400">{content.heroTitle.split(' ')[0]}</span>{' '}
                {content.heroTitle.split(' ').slice(1).join(' ')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">{content.heroSubtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.benefits.map((benefit) => (
                  <div key={benefit.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-blue-200 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm variant="hero" serviceName={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto prose-content text-lg">
            {content.mainContent.map((section, i) => (
              <div key={i} className={i > 0 ? 'mt-12' : ''}>
                <h2 className="heading-2 text-slate-900 mb-6">{section.h2}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="heading-2 text-slate-900 mb-4 text-center">{service.title} Across the UK</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-center mb-12">
            Find specialist {service.keyword.toLowerCase()} providers in major cities nationwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white hover:bg-blue-50 px-4 py-3 rounded-xl text-center text-slate-700 hover:text-blue-600 font-medium transition-all border border-slate-100 hover:border-blue-200"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="btn-secondary">
              View All Locations
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation from specialist implant dentists and discover your options.
          </p>
          <Link href="/quote" className="btn-accent text-lg">
            Get Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="University Campus with mountains" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ag6NkQa4F7l9IdyXWba5EyAeitNRNcvBSUYFhFhgv6svcW7jKhBmabjv9TKQ188YF5VeqhUt0H8QHMULYA8mLLWDa-qgLAIj1sx0XjewEohCfDZB93B58EuPGpYCQET_V38fWedAlOwMoh5wDtEpnmjBRcRXbkcfhPiJVGWY7dYDx0aDKpzMHx24BdJpQwrV_4VurVecwmbwuBCMIX8czqWjjC4THCr_nzijLwUmbfnVfdLMsHXk78L6V7GPz12nrld8hO6D" 
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 grid grid-cols-12 gap-8 items-center w-full">
            <div className="col-span-12 lg:col-span-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
                Excellence in Education
              </span>
              <h1 className="font-headline text-white text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">
                Empowering the <br />
                <span className="text-secondary-container">Future of Pakistan</span>
              </h1>
              <p className="text-white/80 text-xl max-w-2xl font-light mb-10 leading-relaxed text-balance">
                Namal University is a hub of knowledge, innovation, and character building, preparing the next generation of leaders to solve global challenges.
              </p>
              <div className="flex gap-4">
                <button className="primary-cta-gradient text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Discover Namal
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (Floating Bento) */}
        <section className="relative z-20 -mt-24 max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-5xl font-black mb-2">90%</span>
              <p className="text-on-surface-variant font-medium">Employment Rate within 6 months</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-5xl font-black mb-2">100+</span>
              <p className="text-on-surface-variant font-medium">Research Papers Published Annually</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-2xl shadow-on-surface/5 flex flex-col items-center text-center">
              <span className="text-secondary font-headline text-5xl font-black mb-2">5000+</span>
              <p className="text-on-surface-variant font-medium">Global Alumni Network</p>
            </div>
          </div>
        </section>

        {/* Path Cards (Editorial Grid) */}
        <section className="py-24 max-w-screen-2xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tight">Your Journey Starts Here</h2>
            <div className="w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Admissions",
                desc: "Join a community of scholars. Explore our financial aid programs and application process.",
                icon: "school",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJe1M__1mA9uhqTUkrphSFZx35_mgIbhKBsIIeAF5c6uF7QaHApQwgFP8lkmQTqvdJrdCwIlD2xzzW6frvH2YeNTX2aSihxC_vqsLzvrzxdtCXNDkvL8kZN10_JQWU6leXD7oyj12ngCks0skpWdnr2GDorZyqGPus28mctXcpXKBk6oZqyiYS9yvMC63yFoNaf5gZBJK7nRPAKfQWoxLHBUNmSAov2HeM92Hjkq99vco60-jm5qejFYCmtbgLrah6oAyzFA1",
                link: "/admissions"
              },
              {
                title: "Academic Programs",
                desc: "World-class education in Computer Science, Engineering, and Agribusiness Management.",
                icon: "science",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzZjuzYz8hc6W7744K_apaLpXdGWgjbmTsT86Rr-dPdjDCQTj2hgaoZmnea8ozS-KiJcGI8vOOaLbK9Zdojr9K1LEqsmp23UCnjo0OofLWqM0wYTt0Aty0KBUS_2xfb1RG_ljWeE342p1Sb_1Gz7MiWJkj4Yje7ovV5maGJh1Lt_Kn_Zz-S8lQMe9gI_LGXj-fUxF3vxiVuv3sEeQJzAhjyCe2TL65OCMml3c5vhTS6Jda3tK6xloCslzqiftL-WWkycEwpeHl",
                link: "/academics"
              },
              {
                title: "Campus Life",
                desc: "Beyond the classroom—experience a vibrant ecosystem of societies, sports, and culture.",
                icon: "diversity_3",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCksCteDoTB6CpRUh1NJYbZtcmAUTJ5PgVq6kbytz27X22FJfEq980ErmbKjRH6vbQTm4nrGOVcXS8I2qAw3gRFylTd0e9yAzBHaD5QjsUcxrOZHPfS8TmA_tbfIFgybS85kFsLUgs0rBg6TVIIYp47uhATUrz616VbgiuoFbQ-HO4pu9ffVURDHl_OGttw4UGH95W169L0jiuxBTsxpGz0fw3zdOg5hgPzVEVaTClVGtCBUShxr8J_TzoQgA3li2mx2le0C8d",
                link: "/student-life"
              }
            ].map((path) => (
              <Link key={path.title} href={path.link} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-xl h-[450px] mb-6 shadow-sm border border-outline-variant/10">
                  <img alt={path.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={path.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">{path.icon}</span>
                    <h3 className="text-white font-headline text-3xl font-extrabold tracking-tight">{path.title}</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4 text-balance font-medium">{path.desc}</p>
                <span className="text-primary font-black inline-flex items-center group-hover:gap-3 transition-all uppercase text-xs tracking-widest">
                  Learn More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="bg-surface-container-low py-24 mb-24">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tight">News &amp; Updates</h2>
                <p className="text-on-surface-variant font-medium">Stay updated with the latest happenings at the knowledge city.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Namal University 20th Convocation Ceremony Announced",
                  date: "March 15, 2024",
                  tag: "ANNOUNCEMENT",
                  desc: "Celebrating the achievements of the class of 2024 with honored guests and dignitaries from across the globe.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFrK1KhZtyUQbVP1c5tsShpIPL7xAlSb4O7O00E3XInaoIE5VcAGZfRMUrnjMIpuC7Uy_RfGpTJshwu0_RCg3pwTmbTO4tudoVGs13W-oHQsr31p4gcL3_rmbmx5DwFHz03HlXPbGa70GxT7pjFNAkE-y5ZoaFaEPvr2Nhugo4SdCm-cnXy5NXxc7d58ZPyCHOlgKFx48dGZHdJhmw2Po8xZH6xXfMQysgBPJWXjylfI4PXqaOMq-ALV76gFIwZReKHTq-fv7t"
                },
                {
                  title: "Innovation Hub Grant: Strengthening Local Agribusiness",
                  date: "March 10, 2024",
                  tag: "RESEARCH",
                  desc: "Our research team secures a major international grant for developing sustainable irrigation technologies.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4hRXBoVpa6B_qJ9Ya1R6WxXxLshjsb832m5u_g6GXLZL2n5WU9J_WG6H1I-2aHPHAlhWWJWbayiKas7XVxgiOnUR_SX2GBCYu7CE_4Zz36A5MQWVZ8UaEvXQ_siB2gVMOsx0WfpwTA2SYQreqnMq9GcG4gmd18uQq1CikGb7r4CAU6Dk3GwH4yUocr4d9Ho3Upd5Ehh_JwKINt0uYL5w2eohUACuqjKi22z9IpLK8QuDSmDJoh8ZxQwPXsB32zDamjDFBbla"
                },
                {
                  title: "Need-Based Scholarship Applications Open for Fall 2024",
                  date: "March 05, 2024",
                  tag: "ADMISSIONS",
                  desc: "Empowering talent regardless of financial background. Apply for full and partial scholarship programs.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDle4zmFeo5_I6IcEvYkUk3u2sfUb58KPYgXt1F6-pQEgS_mecmj_bm7fFxleF0ID4nMV9F5d1nynqf94CYCsVWLnC_lA9ecfjn_3jieMLdDh7ilLDUThiVJKW9EZnh58akk4VXTD219XvlXxyQ5FjD1i8lLqoCiQYFF_G-UweXN51sungON520MP08CLo_Biqk1QJgZOUUN9w6mbPI1KW8kGaOnZfrlikV5QcwTaWgIEYEOOqWqQQW-ud_2yCWYL6S9xOvvSmf"
                }
              ].map((news) => (
                <div key={news.title} className="bg-white rounded-xl overflow-hidden shadow-xl shadow-primary/5 group border border-outline-variant/10">
                  <div className="h-56 relative overflow-hidden">
                    <img alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={news.img} />
                    <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-lg text-[10px] font-black tracking-widest">{news.tag}</div>
                  </div>
                  <div className="p-8">
                    <span className="text-on-surface-variant text-xs font-bold block mb-2 opacity-60 uppercase tracking-widest">{news.date}</span>
                    <h4 className="font-headline font-black text-xl mb-4 text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-tight">{news.title}</h4>
                    <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed opacity-80">{news.desc}</p>
                    <button className="mt-6 text-primary font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                      Read More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 max-w-screen-2xl mx-auto px-8">
          <div className="bg-primary rounded-3xl p-16 relative overflow-hidden text-center md:text-left shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img 
                alt="Pattern" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA85Gg8ijggVZJ4LJIam0hCr5C8F3Rzc56YsZK33MApisVHwyzDYybVR7nk5Dt70O0jj6vXXzxX462EdFnCddtTqqGW7vKxr9vq5hW5Ya1FNSsGAFKGcqwLDerrW3vVzxLXIWkIwk5nZ1LPuKrxBLnhNyRWvnx4Oxhg6SgbLF0Syjz3ONDqM2w3TbNCeYwcxrjg1yc7Sc0fkVZy-W1NXv2JLKmMU2sHatv78TOsux9ZntYJQDz9cwQ-fajmMu1SoisBaecgB3Gx" 
              />
            </div>
            <div className="relative z-10 md:w-3/5">
              <h2 className="font-headline text-5xl font-black text-white mb-6 leading-tight tracking-tighter">Start Your <br /> Transformation Today</h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed font-light">Whether you are a prospective student, a researcher, or a donor, there{"'"}s a place for you in our mission to build a brighter future.</p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <Link href="/admissions" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-headline font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20 block text-center min-w-[200px]">Apply for Admission</Link>
                <Link href="/faculty" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-headline font-black uppercase text-sm tracking-widest hover:bg-white/20 block text-center min-w-[200px]">Contact Faculty</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

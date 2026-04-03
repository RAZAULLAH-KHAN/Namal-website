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
              alt="University Campus nestled against mountains" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ag6NkQa4F7l9IdyXWba5EyAeitNRNcvBSUYFhFhgv6svcW7jKhBmabjv9TKQ188YF5VeqhUt0H8QHMULYA8mLLWDa-qgLAIj1sx0XjewEohCfDZB93B58EuPGpYCQET_V38fWedAlOwMoh5wDtEpnmjBRcRXbkcfhPiJVGWY7dYDx0aDKpzMHx24BdJpQwrV_4VurVecwmbwuBCMIX8czqWjjC4THCr_nzijLwUmbfnVfdLMsHXk78L6V7GPz12nrld8hO6D" 
            />
            <div className="absolute inset-0 hero-gradient opacity-95"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-12 grid grid-cols-12 gap-8 items-center w-full">
            <div className="col-span-12 lg:col-span-8">
              <span className="inline-block px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl">
                Excellence in Education
              </span>
              <h1 className="font-headline text-white text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-balance">
                Empowering the <br />
                <span className="text-secondary-container">Future of Pakistan</span>
              </h1>
              <p className="text-emerald-50 text-2xl max-w-2xl font-light mb-12 leading-relaxed opacity-90 text-balance decoration-emerald-200/20">
                Namal University is a hub of knowledge, innovation, and character building, preparing the next generation of leaders to solve global challenges.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="primary-cta-gradient text-on-primary px-12 py-5 rounded-2xl font-headline font-black text-xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                  Discover Namal
                </button>
                <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-headline font-black text-xl hover:bg-white/20 transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (Floating Bento) */}
        <section className="relative z-20 -mt-24 max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "90%", label: "Employment Rate within 6 months" },
              { val: "100+", label: "Research Papers Published Annually" },
              { val: "5000+", label: "Global Alumni Network" }
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-primary/10 flex flex-col items-center text-center border border-outline-variant/10 group hover:border-secondary/20 transition-all duration-500">
                <span className="text-secondary font-headline text-6xl font-black mb-4 tracking-tighter group-hover:scale-110 transition-transform">{stat.val}</span>
                <p className="text-on-surface-variant font-bold text-lg opacity-80 leading-tight text-balance">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Path Cards (Editorial Grid) */}
        <section className="py-32 max-w-screen-2xl mx-auto px-12">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter mb-4 leading-tight">Your Journey <br /> Starts Here</h2>
              <div className="w-24 h-2 bg-secondary rounded-full"></div>
            </div>
            <p className="text-on-surface-variant max-w-md text-lg font-medium opacity-70 italic text-balance mb-2">Every path at Namal leads to excellence. Choose your direction and transform your future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Admissions",
                icon: "school",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJe1M__1mA9uhqTUkrphSFZx35_mgIbhKBsIIeAF5c6uF7QaHApQwgFP8lkmQTqvdJrdCwIlD2xzzW6frvH2YeNTX2aSihxC_vqsLzvrzxdtCXNDkvL8kZN10_JQWU6leXD7oyj12ngCks0skpWdnr2GDorZyqGPus28mctXcpXKBk6oZqyiYS9yvMC63yFoNaf5gZBJK7nRPAKfQWoxLHBUNmSAov2HeM92Hjkq99vco60-jm5qejFYCmtbgLrah6oAyzFA1",
                desc: "Join a community of scholars. Explore our financial aid programs and application process.",
                link: "/admissions"
              },
              {
                title: "Academic Programs",
                icon: "science",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzZjuzYz8hc6W7744K_apaLpXdGWgjbmTsT86Rr-dPdjDCQTj2hgaoZmnea8ozS-KiJcGI8vOOaLbK9Zdojr9K1LEqsmp23UCnjo0OofLWqM0wYTt0Aty0KBUS_2xfb1RG_ljWeE342p1Sb_1Gz7MiWJkj4Yje7ovV5maGJh1Lt_Kn_Zz-S8lQMe9gI_LGXj-fUxF3vxiVuv3sEeQJzAhjyCe2TL65OCMml3c5vhTS6Jda3tK6xloCslzqiftL-WWkycEwpeHl",
                desc: "World-class education in Computer Science, Engineering, and Agribusiness Management.",
                link: "/academics"
              },
              {
                title: "Campus Life",
                icon: "diversity_3",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCksCteDoTB6CpRUh1NJYbZtcmAUTJ5PgVq6kbytz27X22FJfEq980ErmbKjRH6vbQTm4nrGOVcXS8I2qAw3gRFylTd0e9yAzBHaD5QjsUcxrOZHPfS8TmA_tbfIFgybS85kFsLUgs0rBg6TVIIYp47uhATUrz616VbgiuoFbQ-HO4pu9ffVURDHl_OGttw4UGH95W169L0jiuxBTsxpGz0fw3zdOg5hgPzVEVaTClVGtCBUShxr8J_TzoQgA3li2mx2le0C8d",
                desc: "Beyond the classroom—experience a vibrant ecosystem of societies, sports, and culture.",
                link: "/student-life"
              }
            ].map((path) => (
              <div key={path.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] h-[550px] mb-8 shadow-2xl shadow-primary/10 transition-all duration-700 hover:shadow-primary/20">
                  <img alt={path.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={path.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 font-black scale-90 group-hover:scale-110 transition-transform">{path.icon}</span>
                    <h3 className="text-white font-headline text-4xl font-black tracking-tighter leading-tight uppercase italic">{path.title}</h3>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-on-surface-variant leading-relaxed mb-6 font-medium text-lg opacity-80">{path.desc}</p>
                  <Link href={path.link} className="text-primary font-black uppercase text-xs tracking-[0.2em] inline-flex items-center group-hover:gap-6 transition-all border-b-2 border-primary/20 pb-1 hover:border-secondary hover:text-secondary group-hover:bg-secondary/5 px-2 py-1 rounded-sm">
                    Learn More <span className="material-symbols-outlined text-sm font-black ml-3">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline text-5xl md:text-6xl font-black text-primary mb-4 tracking-tighter">News &amp; Updates</h2>
                <div className="h-2 w-24 bg-secondary rounded-full"></div>
              </div>
              <div className="flex gap-6">
                <button className="w-16 h-16 rounded-full border-2 border-outline-variant/30 flex items-center justify-center bg-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl shadow-primary/5">
                  <span className="material-symbols-outlined font-black">chevron_left</span>
                </button>
                <button className="w-16 h-16 rounded-full border-2 border-outline-variant/30 flex items-center justify-center bg-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl shadow-primary/5">
                  <span className="material-symbols-outlined font-black">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex gap-10 overflow-x-auto pb-12 snap-x no-scrollbar">
              {[
                {
                  tag: "ANNOUNCEMENT",
                  title: "Namal University 20th Convocation Ceremony Announced",
                  date: "March 15, 2024",
                  desc: "Celebrating the achievements of the class of 2024 with honored guests and dignitaries from across the globe.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFrK1KhZtyUQbVP1c5tsShpIPL7xAlSb4O7O00E3XInaoIE5VcAGZfRMUrnjMIpuC7Uy_RfGpTJshwu0_RCg3pwTmbTO4tudoVGs13W-oHQsr31p4gcL3_rmbmx5DwFHz03HlXPbGa70GxT7pjFNAkE-y5ZoaFaEPvr2Nhugo4SdCm-cnXy5NXxc7d58ZPyCHOlgKFx48dGZHdJhmw2Po8xZH6xXfMQysgBPJWXjylfI4PXqaOMq-ALV76gFIwZReKHTq-fv7t"
                },
                {
                  tag: "RESEARCH",
                  title: "Innovation Hub Grant: Strengthening Local Agribusiness",
                  date: "March 10, 2024",
                  desc: "Our research team secures a major international grant for developing sustainable irrigation technologies.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4hRXBoVpa6B_qJ9Ya1R6WxXxLshjsb832m5u_g6GXLZL2n5WU9J_WG6H1I-2aHPHAlhWWJWbayiKas7XVxgiOnUR_SX2GBCYu7CE_4Zz36A5MQWVZ8UaEvXQ_siB2gVMOsx0WfpwTA2SYQreqnMq9GcG4gmd18uQq1CikGb7r4CAU6Dk3GwH4yUocr4d9Ho3Upd5Ehh_JwKINt0uYL5w2eohUACuqjKi22z9IpLK8QuDSmDJoh8ZxQwPXsB32zDamjDFBbla"
                },
                {
                  tag: "ADMISSIONS",
                  title: "Need-Based Scholarship Applications Open for Fall 2024",
                  date: "March 05, 2024",
                  desc: "Empowering talent regardless of financial background. Apply for full and partial scholarship programs.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDle4zmFeo5_I6IcEvYkUk3u2sfUb58KPYgXt1F6-pQEgS_mecmj_bm7fFxleF0ID4nMV9F5d1nynqf94CYCsVWLnC_lA9ecfjn_3jieMLdDh7ilLDUThiVJKW9EZnh58akk4VXTD219XvlXxyQ5FjD1i8lLqoCiQYFF_G-UweXN51sungON520MP08CLo_Biqk1QJgZOUUN9w6mbPI1KW8kGaOnZfrlikV5QcwTaWgIEYEOOqWqQQW-ud_2yCWYL6S9xOvvSmf"
                }
              ].map((news) => (
                <div key={news.title} className="min-w-[450px] snap-start bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-outline-variant/5 group hover:shadow-primary/10 transition-all duration-500">
                  <div className="h-72 relative overflow-hidden">
                    <img alt={news.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={news.img} />
                    <div className="absolute top-6 left-6 bg-secondary text-on-secondary px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-black/20">{news.tag}</div>
                  </div>
                  <div className="p-10">
                    <span className="text-on-surface-variant text-xs font-black uppercase tracking-widest block mb-4 opacity-50 underline underline-offset-8 decoration-secondary/30">{news.date}</span>
                    <h4 className="font-headline font-black text-2xl mb-6 group-hover:text-secondary transition-colors leading-tight tracking-tight text-balance">{news.title}</h4>
                    <p className="text-on-surface-variant text-base font-medium opacity-70 line-clamp-3 leading-relaxed">{news.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-32 px-12 mb-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="primary-cta-gradient rounded-[3rem] p-16 md:p-32 relative overflow-hidden shadow-2xl shadow-primary/40">
              <div className="absolute top-0 right-0 w-[600px] h-full opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <img 
                  alt="Abstract architectural lines" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA85Gg8ijggVZJ4LJIam0hCr5C8F3Rzc56YsZK33MApisVHwyzDYybVR7nk5Dt70O0jj6vXXzxX462EdFnCddtTqqGW7vKxr9vq5hW5Ya1FNSsGAFKGcqwLDerrW3vVzxLXIWkIwk5nZ1LPuKrxBLnhNyRWvnx4Oxhg6SgbLF0Syjz3ONDqM2w3TbNCeYwcxrjg1yc7Sc0fkVZy-W1NXv2JLKmMU2sHatv78TOsux9ZntYJQDz9cwQ-fajmMu1SoisBaecgB3Gx" 
                />
              </div>
              <div className="relative z-10 md:w-3/5">
                <h2 className="font-headline text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">Start Your <br /> Transformation <br /> Today</h2>
                <p className="text-emerald-50 text-2xl mb-16 leading-relaxed font-light opacity-90 text-balance decoration-emerald-200/20">Whether you are a prospective student, a researcher, or a donor, there{"'"}s a place for you in our mission to build a brighter future.</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <button className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-headline font-black text-xl shadow-2xl hover:bg-secondary-container hover:text-on-secondary-container transition-all hover:scale-105 active:scale-95 min-w-[280px]">
                    Apply for Admission
                  </button>
                  <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-headline font-black text-xl hover:bg-white/20 transition-all min-w-[280px]">
                    Contact Faculty
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

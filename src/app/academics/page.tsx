import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 py-20 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Excellence in Education</span>
              <h1 className="text-6xl md:text-7xl font-extrabold font-headline tracking-tighter text-primary leading-[0.9] mb-8">
                The Future is <br /> <span className="text-secondary">Cultivated</span> Here.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10 font-medium">
                At Namal University, we bridge the gap between rural potential and global opportunity. Explore our rigorous academic programs designed to shape the leaders of tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 group transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  Explore All Programs
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button className="bg-surface-container-high text-on-primary-fixed-variant px-8 py-4 rounded-xl font-bold hover:bg-surface-dim transition-colors">
                  Download Prospectus
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-outline-variant/10">
                <img 
                  alt="Modern university campus building" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEWoy6pbLgS1dy4uYUkPKeU2SVtVg-flx9BAGAwTuFsTwaBtiklVl3pIrqyegrtGane1lWztcCK1eDS8Hq2gTQpXaLqAMnHGByoLd8LcGKdIV4UW1yE1tuyMTcXxLduyB8JTwmHmNSpEV0zva7vD32bEjoOTujwf5Jm7bxVmM7MZjiIYru8s6w0yWBOorOoVMbMmVa4mmFtEuGsaYyinMsgi_mVpEFAjrd-P9WA7AGRv1MKb-1PBPkEnohzYx2BhmdO6aw0y2S" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-container p-8 rounded-2xl z-20 shadow-2xl max-w-[240px] border border-on-secondary-container/10">
                <p className="text-on-secondary-container font-headline font-black text-4xl mb-1 tracking-tighter">98%</p>
                <p className="text-on-secondary-container text-sm font-bold leading-tight">Graduate employment rate within 6 months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Program */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black font-headline tracking-tight text-primary">Featured Program</h2>
              <div className="h-[1px] flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
              <a className="text-secondary font-black flex items-center gap-1 hover:underline uppercase text-xs tracking-widest" href="#">
                View Details <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-primary/5 grid grid-cols-1 lg:grid-cols-2 group border border-outline-variant/10">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black rounded-full uppercase tracking-widest">Top Rated</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest">4-Year Degree</span>
                </div>
                <h3 className="text-5xl font-black font-headline text-primary mb-6 group-hover:text-secondary transition-colors leading-tight">BS Computer Science</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-medium">
                  Our flagship program combines theoretical foundations with hands-on labs in AI, Cybersecurity, and Software Engineering. Accredited by NCEAC, this program prepares students for the global tech ecosystem.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {[
                    { val: "130+", label: "Credit Hours" },
                    { val: "15:1", label: "Student Ratio" },
                    { val: "Global", label: "Opportunities" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-secondary font-black text-2xl tracking-tighter">{stat.val}</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-60">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <button className="primary-cta-gradient text-on-primary w-fit px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  Program Syllabus
                  <span className="material-symbols-outlined text-sm font-bold">description</span>
                </button>
              </div>
              <div className="relative min-h-[400px] overflow-hidden">
                <img 
                  alt="Computer Science student" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ak2MUUSlPc9sr59A1v6iogAGsh7VTFdLZGfIrtoCevXCgEQbdkG7h6iTdR3zwVrwGjJJTZxR6P20phIerhodpm4V1_MM-n5rpkqmPmbg5sGOR35ZvglLM2M4nCnJ-PrGOTfATb1Cg5bavbXUIuB4ExM6vXmBgJkqeMDKbj6YUzcCKk6zhADBNp0FZyF-yF6Q1qtCd7-HLUY41FbfRaBrDMs0CTe3Egb7idRkmtQm7-Jhapw1Pcz5kJ_DWu1xZfVfjjjQMHTK" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Catalog Grid */}
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-black font-headline text-primary mb-6 tracking-tighter">Our Academic Faculties</h2>
            <p className="text-on-surface-variant text-lg font-medium">We offer diverse undergraduate and graduate programs across four primary faculties, each dedicated to research excellence and industry relevance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Engineering",
                icon: "precision_manufacturing",
                progs: ["BS Electrical Engineering", "BS Civil Engineering", "MS Engineering Mgmt."]
              },
              {
                title: "Computer Science",
                icon: "terminal",
                progs: ["BS Computer Science", "BS Software Engineering", "MS Data Science"]
              },
              {
                title: "Business",
                icon: "payments",
                progs: ["BBA (Hons)", "Executive MBA", "BS Agri-Business"]
              },
              {
                title: "Social Sciences",
                icon: "groups",
                progs: ["BS Economics", "BS Psychology", "BS Sociology"]
              }
            ].map((fac) => (
              <div key={fac.title} className="bg-surface-container-low p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group border border-transparent hover:border-outline-variant/10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-on-primary mb-8 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">{fac.icon}</span>
                </div>
                <h4 className="text-2xl font-black font-headline text-primary mb-6 leading-tight">{fac.title}</h4>
                <ul className="space-y-4 mb-10">
                  {fac.progs.map(prog => (
                    <li key={prog} className="text-on-surface-variant text-sm flex items-center gap-3 font-medium">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></span> {prog}
                    </li>
                  ))}
                </ul>
                <Link href="/faculty" className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all">
                  Explore Faculty <span className="material-symbols-outlined text-lg">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Pillars */}
        <section className="py-24 relative overflow-hidden bg-primary mb-24">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              alt="Library" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2i_pK-1vWkaz-D_qpdjWnkNGeIM0dXpWmzPfTJ-iY0HU6TwQI1E4KlCeWTJvedYkkfMrbLctqP73ltof628rwD4mdeB8CDyD45-aics8oE6-PX33Xg8ePLrotCUQYAtHkV0DbGUPPUTDkGdRcNV4XKxARgGD_KPnSU2kCX4y_nAIduheRXc-_HJoMmInTtMj0wgUzLRQrztAR9h0NN0UuDv8ogFOmtImzWst5oJkUfJbrRSJYmq9xUCb2xSYEpmfqOL9h8Ss" 
            />
          </div>
          <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
            <h2 className="text-5xl font-black font-headline text-white mb-20 border-l-8 border-secondary pl-8 tracking-tighter">Our Academic Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  title: "Research-Driven Pedagogy",
                  desc: "Learning at Namal is not confined to textbooks. We emphasize inquiry-based learning where students participate in active research from their sophomore year."
                },
                {
                  title: "Industry Integration",
                  desc: "Our curricula are developed in consultation with industry leaders to ensure that every Namal graduate is day-one ready for professional challenges."
                },
                {
                  title: "Social Responsibility",
                  desc: "We believe knowledge must serve humanity. Every program includes modules on ethics, sustainability, and community service."
                }
              ].map((pillar) => (
                <div key={pillar.title} className="space-y-6">
                  <h5 className="text-2xl font-black font-headline text-secondary-container leading-tight">{pillar.title}</h5>
                  <p className="text-white/80 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

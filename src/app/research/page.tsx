import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="High-tech laboratory" 
              className="w-full h-full object-cover grayscale-[0.3] opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTEuuKG1SK8XJZH60NDCU2g-iElXyrmFia56wfWcx-UPzBq0UoTbr3knDCJGdaGSgnYAX3xZo9pjrxzJvO64M25A-Z7uMBso0EdvKETk77aD5VrvqCvOiop82pUDt03UEqk0FhVG7kNb81a_Vx5nGLWcLqfT4FK-cXUgKWr7HWt3FOQPGRVPlV4ap_0Gj8GkN9hrb_wyoEEtpsiVcCtyHNSSOntGeBfsq6HtEbMj9YDt46IuBxDzajNK2_gb1NQOgL0HO5yua" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-12 md:ml-[5%] md:mr-[15%] max-w-4xl text-white">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">Discovery &amp; Impact</span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Research at <br /> <span className="text-secondary-container">Namal</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-emerald-50 opacity-90 max-w-2xl text-balance">
              Pioneering solutions for global challenges through rigorous inquiry and interdisciplinary innovation in the heart of rural excellence.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <button className="bg-gradient-to-br from-secondary to-secondary-container text-on-secondary px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl shadow-secondary/20">
                Explore Our Impact
              </button>
              <button className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white/20 transition-all">
                Global Partners
              </button>
            </div>
          </div>
        </section>

        {/* Innovation Hubs - Bento Grid */}
        <section className="py-24 px-12 bg-surface">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h2 className="font-headline text-5xl font-black text-primary tracking-tighter mb-4">Innovation Hubs</h2>
              <div className="h-2 w-24 bg-secondary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[700px] auto-rows-fr">
              {/* Hub 1 */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low transition-all duration-700 shadow-xl shadow-primary/5 hover:shadow-2xl">
                <img 
                  alt="Solar panels in field" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHW01PuMQJ8wIgAf0uA2ooXZI3hPd4o7sYqKfZfVWtGcMgA9MqBXVlKbHASHoTXDj8TxNXf7qwT1grnrWR7kIKCeZf4ANWpWa0tF3UjpHt0XpqckIh2Y_SSO5K0-MZwdnB27-11qtDx_ColLP--k6--72SiyDylRWVi2YESQqMKBEuf-6JN2QdGOigX1E_9oR3jElu-WwrHFIvVuxLQRaNhcQ1YA8EWHmIpbAEXSjpffm9uVuqDpEW6Hrkj84GnZU1nt2_nCf4" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 p-12 text-white">
                  <h3 className="text-4xl font-black font-headline mb-4 tracking-tighter">Center for Sustainable Energy</h3>
                  <p className="text-emerald-50 max-w-lg mb-8 font-medium leading-relaxed">Developing indigenous solar technologies and grid management systems to power remote communities across Pakistan.</p>
                  <span className="inline-flex items-center gap-2 text-secondary-container font-black text-xs uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                    View Laboratory <span className="material-symbols-outlined font-black">arrow_forward</span>
                  </span>
                </div>
              </div>
              
              {/* Hub 2 */}
              <div className="md:col-span-4 bg-white p-12 rounded-[2.5rem] flex flex-col justify-between border border-outline-variant/10 shadow-xl shadow-primary/5 group hover:border-secondary/20 transition-all">
                <div>
                  <div className="w-20 h-20 bg-primary rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors duration-500">
                    <span className="material-symbols-outlined text-white text-4xl">smart_toy</span>
                  </div>
                  <h3 className="text-3xl font-black font-headline text-primary mb-6 tracking-tighter">AI &amp; Robotics Lab</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 font-medium italic">Focused on precision agriculture and automated irrigation systems using satellite data and machine learning.</p>
                </div>
                <ul className="space-y-6 border-t border-outline-variant/10 pt-10">
                  <li className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-primary">
                    <span className="w-3 h-3 rounded-full bg-secondary shadow-sm"></span> 12 Active Projects
                  </li>
                  <li className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-primary">
                    <span className="w-3 h-3 rounded-full bg-secondary shadow-sm"></span> $2.4M External Funding
                  </li>
                </ul>
              </div>

              {/* Hub 3 */}
              <div className="md:col-span-4 bg-primary p-12 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black font-headline mb-6 tracking-tighter leading-tight">Digital Literacy <br /> Initiative</h3>
                    <p className="text-emerald-50 mb-10 font-medium leading-relaxed opacity-80">Bridging the urban-rural divide through accessible education technology and localized digital platforms.</p>
                  </div>
                  <button className="bg-secondary text-on-secondary w-fit px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg shadow-secondary/10">Project Portfolio</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-12 -right-12 text-[180px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000 pointer-events-none">school</span>
              </div>

              {/* Hub 4 */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low transition-all duration-700 shadow-xl shadow-primary/5 hover:shadow-2xl">
                <img 
                  alt="Molecular biology lab" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByT8PFRB6qrwB_C933NfKnNX-sxYiPJixVzmOpNjTd8yRsjvpHEcytkVDGnW86xWzcWNM5tO_WpXEZMGRCsBmidKWp3SrmwpGJDODANoIFXjdr0XEz73SuQ05_bdHiV9WT_Zgcr6yYEgewHY2tO5QakDJ5qYciDrAhhtvHIcu0XIN-rIsQQAsFxltUneR_PbCrkwdT6J0YiNtGg66CAF_uQvVneT4Zuw3XyNb_v_QBTwcyPNg-F7Y5m720MtqE-lNODuGqMfq3" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 p-12 text-white">
                  <h3 className="text-4xl font-black font-headline mb-4 tracking-tighter">Molecular Biology Unit</h3>
                  <p className="text-emerald-50 max-w-lg font-medium leading-relaxed opacity-90">Genetic sequencing for drought-resistant crop varieties adapted to the salt range ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Impact Section */}
        <section className="py-32 bg-white">
          <div className="px-12 md:ml-[5%] md:mr-[10%] flex flex-col md:flex-row gap-24 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline text-5xl md:text-7xl font-black text-primary mb-10 leading-[0.9] tracking-tighter">Global <br /> Collaborations, <br /><span className="text-secondary">Local Impact</span></h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-medium opacity-80 decoration-slate-200">
                Our research ecosystem extends beyond the Namal Valley. We collaborate with leading institutions worldwide, including Oxford, Bradford, and ITU, to ensure our research meets international standards while addressing the urgent needs of our local community.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: "45+", label: "Partner Institutions" },
                  { val: "200+", label: "Annual Publications" }
                ].map((stat) => (
                  <div key={stat.label} className="p-8 bg-surface-container-low rounded-[2rem] shadow-sm border border-outline-variant/10 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <span className="block text-5xl font-black text-secondary mb-3 tracking-tighter group-hover:scale-110 transition-transform">{stat.val}</span>
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary opacity-60">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-secondary-container/30 transition-colors"></div>
              <img 
                alt="International collaboration" 
                className="relative z-10 rounded-[2rem] shadow-2xl grayscale-[0.2] border-[12px] border-white group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaexgcrPnUqBG0pvjOdTCgU8c2RidzqqvPFtYQOTGBvfEbwmvfq3ZjdmviBdJSVR-8T7RzqAdH7_PBgjTQL5Dg2LHGkeNHRwfbhDwxEtm7YkiDNMhIMzxx_4UC0BQvYQ6cmKC5NQKo2u0OhIYDCoZ7yNuHQJ6H76IScFKQQg25pEldj_NC5XK3_XMpJFb-zg1Da2aM0FA0B1wSHe0ChiFOrYVtB7RqdEz7y8BJDmjCIZP_RTREIvp9fquaLs42RVXFs12bSGX_" 
              />
            </div>
          </div>
        </section>

        {/* Latest Publications */}
        <section className="py-24 px-12 bg-surface-container-low">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h2 className="font-headline text-5xl font-black text-primary mb-4 tracking-tighter">Latest Publications</h2>
                <p className="text-on-surface-variant text-lg font-medium opacity-80">Scholarly contributions to the global academic landscape.</p>
              </div>
              <button className="text-primary font-black uppercase text-xs tracking-widest flex items-center gap-3 group border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
                Explore Full Repository <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { type: "Journal of Applied Physics • 2024", title: "Thermal Efficiency of Nano-fluids in Solar Collectors: A Localized Study", authors: "Dr. Ahmed Shah, Prof. Michael Thorne, Dr. S. Malik", dept: "Renewable Energy" },
                { type: "AI in Agriculture Review • 2023", title: "Machine Learning Models for Soil Moisture Prediction in Arid Zones", authors: "Z. Fatima, R. Khalid, Dr. B. Anderson", dept: "Artificial Intelligence" },
                { type: "Educational Technology Quarterly • 2023", title: "Quantifying the Impact of Low-Cost Digital Education in Rural Communities", authors: "M. Ibrahim, Dr. J. Wright", dept: "Social Impact" }
              ].map((pub) => (
                <div key={pub.title} className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-white border border-outline-variant/10 hover:border-secondary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-[2rem]">
                  <div className="flex-1">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4 block underline underline-offset-4 decoration-secondary/30">{pub.type}</span>
                    <h4 className="text-2xl font-black font-headline text-primary mb-3 group-hover:text-secondary transition-colors cursor-pointer leading-tight tracking-tight">{pub.title}</h4>
                    <p className="text-sm text-on-surface-variant font-medium opacity-70 italic">{pub.authors}</p>
                  </div>
                  <div className="mt-8 md:mt-0 flex items-center gap-6">
                    <span className="px-5 py-2 bg-surface-container-low text-[10px] font-black uppercase tracking-widest rounded-full text-primary border border-outline-variant/5">
                      {pub.dept}
                    </span>
                    <button className="material-symbols-outlined text-primary hover:text-secondary hover:scale-125 transition-all duration-300 font-bold">download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join our Research Ecosystem */}
        <section className="py-24 px-12 mb-24">
          <div className="max-w-[1920px] mx-auto">
            <div className="bg-primary/95 rounded-[3rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-headline text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Join Our <br /> Research Ecosystem</h2>
                <p className="text-xl opacity-80 mb-16 leading-relaxed font-light text-balance text-emerald-50">Whether you are a prospective graduate student, a seasoned academic, or an industry leader, Namal offers a unique environment for transformative research.</p>
                <div className="flex flex-wrap justify-center gap-8">
                  <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all hover:scale-105 active:scale-95 shadow-2xl">Apply for Fellowship</button>
                  <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all">Industry Partnerships</button>
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

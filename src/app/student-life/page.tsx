import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section: Editorial Style */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Diverse students laughing and walking together" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIijkCcDTd2CCzJoQwa0oY43krKRH_BK77nbBgftGB99zy5yy9MrNtXRMnYqRve89GdoW21cTsQjDQrpXBuo-QfrNqOQOE1sZMqt6XC8iZvtqh0LTbN9jJdnWwFYvpNx4j_8kfni-t-XVJStMwbSQ0ltj1v7itpJUUXi0elQcGq8Wo7OGEOSQmYKym9t4DGr67VRTEcB_LrZu07m4Emg_8Y2IQAGvWoNNH7RP-_yq8pbmk_Av-tVUa6JiUQ_6WCTNiL4TUCB4-" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full">
            <div className="max-w-3xl space-y-8">
              <span className="inline-block px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-headline font-black text-xs tracking-[0.3em] uppercase shadow-lg">CAMPUS EXPERIENCE</span>
              <h1 className="font-headline font-black text-white leading-[0.95] tracking-tighter text-7xl md:text-9xl">
                Life Beyond <br /> Lectures.
              </h1>
              <p className="text-emerald-50 max-w-xl leading-relaxed text-2xl font-light opacity-90 text-balance decoration-emerald-200/20">
                At Namal, education is lived, not just learned. Join a community that celebrates diversity, sparks innovation, and builds lifelong bonds.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <button className="bg-secondary text-on-secondary px-10 py-5 rounded-2xl font-headline font-black text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-2xl shadow-secondary/20">Explore Clubs</button>
                <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-headline font-black text-lg hover:bg-white/20 transition-all">Student Stories</button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Clubs & Societies */}
        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-primary">Vibrant Communities</h2>
                <p className="text-on-surface-variant max-w-xl text-xl font-medium opacity-80 leading-relaxed text-balance">From high-stakes debating to building the next generation of robotics, find your tribe among 50+ student-led organizations.</p>
              </div>
              <button className="text-secondary font-headline font-black uppercase text-xs tracking-widest flex items-center gap-3 border-b-2 border-secondary pb-1 hover:gap-6 transition-all">
                View All Clubs <span className="material-symbols-outlined font-black">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[900px]">
              {/* Robotics */}
              <div className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700">
                <img 
                  alt="Engineering students working on a robot prototype" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDAc0LScxril871h9cjHZ3eiR59-ev7VtPEHGzC1pGeHKWa-z96krM8eHxv4gY-i93Yj-Fmii4uKA9uFKHCE_E99JatkY-ee8Pq09p67EvRjAHqDBhK_tcH8FbW1DapErjvvh7XSJvexyVDw9qOdx8NKgn9YzFY__tm7EPjbT9HKbRrtk7anOpfePdXgxc_KGMc4olEDpVc8h0n9aSDpoKs9dHpewdpgspm1kFCcLUHJ7NWxxaKMfL3dP8M8DOFwK9FOIq-cC" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent flex flex-col justify-end p-12">
                  <span className="text-secondary-container font-headline font-black text-xs tracking-[0.3em] uppercase mb-4 decoration-secondary/30 underline underline-offset-8">INNOVATION</span>
                  <h3 className="text-white text-5xl font-black font-headline tracking-tighter mb-4 leading-tight">Namal Robotics Society</h3>
                  <p className="text-emerald-50 max-w-md mt-2 font-medium opacity-80">Competing in international arenas and building the future of automated systems.</p>
                </div>
              </div>
              {/* Athletics */}
              <div className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  alt="Student athlete playing cricket" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGYV9j653dCsYMNooLJgKskadCYACbgoqyJ6rzCkF1uR8cExyuh0bGhmP8Z8WH9rv4v6W69dFuO8pqxhnJdb3FAGubzEa11SXn7R-FvtG35Qhc3nHraZ5lznEu1GRl8ULGDEC-af3uhu6KUT5NMcaz6cTok9ejvnLmNGMhPVMsR_CMCoxXgQjI4RfbX5lKeeTlrV0cHrdRGjhhNVnf0MtIi0TtWZVlh8ewV_qsqjeZaN5JpkIt7IAqKjp96Kdn6zT8HRwJLsq" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent flex flex-col justify-end p-12">
                  <span className="text-secondary-container font-headline font-black text-xs tracking-[0.3em] uppercase mb-4">ATHLETICS</span>
                  <h3 className="text-white text-4xl font-black font-headline tracking-tighter leading-tight text-balance">Titans Athletics</h3>
                </div>
              </div>
              {/* Arts */}
              <div className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  alt="Student painting abstract canvas" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFhoMrJ37hNvUz6DdChE1eljl9kQ1uDv-9xlNtW_dL4T0j89-aHd7oHObV0OTFVV0nfOJ1GgfRC8QbqvHjxDXl92xhFrkAQ4tiBfJ9-hofNKTr-ZlAN5ty6yv3QR5FzbXHfoj1GadgjntxhtmtG8fKd94wlbODbGdi4w3strAtxF-xH_w6XYa2MDAlRUz4yJZke7Vc62vAONzs_X9YR6y-aQJ_MU86E6JiixRXtv9t_VKsMdVn_BnsKqqony1Tlo-XxxOw-kgE" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent flex flex-col justify-end p-12">
                  <h3 className="text-white text-4xl font-black font-headline tracking-tighter leading-tight">Performing Arts <br /> &amp; Culture</h3>
                </div>
              </div>
              {/* Debating */}
              <div className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  alt="Student speaking at a debate competition" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNgdh79Hyu_r9DTC5591V2xNXCkQfPugchmqT0tLZb2GoD1tafdstjnZzk5tJGoWlj6OT21cFHtMnTScufrxa_KP0IY_67XwSaHqDFnspe1q641HoT9n9rY2-zvn0glk9wiA2AiZF2u9IDBI1FqPOOWQ81Nd9SIiw0V5s29Rue75OFghAIhwWbHOgMbPSc7Y0Ta3wLtO6OsRdEQRDjAYKMvn-Heu_eJXT9l0HPnA6aDLFKtg6VMQyg-kUdYkGOmT95N9wRFrPQ" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent flex flex-col justify-end p-12">
                  <span className="text-secondary-container font-headline font-black text-xs tracking-[0.3em] uppercase mb-4">LEADERSHIP</span>
                  <h3 className="text-white text-5xl font-black font-headline tracking-tighter leading-tight mb-4">The Debating Union</h3>
                  <p className="text-emerald-50 max-w-md mt-2 font-medium opacity-80">Sharpening minds and voices through rigorous dialogue and international tournaments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="relative py-32 bg-surface-container-low overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-12 grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-[-3deg] transition-transform hover:rotate-0 duration-700 border-[12px] border-white group">
                <img 
                  alt="Aerial view of sustainable campus architecture" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOzDF28jYpM1rXbHiy2iSfebIkdTEShDRlK7813NXF1odzIKUFqVGy15_hS54tA6a2rJyKUBTAPd7M3q_vPlYfJkGRSSB1C0U026e-_pZSE3zVwP_tILNecfJQu8PONUtTciqAVuY0MDTBNlBNxn8nHxTNVVmF4pSjPMdVLaPOgEbjCrdpCYJcmlVPkD8iMfR5VCSlsz75c_DdulrOISnWF7e_fq5-Q89Eanu5HUtE_VZ3UelSjx022byt98cI2MzdUUdSmDb" 
                />
              </div>
              <div className="absolute -bottom-12 -right-6 bg-white p-10 rounded-[2rem] shadow-2xl max-w-xs border border-outline-variant/10 group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-3xl font-black">explore</span>
                  </div>
                  <h4 className="font-headline font-black text-2xl text-primary tracking-tighter">Interactive Map</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium mb-6 italic opacity-80 text-balance text-left leading-relaxed font-medium mb-6 italic opacity-80 text-balance">Experience our state-of-the-art labs and social spaces from anywhere in the world.</p>
                <button className="text-secondary font-black uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Start Tour <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-12">
              <h2 className="text-6xl md:text-8xl font-headline font-black text-primary tracking-tighter leading-[0.9]">Our Habitat <br />for Innovation</h2>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed opacity-80 text-balance">
                Namal is more than just a place to study; it{"'"}s a living laboratory. Our campus is designed to inspire collaboration, sustainability, and curiosity. 
              </p>
              <div className="space-y-8">
                {[
                  { title: "Smart Laboratories", desc: "Equipped with the latest industry-standard technology for practical learning." },
                  { title: "Creative Studios", desc: "Dedicated spaces for music, art, and content creation." },
                  { title: "Zero-Carbon Housing", desc: "Modern, comfortable living that respects the environment." }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6 group">
                    <span className="material-symbols-outlined text-secondary mt-1 text-3xl font-black group-hover:scale-125 transition-transform">check_circle</span>
                    <div className="border-b border-outline-variant/10 pb-6 w-full">
                      <h5 className="font-headline font-black text-2xl text-primary mb-2 tracking-tight leading-tight">{item.title}</h5>
                      <p className="text-sm text-on-surface-variant font-medium opacity-70 leading-relaxed text-balance">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Stories Section */}
        <section className="py-24 bg-white mb-24">
          <div className="max-w-screen-2xl mx-auto px-12 text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-headline font-black text-primary tracking-tighter mb-6 leading-tight">Student Stories</h2>
            <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-screen-2xl mx-auto px-12 grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Ahmed",
                dept: "Computer Science, Class of 2025",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZJGSA6s2pCbIoVdOViP4ZW3iunZdBqDiph4FOW6ShO2_xLPoLtO4NGmqVlwomIsQIXRP1golCyJW3ZD9Qk4zpQp2MNpj1Zv5Z18eRZ2pn0Y48bMD-qMD_jys43YW2FjCLOcAvHsZwrPMmkDlhqKfWd9naaOMH-PHwPOrUnG1NKDXo-K5b_l9tmQm_2VDtORgHAQt3TxmOLqa-K2FtXJV7oJH_8qFtqwJUc9QZbHuZGhy7MkHR-U7v0fUUii4co3QDtlynUI9q",
                quote: "The Robotics Society didn't just teach me how to code; it taught me how to lead. We went from a small idea to winning a national competition in just one year."
              },
              {
                name: "Zain Malik",
                dept: "Electrical Engineering, Class of 2024",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbnr1VRvnE94jRC4RYsTHWfVo-n6qCtPfnU56ZVv6MbZ7pfBR_LHiWl_8VXEIviEkWgW9SaYmWtJAytvO3yGrl2laU6EBHHeORk8KujY9u9VWDnI8GMRV6qmJS4p5MOYVEHMboF0dCZyUPUgSUzmG-3GZeQktsrnrqvjVirCWf_8LhwiM4raTxuljWT5JCxRlKQm-PMTo3MiBkdhfLqYlFH9hOjVWXDmEuh3z25O2ZTS_3DQfxzqc1yiJptR6i1j6cnz0BWnJK",
                quote: "Coming from a small village, Namal was a world of opportunities. The community here supports you like family. Every lecture feels like an opening to a new world."
              },
              {
                name: "Ayesha Khan",
                dept: "Agribusiness, Class of 2026",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlTlT0ftVu8MoKFtH0kN37DUzmAGJV7ZfebWDy699Q1g9EVDHg1sdIL62AD4JLeRBPaYxs0_yIrrsVgsZQ1QhxIM6wBQufxuMgibGDFn6Ih4bgSvCdcsX9fwafAB7dFe4umiSNpunNoS7LHp6PivfIQdmVX5fpmnbvdRdLgY-BDgYtTCFDYqT5Sscx_x-1yCuwPggQqeOe3RVR5knJlHTKD2qUpaDJlFRGMBqxgq7uhvB5L8xuqHqEoRkVAxAJs9dOGeCT5Fnh",
                quote: "I never thought I'd be part of a drama society, but Namal pushes you to explore your hidden talents. It's truly a place where you discover your whole self."
              }
            ].map((story) => (
              <div key={story.name} className="bg-surface-container-low p-10 rounded-[2.5rem] relative group border border-outline-variant/10 shadow-xl shadow-primary/5 hover:bg-primary transition-all duration-700">
                <span className="material-symbols-outlined text-secondary text-7xl absolute top-8 right-10 opacity-10 group-hover:text-white transition-all transform rotate-12" data-weight="fill">format_quote</span>
                <div className="flex items-center gap-6 mb-10">
                  <div className="relative">
                    <img alt={story.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-secondary transition-all" src={story.img} />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-white group-hover:bg-white transition-all shadow-sm"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-headline font-black text-2xl text-primary group-hover:text-white transition-colors tracking-tighter leading-tight">{story.name}</h4>
                    <p className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant group-hover:text-emerald-100 transition-colors opacity-70 mt-1">{story.dept}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant group-hover:text-emerald-50 text-xl font-medium leading-relaxed transition-all decoration-emerald-200/20 italic">
                  {"\""}{story.quote}{"\""}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar Highlights Section */}
        <section className="py-24 bg-surface mb-24">
          <div className="max-w-5xl mx-auto px-12">
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-20 text-center tracking-tighter">Calendar Highlights</h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
              <div className="space-y-24">
                {[
                  { date: "OCT 15", title: "Tech Spark Summit", desc: "Annual tech fest featuring industry leaders and hackathons.", left: true },
                  { date: "NOV 02", title: "Cultural Gala", desc: "Celebrating the rich diversity of Pakistan through food, music, and art.", left: false },
                  { date: "DEC 10", title: "Winter Sports Cup", desc: "Inter-departmental championship for cricket and football.", left: true }
                ].map((event) => (
                  <div key={event.date} className="relative flex items-center justify-between group">
                    <div className={`w-[45%] ${event.left ? 'text-right pr-16' : 'text-left pl-16 order-2'}`}>
                      <span className="text-secondary font-headline font-black text-2xl tracking-[0.2em] mb-4 block underline underline-offset-8 decoration-secondary/20">{event.date}</span>
                      <h4 className="text-3xl font-black font-headline text-primary mt-2 tracking-tighter leading-tight group-hover:text-secondary transition-colors">{event.title}</h4>
                      <p className="text-on-surface-variant mt-4 text-lg font-medium opacity-80 leading-relaxed italic text-balance mb-4">{event.desc}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-[6px] border-secondary shadow-2xl z-10 group-hover:scale-150 transition-all duration-500 ring-8 ring-primary/5"></div>
                    <div className="w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

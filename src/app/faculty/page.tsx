"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Ahmed Salman",
    title: "Professor & Dean of Engineering",
    department: "engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjDc-R5O35XblJmkWFUJieMgMSTAzEoK6AnTafYW9vn9cCrm50CgvH8Aq8TYmAeb4Fa03zyyxyafYNyPivEz5MKuVool_FOMdhEC04EisbDNowVKIwMph0bzV6M2_AOlvhKBjJWX6KLmDgP8Clp5BtHYAofSQE0IJxtx2eg3XeXkpODYEH2tbywUykvo717In6fCLpJ8cyjeXXDCevjfGg74k7Nm5EH_fzqI6m2p_42NoxTCopCH65cCj5niVQdjJARDEfQ3X8",
    interests: ["Renewable Energy", "Smart Grids"],
    isBento: false
  },
  {
    id: 2,
    name: "Dr. Sarah Khalid",
    title: "Associate Professor",
    department: "computer-science",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFWVxNotznZkdDXnNzr85MiWw8BOPPd7uwJWovRv46mVNH64ZaRfkon4UYgo0I82hMPXNQICypvoa74acALIabE3IsLx7YFvuB0RlMzdeGC2tA6HicY0cO-XxlGjYT9y2DZbgB8Ud3vVvGZp8tg5718siHIhr3m78tXO-_vY2FOl8jaLVMu1g5tOHXrgPVFrvtOYf-4QQJPEFpvCAGEC0HovhFqLQMQIFrMVKvs1UdKrZvV9chE7aG5Pph73Uqk4NzUY2OHXpR",
    interests: ["Deep Learning", "Bioinformatics"],
    isBento: false
  },
  {
    id: 3,
    name: "Dr. Omar Farooq",
    title: "Head of Social Sciences",
    department: "social-sciences",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC84PSquQ5wIkoZ2Iumj4oRdLJjR7leBTuyDZqQqJhaQssbW4vIXaZJAff2IBLpQGl2Lf33M9Xd2ba04y5tJXj_vTIafMfgVrursmeAwOj4eCbVTcVPyiDfoAyRJLjAcjfZoGhR_P10IJh7sX963uNJzLZHoZVU3IBAxrl9XIsKRUxBMKCjO-u4x65eiYjRFylaohCSGhNcNZFesNQyAW2YPDQD_gI10nOYalA7R_QADKbAnrEP0fEyzRu3J9TiYR7ymUyTK_3S",
    quote: "Empowering communities through data-driven policy making and sustainable socio-economic frameworks.",
    coreResearch: ["Rural Economic Development", "Behavioral Economics", "Policy Analysis"],
    isBento: true
  },
  {
    id: 4,
    name: "Prof. Maria Butt",
    title: "Director of Business School",
    department: "business",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA33DqRs8OBlDM2_y5g4yoQ7hdn0m44YtNMeTy9LIG0_84IDtlfCRRwf_yA8LfGDQxe4vPOhOwJDEVfuX4zCQVM5TL6YZt8A4jOLSR-5AUEXPsR9Nz5LoBykvB-nXhtjVY16Xty_DYVVWG52qkWQPuKdmGNLS4f8bQ2sNdGe8xTRz8be0Hpdr2446vBcsl9vXbYP3dqYInBLbEn4aSE-8fU2KXlGV9ZoVmsGFaulp-9wu0tuJV_7eg9UUnlUKv4Wl-shL6hh8I",
    interests: ["Agile Management", "Ethics"],
    isBento: false
  },
  {
    id: 5,
    name: "Dr. Zain Malik",
    title: "Assistant Professor",
    department: "engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8IHMllwy4S4Q95aR48oQjc7vbhRzJpvNAMkXJ-GPB1-02HTwSFJDdVY3FjJUhCG0fwCKc1xnoUnVaknYwO6HdlZTFUlFwjJaT7GPOKY5O3e4p8enBj6EeiVQ0FhaKLFmSARwdRQWNfeCvLU0HHO_-zNhSjSgWGHltsYfxBlxn86z98osB-wsbBvXZXxlb2ATpmQ5HIw96eMDDRXDCIbgKB6zvneqVT1ne2dndT6ZeF09_uh8J0Reo1W2E4FADQPzX5hIAlvE",
    interests: ["Control Systems", "Robotics"],
    isBento: false
  },
  {
    id: 6,
    name: "Dr. Amna Pervez",
    title: "Assistant Professor",
    department: "computer-science",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1ID6fpnh1FlbsVpmO31OtgSVfwwf-HwO94_CJPx8FfLjtfzBYKXhGhZCR3vUdfFgQzMkTPNVr-Xsnp3eDbDfth6Qly5bNH7uLTx1KaZCAgsTuY5tHIl7178axAujoqSUz38n1b-Lny6hhuJ3sRhEna0CZVXG9EaTmUXPwrBt4A9wOwjsIqPBttU5xmX9icuc2rMTLNAREfg9gM3dfJaoP3e4eLtSQCCm9meBWHzA5wAO22tplXsK_-gQNUtUBNW33W8CpD02N",
    interests: ["Cybersecurity", "Cloud Tech"],
    isBento: false
  }
];

export default function Page() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredMembers = facultyMembers.filter(member => {
    const matchesFilter = filter === "all" || member.department === filter;
    const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase()) || 
                          member.title.toLowerCase().includes(search.toLowerCase()) ||
                          (member.interests || []).some(interest => interest.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-12 max-w-screen-2xl mx-auto">
        {/* Hero Section: Editorial Header */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-secondary font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Distinguished Minds</span>
            <h1 className="text-primary font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Our <span className="italic font-light">Faculty</span> <br /> &amp; Mentors.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              A community of scholars, researchers, and practitioners dedicated to shaping the next generation of leaders through intellectual rigor and ethical grounding.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative bg-surface-container-low p-8 rounded-xl aspect-square flex items-end">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img 
                  alt="Modern university campus library interior" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-40" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSA1koi6VmJX593BqaCWw_AHrQLFSTXSzWPSIn5NGwvAuQidpi5T0twX6TbpovlgqfP1cRnkTCH7ZeY1a-QGNRgDPxtTN3NLOST8RhsYkBv66mABhtwqHQJyhZEisvyEvnNrtdlu2yfh735rGPQn8brM-vg8VO_CMWAt0LrgYzOspDU6Q299pB9vCkB2jOw9nHeixjxdE1kZED6NJ3kv5Xb4GhglnGjWdPhtl2oYC7lCOhCj16_a8vlqGtaqN0xilD9dT6fg7e" 
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-primary text-5xl">400+</h3>
                <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Global Researchers</p>
              </div>
            </div>
          </div>
        </header>

        {/* Search & Filter Bar */}
        <section className="mb-16 bg-surface-container-low rounded-xl p-4 flex flex-wrap items-center justify-between gap-6">
          <div className="flex-1 min-w-[300px] relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">search</span>
            <input 
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-lg focus:ring-2 focus:ring-secondary transition-all placeholder:text-outline-variant font-label text-sm outline-none" 
              placeholder="Search by name, research interest, or department..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {["all", "engineering", "computer-science", "business", "social-sciences"].map((dept) => (
              <button 
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-wider transition-all ${
                  filter === dept 
                    ? "bg-primary text-on-primary" 
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim"
                }`}
              >
                {dept === "all" ? "All" : dept.replace("-", " ")}
              </button>
            ))}
          </div>
        </section>

        {/* Faculty Directory Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-min">
          {filteredMembers.map((member) => (
            member.isBento ? (
              <div key={member.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:row-span-2">
                <div className="h-[430px] overflow-hidden relative">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={member.image} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 shadow-sm">Lead Researcher</span>
                    <h3 className="font-headline text-3xl font-bold text-on-primary">{member.name}</h3>
                    <p className="text-secondary-fixed-dim font-label text-sm font-bold">{member.title}</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <p className="text-on-surface-variant leading-relaxed text-sm mb-6 italic">
                    {"\""}{member.quote}{"\""}
                  </p>
                  <div className="mt-auto">
                    <p className="text-xs font-bold uppercase tracking-widest text-outline mb-3">Core Research</p>
                    <ul className="space-y-3">
                      {(member.coreResearch || []).map(topic => (
                        <li key={topic} className="flex items-center text-xs text-on-surface font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 opacity-80"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 text-primary font-black text-xs uppercase tracking-widest flex items-center group/btn hover:text-secondary transition-colors">
                      View Publications
                      <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div key={member.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col border border-outline-variant/10">
                <div className="aspect-[3/4] overflow-hidden relative bg-surface-container-low">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={member.image} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">{member.department.replace("-", " ")}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight mb-2">{member.name}</h3>
                  <p className="text-on-surface-variant font-label text-sm font-bold mb-6 italic">{member.title}</p>
                  <div className="mt-auto">
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-outline mb-3">Research Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {(member.interests || []).map(interest => (
                        <span key={interest} className="text-[10px] px-2.5 py-1 bg-surface-container-low rounded-lg text-on-surface-variant font-bold border border-outline-variant/5">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Join the Faculty CTA (Bento Bottom) */}
        <section className="mt-24">
          <div className="bg-primary py-24 px-12 rounded-[2.5rem] relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[60px] border-secondary-container rounded-full translate-x-1/3 -translate-y-1/3"></div>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-on-primary font-headline text-6xl font-black tracking-tighter mb-6 leading-tight">
                Shape the Future of <br/> Knowledge with Us.
              </h2>
              <p className="text-primary-fixed-dim text-xl font-medium mb-10 leading-relaxed opacity-80">
                We are always seeking visionary educators and researchers to join our world-class faculty. Explore open positions and research fellowships.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-headline font-black uppercase text-sm tracking-[0.1em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                  View Open Roles
                </button>
                <button className="border-2 border-white/20 text-on-primary px-10 py-5 rounded-2xl font-headline font-black uppercase text-sm tracking-[0.1em] hover:bg-white/10 transition-colors">
                  Research Fellows
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

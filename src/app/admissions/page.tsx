export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f9]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm">
<div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter font-headline">
                Namal University
            </div>
<div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
<a className="text-slate-600 hover:text-emerald-800 transition-colors" href="#">Academics</a>
<a className="text-emerald-900 border-b-2 border-amber-500 pb-1" href="#">Admissions</a>
<a className="text-slate-600 hover:text-emerald-800 transition-colors" href="#">Student Life</a>
<a className="text-slate-600 hover:text-emerald-800 transition-colors" href="#">Research</a>
<a className="text-slate-600 hover:text-emerald-800 transition-colors" href="#">Faculty</a>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-emerald-50/50 rounded-full transition-all">search</button>
<button className="hero-gradient text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm tracking-tight scale-95 active:opacity-80 transition-transform">
                    Apply Now
                </button>
</div>
</div>
<div className="bg-slate-200/20 h-[1px]"></div>
</nav>
<main className="pt-20">
{/* Hero Section */}
<section className="relative h-[819px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 opacity-40">
<img alt="University Campus" className="w-full h-full object-cover" data-alt="Modern university campus architecture with red brick buildings and lush green landscapes under a clear bright blue sky at sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbRR64x9X7RkMT_9ErP42CCS4OuYbhwIiNfjbbss7iH9XkYN94Gz9_c0zwZCNoB3bJapmuP2egfmrvebAvgwnSlNAuPg9Fm5ecd2OzxDlaVJ-Z3cyEvzD86-D3TGnQ_P1fpuf2LjwaXSAoDSOfrS6m5W45Jq5WDbRxp4wHd-vTU0kWHnfKmnRHGgqfqOZTauGEhGO2Ht188VDY-YlG-TW7r-j6Qx-Nudn04VLFlM2wF23VOw8k43XesiuSCzk_mvFpt0rEYgDf"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
<div className="relative max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs tracking-widest uppercase mb-6">
                        Admissions Open 2024
                    </span>
<h1 className="text-white font-headline font-extrabold text-6xl md:text-7xl leading-[1.1] tracking-tighter mb-8">
                        Join the Namal <br/><span className="text-secondary-container">Community</span>
</h1>
<p className="text-primary-fixed text-lg leading-relaxed mb-10 opacity-90 max-w-lg">
                        Step into a world-class center of excellence. We curate a learning environment that empowers the next generation of leaders and innovators.
                    </p>
<div className="flex items-center gap-6">
<button className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base shadow-xl hover:scale-105 transition-transform">
                            Start Application
                        </button>
<button className="text-white font-headline font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                            View Prospectus <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/* Application Process: The Academic Timeline */}
<section className="py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-6">Your Journey Begins Here</h2>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            Our streamlined application process is designed to identify passion, potential, and intellectual curiosity. Follow these four steps to secure your future.
                        </p>
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">help_outline</span>
<h4 className="font-headline font-bold text-xl text-primary mb-2">Need Guidance?</h4>
<p className="text-on-surface-variant text-sm mb-6">Our admissions counselors are available Monday-Friday to help you with your application query.</p>
<button className="text-primary font-bold border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">Book a Consultation</button>
</div>
</div>
<div className="md:col-span-8">
<div className="relative pl-12">
{/* Timeline Line */}
<div className="absolute left-6 top-0 bottom-0 w-[2px] bg-surface-tint opacity-20"></div>
{/* Step 1 */}
<div className="relative mb-16">
<div className="absolute -left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<span className="font-headline font-black text-secondary/30 text-5xl absolute right-8 top-6 select-none">01</span>
<h3 className="font-headline font-bold text-2xl text-primary mb-3">Choose Program</h3>
<p className="text-on-surface-variant leading-relaxed max-w-xl">
                                        Explore our diverse range of undergraduate and graduate programs in Engineering, Computer Science, and Business. Match your passion with our curriculum.
                                    </p>
<div className="mt-4 flex gap-2">
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">BSc Engineering</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">Computer Science</span>
</div>
</div>
</div>
{/* Step 2 */}
<div className="relative mb-16">
<div className="absolute -left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<span className="font-headline font-black text-secondary/30 text-5xl absolute right-8 top-6 select-none">02</span>
<h3 className="font-headline font-bold text-2xl text-primary mb-3">Submit Documents</h3>
<p className="text-on-surface-variant leading-relaxed max-w-xl">
                                        Upload your academic transcripts, national identity documents, and personal statement through our digital portal. No physical mailing required.
                                    </p>
<div className="mt-6 flex items-center gap-4 text-sm text-secondary font-bold">
<span className="material-symbols-outlined">attachment</span> Document Checklist
                                    </div>
</div>
</div>
{/* Step 3 */}
<div className="relative mb-16">
<div className="absolute -left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-secondary/20">
<span className="font-headline font-black text-secondary/30 text-5xl absolute right-8 top-6 select-none">03</span>
<h3 className="font-headline font-bold text-2xl text-primary mb-3">Aptitude Test</h3>
<p className="text-on-surface-variant leading-relaxed max-w-xl">
                                        Shortlisted candidates will be invited to sit for our comprehensive aptitude test, evaluating analytical thinking and core subject proficiency.
                                    </p>
<div className="mt-6">
<button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg text-sm font-bold">Sample Papers</button>
</div>
</div>
</div>
{/* Step 4 */}
<div className="relative">
<div className="absolute -left-[30px] w-[14px] h-[14px] rounded-full bg-secondary ring-4 ring-secondary/20"></div>
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<span className="font-headline font-black text-secondary/30 text-5xl absolute right-8 top-6 select-none">04</span>
<h3 className="font-headline font-bold text-2xl text-primary mb-3">Interview</h3>
<p className="text-on-surface-variant leading-relaxed max-w-xl">
                                        The final stage involves a personal interaction with our faculty panel to understand your aspirations and alignment with Namal's core values.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Important Dates: Calendar Grid */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-4">Admissions Calendar</h2>
<p className="text-on-surface-variant text-lg">Key dates for the Fall 2024 Admission cycle.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 bg-surface px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
<span className="material-symbols-outlined">event</span> Add to Calendar
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* Date 1 */}
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-4xl mb-2">15</span>
<span className="text-primary font-bold uppercase tracking-widest text-xs mb-6">May 2024</span>
<h4 className="font-headline font-bold text-primary mb-4">Portal Opens</h4>
<p className="text-on-surface-variant text-sm mt-auto italic">Online applications go live at midnight PST.</p>
</div>
</div>
{/* Date 2 */}
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm border-2 border-secondary/10">
<div className="bg-primary/5 p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-4xl mb-2">30</span>
<span className="text-primary font-bold uppercase tracking-widest text-xs mb-6">June 2024</span>
<h4 className="font-headline font-bold text-primary mb-4">Submission Deadline</h4>
<p className="text-on-surface-variant text-sm mt-auto italic">Final call for documents and fees.</p>
</div>
</div>
{/* Date 3 */}
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-4xl mb-2">12</span>
<span className="text-primary font-bold uppercase tracking-widest text-xs mb-6">July 2024</span>
<h4 className="font-headline font-bold text-primary mb-4">Aptitude Test</h4>
<p className="text-on-surface-variant text-sm mt-auto italic">Conducted at multiple centers across Pakistan.</p>
</div>
</div>
{/* Date 4 */}
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
<div className="bg-primary/5 p-8 rounded-lg flex flex-col items-center text-center h-full">
<span className="text-secondary font-headline font-black text-4xl mb-2">05</span>
<span className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Aug 2024</span>
<h4 className="font-headline font-bold text-primary mb-4">Orientation</h4>
<p className="text-on-surface-variant text-sm mt-auto italic">Welcome week for the Batch of 2028.</p>
</div>
</div>
</div>
</div>
</section>
{/* Final CTA Area */}
<section className="py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="relative rounded-3xl overflow-hidden hero-gradient p-16 md:p-24 text-center">
<div className="absolute inset-0 opacity-10 mix-blend-overlay">
<img alt="Student Success" className="w-full h-full object-cover" data-alt="Group of diverse, happy university students wearing graduation gowns and smiling at a celebratory outdoor campus event" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepA3fJMyxubcT7wsPQAq-9y_0qlgw0OsODuQ7D-zZi5K-iSXnVwVHtWhJE3louNjfoGYorm2rbDR2r3kNFqxLBgjkVzcjYJbZqzsULyTR6XvANSjnp6VrtwliyyQEqvI5FuN3qpVc8ge271hCOz0oHoaie62aioISFbx5pkZOcnp0qMLVNlytDrMAQbHTOiwF3e5tQJxwJTS4cdPrfc3wNQ2AzfIlbkzizSe1U0_8wt_fru9D_qxn2kTLQdbRG7NHSbZBq_AO"/>
</div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="font-headline font-extrabold text-5xl text-white tracking-tight mb-8">Ready to shape your future?</h2>
<p className="text-primary-fixed text-xl mb-12 opacity-90 leading-relaxed">
                            Don't miss the opportunity to be part of a community that values knowledge, character, and social impact.
                        </p>
<div className="flex flex-col md:flex-row gap-6 justify-center">
<button className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-xl font-headline font-extrabold text-lg shadow-2xl hover:bg-secondary-container/90 transition-all">
                                Apply Now
                            </button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-xl font-headline font-extrabold text-lg hover:bg-white/20 transition-all">
                                Financial Aid Info
                            </button>
</div>
<p className="text-primary-fixed text-sm mt-12 opacity-60">
                            Admission application fee: PKR 2,000 (Non-refundable)
                        </p>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#f5f3f3] dark:bg-slate-900 border-t-0">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
<div className="space-y-6">
<div className="text-xl font-bold text-emerald-900 dark:text-emerald-100 font-headline">Namal University</div>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">
                    A project of Namal Knowledge City, Mianwali. Committed to providing accessible quality education to all.
                </p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-emerald-900 p-2 bg-white rounded-full text-lg shadow-sm">social_leaderboard</span>
<span className="material-symbols-outlined text-emerald-900 p-2 bg-white rounded-full text-lg shadow-sm">alternate_email</span>
<span className="material-symbols-outlined text-emerald-900 p-2 bg-white rounded-full text-lg shadow-sm">rss_feed</span>
</div>
</div>
<div className="space-y-6">
<h4 className="font-headline font-bold text-emerald-900">Quick Links</h4>
<ul className="space-y-3 font-body text-sm">
<li><a className="text-slate-500 hover:underline hover:text-emerald-700 transition-all" href="#">Contact Us</a></li>
<li><a className="text-slate-500 hover:underline hover:text-emerald-700 transition-all" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 hover:underline hover:text-emerald-700 transition-all" href="#">Campus Map</a></li>
<li><a className="text-slate-500 hover:underline hover:text-emerald-700 transition-all" href="#">Alumni</a></li>
<li><a className="text-slate-500 hover:underline hover:text-emerald-700 transition-all" href="#">Careers</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-headline font-bold text-emerald-900">Contact Us</h4>
<div className="space-y-4 text-sm text-slate-500">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-emerald-900">location_on</span>
<p>30 KM Talagang Road, Mianwali, Pakistan</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-emerald-900">call</span>
<p>+92 459 236 312</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-emerald-900">mail</span>
<p>admissions@namal.edu.pk</p>
</div>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-12 py-8 border-t border-slate-200">
<p className="text-slate-500 dark:text-slate-400 text-sm font-body">© 2024 Namal University. Knowledge for All.</p>
</div>
</footer>

    </>
  );
}

export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f9]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm">
<div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter font-headline">Namal University</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-emerald-900 dark:text-emerald-400 border-b-2 border-amber-500 pb-1 font-headline font-bold tracking-tight" href="#">Academics</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-headline font-bold tracking-tight" href="#">Admissions</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-headline font-bold tracking-tight" href="#">Student Life</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-headline font-bold tracking-tight" href="#">Research</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-headline font-bold tracking-tight" href="#">Faculty</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant/15">
<span className="material-symbols-outlined text-on-surface-variant mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-40 font-body" placeholder="Search programs..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold scale-95 active:opacity-80 transition-transform shadow-sm">Apply Now</button>
</div>
</div>
<div className="bg-slate-200/20 dark:bg-slate-800/20 h-[1px]"></div>
</nav>
<main className="pt-24">
{/* Hero Section */}
<section className="px-8 py-20 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-12 gap-8 items-end">
<div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
<span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Excellence in Education</span>
<h1 className="text-6xl md:text-7xl font-extrabold font-headline tracking-tighter text-primary leading-[0.9] mb-8">
                        The Future is <br/> <span className="text-secondary">Cultivated</span> Here.
                    </h1>
<p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
                        At Namal University, we bridge the gap between rural potential and global opportunity. Explore our rigorous academic programs designed to shape the leaders of tomorrow.
                    </p>
<div className="flex gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 group transition-all">
                            Explore All Programs
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="bg-surface-container-high text-on-primary-fixed-variant px-8 py-4 rounded-xl font-bold">
                            Download Prospectus
                        </button>
</div>
</div>
<div className="col-span-12 lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
<img alt="Campus" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="Modern university campus building with grand architecture under a clear blue sky, emphasizing academic prestige and heritage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEWoy6pbLgS1dy4uYUkPKeU2SVtVg-flx9BAGAwTuFsTwaBtiklVl3pIrqyegrtGane1lWztcCK1eDS8Hq2gTQpXaLqAMnHGByoLd8LcGKdIV4UW1yE1tuyMTcXxLduyB8JTwmHmNSpEV0zva7vD32bEjoOTujwf5Jm7bxVmM7MZjiIYru8s6w0yWBOorOoVMbMmVa4mmFtEuGsaYyinMsgi_mVpEFAjrd-P9WA7AGRv1MKb-1PBPkEnohzYx2BhmdO6aw0y2S"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-secondary-container p-8 rounded-2xl z-20 shadow-xl max-w-[240px]">
<p className="text-on-secondary-container font-headline font-extrabold text-3xl mb-1">98%</p>
<p className="text-on-secondary-container text-sm font-medium leading-tight">Graduate employment rate within 6 months.</p>
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
<a className="text-secondary font-bold flex items-center gap-1 hover:underline" href="#">
                        View Details <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
</a>
</div>
<div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 group border border-outline-variant/10">
<div className="p-12 flex flex-col justify-center">
<div className="flex gap-2 mb-6">
<span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">Top Rated</span>
<span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">4-Year Degree</span>
</div>
<h3 className="text-5xl font-black font-headline text-primary mb-6 group-hover:text-secondary transition-colors">BS Computer Science</h3>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            Our flagship program combines theoretical foundations with hands-on labs in AI, Cybersecurity, and Software Engineering. Accredited by NCEAC, this program prepares students for the global tech ecosystem.
                        </p>
<div className="grid grid-cols-3 gap-6 mb-10">
<div>
<p className="text-secondary font-bold text-xl">130+</p>
<p className="text-xs text-on-surface-variant font-medium">Credit Hours</p>
</div>
<div>
<p className="text-secondary font-bold text-xl">15:1</p>
<p className="text-xs text-on-surface-variant font-medium">Student Ratio</p>
</div>
<div>
<p className="text-secondary font-bold text-xl">Global</p>
<p className="text-xs text-on-surface-variant font-medium">Opportunities</p>
</div>
</div>
<button className="hero-gradient text-on-primary w-fit px-10 py-4 rounded-xl font-bold flex items-center gap-2">
                            Program Syllabus
                            <span className="material-symbols-outlined" data-icon="description">description</span>
</button>
</div>
<div className="relative min-h-[400px]">
<img alt="Computer Science" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="A focused student working on a laptop in a modern, well-lit computer lab with code reflected on glass surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ak2MUUSlPc9sr59A1v6iogAGsh7VTFdLZGfIrtoCevXCgEQbdkG7h6iTdR3zwVrwGjJJTZxR6P20phIerhodpm4V1_MM-n5rpkqmPmbg5sGOR35ZvglLM2M4nCnJ-PrGOTfATb1Cg5bavbXUIuB4ExM6vXmBgJkqeMDKbj6YUzcCKk6zhADBNp0FZyF-yF6Q1qtCd7-HLUY41FbfRaBrDMs0CTe3Egb7idRkmtQm7-Jhapw1Pcz5kJ_DWu1xZfVfjjjQMHTK"/>
</div>
</div>
</div>
</section>
{/* Program Catalog Grid */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-4xl font-black font-headline text-primary mb-4 tracking-tight">Our Academic Faculties</h2>
<p className="text-on-surface-variant">We offer diverse undergraduate and graduate programs across four primary faculties, each dedicated to research excellence and industry relevance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Engineering */}
<div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-on-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<h4 className="text-2xl font-bold font-headline text-primary mb-4">Engineering</h4>
<ul className="space-y-3 mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Electrical Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Civil Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> MS Engineering Mgmt.
                        </li>
</ul>
<a className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                        Explore Faculty <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Computer Science */}
<div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-on-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="terminal">terminal</span>
</div>
<h4 className="text-2xl font-bold font-headline text-primary mb-4">Computer Science</h4>
<ul className="space-y-3 mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Computer Science
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Software Engineering
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> MS Data Science
                        </li>
</ul>
<a className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                        Explore Faculty <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Business */}
<div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-on-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
</div>
<h4 className="text-2xl font-bold font-headline text-primary mb-4">Business</h4>
<ul className="space-y-3 mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BBA (Hons)
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Executive MBA
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Agri-Business
                        </li>
</ul>
<a className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                        Explore Faculty <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Social Sciences */}
<div className="bg-surface-container-low p-8 rounded-3xl hover:bg-surface-container transition-colors group">
<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-on-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
</div>
<h4 className="text-2xl font-bold font-headline text-primary mb-4">Social Sciences</h4>
<ul className="space-y-3 mb-8">
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Economics
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Psychology
                        </li>
<li className="text-on-surface-variant text-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> BS Sociology
                        </li>
</ul>
<a className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                        Explore Faculty <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</section>
{/* Academic Pillars */}
<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Library" className="w-full h-full object-cover opacity-10 grayscale" data-alt="Vast library with high shelves full of books and long study tables, illustrating the depth of academic pillars and research" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2i_pK-1vWkaz-D_qpdjWnkNGeIM0dXpWmzPfTJ-iY0HU6TwQI1E4KlCeWTJvedYkkfMrbLctqP73ltof628rwD4mdeB8CDyD45-aics8oE6-PX33Xg8ePLrotCUQYAtHkV0DbGUPPUTDkGdRcNV4XKxARgGD_KPnSU2kCX4y_nAIduheRXc-_HJoMmInTtMj0wgUzLRQrztAR9h0NN0UuDv8ogFOmtImzWst5oJkUfJbrRSJYmq9xUCb2xSYEpmfqOL9h8Ss"/>
</div>
<div className="max-w-screen-2xl mx-auto px-8 relative z-10">
<h2 className="text-4xl font-black font-headline text-primary mb-16 border-l-8 border-secondary pl-8">Our Academic Pillars</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="space-y-6">
<h5 className="text-xl font-extrabold font-headline text-primary">Research-Driven Pedagogy</h5>
<p className="text-on-surface-variant leading-relaxed">
                            Learning at Namal is not confined to textbooks. We emphasize inquiry-based learning where students participate in active research from their sophomore year.
                        </p>
</div>
<div className="space-y-6">
<h5 className="text-xl font-extrabold font-headline text-primary">Industry Integration</h5>
<p className="text-on-surface-variant leading-relaxed">
                            Our curricula are developed in consultation with industry leaders to ensure that every Namal graduate is day-one ready for professional challenges.
                        </p>
</div>
<div className="space-y-6">
<h5 className="text-xl font-extrabold font-headline text-primary">Social Responsibility</h5>
<p className="text-on-surface-variant leading-relaxed">
                            We believe knowledge must serve humanity. Every program includes modules on ethics, sustainability, and community service.
                        </p>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#f5f3f3] dark:bg-slate-900 border-t-0">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
<div>
<div className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 font-headline">Namal University</div>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    Empowering the youth through quality education and research. Established with a vision to provide world-class opportunities for all.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined" data-icon="public">public</span>
</a>
<a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
<span className="material-symbols-outlined" data-icon="share">share</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h6 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 text-sm">Quick Links</h6>
<ul className="space-y-3">
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Contact Us</a></li>
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Campus Map</a></li>
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Alumni</a></li>
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Careers</a></li>
</ul>
</div>
<div>
<h6 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 text-sm">Legal</h6>
<ul className="space-y-3">
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 dark:text-slate-400 text-sm hover:underline hover:text-emerald-700 dark:hover:text-emerald-300" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div>
<h6 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 text-sm">Newsletter</h6>
<p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Stay updated with academic news and events.</p>
<div className="flex">
<input className="bg-surface-container-highest border-none rounded-l-xl px-4 py-2 w-full text-sm" placeholder="Email address" type="email"/>
<button className="bg-primary text-on-primary px-4 py-2 rounded-r-xl">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
</div>
</div>
<div className="px-12 py-8 max-w-screen-2xl mx-auto border-t border-outline-variant/10 text-center md:text-left">
<span className="text-slate-500 dark:text-slate-400 text-sm">© 2024 Namal University. Knowledge for All.</span>
</div>
</footer>

    </>
  );
}

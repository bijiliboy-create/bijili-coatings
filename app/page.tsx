"use client";
import React, { useState } from "react";
import { Factory, Home as HomeIcon, Shield, ChevronDown } from "lucide-react";

export default function Home() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false
  });

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  const toggleImageReveal = (index: number) => {
    setShowAfter(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const proprietorImage = "/proprietor.jpg"; 
  const umbrellaBgImage = "/umbrella-bg.png"; 

  const transformations = [
    {
      title: "Conventional Aged Tiled Roof: 5-Layer Technical Shield",
      description: "Complete rehabilitation of a very old tiled structure. Deployed a high-tensile 5-stage waterproofing matrix designed for long-term structural stability. The final finish features an advanced ultra-reflective thermal membrane that provides superior heat insulation for internal cooling.",
      beforeImg: "/before1.jpg", 
      afterImg: "/after1.jpg",   
    },
    {
      title: "Heritage Mangalore Tiled Roof: Seashore Marine Defense",
      description: "Elite protection for historical Mangalore tile frameworks. Engineered to survive high-salinity seashore atmospheres without impacting the heritage aesthetic. Uses breathable fluid membranes to eliminate deep moisture migration in vintage masonry.",
      beforeImg: "/before2.jpg", 
      afterImg: "/after2.jpg",   
    },
    {
      title: "Structural Wall Crack Remediation & Stitching",
      description: "Heavy-duty restoration of deep structural stress fractures and masonry joint gaps. Features precision deep V-groove excavation, high-bond polymer-modified structural routing, and cross-stitching matrixes to permanently block active rain moisture ingress.",
      beforeImg: "/before3.jpg", 
      afterImg: "/after3.jpg",   
    },
    {
      title: "Substructure Walls Waterproofing: CT Epoxy Coating",
      description: "Deep subterranean foundation and retaining wall fortifications. Application of heavy-duty, high-build Coal Tar (CT) Epoxy matrix shields to protect porous concrete parameters against continuous hydrostatic groundwater pressure, aggressive chemical soil salts, and permanent dampness.",
      beforeImg: "/before4.jpg", 
      afterImg: "/after4.jpg",   
    }
  ];

  const projectShowcase = [
    {
      title: "VinFast EV Plant — Tuticorin",
      category: "Heavy Industrial Complex // Expansive Sheds",
      tag: "Major Scale Deployment",
      details: [
        "Comprehensive protective coating layouts across expansive industrial metal manufacturing sheds.",
        "Full structural weatherization of administrative headquarters and engineering facility roofs.",
        "High-durability waterproofing for critical industrial water reserve facilities and storage units.",
        "Engineered explicitly to withstand severe coastal weathering and corrosive atmospheric dynamics."
      ]
    },
    {
      title: "Thoothukudi Alkali Chemicals",
      category: "Chemical Production Environment",
      tag: "Official SPIC Vendor",
      details: [
        "Operating as a certified, approved vendor within the prestigious SPIC Group industrial boundaries.",
        "Application of chemical-resistant structural defenses over highly vulnerable plant process buildings.",
        "Waterproofing and protective surface scaling across extensive staff residential quarters.",
        "Rigid execution meeting high industrial safety and quality compliance benchmarks."
      ]
    },
    {
      title: "St. Mary's College Campus",
      category: "Heritage Protection // Seashore Architecture",
      tag: "Historical Preservation",
      details: [
        "Comprehensive structural leak-proofing across the sprawling historical college campus buildings.",
        "Specialized moisture defense management built explicitly to survive high-salinity marine environments near the seashore.",
        "Carefully reinforced intricate terracotta Mangalore tile frameworks without impacting original historical aesthetics.",
        "Surface preparation including polymer void filling using high-strength modified mortar."
      ]
    },
    {
      title: "Caldwell School Building",
      category: "Heritage Protection // Mangalore Tile Roof",
      tag: "Historical Preservation",
      details: [
        "Specialized moisture defense management for historical institutional boundaries facing severe seashore atmospheres.",
        "Meticulous application of the MultiProof Acrylic Polymer matrix system directly to old, delicate terracotta frameworks.",
        "Embedding of high-tensile GSM fiberglass cloth over wall-to-roof joint junctions for lasting crack bridging.",
        "Final layer implementation of dual Insultec Thermal Membrane coats for comprehensive UV/IR heat insulation."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans antialiased selection:bg-sky-100">
      
      {/* 1. NAV BAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="h-16 w-auto bg-white p-1 rounded">
              <img src="/logo.png" alt="BIJILI COATINGS Logo" className="h-full w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="flex flex-col max-w-[60%] sm:max-w-none">
  <span className="text-lg sm:text-xl uppercase tracking-wider text-sky-900 font-bold block leading-tight">Engineering Protection</span>
  <span className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 leading-tight">All kinds of waterproofing systems</span>
</div>
          </div>
          <a href="#contact" className="px-6 py-3 text-sm font-semibold tracking-wider text-white bg-sky-600 uppercase hover:bg-sky-700 transition-colors rounded shadow-sm">Consult Expert</a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 z-0" style={{ backgroundImage: `url(${umbrellaBgImage})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60 z-10" />
        <div className="max-w-4xl text-center space-y-6 relative z-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-sky-950 bg-slate-200/80 border border-slate-300/60 px-5 py-2 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" /> Protective Engineering Systems
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 uppercase tracking-tight leading-tight m-0">
            Structural <br /> <span className="text-sky-700 font-bold">Immunity Systems</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-normal leading-relaxed bg-white/70 backdrop-blur-sm p-5 rounded border border-slate-200/60 shadow-sm">
            Protecting high-stakes manufacturing plants, corporate assets, coastal installations, and heritage landmarks with advanced chemical engineering.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white font-medium uppercase text-sm tracking-wider hover:bg-sky-700 transition-colors shadow-sm rounded">See Core Matrix</a>
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-medium uppercase text-sm tracking-wider hover:bg-slate-700 transition-colors rounded shadow-sm">Explore Portfolio</a>
          </div>
        </div>
      </section>

      {/* 3. PROPRIETOR SECTION */}
      <section className="py-24 bg-slate-100 border-t border-b border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 h-[500px] bg-slate-200 border border-slate-300/60 relative overflow-hidden shadow-md flex flex-col justify-end rounded">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${proprietorImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent opacity-90 z-10" />
            <div className="p-8 bg-white/95 backdrop-blur-sm border-t border-slate-200 relative z-20">
              <span className="text-sm font-semibold tracking-wider text-sky-800 uppercase block">Organization Leadership</span>
              <h4 className="text-3xl font-serif font-bold text-slate-900 uppercase mt-1 m-0">A.M. Rahman</h4>
              <p className="text-base text-slate-600 font-medium mt-1 m-0">Proprietor // 25+ Years Chemical Expertise</p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider block border-l-2 border-sky-600 pl-3">01 // Leadership Profile</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 uppercase tracking-tight m-0">A Leak-Proof Legacy</h2>
            <p className="text-slate-600 text-lg font-normal leading-relaxed">
              At Bijili Coatings, our focus is to completely redefine structural resilience. Our name represents the energy, clarity, and speed we bring to every project—ensuring our chemical barriers are as powerful and immediate as lightning.
            </p>
            <p className="text-slate-600 text-lg font-normal leading-relaxed">
              As the sole <strong className="text-slate-800 font-semibold">Proprietor</strong> with over <strong className="text-slate-800 font-semibold">25 years of master expertise</strong>, Er. A.M. Rahman navigates complex environments with an uncompromising <strong className="text-sky-700 font-semibold">"Zero-Leak" philosophy</strong>.
            </p>
            <blockquote className="border-l-4 border-sky-600 pl-6 text-slate-600 font-medium italic text-lg md:text-2xl py-2 leading-relaxed">
              "We believe a building is only as strong as its weakest seal. Our mission is to provide uncompromising structural protection."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. PROTECTION SERVICES */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-sky-700 block">02 // Protection Services</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase text-slate-900 tracking-tight mt-2 m-0">The Core Matrix</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Factory size={32} />, title: "Industrial Protection", items: ["Metal Sheet Roofs", "Retaining Walls", "Epoxy Floor Coatings"] },
              { icon: <HomeIcon size={32} />, title: "Residential Shields", items: ["Elastomeric Shields", "Sunken Area Epoxy", "Crack Stitching"] },
              { icon: <Shield size={32} />, title: "Infrastructure Matrix", items: ["Food-Grade Sumps", "Marine Preservation", "Storage Units"] }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-200/80 space-y-6 hover:border-sky-400 hover:shadow-md transition-all rounded">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-4 text-sky-600">
                  {service.icon}
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-wide text-slate-900 m-0">{service.title}</h3>
                </div>
                <ul className="space-y-3 text-base text-slate-600 font-medium">
                  {service.items.map((item, j) => <li key={j}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ACCORDION SHOWCASE */}
      <section id="projects" className="py-24 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-sky-700 block">03 // Track Record</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase text-slate-900 tracking-tight mt-2 m-0">Validated Assignments</h2>
          </div>
          <div className="space-y-4">
            {projectShowcase.map((project, idx) => (
              <div key={idx} className="border border-slate-200 bg-white overflow-hidden rounded shadow-sm hover:border-slate-300 transition-colors">
                <button onClick={() => toggleProject(idx)} className="w-full p-6 text-left flex items-center justify-between focus:outline-none">
                  <div>
                    <span className="text-xs font-semibold text-sky-700 block tracking-wider uppercase">{project.tag}</span>
                    <h3 className="text-2xl font-serif font-semibold uppercase text-slate-900 mt-1 tracking-wide">{project.title}</h3>
                    <p className="text-sm text-slate-400 font-medium uppercase mt-0.5">{project.category}</p>
                  </div>
                  <ChevronDown size={28} className={`text-sky-600 transition-transform duration-200 ${openProject === idx ? "rotate-180" : ""}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openProject === idx ? "max-h-[600px] border-t border-slate-100 bg-slate-50/50" : "max-h-0"}`}>
                  <div className="p-6 space-y-4">
                    {project.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5 rounded-full">✓</div>
                        <p className="text-base text-slate-600 font-medium leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER INTERACTIVE IMAGE SWITCHER */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-sky-700 block">Visual Verification</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase text-slate-900 tracking-tight mt-2 m-0">Proof in Transformation</h2>
            <p className="text-slate-400 font-medium max-w-md mx-auto mt-3 text-sm uppercase tracking-wider border-b-2 border-sky-500 pb-2 inline-block">Click any image framework to switch view states.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {transformations.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold uppercase text-slate-900 tracking-wide m-0 leading-snug border-l-4 border-sky-600 pl-4">{item.title}</h3>
                  <p className="text-base text-slate-600 font-normal m-0 leading-relaxed min-h-[90px]">{item.description}</p>
                </div>
                
                {/* Interactive Frame */}
                <div 
                  onClick={() => toggleImageReveal(idx)}
                  className="relative rounded overflow-hidden border border-slate-200 bg-slate-100 h-[380px] w-full cursor-pointer group select-none shadow-sm"
                >
                  <img 
                    src={showAfter[idx] ? item.afterImg : item.beforeImg} 
                    alt={showAfter[idx] ? "After State" : "Before State"} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:opacity-95"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />

                  {/* Top-Left Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`font-semibold text-xs uppercase px-4 py-2 tracking-wider rounded-sm shadow-sm text-white ${showAfter[idx] ? 'bg-sky-600' : 'bg-slate-900/85'}`}>
                      {showAfter[idx] ? "Insulated" : "Before Work"}
                    </span>
                  </div>

                  {/* Bottom Instruction Strip */}
                  <div className="absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-xs p-3.5 text-center border-t border-white/5 z-20">
                    <span className="text-white font-medium text-xs tracking-wider uppercase">
                      {showAfter[idx] ? "← Click to see before condition" : "✨ Click for after image"}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-sky-700 block">04 // Field Confirmation</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase text-slate-900 tracking-tight mt-2 m-0">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "BIJILI Coatings delivered robust waterproofing for our metal roofs in the challenging coastal climate of Tuticorin. International standards were maintained flawlessly.", client: "Project Management Team", site: "VinFast EV Plant Site" },
              { text: "As a certified vendor, BIJILI Coatings consistently meets the high quality and safety benchmarks required by the SPIC Group. Highly durable work.", client: "Chief Civil Engineer", site: "Thoothukudi Alkali Chemicals" }
            ].map((t, i) => (
              <div key={i} className="p-8 border border-slate-200 bg-white flex flex-col justify-between rounded shadow-sm hover:shadow-md transition-shadow">
                <p className="text-slate-600 font-normal italic text-lg leading-relaxed">"{t.text}"</p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-slate-800 font-semibold text-base uppercase tracking-wide">{t.client}</p>
                  <p className="text-sky-600 font-medium text-sm mt-0.5 uppercase tracking-wider">{t.site}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="contact" className="bg-slate-900 border-t-4 border-sky-700 pt-20 pb-16 relative z-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
            <div className="md:col-span-5 space-y-6">
              <div className="h-16 w-48 bg-white p-2 rounded shadow flex items-center justify-center">
                <img src="/logo.png" alt="BIJILI COATINGS Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-base text-slate-500 max-w-xs font-normal leading-relaxed italic">"We don't just seal surfaces; we build confidence through structural integrity."</p>
            </div>
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-sky-400 block">Corporate Geolocation</h4>
              <p className="text-xl text-slate-200 font-normal leading-snug uppercase tracking-wide">315/19, W.G.C. Road, Thoothukudi, Tamil Nadu 628002</p>
            </div>
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-sky-400 block">Direct Communications</h4>
              <div className="space-y-1 text-xl text-sky-400 font-medium">
                <p>+91 72999 71666</p>
                <p>+91 82484 81669</p>
              </div>
              <p className="text-sm text-slate-500 font-medium pt-1">rahmanepoxywaterproofing@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 text-xs font-medium tracking-widest text-slate-600 uppercase">
            <div>© {new Date().getFullYear()} BIJILI COATINGS. All Rights Reserved.</div>
            <div className="text-sky-800 mt-2 md:mt-0">[ ESTD. 2017 ]</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
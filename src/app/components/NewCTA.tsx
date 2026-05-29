import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 448 512"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.3 77.7 29.9 111.5L0 480l116.2-30.5c32.7 17.8 69.5 27.2 107.6 27.2h.1c122.9 0 222.9-100 222.9-223 0-59.3-23.1-115-65.9-156.6zM223.9 439.6c-33.9 0-67.1-9.1-96-26.2l-6.9-4.1-68.9 18.1 18.4-67.2-4.5-7c-18.8-29.9-28.7-64.4-28.7-100.2 0-103.3 84-187.3 187.3-187.3 50 0 97 19.5 132.3 54.8 35.3 35.4 55.4 82.4 55.4 132.5 0 103.3-84 187.3-188.4 187.3zm101.6-138.1c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.5 21.9-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31-38.7-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.6 19.1-19.6 46.6s20.1 54.1 22.9 57.8c2.8 3.7 39.5 60.3 95.7 84.5 13.4 5.8 23.8 9.2 31.9 11.8 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z" />
    </svg>
  );
}

export function NewCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#123B63] via-[#1F5C8A] to-[#2C5F8D] overflow-hidden">
      {/* Section Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8B04C]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Soft Pattern Lines */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-white/15 p-[1px] shadow-2xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A2647] via-[#174A78] to-[#2C5F8D] p-8 md:p-12 lg:p-14 border border-white/15">
            {/* Viewer Glow Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/12 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8B04C]/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(248,176,76,0.18),transparent_35%)]" />

            {/* Card Pattern */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8B04C]/15 border border-[#F8B04C]/30 text-white mb-5 shadow-sm">
                  <Sparkles size={18} className="text-[#F8B04C]" />
                  <span className="text-sm md:text-base font-semibold">
                    Let&apos;s Build Your Digital Growth Plan
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">
                  Have a business goal? Let&apos;s plan the right digital path
                  together.
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-3xl mb-7">
                  Whether you need better branding, stronger marketing, creative
                  videos, a professional website, or lead generation support,
                  our team can help you choose the right next step.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white/12 border border-white/15 px-4 py-3 text-white/90">
                    <CheckCircle
                      size={18}
                      className="text-[#F8B04C] flex-shrink-0"
                    />
                    <span className="text-sm font-medium">Clear Strategy</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/12 border border-white/15 px-4 py-3 text-white/90">
                    <CheckCircle
                      size={18}
                      className="text-[#F8B04C] flex-shrink-0"
                    />
                    <span className="text-sm font-medium">
                      Creative Support
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/12 border border-white/15 px-4 py-3 text-white/90">
                    <CheckCircle
                      size={18}
                      className="text-[#F8B04C] flex-shrink-0"
                    />
                    <span className="text-sm font-medium">
                      Lead-Focused Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="lg:text-right">
                <div className="rounded-2xl bg-[#061B33]/45 border border-white/15 p-5 md:p-6 backdrop-blur-sm shadow-xl">
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-[#F8B04C] hover:bg-[#e09a3a] text-[#0A2647] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
                    >
                      Get Free Consultation
                      <ArrowRight size={18} />
                    </Link>

                    <a
                      href={`https://wa.me/919629288884?text=${encodeURIComponent(
                        'Hi, I would like to know more about your services'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#128C4A] border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors"
                    >
                      <WhatsAppIcon />
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom breathing space before footer */}
        <div className="h-2 md:h-4" />
      </div>
    </section>
  );
}







// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Sparkles,
//   CheckCircle,
//   MessageCircle
// } from 'lucide-react';

// export function NewCTA() {
//   return (
//     <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#0A2647] via-[#123B63] to-[#1F5C8A] overflow-hidden border-b-4 border-[#F8B04C]">
//       {/* Section Background Glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BA3D0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8B04C]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

//       {/* Subtle Pattern */}
//       <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:48px_48px]" />

//       {/* Bottom Fade Separator */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#061B33]/80 to-transparent pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="relative overflow-hidden rounded-[2rem] bg-white/10 p-[1px] shadow-2xl">
//           <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A2647]/95 via-[#123B63]/95 to-[#2C5F8D]/95 p-8 md:p-12 lg:p-14 border border-white/15">
//             {/* Viewer Glow Effects */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8B04C]/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(248,176,76,0.16),transparent_35%)]" />

//             {/* Soft Pattern Lines */}
//             <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:48px_48px]" />

//             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
//               {/* Left Content */}
//               <div className="lg:col-span-2">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-5 shadow-sm">
//                   <Sparkles size={18} />
//                   <span className="text-sm md:text-base font-semibold">
//                     Let&apos;s Build Your Digital Growth Plan
//                   </span>
//                 </div>

//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">
//                   Have a business goal? Let&apos;s plan the right digital path together.
//                 </h2>

//                 <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-3xl mb-7">
//                   Whether you need better branding, stronger marketing, creative
//                   videos, a professional website, or lead generation support, our
//                   team can help you choose the right next step.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
//                   <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white/90">
//                     <CheckCircle size={18} className="text-[#F8B04C] flex-shrink-0" />
//                     <span className="text-sm font-medium">Clear Strategy</span>
//                   </div>

//                   <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white/90">
//                     <CheckCircle size={18} className="text-[#F8B04C] flex-shrink-0" />
//                     <span className="text-sm font-medium">Creative Support</span>
//                   </div>

//                   <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white/90">
//                     <CheckCircle size={18} className="text-[#F8B04C] flex-shrink-0" />
//                     <span className="text-sm font-medium">Lead-Focused Growth</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Buttons */}
//               <div className="lg:text-right">
//                 <div className="rounded-2xl bg-white/10 border border-white/15 p-5 md:p-6 backdrop-blur-sm shadow-xl">
//                   <div className="flex flex-col gap-4">
//                     <Link
//                       to="/contact"
//                       className="inline-flex items-center justify-center gap-2 bg-[#F8B04C] hover:bg-[#e09a3a] text-[#0A2647] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
//                     >
//                       Get Free Consultation
//                       <ArrowRight size={18} />
//                     </Link>

//                     <a
//                       href={`https://wa.me/919629288884?text=${encodeURIComponent(
//                         'Hi, I would like to know more about your services'
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#128C4A] border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors"
//                     >
//                       <MessageCircle size={18} />
//                       WhatsApp Chat
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Label Divider */}
//         <div className="flex justify-center mt-10">
//           <div className="h-1 w-28 rounded-full bg-[#F8B04C]" />
//         </div>
//       </div>
//     </section>
//   );
// }


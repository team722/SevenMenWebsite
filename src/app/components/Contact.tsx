// import { motion } from "motion/react";
// import { useState, type FormEvent, type ChangeEvent } from "react";
// import { Mail, Phone, Send } from "lucide-react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Label } from "./ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { toast } from "sonner";
// import { projectId, publicAnonKey } from "../utils/supabase/info";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         `https://${projectId}.supabase.co/functions/v1/make-server-115e9cbf/contact`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${publicAnonKey}`,
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Thank you! We'll get back to you within 24 hours.", {
//           description: "Your inquiry has been received successfully.",
//         });

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         console.error("Contact form submission error:", data.error);

//         toast.error("Failed to submit message", {
//           description: data.error || "Please try again later.",
//         });
//       }
//     } catch (error) {
//       console.error("Contact form submission error:", error);

//       toast.error("Failed to submit message", {
//         description: "Please check your connection and try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-[#0A2647] leading-tight tracking-tight">
//             Let&apos;s Start Your Project
//           </h1>

//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Need digital support for your business? Reach out to us, and
//             we&apos;ll help you plan the next step.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-1 space-y-8"
//           >
//             <div>
//               <h3 className="mb-6 text-2xl font-bold text-[#0A2647]">
//                 Get In Touch
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center flex-shrink-0">
//                     <Mail className="text-[#2C5F8D]" size={20} />
//                   </div>

//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Email</div>

//                     <a
//                       href="mailto:thesevenmenmedia@gmail.com"
//                       className="text-gray-900 hover:text-[#2C5F8D] transition-colors"
//                     >
//                       thesevenmenmedia@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center flex-shrink-0">
//                     <Phone className="text-[#2C5F8D]" size={20} />
//                   </div>

//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Phone</div>

//                     <div className="space-y-1">
//                       <a
//                         href="tel:+919629288884"
//                         className="block text-gray-900 hover:text-[#2C5F8D] transition-colors"
//                       >
//                         +91 96292 88884
//                       </a>

//                       <a
//                         href="tel:+919585598559"
//                         className="block text-gray-900 hover:text-[#2C5F8D] transition-colors"
//                       >
//                         +91 95855 98559
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="text-sm text-gray-500 mb-4">Follow Us</div>

//               <div className="flex gap-3">
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center hover:bg-[#2C5F8D] hover:text-white transition-colors"
//                   aria-label="LinkedIn"
//                 >
//                   <span className="text-sm font-bold">in</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center hover:bg-[#2C5F8D] hover:text-white transition-colors"
//                   aria-label="Instagram"
//                 >
//                   <span className="text-sm font-bold">IG</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-[#6BA3D0]/20 flex items-center justify-center hover:bg-[#2C5F8D] hover:text-white transition-colors"
//                   aria-label="Facebook"
//                 >
//                   <span className="text-sm font-bold">f</span>
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Label htmlFor="name">Full Name *</Label>

//                 <Input
//                   id="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="John Doe"
//                   className="mt-2"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>

//                   <Input
//                     id="phone"
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="+91 98765 43210"
//                     className="mt-2"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>

//                   <Input
//                     id="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="john@example.com"
//                     className="mt-2"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="service">Service Interested In *</Label>

//                 <Select
//                   required
//                   value={formData.service}
//                   onValueChange={(value: string) =>
//                     setFormData((prevData) => ({
//                       ...prevData,
//                       service: value,
//                     }))
//                   }
//                 >
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="Select a service" />
//                   </SelectTrigger>

//                   <SelectContent>
//                     <SelectItem value="top-digital-marketing-agency-chennai">
//                       Digital Marketing
//                     </SelectItem>

//                     <SelectItem value="seo-services">SEO Services</SelectItem>

//                     <SelectItem value="social-media-marketing">
//                       Social Media Marketing
//                     </SelectItem>

//                     <SelectItem value="media-production">
//                       Media Production
//                     </SelectItem>

//                     <SelectItem value="video-production">
//                       Video Production
//                     </SelectItem>

//                     <SelectItem value="top-creative-design-services-chennai">
//                       Creative Design
//                     </SelectItem>

//                     <SelectItem value="web-design">Web Design</SelectItem>

//                     <SelectItem value="software-saas-development-company-chennai">
//                       Software & SaaS
//                     </SelectItem>

//                     <SelectItem value="ai-automation-services-chennai">
//                       AI & Automation
//                     </SelectItem>

//                     <SelectItem value="top-digital-strategy-consultants-chennai">
//                       Consulting & Strategy
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="message">Your Message *</Label>

//                 <Textarea
//                   id="message"
//                   required
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about your project, goals, and requirements..."
//                   className="mt-2 min-h-[150px]"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full bg-[#0A2647] hover:bg-[#2C5F8D]"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}

//                 <Send className="ml-2" size={18} />
//               </Button>

//               <p className="text-sm text-gray-500 text-center">
//                 We typically respond within 24 hours. Your information is kept
//                 confidential.
//               </p>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
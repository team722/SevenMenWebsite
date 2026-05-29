import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { MediaProductionsPage } from "./pages/MediaProductionsPage";
import { DigitalMarketingPage } from "./pages/DigitalMarketingPage";
import { PaidAdvertisementPage } from "./pages/PaidAdvertisementPage";
import { CreativeDesignPage } from "./pages/CreativeDesignPage";
import { WebDesignDevelopmentPage } from "./pages/WebDesignDevelopmentPage";
import { SoftwareSaasPage } from "./pages/SoftwareSaasPage";
import { AiAutomationPage } from "./pages/AiAutomationPage";
import { ConsultingStrategyPage } from "./pages/ConsultingStrategyPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProcessPage } from "./pages/ProcessPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogViewerPage } from "./pages/BlogViewerPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />

          <Route
            path="/services/top-digital-marketing-agency-chennai"
            element={<DigitalMarketingPage />}
          />

          <Route
            path="/services/paid-advertising-services-chennai"
            element={<PaidAdvertisementPage />}
          />

          <Route
            path="/services/top-media-production-services-chennai"
            element={<MediaProductionsPage />}
          />

          <Route
            path="/services/top-creative-design-services-chennai"
            element={<CreativeDesignPage />}
          />

          <Route
            path="/services/web-design-development-company-chennai"
            element={<WebDesignDevelopmentPage />}
          />

          <Route
            path="/services/software-saas-development-company-chennai"
            element={<SoftwareSaasPage />}
          />

          <Route
            path="/services/ai-automation-services-chennai"
            element={<AiAutomationPage />}
          />

          <Route
            path="/services/top-digital-strategy-consultants-chennai"
            element={<ConsultingStrategyPage />}
          />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogViewerpage" element={<BlogViewerPage />} />
          <Route path="/blog/:slug" element={<BlogViewerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
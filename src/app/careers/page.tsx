"use client";
import { useEffect, useState } from "react";
import Galaxy from "@/components/ReactBit/Galaxy";
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { db, storage } from "@/lib/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Link from "next/link";

// Icons
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Star,
  Users,
  Globe,
  Heart,
  ArrowRight,
  ExternalLink,
  X,
  Send,
  Upload,
  Loader2,
  CheckCircle
} from "lucide-react";

// Define types
type JobType = {
  id?: string;
  title: string;
  description?: string;
  department?: string;
  location?: string;
  experience?: string;
  education?: string[] | string;
  skills?: string[] | string;
  type?: string;
  salary?: string;
  link?: string;
  createdAt?: any;
};

export default function CareersPage() {
  // State for jobs
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for modals
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const [isJobDetailModalOpen, setIsJobDetailModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // State for application form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    role: "",
    phone: "",
    resume: null as File | null,
  });

  // State for form submission
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // State for upload progress
  const [uploadProgress, setUploadProgress] = useState(0);

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Careers at Dcodes Technologies | Jobs & Career Opportunities";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Explore careers at Dcodes Technologies. Join our team of web, mobile, and software experts — open positions in development, marketing, and IT support.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "careers at Dcodes Technologies, Dcodes Technologies careers, jobs at Dcodes, technology jobs, software development careers, mobile app developer jobs, IT careers India");
    
    // Update or create viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");
    
    // Update or create robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Update or create author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', "Dcodes Technologies");
    
    // Update or create theme-color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', "#000000");
    
    // Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', "Careers | Job Opportunities at Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Join our team of dreamers, doers, and innovators shaping tomorrow's technology. Explore career opportunities at Dcodes.");
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', "website");
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', "https://dcodes.com/careers");
    
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', "Dcodes Technologies");
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', "https://dcodes.com/og-image-careers.jpg");
    
    // Twitter Card Tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', "summary_large_image");
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', "Careers at Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Explore job opportunities and join our innovative team.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-careers.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/careers");
    
    // Geo tags
    let geoRegion = document.querySelector('meta[name="geo.region"]');
    if (!geoRegion) {
      geoRegion = document.createElement('meta');
      geoRegion.setAttribute('name', 'geo.region');
      document.head.appendChild(geoRegion);
    }
    geoRegion.setAttribute('content', "IN-GJ");
    
    let geoPlacename = document.querySelector('meta[name="geo.placename"]');
    if (!geoPlacename) {
      geoPlacename = document.createElement('meta');
      geoPlacename.setAttribute('name', 'geo.placename');
      document.head.appendChild(geoPlacename);
    }
    geoPlacename.setAttribute('content', "Gujarat");
    
    // Language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // Breadcrumb Structured Data
    const structuredDataBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dcodes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Careers",
          "item": "https://dcodes.com/careers"
        }
      ]
    };
    
    let scriptBreadcrumb = document.querySelector('#structured-data-breadcrumb');
    if (!scriptBreadcrumb) {
      scriptBreadcrumb = document.createElement('script');
      scriptBreadcrumb.id = 'structured-data-breadcrumb';
      scriptBreadcrumb.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptBreadcrumb);
    }
    scriptBreadcrumb.textContent = JSON.stringify(structuredDataBreadcrumb);
    
  }, []);

  // Update job structured data when jobs change
  useEffect(() => {
    if (jobs.length > 0) {
      const structuredDataJobs = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Job Openings at Dcodes Technologies",
        "description": "Current career opportunities and job openings",
        "numberOfItems": jobs.length,
        "itemListElement": jobs.map((job, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "JobPosting",
            "title": job.title,
            "description": job.description || "Join our innovative team at Dcodes Technologies",
            "employmentType": job.type || "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Dcodes Technologies",
              "url": "https://dcodes.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location || "Gujarat",
                "addressRegion": "GJ",
                "addressCountry": "IN"
              }
            },
            "experienceRequirements": job.experience || "Not specified",
            "educationRequirements": job.education || "Not specified",
            "skills": job.skills || [],
            "datePosted": job.createdAt?.toDate?.().toISOString() || new Date().toISOString()
          }
        }))
      };
      
      let scriptJobs = document.querySelector('#structured-data-jobs');
      if (!scriptJobs) {
        scriptJobs = document.createElement('script');
        scriptJobs.id = 'structured-data-jobs';
        scriptJobs.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptJobs);
      }
      scriptJobs.textContent = JSON.stringify(structuredDataJobs);
    }
  }, [jobs]);

  // Fetch jobs from Firestore
  useEffect(() => {
    async function fetchJobs() {
      try {
        console.log("Fetching jobs from Firestore...");
        const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const jobsList: JobType[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          jobsList.push({
            id: doc.id,
            title: data.title || "",
            description: data.description || "",
            department: data.department || "",
            location: data.location || "",
            experience: data.experience || "",
            education: data.education || [],
            skills: data.skills || [],
            type: data.type || "",
            salary: data.salary || "",
            link: data.link || "",
            createdAt: data.createdAt
          });
        });

        console.log(`Found ${jobsList.length} jobs`);
        setJobs(jobsList);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  // Open job detail modal
  const openJobDetailModal = (job: JobType) => {
    setSelectedJob(job);
    setIsJobDetailModalOpen(true);
  };

  // Close job detail modal
  const closeJobDetailModal = () => {
    setIsJobDetailModalOpen(false);
    setSelectedJob(null);
  };

  // Open apply modal
  const openApplyModal = (job: JobType) => {
    setSelectedJob(job);
    setFormData(prev => ({
      ...prev,
      role: job.title || ""
    }));
    setIsApplyModalOpen(true);
    setMessage("");
    setSubmitSuccess(false);
    setIsSubmitting(false);
    setUploadProgress(0);
  };

  // Open general application modal (extra button)
  const openGeneralApplyModal = () => {
    const generalJob: JobType = {
      id: "general",
      title: "General Application",
      description: "Apply to join our team at Dcodes Technologies. We're always looking for talented individuals!"
    };
    setSelectedJob(generalJob);
    setFormData(prev => ({
      ...prev,
      role: "" // Empty role - user will fill it themselves
    }));
    setIsApplyModalOpen(true);
    setMessage("");
    setSubmitSuccess(false);
    setIsSubmitting(false);
    setUploadProgress(0);
  };

  // Close apply modal
  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      experience: "",
      role: "",
      phone: "",
      resume: null,
    });
    setMessage("");
    setIsSubmitting(false);
    setSubmitSuccess(false);
    setUploadProgress(0);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedTypes.includes(file.type)) {
        setMessage("❌ Please upload only PDF, DOC, or DOCX files.");
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setMessage("❌ File size should be less than 5MB.");
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));

      setMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      setMessage("❌ Please fill all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setUploadProgress(30);
    
    try {
      // Convert file to base64 string
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const base64String = event.target?.result as string;
          setUploadProgress(60);
          
          // Save directly to Firestore
          const docRef = await addDoc(collection(db, "jobApplications"), {
            // Personal info
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            experience: formData.experience.trim() || "Not specified",
            
            // Job info
            role: formData.role.trim() || selectedJob?.title || "",
            jobId: selectedJob?.id || null,
            jobTitle: selectedJob?.title || null,
            
            // Resume as base64
            resumeBase64: base64String,
            resumeName: formData.resume.name,
            resumeType: formData.resume.type,
            resumeSize: formData.resume.size,
            
            // Timestamps
            createdAt: serverTimestamp(),
            submittedAt: new Date().toISOString(),
            
            // Status
            status: "pending",
            source: "careers-page"
          });
          
          setUploadProgress(80);
          console.log("✅ Saved to Firestore, ID:", docRef.id);

          // Trigger acknowledgment + admin notification emails
          // (Firestore save already succeeded — email failure should not block success UI)
          try {
            await fetch("/api/apply", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                position: formData.role.trim() || selectedJob?.title || "",
                message: `Experience: ${formData.experience.trim() || "Not specified"}`,
              }),
            });
          } catch (mailError) {
            console.error("Mail trigger error:", mailError);
          }

          setUploadProgress(100);
          setSubmitSuccess(true);
          setMessage("✅ Application submitted successfully!");
          
          setTimeout(() => {
            resetForm();
            closeApplyModal();
          }, 3000);
          
        } catch (firestoreError) {
          console.error("Firestore error:", firestoreError);
          setMessage("❌ Failed to save application data.");
          setUploadProgress(0);
          setIsSubmitting(false);
        }
      };
      
      reader.onerror = () => {
        setMessage("❌ Failed to read file.");
        setUploadProgress(0);
        setIsSubmitting(false);
      };
      
      // Start reading file
      reader.readAsDataURL(formData.resume);
      
    } catch (error: any) {
      console.error("Error:", error);
      setMessage(`❌ ${error.message || "Submission failed"}`);
      setUploadProgress(0);
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white/70">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div style={{ width: '100%', height: '800px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0}
            hueShift={240}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-normal mb-6 tracking-tight">
              Build the <span className="text-blue-400">Future</span> with Dcodes
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 mb-10 leading-relaxed font-normal">
              We're a team of dreamers, doers, and innovators shaping tomorrow's technology. Join us to create what's next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-3 group"
                aria-label="View open job positions at Dcodes Technologies"
              >
                View Open Roles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/LifeAtDcodes"
                className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                aria-label="Learn about life at Dcodes Technologies"
              >
                Life at Dcodes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section id="life-at-dcode" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal mb-4">Why Work With Us</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Join a culture that fosters innovation, growth, and meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Innovative Projects</h3>
              <p className="text-white/60">Work on next-gen SaaS and digital solutions.</p>
            </div>

            <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Career Growth</h3>
              <p className="text-white/60">Learn, grow, and lead with mentorship and training.</p>
            </div>

            <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Global Clients</h3>
              <p className="text-white/60">Collaborate on international projects.</p>
            </div>

            <div className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Creative Culture</h3>
              <p className="text-white/60">We value ideas, diversity, and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Tagline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal mb-6 leading-tight">
            At Dcode, we don't just build products — we build people.
          </h2>
          <p className="text-xl text-white/70 font-normal">
            Our team thrives on creativity, curiosity, and continuous learning.
          </p>
        </div>
      </section>

      {/* Jobs Listing Section */}
      <section id="jobs-section" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal mb-4">Open Positions</h2>
            <p className="text-white/60 text-lg">Join our team and shape the future with us</p>
          </div>

          {/* 🔥 EXTRA APPLY BUTTON - Always visible, even when no jobs */}
          <div className="text-center mb-12">
            <button
              onClick={openGeneralApplyModal}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              aria-label="Apply for general position at Dcodes Technologies"
            >
              <Briefcase className="w-5 h-5" />
              Apply Now - Even if no openings!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/40 text-sm mt-3">
              Always accepting applications for talented individuals
            </p>
          </div>

          {error ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-red-400 text-lg mb-2">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-blue-400 hover:text-blue-300"
                aria-label="Try loading jobs again"
              >
                Try Again
              </button>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No positions available at the moment</p>
              <p className="text-white/40 text-sm mt-2">Check back soon for new opportunities</p>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1 space-y-5">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {job.department && (
                          <span className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30">
                            {job.department}
                          </span>
                        )}
                        {job.location && (
                          <span className="px-3 py-1 text-sm bg-white/10 rounded-full flex items-center gap-1">
                            📍 {job.location}
                          </span>
                        )}
                        {job.experience && (
                          <span className="px-3 py-1 text-sm bg-yellow-600/20 text-yellow-400 rounded-full border border-yellow-500/30 flex items-center gap-1">
                            💼 {job.experience}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl font-normal text-white group-hover:text-white/90 transition-colors">
                        {job.title}
                      </h2>

                      <p className="text-white/70 leading-relaxed text-lg font-normal">
                        {job.description}
                      </p>

                      {/* Education */}
                      {job.education && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-4 h-4 text-white/70" />
                            <span className="text-sm text-white/70 font-medium">Education</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(job.education) ? (
                              job.education.map((edu: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-sm bg-white/10 rounded-full"
                                >
                                  {edu}
                                </span>
                              ))
                            ) : (
                              <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                                {job.education}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      {job.skills && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-white/70" />
                            <span className="text-sm text-white/70 font-medium">Skills</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(job.skills) ? (
                              job.skills.map((skill: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-sm bg-white/10 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))
                            ) : (
                              <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                                {job.skills}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="lg:shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 items-start">
                      <button
                        onClick={() => openApplyModal(job)}
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium min-w-[140px] group/apply disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Apply for ${job.title} position`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Applying...
                          </>
                        ) : (
                          <>
                            Apply Now
                            <ArrowRight className="w-4 h-4 group-hover/apply:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => openJobDetailModal(job)}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium min-w-[140px]"
                        aria-label={`View details for ${job.title} position`}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Hiring Process
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A clear, professional, and structured journey designed to find the best talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative">
            {[
              { step: "1", title: "Apply Online", desc: "Submit your application and let us know why you're the perfect fit." },
              { step: "2", title: "HR Screening", desc: "Our HR team will evaluate your profile for cultural and role fit." },
              { step: "3", title: "Technical Round", desc: "Demonstrate your skills and problem-solving abilities." },
              { step: "4", title: "Final Interview", desc: "Meet the leadership team for final discussions and insights." },
              { step: "5", title: "Offer & Onboarding", desc: "Receive your offer and begin your exciting journey with us!" },
            ].map((process, index, array) => (
              <div
                key={process.step}
                className="relative text-center group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative mb-6 flex justify-center items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>

                  {index < array.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-blue-500 animate-pulse"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                      </svg>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal mb-4">Employee Stories</h2>
            <p className="text-white/60 text-lg">Hear from our team members about their journey at DCodes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Milan Aaradeshna",
                role: "Wordpress Developer",
                quote: "Dcodes helped me grow over 3 years as a WordPress developer, enhancing my skills through challenging projects",
                avatar: "👩‍💻"
              },
              {
                name: "Kunj Thakar",
                role: "Social Media Manager",
                quote: "Working at Dcodes has been an incredible journey. The team's support and the projects we work on make every day exciting.",
                avatar: "👨‍💼"
              },
              {
                name: "Khushali Parikh",
                role: "Backend Developer",
                quote: "Dcodes has been a great place to learn and grow. The projects are challenging and rewarding.",
                avatar: "👩‍🎨"
              }
            ].map((testimonial, index) => (
              <div key={index} className="border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-white/80 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal mb-3">Ready to Shape the Future?</h2>
              <p className="text-white/60 text-lg">
                Be part of a team that thrives on innovation, collaboration, and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                href="mailto:hr@dcodestech.com"
                className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200"
                aria-label="Email HR department at hr@dcodestech.com"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-white text-lg font-normal">hr@dcodestech.com</p>
                </div>
              </a>

              <a
                href="tel:+916353653977"
                className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200"
                aria-label="Call HR department at +91 6353 653 977"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-white text-lg font-normal">+91 6353 653 977</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {isJobDetailModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedJob.department && (
                      <span className="px-3 py-1 text-sm bg-blue-600/30 text-blue-400 rounded-full border border-blue-500/50">
                        {selectedJob.department}
                      </span>
                    )}
                    {selectedJob.location && (
                      <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                        📍 {selectedJob.location}
                      </span>
                    )}
                    {selectedJob.experience && (
                      <span className="px-3 py-1 text-sm bg-yellow-600/30 text-yellow-400 rounded-full border border-yellow-500/50">
                        💼 {selectedJob.experience}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedJob.title}</h2>
                </div>
                <button
                  onClick={closeJobDetailModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close job details"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                {selectedJob.description && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                  </div>
                )}

                {selectedJob.education && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Education Requirements
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(selectedJob.education) ? (
                        selectedJob.education.map((edu: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                          >
                            {edu}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300">
                          {selectedJob.education}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {selectedJob.skills && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(selectedJob.skills) ? (
                        selectedJob.skills.map((skill: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30">
                          {selectedJob.skills}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-800 flex gap-4">
                  <button
                    onClick={() => {
                      closeJobDetailModal();
                      openApplyModal(selectedJob);
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    aria-label={`Apply for ${selectedJob.title} position`}
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={closeJobDetailModal}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition-colors"
                    aria-label="Close job details"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apply Form Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-2xl w-full bg-gray-900/95 border border-gray-800 rounded-2xl shadow-2xl">
            <div className="border-b border-gray-800 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Apply for{" "}
                    <span className="text-blue-400">{selectedJob?.title || "this position"}</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Fill out the form below to submit your application</p>
                </div>
                <button
                  onClick={closeApplyModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close application form"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">Application Submitted!</h4>
                  <p className="text-gray-300 mb-6">
                    Thank you for applying. We'll review your application and contact you soon.
                  </p>
                  <button
                    type="button"
                    onClick={closeApplyModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    aria-label="Close application success message"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Progress Bar */}
                  {isSubmitting && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        aria-label="Your full name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="example@gmail.com"
                        disabled={isSubmitting}
                        aria-label="Your email address"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="9876543210"
                        disabled={isSubmitting}
                        aria-label="Your phone number"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                        Experience (Years)
                      </label>
                      <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="e.g., 3"
                        disabled={isSubmitting}
                        aria-label="Your years of experience"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                        Applying For *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="e.g., Frontend Developer"
                        disabled={isSubmitting}
                        aria-label="Job position applying for"
                        aria-required="true"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                        Resume / CV *
                      </label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-full">
                          <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer ${isSubmitting ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-800/50'} transition-colors`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-3 text-gray-400" />
                              <p className="mb-1 text-sm text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                            </div>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              required
                              className="hidden"
                              disabled={isSubmitting}
                              aria-label="Upload your resume or CV"
                              aria-required="true"
                            />
                          </label>
                        </div>

                        {formData.resume && (
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-white font-medium">{formData.resume.name}</p>
                                  <p className="text-gray-400 text-sm">
                                    {(formData.resume.size / 1024 / 1024).toFixed(2)} MB • {formData.resume.type.split('/')[1].toUpperCase()}
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, resume: null }));
                                }}
                                className="text-gray-400 hover:text-red-400 transition-colors"
                                disabled={isSubmitting}
                                aria-label="Remove uploaded resume"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {message && (
                    <div className={`p-4 rounded-lg ${message.includes("✅") ? "bg-green-900/30 border border-green-800" : "bg-red-900/30 border border-red-800"}`}>
                      <p className={`${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>
                        {message}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      aria-label={isSubmitting ? "Submitting your application..." : "Submit your job application"}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting... {uploadProgress}%
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={closeApplyModal}
                      disabled={isSubmitting}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50"
                      aria-label="Cancel application"
                    >
                      Cancel
                    </button>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500 pt-4">
                    By submitting this form, you agree to our privacy policy and consent to us contacting you about this position.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Alert Component
const Alert = ({ type, text }) => {
  const alertStyles = {
    success: "bg-green-500 border-green-400",
    danger: "bg-red-500 border-red-400",
    error: "bg-red-500 border-red-400"
  };

  return (
    <div className={`fixed top-4 right-4 z-50 ${alertStyles[type]} text-white px-6 py-4 rounded-lg shadow-lg border-l-4 animate-fade-in`}>
      <div className="flex items-center">
        <span className="mr-2">
          {type === "success" ? "✓" : "⚠"}
        </span>
        {text}
      </div>
    </div>
  );
};

// Particles Component (Simple animated background)
const Particles = ({ className, quantity, ease, color, refresh }) => {
  return (
    <div className={`${className} pointer-events-none`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showAlertMessage("error", "Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      showAlertMessage("error", "Please enter your email");
      return false;
    }
    if (!formData.subject.trim()) {
      showAlertMessage("error", "Please select a subject");
      return false;
    }
    if (!formData.message.trim()) {
      showAlertMessage("error", "Please enter your message");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showAlertMessage("error", "Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);

      // EmailJS Configuration - Browser-safe approach
      const serviceId = "service_4aydnct";
      const templateId = "template_0mm8ng5";
      const publicKey = "3MeDL-rbBeau4bNjv";

      // Debug: Check configuration
      console.log("EmailJS Configuration:", {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 8) + "...", // Only show first 8 chars for security
        emailjsLoaded: !!emailjs
      });

      // Check if EmailJS is properly loaded
      if (!emailjs) {
        throw new Error("EmailJS library not loaded");
      }

      // Initialize EmailJS with the public key
      emailjs.init(publicKey);

      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        to_name: "Satyam",
        to_email: "satyam884751@gmail.com",
        reply_to: formData.email,
        // Add current date and time
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString()
      };

      console.log("Template params:", templateParams);

      // Send email using EmailJS with better error handling
      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS Success:", result);

      if (result.status === 200) {
        setIsLoading(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        showAlertMessage("success", "Thank you! Your message has been sent successfully. I'll get back to you soon!");
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }

    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS Error Details:", {
        error,
        message: error.message,
        text: error.text,
        status: error.status,
        name: error.name,
        stack: error.stack
      });

      // Enhanced error handling
      let errorMessage = "Oops! Something went wrong. Please try again or contact me directly at satyam884751@gmail.com";

      // Check for specific error types
      if (error.message === "EmailJS library not loaded") {
        errorMessage = "Email service is not available. Please contact me directly at satyam884751@gmail.com";
      } else if (error.status) {
        switch (error.status) {
          case 400:
            errorMessage = "Bad Request: Please check your form data and try again.";
            break;
          case 401:
            errorMessage = "Unauthorized: Authentication failed. Please contact the site administrator.";
            break;
          case 402:
            errorMessage = "Payment Required: Service limit reached. Please try again later.";
            break;
          case 403:
            errorMessage = "Forbidden: Service configuration error. Please contact the site administrator.";
            break;
          case 404:
            errorMessage = "Not Found: Service or template not found. Please contact the site administrator.";
            break;
          case 413:
            errorMessage = "Request Too Large: Your message is too long. Please shorten it and try again.";
            break;
          case 429:
            errorMessage = "Too Many Requests: Please wait a moment and try again.";
            break;
          case 500:
            errorMessage = "Server Error: Please try again later or contact me directly.";
            break;
          default:
            errorMessage = `Error ${error.status}: ${error.text || error.message || "Unknown error occurred"}`;
        }
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        if (error.message.includes("Failed to fetch")) {
          errorMessage = "Network error: Please check your internet connection and try again.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }

      showAlertMessage("danger", errorMessage);
    }
  };

  return (
    <section className="relative flex items-center min-h-screen py-20 px-4 bg-gray-900">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
        {/* Contact Info Section */}
        <div className="flex flex-col items-start w-full lg:w-1/2 p-8 border border-white/10 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Whether you're looking to build IoT solutions, develop Python applications,
            analyze data, or discuss innovative tech projects, I'm here to help bring
            your ideas to life.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📧</span>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">satyam884751@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📱</span>
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+91-8847514424</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📍</span>
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400">Amritsar, Punjab, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 border border-white/10 rounded-2xl bg-gray-800 backdrop-blur-sm">
          <div className="flex flex-col items-start w-full gap-5 mb-8">
            <h2 className="text-3xl font-bold text-white">Send Message</h2>
            <p className="text-gray-300">
              Let's discuss your project requirements and how I can help you achieve your goals.
            </p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="+91-XXXXXXXXXX"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="IoT Development">IoT Development</option>
                <option value="Python Development">Python Development</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Web Development">Web Development</option>
                <option value="Internship Opportunity">Internship Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
                placeholder="Tell me about your project requirements, timeline, and any specific technologies you'd like to use..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
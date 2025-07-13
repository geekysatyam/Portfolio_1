// src/config.js
const config = {
    emailjs: {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_4aydnct",
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_0mm8ng5",
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "3MeDL-rbBeau4bNjv"
    }
};

export default config;
import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ricky Primayuda Putra - Mobile Developer | iOS, Android & Full-Stack Developer",
  description = "Expert Mobile Developer specializing in iOS (SwiftUI), Android (Kotlin/Dart/Flutter), and Full-Stack Development. Experienced in React, Node.js, NestJS, and backend technologies.",
  keywords = "Ricky Primayuda, mobile developer, iOS developer, Android developer, Flutter developer, full-stack developer",
  image = "/og-image.jpg",
  url = "https://rickyprimay.vercel.app",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image);
    updateMetaTag("og:url", url);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
  }, [title, description, keywords, image, url]);

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(
      `meta[name="${name}"], meta[property="${name}"]`,
    );
    if (!element) {
      element = document.createElement("meta");
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        element.setAttribute("property", name);
      } else {
        element.setAttribute("name", name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  return null;
};

export default SEO;

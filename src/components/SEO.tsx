// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  name?: string;
  type?: string;
  url?: string;
  schema?: Record<string, any> | Record<string, any>[];
  image?: string;
  robots?: string;
}

export default function SEO({ 
  title, 
  description = "Paragon Refractories & Minerals (PRM) manufactures reheating furnaces, refractory materials, and industrial equipment for steel plants and rolling mills.", 
  keywords = "PRM, Paragon Refractories, Reheating Furnaces, Refractory Materials, Industrial Equipment, Steel Plants, Rolling Mills",
  name = "Paragon Refractories and Minerals", 
  type = "website",
  url = "", 
  schema,
  image = "/images/refractory_hero.jpg",
  robots = "index, follow"
}: SEOProps) {
  
  // Set your master domain here to ensure consistent canonicalization
  const baseUrl = "https://www.paragonrefractoriesandminerals.com";
  
  // Ensure we don't end up with double slashes if the url prop is passed as "/something"
  const formattedPath = url.startsWith('/') ? url : `/${url}`;
  const canonicalUrl = url === "" ? baseUrl : (url === "/" ? baseUrl : `${baseUrl}${formattedPath}`);

  // Format absolute image URL
  const absoluteImageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      
      {/* Canonical Tag - Resolves GSC "Duplicate without user-selected canonical" */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph tags */}
      <meta property="og:site_name" content="Paragon Refractories and Minerals" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImageUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  name?: string;
  type?: string;
  schema?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description = "Paragon Refractories & Minerals (PRM) manufactures reheating furnaces, refractory materials, and industrial equipment for steel plants and rolling mills.", 
  keywords = "PRM, Paragon Refractories, Reheating Furnaces, Refractory Materials, Industrial Equipment, Steel Plants, Rolling Mills",
  name = "PRM", 
  type = "website",
  schema
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

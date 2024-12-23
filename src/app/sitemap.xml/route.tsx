export async function GET(req) {
  // List of URLs to be included in the sitemap
  const staticUrls = [
    // Main Pages
    "https://base2brand.com/",
    "https://base2brand.com/about",
    "https://base2brand.com/team",
    "https://base2brand.com/career",
    "https://base2brand.com/services",
    "https://base2brand.com/shopify",
    "https://base2brand.com/digital-marketing",
    "https://base2brand.com/graphic",
    "https://base2brand.com/e-commerce",
    "https://base2brand.com/web-application",
    "https://base2brand.com/portfolio",
    "https://base2brand.com/blog",
    // "https://base2brand.com/blog/Future-of-Voice-Search",
    // "https://base2brand.com/blog/Improve-Website-Loading-Speed",
    // "https://base2brand.com/blog/Typography-in-Web-Designesign",
    "https://base2brand.com/contact-us",
    // "https://base2brand.com/blog-detail"
  ];

  const fetchDynamicUrls = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      let mappedData;
      // Process different data types depending on the API
      mappedData = result?.blogs?.map(
        (item) => `https://base2brand.com/blog-detail/${item.slugUrl}`
      );
      console.log("mappedData",);
      
      return mappedData;
    } catch (error) {
      console.error(`Failed to fetch from ${url}:`, error);
      return [];
    }
  };
  // Fetch dynamic URLs from APIs
  const blogUrls = await fetchDynamicUrls(
    "https://adminbackend.base2brand.com/api/B2Badmin/blogs?page=1&limit=500"
  );

  const urls = [...staticUrls, ...blogUrls];

  // Build the XML for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => {
            return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
          })
          .join("")}
      </urlset>`;

  // Return the sitemap as an XML response   
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

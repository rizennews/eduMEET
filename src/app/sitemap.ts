import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edumeet.africa";
  
  const routes = [
    "",
    "/what-is-edumeet",
    "/how-it-works",
    "/nren-hub",
    "/nrens",
    "/leadership",
    "/it-directors",
    "/researchers",
    "/students-lecturers",
    "/participation",
    "/technical-onboarding",
    "/faq",
    "/get-started",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

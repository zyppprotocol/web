import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://zypp.fun',
            lastModified: new Date(),
            priority: 1,
            changeFrequency: 'daily'
        }
    ]

}
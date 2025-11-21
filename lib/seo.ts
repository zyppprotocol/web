import type { Metadata } from "next";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://zypp.fun";

export const siteMetadata = {
  name: "Zypp Protocol",
  tagline: "Offline-First Payment Layer for Solana",
  description:
    "Zypp Protocol is the offline transaction layer for Solana, designed to enable seamless peer to peer value exchange without requiring active internet connectivity. It establishes a reliable foundation for real world payments, supporting environments with low connectivity, crowded networks, and on-the-go usage. Zypp Protocol powers the Zypp Wallet, a mobile experience built for instant offline transactions, and will soon be available to developers through The Offline Stack, a dedicated SDK for integrating offline capabilities into apps, wallets, tools, and financial products. The protocol focuses on accessibility, mobility, and global usability, making blockchain payments practical for everyday users, merchants, and communities. With open development, continuous updates, and an ecosystem first approach, Zypp Protocol aims to become a core standard for offline interactions across the Solana ecosystem.",
  url: rawSiteUrl,
  twitter: "@use_zypp",
  ogImage: `${rawSiteUrl}/og.png`,
  logo: `${rawSiteUrl}/apple-touch-icon.png`,
  contactEmail: "hello@zypp.fun",
  keywords: [
    "Zypp Protocol",
    "offline crypto payments",
    "Solana",
    "peer-to-peer",
    "web3 infrastructure",
    "crypto wallet",
    "developer sdk",
    "Solana payments",
    "crypto offline",
    "financial inclusion",
  ],
} as const;

export const absoluteUrl = (path = "/") => {
  if (!path) return siteMetadata.url;
  if (path.startsWith("http")) return path;
  return `${siteMetadata.url}${path.startsWith("/") ? path : `/${path}`}`;
};

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
  image?: string | null;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string | Date | null;
  updatedTime?: string | Date | null;
  canonical?: string;
};

const isoStringOrUndefined = (value?: string | Date | null) => {
  if (!value) return undefined;
  return new Date(value).toISOString();
};

export const buildMetadata = (args: BuildMetadataArgs = {}): Metadata => {
  const {
    title,
    description,
    path = "/",
    image,
    keywords = [],
    type = "website",
    publishedTime,
    updatedTime,
    canonical,
  } = args;

  const pageUrl = absoluteUrl(path);
  const canonicalUrl = canonical ? absoluteUrl(canonical) : pageUrl;
  const imageUrl = absoluteUrl(image ?? siteMetadata.ogImage);
  const resolvedTitle = title
    ? `${title} | ${siteMetadata.name}`
    : `${siteMetadata.name} – ${siteMetadata.tagline}`;
  const resolvedDescription = description ?? siteMetadata.description;
  const keywordSet = Array.from(
    new Set([...(siteMetadata.keywords ?? []), ...keywords])
  );

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
      },
    },
    keywords: keywordSet,
    openGraph: {
      type,
      url: canonicalUrl,
      title: resolvedTitle,
      description: resolvedDescription,
      siteName: siteMetadata.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime: isoStringOrUndefined(publishedTime),
            modifiedTime: isoStringOrUndefined(updatedTime ?? publishedTime),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
      creator: siteMetadata.twitter,
    },
  } satisfies Metadata;
};

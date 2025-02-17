import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "vj43t29p", // Ganti dengan ID proyek Sanity
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Ambil daftar artikel
export async function getPosts() {
  return sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage{
        asset->{
          url
        }
      },
      "authorName": author->name,
      categories[]->{
        title,
        slug
      }
    }
  `);
}

// Ambil detail artikel berdasarkan slug
export async function getPost(slug) {
  return sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      "author": author->{
        name,
        slug
      },
      categories[]->{
        title,
        slug
      }
    }
  `,
    { slug }
  );
}

// Ambil artikel berdasarkan kategori
export async function getPostsByCategory(slug) {
  // Make sure slug is properly quoted in the GROQ query
  return sanityClient.fetch(
    `*[_type == "post" && references(*[_type=="category" && slug.current == "${slug}"]._id)] {
      title,
      slug,
      mainImage {
        asset-> {
          url
        }
      },
      "authorName": author->name,
      "categories": categories[]->{ title, "slug": slug.current }
    }`
  );
}

// Ambil artikel berdasarkan author
export async function getPostsByAuthor(slug) {
  return sanityClient.fetch(
    `
    *[_type == "post" && author->slug.current == $slug] {
      title,
      slug,
      mainImage,
    }
  `,
    { slug }
  );
}

// Ambil daftar kategori
export async function getAllCategories() {
  return sanityClient.fetch(`
    *[_type == "category"] {
      title,
      "slug": slug.current
    }
  `);
}

export async function getProjects() {
  return sanityClient.fetch(`
      *[_type == "project"] | order(_createdAt desc) {
        title,
        description,
        "imageUrl": image.asset->url,
        liveUrl,
        githubUrl,
        tech,
        category
      }
    `);
}

// Ambil detail proyek berdasarkan kategori
export async function getProjectsByCategory(category) {
  return sanityClient.fetch(
    `
      *[_type == "project" && category == $category] {
        title,
        description,
        "imageUrl": image.asset->url,
        liveUrl,
        githubUrl,
        tech
      }
    `,
    { category }
  );
}

// Ambil kategori unik dari proyek
export async function getProjectCategories() {
  return sanityClient.fetch(`
      *[_type == "project"].category
    `);
}

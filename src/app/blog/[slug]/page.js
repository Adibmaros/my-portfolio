import { getPost } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source).url();
}

export default async function PostDetail({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Artikel tidak ditemukan.</p>
      </div>
    );
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage) : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Post Header */}
      <header className="space-y-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight text-center">{post?.title || "Judul Tidak Tersedia"}</h1>

        {/* Author and Date */}
        <div className="flex items-center justify-center space-x-4 text-gray-600">
          <p className="flex items-center">
            <span className="mr-2">Oleh</span>
            {post?.author?.slug?.current ? (
              <Link href={`/author/${post.author.slug.current}`} className="font-medium text-indigo-600 hover:text-indigo-800 transition duration-150">
                {post?.author?.name || "Penulis Tidak Diketahui"}
              </Link>
            ) : (
              "Penulis Tidak Diketahui"
            )}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {post?.categories?.length > 0 ? (
            post.categories.map((cat) =>
              cat?.slug?.current ? (
                <Link key={cat.slug.current} href={`/category/${cat.slug.current}`} className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition duration-150">
                  {cat.title}
                </Link>
              ) : null
            )
          ) : (
            <span className="text-gray-500">Kategori Tidak Tersedia</span>
          )}
        </div>
      </header>

      {/* Main Image */}
      {imageUrl && (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image src={imageUrl} alt={post?.title || "Gambar"} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
        </div>
      )}

      {/* Post Content */}
      <div className="prose prose-lg max-w-none prose-gray prose-img:rounded-xl prose-img:max-w-full prose-headings:font-bold prose-a:text-indigo-600 hover:prose-a:underline px-4 md:px-6 lg:px-8 text-justify prose-p:my-4 leading-relaxed">
        {post?.body ? <PortableText value={post.body} /> : <p className="text-center text-gray-600">Konten tidak tersedia.</p>}
      </div>
    </article>
  );
}

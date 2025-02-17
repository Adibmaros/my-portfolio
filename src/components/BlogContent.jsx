'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

export default function BlogContent({ initialPosts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? initialPosts
    : initialPosts?.filter(post => 
        post.categories?.some(cat => cat.title === selectedCategory)
      );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-300 dark:bg-gray-600"
    >
      <Navbar/>
      {/* Title Section */}
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white mt-8"
      >
        Daftar Artikel
      </motion.h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Here are some article i've written, feel free to read!</p>


      {/* Category Filter */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-wrap gap-2 justify-center mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Semua
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Posts Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
      >
        <AnimatePresence>
          {filteredPosts?.map((post, index) => (
            <motion.div
              layout
              key={post?.slug?.current || Math.random()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Post Image */}
              {post?.mainImage?.asset?.url ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post?.title || "Judul Tidak Tersedia"}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <div className="h-56 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500">No image available</span>
                </div>
              )}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-6"
              >
                {/* Post Title */}
                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {post?.slug?.current ? (
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      {post?.title || "Judul Tidak Tersedia"}
                    </Link>
                  ) : (
                    <span>Judul Tidak Tersedia</span>
                  )}
                </h2>

                {/* Author Name */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  by {post?.authorName || "Penulis Tidak Diketahui"}
                </p>

                {/* Categories */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {post?.categories && post.categories.length > 0 ? (
                    post.categories.map((cat) =>
                      cat?.slug?.current ? (
                        <motion.span
                          key={cat.slug.current}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {cat.title}
                        </motion.span>
                      ) : null
                    )
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Kategori Tidak Tersedia</p>
                  )}
                </motion.div>

                {/* Read More Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium"
                  >
                    Baca Selengkapnya
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
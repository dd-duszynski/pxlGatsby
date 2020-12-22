import React from "react"
import BlogCard from "../BlogCard/BlogCard"
import styles from "./BlogList.module.scss"

const BlogList = ({data}) => {
   return (
      <section className={styles.BlogList}>
         {data.map((item, index) => {
            return <BlogCard key={index} blog={item} />
         })}
      </section>
   )
}

export default BlogList

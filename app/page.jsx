import BlogCard from "@/components/blogCard/blogCard";
import classes from "./page.module.css";
import { blogs } from "@/lib/data";

export default function Home() {
  return (
    <div className={classes.container}>
      <h2>Sheme&#39; Blog Website</h2>
      <div className={classes.wrapper}>
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}

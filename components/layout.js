import Hero from "./hero";
import Footer from "./footer";

export default function Layout({imagePaths, children}) {
  return (
    <>
      <Hero imagePaths={imagePaths} />
      <div className="main prose lg:prose-lg xl:prose-2xl mx-auto px-5">
        {children}
      </div>
      <Footer />
    </>
  );
}

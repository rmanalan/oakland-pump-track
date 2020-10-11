import Hero from "./hero";

export default function Layout({children}) {
  return (
    <>
      <Hero />
      <div className="main prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto my-20">
        {children}
      </div>
    </>
  );
}

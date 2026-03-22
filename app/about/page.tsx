import NavMenu from "../components/NavMenu";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen font-sans bg-black">
      <main className="flex min-h-screen w-full flex-col bg-black">
        <NavMenu />
        <div className="text-white text-3xl p-5">About Page</div>
      </main>
    </div>
  );
}

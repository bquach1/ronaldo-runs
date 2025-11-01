import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans bg-black dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-black dark:bg-black">
        <NavMenu />
      </main>
    </div>
  );
}

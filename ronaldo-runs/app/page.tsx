import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
        <NavMenu />
      </main>
    </div>
  );
}

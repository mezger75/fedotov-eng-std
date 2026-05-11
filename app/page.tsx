export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">360 for You</h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <iframe width="100%" height="500" src="https://360-for-you.com/projects/YZLgEUWE/" loading="lazy"></iframe>
        </div>
        <p className="text-sm text-gray-500">This is a 360 video viewer. It is a simple viewer that allows you to view a 360 video in a 360 degree view.</p>
      </main>
    </div>
  );
}

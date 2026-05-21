import UploadCard from "../components/UploadCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">

      <h1 className="text-6xl font-bold mb-6">
        AI Sales Intelligence
      </h1>

      <p className="text-gray-400 text-xl mb-8 text-center max-w-2xl">
        Upload cold calls and analyze customer sentiment,
        buying intent, objections, and conversion probability using AI.
      </p>

     <UploadCard />

    </main>
  );
}
<p className="text-red-500">Testing Git Tracking</p>
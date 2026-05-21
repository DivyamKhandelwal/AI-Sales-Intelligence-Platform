export default function UploadCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl w-[500px]">

      <h2 className="text-3xl font-bold mb-6">
        Upload Cold Call
      </h2>

      <p className="text-gray-400 mb-6">
        Upload your sales call recording and let AI analyze customer intent.
      </p>

      <select className="w-full bg-slate-800 p-3 rounded-xl mb-4">
        <option>SaaS</option>
        <option>Real Estate</option>
        <option>Recruitment</option>
        <option>Insurance</option>
      </select>

      <input
        type="file"
        className="w-full bg-slate-800 p-3 rounded-xl mb-6"
      />

      <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold">
        Analyze Call
      </button>

    </div>
  );
}
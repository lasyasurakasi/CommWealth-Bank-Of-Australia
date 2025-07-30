export default function NeonLogin() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono">
      <div className="border border-green-500 p-8 rounded-lg shadow-[0_0_20px_#00FF00] max-w-sm w-full">
        <h2 className="text-center text-2xl mb-6 tracking-wide">🔐 ACCESS TERMINAL</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full bg-black border border-green-500 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-green-400" />
          <input type="password" placeholder="Password" className="w-full bg-black border border-green-500 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-green-400" />
          <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded mt-2">ENTER</button>
        </form>
      </div>
    </div>
  );
}

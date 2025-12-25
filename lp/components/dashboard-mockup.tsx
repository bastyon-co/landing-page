import { Users, Zap, CheckCircle2 } from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-slate-950 p-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-400 font-mono">logistics_copilot_v2.tsx</span>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wider">Weekly Efficiency</p>
            <h3 className="text-2xl font-bold text-white mt-1">
              94.2% <span className="text-green-400 text-sm">↑ 12%</span>
            </h3>
          </div>
          <Zap className="text-yellow-500 w-6 h-6" />
        </div>

        {/* Abstract Chart Visualization */}
        <div className="flex items-end gap-2 h-24 border-b border-l border-slate-700 p-2">
          <div className="w-1/5 bg-slate-800 h-12 rounded-t hover:bg-indigo-500 transition-colors"></div>
          <div className="w-1/5 bg-slate-800 h-16 rounded-t hover:bg-indigo-500 transition-colors"></div>
          <div className="w-1/5 bg-slate-800 h-10 rounded-t hover:bg-indigo-500 transition-colors"></div>
          <div className="w-1/5 bg-indigo-500 h-20 rounded-t shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <div className="w-1/5 bg-slate-800 h-14 rounded-t hover:bg-indigo-500 transition-colors"></div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm p-2 bg-slate-800/50 rounded">
            <span className="text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Auto-dispatching
            </span>
            <span className="text-slate-500">Active</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 bg-slate-800/50 rounded">
            <span className="text-slate-300 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" /> Driver Route Sync
            </span>
            <span className="text-slate-500">Processing...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

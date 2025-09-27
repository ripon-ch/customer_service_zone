import React from "react";
function StatusPanel({ inProgress, resolved, onComplete }) {
    return (
        <aside className="space-y-8">
            <div>
                <h3 className="text-[22px] font-semibold text-slate-700">
                    Task Status
                </h3>
                <div className="mt-3 space-y-4">
                    {inProgress.length === 0 && (
                        <p className="text-sm text-neutral-500">
                            Select a ticket to add to Task Status
                        </p>
                    )}
                    {inProgress.map(t => (
                        <div
                            key={t.id}
                            className="rounded-sm bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                        >
                            <div className="text-[15px] font-semibold text-neutral-800 mb-3 truncate">
                                {t.title}
                            </div>
                            <button
                                onClick={() => onComplete(t)}
                                className="w-full rounded-sm bg-[#02A53B] py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-[22px] font-semibold text-slate-700">
                    Resolved Task
                </h3>
                <ul className="mt-3 space-y-4">
                    {resolved.length === 0 && (
                        <li className="text-sm text-neutral-500">
                            No resolved tasks yet.
                        </li>
                    )}
                    {resolved.map(t => (
                        <li
                            key={t.id}
                            className="rounded-xl bg-indigo-50 text-slate-800 px-4 py-3 shadow-sm"
                        >
                            <span className="text-[15px] font-medium truncate block">
                                {t.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
export default StatusPanel;

import { Calendar } from "lucide-react";

export default function TicketCard({ ticket, onSelect, inProgressIds }) {
  const isInProgress = inProgressIds?.has?.(ticket.id);
  const status = isInProgress ? "In-Progress" : ticket.status || "Open";
  const pillClasses =
    status === "In-Progress"
      ? "bg-amber-100 text-amber-800"
      : status === "Resolved"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-emerald-100 text-emerald-800";

  const priorityColor =
    ticket.priority === "High"
      ? "text-rose-600"
      : ticket.priority === "Medium"
      ? "text-amber-600"
      : "text-emerald-600";

  return (
    <button onClick={() => onSelect(ticket)} className="w-full text-left">
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow min-h-[132px]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="text-[15px] font-semibold text-neutral-900 leading-snug truncate">{ticket.title}</h4>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{ticket.description}</p>
          </div>
          <span className={`shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${pillClasses}`}>
            <span className={`h-2 w-2 rounded-full ${status === 'In-Progress' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            {status}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-neutral-600 flex-wrap md:flex-nowrap gap-y-2">
          <div className="flex items-center gap-3">
            <span className="text-neutral-500">#{ticket.id}</span>
            <span className={`uppercase font-semibold tracking-wide ${priorityColor}`}>{ticket.priority} Priority</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>{ticket.customer}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(ticket.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

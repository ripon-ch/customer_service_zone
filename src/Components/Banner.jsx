import React from "react";

import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import TicketCard from "../Components/TicketCard.jsx";
import StatusPanel from "../Components/StatusPanel.jsx";
import { initialTickets } from "../data/tickets.js";
import bannerLeft from "../assets/bannerLeft.png";
import bannerRight from "../assets/bannerRight.png";
function Banner() {
    const [tickets, setTickets] = useState(initialTickets);
    const [inProgress, setInProgress] = useState([]);
    const [resolved, setResolved] = useState([]);

    const inProgressCount = inProgress.length;
    const resolvedCount = resolved.length;

    const addToInProgress = ticket => {
        if (resolved.some(t => t.id === ticket.id)) {
            toast.info("Already resolved.");
            return;
        }
        if (inProgress.some(t => t.id === ticket.id)) {
            toast.warning("Already in Task Status.");
            return;
        }
        setInProgress(prev => [{ ...ticket, status: "In Progress" }, ...prev]);
        toast.success("Added to Task Status");
    };

    const completeTicket = ticket => {
        setInProgress(prev => prev.filter(t => t.id !== ticket.id));
        setResolved(prev => [{ ...ticket, status: "Resolved" }, ...prev]);
        setTickets(prev => prev.filter(t => t.id !== ticket.id));
        toast.success("Ticket marked as complete");
    };

    const sortedTickets = useMemo(() => {
        return [...tickets].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }, [tickets]);

    const BannerStat = ({ label, value, tone }) => (
        <div
            className={`relative overflow-hidden banner-card ${
                tone === "green" ? "banner-green" : "banner-purple"
            }`}
        >
            {/* Background patterns */}
            <img
                className="absolute top-0 left-0 w-32 h-full opacity-70"
                src={bannerLeft}
                alt="Left background pattern"
            />
            <img
                className="absolute bottom-0 right-0 w-32 h-full opacity-70"
                src={bannerRight}
                alt="Right background pattern"
            />

            {/* Foreground content */}
            <div className="relative text-center py-8">
                <div className="text-white/90 text-sm">{label}</div>
                <div className="text-white text-6xl font-extrabold tracking-tight mt-1">
                    {value}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <BannerStat
                    label="In-Progress"
                    value={inProgressCount}
                    tone="purple"
                />
                <BannerStat
                    label="Resolved"
                    value={resolvedCount}
                    tone="green"
                />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <h2 className="mb-4 font-semibold text-lg">
                        Customer Tickets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sortedTickets.map(t => (
                            <TicketCard
                                key={t.id}
                                ticket={t}
                                inProgressIds={
                                    new Set(inProgress.map(p => p.id))
                                }
                                onSelect={addToInProgress}
                            />
                        ))}
                        {sortedTickets.length === 0 && (
                            <div className="col-span-full rounded-lg border bg-white dark:bg-neutral-900 p-6 text-center text-neutral-500">
                                All tickets are resolved. Nicely done!
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <h2 className="mb-4 font-semibold text-lg">Task Status</h2>
                    <StatusPanel
                        inProgress={inProgress}
                        resolved={resolved}
                        onComplete={completeTicket}
                    />
                </div>
            </section>
        </div>
    );
}

export default Banner;

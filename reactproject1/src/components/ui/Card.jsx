// src/components/ui/card.jsx
export function Card({ children }) {
    return <div className="rounded-xl border p-4 shadow">{children}</div>;
}

export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
}
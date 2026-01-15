export default function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
                        bg-white shadow-md hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300 text-teal-700">
            <div className="text-4xl">{icon}</div>
            <span className="text-sm font-semibold text-center">{label}</span>
        </div>
    );
}
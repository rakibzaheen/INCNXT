const shortServiceList  = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-2">Everything You Need</h3>
            <p>All in one place.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                {
                    name: 'Website Design & Development',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7h18" /></svg>,
                },
                {
                    name: 'Search Engine Optimization',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
                },
                {
                    name: 'Amazon FBA',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>,
                },
                {
                    name: 'Amazon Store Management',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>,
                },
                {
                    name: 'Product Research',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
                },
                {
                    name: 'Product Sourcing',
                    icon: <svg className="w-6 h-6 text-[#D51F27] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 7h18M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7" /></svg>,
                },
                ].map(service => (
                <div
                    key={service.name}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-8 flex font-medium font-bold text-left"
                >
                    {service.icon}
                    <span>{service.name}</span>
                </div>
                ))}
            </div>
            </div>
    );
};

export default shortServiceList;
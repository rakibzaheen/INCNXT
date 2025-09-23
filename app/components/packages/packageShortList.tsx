const packageShortList  = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-2">Packages</h3>
            <p>Explore our business formation packages tailored to your needs, from basic filings to premium support and compliance.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Basic Package */}
                <div className="border rounded-lg p-6 flex flex-col shadow-sm">
                <h4 className="text-lg font-bold mb-2">Basic</h4>
                <div className="text-2xl font-extrabold mb-1">$0 <span className="text-base font-normal">+ State Fee</span></div>
                <div className="text-sm text-gray-500 mb-4">One Time Fee</div>
                <ul className="mb-6 space-y-2">
                    <li>Free 1st Year Registered Agent Service</li>
                    <li>Articles of Incorporation</li>
                </ul>
                <button className="mt-auto bg-[#D51F27] text-white px-4 py-2 rounded font-semibold hover:bg-[#ab0f16] transition">Select Basic</button>
                </div>
                {/* Standard Package */}
                <div className="border-2 border-[#0F395D] rounded-lg p-6 flex flex-col shadow-lg relative">
                <span className="absolute top-4 right-4 bg-[#D51F27] text-white text-xs px-2 py-1 rounded font-bold">MOST POPULAR</span>
                <h4 className="text-lg font-bold mb-2">Standard</h4>
                <div className="text-2xl font-extrabold mb-1">$199 <span className="text-base font-normal">+ State Fee</span></div>
                <div className="text-sm text-gray-500 mb-4">One Time Fee</div>
                <ul className="mb-6 space-y-2">
                    <li>Everything from Basic</li>
                    <li>EIN Business Tax Number</li>
                    <li>Operating Agreement</li>
                    <li>Domain Name + Business Email</li>
                </ul>
                <button className="mt-auto bg-[#D51F27] text-white px-4 py-2 rounded font-semibold hover:bg-[#ab0f16] transition">Select Standard</button>
                </div>
                {/* Premium Package */}
                <div className="border rounded-lg p-6 flex flex-col shadow-sm">
                <h4 className="text-lg font-bold mb-2">Premium</h4>
                <div className="text-2xl font-extrabold mb-1">$299 <span className="text-base font-normal">+ State Fee</span></div>
                <div className="text-sm text-gray-500 mb-4">One Time Fee</div>
                <ul className="mb-6 space-y-2">
                    <li>Everything from Standard</li>
                    <li>Expedited Filing</li>
                    <li>Business Phone Number</li>
                    <li>Business Contracts Template</li>
                </ul>
                <button className="mt-auto bg-[#D51F27] text-white px-4 py-2 rounded font-semibold hover:bg-[#ab0f16] transition">Select Premium</button>
                </div>
            </div>
            </div>
    );
};

export default packageShortList;

export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "$0",
      features: ["LLC Formation", "Standard Filing Speed", "Email Support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$149",
      features: [
        "Everything in Basic",
        "EIN/Tax ID Filing",
        "Operating Agreement",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      features: [
        "Everything in Pro",
        "Registered Agent Services (1 Year)",
        "Compliance Management",
        "24/7 Phone Support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-md text-center ${pkg.popular ? 'border-4 border-blue-500' : ''}`}>
              {pkg.popular && <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
              <h2 className="text-3xl font-bold text-gray-800 mt-4">{pkg.name}</h2>
              <p className="text-5xl font-bold text-gray-800 my-4">{pkg.price}<span className="text-lg text-gray-500">/year</span></p>
              <ul className="text-gray-600 text-lg">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="my-2">{feature}</li>
                ))}
              </ul>
              <button className={`w-full mt-8 py-3 rounded-lg font-bold text-lg ${pkg.popular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

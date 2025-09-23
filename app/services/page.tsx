
export default function Services() {
  const services = [
    {
      title: "Business Entity Formation",
      description: "LLC, Corporation (C & S-Corp), Nonprofit.",
    },
    {
      title: "Registered Agent Services",
      description: "Legal document handling and forwarding.",
    },
    {
      title: "EIN / Tax ID Filing",
      description: "Automated IRS Form SS-4 submission.",
    },
    {
      title: "Compliance Management",
      description: "Annual reports, franchise tax reminders, and alerts.",
    },
    {
      title: "Virtual Address & Mail Forwarding",
      description: "Get a professional business address.",
    },
    {
      title: "Business License & Permit Filing",
      description: "We handle the paperwork for you.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

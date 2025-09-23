
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About INCNXT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 text-lg mb-4">
            INCNXT was founded with a simple mission: to make it easy and affordable for entrepreneurs to start and manage their businesses. We believe that anyone with a great idea should be able to turn it into a reality, without getting bogged down in complex legal and administrative tasks.
          </p>
          <p className="text-gray-600 text-lg">
            Our team of experts is dedicated to providing you with the best possible service and support. We are here to help you every step of the way, from choosing the right business entity to staying compliant with state and federal regulations.
          </p>
        </div>
        <div className="relative h-96">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}

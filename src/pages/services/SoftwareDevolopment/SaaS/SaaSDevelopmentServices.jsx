export default function SaaSDevelopmentServices() {
    const services = [
        {
            title: "Scalable Architecture",
            description:
                "Grow without limits with a SaaS platform designed to scale—our cloud-based architecture flexes with your success. Build multi-tenant systems, optimize resource use, ensure high availability. Handles 10 to 10,000 users seamlessly, reduces scaling costs by 30%, supports rapid expansion. A 2025 startup scaled from 100 to 5,000 users in months with our SaaS—your growth, unstoppable.",
        },
        {
            title: "Secure Infrastructure",
            description:
                "Protect your data and users with a SaaS solution locked down tight—our cloud security keeps threats at bay. Implement encryption, access controls, compliance with 2025 standards (GDPR, CCPA). Cuts breach risks by 40%, builds customer trust, keeps you audit-ready. A 2025 fintech SaaS passed a security audit with flying colors—your peace of mind, guaranteed.",
        },
        {
            title: "Subscription Management",
            description:
                "Turn users into revenue with a SaaS built for subscriptions—our tools make billing and retention a breeze. Integrate payment gateways, manage pricing tiers, automate renewals. Boosts revenue 25% with smooth billing, reduces churn, scales with your plans. A 2025 edtech platform doubled subscribers with our subscription engine—your profits, maximized.",
        },
    ];

    return (
        <section className="py-12 bg-white font-chivo px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#b5824e] mb-8 sm:mb-12">
                    Our SaaS Development Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col px-6 py-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-[#b5824e] mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

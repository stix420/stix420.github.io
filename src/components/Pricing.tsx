import { Component } from "solid-js";

const Pricing: Component = () => {
  const pricingPlans = [
    {
      name: "Hourly Session",
      price: "$150",
      period: "per hour",
      description: "Perfect for one-time consultations or quick touch-ups",
      features: [
        "Personal beauty consultation",
        "Makeup application or skincare guidance",
        "Style recommendations",
        "Product recommendations",
        "Follow-up tips via email",
      ],
      popular: false,
      buttonText: "Book Session",
    },
    {
      name: "Bundle Package",
      price: "$400",
      period: "3 sessions",
      description: "Save $50 with our comprehensive beauty package",
      features: [
        "3 one-hour sessions",
        "Complete beauty analysis",
        "Customized beauty plan",
        "Makeup tutorial & practice",
        "Skincare routine design",
        "Wardrobe color consultation",
        "Ongoing support for 1 month",
      ],
      popular: true,
      buttonText: "Choose Bundle",
    },
    {
      name: "Monthly Subscription",
      price: "$350",
      period: "per month",
      description: "Ongoing beauty support with monthly check-ins",
      features: [
        "2 sessions per month",
        "Priority booking",
        "Monthly beauty plan updates",
        "Seasonal style refresh",
        "Exclusive product discounts",
        "24/7 text support",
        "Special event preparation included",
      ],
      popular: false,
      buttonText: "Subscribe Now",
    },
  ];

  return (
    <section id="pricing" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent">
              Pricing
            </span>{" "}
            Plans
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to transform your beauty routine and boost
            your confidence.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              class={`relative rounded-2xl shadow-lg ${
                plan.popular
                  ? "bg-gradient-to-br from-slate-600 to-blue-700 text-white transform scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span class="bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div class="p-8">
                <h3
                  class={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  class={`mb-6 ${
                    plan.popular ? "text-pink-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div class="mb-6">
                  <span
                    class={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    class={`text-lg ${
                      plan.popular ? "text-pink-100" : "text-gray-600"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <ul class="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li class="flex items-center">
                      <svg
                        class={`w-5 h-5 mr-3 ${
                          plan.popular ? "text-pink-200" : "text-green-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class={`${
                          plan.popular ? "text-pink-100" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  class={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-pink-600 hover:bg-pink-50 shadow-lg"
                      : "bg-gradient-to-r from-slate-600 to-blue-700 text-white hover:from-slate-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 mb-4">
            All services include personalized recommendations and ongoing
            support.
          </p>
          <p class="text-sm text-gray-500">
            Prices may vary for special events or travel consultations. Contact
            for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

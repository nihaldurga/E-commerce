"use client";

import { useState } from "react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    requirement: "",
  });

  const handleSubmit = () => {
    const message = `Hello Sri Durga Traders

Name: ${form.name}

Phone: ${form.phone}

Address: ${form.address}

Requirement:
${form.requirement}`;

    window.open(
      `https://wa.me/919550511020?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Request a Quote
      </h1>

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone Number"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          placeholder="Address"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Describe your requirement..."
          className="border p-3 w-full h-40"
          onChange={(e) =>
            setForm({
              ...form,
              requirement: e.target.value,
            })
          }
        />

        <button
          onClick={handleSubmit}
          className="
            bg-green-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Send Quote Request
        </button>
      </div>
    </div>
  );
}
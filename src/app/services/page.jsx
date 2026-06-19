"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    houseType: "",
    requirement: "",
  });

  const handleSubmit = () => {
    const message = `Painting Service Request

Name: ${form.name}

Phone: ${form.phone}

Address: ${form.address}

House Type: ${form.houseType}

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
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8">
        Painting Service
      </h1>

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone Number"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          placeholder="Address"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
        />

        <select
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({
              ...form,
              houseType: e.target.value,
            })
          }
        >
          <option>Select House Type</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>Villa</option>
          <option>Commercial Building</option>
        </select>

        <textarea
          placeholder="Describe your painting requirement..."
          className="border p-3 w-full h-40 rounded-lg"
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
            px-8
            py-3
            rounded-lg
          "
        >
          Request Painting Service
        </button>
      </div>
    </div>
  );
}
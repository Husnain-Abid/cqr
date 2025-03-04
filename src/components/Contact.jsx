"use client"

import { useState } from "react"
import { ChevronDown, MailOpen, Phone, Printer } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const sourceOptions = ["Google Search", "Social Media", "Friend Referral", "Advertisement", "Other"]

  const selectSource = (source) => {
    setFormData((prevState) => ({
      ...prevState,
      source,
    }))
    setDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl p-8 md:p-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="text-pink-500">Touch</span>
          </h1>

          <p className="text-gray-600 mb-8">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit
            netus.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>

              <div className="relative">
                <div
                  className="w-full px-4 py-3 border border-gray-200 rounded-md flex justify-between items-center cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className={`${formData.source ? "text-black" : "text-gray-500"}`}>
                    {formData.source || "How did you find us?"}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>

                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-1">
                      {sourceOptions.map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => selectSource(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-medium py-3 rounded-md hover:bg-pink-600 transition duration-300"
              >
                SEND
              </button>
            </div>
          </form>

          <div className="mt-12 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-gray-700 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-700">PHONE</p>
                <p className="text-pink-500">03 5432 1234</p>
              </div>
            </div>

            <div className="flex items-center">
              <Printer className="h-6 w-6 text-gray-700 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-700">FAX</p>
                <p className="text-gray-700">03 5432 1234</p>
              </div>
            </div>

            <div className="flex items-center">
              <MailOpen className="h-6 w-6 text-gray-700 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-700">EMAIL</p>
                <p className="text-pink-500">info@marcc.com.au</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


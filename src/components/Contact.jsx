"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MailOpen, Moon, Phone, Printer, SunMoon } from "lucide-react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleDarkMode } from "../store/themeSlice"

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




  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);




  return (
    <>
      <div className={`px-36 flex justify-end gap-5 py-10 ${isDarkMode ? "bg-[#3F3F3F] text-white " : "" } `}>
        <Link to="/" className=" hover:text-[#DD5471]">Home</Link>
        <div onClick={() => dispatch(toggleDarkMode())}>
          {isDarkMode ? (
            <SunMoon className="text-[#DD5471]" />
          ) : (
            <Moon className="text-[#DD5471]" />
          )}
        </div>

      </div>

      <div className={`min-h-screen font-helvetica flex justify-center p-4  ${isDarkMode ? "bg-[#3F3F3F] text-white " : " text-black" }`}>
        <div className=" rounded-lg w-full container p-8 md:p-12">
          <div className="max-w-xl mx-auto text-sm">
            <h1 className="text-4xl font-bold mb-6">
              Get in <span className="text-[#DD5471]">Touch</span>
            </h1>

            <p className="text-sm  mb-8">
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>

                <div className="relative">
                  <div
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm flex justify-between items-center cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className={`${formData.source ? "text-black" : "text-gray-500"}`}>
                      {formData.source || "How did you find us?"}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>

                  {dropdownOpen && (
                    <div className={`absolute z-10 mt-1 w-full  border-gray-200  rounded-sm shadow-lg  ${isDarkMode ? "bg-[#3F3F3F] text-gray-400  border  border-gray-200" : " text-black border-gray-200 bg-white border" }`}>
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
                  className="w-full bg-[#DD5471] text-white font-medium py-3 rounded-sm hover:bg-pink-600 transition duration-300"
                >
                  SEND
                </button>
              </div>
            </form>

            <div className="mt-12 flex flex-col  md:flex-row md:justify-between space-y-6 md:space-y-0">
              <div className="flex items-center">
                <Phone className="h-6 w-6  mr-3" />
                <div >
                  <p className="text-sm font-medium ">PHONE</p>
                  <p className="text-[#DD5471]">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center">
                <Printer className="h-6 w-6  mr-3" />
                <div>
                  <p className="text-sm font-medium ">FAX</p>
                  <p className="">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center">
                <MailOpen className="h-6 w-6  mr-3" />
                <div>
                  <p className="text-sm font-medium ">EMAIL</p>
                  <p className="text-[#DD5471]">info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Contact


import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Form = () => {
  const [fileInputs, setFileInputs] = useState(Array(20).fill(null));
  const [locationCategory, setLocationCategory] = useState("");
  const [location, setLocation] = useState("");
  const [formData, setFormData] = useState({
    superBuiltUpArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    facing: "",
    projectName: "",
    adTitle: "",
    description: "",
    price: "",
    name: "",
    phone: "",
  });

  const handleFileChange = (e, index) => {
    const files = [...fileInputs];
    files[index] = e.target.files[0];
    setFileInputs(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasPhoto = fileInputs.some((file) => file !== null);

    if (!hasPhoto) {
      alert("Please upload at least one photo.");
      return;
    }

    if (!locationCategory.trim()) {
      alert("Location is required.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Phone number is required.");
      return;
    }

    alert("Form submitted successfully!");
    // Perform actual form submission logic here
  };

  return (
    <div className="max-w-xl w-full text-start">
      {/* ... All your static content and buttons before inputs stay same ... */}

      {/* Controlled Inputs */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Super Builtup area sq ft</label>
        <input
          type="text"
          name="superBuiltUpArea"
          value={formData.superBuiltUpArea}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Super Builtup Area"
        />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Carpet Area sqft</label>
        <input
          type="text"
          name="carpetArea"
          value={formData.carpetArea}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Carpet Area"
        />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Maintenance (Monthly)</label>
        <input
          type="text"
          name="maintenance"
          value={formData.maintenance}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Maintenance"
        />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Total Floors</label>
        <input
          type="text"
          name="totalFloors"
          value={formData.totalFloors}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Total Floors"
        />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Floor No</label>
        <input
          type="text"
          name="floorNo"
          value={formData.floorNo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Floor No"
        />
      </div>

      {/* Facing Dropdown */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Facing</label>
        <select
          name="facing"
          value={formData.facing}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Facing</option>
          {[
            "East",
            "North",
            "North-East",
            "North-West",
            "South",
            "South-East",
            "South-West",
            "West",
          ].map((facing) => (
            <option key={facing} value={facing}>
              {facing}
            </option>
          ))}
        </select>
      </div>

      {/* Project Name */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Project Name</label>
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Project Name"
          maxLength={70}
        />
      </div>

      {/* Ad Title */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Ad title *</label>
        <input
          type="text"
          name="adTitle"
          value={formData.adTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Mention the key features"
          maxLength={70}
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Include condition, features, and reason for selling"
          rows="4"
          maxLength={4096}
        ></textarea>
      </div>

      {/* Location Category (Fixed) */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Location Category *</label>
        <select
          className="w-full border p-2 rounded"
          value={locationCategory}
          onChange={(e) => setLocationCategory(e.target.value)}
        >
          <option value="">Select a state</option>
          {[
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
          ].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="mb-5">
        <label className="block font-medium mb-1">Price *</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="₹"
        />
      </div>

      {/* Photo Upload */}
      <div className="mb-5">
        <label className="block font-semibold text-lg mb-2">
          UPLOAD UP TO 20 PHOTOS
        </label>
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={`border rounded flex items-center justify-center aspect-square ${
                index === 0 ? "border-black" : "border-gray-300"
              }`}
            >
              <label className="flex flex-col items-center justify-center cursor-pointer text-sm text-gray-600 font-bold">
                {index === 0 && <span>Add Photo</span>}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, index)}
                />
                {!fileInputs[index] && (
                  <span className="text-xs text-blue-500">Choose File</span>
                )}
                {fileInputs[index] && (
                  <span className="text-xs text-gray-500">
                    {fileInputs[index].name}
                  </span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Review Your Details */}
      <div className="mb-5">
        <h2 className="text-xl font-bold mb-3">REVIEW YOUR DETAILS</h2>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full bg-teal-700 text-white flex items-center justify-center text-2xl">
            {formData.name?.[0]?.toUpperCase() || "?"}
            <div className="absolute bottom-0 right-0 bg-white border rounded-full p-1 text-teal-700">
              <FaCamera size={12} />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter your name"
              maxLength={30}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter your phone number"
            maxLength={15}
          />
        </div>

        <div className="mb-5">
          <button
            className="w-full py-2 px-4 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

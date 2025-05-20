import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Form = () => {
  const [fileInputs, setFileInputs] = useState(Array(20).fill(null)); // Initialize an array to manage files

  const handleFileChange = (e, index) => {
    const files = [...fileInputs];
    files[index] = e.target.files[0]; // Store the selected file in the appropriate slot
    setFileInputs(files);
  };

  return (
    <div className="max-w-xl w-full text-start">
      <div className="pb-4 mb-6">
        <p className="text-lg font-semibold">SELECTED CATEGORY</p>
        <p className="text-sm text-gray-600 mt-1">
          Properties / For Sale: Houses & Apartments{" "}
          <button className="text-blue-600 underline font-medium ml-2">
            Change
          </button>
        </p>
      </div>

      <hr className="border-t border-gray-300 w-full my-4" />

      <div className="mb-5">
        <p className="font-medium mb-2">Type *</p>
        <div className="flex flex-wrap gap-3">
          <button className="border px-4 py-2 rounded">Flats / Apartments</button>
          <button className="border px-4 py-2 rounded">Independent / Builder Floors</button>
          <button className="border px-4 py-2 rounded">Farm House</button>
          <button className="border px-4 py-2 rounded">House & Villa</button>
        </div>
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">BHK</p>
        <div className="flex gap-3">
          {[1, 2, 3, 4, "4+"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">Bathrooms</p>
        <div className="flex gap-3">
          {[1, 2, 3, 4, "4+"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">Furnishing</p>
        <div className="flex gap-3">
          {["Furnished", "Semi-Furnished", "Unfurnished"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">Project Status</p>
        <div className="flex gap-3">
          {["New Launch", "Ready To Move", "Under Construction"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">Listed By</p>
        <div className="flex gap-3">
          {["Builder", "Dealer", "Owner"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Super Builtup area sq ft</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Super Builtup Area" />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Carpet Area sqft</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Carpet Area" />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Maintenance (Monthly)</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Maintenance" />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Total Floors</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Total Floors" />
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Floor No</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Floor No" />
      </div>

      <div className="mb-5">
        <p className="font-medium mb-2">Car Parking</p>
        <div className="flex gap-3">
          {["0", "1", "2", "3", "3+"].map((item) => (
            <button key={item} className="border px-4 py-2 rounded">{item}</button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Facing</label>
        <select className="w-full border p-2 rounded">
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

      <div className="mb-5">
        <label className="block font-medium mb-1">Project Name</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Enter Project Name" maxLength={70} />
        <div className="text-right text-sm text-gray-500">0 / 70</div>
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Ad title *</label>
        <input type="text" className="w-full border p-2 rounded" placeholder="Mention the key features" maxLength={70} />
        <div className="text-right text-sm text-gray-500">0 / 70</div>
      </div>

      <div className="mb-5">
        <label className="block font-medium mb-1">Description *</label>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Include condition, features, and reason for selling"
          rows="4"
          maxLength={4096}
        ></textarea>
        <div className="text-right text-sm text-gray-500">0 / 500</div>
      </div>

      <hr className="border-t border-gray-300 w-full my-4" />

      <div className="mb-5">
        <label className="block font-semibold text-lg mb-2">SET A PRICE</label>
        <label className="block font-medium mb-1">Price*</label>
        <input type="number" className="w-full border p-2 rounded" placeholder="₹" />
      </div>

      <hr className="border-t border-gray-300 w-full my-4" />

      <div className="mb-5">
        <label className="block font-semibold text-lg mb-2">UPLOAD UP TO 20 PHOTOS</label>
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={`border rounded flex items-center justify-center aspect-square ${
                index === 0 ? "border-black" : "border-gray-300"
              }`}
            >
              {index === 0 ? (
                <label className="flex flex-col items-center justify-center cursor-pointer text-sm text-gray-600 font-bold">
                  <span>Add Photo</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)} // Handle file change for the first input
                  />
                  {!fileInputs[index] && (
                    <span className="text-xs text-blue-500">Choose File</span>
                  )}
                  {fileInputs[index] && (
                    <span className="text-xs text-gray-500">{fileInputs[index].name}</span>
                  )}
                </label>
              ) : (
                <div className="text-gray-400 text-sm">Photo</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-300 w-full my-4" />

      <div className="mb-5">
        <h2 className="text-xl font-bold mb-3">REVIEW YOUR DETAILS</h2>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full bg-teal-700 text-white flex items-center justify-center text-2xl">
            f
            <div className="absolute bottom-0 right-0 bg-white border rounded-full p-1 text-teal-700">
              <FaCamera size={12} />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Enter your name" maxLength={30} defaultValue="future code" />
            <div className="text-right text-sm text-gray-500">11 / 30</div>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-full my-4" />

        <p className="font-medium mb-1">Let's verify your account</p>
        <p className="text-sm text-gray-600 mb-2">We will send you a confirmation code by SMS on the next step.</p>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Phone Number *</label>
          <input type="tel" className="w-full border p-2 rounded" placeholder="Enter your phone number" maxLength={15} />
        </div>

        <hr className="border-t border-gray-300 w-full my-4" />

        <div className="mb-5">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

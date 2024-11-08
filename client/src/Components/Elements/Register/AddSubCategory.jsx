import React from 'react'

const AddSubCategory = () => {
    return (
        <form className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl mb-4">Add a New Sub-Category</h2>
            {/* <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border rounded w-full"
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {indianStates.map((stateName, index) => (
            <option key={index} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div> */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Sub-Category Name"
                    className="p-2 border rounded w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="p-2 px-4 py-2 bg-blue-500 text-white rounded w-full"
            >
                Add Sub-Category
            </button>

        </form>
    )
}

export default AddSubCategory
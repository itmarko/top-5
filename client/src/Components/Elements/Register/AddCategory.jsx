import React from 'react'

const AddCategory = () => {
    return (
        <form className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl mb-4">Add a New Category</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Category Name"
                    className="p-2 border rounded w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="p-2 px-4 py-2 bg-blue-500 text-white rounded w-full"
            >
                Add Category
            </button>

        </form>
    );
}

export default AddCategory;

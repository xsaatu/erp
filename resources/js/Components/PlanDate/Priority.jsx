import React from 'react';

const PlanDate = ({ produk, priorities }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama Produk
            </th>
            {/* Add more columns as needed */}
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Loop through the sorted priorities */}
          {priorities.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* Display product name */}
                {item.product.name}
              </td>
              {/* Add more columns as needed */}
              <td className="px-6 py-4 whitespace-nowrap">
                {/* Display priority */}
                {item.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanDate;
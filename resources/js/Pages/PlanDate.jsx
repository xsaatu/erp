// resources/js/Pages/PlanDate.jsx

import React from 'react';

const PlanDate = ({ priorities }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prioritas
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama Produk
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tanggal Pesan
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tengat Waktu
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {priorities.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.priority}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.product.no}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.product.tanggal_pesan}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.product.tengat_waktu}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanDate;

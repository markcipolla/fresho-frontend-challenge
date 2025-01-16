import React from "react";

function App() {
  return (
    <table className="m-4" data-testid="example-data">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4 text-left border border-gray-200">Product</th>
          <th className="p-4 text-left border border-gray-200">Cost ($)</th>
          <th className="p-4 text-left border border-gray-200">Sell price ($)</th>
          <th className="p-4 text-left border border-gray-200">Sell price (%)</th>
        </tr>
      </thead>
      <tbody className="border-collapse">
        <tr>
          <td className="p-4 border border-gray-200">Fuji apples</td>
          <td className="p-4 text-right border border-gray-200">$0.99</td>
          <td className="p-4 text-right border border-gray-200">$1.16</td>
          <td className="p-4 text-right border border-gray-200">15%</td>
        </tr>
        <tr>
          <td className="p-4 border border-gray-200">Cavendish bananas</td>
          <td className="p-4 text-right border border-gray-200">$0.55</td>
          <td className="p-4 text-right border border-gray-200">$0.70</td>
          <td className="p-4 text-right border border-gray-200">21%</td>
        </tr>
        <tr>
          <td className="p-4 border border-gray-200">Navel oranges</td>
          <td className="p-4 text-right border border-gray-200">$0.75</td>
          <td className="p-4 text-right border border-gray-200">$0.80</td>
          <td className="p-4 text-right border border-gray-200">12%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;

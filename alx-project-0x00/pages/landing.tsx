import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>
      
      {/* Existing Card components */}
      <Card />
      
      {/* Button Components Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Button Variations</h2>
        
        {/* Small Buttons */}
        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">Small Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              title="Small Rounded SM"
              styles="text-sm px-3 py-1.5 bg-blue-500 text-white rounded-sm"
            />
            <Button
              title="Small Rounded MD"
              styles="text-sm px-3 py-1.5 bg-green-500 text-white rounded-md"
            />
            <Button
              title="Small Rounded Full"
              styles="text-sm px-3 py-1.5 bg-purple-500 text-white rounded-full"
            />
          </div>
        </section>

        {/* Medium Buttons */}
        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">Medium Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              title="Medium Rounded SM"
              styles="text-base px-4 py-2 bg-blue-600 text-white rounded-sm"
            />
            <Button
              title="Medium Rounded MD"
              styles="text-base px-4 py-2 bg-green-600 text-white rounded-md"
            />
            <Button
              title="Medium Rounded Full"
              styles="text-base px-4 py-2 bg-purple-600 text-white rounded-full"
            />
          </div>
        </section>

        {/* Large Buttons */}
        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">Large Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              title="Large Rounded SM"
              styles="text-lg px-6 py-3 bg-blue-700 text-white rounded-sm"
            />
            <Button
              title="Large Rounded MD"
              styles="text-lg px-6 py-3 bg-green-700 text-white rounded-md"
            />
            <Button
              title="Large Rounded Full"
              styles="text-lg px-6 py-3 bg-purple-700 text-white rounded-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
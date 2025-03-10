import React from "react";
import { GripController } from "../components";

const TextCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="bg-gray-100 p-6 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Beautiful Typography</h2>
      <p className="text-gray-600">Discover the art of words</p>
    </div>
    <div className="p-6">
      <p className="text-gray-600 leading-relaxed mb-4">
        Typography is the art and technique of arranging type to make written language legible, readable, and appealing
        when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing,
        and letter-spacing.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Good typography enhances readability, establishes hierarchy, and creates visual harmony in design.
      </p>
      <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
        Learn More
      </button>
    </div>
  </div>
);

const SingleImageCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="relative">
      <img
        src="https://picsum.photos/800/600?random=1"
        alt="Random Beautiful Image"
        className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex items-end">
        <div className="p-6 w-full">
          <h2 className="text-2xl font-bold mb-2 text-white truncate">
            Random Beauty with a Very Long Title That Should Truncate
          </h2>
          <p className="text-gray-200 line-clamp-2">
            Every refresh brings a new surprise. This is a longer description that might need to be truncated if it gets
            too long. We'll show only two lines and add an ellipsis at the end.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TwoImagesCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Dynamic Gallery</h2>
      <div className="flex flex-wrap gap-4">
        <div className="relative group flex-1 min-w-[250px]">
          <img
            src="https://picsum.photos/600/400?random=2"
            alt="Random Scene 1"
            className="w-full h-[200px] object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">
              Discover More
            </span>
          </div>
        </div>
        <div className="relative group flex-1 min-w-[250px]">
          <img
            src="https://picsum.photos/600/400?random=3"
            alt="Random Scene 2"
            className="w-full h-[200px] object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">
              Explore More
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Responsive Card Examples</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Text Card</h2>
            <GripController name="Typography Card" minWidth={300} maxWidth={800}>
              <TextCard />
            </GripController>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Single Image Card</h2>
            <GripController name="Image Card" minWidth={280} maxWidth={600}>
              <SingleImageCard />
            </GripController>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Two Images Card</h2>
            <GripController name="Gallery Card" minWidth={300} maxWidth={800} controlPosition="top-right">
              <TwoImagesCard />
            </GripController>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;

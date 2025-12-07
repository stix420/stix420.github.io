import { Component } from "solid-js";

const About: Component = () => {
  return (
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-8">
            About{" "}
            <span class="bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent">
              Bec
            </span>
          </h2>
          <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="text-left">
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                  Your Personal Beauty Expert
                </h3>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hi, I'm Bec! With over 8 years of experience in the beauty
                  industry, I'm passionate about helping you discover your
                  unique style and feel confident in your own skin.
                </p>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  I specialize in personalized beauty consultations, makeup
                  artistry, and style guidance. Whether you're preparing for a
                  special event or want to refresh your everyday look, I'm here
                  to help you shine.
                </p>
                <div class="flex items-center space-x-4">
                  <div class="bg-pink-100 p-3 rounded-full">
                    <svg
                      class="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">
                    8+ Years Experience
                  </span>
                </div>
              </div>
              <div class="relative">
                <div class="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        class="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="text-gray-600">Professional Beauty Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

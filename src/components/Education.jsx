import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="bg-ghibli-sunset flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center lg:text-left"
    >
      <div class="max-w-2xl mx-auto my-12 bg-ghibli-grass">
        <h2 class="text-3xl font-ghibliHand text-center mb-8">Education</h2>
        <ol class="relative border-l-4 border-ghibli-fog pl-6">
          <li class="mb-10">
            <span class="absolute -left-3 top-1 w-6 h-6 bg-ghibli-leaf rounded-full border-2 border-white"></span>
            <h3 class="text-xl font-semibold text-ghibli-ink">
              Bachelor of Science in CSIT
            </h3>
            <time class="text-sm text-ghibli-fog">2022 - Present</time>
            <p class="text-ghibli-ink mt-2">
              Tribhuvan University, Bhaktapur Multiple Campus — Exploring
              student politics and chasing assignment deadlines.
            </p>
          </li>
          <li class="mb-10">
            <span class="absolute -left-3 top-1 w-6 h-6 bg-ghibli-sunset rounded-full border-2 border-white"></span>
            <h3 class="text-xl font-semibold text-ghibli-ink">
              High School (Science)
            </h3>
            <time class="text-sm text-ghibli-fog">2019 - 2021</time>
            <p class="text-ghibli-ink mt-2">
              St. Xavier’s College — Survived the COVID Pandemic.
            </p>
          </li>
          <li class="mb-10">
            <span class="absolute -left-3 top-1 w-6 h-6 bg-ghibli-sunset rounded-full border-2 border-white"></span>
            <h3 class="text-xl font-semibold text-ghibli-ink">
              Secondary Education
            </h3>
            <time class="text-sm text-ghibli-fog">2006-2019</time>
            <p class="text-ghibli-ink mt-2">
              Dibya Deep Jyoti English Secondary School —Learned alphabets and
              how to balance a trial balance.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;

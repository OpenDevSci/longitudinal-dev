<template>
  <!-- Hero Section -->
  <section>
    <div class="bg-#020420">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div class="relative overflow-hidden rounded-lg lg:h-96">
          <div class="absolute inset-0">
            <img
              src="/images/opensource_logos.png"
              alt="Open source tools"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
          <div
            class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
          >
            <div>
              <h2 class="text-xl font-bold text-white">Open Source Tools</h2>
              <p class="mt-1 text-sm text-gray-100">
                Tools to help longitudinal data science research.
              </p>
            </div>
            <a
              href="tools/toc"
              class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
              >View tools</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Introduction Section -->
  <section id="tools" class="bg-white text-gray-800 py-16 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center">
        What are Open Source Tools?
      </h2>
      <p class="mt-6 text-lg leading-8 text-center">
        Open source tools provide the foundation for scalable, reproducible
        research, offering essential functionalities for data management,
        analysis, and visualization.
      </p>

      <!-- Carousel Container with Scroll Buttons -->
      <div class="relative mt-10">
        <!-- Left Arrow -->
        <button class="scroll-button left-0" @click="scrollLeft">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Carousel -->
        <div ref="carousel" class="carousel-container">
          <!-- Tool 1 -->
          <a href="#programming-languages" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🗂️ Programming Languages
              </h3>
              <p class="text-lg text-gray-700">
                Flexible tools for managing, analyzing, and modeling complex
                datasets at scale.
              </p>
            </div>
          </a>

          <!-- Tool 2: IDEs -->
          <a href="#ides" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                💻 Integrated Development Environments (IDEs)
              </h3>
              <p class="text-lg text-gray-700">
                Powerful environments for developing and testing data science
                code.
              </p>
            </div>
          </a>

          <!-- Tool 3: Version Control -->
          <a href="#version-control" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🛠️ Version Control (Git/GitHub)
              </h3>
              <p class="text-lg text-gray-700">
                Efficient formats designed to handle large-scale datasets with
                high performance.
              </p>
            </div>
          </a>

          <!-- Tool 4 -->
          <a href="#data-formats" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🗂️ Data Formats (Apache Parquet and Arrow)
              </h3>
              <p class="text-lg text-gray-700">
                Efficient formats designed to handle large-scale datasets with
                high performance. Manage code and collaborate seamlessly on
                longitudinal data projects.
              </p>
            </div>
          </a>

          <!-- Tool 5: Notebooks & Literate Programming -->
          <a href="#notebooks" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                📓 Notebooks & Literate Programming
              </h3>
              <p class="text-lg text-gray-700">
                Combine code, narrative, and analysis in a single document to
                support reproducible research workflows.
              </p>
            </div>
          </a>

          <!-- Tool 6: Databases -->
          <a href="#databases" class="feature block">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">🗄️ Databases</h3>
              <p class="text-lg text-gray-700">
                Robust and scalable databases for managing large longitudinal
                datasets.
              </p>
            </div>
          </a>
        </div>

        <!-- Right Arrow -->
        <button class="scroll-button right-0" @click="scrollRight">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- Programming Languages Section -->
  <section id="programming-languages">
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"
            >
              Programming Languages in Data Science
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Programming languages are essential tools in data science,
              offering the capabilities to manage, analyze, and model complex
              datasets. From exploratory analysis to advanced statistical
              modeling, programming languages allow for scalable and
              reproducible workflows, making them indispensable in both small
              and large-scale research projects. In longitudinal data science,
              where repeated measurements over time add layers of complexity,
              these languages provide specialized libraries and frameworks that
              support time-series analysis, mixed-effects modeling, and data
              visualization.
            </p>
            <p
              class="relative mt-4 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Whether leveraging the statistical rigor of certain languages, the
              versatility of general-purpose programming, or the speed of modern
              tools, data scientists have a wide array of options depending on
              the unique requirements of their research. By integrating these
              programming languages, researchers can tailor their approach to
              efficiently handle longitudinal datasets, ensuring accurate,
              insightful, and reproducible results.
            </p>
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <a href="https://www.python.org/" target="_blank">
                  <img
                    src="public/images/python-logo.svg"
                    alt="Python Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <a href="https://www.r-project.org/" target="_blank">
                  <img
                    src="public/images/r-logo.png"
                    alt="R Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://julialang.org/" target="_blank">
                  <img
                    src="public/images/julia-logo.svg"
                    alt="Julia Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <a href="https://www.mysql.com/" target="_blank">
                  <img
                    src="public/images/sql-logo.svg"
                    alt="SQL Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://isocpp.org/" target="_blank">
                  <img
                    src="public/images/cpp-logo.svg"
                    alt="C++ Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      class="inline-block px-6 py-3 text-[#00DC82] font-medium border border-[#00DC82] rounded-md shadow hover:bg-[#00DC82] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00DC82] focus:ring-offset-2 transition"
    >
      Learn More
    </a>
  </section>

  <!-- Integrated Development Environments (IDEs) Section -->
  <section id="ides" class="bg-white">
    <div class="py-24 sm:py-32">
      <div
        class="w-full max-w-xl lg:shrink-0 xl:max-w-3xl ml-auto text-right pr-10"
      >
        <h1 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
          Integrated Development Environments (IDEs)
        </h1>
        <p
          class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
        >
          Integrated Development Environments (IDEs) play a vital role in data
          science workflows by providing comprehensive tools for writing,
          testing, and debugging code. In longitudinal data science, IDEs
          streamline complex analyses, facilitate reproducibility, and offer
          integrations with version control, package management, and advanced
          debugging capabilities. IDEs such as RStudio, VS Code, and JupyterLab
          allow data scientists to efficiently handle large datasets, implement
          statistical models, and collaborate effectively within a unified
          interface.
        </p>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
        >
          <div class="bg-white/5 p-8 sm:p-10">
            <a href="https://code.visualstudio.com/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/vscodelogo.png"
                alt="VS Code Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://www.rstudio.com/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/rstudiologo.svg"
                alt="RStudio Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://neovim.io/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/neovimlogo.svg"
                alt="Neovim Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://docs.conda.io/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/condalogo.svg"
                alt="Conda Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://www.gnu.org/software/emacs/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/emacslogo.svg"
                alt="Emacs Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://zed.dev/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/zed-logo.png"
                alt="Zed IDE Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      class="inline-block px-6 py-3 text-white font-medium border border-[#020420] rounded-md shadow bg-[#00DC82] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#020420] focus:ring-offset-2 transition"
    >
      Learn More
    </a>
  </section>
  <!-- Version Control Section -->
  <section id="version-control">
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"
            >
              Version Control
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Version control systems like Git and platforms such as GitHub are
              essential for managing code and data workflows in data science.
              They allow teams to track changes, collaborate efficiently, and
              maintain a clear history of project development. In longitudinal
              data science, where analyses often span across multiple time
              points and involve evolving datasets, version control ensures that
              data pipelines, statistical models, and scripts remain organized,
              reproducible, and consistent over time. These tools also
              facilitate collaboration among researchers by enabling parallel
              work and seamless merging of code.
            </p>
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <a href="https://git-scm.com/" target="_blank">
                  <img
                    src="public/images/git-logo.svg"
                    alt="Git Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <a href="https://github.com/" target="_blank">
                  <img
                    src="public/images/github-logo.webp"
                    alt="GitHub Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://about.gitlab.com/" target="_blank">
                  <img
                    src="public/images/gitlab_logo.svg"
                    alt="GitLab Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>

            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <a href="https://www.gitkraken.com/" target="_blank">
                  <img
                    src="public/images/gitkraken-logo.svg"
                    alt="GitKraken Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://gitea.io/en-us/" target="_blank">
                  <img
                    src="public/images/gitea-logo.svg"
                    alt="Gitea Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      class="inline-block px-6 py-3 text-[#00DC82] font-medium border border-[#00DC82] rounded-md shadow hover:bg-[#00DC82] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00DC82] focus:ring-offset-2 transition"
    >
      Learn More
    </a>
  </section>

  <!-- Data Formats Section -->
  <section id="data-formats">
    <div class="bg-white py-24 sm:py-32">
      <div
        class="w-full max-w-xl lg:shrink-0 xl:max-w-3xl ml-auto text-right pr-10"
      >
        <h1 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
          Data Formats
        </h1>
        <p
          class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
        >
          Efficient and scalable data formats are crucial in handling the large
          datasets typical in longitudinal data science. Formats like Apache
          Parquet and Apache Arrow are optimized for high-performance analytics,
          enabling faster read/write operations and reducing storage overhead.
          These formats are especially valuable for managing multi-dimensional
          data across numerous time points, facilitating smooth data integration
          and analysis in distributed environments.
        </p>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
        >
          <div class="bg-white/5 p-8 sm:p-10">
            <a href="https://www.markdownguide.org/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/markdown-logo.png"
                alt="Markdown Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a
              href="https://en.wikipedia.org/wiki/Comma-separated_values"
              target="_blank"
            >
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/csv-logo.jpeg"
                alt="CSV Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://parquet.apache.org/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/parquet-logo.svg"
                alt="Apache Parquet Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://www.json.org/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/json-logo.svg"
                alt="JSON Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://arrow.apache.org/" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/arrow-logo.png"
                alt="Apache Arrow Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <a href="https://en.wikipedia.org/wiki/XML" target="_blank">
              <img
                class="max-h-12 w-full object-contain"
                src="public/images/xml-logo.webp"
                alt="xml Logo"
                width="158"
                height="48"
              />
            </a>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="inline-block px-6 py-3 text-white font-medium border border-[#020420] rounded-md shadow bg-[#00DC82] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#020420] focus:ring-offset-2 transition"
      >
        Learn More
      </a>
    </div>
  </section>
  <!-- Notebooks & Literate Programming Section -->
  <section id="notebooks">
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"
            >
              Notebooks & Literate Programming
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Interactive notebooks, such as Jupyter and R Markdown, serve as
              powerful tools for literate programming and exploratory data
              analysis. By seamlessly blending code, results, and narrative
              within a single document, these tools simplify tracking analytical
              processes and sharing insights. In longitudinal data science,
              where iterative analyses and continuous data updates are common,
              notebooks provide an ideal platform for maintaining transparency
              and facilitating collaboration through a clear, step-by-step
              workflow. The integration of documentation, code, and output
              within one cohesive narrative is a hallmark of literate
              programming, ensuring that research workflows remain both
              transparent and reproducible. For longitudinal studies that span
              years, tools like Jupyter, R Markdown, and Emacs Org-mode prove
              invaluable in ensuring that data processing steps, model
              assumptions, and findings are meticulously documented, enabling
              future researchers and collaborators to easily understand and
              replicate the analysis.
            </p>
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <a href="https://quarto.org/" target="_blank">
                  <img
                    src="public/images/quarto-logo.png"
                    alt="Quarto Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <a href="https://jupyter.org/" target="_blank">
                  <img
                    src="public/images/jupyter-logo.svg"
                    alt="Jupyter Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://observablehq.com/" target="_blank">
                  <img
                    src="public/images/observable-logo.webp"
                    alt="Observable HQ Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      class="inline-block px-6 py-3 text-[#00DC82] font-medium border border-[#00DC82] rounded-md shadow hover:bg-[#00DC82] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00DC82] focus:ring-offset-2 transition"
    >
      Learn More
    </a>
  </section>

  <!-- Databases Section -->
  <section id="databases">
    <div class="overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"
            >
              Databases
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Robust and scalable databases are key to managing the vast amounts
              of data generated in longitudinal studies. Systems like
              PostgreSQL, MongoDB, and specialized time-series databases are
              designed to store and query large datasets efficiently. For
              longitudinal data science, these databases are essential in
              organizing and retrieving data across multiple time points,
              facilitating complex queries, and supporting real-time analytics
              and integration with data processing pipelines.
            </p>
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <a href="https://www.postgresql.org/" target="_blank">
                  <img
                    src="public/images/postgresql-logo.svg"
                    alt="PostgreSQL Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <a href="https://www.mysql.com/" target="_blank">
                  <img
                    src="public/images/mysql-logo.svg"
                    alt="MySQL Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://duckdb.org/" target="_blank">
                  <img
                    src="public/images/duckdb-logo.svg"
                    alt="DuckDB Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src="public/images/mongodb-logo.svg"
                    alt="MongoDB Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <a href="https://redis.io/" target="_blank">
                  <img
                    src="public/images/redis-logo.svg"
                    alt="Redis Logo"
                    class="aspect-[2/3] w-full h-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  />
                </a>
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="inline-block px-6 py-3 text-white font-medium border border-[#020420] rounded-md shadow bg-[#00DC82] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#020420] focus:ring-offset-2 transition"
      >
        Learn More
      </a>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/vue/20/solid";

// Reference to the carousel container
const carousel = ref(null);

// Function to scroll the carousel left
const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -600, behavior: "smooth" });
  }
};

// Function to scroll the carousel right
const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 600, behavior: "smooth" });
  }
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  scrollbar-width: none; /* Hide scrollbar */
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar */
}

.feature {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  min-width: 20rem; /* Fixed width for consistent display */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4); /* Translucent background */
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.scroll-button:hover {
  background-color: rgba(0, 0, 0, 0.6); /* Darker on hover */
}

.left-0 {
  left: 0.5rem;
}

.right-0 {
  right: 0.5rem;
}

.feature-content h3,
.feature-content p {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #555;
}

.learn-more {
  color: #0073e6;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.learn-more:hover {
  color: #005bb5;
}
</style>

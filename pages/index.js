import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";


export default function Home() {
  return (
      <Layout>
        <Head>
          <title>New Generation High School</title>
          <meta name="description" content="Welcome to New Generation High School Portal" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Login/Sign Up</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Google Classroom</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">eLibrary</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Calgary Transit</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">News</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 sm:w-1/3 p-4">
              <div className="flex items-center justify-center relative">
                <div className="px-3 py-3 relative z-10 w-full border-4 border-gray-200 bg-white text-center mixed-case">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Club</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img className="object-cover object-center w-full h-full" src="/SAIT.jpg" alt="SAIT" />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Programs</h2>
                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">School Survey</h2>
                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Professors</h2>
                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </Layout>
  )
}

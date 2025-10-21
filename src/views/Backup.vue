<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";

function clickMenu() {
  console.log("di klik");
}
</script>

<template>
  <DefaultLayout>
    <template #default>
      <div
        class="h-full w-full bg-gradient-to-bl from-purple-400 to-purple-50 py-10 md:px-20 px-10"
      >
        <div class="flex flex-row sm:justify-start justify-between">
          <div class="text-2xl text-gray-800 font-medium">Vue Tailwind</div>
          <div
            class="w-8 items-center sm:hidden block hover:cursor-pointer"
            @click="clickMenu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / More_Grid_Big">
                  <g id="Vector">
                    <path
                      d="M17 18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5C17.4477 5 17 5.44772 17 6Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="mt-20 md:flex md:flex-row md:justify-between">
          <div class="md:w-xl">
            <div class="text-3xl md:text-4xl font-bold text-gray-800">
              Lorem ipsum, dolor sit amet
            </div>
            <div class="text-2xl md:text-3xl font-medium mt-2 text-gray-800">
              Lorem ipsum, dolor sit amet
            </div>
            <div class="mt-2 text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              inventore porro nam impedit, perspiciatis ducimus vero!
              Distinctio, corrupti repudiandae dolorem voluptatum non aut
              provident, atque ut, eius libero maiores vel.
            </div>
          </div>
          <div class="h-50 w-50 bg-teal-200 sm:mt-0 mt-5 rounded-2xl"></div>
        </div>
        <!-- <div class="absolute top-4 left-4 bg-white p-2 rounded shadow">
          Card 1
        </div> -->
      </div>

      <!-- ABOUT -->
      <div class="mt-15 md:px-20 px-10">
        <div class="text-3xl text-gray-800 font-bold mb-10">Tentang Kami</div>
        <img
          src="https://squadmanager.s3-ap-southeast-1.amazonaws.com/assets/apps-mazabuta/employee/20250526234613.jpg"
          alt=""
          srcset=""
          width="100"
          height="100"
          class="float-left mr-5"
        />
        <p class="mt-2 text-gray-500 lg:w-190 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          incidunt voluptates quaerat beatae, at cum vero sunt libero explicabo
          voluptatum fuga nobis expedita culpa quas laudantium soluta omnis amet
          sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti suscipit autem recusandae accusamus totam maiores, delectus
          temporibus reprehenderit quas animi, reiciendis eveniet magnam illum
          corporis harum velit, unde porro nihil.
        </p>
      </div>

      <!-- SERVICES -->
      <div class="mt-15 w-full md:px-20 px-10">
        <div class="bg-white shadow-2xl h-auto rounded-2xl">
          <div>
            <div class="text-3xl text-gray-800 font-medium pt-10 px-10">
              Layanan Kami
            </div>
          </div>
          <div class="grid md:grid-flow-col grid-flow-row p-10 w-full h-full">
            <div
              class="md:max-h-full h-80 bg-red-50 border border-red-500 m-1 rounded-2xl"
            ></div>
            <div
              class="md:max-h-full h-80 bg-red-50 border border-red-500 m-1 rounded-2xl"
            ></div>
            <div
              class="md:max-h-full h-80 bg-red-50 border border-red-500 m-1 rounded-2xl"
            ></div>
          </div>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<style scoped></style>

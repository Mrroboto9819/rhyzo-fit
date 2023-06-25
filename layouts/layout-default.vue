<template>
    <div>
        <div :class="`${navISOnTop || navIsOpen ? `bg-white shadow-md p-1 grid grid-cols-12 w-full` : `p-1 grid grid-cols-12 w-full`} z-50 fixed duration-700 disable-selection`" id="navbar">
            <!-- <p>{{ navISOnTop }}</p> -->
            <div class="p-2 col-span-10 flex justify-start items-center align-middle">
                <img
                    v-if="!navISOnTop"
                    @click="() => this.$router.push({ name: 'index', params: {} })" 
                    :class="`${navISOnTop || navIsOpen ? 'text-[#0C102D]' : 'text-white'}`"
                    class="cursor-pointer font-medium text-base sm:text-3xl w-36"
                    src="../static/logo_whit.png"    
                />
                <img
                    v-else
                    @click="() => this.$router.push({ name: 'index', params: {} })" 
                    :class="`${navISOnTop || navIsOpen ? 'text-[#0C102D]' : 'text-white'}`"
                    class="cursor-pointer font-medium text-base sm:text-3xl w-36"
                    src="../static/logo.png"    
                />
            </div>
            <div class="hidden lg:block col-span-2 pl-10 pr-10">
                <ul class="flex justify-between align-middle items-center p-2">
                    <li @click="() => redirect('index')" :class="`${navISOnTop || navIsOpen ? 'text-[#0C102D] hover:text-[#fff] hover:bg-[#322d2a]' : 'text-white hover:text-[#fff] hover:bg-[#161E54]'}`" class="rounded-sm ease-in duration-300 cursor-pointer p-1 text-gray-700 font-normal">
                        <p class="text-base">Home</p>
                    </li>
                    <li  @click="() => redirect('About')" :class="`${navISOnTop || navIsOpen ? 'text-[#0C102D] hover:text-[#fff] hover:bg-[#322d2a]' : 'text-white hover:text-[#fff] hover:bg-[#161E54]'}`" class="rounded-sm ease-in duration-300 cursor-pointer p-1   text-gray-700 font-normal">
                        <p class="text-base">About us</p>
                    </li>
                </ul>
            </div>
            <div @click="navIsOpen = !navIsOpen" class="flex lg:hidden col-span-2 justify-end items-center align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" v-if="!navIsOpen" :class="`${navISOnTop ? 'text-[#0C102D]' : 'text-white'}`" class="bi bi-list p-3 w-12 cursor-pointer" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <!-- <img v-if="!navIsOpen" :class="`${navISOnTop ? 'text-[#0C102D]' : 'text-[#0C102D]'}`" class="p-3 w-12 cursor-pointer" src="../static/menu.svg" alt="menu icon" /> -->
                <img v-else :class="`${navISOnTop || navIsOpen ? 'text-[#0C102D]' : 'text-white'}`" class="p-3 w-10 cursor-pointer" src="../static/close.svg" alt="menu icon" />            
            </div>
            <div :class="`${navIsOpen ? 'flex' : 'hidden' } lg:hidden`" style="z-index: 1000;">
                <div class="w-full h-full fixed flex justify-end" style="background-color: rgba(0,0,0,0.3);">
                    <div class="bg-gray-50 w-full sm:w-3/6 h-full">
                        <ul class="">
                            <li class="p-3">
                                <div @click="() => redirect('index')" class="ease-in duration-300 p-3 hover:bg-[#322d2a] hover:text-[#fff] text-gray-700 font-normal">
                                    <p class="text-base">Home</p>
                                </div>
                            </li>
                            <li class="p-3">
                                <div @click="() => redirect('About')" class="ease-in duration-300 p-3 hover:bg-[#322d2a] hover:text-[#fff] text-gray-700 font-normal">
                                    <p class="text-base">About us</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <slot />
        </div>
        <div class="p-4 flex justify-center items-baseline align-bottom w-full bg-[rgb(45,41,37)]">
            <p class="text-white text-xs">© 2023 RHYZO FIT. All Rights Reserved.</p>
            <!-- <p class="text-xs">© 2023 Avocado's Network. All Rights Reserved. Developed and deploy with 🥑 by <a class="text-gray-400 hover:text-black" href="https://github.com/Mrroboto9819/">@Mrroboto9819</a>, <a class="text-gray-400 hover:text-black" href="https://github.com/NaH-22">@NaH-22</a> and <a class="text-gray-400 hover:text-black" href="https://github.com/john024x">@John024x</a></p> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data(){
        return{
            navIsOpen: false,
            navISOnTop: false,
            // currentPath: '/'
        }
    },
    methods: {
        redirect (pageName, params) {
            if (params == undefined) {
                params = {}
            }
            this.$router.push({ name: pageName, params: params })
            this.navIsOpen = false
        }
    },
    mounted () {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                this.navISOnTop = true;
            } else {
                this.navISOnTop = false;
            }
        })
        
    }
}
</script>
<!-- #88E0EF -->
<!-- #161E54 -->
<!-- #DB3951 -->
<!-- #FF5151 -->


<!-- #2BD6F3 -->
<!-- #A3F2FF -->
<!-- #0C102D -->
<!-- #1227B5 -->
<!-- #FF0000 -->
<!-- #FF8F8F -->
<!-- #941E30 -->
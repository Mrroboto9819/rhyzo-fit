<template lang="pug">
// head
    link(rel="icon" type="image/png" href="../static/favicon.png" sizes="96x96")
    link(rel="apple-touch-icon" type="image/png" href="../static/favicon.png" sizes="152x152")
    meta(property="og:title" content="RHYZO FIT")
    meta(property="og:image" content="https://cdcd-189-217-208-250.ngrok-free.app/_nuxt/static/logo_whit.png")
    meta(property="og:description" content="Taste Visctory, Fuel Greatness")
    meta(property="keywords" content="webapp, RYZO, ryzo, fit, FIT, exercice")

div(class="backgrouns-image")
    div(class="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center align-middle items-center")
        p(class="text-sm md:text-4xl text-white font-bold drop-shadow-lg shadow-white")
            |TASTE VICTORY, FUEL GREATNESS

main(class="p-1 md:p-7 w-5/6 mr-auto ml-auto")
    p(class="font-bold text-base md:text-3xl text-center pb-5" style="border-bottom: 1px solid #322d2a")
        |OUR PRODUCTS

    //- div(class="col-span-12 md:col-span-6 p-0 md:p-2 lg:p-6")
    //-     div(class="shadow-md shadow-slate-200 grid grid-cols-12 hover:shadow-[#161E54]/50 hover:shadow-lg hover:ease-in duration-500")
    //-         div(class="p-4 md:p-10 col-span-12 md:col-span-6")
    //-             p(class="font-bold text-black text-center text-sm md:text-lg p-3 pt-6 pb-5 col-span-12 h-1/6") PROT SPORT BLUE
    //-             p(class="text-justify text-xs h-3/6 p-5")
    //-                 |La mejor combinacion de proteinas para permitirte rendir mas en los mejores momentos hecha por los mejores ingenieros y nutreologos

    //-             div(class="w-full flex justify-center align-middle items-center h-2/6")
    //-                 a(href="https://www.amazon.com.mx/" target="_blank" class="bg-[#161E54] rounded-sm p-2 text-xs text-white") Ver en la tienda


    //-         div(class="col-span-12 md:col-span-6 flex justify-center align-middle items-center p-4")
    //-             img(src="../static/producto1.jpg" alt="product 1" class="w-64")

    //- div(class="col-span-12 md:col-span-6 p-0 md:p-2 lg:p-6")
    //-     div(class="shadow-md shadow-slate-200 grid grid-cols-12 hover:shadow-[#161E54]/50 hover:shadow-lg hover:ease-in duration-500")
    //-         div(class="p-4 md:p-10 col-span-12 md:col-span-6")
    //-             p(class="font-bold text-black text-center text-sm md:text-lg p-3 pt-6 pb-5 col-span-12 h-1/6") PROT SPORT RED
    //-             p(class="text-justify text-xs h-3/6 p-5")
    //-                 |La mejor combinacion de proteinas para permitirte rendir mas en los mejores momentos hecha por los mejores ingenieros y nutreologos

    //-             div(class="w-full flex justify-center align-middle items-center h-2/6")
    //-                 a(href="https://www.amazon.com.mx/" target="_blank" class="bg-[#161E54] rounded-sm p-2 text-xs text-white") Ver en la tienda


    //-         div(class="col-span-12 md:col-span-6 flex justify-center align-middle items-center p-4")
    //-             img(src="../static/producto2.jpg" alt="product 2" class="w-64")

    div(class="col-span-12 md:col-span-6 p-0 md:p-2 lg:p-6")
        div(class="shadow-md shadow-slate-200 grid grid-cols-12 hover:shadow-[#161E54]/50 hover:shadow-lg hover:ease-in duration-500")
            div(class="p-4 md:p-10 col-span-12 md:col-span-6")
                p(class="font-bold text-black text-center text-sm md:text-lg p-3 pt-6 pb-5 col-span-12 h-1/6") PROT SPORT MORA AZUL
                p(class="text-justify text-xs h-3/6 p-5")
                    |La mejor combinacion de proteinas para permitirte rendir mas en los mejores momentos hecha por los mejores ingenieros y nutreologos

                div(class="w-full flex justify-center align-middle items-center h-2/6")
                    a(href="https://www.amazon.com.mx/" target="_blank" class="bg-[#161E54] rounded-sm p-2 text-xs text-white hover:scale-105 duration-300") Ver en la tienda


            div(class="col-span-12 md:col-span-6 flex justify-center align-middle items-center p-4")
                img(src="../static/producto3.jpg" alt="product 3" class="w-64")

</template>

<script>
definePageMeta({
    layout: 'layout-default',
})

export default {
    name: 'index',
    setup () {
        useHead({
            title: "RHYZO FIT | HOME",
            meta: [{
                name: 'Taste Visctory, Fuel Greatness',
                content: 'Taste Visctory, Fuel Greatness'
            }]
        })
    }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.backgrouns-image {
    width: 100%;
    height: 80vh;
    background-image: url(../static/background.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
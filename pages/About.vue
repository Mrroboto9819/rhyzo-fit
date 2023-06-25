<template lang="pug">
//  q
    link(rel="icon" type="image/png" href="../static/favicon.png" sizes="96x96")
    link(rel="apple-touch-icon" type="image/png" href="../static/favicon.png" sizes="152x152")
    meta(property="og:title" content="RHYZO FIT")
    meta(property="og:image" content="../static/logo.png")
    meta(property="og:description" content="Taste Visctory, Fuel Greatness")
    meta(property="keywords" content="webapp, RYZO, ryzo, fit, FIT, exercice")

div(class="backgrouns-image__us")
    div(class="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center align-middle items-center")
        img(src="../static/logo_whit.png")



main(class="p-1 md:p-7 w-5/6 mr-auto ml-auto")
    p(class="font-bold text-3xl text-center pb-5" style="border-bottom: 1px solid #322d2a")
        |NOSOTROS

    p(class="text-sm text-justify p-3 md:p-14")
        |Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum mollitia, enim quisquam placeat rerum in voluptatibus, unde odit temporibus soluta facilis officiis voluptas hic illo iure dicta atque labore distinctio corporis animi accusamus id! Reiciendis itaque et aspernatur, ut quas dolores sapiente dignissimos illum fugiat voluptate beatae quae vel laboriosam unde! Mollitia molestias ea, quaerat dignissimos accusantium dicta error consequuntur soluta doloribus vel, magni a. Quisquam voluptates eaque, adipisci eum provident repellendus blanditiis modi laboriosam. Assumenda, voluptatibus! Iusto hic, consequuntur exercitationem voluptatem explicabo totam.
    
    div(class="grid grid-cols-12")
        div(class="col-span-12 md:col-span-6 p-1 md:p-6")
            div(class="shadow-md hover:shadow-[#161E54]/50 hover:shadow-md hover:ease-in duration-500")
                p(class="font-bold text-black text-center text-sm md:text-lg p-3") Mision
                div(class="p-4 md:p-10")
                    p(class="text-justify text-xs md:text-sm")
                        |Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        div(class="col-span-12 md:col-span-6 p-1 md:p-6")
            div(class="shadow-md hover:shadow-[#161E54]/50 hover:shadow-md hover:ease-in duration-500")
                p(class="font-bold text-black text-center text-sm md:text-lg p-3") Vision
                div(class="p-4 md:p-10")
                    p(class="text-justify text-xs md:text-sm")
                        |Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
    //- div(class="col-span-12 md:col-span-6 p-6")
    //-     div(class="shadow-md shadow-slate-200")
    //-         p(class="font-bold text-black text-center text-sm md:text-lg p-3") Mision

    //- div(class="col-span-12 md:col-span-6 p-6")
    //-     div(class="shadow-md shadow-slate-200")
    //-         p(class="font-bold text-black text-center text-sm md:text-lg p-3") Vision
    //-         div(class="p-4 md:p-10")
    //-             p(class="text-justify text-xs md:text-sm")
    //-                 |Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</template>
    
<script>
definePageMeta({
    layout: 'layout-default'
})

export default {
    name: 'About',
    setup () {
        useHead({
            title: "RHYZO FIT | ABOUTUS",
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
.backgrouns-image__us {
    width: 100%;
    height: 80vh;
    background-image: url(../static/background_about_us.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

</style>
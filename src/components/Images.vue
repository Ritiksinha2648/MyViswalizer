<template>
   
    <div class="Image-section mt-5">
        <div class="container">
            <h2 class="pb-2">Don't have a picture? Try our demo rooms instead</h2>
            <div class="row">
                <div class="col-md-4 mt-4">
<router-link to="/GardenView">


                    <div class="wrapper">


                        <div class="image">

                            <img src="../assets/garden.jpeg">
                            <div class="content">
                                <h3>Garden</h3>
                            </div>


                        </div>
                    </div>
                </router-link>
                </div>

                <div class="col-md-4 mt-4">

                    <router-link to="/WallPanel">

                        <div class="wrapper">

                            <div class="image">

                                <img src="../assets/vacantroom.jpeg">

                                <div class="content">

                                    <h3>Vacant Room</h3>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>


                <div class="col-md-4 mt-4">
                    <router-link to="/LawnView">
                        <div class="wrapper">

                            <div class="image">

                                <img src="../assets/lawn.jpg">

                                <div class="content">
                                    <h3>Lawn</h3>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>


                <div class="col-md-4 mt-4">
                    <router-link to="/JewelleryView">
                        <div class="wrapper">

                            <div class="image">

                                <img src="../assets/jewellery.jpeg">

                                <div class="content">
                                    <h3>Jewellery</h3>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>



                <!-- 
<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/rustic.jpg">
            
<div class="content">
    <h3>Rustic Kitchen</h3>
</div>
        </div>
    </div>
    </a>
</div>

<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/livingroom2.jpg" >
            
<div class="content">
    <h3>Living Room</h3>
</div>
        </div>
    </div>
    </a>
</div>

<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/bedroom.jpg" >
            
<div class="content">
    <h3>Bedroom</h3>
</div>
        </div>
    </div>
    </a>
</div>


<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/bathroom2.jpg" >
            
<div class="content">
    <h3>Bathroom</h3>
</div>
        </div>
    </div>
    </a>
</div>


<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/walldecor.jpg" >
            
<div class="content">
    <h3>Wall Decor Bedroom</h3>
</div>
        </div>
    </div>
    </a>
</div>


<div class="col-md-4 mt-4">

<a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/0fficesoace.jpg" >
            
<div class="content">
    <h3>Office Space</h3>
</div>
        </div>
    </div>
</a>
</div>


<div class="col-md-4 mt-4">
    <a href="#">
    <div class="wrapper">

        <div class="image">
            
<img src="../assets/patio.jpg" >
            
<div class="content">
    <h3>Patio HiRes</h3>
</div>
        </div>
    </div>
    </a>
</div> -->


            </div>


        </div>

        <div class="example">

        </div>

    </div>
</template>


<script>

export default {
    name: "ImageSection",
   
  
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {

    box-sizing: border-box;
    font-family: sans-serif;
}

.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.image {
    position: relative;
    width: 100%;

}

.image img {
    width: 100%;
    display: block;
    height: 320px;
    border-radius: 15px;


}

.content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: 0.6sec;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 5px rgba(139, 136, 136, 0.5);

}

.content:hover {
    opacity: 1;


}

.content h3 {
    font-size: 30px;
    color: #ffffff;
}

.content>* {
    transform: translateY(25px);
    transition: transform 0.6sec;
}

.content:hover>* {
    transform: translateY(0px);
}

.example {
    padding-bottom: 100px;
}
</style>
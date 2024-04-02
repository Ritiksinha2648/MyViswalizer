<template>
  <div class="hello">
    <div class="container">
      <h1 class="product-heading pt-5 pb-2"> <a href="#" class="xmark pe-2"><i class="bi bi-x"></i></a>See products in
        your room</h1>
      <div class="row">

        <div class="col-md-7 ">
          <video src="../assets/instructional_video_countertop_floor_wall.mp4" class="video w-100 mt-3" autoplay muted
            loop></video>


        </div>

        <div class="col-md-4 offset-md-1">

          <h5 class="upload"><span class="logo-cube pe-2"><i class="bi bi-cloud-upload"></i></span>Upload a picture of
            your room</h5>
          <h5 class="upload-1  pb-3"><span class="logo-cube pe-2"><i class="bi bi-box"></i></span>Try our products in
            your room</h5>

          <div class="container-1">

            <div class="center-1">

              <button alt="upload">
                <i><i class="bi bi-camera"></i></i>
                <i>&nbsp;</i>
                <i>U</i>
                <i>p</i>
                <i>l</i>
                <i>o</i>
                <i>a</i>
                <i>d</i>
              </button>

            </div>

          </div>

          <div class="btn btn-2 mt-4">
            <span class="bto-qr"> <i class="bi bi-qr-code-scan"></i>&emsp;Scan QR to upload your picture</span>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new {
  padding-top: 30px;
}

.bto-qr i {
  font-size: 25px;
  font-weight: 600;
  color: rgb(123, 109, 109);
}

.upload {
  font-size: 20px;
  font-weight: 600;
  color: rgb(123, 109, 109);
  font-family: cursive;

}

.upload-1 {
  font-size: 20px;
  font-weight: 600;
  color: rgb(123, 109, 109);
  font-family: cursive;
}

.video {
  border-radius: 15px;
}


.logo-cube {
  color: rgb(123, 109, 109);
  font-size: 22px;
  font-weight: 500;
}

div[class*=button] {
  padding: 10px;
  height: 33.33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  line-height: 50px;

  text-align: center;
  width: 300px;
  cursor: pointer;

}

.btn-2 {
  color: black;
  transition: all 0.3s;
  position: relative;
  width: 100%;


}

.btn-2 span {
  transition: all 0.3s;

}

.btn-2::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1 px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(128, 128, 128, 0.5);
  border-bottom-color: rgb(128, 128, 128, 0.5);
  transform: scale(0.1, 1);
}

.btn-2:hover span {
  letter-spacing: 2px;
}

.btn-2:hover::before {
  opacity: 1;
  transform: scale(1, 1);

}

.btn-2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
  background-color: rgba(136, 136, 136, 0.1);
}

.btn-2:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}

.xmark {
  text-decoration: none;
  color: black;
}

/*

.upload_button{
  width: 100%;
padding-top: 15px;
padding-bottom: 15px;
  cursor: pointer;
  background-color: #1DCEAF;
  border: 1px solid #91C9FF;
  border-radius: 15px;
  outline: none;
  transition: 1s ease-in-out;

}

svg{
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;


  stroke-dasharray: 150 900;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.upload_button:hover{
  transition: 1s ease-in-out;
  background: #4F95DA;
}

.upload_button:hover svg{
  stroke-dashoffset: -480;
}

.upload_button span{
  color: white;
  font-size: 18px;
  font-weight: 100;
}


.container-1{
  width: 100%;

			transform: translate(0%, 0%);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.center-1{
	width: 100%;
			position: relative;
		}



*/



button {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 45px;
  text-transform: uppercase;
  border: 0;
  box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
  background-color: hsl(210deg 100% 44%);
  border-radius: 12px;
  overflow: hidden;
  transition: 31ms cubic-bezier(.5, .7, .4, 1);
  width: 100%;

}

button:before {
  content: attr(alt);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  font-size: 23px;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  opacity: 1;
}

button:active {
  box-shadow: none;
  transform: translateY(7px);
  transition: 35ms cubic-bezier(.5, .7, .4, 1);
}

button:hover:before {
  transition: all .0s;
  transform: translateY(100%);
  opacity: 0;
}

button i {
  color: white;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 4px;
  font-style: normal;
  transition: all 2s ease;
  transform: translateY(-20px);
  opacity: 0;
}

button:hover i {
  transition: all .2s ease;
  transform: translateY(0px);
  opacity: 1;
}

button:hover i:nth-child(1) {
  transition-delay: 0.045s;
}

button:hover i:nth-child(2) {
  transition-delay: calc(0.045s * 3);
}

button:hover i:nth-child(3) {
  transition-delay: calc(0.045s * 4);
}

button:hover i:nth-child(4) {
  transition-delay: calc(0.045s * 5);
}

button:hover i:nth-child(6) {
  transition-delay: calc(0.045s * 6);
}

button:hover i:nth-child(7) {
  transition-delay: calc(0.045s * 7);
}

button:hover i:nth-child(8) {
  transition-delay: calc(0.045s * 8);
}

button:hover i:nth-child(9) {
  transition-delay: calc(0.045s * 9);
}

button:hover i:nth-child(10) {
  transition-delay: calc(0.045s * 10);
}
</style>

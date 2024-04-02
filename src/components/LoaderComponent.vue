<template>
    <div>

      <!-- The Modal -->
      <div v-if="isModalOpen" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <h2 style="font-size: 60px; margin-top: 150px;">C<span style="color: orangered; font-size: 72px;">o</span>mpany</h2>
          <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" alt="">
          <p style="bottom: 10; ">Powered by GEM WEB SERVICES</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: true
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      }
    },
    mounted() {
        setTimeout(() => {
            this.$router.push('/GardenView');
        }, 2000);
    }
  };
  </script>
  
  <style>
  /* Modal Styling */
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with transparency */
  }
  
  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    text-align: center;
    border-radius: 2px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Drop shadow effect */
    height: 600px;
    width: 600px;
  }
  
  /* Close button */
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #aaa;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover {
    color: black;
}
</style>
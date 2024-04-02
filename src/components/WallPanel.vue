<template>
    <div class="wallpanel">

        <div class="container-fluid">
            <div class="row">
                <!-- <button type="button" class="btn interior "> <i class="bi bi-chevron-left"></i>&emsp14;change interior</button> -->

                <div class="col-md-9">
                    <div class="image-sub ">


                        <div class="preview" ref="preview" @mousedown="startDragRotate" @mousemove="dragRotateProduct"
                            @mouseup="stopDragRotate" @click="deselectProduct">

                            <img src="../assets/vacantroom1.jpg" alt="Uploaded Image"
                                style="width: 100%; height: 100vh;">

                            <img v-for="(product, index) in selectedProducts" :key="index" :src="product.image"
                                :alt="product.name" class="product" :style="{
                            top: product.top + 'px', left: product.left + 'px', width: product.width + 'px', height: product.height + 'px',
                            transform: 'translateZ(' + product.depth + 'px) rotateX(' + product.rotationX + 'deg) rotateY(' + product.rotationY + 'deg) rotateZ(' + product.rotationZ + 'deg) scale(' + product.scale + ')'
                        }" @mousedown="startDragRotateProduct(index, $event)">

                            <div v-if="selectedProductIndex !== null && !dragMoving && !dragResizing"
                                class="circle horizontal-circle"
                                :style="{ left: selectedProducts[selectedProductIndex].left + selectedProducts[selectedProductIndex].width / 2 + 'px', top: selectedProducts[selectedProductIndex].top + 'px' }">
                            </div>
                            <div v-if="selectedProductIndex !== null && !dragMoving && !dragResizing"
                                class="circle vertical-circle"
                                :style="{ left: selectedProducts[selectedProductIndex].left + 'px', top: selectedProducts[selectedProductIndex].top + selectedProducts[selectedProductIndex].height / 2 + 'px' }">
                            </div>




                        </div>
                    </div>

                </div>



                <div class="col-md-3">
                    <h2 class="products mt-5 text-center">Products</h2>


                    <div class="row new">

                        <div class="col-md-6 " v-for="(product, index) in products" :key="index">

                            <div class="product1" @click="addProduct(product)">
                                <div class="img-section" style="width: 100%; height:100%">
                                    <img :src="product.image" class="wall-design w-100 px-3 py-3">
                                </div>
                                <p class="text-center">{{ product.name }}</p>
                            </div>

                        </div>

                    </div>
                    <div class="container">
                        <div class="button-resize text-center pt-2">
                            <button class="resize-btn" @click="increaseSize">+</button>
                            <button class="resize-btn ps-2" @click="decreaseSize">-</button>

                        </div>
                    </div>
                    <div class="control-buttons mt-3">
                        <button @click="removeProduct" class="cancel-button">Remove</button>

                    </div>


                </div>
            </div>
        </div>

    </div>
</template>


<script>

import chair1 from '@/assets/categories/houseutensils/chair1.png';
import chair2 from '@/assets/categories/houseutensils/chair2.png';
export default {
    name: 'WallPanel',

    data() {
        return {
            // Your data properties here
            products: [
                { name: 'Product 1', image: chair1, width: 140, height: 140, depth: 0, top: 300, left: 300, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1 },
                { name: 'Product 2', image: chair2, width: 120, height: 120, depth: 0, top: 250, left: 250, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1 },
                { name: 'Product 3', image: chair1, width: 140, height: 140, depth: 0, top: 300, left: 300, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1 }
            ],
            selectedProduct: '',

            selectedProducts: [],
            dragRotating: false,
            dragMoving: false, // Track if product is being moved
            dragResizing: false,
            resizeDirection: '',
            dragStartX: 0,
            dragStartY: 0,
            dragStartTop: 0,
            dragStartLeft: 0,
            dragStartWidth: 0,
            dragStartHeight: 0,
            selectedProductIndex: null
        };
    },
    methods: {
        addProduct(product) {
            this.selectedProducts.push(Object.assign({}, product, {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scale: 1
            }));

        },


        startDragRotate(event) {
            if (!this.dragRotating && !this.dragMoving && !this.dragResizing) {
                this.dragRotating = true;
                this.dragStartX = event.clientX;
                this.dragStartY = event.clientY;
            }
        },
        dragRotateProduct(event) {
            if (this.selectedProducts && this.selectedProductIndex !== null && this.selectedProducts[this.selectedProductIndex]) {
                if (this.dragRotating || this.dragMoving || this.dragResizing) {
                    const deltaX = event.clientX - this.dragStartX;
                    const deltaY = event.clientY - this.dragStartY;
                    if (this.dragRotating) {
                        this.selectedProducts[this.selectedProductIndex].rotationY += deltaX / 5; // Rotate around the y-axis
                        this.selectedProducts[this.selectedProductIndex].rotationX -= deltaY / 5; // Rotate around the x-axis (minus sign for correct direction)
                    }
                }
                if (this.dragMoving) {
                    const previewRect = this.$refs.preview.getBoundingClientRect();
                    const minX = 0;
                    const maxX = previewRect.width - this.selectedProducts[this.selectedProductIndex].width;
                    const minY = 0;
                    const maxY = previewRect.height - this.selectedProducts[this.selectedProductIndex].height;
                    const newX = Math.min(Math.max(event.clientX - previewRect.left, minX), maxX);
                    const newY = Math.min(Math.max(event.clientY - previewRect.top, minY), maxY);
                    this.selectedProducts[this.selectedProductIndex].left = newX;
                    this.selectedProducts[this.selectedProductIndex].top = newY;
                }

                this.dragStartX = event.clientX;
                this.dragStartY = event.clientY;

            }
        },

        stopDragRotate() {
            this.dragRotating = false;
            this.dragMoving = false;
            this.dragResizing = false;
        },
        startDragRotateProduct(index, event) {
            this.selectedProductIndex = index;
            this.dragStartX = event.clientX;
            this.dragStartY = event.clientY;
            this.dragStartTop = this.selectedProducts[index].top;
            this.dragStartLeft = this.selectedProducts[index].left;
            if (this.dragResizing) {
                this.dragMoving = false;
            }
            else {
                this.dragMoving = true;
            }
        },
        startResize(event, direction, index) {
            this.resizeDirection = direction;
            this.selectedProductIndex = index;
            this.dragStartX = event.clientX;
            this.dragStartY = event.clientY;
            this.dragStartWidth = this.selectedProducts[index].width;
            this.dragStartHeight = this.selectedProducts[index].height;
            this.dragResizing = true;
            this.dragMoving = false;
        },
        deselectProduct(event) {
            if (!event.target.classList.contains('product')) {
                this.selectedProductIndex = null;

            }
        },
        removeProduct() {
            if (this.selectedProductIndex !== null) {
                this.selectedProducts.splice(this.selectedProductIndex, 1);
                this.selectedProductIndex = null;
            }
        },
        increaseSize() {
            if (this.selectedProductIndex !== null) {
                const product = this.selectedProducts[this.selectedProductIndex];
                product.width += 2;
                product.height += 2;
            }
        },
        decreaseSize() {
            if (this.selectedProductIndex !== null) {
                const product = this.selectedProducts[this.selectedProductIndex];
                product.width -= 2;
                product.height -= 2;

                product.width = Math.max(product.width, 10);
                product.height = Math.max(product.height, 10);
            }
        }

    },
    computed: {
        dragging() {
            return this.selectedProductIndex !== null;
        }
    },
    watch: {
        dragging(value) {
            if (!value) {
                this.selectedProductIndex = null;
            }
        }
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wallpanel {
    position: fixed;
    height: 100vh;
}

.preview {
    position: relative;
    width: 100%;
    height: 100vh;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    perspective: 1000px;
    overflow: hidden;


}

.image-sub {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    padding-top: 25px;
    padding-bottom: 25px;

}

.wall-design {
    border-radius: 15px !important;
}

.new {
    background: rgba(117, 117, 117, 0.07);
    padding-bottom: 10px;
    padding-top: 5px;
    overflow: scroll;

}

.product {
    position: absolute;
    cursor: move;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    resize: both;
    overflow: auto;
    z-index: 1;
}

.product1 {
    background-color: white;
    padding-bottom: 5px;
    border-radius: 15px;
}

.circle {
    position: absolute;
    border: 1px solid #007bff;
    border-radius: 50%;
    pointer-events: none;
    /* Ensure the circle doesn't interfere with mouse events */
}

.horizontal-circle {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
}

.vertical-circle {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
}

.control-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;

}

.cancel-button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: red;
    color: white;
    width: 100%;
    border: none;
    border-radius: 13px;
}

.resize-btn {
    border: none;
    font-size: 22px;

}
</style>

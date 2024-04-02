<template>
    <button class="download-button" @click="downloadPrev">Download Preview</button>
</template>

<script>
export default {
    name: 'DownloadHandler',
    props: {
        previewElement: {
            type: Object,
            required: true
        },
        selectedProducts: {
            type: Array,
            required: true
        }
    },

    methods: {
        async downloadPrev() {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const preview = this.previewElement;
            if (!preview) {
                console.error("Preview element not found.");
                return;
            }
            const width = preview.offsetWidth;
            const height = preview.offsetHeight;

            canvas.width = width;
            canvas.height = height;

            // Draw the preview image onto the canvas
            const img = new Image();
            img.src = preview.toDataURL('image/jpg');

            // Wait for the image to load before drawing it on the canvas
            await new Promise((resolve, reject) => {
                img.onload = () => resolve();
                img.onerror = error => reject(error);
            });

            // Draw the preview image onto the canvas
            context.drawImage(img, 0, 0, width, height);

            // Draw each product onto the canvas
            for (const product of this.selectedProducts) {
                const productImage = new Image();
                productImage.src = product.image;
                productImage.crossOrigin = 'Anonymous'; // Set crossOrigin to 'Anonymous'

                // Wait for the product image to load before drawing it on the canvas
                await new Promise((resolve, reject) => {
                    productImage.onload = () => resolve();
                    productImage.onerror = error => reject(error);
                });

                // Draw the product image onto the canvas
                context.drawImage(
                    productImage,
                    product.left,
                    product.top,
                    product.width,
                    product.height
                );
            }

            // Convert the canvas content to a data URL
            const dataUrl = canvas.toDataURL('image/png');

            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'preview.png';

            // Trigger the download
            link.click();
        }
    },

}
</script>

<style scoped></style>
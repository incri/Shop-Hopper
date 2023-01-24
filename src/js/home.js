class Dropdown {
    constructor(buttonId, categoriesId) {
        this.button = document.getElementById(buttonId);
        this.categories = document.getElementById(categoriesId);
        this.button.addEventListener("mouseover", this.showCatagories.bind(this));
        this.button.addEventListener("mouseout", this.hideCatagories.bind(this));
        this.categories.addEventListener("mouseover", this.showCatagories.bind(this));
        this.categories.addEventListener("mouseout", this.hideCatagories.bind(this));

    }

    showCatagories() {
        this.categories.classList.remove("hidden");
    }

    hideCatagories() {
        this.categories.classList.add("hidden");
    }

}

const catagories_dropdown = new Dropdown("catagories_button", "catagories_containt");


class HighlightedProduct {
    constructor(highlighted_ad, adDetails, imageArray, imageArrayDetails, interval) {
        this.highlighted_image = document.getElementById(highlighted_ad);
        this.imageDetails = document.getElementById(adDetails);
        this.imageArray = imageArray;
        this.imageArrayDetails = imageArrayDetails;
        this.index = 0;
        this.interval = interval;


    }

    startChange() {
        setInterval(() => {
            this.changeImage();
            this.changeDetails();
        }, this.interval);
    }

    changeImage() {
        this.highlighted_image.setAttribute("src", this.imageArray[this.index]);
        this.index++;
        if (this.index >= this.imageArray.length) {
            this.index = 0;
        }

    }

    changeDetails() {
        this.imageDetails.textContent = this.imageArrayDetails[this.index];
        this.index++;
        if (this.index >= this.imageArrayDetails.length) {
            this.index = 0;
        }

    }
}

let changer = new HighlightedProduct("highlighted_image", "highlightedImageDetails", ["./img/highlited_ads/ad1.jpg", "./img/highlited_ads/ad2.jpg", "./img/highlited_ads/ad3.jpg"], ["Wear cotton, Wear Comfort", "A CULTURAL CONFLUNCE", "It's the way you make me feel"], 3000);
changer.startChange();

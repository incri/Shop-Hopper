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

const catagories_dropdown = new Dropdown("catagories_button", "catagories_containt", "hp_1", "hp_2", "hp_3");


class HighlightedProduct {
    constructor(highlighted1, highlighted2, highlighted3) {
        this.hp1 = document.getElementById(highlighted1);
        this.hp2 = document.getElementById(highlighted2);
        this.hp3 = document.getElementById(highlighted3);
        this.hp1.addEventListener("click", this.hp2Img.bind(this));
        this.hp2.addEventListener("click", this.hp3Img.bind(this));
        this.hp3.addEventListener("click", this.hp1Img.bind(this));


    }

    hp2Img() {
        this.hp1.classList.remove("flex")
        this.hp1.classList.add("hidden")
        this.hp2.classList.remove("hidden")
        this.hp2.classList.add("flex")

    }

    hp3Img() {
        this.hp2.classList.remove("flex")
        this.hp2.classList.add("hidden")
        this.hp3.classList.remove("hidden")
        this.hp3.classList.add("flex")

    }

    hp1Img() {
        this.hp3.classList.remove("flex")
        this.hp3.classList.add("hidden")
        this.hp1.classList.remove("hidden")
        this.hp1.classList.add("flex")

    }
}

const imageChanger = new HighlightedProduct("hp_1", "hp_2", "hp_3");

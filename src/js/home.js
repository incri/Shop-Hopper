class home {
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

const catagories_dropdown = new home("catagories_button", "catagories_containt");
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const closeModal = document.querySelector(".close");
    const openModalButtons = document.querySelectorAll(".open-modal");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product_card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            productCards.forEach((card) => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

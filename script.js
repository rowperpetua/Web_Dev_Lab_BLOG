//nav bg
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

$(document).ready(function() {
    // Data for each card
    const cardData = {
        "Personal Information": "This section contains personal details about Rowela Perpetua, her background, and her journey.",
        "Hobbies": "This section showcases various hobbies and interests.",
        "Talent/Skills": "Learn about Rowela's skills in coding, problem-solving, and other talents.",
        "Projects": "Explore past projects, including web development, apps, and other creative works.",
        "Loved Ones": "A glimpse into Rowela's family and the people she cherishes most.",
        "Pets": "A section dedicated to Rowela's pets and her love for animals."
    };

    // Open modal on card click
    $('.card').click(function() {
        const cardTitle = $(this).find('.card-title').text();
        $('#modal-title').text(cardTitle);
        $('#modal-text').text(cardData[cardTitle]);
        $('#modal').fadeIn();
    });

    // Close modal on 'X' click
    $('.close').click(function() {
        $('#modal').fadeOut();
    });

    // Close modal on outside click
    $(window).click(function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
});
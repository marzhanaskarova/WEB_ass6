$(document).ready(function() {
    console.log("jQuery is ready!");

    // Part 1: Selectors & CSS
    $("#btn-change-css").click(function() {
        $("#main-title").text("Text changed!").css("color", "#333");
        $(".description").html("<b>HTML tag added!</b>").css("font-weight", "bold");
    });

    // Part 2: Effects (Hide, Show, Toggle)
    $("#btn-hide").click(function() { $("#text-visibility").hide(); });
    $("#btn-show").click(function() { $("#text-visibility").show(); });
    $("#btn-toggle").click(function() { $("#text-visibility").toggle(); });

    // Part 3: Fade & Slide Methods
    $("#btn-fade-in").click(function() { $("#img-fade").fadeIn(); });
    $("#btn-fade-out").click(function() { $("#img-fade").fadeOut(); });
    $("#btn-fade-toggle").click(function() { $("#img-fade").fadeToggle(); });
    $("#btn-slide-toggle").click(function() { $("#panel").slideToggle(); });

    // Part 3 (DOM): Add & Remove Elements
    $("#btn-add").click(function() { $("#my-list").append("<li>New item</li>"); });
    $("#btn-prepend").click(function() { $("#my-list").prepend("<li>Prepend item</li>"); });
    $("#btn-remove").click(function() { $("#my-list li:last").remove(); });

    // Part 3 (DOM): Modifying Attributes & Form
    $("#btn-change-img").click(function() {
        $("#changeable-img").attr("src", "https://via.placeholder.com/150/000000/FFFFFF?text=Updated");
    });
    $("#btn-change-link").click(function() {
        $("#my-link").attr("href", "https://youtube.com").text("YouTube Link");
    });
    $("#name-input").keyup(function() {
        $("#live-name").text($(this).val());
    });
    $("#email-input").keyup(function() {
        $("#live-email").text($(this).val());
    });

    // Part 4: Animations (Task 8, 9, 10)
    $("#btn-anim-basic").click(function() {
        $("#box").animate({ width: "150px", height: "150px", left: "100px" }, 800);
    });
    $("#btn-anim-seq").click(function() {
        $("#box")
            .animate({ left: "150px" }, 400)
            .animate({ top: "80px" }, 400)
            .animate({ width: "50px", height: "50px" }, 400)
            .animate({ left: "0px", top: "0px", width: "80px", height: "80px" }, 400);
    });
    $("#btn-anim-comb").click(function() {
        $("#box").animate({ opacity: 0.3, width: "120px", height: "120px", left: "120px" }, 800);
    });
    $("#btn-reset").click(function() {
        $("#box").stop(true).css({ top: "0px", left: "0px", width: "80px", height: "80px", opacity: 1 });
    });

    // Part 5: Mini Project (Accordion Menu)
    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle(300).siblings(".accordion-content").slideUp(300);
    });
});
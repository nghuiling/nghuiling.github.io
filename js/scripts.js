// credits: https://codepen.io/Ajeet_Kumar/pen/GRGYGLp

$(".filter a").click(function (e) {
        e.preventDefault();
        var a = $(this).attr("href");
        a = a.substr(1);
        $(".sets a").each(function () {
          if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
          else $(this).removeClass("hide");
        });

    

// Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("btncontainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";

    }
});
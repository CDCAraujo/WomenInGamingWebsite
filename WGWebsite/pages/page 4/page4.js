$(".fade_hov").hover(
  function () {
    $(this).siblings().addClass("fade");
  },
  function () {
    $(this).siblings().removeClass("fade");
  }
);

jQuery(document).ready(function ($) {
  //faq_accordion_section
  //toggle aria-attributes and style the states
  $(".question").click(function () {
    $(this).attr("aria-expanded", function (index, attr) {
      return attr == "true" ? "false" : "true";
    });
    $(this)
      .parent()
      .next()
      .attr("aria-hidden", function (index, attr) {
        return attr == "true" ? "false" : "true";
      });
  });

  //Blog Sidebar Categories
  $(".blog-sidebar ul").prepend(
    '<li class="most-recent"><a href="/blog">Most Recent</a></li>'
  );
  $(window).on("load", function () {
    var path = window.location.pathname;
    if (path.indexOf("blog") >= 0) {
      $(".most-recent").addClass("current-misse");
    }
  });

  //Menu Desktop
  //toggle sub_menu_open class
  $("nav ul li.menu-item-has-children").click(function (event) {
    event.stopPropagation(); // to stop the 'document handler' from activating
    $(this).toggleClass("is_open");
    $(this)
      .children("a")
      .attr("aria-expanded", function (index, attr) {
        console.log("expanded", attr);
        return attr == "true" ? "false" : "true";
      });

    $(this).children("ul").toggleClass("sub-menu-open");
  });

  //Remove class clicking anywhere on page
  $(document).click(function (event) {
    if (
      !$(event.target).closest("nav ul li.menu-item-has-children ul").length
    ) {
      $("nav ul li.menu-item-has-children ul").removeClass("sub-menu-open");
    }
  });

  //Mobile menu
  //toggle classes and attributes
  $(".menu_toggle_btn").click(function () {
    $(this).toggleClass("btn_clicked");

    let expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !expanded);
    $(".nav-mobile").toggleClass("menu_open");

    $("body").toggleClass("no_scroll");
  });

  $(".nav-mobile ul li.menu-item-has-children").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("is_open");
    let subExpanded = $(this).children("a").attr("aria-expanded") === "true";
    $(this).children("a").attr("aria-expanded", !subExpanded);
    $(this).children("ul").toggleClass("sub-menu-open");
  });

  //feature slider
  // var rand = Math.floor(Math.random() * 3 + 1);
  // //set active class on rand
  // $(".tab_content:nth-child(" + rand + ")").addClass("active");
  // $(".tab_link:nth-child(" + rand + ")").addClass("active");

  $(".tab_link").click(function () {
    //value of data_tab-attribute
    var tab_id = $(this).attr("data_tab");

    //Toggle tab link
    // $(this).addClass("active").siblings().removeClass("active");
    $(".tab_link").attr("aria-selected", "false"); //deselect all the tabs
    $(this).attr("aria-selected", "true"); // select this tab

    //Toggle target tab
    $("img[role='tabpanel']").attr("aria-hidden", "true"); //hide all the img panels
    $("div[role='tabpanel']").attr("aria-hidden", "true"); //hide all the video panels

    $("#" + tab_id).attr("aria-hidden", "false"); // show our panel
  });

  //enlarge image in two_columns_block
  $(".part.image .pict").click(function () {
    // console.log("this", this);
    $(this).toggleClass("enlarge");
  });
  //Remove class clicking anywhere on page
  $(document).click(function (event) {
    if (!$(event.target).closest(".part.image .pict").length) {
      $(".part.image .pict").removeClass("enlarge");
    }
  });
  //enlarge image blog
  $(".post_text figure img").click(function () {
    $(this).toggleClass("enlarge");
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".post_text figure img").length) {
      $(".post_text figure img").removeClass("enlarge");
    }
  });
});
document.ready;

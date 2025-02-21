$(document).ready(function () {
  $(".sidenav").sidenav({ edge: "right" });
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $('select').formSelect();
  $(".datepicker").datepicker({
    format: "dd mmmm, yyyy",
    yearRange: [new Date().getFullYear() - 200, new Date().getFullYear()], // 200 years ago to today
    maxDate: new Date(),  // Prevents selecting future dates
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });
});
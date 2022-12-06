

$(document).ready(function(){
   $(".edit").click(function(){
      $(this).parent().find(".check").removeClass("d-none");
      $(this).toggleClass("d-none");

      $(this).parent().parent().find(".text-none").toggleClass("d-none");
      $(this).parent().parent().find(".input-box").toggleClass("d-none");

   })
   $(".check").click(function(){
      $(this).parent().find(".edit").removeClass("d-none");
      $(this).toggleClass("d-none");

      $(this).parent().parent().find(".text-none").toggleClass("d-none")
      $(this).parent().parent().find(".input-box").toggleClass("d-none");

      var f_name=$(this).parent().parent().find(".first").val();
      var l_name=$(this).parent().parent().find(".last").val();

      if(f_name!="" && l_name!=""){
         $(this).parent().parent().find(".f-text").html(f_name);
         $(this).parent().parent().find(".l-text").html(l_name);
      }
      
      $(this).parent().parent().find(".first").val("");
      $(this).parent().parent().find(".last").val("");
   })
})
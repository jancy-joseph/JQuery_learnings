$(document).ready( function(){
    /* $('a').click(function(){
        alert("You are leaving this site and going to w3schools website");
 })
   // $('button').click( function(){
    $('#clickable').click(function(){
        //alert("Hello from jQuery!");
        $('p#sp').hide();
    })   
    var stored_info='';
    $('h3.h3class').click(function(){
        stored_info = $('h2.h2class').html();  
        $('h2.h2class').text('go see space Needle!');
        //console.log("stored variable is assigned"+stored_info);
    })
     $('#imgtag').click(function(){
        console.log(stored_info);
        $('h2.h2class').text(stored_info);
        
    })  */
    $('#container_timeline container_timeline_tech .vertical_line .timeline_dialog_box_wrapper .event').click(function(){
        id = $(this).attr('id');
        console.log("id :",id);
        });
})

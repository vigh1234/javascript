$(document).ready(function(){ 
    $("#widthinpx").change(function(){
        var wdth = $("#widthinpx").val();   
        $("#img1").attr("width",wdth );    
    })
})
     $("#percentagewidth").change(function(){   
        var per = $("#percentagewidth").val();
        $("#img1").attr("width", per );    
    })

    $("#heightinpx").change(function(){
        var hght = $("#heightinpx").val();   
        $("#img1").attr("height",hght );    
    })

    $("#percentageheight").change(function(){   
        var hgt = $("#percentageheight").val();
        $("#img1").attr("height",hgt );    
    })

    $("#link").change(function(){
        $("#img1").click(function(){
            var link =$("#link").val();
            if($("#check").is(":checked")){
                window.open(link,"_blank")
            }
            else{
                
                    $("#a").attr("href",link);
                }
        })
      })
       



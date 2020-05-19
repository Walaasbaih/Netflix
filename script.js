//var films=[{name:"Lost Girls",actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",brief:"When Mari Gilbert's daughter disappears, police inaction drives her own investigation into the gated Long Island community where Shannan was last seen. Her search brings attention to over a dozen murdered sex workers."
//}]


//select to delet
    $("ul").click(function(event){	
    $(event.target).css({'color':'red'});
    
});
//Remove the select 
    $("#remove").click(function(event){
    $("li").each(function(){
	if($(this).val()=== 1 ) {
		$(this).remove();
    }
});
})
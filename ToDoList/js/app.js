$("body").ready(function(){

	// check off specific todos by clicking
	$("#list").on("click", "li", function(){
		$(this).toggleClass("itemCompleted");
	})

	// add deletion functionality to todo's item
	$("#list").on("click", ".deleteBtn", function(event){
		//event.stopPropogation();
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});		
	});
	
	// add new todo's item
	$("#newItem").on("keypress", function(event){
		if(event.which === 13){
			var todoText = $(this).val();			
			$(this).val("");			
			$("#list").append("<li><span class='deleteBtn'>X</span> " + todoText + "</li>");

			/*$("#list li:last-of-type").on("click", function(){
				$(this).toggleClass("itemCompleted");
			});*/
		}
	});
});
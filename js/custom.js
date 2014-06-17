var valid_extensions = /(.pdf|.docx|.doc)$/i;
var num =/^\d+$/;
var feed_city_pattern = /^[A-Za-z ]{3,80}$/;
var feed_city_patternd = /^[A-Za-z. ]{3,80}$/;
var mobile_pattern =/^\d{4,10}$/;
var regdate = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
var url =/^([w*3]+(\.[a-zA-Z0-9]+)+.*)$/;
var mobileline  = /^(\+)?([0-9]{1,4})?\d{8,12}$/;
var landline  = /^(\+)?([0-9]{1,4})?([ ]{1,1})?(\-{0,1})?\d{8,12}$/;

var doctor_value ="";
var qualification_value="";
var location_value ="";
var right = 0;
			var started =0;
			var ended = 4;
$(document).ready(function(){
		
	 
	
	 $(".menuclick").click(function(){
		 
		//alert("hereee");
		if(right == 0){
		$(".content_screen").animate({right:'-80%'});
		right=250;
		
		}else{
			$(".content_screen").animate({right:'0%'});
			right= 0;
		}
	}); 
	
	$(".menu_list ul li").click(function(){
			$('.news_list').empty();
			var data = $(this).attr("data");
			var idname = "#"+data;
			//alert(idname);
			$(".screen").css("display","none");
			$(idname).css("display","block");
			$(".content_screen").animate({right:'0px'});
			right= 0;
			$(".loading").css("display","block");
			
			if(data =="section_three"){
					
				window.location = "index.html";
				
			}
			
			if(data =="section_two"){
				
				window.location = "news.html";
				
			}
			
			if(data =="section_four"){
							
				window.location = "event.html";
			
			
			}
			if(data =="section_five"){
							
				window.location = "article.html";
				
			
			}
			
			if(data =="section_six"){
					
				window.location = "search.html";
				
			
			}
			if(data =="section_one"){
				window.location = "login.html";
			}
			if(data=="section_seven"){
				window.location = "jobs.html";
			}
			if(data=="section_eight"){
				window.location = "login.html";
			
			}
			
	});
	
	$('.news_back').click(function(){
						$("#section_eight").slideUp();
						$("#section_eight").css("display","none");
						$("#section_two").slideDown();
						$("#section_two").css("display","block");
						
						
	
	
	});
	
	$('.event_back').click(function(){
						
						$("#section_nine").slideUp();
						$("#section_nine").css("display","none");
						$("#section_four").slideDown();
						$("#section_four").css("display","block");
						
						
						
	
	
	});
	$('.article_back').click(function(){
						
						$("#section_ten").slideUp();
						$("#section_ten").css("display","none");
						$("#section_five").slideDown();
						$("#section_five").css("display","block");
						
						
	
	
	}); 
	
	$('.member_back').click(function(){
						
						$("#section_ten").slideUp();
						$("#section_ten").css("display","none");
						$("#section_six").slideDown();
						$("#section_six").css("display","block");
	
	});
	
	
	$('.jobs_back').click(function(){
						
						$("#section_twelve").slideUp();
						$("#section_twelve").css("display","none");
						$("#section_six").slideDown();
						$("#section_six").css("display","block");
						
	
	});
	
	
	$('.membersearch_back').click(function(){
						
						$("#section_eleven2").slideUp();
						$("#section_eleven2").css("display","none");
						$("#section_six2").slideDown();
						$("#section_six2").css("display","block");
						
	
	});
						
	
	
	
	$("#login_submit").click(function(){
			var user_name = document.getElementById('user_name').value; 
			var user_password = document.getElementById('user_password').value; 
			
			$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/login2.php",
				type: "POST",
				dataType: "json",
				data:{
					"username": user_name,
					"password": user_password,
				},
				success: function (res){
					alert("Login is completed successfully");
					var someVarName = "11";
					var someUserName = user_name;
					localStorage.setItem("someVarName", someVarName);
					localStorage.setItem("someUserName", someUserName);
					$("li[data='section_six'],li[data='section_seven']").css("display","block");
					$("li[data='section_one']").css("display","none");
					$("li[data='section_eight']").css("display","block");
					$("#user_namee").html(someUserName);
					$("#form_login").css("display","none");
					$("#form_logout").css("display","block");
					//alert(res['status']);
					//alert(res[0]);
					window.location = "index.html";
					
					
				},
				error: function(rtn){
					alert("Enter correct user name or password");
					
					
				}
				
				
				});
	
	});
	
	
	$("#logout_submit").click(function(){
					$("#form_logout").css("display","none");
					$("#form_login").css("display","block");
					$("li[data='section_six'],li[data='section_seven']").css("display","none");
					$("li[data='section_eight']").css("display","none");
					$("li[data='section_one']").css("display","block");
					var someVarName = "10";
					localStorage.setItem("someVarName", someVarName);
					
	
	});
	
	

});

function news(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
	$("li[data='section_six'],li[data='section_seven']").css("display","block");
	
	$("li[data='section_one']").css("display","none");
	$("li[data='section_eight']").css("display","block");
	
	}
	if(someVarName == 10){
	$("li[data='section_six'],li[data='section_seven']").css("display","none");
	
	$("li[data='section_eight']").css("display","none");
	$("li[data='section_one']").css("display","block");
	
	}
	
	$(".loading").css("display","block");
		$.ajax({
						
						url: "http://www.iimbaa.org/IIMBAA/mobile/news2.php",
						type: "POST",
						dataType: "json",
						//data: {
						//"start": started,
						//"end": ended,
						//},
						
						success: function (res) {
									
							   var index;
							
							for (index = 0; index < res.length; ++index) {
								
								  var images_url = res[index]['image_intro'];
								  if(images_url ==""){
									images_url ="images/No_image.png";
								 }
								$("#news_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-4 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
							} 
							$(".loading").css("display","none");
							$("#news_section li").click(function(){
								
								$("#section_two").slideUp();
								$("#section_two").css("display","none");
								$("#section_eight").slideDown();
								$("#section_eight").css("display","block");
								var indexid = $(this).attr("data");
								var desc_image = res[indexid]['image_intro'];
								
								
								if(desc_image !=""){
									$("#news_description").html("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div><div class='desc_area'>"+res[indexid]['introtext']+"</div>");
								
								}else{
								$("#news_description").html("<div class='desc_area'>"+res[indexid]['introtext']+"</div>");
								}
							});
						},
						error: function(rtn){
							alert("Seems you are offline. Please check your internet connection.");
						}
						
						
					});
			
	

}

function eventss(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
	$("li[data='section_six'],li[data='section_seven']").css("display","block");
	$("li[data='section_one']").css("display","none");
	$("li[data='section_eight']").css("display","block");
	
	}
	if(someVarName == 10){
	$("li[data='section_six'],li[data='section_seven']").css("display","none");
	$("li[data='section_eight']").css("display","none");
	$("li[data='section_one']").css("display","block");
	
	}
	$(".loading").css("display","block");

		$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/events2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#event_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-3 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#event_section li").click(function(){
						
						$("#section_four").slideUp();
						$("#section_four").css("display","none");
						$("#section_nine").slideDown();
						$("#section_nine").css("display","block");
						var indexid = $(this).attr("data");
						var desc_image = res[indexid]['image_intro'];
						
					
						if(desc_image !=""){
							$("#event_description").html("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div><div class='desc_area'>"+res[indexid]['introtext']+"</div>");
						
						}else{
						$("#event_description").html("<div class='desc_area'>"+res[indexid]['introtext']+"</div>");
						}
					});
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
			});




}

function article(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
		$("li[data='section_six'],li[data='section_seven']").css("display","block");
		$("li[data='section_one']").css("display","none");
		$("li[data='section_eight']").css("display","block");
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
	
	}
	$(".loading").css("display","block");
	$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/articles2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						//$("#location").append("<option value='"+res[index]['location_name']+"'>"+res[index]['location_name']+"</option>");
						  var images_url = res[index]['image_intro'];
						  if(images_url ==""){
							images_url ="images/No_image.png";
						 }
						$("#articles_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-3 list_images'><img src='"+images_url+"'/></div><div class='col-xs-8 news_expert'><h3>"+res[index]['title']+"</h3><p class='newsdatetime'>"+res[index]['publish_up']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#articles_section li").click(function(){
						//alert("hihi");
						$("#section_five").slideUp();
						$("#section_five").css("display","none");
						$("#section_ten").slideDown();
						$("#section_ten").css("display","block");
						var indexid = $(this).attr("data");
						var desc_image = res[indexid]['image_intro'];
						var intrtext= res[indexid]['introtext'];
						intrtext = intrtext.replace(/src=/g, 'src="');
						intrtext = intrtext.replace(/""/g, '"');
						desc_image ="";
						//alert(intrtext);
						//$("#news_description").append("<div class='row descr_row'>");
						if(desc_image !=""){
							$("#article_description").html("<div class='images_area'><img src='"+res[indexid]['image_intro']+"'/></div><div class='desc_area'>"+res[indexid]['introtext']+"</div>");
						
						}else{
						$("#article_description").html("<div class='desc_area'>"+intrtext+"</div>");
						}
					});
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
			});







}

function memberss(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
		$("li[data='section_six'],li[data='section_seven']").css("display","block");
		$("li[data='section_one']").css("display","none");
		$("li[data='section_eight']").css("display","block");
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
	
	}
	
	$(".loading").css("display","block");
	$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/member2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						
						$("#member_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-8'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"</h3><p class='newsdatetime'>"+res[index]['cb_graduation']+"</p></div></div></li>");
					} 
					$(".loading").css("display","none");
					$("#member_section li").click(function(){
						//alert("hihi");
						$("#section_six").slideUp();
						$("#section_six").css("display","none");
						$("#section_eleven").slideDown();
						$("#section_eleven").css("display","block");
						var indexid = $(this).attr("data");
						
						
						$("#member_description").html("<div id='member_description_"+indexid+"'><\/div>");
						$("#member_description_"+indexid+"").append("<div class='row'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[indexid]['firstname']+" "+res[indexid]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[indexid]['cb_dob']+"<\/p><\/div><\/div>");
						//$("#member_description").html("<div id='member_description_"+indexid+"'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[index]['cb_dob']+"<\/p><\/div><\/div>");
						
						//$("#member_description").html("<div id='member_description_"+indexid+"'><div class='row'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[index]['cb_dob']+"<\/p><\/div><div style='clear:both;'><\/div></div>");
						
						 if(res[indexid]['cb_country'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Country<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_country']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_city'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>City<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_city']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_program'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_program']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['cb_subprogram'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Sub-Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_subprogram']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_mobile'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Mobile<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_mobile']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_residentialphone'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Residential Phone<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_residentialphone']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_graduation'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Graduation Year<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_graduation']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_companyname'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Company Name<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_companyname']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_industry'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Industry<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_industry']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['email'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Email<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['email']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						} 
						
					});
					
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
				});


}

function home(){
	
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
		$("li[data='section_six'],li[data='section_seven']").css("display","block");
		$("li[data='section_one']").css("display","none");
		$("li[data='section_eight']").css("display","block");
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
	
	}
	
	//alert("connection checking");
	$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/news2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
						//alert("connection successfull");	
					   
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
			});
	

}
function jobs(){

	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
		$("li[data='section_six'],li[data='section_seven']").css("display","block");
		$("li[data='section_one']").css("display","none");
		$("li[data='section_eight']").css("display","block");
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
	
	}
	
	$(".loading").css("display","block");
	$.ajax({
				
				url: "http://www.iimbaa.org/IIMBAA/mobile/jobs2.php",
				type: "POST",
				dataType: "json",
				//data: {
				//"start": started,
				//"end": ended,
				//},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						
						$("#jobs_section").append("<li data='"+index+"'><div class='row'><div class='col-xs-11 news_expert'><h3>"+res[index]['title']+"<\/h3><p class='newsdatetime'>"+res[index]['created']+"<\/p><\/div><\/div><\/li>");
					} 
					$(".loading").css("display","none");
					$("#jobs_section li").click(function(){
					
						$("#section_seven").slideUp();
						$("#section_seven").css("display","none");
						$("#section_twelve").slideDown();
						$("#section_twelve").css("display","block");
						var indexid = $(this).attr("data");
						
						var phone_number = res[indexid]['phone'];
						if(phone_number =="" || phone_number == "null" ){
							phone_number = "not available";
						}
						
						var attachment = res[indexid]['Title'];
						
							function empty( mixed_var ) {
								return ( typeof(mixed_var) === 'undefined' || mixed_var === "" || mixed_var === 0   || mixed_var === "0" || mixed_var === null  || mixed_var === false );
							}
							
							if(empty(attachment)){
								attachment = "not available";
						
							}else{
								
								attachment ="<a href='http://www.iimbaa.org/IIMBAA/images/Jobs/"+attachment+"'>"+res[indexid]['Name']+"</a>";
							}
						
						
						$("#jobs_description").html("<div class='jobdesc_box'><div class='jobs_descr_box'><h4>"+res[indexid]['title']+"</h4></div><div class='jobs_descr_box'><p><strong>Company</strong> <br/>"+res[indexid]['company']+"</p></div><div class='jobs_descr_box'><p><strong>Email-Id </strong> <br/>"+res[indexid]['email']+"</p><div class='jobs_descr_box'><p><strong>Created Date</strong> <br/>"+res[indexid]['created']+"</p></div><div class='jobs_descr_box'><p><strong>Phone number </strong> <br/>"+phone_number+"</p></div><div class='jobs_descr_box'><p>"+res[indexid]['introtext']+"</p></div><div class='jobs_descr_box'><p><strong>Attachment</strong> <br/>"+attachment+"</p></div></div>");
						
						
						/* $("#member_description_"+indexid+"").append("<div class='row'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[indexid]['firstname']+" "+res[indexid]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[indexid]['cb_dob']+"<\/p><\/div><\/div>");
						
						 if(res[indexid]['cb_country'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Country<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_country']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_city'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>City<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_city']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_program'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_program']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['cb_subprogram'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Sub-Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_subprogram']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_mobile'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Mobile<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_mobile']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_residentialphone'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Residential Phone<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_residentialphone']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_graduation'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Graduation Year<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_graduation']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_companyname'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Company Name<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_companyname']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_industry'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Industry<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_industry']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['email'] !=""){
							$("#member_description_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Email<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['email']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}  */
						
					}); 
					
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
		});

}

function login(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
	$("li[data='section_six'],li[data='section_seven']").css("display","block");
	$("#form_login").css("display","none");
	$("#form_logout").css("display","block");
	$("li[data='section_one']").css("display","none");
	$("li[data='section_eight']").css("display","block");
		
		var someUserName = localStorage.getItem("someUserName");
		$("#user_namee").html(someUserName);
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("#form_logout").css("display","none");
		$("#form_login").css("display","block");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
		
	
	
	}
	
	

}

function adv_search(){
	var someVarName = localStorage.getItem("someVarName");
	if(someVarName == 11){
		$("li[data='section_six'],li[data='section_seven']").css("display","block");
		$("li[data='section_one']").css("display","none");
		$("li[data='section_eight']").css("display","block");
	}
	if(someVarName == 10){
		$("li[data='section_six'],li[data='section_seven']").css("display","none");
		$("li[data='section_eight']").css("display","none");
		$("li[data='section_one']").css("display","block");
	
	}
		
			$.ajax({
				url: "http://iimbaa.org/IIMBAA/mobile/programs2.php",
				type: "POST",
				dataType: "json",
				success: function (res) {
					var index;
					for (index = 0; index < res.length; ++index) {
						$("#program_list").append("<option value='"+res[index]['fieldtitle']+"'>"+res[index]['fieldtitle']+"<\/option>");
					} 
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
			});
			
			var d = new Date();
			var n = d.getFullYear();
			for(index2 = 1976; index2 < n; ++index2 ){
				$("#year_graduation").append("<option value='"+index2+"'>"+index2+"<\/option>");
			
			}
		
}

function member_search(){
		 var userfirst_name_member = document.getElementById('userfirst_name_member').value; 
		var userlast_name_member = document.getElementById('userlast_name_member').value; 
		var year_graduation = document.getElementById('year_graduation').value; 
		var program_list = document.getElementById('program_list').value; 
		var usercity_name_member = document.getElementById('usercity_name_member').value; 
		$("#membersearch_section").css("display","none");
		$("#membersearch_section2").css("display","block");
		
		$(".loading").css("display","block");
		$.ajax({
				
				url: "http://iimbaa.org/IIMBAA/mobile/Search2.php",
				type: "POST",
				dataType: "json",
				data: {
				"firstname": userfirst_name_member,
				"lastname": userlast_name_member,
				"year": year_graduation,
				"program": program_list,
				"city": usercity_name_member,
				},
				
				success: function (res) {
							
					   var index;
					
					for (index = 0; index < res.length; ++index) {
						
						$("#membersearch_section23").append("<li data='"+index+"'><div class='row'><div class='col-xs-11'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"</h3><p class='newsdatetime'>"+res[index]['cb_graduation']+"</p><p class='newsdatetime'><img src='http://s2.postimg.org/5ev6nse6t/mobile_phone.png' class='smallicon_im'>"+res[index]['cb_mobile']+"</p><p class='newsdatetime'><img src='http://s2.postimg.org/niy78fbv9/mail2.png' class='smallicon_im'><a href='mailto:"+res[index]['email']+"' >"+res[index]['email']+"</a></p></div></div></li>");
					} 
					$(".loading").css("display","none");
					 $("#membersearch_section23 li").click(function(){
						//alert("hihi");
						$("#section_six2").slideUp();
						$("#section_six2").css("display","none");
						$("#section_eleven2").slideDown();
						$("#section_eleven2").css("display","block");
						var indexid = $(this).attr("data");
						
						
						$("#member_description2").html("<div id='member_description2_"+indexid+"'><\/div>");
						$("#member_description2_"+indexid+"").append("<div class='row'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[indexid]['firstname']+" "+res[indexid]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[indexid]['cb_dob']+"<\/p><\/div><\/div>");
						//$("#member_description").html("<div id='member_description_"+indexid+"'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[index]['cb_dob']+"<\/p><\/div><\/div>");
						
						//$("#member_description").html("<div id='member_description_"+indexid+"'><div class='row'><div class='col-xs-4 list_images'><img src='images\/No_image.png'><\/div><div class='col-xs-8 news_expert'><h3>"+res[index]['firstname']+" "+res[index]['lastname']+"<\/h3><p class='newsdatetime'><strong>D.O.B : <\/strong>"+res[index]['cb_dob']+"<\/p><\/div><div style='clear:both;'><\/div></div>");
						
						 if(res[indexid]['cb_country'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Country<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_country']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_city'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>City<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_city']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_program'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_program']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['cb_subprogram'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Sub-Program<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_subprogram']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_mobile'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Mobile<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_mobile']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_residentialphone'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Residential Phone<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_residentialphone']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_graduation'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Graduation Year<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_graduation']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_companyname'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Company Name<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_companyname']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
						}
						if(res[indexid]['cb_industry'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Industry<\/div><div class='col-xs-8 desc_value'><p>"+res[indexid]['cb_industry']+"<\/p><\/div><div style='clear:both;'><\/div><\/div>");
							
						}
						if(res[indexid]['email'] !=""){
							$("#member_description2_"+indexid+"").append("<div class='member_desc_bx'><div class='col-xs-4 desc_key'>Email<\/div><div class='col-xs-8 desc_value'><p><a href='mailto:"+res[indexid]['email']+"'>"+res[indexid]['email']+"<\/a><\/p><\/div><div style='clear:both;'><\/div><\/div>");
						} 
						
					}); 
					
					
				},
				error: function(rtn){
					alert("Seems you are offline. Please check your internet connection.");
				}
				
				
		});
		

}

function isValidEmail(e)
{
    
    var exp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    result = exp.test(e);
    if (result)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function ValidPhone(phone)
{
    var reg_mobile= /^(\+)?([0-9]{8,15})?\d{8,15}$/;
    var valid = "0123456789";
    if((phone=="") || (phone<=0))
    {
        alert ("Please Enter Mobile Number")
        return false
    }    
    else if(!reg_mobile.test(phone))
    {
        alert("Invalid Mobile Number Length! Please Try Again.")
        return false
    }
        
    return true
}

//Number Validation
function valid1(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}

function valid88(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9+-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function valid77(f) {
   // !(/^[ÃƒÂ±0-9( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ±0-9( )+#\/-]/ig,''):null;
    !(/^[ÃƒÂ0-9+]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}

function valid67(f) {
    !(/^[ÃƒÂ0-9+.]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function validc(f) {
	   !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+ÃƒÂ0-9+.]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+ÃƒÂ0-9+.]/ig,''):null;
   // !(/^[ÃƒÂ0-9+.]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÂ0-9]/ig,''):null;
}
function valid2(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/#-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+#\/-]/ig,''):null;
}
function valid3(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/-]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+\/-]/ig,''):null;
}
/*Name Validation*/
function valid4(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]/ig,''):null;
}
/*website*/
function valid9(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z+.+ÃƒÂ0-9]*$/i ).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z( )+.+ÃƒÂ0-9]/ig,''):null;
}

/*company validation*/
function valid5(f) {
    !(/^[ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z. ]*$/i).test(f.value)?f.value = f.value.replace(/[^ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±a-z]/ig,''):null;
}


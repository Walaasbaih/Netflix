var film1={namef:"Lost Girls" , actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f1.jpg"}
var film2={namef:"Bad Education",actors:"  Hugh Jackman, Ray Romano, Welker White ",img :"films/f2.jpg"}
var film3={namef:"Sorry We Missed You",actors:"  Kris Hitchen, Debbie Honeywood, Rhys Stone",img :"films/f3.jpg"}
var film4={namef:"Emma",actors:"   Anya Taylor-Joy, Johnny Flynn, Mia Goth",img :"films/f4.jpg"}
var film5={namef:"The Whistlers",actors:"  Vlad Ivanov, Catrinel Marlon, Rodica Lazar",img :"films/f5.jpg"}
var film6={namef:"Young Ahmed",actors:"  Idir Ben Addi, Olivier Bonnaud, Myriem Akheddiou ",img :"films/f6.jpg"}
var film7={namef:"The Way Back",actors:" Ben Affleck, Al Madrigal, Janina Gavankar  ",img :"films/f7.jpg"}
var film8={namef:"The Invisible Man",actors:" Elisabeth Moss, Oliver Jackson-Cohen, Harriet Dyer ",img :"films/f8.jpg"}
var film9={namef:"The Cordillera of Dreams",actors:"  Jorge Baradit, Vicente Gajardo, Francisco Gazitúa",img :"films/f9.jpg"}
var film10={namef:"Beanpole",actors:"  Viktoria Miroshnichenko, Vasilisa Perelygina, Andrey Bykov",img :"films/f10.jpg"}
var film11={namef:"Crip Camp",actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f11.jpg"}
var film12={namef:"Rewind", actors:" Rewind ", img :"films/f12.jpg"}
var film13={namef:"Bacurau",actors:"  Bárbara Colen, Thomas Aquino, Silvero Pereira",img :"films/f13.jpg"}
var film14={namef:"Saint Maud",actors:" Morfydd Clark, Jennifer Ehle, Lily Knight ",img :"films/f14.jpg"}
var film15={namef:"Gretel & Hansel",actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f15.jpg"}

var films =[film1,film2,film3,film4,film5,film6,film7,film8,film9,film10,film11,film12,film13,film14,film15]
//
var vid =[{name:"Birds.Of.Prey",vid:"vd/v1.mp4"},{name:"bad.boys.for.life",vid:"vd/v2.mp4"},{name:".Limitless.",vid:"vd/v3.mp4"}]
    
    //display
    function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
$("#showfilm").click(function(e){
$('#list-container').hide();
$('#list-contai').show();
  var contentDiv = document.getElementById('list-contai')
    contentDiv.textContent=' ';
   var f=map(vid,function(e){ 
var subDiv=document.createElement('div');
var a=document.createElement('a');
var name=document.createElement('h1');
var actors=document.createElement('p');
var vid = document.createElement("VIDEO");
subDiv.id='sub';
name.textContent = e.name;
vid.src = e.vid;
vid.id='vid'
subDiv.appendChild(vid);
subDiv.appendChild(name);
contentDiv.appendChild(subDiv);
  })

return f;
  });

 $("#show").click(function(e){
  $('#list-contai').hide();
  $('#list-container').show();
  var contentDiv = document.getElementById('list-container')
    contentDiv.textContent='';
   var f=map(films,function(e){ 
var subDiv=document.createElement('div');
var a=document.createElement('a');
var name=document.createElement('h1');
var actors=document.createElement('p');
var img = document.createElement('img');
subDiv.id='sub';
name.textContent = e.namef;
actors.textContent = e.actors;
img.src = e.img;
img.id='flam'
subDiv.appendChild(img);
subDiv.appendChild(name);
subDiv.appendChild(actors);
contentDiv.appendChild(subDiv);
	})
return f;
  });
//display
var addtofav ='';
function a(){
  var input = $("#searchfilm").val();
  for (var i =0; i<films.length; i++) { 
    if(input === films[i].namef ){
       addtofav =films[i].namef;
        var contentDiv = document.getElementById("popshow")
       contentDiv.textContent='';
       var subDiv=document.createElement('div');
var a=document.createElement('a');
var name=document.createElement('h1');
var actors=document.createElement('p');
var img = document.createElement('img');
      subDiv.id='sub';
name.textContent = films[i].namef;
actors.textContent = films[i].actors;
img.src = films[i].img;
img.id='flam'
subDiv.appendChild(img);
subDiv.appendChild(name);
subDiv.appendChild(actors);
contentDiv.appendChild(subDiv);
  
   }  
$("#searchfilm").val('');
}}

function pop(){
       $('.div2').show();
   
    $('.div2').click(function(){
        $('.div2').hide();
    });
    $('.bt').click(function(){
        $('.div2').hide();
        
    });
     
     return false;
    }  
    function pop2(){
       $('.div22').show();
   
    $('.div22').click(function(){
        $('.div22').hide();
    });
    $('.bt').click(function(){
        $('.div22').hide();
        
    });
     
     return false;
    }  
$("#fav-list").click(function(event){ 
    $(event.target).css({'color':'red'});
    $(event.target).attr("value","1")    
});
//Remove the select 
    $("#remove").click(function(event){
    $("li").each(function(){

    if($(this).val()=== 1 ) {
      console.log("hi")
    $(this).remove();
    }
});
})
$("#add-film").click(function (){
  if($("#input-film").val()){
      var input = $("#input-film").val();
        var li =$("<li>"+input+"</li>");
        li.attr("id","film");
        $("#list-film").append(li);
     $("#input-film").val('');}
     else {
      alert("You must write something!")
     }
})
//selct to delet 
    $("ul").click(function(event){  
    $(event.target).css({'color':'#ffff1a'});
    $(event.target).attr("value","1")
});
//Remove the select
    $("#remove").click(function(event){
    $("li").each(function(){
  if($(this).val()=== 1 ) {
    $(this).remove();
    }
});
})

var film1={namef:"Lost Girls" , actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f1.jpg"}
var film2={namef:"Bad Education",actors:"  Hugh Jackman, Ray Romano, Welker White ",img :"films/f2.jpg"}
var film3={namef:"Sorry We Missed You",actors:"  Kris Hitchen, Debbie Honeywood, Rhys Stone",img :"films/f3.jpg"}
var film4={namef:"Emma",actors:"   Anya Taylor-Joy, Johnny Flynn, Mia Goth",img :"films/f4.jpg"}
var film5={namef:"The Whistlers",actors:"  Vlad Ivanov, Catrinel Marlon, Rodica Lazar",img :"films/f5.jpg"}
var film6={namef:"Young Ahmed",actors:"  Idir Ben Addi, Olivier Bonnaud, Myriem Akheddiou ",img :"films/f6.jpg"}
var film7={namef:"The Way Back",actors:"  Ben Affleck, Al Madrigal, Janina Gavankar  ",img :"films/f7.jpg"}
var film8={namef:"The Invisible Man",actors:" Elisabeth Moss, Oliver Jackson-Cohen, Harriet Dyer ",img :"films/f8.jpg"}
var film9={namef:"The Cordillera of Dreams",actors:"  Jorge Baradit, Vicente Gajardo, Francisco Gazitúa",img :"films/f9.jpg"}
var film10={namef:"Beanpole",actors:"  Viktoria Miroshnichenko, Vasilisa Perelygina, Andrey Bykov",img :"films/f10.jpg"}
var film11={namef:"Crip Camp",actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f11.jpg"}
var film12={namef:"Rewind", actors:" Rewind ", img :"films/f12.jpg"}
var film13={namef:"Bacurau",actors:"  Bárbara Colen, Thomas Aquino, Silvero Pereira",img :"films/f13.jpg"}
var film14={namef:"Saint Maud",actors:" Morfydd Clark, Jennifer Ehle, Lily Knight ",img :"films/f14.jpg"}
var film15={namef:"Gretel & Hansel",actors:" Amy Ryan, Thomasin McKenzie, Gabriel Byrne ",img :"films/f15.jpg"}
var films =[film1,film2,film3,film4,film5,film6,film7.film8,film9,film10,film11,film12,film13,film14,film15]

 function displayfilm(film) {
var nam =film.namef;
var act = film.actors;
var im =film.img;
return  nam +act + im;
}
 displayAll:function() {
      var result = "\n";
     for (var i =0;i<films.length;i++){
        result = result + displayfilm(films[i]) + "\n";
      }
      return result;

   }



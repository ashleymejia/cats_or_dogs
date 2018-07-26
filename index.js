function toggleVoteContainer(){
  //find the vote containeron web page
  var voteContainer = document.getElementById("vote-container");

  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;


//convert string integer
  likes = parseInt(likes);

// increase like values by 1
  likes += 1;

  //change value of likes on page
  element.innerText = likes;
}



var catImages = ["https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
"https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg", "https://vetstreet.brightspotcdn.com/dims4/default/a1a90c7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0d%2Ff2e4c0b3a611e092fe0050568d634f%2Ffile%2Fhub-cats-senior.jpg"]

var dogImages = ["https://www.petmd.com/sites/default/files/salmonella-infection-dogs.jpg", "http://evelynswinebar.com/wp-content/uploads/2018/06/dogpic.jpg", "http://cushingsindogs.com/wp-content/uploads/2018/02/CID-website-Survey-Page.jpg"]


function changeImage(element){
  console.log(element.id);

  var animals =[];

  if(element.id==="cats-carousel"){
    animals = catImages;
  }else{
    var animals = dogImages;
  }

  var carousel =document.getElementById(element.id);
  var image= carousel.getElementsByTagName("img")[0];
  var imageUrl= image.getAttribute("src");

var imageIndex = animals.indexOf(imageUrl);
console.log(imageUrl);
if(imageIndex === animals.length - 1){
  imageIndex = 0;
} else {
    imageIndex += 1;
}

  imageUrl = animals[imageIndex];

image.src= imageUrl;

  console.log(imageUrl);
}

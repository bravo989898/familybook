var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/fTCWMVxr/father.png" , "https://i.postimg.cc/hPLzT4VL/mother.png" , "https://i.postimg.cc/y8WTPSnq/sister.png" , "https://i.postimg.cc/j5jNsp1p/me.png" ];
var names = ["Family Book","Sarada Nanda Mishra(best dad)", "Lina Mishra(best mom)", "Subhangee Mishra(angry, but the best sister)", "Aditya Mishra(ofcoarse! myself)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = [images[i]];
    
    var updatedName = [names[i]] ;
    
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

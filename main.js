var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/7YzhVYC4/IMG-20200225-WA0026.jpg", "https://i.postimg.cc/xds5fP39/IMG-20211124-WA0003.jpg", "https://i.postimg.cc/4dPgNqFm/IMG-20210206-WA0027.jpg", "https://i.postimg.cc/4NqTdzwb/IMG-20190628-WA0018.jpg"];
var names = ["Family Book","Ranjeet Kumar Mandal", "Rakhi Kumari", "Shreyashi Kirti", "Tejas Shresth",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

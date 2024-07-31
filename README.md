## Graduation Composite Website ##

- Displays graduation composites for the digital signage project. It is linked by OptiSigns Engage to have a more custom user interaction to the touch screen. 
- View the pretrained, animated photos before 1970 as well as searching and filtering graduate's names.
- Driven by AI Thin-Plate Model for years from 1930 to 1970, recognizing faces and animating photos in a subtle manner.

### How to add newer photo composites ###
- Firstly, a webp image is needed for faster loading speed. After trial and error, the best way is to do screenshot on mac and convert it into webp with about 500kb sizes.
- Rename each image you want to add to the workplace in a format as ECE<year_name> (eg. ECE1940).
- Drop the photo into public/assets/displayedOnCover folder.
  Now, the images will be available on the year-selection page as well as inside the composite page after clicking LEARN MORE button for these years.

### How to add names to make them appear searchable ###
- First, go to src/data folder and target photoData file. These are json objects used to map images and links required for the entire project as a mini perserved storage of the project.
- Next, create new json objects in curly braces with distinct id (preferably increasing it by 1 as before).
- Fill out first and last name and the image path (if there is no path for individual's images like 1970 photos and onwards, leave it blank).
  Now, the names should be visible to the search bar and people can start interact with it.

# Image X - Website
*Image X website. 2018*
*Designed & Developed by Harry Bellenie for Image X*

## Intro
Image X website is built in Expression Engine, using HTML, CSS and JavaScript. Here I've compiled some basic steps on how to manage certain aspects of the site. I recommend reading/consulting the [Expression Engine Documentation](https://docs.expressionengine.com/).
## Channels
Many areas of the site can be managed using the Channels feature of Expression Engine. Currently, the following categories can be customized:

	Team Members
	Catalogs
	Favorite Products			
## Manage Entries
#### Add New Entry 
1. To add a new entry, click on the Create drop down in the top left and select the desired Channel. 
2. Fill out all the required fields and press the Save button.

Some fields may call for images via a URL. Images should be uploaded to the Cloudinary account. See the section `Managing Images & Cloudinary`. 
#### Edit an Entry
1. Click the Edit drop down in the top left and select the desired Channel.
2. Click on the name of the entry you wish to edit. Be sure to save your changes.
#### Remove an Entry
1. To remove an entry, find the entry you wish to remove and click the checkbox. 
2. Scroll to the bottom of the list. Select 'Remove' from the drop down.
3. Click Submit.

#### Team Members
- **Title** is the First and Last name (ie. Emily Hooven).
- **URL title** is usually created automatically, and is typically in this format first name-last name (ie. emily-hooven). These names are important for the Favorited Products.
- **Profile** is the Team Members profile photo in the form of a URL. You must first upload the Team Members profile photo to Cloudinary, copy the Public URL, and paste it into this field. 
- **Position** is the number position the Team Member is sorted on the Contact Us and the Our Team pages (1 = first position, 2 = second, and so on).
#### Favorite Products

- **Product** is the name of the product
- **Product Image** this is a photo of the product in the form of a URL. You must first upload the photo to Cloudinary, copy the Public URL, and paste it into this field. 
- **Team Members** this is where you list all the Team Members who want this product featured on their profile page. You must enter the Team Member's `URL Title` name, separated by a comma. (ie. glen_douglas, emily_hooven, ...etc.). Simply remove them from the list to remove the product from that Team Members profile page.
### Managing Images & Cloudinary
ImageX uses [Cloudinary](https://cloudinary.com/console/media_library) to host it's images. It's fast, easy and free (at the sites current usage/traffic).

#### Upload an Image
1. Log in and click Media Library.
2. Either Drag & Drop the file into the Upload Image box or click the Select File button.

#### Get the URL 
1. In the Media Library, look for the image you need the URL for.
2. Below the Image preview on the right is the Public URL. (ie. http://res.cloudinary.com/dtvsfs9ji/image/upload/v1506290874/team_ue9srs.jpg)
3. Right click on this link and select Copy. 

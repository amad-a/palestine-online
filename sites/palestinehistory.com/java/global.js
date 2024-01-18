var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Instrumentation set DoInstrumentation = true/false.
	DoInstrumentation= false;

	// Customize default MS menu color - bgColor, fontColor, mouseoverColor
	setDefaultMSMenuColor("gray", "white", "black");

	// Customize toolbar background color
	setToolbarBGColor("white");

	// display default ICP Banner
	//  setICPBanner("image/search.gif","") ;

	// display MSCOM Banner
	//   setMSBanner("image/icons1.gif","","") ;

	// display ADS
	//   setAds("image/icons1.gif","","") ;

	//New
	addMSMenu("NewMenu", "New", "","tour.htm");
	addMSSubMenu("NewMenu","Virtual Tours","tour.htm");
	addMSSubMenu("NewMenu","Between the Lines","blines.htm");
	addMSSubMenu("NewMenu","Pal.Links","http://pallinks.palestinehistory.com");
	addMSSubMenu("NewMenu","Who did it? and Why?","whodidit.htm");

	//ServicesMenu
	addMSMenu("ServicesMenu", "Services", "","");
        addMSSubMenu("ServicesMenu","Survey about Palestine","survey.htm");
        addMSSubMenu("ServicesMenu","Right of Return Petition","petition.htm");
        addMSSubMenu("ServicesMenu","Greeting Cards","cards.htm");
	addMSSubMenu("ServicesMenu","Mail List","update.htm");
	addMSSubMenu("ServicesMenu","Sign the Guestbook","addguest.html");
	addMSSubMenu("ServicesMenu","Recommend this site","update.htm");
	addMSSubMenu("ServicesMenu","Search the site","search.htm");
	addMSSubMenu("ServicesMenu","Ask about Palestine","contact.htm");
        addMSSubMenuLine("ServicesMenu");
	addMSSubMenu("ServicesMenu","Read the Guestbook","guestbook.html");
	addMSSubMenu("ServicesMenu","First Survey Results","survey1.htm");
	addMSSubMenu("ServicesMenu","Second Survey Results","survey2.htm");
	addMSSubMenu("ServicesMenu","Thired Survey Results","survey3.htm");
        addMSSubMenuLine("ServicesMenu");
        addMSSubMenu("ServicesMenu","The WAP Version","wap/index.html");
        addMSSubMenu("ServicesMenu","Traditional Version","altindex.html");
        addMSSubMenu("ServicesMenu","Text Version - English","text/index.html");
        addMSSubMenu("ServicesMenu","Arabic Site","arabic/index.html");
        addMSSubMenu("ServicesMenu","Text Version - Arabic","textarab/index.html");

	//ContactMenu
	addMSMenu("ContactMenu", "Contact us..", "","contact.htm");
	addMSSubMenu("ContactMenu","PO Box 6258 Sharjah, UAE","contact.htm");
	addMSSubMenu("ContactMenu","e-Mail address","mailto:info@palestinehistory.com?subject=Info..&cc=palestine@hotpop.com");
	addMSSubMenu("ContactMenu","Tel (1 530) 685-8635","contact.htm");
	addMSSubMenu("ContactMenu","Fax (1 603) 909-4786","contact.htm");

        //AboutMenu
	addMSMenu("AboutMenu", "About", "","about.htm");
              addMSSubMenu("AboutMenu","Palestine Maps","map.htm");
	addMSSubMenu("AboutMenu","Palestine - Home of history","about.htm");
	addMSSubMenu("AboutMenu","Site history","sitehist.htm");
	addMSSubMenu("AboutMenu","Last update","update.htm");
	addMSSubMenuLine("AboutMenu");
	addMSSubMenu("AboutMenu","Editor : Esam Shashaa","esam.htm");

	//ArabicMenu
  	addMSMenu("ArabicMenu", "Arabic Site", "","arabic/index.html")

}

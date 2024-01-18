var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("gray", "white", "black");

	// Customize toolbar background color
	setToolbarBGColor("#C0C0C0");

	// display ICP Banner
	 setICPBanner("image/palst1.gif","","") ;

	//***** Add ICP menus *****
	//History
	addICPMenu("HistoryMenu", "History", "","history.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Brief history of Palestine","history.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Ancient history of Palestine","palst.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Photo History Timeline","ptime.htm");
	addICPSubMenu("HistoryMenu","Quick History Timeline","qtime.htm");
	addICPSubMenu("HistoryMenu","History Timeline 1900-1979","time1900.htm");
       	addICPSubMenu("HistoryMenu","History Timeline 1980-1995","time1980.htm");
	addICPSubMenu("HistoryMenu","History Timeline 1996","time1996.htm");
	addICPSubMenu("HistoryMenu","History Timeline 1997","time1997.htm");
	addICPSubMenu("HistoryMenu","History Timeline 1998","time1998.htm");
	addICPSubMenu("HistoryMenu","History Timeline 1999","time1999.htm");
	addICPSubMenu("HistoryMenu","History Timeline 2000","time2000.htm");
	addICPSubMenu("HistoryMenu","History Timeline 2001","time2001.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Q&A about Palestine history","faq.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Arab-Israeli war","war.htm");
	addICPSubMenu("HistoryMenu","UN roll in the Conflict","un.htm");
	addICPSubMenu("HistoryMenu","Palestinian Refugees","refugee.htm");
	addICPSubMenu("HistoryMenu","Zionism Massacres","massacre.htm");
	addICPSubMenu("HistoryMenu","Israel History","israel.htm");
	addICPSubMenuLine("HistoryMenu");
	addICPSubMenu("HistoryMenu","Books Library","bl.htm");
	addICPSubMenu("HistoryMenu","Historical Documents","document.htm");

	//Calander
	addICPMenu("CalanderMenu", "Current Issues", "","ub/UltraBoard.cgi");
	addICPSubMenu("CalanderMenu","Discussion Board","ub/UltraBoard.cgi");
	addICPSubMenu("CalanderMenu","Pal.Links Search Engine","pallinks/index.html");
	addICPSubMenu("CalanderMenu","Between the lines..","cgi-bin/journal.cgi");
	addICPSubMenu("CalanderMenu","NEWS Headlines","news.htm");
	addICPSubMenuLine("CalanderMenu");
	addICPSubMenu("CalanderMenu","Al-Aqsa Intifada","intifada/index.html");
	addICPSubMenu("CalanderMenu","List of martyrs","intifada/martyrs.htm");
	addICPSubMenu("CalanderMenu","Mohammed al-Durah","intifada/mohd.htm");
	addICPSubMenu("CalanderMenu","Isam Judah","intifada/judah.htm");
	addICPSubMenu("CalanderMenu","Sami Abu Jazar","intifada/sami.htm");
	addICPSubMenu("CalanderMenu","Moayad Jawareesh","intifada/moayad.htm");
	addICPSubMenu("CalanderMenu","Wael Imad","intifada/wael.htm");

	addICPSubMenuLine("CalanderMenu");
	addICPSubMenu("CalanderMenu","Palestine Calander 2001","calfrm01.htm");
	addICPSubMenu("CalanderMenu","Palestine Calander 2000","calfrm00.htm");
	addICPSubMenu("CalanderMenu","Palestine Calander 1999","calfrm99.htm");
	addICPSubMenu("CalanderMenu","Palestine Calander 1998","calfrm98.htm");
	addICPSubMenu("CalanderMenu","Palestine Calander 1997","calfrm97.htm");
	addICPSubMenu("CalanderMenu","Palestine Calander 1996","calfrm96.htm");

	//Gallery
	addICPMenu("GalleryMenu", "Tours", "","ss.htm");
	addICPSubMenu("GalleryMenu","Virtual Tours","tour.htm");
	addICPSubMenu("GalleryMenu","Al-Qouds Flash ?","flash.htm");
	addICPSubMenu("GalleryMenu","Palestine Maps","map.htm");
	addICPSubMenu("GalleryMenu","Sights and Sounds","ss.htm");
	addICPSubMenu("GalleryMenu","Holy Sites Tour","hsites.htm");
	addICPSubMenu("GalleryMenu","Al-Qouds Old City Tour","oldcity.htm");
	addICPSubMenu("GalleryMenu","Al-Aqsa Mosque Tour","aqsa/index.html");
	addICPSubMenu("GalleryMenu","Al-Aqsa Mosque Show 1","bl.htm");
	addICPSubMenu("GalleryMenu","Al-Aqsa Mosque Show 2","bl.htm");
	addICPSubMenuLine("GalleryMenu");
        addICPSubMenu("GalleryMenu","Maps Photo Gallery","galmaps.htm");
	addICPSubMenu("GalleryMenu","People Photo Gallery","galmans.htm");
	addICPSubMenu("GalleryMenu","Places Photo Gallery","galplace.htm");
	addICPSubMenu("GalleryMenu","Jerusalem Photo Gallery","galjers.htm");
	addICPSubMenuLine("GalleryMenu");
	addICPSubMenu("GalleryMenu","Pal.Links","http://pallinks.palestinehistory.com");


	//State of Palestine
	addICPMenu("StateMenu", "The State", "","palstate.htm");
	addICPSubMenu("StateMenu","State of Palestine","palstate.htm");
	addICPSubMenu("StateMenu","The Flag and Anthem","anthem.htm");
	addICPSubMenuLine("StateMenu");
	addICPSubMenu("StateMenu","Main Cities in Palestine","cities.htm");
	addICPSubMenu("StateMenu","West Bank","westbank.htm");
	addICPSubMenu("StateMenu","   Jerusalem","jurslm.htm");
	addICPSubMenu("StateMenu","   Hebron","hebron.htm");
	addICPSubMenu("StateMenu","   Bethlehem","betlhm.htm");
	addICPSubMenu("StateMenu","   Jericho","jerico.htm");
	addICPSubMenu("StateMenu","   Nabulus","nabulus.htm");
	addICPSubMenu("StateMenu","   Ram Allah","ramalh.htm");
	addICPSubMenu("StateMenu","Gaza Strip","gaza.htm");
	addICPSubMenu("StateMenu","   Gaza City","gazacity.htm");

	//Palestine
	addICPMenu("PalestineMenu", "Palestinian Biography", "","palbio.htm");
	addICPSubMenu("PalestineMenu","Palestinian Liberation (PLO)","palbio01.htm");
	addICPSubMenu("PalestineMenu","Fatah","palbio02.htm");
	addICPSubMenu("PalestineMenu","Popular Front (PFLP)","palbio03.htm");
	addICPSubMenu("PalestineMenu","Democratic Front (DFLP)","palbio04.htm");
	addICPSubMenu("PalestineMenu","Hamas","palbio05.htm");
	addICPSubMenu("PalestineMenu","Palestine Authority (PNA)","palbio06.htm");
	addICPSubMenu("PalestineMenu","Intifada","palbio07.htm");
	addICPSubMenu("PalestineMenu","Deir Yasin","palbio08.htm");
	addICPSubMenu("PalestineMenu","Al-Qassam, Sheikh Izz Al-Din","palbio27.htm");
	addICPSubMenu("PalestineMenu","Al-Husayni, Amin","palbio09.htm");
	addICPSubMenu("PalestineMenu","Al-Husseini, Abd Al-Qader","palbio10.htm");
	addICPSubMenu("PalestineMenu","Al-Shukairy, Ahmad","palbio11.htm");
	addICPSubMenu("PalestineMenu","Arafat, Yasser","palbio12.htm");
	addICPSubMenu("PalestineMenu","Khalaf, Salah","palbio13.htm");
	addICPSubMenu("PalestineMenu","Al-Wazir, Khalil Ibrahim","palbio14.htm");
	addICPSubMenu("PalestineMenu","Yassin, Sheik Ahmad","palbio15.htm");
	addICPSubMenu("PalestineMenu","Habash, Georges","palbio16.htm");
	addICPSubMenu("PalestineMenu","Hawatmeh, Nayef","palbio28.htm");
	addICPSubMenu("PalestineMenu","Abdul Shafi, Haidar","palbio17.htm");
	addICPSubMenu("PalestineMenu","Erekat, Sa'eb","palbio18.htm");
	addICPSubMenu("PalestineMenu","Abbas, Mahmoud","palbio21.htm");
	addICPSubMenu("PalestineMenu","Qrei, Ahmad","palbio29.htm");
	addICPSubMenu("PalestineMenu","Abed Rabbo, Yasser","palbio22.htm");
	addICPSubMenu("PalestineMenu","Ashrawi, Hanan","palbio19.htm");
	addICPSubMenu("PalestineMenu","Husseini, Faisal","palbio20.htm");
	addICPSubMenu("PalestineMenu","Al-Ghussein, Ya'cob","palbio25.htm");
	addICPSubMenu("PalestineMenu","Al-Ali, Naji","palbio23.htm");
	addICPSubMenu("PalestineMenu","Darwish, Mahmoud","palbio24.htm");
	addICPSubMenu("PalestineMenu","Kanafani, Ghassan","palbio26.htm");

	//Israel
	addICPMenu("IsraelMenu", "Israeli Biography", "","isrbio.htm");
	addICPSubMenu("IsraelMenu","Zionism","isrbio01.htm");
	addICPSubMenu("IsraelMenu","Jewish Agency","isrbio02.htm");
	addICPSubMenu("IsraelMenu","Stern Gang","isrbio03.htm");
	addICPSubMenu("IsraelMenu","Haganah","isrbio04.htm");
	addICPSubMenu("IsraelMenu","Gush Emunim","isrbio05.htm");
	addICPSubMenu("IsraelMenu","TNT","isrbio06.htm");
	addICPSubMenu("IsraelMenu","Herzl, Theodor","isrbio07.htm");
	addICPSubMenu("IsraelMenu","Weizmann, Chaim","isrbio08.htm");
	addICPSubMenu("IsraelMenu","Ben-Gurion, David","isrbio09.htm");
	addICPSubMenu("IsraelMenu","Herzog, Chaim","isrbio10.htm");
	addICPSubMenu("IsraelMenu","Eshkol, Levi","isrbio11.htm");
	addICPSubMenu("IsraelMenu","Meir, Golda","isrbio12.htm");
	addICPSubMenu("IsraelMenu","Dayan, Moshe","isrbio13.htm");
	addICPSubMenu("IsraelMenu","Begin, Menachem","isrbio14.htm");
	addICPSubMenu("IsraelMenu","Rabin, Yitzhak","isrbio15.htm");
	addICPSubMenu("IsraelMenu","Peres, Shimon","isrbio16.htm");
	addICPSubMenu("IsraelMenu","Shamir, Yitzhak","isrbio17.htm");
	addICPSubMenu("IsraelMenu","Benjamin, Netanyahu","isrbio18.htm");
	addICPSubMenu("IsraelMenu","Barak, Ehud","isrbio19.htm");
	addICPSubMenu("IsraelMenu","Ariel Sharon","isrbio20.htm");

	//Others
	addICPMenu("OthersMenu", "Others Biography", "","intbio.htm");
	addICPSubMenu("OthersMenu","Balfour, Arthur James","intbio01.htm");
	addICPSubMenu("OthersMenu","Herbert Samo'yel","intbio15.htm");
	addICPSubMenu("OthersMenu","Abdel Nasser, Gamal","intbio03.htm");
	addICPSubMenu("OthersMenu","Sadat, Anwar","intbio04.htm");
	addICPSubMenu("OthersMenu","Mubarak, Hosni","intbio06.htm");
	addICPSubMenu("OthersMenu","King Hussein I","intbio16.htm");
	addICPSubMenu("OthersMenu","Hafez al-Assad","intbio17.htm");
	addICPSubMenu("OthersMenu","Carter, Jimmy","intbio07.htm");
	addICPSubMenu("OthersMenu","Clinton, Bill","intbio08.htm");
	addICPSubMenu("OthersMenu","Kissinger, Henry","intbio09.htm");
	addICPSubMenu("OthersMenu","Albright, Madeleine","intbio10.htm");
	addICPSubMenu("OthersMenu","Balfour Declaration","intbio02.htm");
	addICPSubMenu("OthersMenu","Camp David Agreements","intbio05.htm");	
	addICPSubMenu("OthersMenu","Arab League","intbio11.htm");	
	addICPSubMenu("OthersMenu","UNRWA","intbio12.htm");
	addICPSubMenu("OthersMenu","Declaration of Human Rights","intbio13.htm");
	addICPSubMenu("OthersMenu","NOBEL Prize Winners","intbio14.htm");	
	//Search
	addICPMenu("SearchMenu", "Search", "","search.htm");
	addICPSubMenu("SearchMenu","Search","search.htm");
	addICPSubMenuLine("SearchMenu");
	addICPSubMenu("SearchMenu","Site Index","siteindx.htm");
	addICPSubMenu("SearchMenu","Site Map","sitemap.htm");
	addICPSubMenu("SearchMenu","Images Map","simages.htm");
	addICPSubMenuLine("SearchMenu");
	addICPSubMenu("SearchMenu","Hot Links","links.htm");

	//Text
	addICPMenu("TextMenu", "WAP Version", "","wap/index.html")
}

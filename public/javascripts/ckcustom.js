﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
  config.PreserveSessionOnFileBrowser = true;
  // Define changes to default configuration here. For example:
 	//config.language = '';
  config.uiColor = '#E0ECFF';
	config.toolbar = 'Basic';
	config.toolbar_Basic =
	[
	        ['Format', '-', 'Bold', 'Italic'], 
	        ['NumberedList','BulletedList'], 
	        ['Outdent', 'Indent'], 
	        ['Image', 'Flash', '-', 'Link'], 
	        ['Maximize'], 
	        ['Table'],
	        ['PageBreak'],
	        ['Source']
	];
}
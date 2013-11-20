/*
Mg Box 1.0.0.1
https://github.com/Pacoup/mg_box

   Copyright 2013 Etienne Levesque Guitard

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

"use strict";

/* IE8 getElementsByClassName Fix */
if (!document.getElementsByClassName)
{
	document.getElementsByClassName = function(className)
	{
		return this.querySelectorAll("." + className);
	};
	Element.prototype.getElementsByClassName = document.getElementsByClassName;
}

/* Main code */
var mg = mg || {};

mg.evaluate_wrap = function()
{
	for (var i = 0; i < mg.box.length; i++)
	{
		for (var j = 0, total_width = 0;
		     j < mg.box[i].children.length;
		     j++)
		{
			mg.box[i].children[j].style.clear = "none";
			
			total_width += mg.box[i].children[j].offsetWidth;
			if (Math.ceil(total_width / mg.box[i].offsetWidth) > 1)
			{
				total_width = mg.box[i].children[j].offsetWidth;
				mg.box[i].children[j].style.clear = "both";
			}
		}
		
	}
};

if (!window.jQuery)
{
	window.onload = function()
	{
		mg.box = document.getElementsByClassName("mg_box");
		mg.evaluate_wrap();
		if (mg.box[0])
		{
			if (!window.addEventListener)
			{
				window.attachEvent("onresize", mg.evaluate_wrap);
			}
			else
			{
				window.addEventListener('resize', mg.evaluate_wrap, false);
			}
		}
	};
}
else
{
	$(document).ready(function() {
		mg.box = document.getElementsByClassName("mg_box");
		mg.evaluate_wrap();
		if (mg.box[0])
		{
			if (!window.addEventListener)
			{
				// Do nothing
				// Bug in jQuery causes IE8 to infinitely loop
				// the resize event, so if IE8 && jQuery,
				// evaluate_wrap() runs only once.
			}
			else
			{
				window.addEventListener('resize', mg.evaluate_wrap, false);
			}
		}
	});
}

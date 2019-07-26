{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 3,
			"revision" : 2,
			"architecture" : "x86",
			"modernui" : 1
		}
,
		"rect" : [ 78.0, 195.0, 857.0, 537.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 630.0, 433.0, 150.0, 20.0 ],
					"style" : "",
					"text" : "pigeon3.maxpat"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-7",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "pigeon2.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ -66.0, -60.0 ],
					"patching_rect" : [ 333.0, 41.0, 221.0, 294.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 349.0, 433.0, 150.0, 20.0 ],
					"style" : "",
					"text" : "pigeon2.maxpat"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 94.0, 433.0, 150.0, 20.0 ],
					"style" : "",
					"text" : "pigeon.maxpat"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "pigeon.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ -387.0, -271.0 ],
					"patching_rect" : [ 80.0, 34.0, 178.0, 382.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"grad1" : [ 0.960784, 0.827451, 0.156863, 0.4 ],
					"grad2" : [ 0.639216, 0.458824, 0.070588, 0.19 ],
					"id" : "obj-5",
					"maxclass" : "panel",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 322.0, 27.0, 250.0, 315.0 ],
					"proportion" : 0.39,
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"grad1" : [ 0.960784, 0.827451, 0.156863, 0.4 ],
					"grad2" : [ 0.639216, 0.458824, 0.070588, 0.19 ],
					"id" : "obj-9",
					"maxclass" : "panel",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 65.0, 27.0, 204.0, 395.0 ],
					"proportion" : 0.39,
					"style" : ""
				}

			}
 ],
		"lines" : [  ],
		"parameters" : 		{
			"obj-6::obj-38" : [ "multislider", "multislider", 0 ],
			"obj-6::obj-8" : [ "live.gain~", "live.gain~", 0 ],
			"obj-7::obj-8" : [ "live.gain~[1]", "live.gain~", 0 ],
			"obj-7::obj-38" : [ "multislider[1]", "multislider", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "pigeon.maxpat",
				"bootpath" : "~/Dropbox/工学社MaxBook/chapter3_patch",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "pigeon2.maxpat",
				"bootpath" : "~/Dropbox/工学社MaxBook/chapter3_patch",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}

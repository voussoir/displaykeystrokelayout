function hasProperty(obj, prop)
{
	return (obj.hasOwnProperty(prop) && obj.prop !== '');
}

function getParameter(val)
{
	var regex = new RegExp('[\\?&#]' + val + '=([^&#]*)');
	var para = regex.exec(document.location.search);

	return para ? decodeURIComponent(para[1]) : null;
}

// custom layout

var layout_folder_name = '';

function getCustomLayout()
{
	layout_folder_name = getParameter('layout');
	
	layout_folder_name = 'layout/' + (layout_folder_name === null || layout_folder_name === '' ? 'QWERTY+mouse' : decodeURIComponent(layout_folder_name));
	
	if($('#load_layout_script').length)
		$('#load_layout_script').remove();

	if(layout_folder_name.charAt(layout_folder_name.length - 1) !== '/')
		layout_folder_name += '/';

	var script = $('<script>').prop
	({
		src: layout_folder_name + 'layout.js',
		id: 'load_layout_script',
		type: 'text/javascript',
		async: false
	});

	document.head.appendChild(script[0]);
}

function loadLayout(layout)
{
	var display_area = $('#display-area');
	display_area.empty();

	var style = '';

	if(hasProperty(layout, 'default_image'))
	{
		style +=
			'.key-image' +
			'{' +
				'background-size:100% 100%;' +
				'background-repeat:no-repeat;' +
				(hasProperty(layout.default_image, 'url') ? 'background-image:url(\'' + layout_folder_name + layout.default_image.url + '\');' : '' ) +
				(hasProperty(layout.default_image, 'x') ? 'left:' + layout.default_image.x + 'px;' : '' ) +
				(hasProperty(layout.default_image, 'y') ? 'top:' + layout.default_image.y + 'px;' : '' ) +
				(hasProperty(layout.default_image, 'w') ? 'width:' + layout.default_image.w + 'px;' : '' ) +
				(hasProperty(layout.default_image, 'h') ? 'height:' + layout.default_image.h + 'px;' : '' ) +
			'}' +
			'.pressed>.key-image' +
			'{' +
				(hasProperty(layout.default_image, 'pressed_url') ? 'background-image:url(\'' + layout_folder_name  + layout.default_image.pressed_url + '\');' : '' ) +
			'}';
	}

	if(hasProperty(layout, 'default_text'))
	{
		style +=
			'.key-text' +
			'{' +
				(hasProperty(layout.default_text, 'font') ? 'font-family:' + layout.default_text.font + ';' : '' ) +
				(hasProperty(layout.default_text, 'size') ? 'font-size:' + layout.default_text.size + 'px;' : '' ) +
				(hasProperty(layout.default_text, 'bold') ? 'font-weight:' + (layout.default_text.bold ? 'bold' : 'normal') + ';' : '' ) +
				(hasProperty(layout.default_text, 'x') ? 'left:' + layout.default_text.x + 'px;' : '' ) +
				(hasProperty(layout.default_text, 'y') ? 'top:' + layout.default_text.y + 'px;' : '' ) +
				(hasProperty(layout.default_text, 'color') ? 'color:' + layout.default_text.color + ';' : '' ) +
			'}' +
			'.pressed .key-text' +
			'{' +
				(hasProperty(layout.default_text, 'pressed_color') ? 'color:' + layout.default_text.pressed_color + ';' : '' ) +
			'}';
	}

	for (item of layout.items)
	{
		var container = document.createElement("div");
		display_area.append(container);
		container.classList.add('key-container')
		container.classList.add('key-' + item.text.key_code);
		if (hasProperty(item.text, 'key_code2'))
		{
			container.classList.add('key-' + item.text.key_code2);
		}

		const key_image = document.createElement("div");
		container.append(key_image);
		key_image.classList.add('key-image')

		if(hasProperty(item.image, 'x'))
		{
			key_image.style.left = item.image.x + "px";
		}
		if(hasProperty(item.image, 'y'))
		{
			key_image.style.top = item.image.y + "px";
		}
		if(hasProperty(item.image, 'w'))
		{
			key_image.style.width = item.image.w + "px";
		}
		if(hasProperty(item.image, 'h'))
		{
			key_image.style.height = item.image.h + "px";
		}
		if(hasProperty(item.image, 'url'))
		{
			style +=
				'.key-' + item.text.key_code + '>.key-image' +
				'{background-image:url(\'' + layout_folder_name  + item.image.url + '\');}';
		}
		if(hasProperty(item.image, 'pressed_url'))
		{
			style +=
				'.key-' + item.text.key_code + '.pressed>.key-image' +
				'{background-image:url(\'' + layout_folder_name  + item.image.pressed_url + '\');}';
		}

		const key_text = document.createElement("div");
		key_image.append(key_text);
		key_text.classList.add('key-text')

		if(hasProperty(item.text, 'x'))
		{
			key_text.style.left = item.text.x;
		}
		if(hasProperty(item.text, 'y'))
		{
			key_text.style.top = item.text.y;
		}
		if(hasProperty(item.text, 'size'))
		{
			key_text.style.fontSize = item.text.size;
		}
		if(hasProperty(item.text, 'bold'))
		{
			key_text.style.fontWeight = item.text.bold ? 'bold' : 'normal';
		}
		if(hasProperty(item.text, 'font'))
		{
			key_text.style.fontFamily = item.text.font;
		}
		if(hasProperty(item.text, 'color'))
		{
			style +=
				'.key-' + item.text.key_code + ' .key-text' +
				'{color:' + item.text.color + ';}';
		}
		if(hasProperty(item.text, 'pressed_color'))
		{
			style +=
				'.key-' + item.text.key_code + '.pressed .key-text' +
				'{color:' + item.text.pressed_color + ';}';
		}

		if (hasProperty(item.text, 'text'))
		{
			key_text.innerHTML = item.text.text;
		}
	}

	$('head').append($('<style>').attr('id', 'inputdisplay-style').html(style));
}

function set_bg_size()
{
	var bg = $("#bg")[0];
	var keys = $(".key-image");
	var left = null;
	var top = null;
	var right = null;
	var bottom = null;
	for (var index = 0; index < keys.length; index += 1)
	{
		var key = keys[index];
		var kleft = key.offsetLeft;
		var kright = kleft + key.offsetWidth;
		var ktop = key.offsetTop;
		var kbottom = ktop + key.offsetHeight
		if (left === null || kleft < left)
		{
			left = kleft;
		}
		if (top === null || ktop < top)
		{
			top = ktop;
		}
		if (right === null || kright > right)
		{
			right = kright;
		}
		if (bottom === null || kbottom > bottom)
		{
			bottom = kbottom;
		}
	}
	var width = right - left;
	var height = bottom - top;
	bg.style.left = left + "px";
	bg.style.top = top + "px";
	bg.style.width = width + "px";
	bg.style.height = height + "px";
}

// KeystrokeClient events

KeystrokeClient.onConnect = function()
{
	$('#disconnect-screen').addClass('connected');
	set_bg_size();
};

KeystrokeClient.onDisconnect = function()
{
	$('#disconnect-screen').removeClass('connected');
	$('.pressed').removeClass('pressed');
};

var mouse_wheel_up_timer = null;
var mouse_wheel_down_timer = null;

KeystrokeClient.onKeyDown = function(key_code)
{
	var container = $('.key-' + key_code);
	if(container.length)
	{
		container.addClass('pressed');

		switch(key_code)
		{
		case '0a': // mouse wheel up
			if(mouse_wheel_up_timer !== null)
				clearTimeout(mouse_wheel_up_timer);
			mouse_wheel_up_timer = setTimeout(function() { mouse_wheel_up_timer = null; container.removeClass('pressed'); }, 100);
			break;

		case '0b': // mouse wheel down
			if(mouse_wheel_down_timer !== null)
				clearTimeout(mouse_wheel_down_timer);
			mouse_wheel_down_timer = setTimeout(function() { mouse_wheel_down_timer = null; container.removeClass('pressed'); }, 100);
			break;
		}
	}
};

KeystrokeClient.onKeyUp = function(key_code)
{
	var container = $('.key-' + key_code);
	if(container.length)
		container.removeClass('pressed');
};

KeystrokeClient.onMouseMove = function(data)
{
/*
	var display_mouse = $('#display-mouse');
	if(display_mouse.length === 0)
	{
		display_mouse = $('<div></div>').prop({id: 'display-mouse'}).css({position: 'fixed', color: '#0f0'});
		$('#display-area').append(display_mouse);
	}
	
	display_mouse.text('x:' + data.x + ',y:' + data.y + ',dx:' + data.delta_x + ',dy:' + data.delta_y);
*/
};

window.onload = function(e)
{
	getCustomLayout();
	KeystrokeClient.start(host_ip, host_port);
};
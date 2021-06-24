loadLayout(
{
	default_image: { w: 50, h: 50, url: 'pic/key.png', pressed_url: 'pic/pressed.png' },
	default_text: { x: 12, y: 6, size: 14, bold: true, font: 'Arial, Helvetica, sans-serif', color: '#ffffff', pressed_color: '#000000' },
	items:
	[
// mouse
		{	// mouse body
			image: { url: 'pic/mouse.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '00' }
		},
		{	// mouse left button
			image: { pressed_url: 'pic/mouse_l_btn.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '01' }
		},
		{	// mouse right button
			image: { pressed_url: 'pic/mouse_r_btn.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '02' }
		},
		{	// mouse middle button
			image: { pressed_url: 'pic/mouse_m_btn.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '04' }
		},
		{	// mouse wheel up
			image: { pressed_url: 'pic/mouse_wheel_up.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '0a' }
		},
		{	// mouse wheel down
			image: { pressed_url: 'pic/mouse_wheel_down.png', w: 200, h: 300, x: 0, y: 50 },
			text: { key_code: '0b' }
		},
// function keys
		{
			image: { x: 275, y: 0 },
			text: { key_code: '7c', text: 'F13', size: 12, bold: false }
		},
		{
			image: { x: 325, y: 0 },
			text: { key_code: '7d', text: 'F14', size: 12, bold: false }
		},
		{
			image: { x: 375, y: 0 },
			text: { key_code: '7e', text: 'F15', size: 12, bold: false }
		},
		{
			image: { x: 425, y: 0 },
			text: { key_code: '7f', text: 'F16', size: 12, bold: false }
		},
		{
			image: { x: 500, y: 0 },
			text: { key_code: '80', text: 'F17', size: 12, bold: false }
		},
		{
			image: { x: 550, y: 0 },
			text: { key_code: '81', text: 'F18', size: 12, bold: false }
		},
		{
			image: { x: 600, y: 0 },
			text: { key_code: '82', text: 'F19', size: 12, bold: false }
		},
		{
			image: { x: 650, y: 0 },
			text: { key_code: '83', text: 'F20', size: 12, bold: false }
		},
		{
			image: { x: 725, y: 0 },
			text: { key_code: '84', text: 'F21', size: 12, bold: false }
		},
		{
			image: { x: 775, y: 0 },
			text: { key_code: '85', text: 'F22', size: 12, bold: false }
		},
		{
			image: { x: 825, y: 0 },
			text: { key_code: '86', text: 'F23', size: 12, bold: false }
		},
		{
			image: { x: 875, y: 0 },
			text: { key_code: '87', text: 'F24', size: 12, bold: false }
		},
		{
			image: { x: 212.5, y: 50 },
			text: { key_code: '1b', text: 'Esc', size: 12, bold: false }
		},
		{
			image: { x: 275, y: 50 },
			text: { key_code: '70', text: 'F1', size: 12, bold: false }
		},
		{
			image: { x: 325, y: 50 },
			text: { key_code: '71', text: 'F2', size: 12, bold: false }
		},
		{
			image: { x: 375, y: 50 },
			text: { key_code: '72', text: 'F3', size: 12, bold: false }
		},
		{
			image: { x: 425, y: 50 },
			text: { key_code: '73', text: 'F4', size: 12, bold: false }
		},
		{
			image: { x: 500, y: 50 },
			text: { key_code: '74', text: 'F5', size: 12, bold: false }
		},
		{
			image: { x: 550, y: 50 },
			text: { key_code: '75', text: 'F6', size: 12, bold: false }
		},
		{
			image: { x: 600, y: 50 },
			text: { key_code: '76', text: 'F7', size: 12, bold: false }
		},
		{
			image: { x: 650, y: 50 },
			text: { key_code: '77', text: 'F8', size: 12, bold: false }
		},
		{
			image: { x: 725, y: 50 },
			text: { key_code: '78', text: 'F9', size: 12, bold: false }
		},
		{
			image: { x: 775, y: 50 },
			text: { key_code: '79', text: 'F10', size: 12, bold: false }
		},
		{
			image: { x: 825, y: 50 },
			text: { key_code: '7a', text: 'F11', size: 12, bold: false }
		},
		{
			image: { x: 875, y: 50 },
			text: { key_code: '7b', text: 'F12', size: 12, bold: false }
		},
// Number line
		{
			image: { x: 225, y: 112.5 },
			text: { key_code: 'c0', text: '~<br>`' }
		},
		{
			image: { x: 275, y: 112.5 },
			text: { key_code: '31', text: '1' }
		},
		{
			image: { x: 325, y: 112.5 },
			text: { key_code: '32', text: '2' }
		},
		{
			image: { x: 375, y: 112.5 },
			text: { key_code: '33', text: '3' }
		},
		{
			image: { x: 425, y: 112.5 },
			text: { key_code: '34', text: '4' }
		},
		{
			image: { x: 475, y: 112.5 },
			text: { key_code: '35', text: '5' }
		},
		{
			image: { x: 525, y: 112.5 },
			text: { key_code: '36', text: '6' }
		},
		{
			image: { x: 575, y: 112.5 },
			text: { key_code: '37', text: '7' }
		},
		{
			image: { x: 625, y: 112.5 },
			text: { key_code: '38', text: '8' }
		},
		{
			image: { x: 675, y: 112.5 },
			text: { key_code: '39', text: '9' }
		},
		{
			image: { x: 725, y: 112.5 },
			text: { key_code: '30', text: '0' }
		},
		{
			image: { x: 775, y: 112.5 },
			text: { key_code: 'bd', text: '&#9472;<br>-' }
		},
		{
			// Backspace
			image: { x: 825, y: 112.5, w: 100 },
			text: { key_code: '08', text: '&#11013;' }
		},
// Q-row
		{
			image: { x: 200, y: 162.5, w: 75, },
			text: { key_code: '09', text: 'Tab', size: 12, bold: false }
		},
		{
			image: { x: 275, y: 162.5 },
			text: { key_code: '51', text: 'Q' }
		},
		{
			image: { x: 325, y: 162.5 },
			text: { key_code: '57', text: 'W' }
		},
		{
			image: { x: 375, y: 162.5 },
			text: { key_code: '45', text: 'E' }
		},
		{
			image: { x: 425, y: 162.5 },
			text: { key_code: '52', text: 'R' }
		},
		{
			image: { x: 475, y: 162.5 },
			text: { key_code: '54', text: 'T' }
		},
		{
			image: { x: 525, y: 162.5 },
			text: { key_code: '59', text: 'Y' }
		},
		{
			image: { x: 575, y: 162.5 },
			text: { key_code: '55', text: 'U' }
		},
		{
			image: { x: 625, y: 162.5 },
			text: { key_code: '49', text: 'I' }
		},
		{
			image: { x: 675, y: 162.5 },
			text: { key_code: '4f', text: 'O' }
		},
		{
			image: { x: 725, y: 162.5 },
			text: { key_code: '50', text: 'P' }
		},
		{
			image: { x: 775, y: 162.5 },
			text: { key_code: 'db', text: '{<br>[' }
		},
		{
			image: { x: 825, y: 162.5 },
			text: { key_code: 'dd', text: '}<br>]' }
		},
		{
			image: { x: 875, y: 162.5 },
			text: { key_code: 'dc', text: '|<br>\\' }
		},
// A-row
		{
			image: { x: 200, y: 212.5, w: 75 },
			text: { key_code: '14', text: 'Caps', size: 12, bold: false }
		},
		{
			image: { x: 275, y: 212.5 },
			text: { key_code: '41', text: 'A' }
		},
		{
			image: { x: 325, y: 212.5 },
			text: { key_code: '53', text: 'S' }
		},
		{
			image: { x: 375, y: 212.5 },
			text: { key_code: '44', text: 'D' }
		},
		{
			image: { x: 425, y: 212.5 },
			text: { key_code: '46', text: 'F' }
		},
		{
			image: { x: 475, y: 212.5 },
			text: { key_code: '47', text: 'G' }
		},
		{
			image: { x: 525, y: 212.5 },
			text: { key_code: '48', text: 'H' }
		},
		{
			image: { x: 575, y: 212.5 },
			text: { key_code: '4a', text: 'J' }
		},
		{
			image: { x: 625, y: 212.5 },
			text: { key_code: '4b', text: 'K' }
		},
		{
			image: { x: 675, y: 212.5 },
			text: { key_code: '4c', text: 'L' }
		},
		{
			image: { x: 725, y: 212.5 },
			text: { key_code: 'ba', text: ':<br>;' }
		},
		{
			image: { x: 775, y: 212.5 },
			text: { key_code: 'de', text: '\"<br>\'' }
		},
		{
			// Enter
			image: { x: 825, y: 212.5, w: 100 },
			text: { key_code: '0d', text: 'Enter', size: 12, bold: false }
		},
// Z-row
		{	// left shift
			image: { x: 200, y: 262.5, w: 75 },
			text: { key_code: 'a0', text: 'Shift', size: 12, bold: false }
		},
		{
			image: { x: 275, y: 262.5 },
			text: { key_code: '5a', text: 'Z' }
		},
		{
			image: { x: 325, y: 262.5 },
			text: { key_code: '58', text: 'X' }
		},
		{
			image: { x: 375, y: 262.5 },
			text: { key_code: '43', text: 'C' }
		},
		{
			image: { x: 425, y: 262.5 },
			text: { key_code: '56', text: 'V' }
		},
		{
			image: { x: 475, y: 262.5 },
			text: { key_code: '42', text: 'B' }
		},
		{
			image: { x: 525, y: 262.5 },
			text: { key_code: '4e', text: 'N' }
		},
		{
			image: { x: 575, y: 262.5 },
			text: { key_code: '4d', text: 'M' }
		},
		{
			image: { x: 625, y: 262.5 },
			text: { key_code: 'bc', text: '&#60;<br>,' }
		},
		{
			image: { x: 675, y: 262.5 },
			text: { key_code: 'be', text: '&#62;<br>.' }
		},
		{
			image: { x: 725, y: 262.5 },
			text: { key_code: 'bf', text: '?<br>/' }
		},
		{	// right shift
			image: { x: 775, y: 262.5, w: 100 },
			text: { key_code: '1a1', text: 'Shift', size: 12, bold: false }
		},
		{
			image: { x: 875, y: 262.5 },
			text: { key_code: 'bb', text: '+<br>=' }
		},
// Ctrl row
		{	// left ctrl
			image: { x: 200, y: 312.5, w: 75 },
			text: { key_code: 'a2', text: 'Ctrl', size: 12, bold: false }
		},
		{	// left win
			image: { x: 275, y: 312.5 },
			text: { key_code: '15b', text: 'Win', size: 12, bold: false }
		},
		{	// left alt
			image: { x: 325, y: 312.5 },
			text: { key_code: 'a4', text: 'Alt', size: 12, bold: false }
		},
		{	// space bar
			image: { x: 375, y: 312.5, w: 300 },
			text: { key_code: '20', text: '' }
		},
		{	// right alt
			image: { x: 675, y: 312.5 },
			text: { key_code: '1a5', text: 'Alt', size: 12, bold: false }
		},
		{	// context
			image: { x: 725, y: 312.5 },
			text: { key_code: '15d', text: 'Ctx', size: 12, bold: false }
		},
		{	// right ctrl
			image: { x: 775, y: 312.5, w: 75 },
			text: { key_code: '1a3', text: 'Ctrl', size: 12, bold: false }
		},
// extend pad
		{
			image: { x: 937.5, y: 0 },
			text: { key_code: '91', text: 'ScLck', size: 9, bold: false }
		},
		{
			image: { x: 987.5, y: 0 },
			text: { key_code: '190', text: 'NumLck', size: 9, bold: false }
		},
		{
			image: { x: 937.5, y: 50 },
			text: { key_code: '12c', text: 'Print', size: 9, bold: false }
		},
		{
			image: { x: 987.5, y: 50 },
			text: { key_code: '13', text: 'Pause', size: 9, bold: false }
		},
// Korean
		{
			image: { x: 1050, y: 50 },
			text: { key_code: '15', text: 'A/한', size: 9, bold: false }
		},
		{
			image: { x: 1100, y: 50 },
			text: { key_code: '19', text: '한자', size: 9, bold: false }
		},
// Home-End
		{
			image: { x: 937.5, y: 112.5 },
			text: { key_code: '124', text: 'Home', size: 9, bold: false }
		},
		{
			image: { x: 987.5, y: 112.5 },
			text: { key_code: '123', text: 'End', size: 9, bold: false }
		},
		{
			image: { x: 937.5, y: 162.5 },
			text: { key_code: '12d', text: 'Insert', size: 9, bold: false }
		},
		{
			image: { x: 987.5, y: 162.5 },
			text: { key_code: '121', text: 'Pgup', size: 9, bold: false }
		},
		{
			image: { x: 937.5, y: 212.5 },
			text: { key_code: '12e', text: 'Delete', size: 9, bold: false }
		},
		{
			image: { x: 987.5, y: 212.5 },
			text: { key_code: '122', text: 'Pgdn', size: 9, bold: false }
		},
// Arrow keys
		{	// up
			image: { x: 937.5, y: 275 },
			text: { key_code: '126', text: '&#8593;' }
		},
		{	// left
			image: { x: 887.5, y: 325 },
			text: { key_code: '125', text: '&#8592;' }
		},
		{	// down
			image: { x: 937.5, y: 325 },
			text: { key_code: '128', text: '&#8595;' }
		},
		{	// right
			image: { x: 987.5, y: 325 },
			text: { key_code: '127', text: '&#8594;' }
		},
// Numpad
		{	// Numpad backspace
			image: { x: 1050, y: 112.5 },
			text: { key_code: '19', text: '&#11013;' }
		},
		{	// Num /
			image: { x: 1100, y: 112.5 },
			text: { key_code: '16f', text: '/' }
		},
		{	// Num *
			image: { x: 1150, y: 112.5 },
			text: { key_code: '6a', text: '*' }
		},
		{	// Num -
			image: { x: 1200, y: 112.5 },
			text: { key_code: '6d', text: '-' }
		},
		{	// Num 7
			image: { x: 1050, y: 162.5 },
			text: { key_code: '67', key_code2: '24', text: '7' }
		},
		{	// Num 8
			image: { x: 1100, y: 162.5 },
			text: { key_code: '68', key_code2: '26', text: '8' }
		},
		{	// Num 9
			image: { x: 1150, y: 162.5 },
			text: { key_code: '69', key_code2: '21', text: '9' }
		},
		{	// Num +
			image: { x: 1200, y: 162.5, h: 100 },
			text: { key_code: '6b', text: '+' }
		},
		{	// Num 4
			image: { x: 1050, y: 212.5 },
			text: { key_code: '64', key_code2: '25', text: '4' }
		},
		{	// Num 5
			image: { x: 1100, y: 212.5 },
			text: { key_code: '65', key_code2: '0c', text: '5' }
		},
		{	// Num 6
			image: { x: 1150, y: 212.5 },
			text: { key_code: '66', key_code2: '27', text: '6' }
		},
		{	// Num 1
			image: { x: 1050, y: 262.5 },
			text: { key_code: '61', key_code2: '23', text: '1' }
		},
		{	// Num 2
			image: { x: 1100, y: 262.5 },
			text: { key_code: '62', key_code2: '28', text: '2' }
		},
		{	// Num 3
			image: { x: 1150, y: 262.5 },
			text: { key_code: '63', key_code2: '22', text: '3' }
		},
		{	// Num Enter
			image: { x: 1200, y: 262.5, h: 100 },
			text: { key_code: '10d', text: 'Enter', size: 9, bold: false }
		},
		{	// Num 0
			image: { x: 1050, y: 312.5, w: 100 },
			text: { key_code: '60', key_code2: '2d', text: '0' }
		},
		{	// Num .
			image: { x: 1150, y: 312.5 },
			text: { key_code: '6e', key_code2: '2e', text: '.' }
		},
	]
}
);
/* CURRENTLY IN: javascript/main.js */

/*
	YOU ARE TO CREATE A SIMPLE POPUP

    If user clicks the 'popup' button, show popup
    If user clicks the 'x' button, hide popup
    If user clicks the 'Ok' button, hide popup

	PHASE 1:
		* w/partner: SIMPLY __COMMENT__ out all these lines of code 
		  so that you are clear as to what is happening. feel free to console.log
		  as you see fit
	
	PHASE 2:
        * If user clicks the 'popup' button, show popup
        * If user clicks the 'x' button, hide popup
        * If user clicks the 'Ok' button, hide popup

	PHASE 3:
        * create a concept of "isAck" which will not show the popup if the user
        * clicks the 'Ok' button

	PHASE 4:
        * imagine this is a 'cookie warning' popup. Display the popup as soon as page loads, if the user clicks 'ok' do not show the popup again
        * ...this means if the user reload the page, popup should not show up
        * if the user clicks 'x', hide the popup but if user reloads show the popup again
*/

const addClass = ($target, className) => {
    if ($target === null) return false;
    if (typeof className !== "string") return false;

    $target.classList.add(className);
    return true;
}

const removeClass = ($target, className) => {
    if ($target === null) return false;
    if (typeof className !== "string") return false;

    $target.classList.remove(className);
    return true;
}

const isOpen = false;
const $opener = document.querySelector('.js-popup-opener');
const $popup = document.querySelector('.js-popup');
const $close = document.querySelector('.js-popup-close');
const $ack = document.querySelector('.js-popup-ack');


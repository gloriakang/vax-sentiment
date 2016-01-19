//*******************************************
// Custom Icon Animation .JS Fragment File
//-------------------------------------------
// This is loaded by main.js based on the dynamic feed. 
// Sample values for local testing are at the bottom of index.html
// See main.js for other vars/functions, but do not modify main.js
//*****************************************************************
var iconAnimationName = "Clock"; // Replace this with the icon/animation name
var iconAnimationVersion = 2.1; // Replace this with your version name
var spriteSheetName = "spritesheet_clock.png";
var spriteSheet = new Image();

// For rescaling the sprite animations on other unit sizes 
// like 160x600, 300x600, 728x90 & 336x280
var iconUnitScale = 1.3; // We compute scale = 1 based on 300x250
var iconRegistrationX = 0; // Null registration point of animation. Adjust as needed on other unit sizes (728x90, 160x600 etc)
var iconRegistrationY = 0; // 0, 0 is based on the 300x250
var svgWidth = 300;
var svgHeight = 600;

// From Dynamic API
// Is 1 by default. Change accordingly
var iconAnimationStartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Icon_Animation); //Start_Time_Icon_Animation
var copyBatch2StartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Text_2); //Start_Time_Icon_Animation
var clock;
var clockParts = [];
var clockPartCount = 9;
var clockPartStartX = [-99, 101, 37, -54, -32, 74, -15, -3, 29];
var clockPartStartY = [11, 20, 0, -2, -13, 32, 10, 39, 24];
var clockPartEndX = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var clockPartEndY = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var handShort;
var handShortParts = [];
var handShortPartCount = 3;
var handShortStartX = [-32, -19, 18];
var handShortStartY = [23, 32, 17];
var handShortEndX = [0, 0, 0];
var handShortEndY = [0, 0, 0];
var handShortRotation = 360;

var handLong;
var handLongParts = [];
var handLongPartCount = 3;
var handLongStartX = [-40, -21, 21];
var handLongStartY = [-11, -10, -12];
var handLongEndX = [0, 0, 0];
var handLongEndY = [0, 0, 0];
var handLongRotation = 360;


var iconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 600" enable-background="new 0 0 300 600"><g id="clock"><path id="clock0" fill="#ea594a" d="m120.88 350.2h-29.68l29.09-29.1h29.69z"/><path id="clock1" fill="#d14132" d="m120.88 350.21l29.1-29.1 29.1 29.1z"/><g fill="#db4436"><path id="clock2" d="m179.75 321.11h-29.79l29.06 29.05h29.78z"/><path id="clock3" d="m91.2 350.2h58.785v58.784h-58.785z"/></g><path id="clock4" fill="#ea594a" d="m149.98 408.98v-58.82h58.82z"/><path id="clock5" fill="#d14132" d="m208.8 350.16v58.82h-58.82z"/><path id="clock6" fill="#db4436" d="m120.29 438.08h29.72l-29.09-29.1h-29.72z"/><path id="clock7" fill="#d14132" d="m179.12 408.98l-29.1 29.1-29.1-29.1z"/><path id="clock8" fill="#ea594a" d="m179.12 408.99h29.68l-29.09 29.09h-29.69z"/></g><g id="handshort"><path id="handshort0" fill="#e6e7e8" d="m143.34 388.84v-10.69h10.69z"/><path id="handshort1" fill="#f1f1f2" d="m164.72 388.84h-21.38l10.69-10.69h21.39z"/><path id="handshort2" fill="#e6e7e8" d="m175.42 378.15v10.69h-10.7z"/></g><g id="handlong"><path id="handlong0" fill="#e6e7e8" d="m154.03 388.84h-10.69v-10.69z"/><path id="handlong1" fill="#f1f1f2" d="m143.34 378.15v-42.76l10.69 10.69v42.76z"/><path id="handlong2" fill="#e6e7e8" d="m143.34 335.39h10.69v10.69z"/></g></svg>';

//****************************************************
// PUT YOUR CUSTOM CODE BELOW 
// You can delete everything between the dotted lines
//****************************************************
//-----------------------------------------------------------------

//*******************************
//	DEFINE YOUR GLOBAL VARS HERE
//*******************************
// Sample code below is safe to delete

//*******************************
// Dynamically create your icon DIV sprite holders here
// Inside is just sample code, safe to delete
//*******************************
function createIconParts()
{
	var i = 0;
	var tempX = 0;
	var tempY = 0;
	var tempRange = 40;
	var iconHolder = $("#iconHolder");

	TweenLite.to(iconHolder, 0, {opacity:0}); // hide icon holder while contents are initialized
	iconHolder.innerHTML = iconSVG; // attach SVG to HTML
	TweenLite.to(iconHolder, 0, {width:svgWidth, height:svgHeight, x:iconRegistrationX, y:iconRegistrationY});

	clock = $("#clock");
	for (i = 0; i < clockPartCount; i ++)
	{
		tempX = clockPartStartX[i] * iconUnitScale + iconRegistrationX;
		tempY = clockPartStartY[i] * iconUnitScale + iconRegistrationY;
		//tempY = tempRange - Math.random() * tempRange * 2;
		clockParts[i] = $("#clock" + i);
		TweenLite.to(clockParts[i], 0, {opacity:0, x:tempX, y:tempY});
	}

	handShort = $("#handshort");
	for (i = 0; i < handShortPartCount; i ++)
	{
		tempX = handShortStartX[i] * iconUnitScale + iconRegistrationX;
		tempY = handShortStartY[i] * iconUnitScale + iconRegistrationY;
		handShortParts[i] = $("#handshort" + i);
		TweenLite.to(handShortParts[i], 0, {opacity:0, x:tempX, y:tempY});
	}

	handLong = $("#handlong");
	for (i = 0; i < handLongPartCount; i ++)
	{
		tempX = handLongStartX[i] * iconUnitScale + iconRegistrationX;
		tempY = handLongStartY[i] * iconUnitScale + iconRegistrationY;
		handLongParts[i] = $("#handlong" + i);
		TweenLite.to(handLongParts[i], 0, {opacity:0, x:tempX, y:tempY});
	}

	TweenLite.to(iconHolder, 0, {opacity:1}); // show icon holder after contents are initialized
}

//********************************
// Define your animations here.
// Sample code inside is safe to delete.
//********************************
function initIconAnimations()
{
	// If using GSAP TimelineLite,
	// please use "tlIcon".
	// It is defined in main.js as:
	// var tlIcon = new TimelineLite();
	
	// Timeline Markers Definitions	
	tlIcon.addLabel("dockClock", iconAnimationStartTime);
	tlIcon.addLabel("dockShortHand", iconAnimationStartTime + 2);
	tlIcon.addLabel("dockLongHand", iconAnimationStartTime + 2);
	tlIcon.addLabel("rotateHands", copyBatch2StartTime);
	
	// Animation Definitions
	dockClock();
	dockArms();
	tlIcon.to(handShort, 80, {rotation:handShortRotation, transformOrigin:"7% 50%"}, "rotateHands");
	tlIcon.to(handLong, 15, {rotation:handLongRotation, transformOrigin:"50% 90%"}, "rotateHands");

	// End Animation
}

function dockClock()
{
	var i = 0;
	for (i = 0; i < clockPartCount; i ++)
	{
		tlIcon.to(clockParts[i], 0.3, {opacity:1}, "dockClock");
		tlIcon.to(clockParts[i], 2, {x:(clockPartEndX[i] * iconUnitScale + iconRegistrationX), y:(clockPartEndY[i] * iconUnitScale + iconRegistrationY), ease:Expo.easeInOut, onCompleteParams:[clockParts[i]], onComplete:onTweenComplete}, "dockClock");
	}
}

function dockArms()
{
	var i = 0;
	for (i = 0; i < handShortPartCount; i ++)
	{
		tlIcon.to(handShortParts[i], 0.3, {opacity:1}, "dockShortHand");
		tlIcon.to(handShortParts[i], 2, {x:(handShortEndX[i] * iconUnitScale + iconRegistrationX), y:(handShortEndY[i] * iconUnitScale + iconRegistrationY), ease:Expo.easeInOut, onCompleteParams:[handShortParts[i]], onComplete:onTweenComplete}, "dockShortHand");
	}
	for (i = 0; i < handLongPartCount; i ++)
	{
		tlIcon.to(handLongParts[i], 0.3, {opacity:1}, "dockLongHand");
		tlIcon.to(handLongParts[i], 2, {x:(handLongEndX[i] * iconUnitScale + iconRegistrationX), y:(handLongEndY[i] * iconUnitScale + iconRegistrationY), ease:Expo.easeInOut, onCompleteParams:[handLongParts[i]], onComplete:onTweenComplete}, "dockLongHand");
	}
}

function onTweenComplete(e)
{
	e.style.transform = "initial";
}

// Create and initialize icon parts + animation
createIconParts();
initIconAnimations();

//-----------------------------------------------------------------
//**************************
// DO NOT TOUCH CODE BELOW
//*************************
console.log("Animation: " + iconAnimationName + " ver " + iconAnimationVersion);
console.log("-----");

// play animation once spritesheet is confirmed to have loaded
function onSpriteSheetLoad(e)
{
	// startAnimations is called from main.js
	// it will play the main timeline (tl)
	// + your icon timeline (tlIcon) at the same time
	startAnimations(); // STARTS THE ENTIRE UNIT ANIMATION when SpriteSheet is loaded
}

spriteSheet.addEventListener("load", onSpriteSheetLoad, false);
spriteSheet.src = spriteSheetName;

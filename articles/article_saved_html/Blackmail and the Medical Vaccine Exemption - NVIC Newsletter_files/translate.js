// JavaScript Document

function Translate(lan)
{
window.open('http://www.windowslivetranslator.com/BV.aspx?ref=AddIn&lp='+lan+'&a='+encodeURIComponent(location.href) );  
 
}


       function Navigate() {
           NavSelection = document.getElementById('NavSelect');
           var number = NavSelection.selectedIndex;
           if (NavSelection.options[number].value != "") {
               Translate(NavSelection.options[number].value);
           }
       }

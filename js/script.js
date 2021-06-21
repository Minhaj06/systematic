// Bx Slider
jQuery(document).ready(function(){
    jQuery('.slider_area').bxSlider();
    jQuery('.inner_menu').meanmenu({
      meanMenuContainer: '#mobile_menu',
      meanScreenWidth: 1025,
    });
  });




// Contact Area E-mail Validation
function validate_email(field,alerttxt)
{
with (field)
  {
  apos=value.indexOf("@");
  dotpos=value.lastIndexOf(".");
  if (apos<1||dotpos-apos<2)
    {alert(alerttxt);return false;}
  else {return true;}
  }
}

function validate_form(thisform)
{
with (thisform)
  {
  if (validate_email(email,"Not a valid e-mail address!")==false)
    {email.focus();return false;}
  }
}

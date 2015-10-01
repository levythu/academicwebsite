
$(document).ready(function()
{
    $(".LvLinkedToIMG").each(function(id, dom)
    {
        dom.innerHTML="<a href=\""+$(dom).parent().children("img").attr("src")+"\">"+dom.innerHTML;
    });
});

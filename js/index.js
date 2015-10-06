var index_js={
    haveCollapse: true
}

$(document).ready(function()
{
    $(".LvLinkedToIMG").each(function(id, dom)
    {
        dom.innerHTML="<a href=\""+$(dom).parent().children("img").attr("src")+"\">"+dom.innerHTML+"</a>";
    });
    $(".LvLinkedToINNERIMG").each(function(id, dom)
    {
        dom.innerHTML="<a href=\""+$(dom).children("img").attr("src")+"\">"+dom.innerHTML+"</a>";
    });

});

function collapseLang()
{
    $(".needCollapse").addClass("button_blue_sanborder_collapser");
    $("#langSwitch").removeClass("langSwitchwb");
    index_js.haveCollapse=true;
}
function showLang()
{
    $(".needCollapse").removeClass("button_blue_sanborder_collapser");
    $("#langSwitch").addClass("langSwitchwb");
    index_js.haveCollapse=false;
}

function toggleLang() {
    if (index_js.haveCollapse)
        showLang();
    else
        collapseLang();
}

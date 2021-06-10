export function removeSecondaryLinks(linksParent) {

    $(linksParent).children().remove().end();
}

export function addSecondaryLinks(linksArray) {

    for (var i = 0; i < linksArray.length; i++) {
        $('<a>', {
            "class": 'menu-secondary-link',
            text: linksArray[i]
        }).appendTo('#menu-secondary-links');
    }
}
/*
Code base on:
https://stackoverflow.com/questions/8653025/stop-fixed-position-at-footer
*/

(function limitSocialIconsHeight() {
    let iconsList = document.getElementsByClassName('page-single__follow-us')[0]
    let subscribe = document.getElementsByClassName('subscribe')[0]

    document.addEventListener('scroll', function() {
        let iconsListTop = iconsList.getBoundingClientRect().top
        let subscribeTop = subscribe.getBoundingClientRect().top
        let subscribeOffset = subscribe.offsetHeight
        let iconsListOffSet = iconsList.offsetHeight
        let iconsListSize = iconsList.getBoundingClientRect().height
        let bodyScrollTop = document.body.scrollTop

        if (
            iconsListTop + bodyScrollTop + iconsListOffSet >=
            subscribeTop + bodyScrollTop + subscribeOffset - iconsListSize // iconsListSize is the size of icons list in pixels
        ) {
            iconsList.classList.remove("follow-us--fixed")
            iconsList.classList.add("follow-us--absolute")
        }
        // When scrolls back, returns to its initial position
        if (bodyScrollTop + window.innerHeight + iconsListSize < subscribeTop + bodyScrollTop) {
            iconsList.classList.add("follow-us--fixed")
            iconsList.classList.remove("follow-us--absolute")
        }
    })
})()

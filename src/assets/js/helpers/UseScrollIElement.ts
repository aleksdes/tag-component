const useScrollIElement = (targetElement: any, {behavior = 'smooth', block = 'start', inline = 'start'}: any = {}) => {
    const id = targetElement?.target?.getAttribute('href')?.replace('#', '') ?? targetElement

    const targetDOMElement = document.getElementById(id)

    if (targetDOMElement) {
        targetDOMElement.scrollIntoView({
            behavior,
            block,
            inline,
        })
    }
}

const useScrollBy = (parentElement: any, targetElement: any, {behavior = 'smooth', offsetTop = 0}: any = {}) => {
    const parentElementId = parentElement?.target?.getAttribute('href')?.replace('#', '') ?? parentElement
    const targetElementId = targetElement?.target?.getAttribute('href')?.replace('#', '') ?? targetElement

    const parentDomElement = document.getElementById(parentElementId)
    const targetDOMElement = document.getElementById(targetElementId)

    if (!targetDOMElement || !parentDomElement) return

    const offsetHeight = parentDomElement.offsetHeight
    const targetElementPosition = targetDOMElement.getBoundingClientRect().top
    const targetElementHeight = targetDOMElement.getBoundingClientRect().height

    const offsetPosition = targetElementPosition  - (targetElementHeight/2) - offsetHeight - offsetTop
    if (targetDOMElement && parentDomElement) {
        parentDomElement.scrollBy({
            top: offsetPosition,
            behavior,
        })
    }
}

export {useScrollIElement, useScrollBy}

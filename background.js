

browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message === "change-color") {

        const [tab] = await browser.tabs.query({active: true, currenWindow: true})

        browser.scripting.executeScripting({
            target: {
                tabId: tab.id
            }, 
            func: () => {
                document.body.style.backgroundColor = "pink"
            }
        })
    }
})
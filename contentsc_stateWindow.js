const onMesseage = (request, sender, sendResponse) => {
    window.postMessage({ text : request.text}, "*");
}

chrome.runtime.onMessage.addListener(onMesseage);
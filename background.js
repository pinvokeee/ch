let state = "";

const sendQuery = (tabs) => {

    const target = tabs.find(tab => (tab.url ?? "").indexOf("stateWindow.html") > -1)

    if (target) chrome.tabs.sendMessage(target.id, {
        text: state.text,
    });
}

const onMesseage = (request, sender, sendResponse) => {
    
    console.log(request, sender);

    state = request;

    chrome.tabs.query({ }, sendQuery);
    // chrome.storage.local.set({ text: request.text });
    // localStorage.setItem("test", request.text);
    // console.log("ok");
    sendResponse();
}

chrome.runtime.onMessage.addListener(onMesseage);
  
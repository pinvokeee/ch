const callback = (mutationsList, observer) => {

    chrome.runtime.sendMessage(
    {
        text: document.querySelector("#clock").innerText
    });
};

const targetNode = document.querySelector("#clock");
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

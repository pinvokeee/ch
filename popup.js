
const sendQuery = (tabs) => {
    console.log(tabs);

    for (const tab of tabs) {
        console.log(tab.url);
    }

    // this.close();
}

const handleClick = async () => {

    console.log("test");

    const element = document.querySelector("#test");

    // const w = await chrome.windows.create(
    // {
    //     // alwaysOnTop: true,
    //     // url: stateWindowUrl,
    // });

    // // w.alwaysOnTop = true;

    // console.log(w);

    const a = window.open("");
    a.document.body.innerHTML = `
    <html>
    <head>
    <script type="text/javascript">
        console.log("aaaa");
    </script>
    </head>
    <body>
        <button id="test">AAA</button>
        <script>
        console.log(document.querySelector("#test"));
        document.querySelector("#test").addEventListener("click", () => {

            const pipWindow = await documentPictureInPicture.requestWindow({
                width: 108,
                height: 108,
                copyStyleSheets: true,
            });

        });

        </script>
    </body>
    </html>
    `;

    // const pipWindow = await documentPictureInPicture.requestWindow({
    //     width: 108,
    //     height: 108,
    //     copyStyleSheets: true,
    // });

    // pipWindow.document.body.append(element);

    // 3. ウインドウに`#player`を追加
    //   pipWindow.document.body.append(player);
}

window.addEventListener("load", () => {
    document.querySelector("#button").addEventListener("click", handleClick);
})

chrome.tabs.query({ url: "https://time.is/ja/*" }, sendQuery);

// const stateWindowUrl = `chrome-extension://${chrome.i18n.getMessage("@@extension_id")}/stateWindow.html`;

// chrome.windows.create(
// {
//     url: stateWindowUrl,
// });
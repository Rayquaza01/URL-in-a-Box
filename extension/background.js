browser.storage.local.get("url").then((res) => {
    var url = res.url || "https://wikipedia.org";
    browser.browserAction.setPopup({
        popup: url
    });
});

browser.storage.local.get().then((res) => {
    var url = res.url || "https://wikipedia.org";
    var urlSidebar = res.urlSidebar || "https://wikipedia.org";
    browser.browserAction.setPopup({
        popup: url
    });
    browser.sidebarAction.setPanel({
        panel: urlSidebar
    });
});

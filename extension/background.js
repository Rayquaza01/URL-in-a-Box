browser.storage.local.get().then((res) => {
    var url = res.url || "https://wikipedia.org";
    var title = res.title || "URL in a Box";
    var icon = res.icon || "/icons/icon-96.png";
    var urlSidebar = res.urlSidebar || "https://wikipedia.org";
    var titleSidebar = res.titleSidebar || "URL in a Box";
    var iconSidebar = res.iconSidebar || "/icons/icon-96.png";
    browser.browserAction.setPopup({
        popup: url
    });
    browser.browserAction.setTitle({
        title: title
    });
    browser.browserAction.setIcon({
        path: icon
    });
    browser.sidebarAction.setPanel({
        panel: urlSidebar
    });
    browser.sidebarAction.setTitle({
        title: titleSidebar
    });
    browser.sidebarAction.setIcon({
        path: iconSidebar
    });
});

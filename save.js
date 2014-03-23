var rightClick = chrome.contextMenus.create({
  "title" : "Save using OrganizeDrop",
  "contexts" : ["image","link"] //["page", "image", "link", "selection"]
});
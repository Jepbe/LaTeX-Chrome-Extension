

chrome.runtime.onInstalled.addListener(() => {
    
    chrome.tabs.query({ url: 'https://*.systime.dk/*' }, (tabs) => {
      tabs.forEach(tab => {
        
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
      });
    });
  });
  
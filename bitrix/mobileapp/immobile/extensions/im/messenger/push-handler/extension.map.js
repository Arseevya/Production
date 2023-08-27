{"version":3,"sources":["extension.js"],"names":["jn","define","require","exports","module","Type","Logger","MessengerEvent","MessengerParams","EventType","PushHandler","constructor","this","manager","Application","getNotificationHistory","setOnChangeListener","handleChange","bind","storedPullEvents","getStoredPullEvents","list","concat","BX","onViewLoaded","updateList","get","length","info","isDialogOpen","MessengerStore","getters","forEach","push","data","cmd","senderMessage","isUndefined","aps","alert","body","event","module_id","command","params","ChatDataConverter","preparePushFormat","userInChat","chatId","getUserId","message","text","toString","replace","senderCut","substring","textOriginal","storedEvent","ChatUtils","objectClone","FILE_ID","postWebEvent","filter","id","recentItem","dialogId","PULL","emit","type","moduleId","extra","clear","executeAction","isBackground","getLastNotification","isPlainObject","Object","keys","pushParams","getPushFormat","ACTION","userId","parseInt","messenger","openDialog","send","isOpenlinesOperator","CHAT_TYPE","PageManager","getNavigator","isActiveTab","makeTabActive","postComponentEvent","openNotifications","clearHistory"],"mappings":"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","file":"extension.map.js"}
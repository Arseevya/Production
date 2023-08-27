{"version":3,"sources":["extension.js"],"names":["jn","define","require","exports","module","Loc","Runtime","View","EventType","FeatureFlag","MessengerParams","RecentView","constructor","options","ui","dialogList","super","this","_isLoaderShown","loadNextPageItemId","setCustomEvents","recent","createChat","readAll","loadNextPage","subscribeEvents","initTopMenu","initSections","initChatCreateButton","IntranetInvite","init","isLoaderShown","on","scroll","throttle","onScroll","list","itemWillDisplaySupported","itemWillDisplay","onItemWillDisplay","bind","debounce","topMenuPopup","dialogs","createPopupMenu","topMenuButtons","id","title","getMessage","sectionCode","iconName","topMenuButtonHandler","event","item","emitCustomEvent","setData","setRightButtons","type","callback","showSearchBar","show","setSections","backgroundColor","sortItemParams","order","chatCreateButton","sendCreateChatEvent","icon","animation","color","setFloatingButton","offset","y","contentSize","height","floatingButton","buttonList","sectionList","setItems","items","addItems","updateItems","updateItem","filter","fields","removeItem","itemFilter","findItem","stopRefreshing","showLoader","loader","unselectable","params","disableTap","hideLoader","showWelcomeScreen","get","upperText","lowerText","listener","openRegisterSlider","originator","registerUrl","rootStructureSectionId","adminConfirm","disableAdminConfirm","sharingMessage","text","welcomeScreen","hideWelcomeScreen","hide"],"mappings":"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","file":"extension.map.js"}
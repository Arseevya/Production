{"version":3,"sources":["base.js"],"names":["jn","define","require","exports","module","MarketBanner","TimelineItemHeader","TimelineItemIcon","TimelineItemBody","TimelineItemFooter","TimelineItemBackground","TimelineItemBackgroundLayer","TimelineItemLoadingOverlay","get","EventEmitter","TimelineItemBase","LayoutComponent","constructor","props","super","this","uid","Random","getString","itemScopeEventBus","createWithUid","timelineScopeEventBus","backgroundLayerRef","loadingOverlayRef","containerRef","model","layoutSchema","layout","hasIcon","logo","hasNote","bodyBlocks","Object","values","some","block","rendererName","text","length","backgroundColor","getByModel","hasPlayer","render","renderContainer","renderInnerContent","needShowMarketBanner","onClick","openMarketBannerInfo","onClose","hideMarketBanner","children","View","ref","style","borderRadius","padding","marginBottom","borderColor","borderWidth","hasLowPriority","color","opacity","flexDirection","justifyContent","body","additionalIcon","icon","counterType","onAction","bind","header","useFriendlyDate","isScheduled","isPinned","isReadonly","footer","helpdesk","openHelpArticle","onHideMarketBanner","type","value","actionParams","source","blink","Promise","resolve","fadeOut","animate","duration","fadeIn","showLoader","show","hideLoader","hide"],"mappings":"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","file":"base.map.js"}
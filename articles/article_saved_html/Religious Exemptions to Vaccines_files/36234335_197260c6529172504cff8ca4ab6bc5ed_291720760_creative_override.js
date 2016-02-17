(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_FIRST_QUARTILE: '960584',
      VIDEO_THIRD_QUARTILE: '960585',
      VIDEO_UNMUTE: '149645',
      FULL_SCREEN: '286263',
      DYNAMIC_CREATIVE_IMPRESSION: '536393',
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'background click',
        reportingId: '2273313',
        url: 'http://www.redbull.com/us/en/stream/tags/surfing/chunks?audience\x3d28\x26wtk\x3db65309bcaa904f2bb8bccb9515457f42',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'start here click',
        reportingId: '2273315',
        url: 'http://www.redbull.com/us/en/stream/tags/surfing/chunks?audience\x3d28\x26wtk\x3db65309bcaa904f2bb8bccb9515457f42',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'replay video',
        reportingId: '2273317',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'backup_300x250.jpg',
        url: '/ads/richmedia/studio/pv2/36178773/20150401151647551/backup_300x250.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'redbull_rm_carissa_moore_300x250.swf',
        url: '/ads/richmedia/studio/pv2/36178773/20150401151647551/redbull_rm_carissa_moore_300x250.swf',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
      {
        name: 'WoRB_Carissa Moore_300x250.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/5f4381616aab2efc/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fx-flv/ip/0.0.0.0/ipbits/0/expire/3578339482/sparams/id,itag,source,ratebypass,mime,ip,ipbits,expire/signature/3E26B1903388219F74586BC9B08DB60D14F19CFE.9A7ECB817FE76E557FC59CE9C3D06D9B70C2AEC2/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/5f4381616aab2efc/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3578339482/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/27EE94245C532B3AAA42EDD5BC7765A90B5C5A3F.1A847BEBD5F48EB35CCF40AA63EFE035243F9C34/key/ck2/dummyparam/video?auth\x3ddaEcucbaHcKcNd4d6dxdYaWdJd.cFagdbcu-bvD3kA-x14qa-0tmqYpsts4IGuuARujJt\x26aifp\x3dv001\x26slist\x3did/5f4381616aab2efc/itag/15',
        transcodeInformation: null
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'expand-video',
        startMuted: true,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '',
        mediumBandwidthVideo: '',
        highBandwidthVideo: 'WoRB_Carissa Moore_300x250.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '36180602',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/36178773/20150401151647551/redbull_rm_carissa_moore_300x250_parent.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'opaque',
          sdkVersion: '2.4.4',
          flashBackgroundColor: '',
          allowScriptAccess: 'always'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '62391718';
  var adId = '291720760';
  var templateVersion = '200_85';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();

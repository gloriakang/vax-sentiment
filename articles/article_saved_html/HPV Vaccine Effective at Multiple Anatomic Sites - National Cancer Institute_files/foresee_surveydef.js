var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.1.3',
  'files': '/foresee/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'ZdykBhX9f5FYknEDsngaKg==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'cancer.gov',
  'site_id': 'cancer.gov',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'nci-spanish',
    invite: {
      when: 'onentry',
      //dual language
      dialogs: [{
        reverseButtons: false,
        headline: "Welcome to the National Cancer Institute Web site.",
        blurb: "<br>We Need Your Help!<p>During your visit to our Web site today, you may be asked to participate in a survey about your experience with the site.<p>Your comments will help us to make the site more useful. We appreciate the opportunity to hear from you.<br><br>",
        noticeAboutSurvey: "Are you willing to participate in our survey?<br>",
        attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
        closeInviteButtonText: "Click to close.",
        declineButton: "No",
        acceptButton: "Yes",
        locales: {
          "en": {
            locale: "en"
          },
          "sp": {
            locale: "sp"
          }
        }
      },
      {
        reverseButtons: false,
        headline: "Welcome to the National Cancer Institute Web site.",
        blurb: "We Need Your Help!<br><br>During your visit to our Web site today, you may be asked to participate in a survey about your experience with the site.<br><br>Your comments will help us to make the site more useful. We appreciate the opportunity to hear from you.",
        noticeAboutSurvey: "Are you willing to participate in our survey?",
        attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
        closeInviteButtonText: "Click to close.",
        declineButton: "No",
        acceptButton: "Yes",
        locales: {
          "en": {
            headline: "Gracias por visitar el sitio web en español del Instituto Nacional del Cáncer.",
            blurb: "¡Necesitamos su ayuda!<p>Su opinión es muy importante.<p>Durante su visita a nuestro sitio web hoy, posiblemente le pediremos que participe en una encuesta sobre su visita. Sus comentarios nos ayudarán a mejorar nuestro sitio.",
            noticeAboutSurvey: "Por favor, haga clic en Sí para compartir su opinión con nosotros.",
            attribution: "Esta encuesta se realiza a través de una empresa independiente, ForeSee, en nombre del sitio que usted está visitando.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No Gracias",
            acceptButton: "Sí",
            locale: "sp"
          },
          "sp": {
            headline: "Gracias por visitar el sitio web en español del Instituto Nacional del Cáncer.",
            blurb: "¡Necesitamos su ayuda!<p>Su opinión es muy importante.<p>Durante su visita a nuestro sitio web hoy, posiblemente le pediremos que participe en una encuesta sobre su visita. Sus comentarios nos ayudarán a mejorar nuestro sitio.",
            noticeAboutSurvey: "Por favor, haga clic en Sí para compartir su opinión con nosotros.",
            attribution: "Esta encuesta se realiza a través de una empresa independiente, ForeSee, en nombre del sitio que usted está visitando.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No Gracias",
            acceptButton: "Sí",
          }
        }
      }]
    },
    lock: 1,
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 100,
      lf: 2
    },
    include: {
      urls: ['/espanol', '/diccionario', 'lang=spanish']
    }
  },
  {
    name: 'nci-main',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 10,
      lf: 2
    },
    lock: 1,
    links: {
      cancel: [{
        tag: 'a',
        attribute: 'href',
        patterns: ['xlivehelp']
      }]
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 60,

    repeatoverride: false,

    altcookie: {},

    language: {
      locale: 'en'
    },

    exclude: {},

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /*mobile on exit heartbeat delay seconds*/
      max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      //alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Welcome to the National Cancer Institute Web site.",
          blurb: "We Need Your Help!<p>During your visit to our Web site today, you may be asked to participate in a survey about your experience with the site.<p>Your comments will help us to make the site more useful. We appreciate the opportunity to hear from you.",
          noticeAboutSurvey: "Are you willing to participate in our survey?",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No",
          acceptButton: "Yes",
          error: "Error",
          warnLaunch: "this will launch a new window"

        }]
      ],

      exclude: {
        urls: [/ncicancerbulletin/gi, /resultscancerbulletin.aspx/gi, /cb[a-zA-Z0-9-\.]*\.aspx/gi],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [],
        variables: []
      },
      include: {
        local: ['.']
      },

      delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      //SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the browser
      fasttimeout: 4,

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.',
        locales: [{
          locale: 'en',
          message: 'The survey is now available.'
        },
        {
          locale: 'sp',
          message: 'Su encuesta se encuentra ahora disponible.'
        }]
      },
      url: 'tracker.html',
      locales: [{
        locale: 'en',
        url: 'tracker.html'
      },
      {
        locale: 'sp',
        url: 'tracker_sp.html'
      }]
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: false,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {}
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {},

    mode: 'hybrid'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);
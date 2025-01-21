"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[468],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7905:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={title:"CLI",sidebar_position:5},o=void 0,s={unversionedId:"cli",id:"cli",title:"CLI",description:"Commands",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/buzz/docs/cli",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CLI",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Preferences",permalink:"/buzz/docs/preferences"},next:{title:"FAQ",permalink:"/buzz/docs/faq"}},l={},p=[{value:"Commands",id:"commands",level:2},{value:"<code>add</code>",id:"add",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"add"},(0,r.kt)("inlineCode",{parentName:"h3"},"add")),(0,r.kt)("p",null,"Start a new transcription task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: buzz add [options] [file url file...]\n\nOptions:\n  -t, --task <task>              The task to perform. Allowed: translate,\n                                 transcribe. Default: transcribe.\n  -m, --model-type <model-type>  Model type. Allowed: whisper, whispercpp,\n                                 huggingface, fasterwhisper, openaiapi. Default:\n                                 whisper.\n  -s, --model-size <model-size>  Model size. Use only when --model-type is\n                                 whisper, whispercpp, or fasterwhisper. Allowed:\n                                 tiny, base, small, medium, large. Default:\n                                 tiny.\n  --hfid <id>                    Hugging Face model ID. Use only when\n                                 --model-type is huggingface. Example:\n                                 "openai/whisper-tiny"\n  -l, --language <code>          Language code. Allowed: af (Afrikaans), am\n                                 (Amharic), ar (Arabic), as (Assamese), az\n                                 (Azerbaijani), ba (Bashkir), be (Belarusian),\n                                 bg (Bulgarian), bn (Bengali), bo (Tibetan), br\n                                 (Breton), bs (Bosnian), ca (Catalan), cs\n                                 (Czech), cy (Welsh), da (Danish), de (German),\n                                 el (Greek), en (English), es (Spanish), et\n                                 (Estonian), eu (Basque), fa (Persian), fi\n                                 (Finnish), fo (Faroese), fr (French), gl\n                                 (Galician), gu (Gujarati), ha (Hausa), haw\n                                 (Hawaiian), he (Hebrew), hi (Hindi), hr\n                                 (Croatian), ht (Haitian Creole), hu\n                                 (Hungarian), hy (Armenian), id (Indonesian), is\n                                 (Icelandic), it (Italian), ja (Japanese), jw\n                                 (Javanese), ka (Georgian), kk (Kazakh), km\n                                 (Khmer), kn (Kannada), ko (Korean), la (Latin),\n                                 lb (Luxembourgish), ln (Lingala), lo (Lao), lt\n                                 (Lithuanian), lv (Latvian), mg (Malagasy), mi\n                                 (Maori), mk (Macedonian), ml (Malayalam), mn\n                                 (Mongolian), mr (Marathi), ms (Malay), mt\n                                 (Maltese), my (Myanmar), ne (Nepali), nl\n                                 (Dutch), nn (Nynorsk), no (Norwegian), oc\n                                 (Occitan), pa (Punjabi), pl (Polish), ps\n                                 (Pashto), pt (Portuguese), ro (Romanian), ru\n                                 (Russian), sa (Sanskrit), sd (Sindhi), si\n                                 (Sinhala), sk (Slovak), sl (Slovenian), sn\n                                 (Shona), so (Somali), sq (Albanian), sr\n                                 (Serbian), su (Sundanese), sv (Swedish), sw\n                                 (Swahili), ta (Tamil), te (Telugu), tg (Tajik),\n                                 th (Thai), tk (Turkmen), tl (Tagalog), tr\n                                 (Turkish), tt (Tatar), uk (Ukrainian), ur\n                                 (Urdu), uz (Uzbek), vi (Vietnamese), yi\n                                 (Yiddish), yo (Yoruba), zh (Chinese). Leave\n                                 empty to detect language.\n  -p, --prompt <prompt>          Initial prompt.\n  -wt, --word-timestamps         Generate word-level timestamps. (available since 1.2.0)\n  --openai-token <token>         OpenAI access token. Use only when\n                                 --model-type is openaiapi. Defaults to your\n                                 previously saved access token, if one exists.\n  --srt                          Output result in an SRT file.\n  --vtt                          Output result in a VTT file.\n  --txt                          Output result in a TXT file.\n  --hide-gui                     Hide the main application window. (available since 1.2.0)\n  -h, --help                     Displays help on commandline options.\n  --help-all                     Displays help including Qt specific options.\n  -v, --version                  Displays version information.\n\nArguments:\n  files or urls                  Input file paths or urls. Url import availalbe since 1.2.0.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Translate two MP3 files from French to English using OpenAI Whisper API\nbuzz add --task translate --language fr --model-type openaiapi /Users/user/Downloads/1b3b03e4-8db5-ea2c-ace5-b71ff32e3304.mp3 /Users/user/Downloads/koaf9083k1lkpsfdi0.mp3\n\n# Transcribe an MP4 using Whisper.cpp "small" model and immediately export to SRT and VTT files\nbuzz add --task transcribe --model-type whispercpp --model-size small --prompt "My initial prompt" --srt --vtt /Users/user/Downloads/buzz/1b3b03e4-8db5-ea2c-ace5-b71ff32e3304.mp4\n')))}d.isMDXComponent=!0}}]);
javascript:(function(){if(window.location.port!=="")host = window.location.hostname+':'+window.location.port;else host = window.location.hostname;host80 = host+":80";list = {'weather.com':'text for weather','google.com.ua':'text for google','portquiz.net:80':'my portquize 80','portquiz.net:8080':'my portquize 8080'};if(list.hasOwnProperty(host)){document.title = list[host];};if(list.hasOwnProperty(host80)){document.title = list[host80];};void 0; })()
if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/random-word/sw.js', { scope: '/random-word/' })})}
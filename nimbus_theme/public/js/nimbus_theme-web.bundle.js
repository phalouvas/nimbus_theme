import "./gdpr-cookie.js";
import "./particles/particles.js";

if (document.getElementById('nimbus-particles')) {
  particlesJS.load('nimbus-particles', '/assets/nimbus_theme/js/particles/particles.json', function() {
    //console.log('callback - particles.js config loaded');
  });
}
// Service Worker to fix MIME type issues on GitHub Pages
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Intercept JavaScript file requests
  if (url.pathname.endsWith('.js')) {
    event.respondWith(
      fetch(event.request).then(response => {
        // Clone the response and modify headers
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Content-Type', 'application/javascript');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      }).catch(() => {
        // Fallback to original request if fetch fails
        return fetch(event.request);
      })
    );
  }
});
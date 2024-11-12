addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = 'https://api.bhb.us.kg/api/sendMessage';
  const payload = {
    message: 'admin123456'
  };
  
  const headers = {
    'Content-Type': 'application/json'
  };

  const init = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  };

  try {
    const response = await fetch(url, init);
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('Error: ' + error.message, { status: 500 });
  }
}

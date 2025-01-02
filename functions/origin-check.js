// functions/origin-check.js
export default async (request, context) => {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';

  // Check if the request is coming from Roblox Game Server
  const isRobloxGame = userAgent.includes('Roblox');

  if (isRobloxGame) {
    return new Response('<h1>Welcome to the Roblox Game!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } else if (referer.includes('roblox.com')) {
    return new Response('<h1>You are visiting from Roblox Studio!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } else {
    return new Response('<h1>You are not coming from Roblox Game/Studio!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
};

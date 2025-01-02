export default async (request, context) => {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const xRobloxStudio = request.headers.get('X-Roblox-Studio') || ''; // Custom header to help identify Studio Play mode

  // Check if it's coming from Roblox Game Client
  const isRobloxGameClient = userAgent.includes('Roblox/');

  // Check if it's coming from Roblox Studio (Edit Mode)
  const isRobloxStudioEditMode = referer.includes('roblox.com') && userAgent.includes('RobloxStudio/');

  // Check if it's coming from Roblox Studio Play Mode
  const isRobloxStudioPlayMode = xRobloxStudio === 'true'; // Custom header that can be set during Play mode

  if (isRobloxGameClient) {
    return new Response('<h1>Welcome to the Roblox Game Client!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } else if (isRobloxStudioEditMode) {
    return new Response('<h1>You are in Roblox Studio Edit Mode!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } else if (isRobloxStudioPlayMode) {
    return new Response('<h1>You are in Roblox Studio Play Mode!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } else {
    return new Response('<h1>You are not coming from Roblox Game Client or Studio!</h1>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
};

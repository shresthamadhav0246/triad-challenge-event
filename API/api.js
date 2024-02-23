export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkY2I1ODE1My00ZmE1LTQ5OTEtOWM4YS00ZDhmYzM2NWMxOTYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNDE2MDM0NywiZXhwIjoxNzA0MjQ2NzQ3fQ.54Ro30KxUsVnHWrf5_cD3Uc2KQoHYy7lX6ZZktUNYJI";

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};
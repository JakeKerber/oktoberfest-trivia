# 🥨 Kerber OktKerberfest Trivia 🍺

A Kahoot-style trivia game for the backyard/garage party. The TV shows the questions,
and everyone answers on their own phone. Nobody installs an app, and there's no server to run.

## Files

| File | What it is |
|---|---|
| `index.html` | **TV / host page.** Open this on the laptop that's plugged into the TV. |
| `play.html` | **Phone page.** Players get here by scanning the QR code on the TV. |
| `questions.js` | **The questions.** Edit this to add or change questions and to change the game title. |
| `screenshot-*.png` | Previews of the TV and phone screens. You can delete these. |

## How it works

The TV page is the hub and keeps all the game state, including the scores. It registers a
short random room code (like `K7QM`) with the free PeerJS cloud signaling server, then shows a
QR code for `play.html?room=K7QM`. Each phone opens a direct WebRTC data channel to the TV
browser, sends its name and answers, and gets the current question and its own score back.
The internet is only used to set up those connections. Game traffic goes phone ↔ laptop.

- **Reconnects:** if a phone refreshes, sleeps, or drops off Wi-Fi, it rejoins automatically with
  the same name and keeps its score. A player can also type the same name on a different phone
  if their old one is offline. If the TV page is refreshed, it asks **Resume?**, takes back the
  same room code, and the phones reconnect on their own (the test reconnected in about 1–2 seconds).
- **Scoring:** 1 point for each correct answer. With **⚡ Speed bonus** on, the fastest correct
  answer on each question gets an extra +0.5. Team totals are the sum of each team's players' points.

## Running the game (host cheat sheet)

1. Open the hosted URL (see Hosting below) on the laptop, connect the laptop to the TV, and press **F** for fullscreen.
2. Guests scan the QR code (or go to the URL and type the room code), then enter a name and an optional team name.
3. In the lobby, choose: timer (off/15/20/30/45 s), speed bonus, shuffle, number of questions, kid-friendly only.
   To remove a player (for example, a silly name), click their name chip.
4. Play with the keyboard or the buttons at the bottom:

| Key | Action |
|---|---|
| **Space / Enter** | Next step: start → reveal → scoreboard → next question → … → final |
| **S** | Start the game |
| **R** | Reveal the answer (also happens automatically when the timer hits 0) |
| **B** | Show the scoreboard |
| **N** / → | Next question (in the middle of a question, it reveals the answer first) |
| **E** | End the game early and go to the final leaderboard |
| **F** | Fullscreen |
| **H** | Hide/show the control bar |

**🔄 New game** keeps everyone in the room and resets the scores.
To force a completely new room, open `index.html?new`.

## Editing questions

Open `questions.js`. The comment at the top shows the format:

```js
{
  q: "Your question text?",
  choices: ["Option A", "Option B", "Option C", "Option D"],
  answer: 2,            // 0=A, 1=B, 2=C, 3=D
  level: "easy",        // "easy" or "medium"
  kid: true,            // optional: included in "Kid-friendly only" mode
  fact: "Optional fun fact shown after the reveal."
},
```

Every question needs exactly 4 choices. Save the file, upload it again if the game is hosted,
and refresh the TV page. `window.GAME_TITLE` at the top sets the title on the TV and the phones.

## Hosting (phones need a public HTTPS URL), simplest first

### (a) GitHub Pages (recommended; free, permanent, about 5 minutes)
1. On github.com, create a **new public repo** named `oktoberfest-trivia` (New repository → Public).
2. On the repo page, click **Add file → Upload files**, drag in `index.html`, `play.html` and `questions.js`
   (the screenshots and README are optional), then click **Commit changes**.
3. Go to **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → **Save**.
4. After about 1 minute the game is live at **https://jakekerber.github.io/oktoberfest-trivia/**
   (`index.html` is the TV page). Check that the QR code on the TV shows that address.

This needs no command line or tokens. Later edits are just "Upload files" again.

### (b) Netlify Drop
1. Go to **https://app.netlify.com/drop** and drag the whole `oktoberfest-trivia` folder onto the page.
2. You'll get a URL like `https://random-name-123.netlify.app`. Since 2024, a drop made without
   logging in is password-protected and expires unless you claim it, so **log in or sign up (free)
   and claim the site**. Newer Netlify teams create projects as *private* by default, so if guests
   get a login wall, open the project and choose **Make public**.
3. Open that URL on the laptop. The QR code updates to match automatically.

### (c) Fallback: from the laptop on home Wi-Fi (no hosting)
1. In this folder, run `python3 -m http.server 8000` (on Windows: `py -m http.server 8000`).
   Allow it through the firewall if asked.
2. Find the laptop's Wi-Fi IP (macOS: `ipconfig getifaddr en0`, Windows: `ipconfig`, Linux: `hostname -I`), for example `192.168.1.23`.
3. On the laptop, open **`http://192.168.1.23:8000/`**, using the IP address and **not** `localhost`. The QR code
   is built from the address you open, and phones can't reach `localhost`. (If you must use localhost, add
   `?base=http://192.168.1.23:8000/` to the end of the URL.)
4. Guests must be on the **same home Wi-Fi**. A guest network with "client isolation" turned on can block this.

**Does it work over plain http?** Yes, with caveats. WebRTC data channels and the PeerJS
connection (which always uses `wss://` to the cloud server) don't require a secure context. The automated
test ran entirely over `http://<LAN IP>:8000` in Chromium (`isSecureContext === false`) and passed. On http:
- The phone's "keep screen awake" (Wake Lock API) is only available on HTTPS, so phones may dim or lock between
  questions. They reconnect automatically when unlocked, but HTTPS hosting is smoother.
- I haven't tested a real iPhone/Safari over plain http. If an iPhone won't connect on http, use option (a) or (b).
- Chrome hides local IPs behind `*.local` (mDNS) names. Same-network devices normally resolve these fine, and if
  not, the connection falls back to STUN or PeerJS's public TURN relay.
- Internet access is **still required**. This option only replaces the web hosting, not the PeerJS signaling server or the CDN scripts.

## Caveats

- **Internet is required** on the laptop and on the phones (Wi-Fi or cellular). PeerJS and the QR library
  load from the jsDelivr CDN, fonts load from Google Fonts (with a fallback font if they don't load), and the free PeerJS cloud
  server (`0.peerjs.com`) brokers connections. That server is free and best-effort with no uptime guarantee.
  If it hiccups, phones already connected keep playing, and new joins retry automatically.
- **Phones on cellular data** usually connect fine. On strict carrier NAT they use the public PeerJS TURN relay, which is slower but works.
- **Player limits:** every phone is one data channel to the laptop browser. This was tested with **15 simultaneous
  players**, and 30–50 should be fine on any modern laptop. The TV scoreboard shows the top 16 players, and each phone always shows its own rank.
- **Keep the TV page open in one tab only.** Two TV tabs would fight over the room code. Don't let the laptop sleep.
- **Answers lock on first tap.** Late answers (after the timer) are ignored.
- Names are limited to 18 characters. Two online players can't use the same name.

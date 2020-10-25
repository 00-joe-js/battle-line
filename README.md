# To develop

`npm install`

`npm start`

Access at `http://localhost:1234`.

#### Uses [Parcel](https://parceljs.org/) for bundling

# Battle Line

[Board Game Geek](https://boardgamegeek.com/boardgame/760/battle-line)

Check out the [`about-battle-line`](https://github.com/joe-alves/battle-line/tree/master/about-battle-line) directory for rulebook and maybe other things like original assets.

# Technologies & Vision

Parcel is module system as alternative to React. Will rever to webpack if it doesn't work out for hot module stuff but seems very good so far.

Uses [SASS](https://sass-lang.com/) for CSS implementation, implemented by Parcel.

React is front-end framework, other front-end tooling choices pending.

This will be a CLIENT-only application, no server. I'm hoping that WebRTC works out for 2 people to find each other and make direct signals to eachother _without an intermediate server_. Will be interesting and fun to figure out how to keep game state valid and prevent cheating in this scenario.


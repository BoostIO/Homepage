# Boostio.github.io

## Development

```
npm i
npm run dev
```

Go to `http://localhost:3000`.

## Deployment

Build stuff.

```
npm run build
```

Serve the compiled page. `http://localhost:8080`

```
npm start
```

Deploy it to github page! 🚀

```
npm run deploy
```

Deploy it to now.sh

```
cd out
now
```

Then, you will see the end point of the deployment.

```
> Deploying ~/Code/Homepage/out under boost
> Ready! https://out-${SOME_RANDOM_HASH}.now.sh (copied to clipboard) [5s]
> Synced 2 files (260.07KB) [5s]
> Deployment complete!
```

And run `now alias` like the below.

```
now alias https://out-${SOME_RANDOM_HASH}.now.sh boostio.co
```

> After deploying, `https://out-${SOME_RANDOM_HASH}.now.sh` is already saved to your clipboard. So, you can just paste it without copying.

## Copyright

© 2018 BoostIO.

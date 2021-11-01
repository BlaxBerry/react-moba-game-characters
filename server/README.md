# API Server of React-FullStacks-Words-WebApp

## Tech Tasks

- Node.js
- Express.js
- npm
- middleware
  - express.json()
  - express.urlencoded()
  - morgan()
  - cors()

## Directory

```js
|- config
  |- config.default.js
|- middleware
|- router
  |- index.js // mian router
  |- client
		|- index.js // client side
	|- admin
		|- index.js // admin management side
|- controllers 
	|- client // client routes' handle functions
	|- admin // admin routes' handle functions
|- utils
|- index.js // mian index.js
```

## Routes List

### Client Side

#### user

| description           | method | pathname        |
| --------------------- | ------ | --------------- |
| Login / Registration  | POST   | ` /users/login` |
| get Current User Info | GET    | `/user/`        |
| Update User's Info    | PUT    | `/user`         |

### Admin Side

users

| description | method | pathname          |
| ----------- | ------ | ----------------- |
| users list  | GET    | `/api/users/list` |
|             |        |                   |
|             |        |                   |

## Routes Detail

### Client Side

#### User Login / Registration

POST`/users/login`

request body:

```json
{
  "user": {
    "email": "jack@jack.jack",
    "password": "jackjack123"
  }
}
```

#### Get Current User's Info

GET`/user/`

Authentication required, returns the currnet user's informatoin:

```json
{
  "user": {
    "name": "jack",
    "email": "jack@jack.jack",
    "password": "jackjack123",
    "avatar": "https://xxxxx.xxx",
    "motto": "i love programming"
  }
}
```

#### Update User's Info

PUT `/user`

Authentication required

### Admin Side

#### Users List

GET`/api/users/list`

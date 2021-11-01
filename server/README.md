# API Server Side

## Tech Tasks

- Node.js
- Express.js
- npm
- middleware
  - express.json()
  - express.urlencoded()
  - morgan()
  - cors()
  - md 5
  - express-validator

## Directory

```js
|- config
  |- config.default.js
|- middleware
  |- errorhandler.js // error handler
  |- validator // data validator
    |- createUser.js
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
  |- handleDatabase.js
  |- md5.js // md5 password hashing algorithm
|- index.js // mian index.js
```

## Routes List

### Client Side

#### user

| description                  | method | pathname         |
| ---------------------------- | ------ | ---------------- |
| registration                 | POST   | `/user/register` |
| login                        | POST   | ` /user/login`   |
| get current user information | GET    | `/user`          |
| update user's information    | PUT    | `/user`          |

### Admin Side

users

| description | method | pathname          |
| ----------- | ------ | ----------------- |
| users list  | GET    | `/api/users/list` |
|             |        |                   |
|             |        |                   |

## Routes Detail

### Client Side

#### User Registration

POST `/user/register`

request body:

```json
{
  "username": "jack",
  "email": "jack@jack.jack",
  "password": "jack123"
}
```

description:

- express-validator data validation
- double md5 password hashing algorithm

#### User Login

POST `/user/login`

request body:

```json
{
  "username": "jack",
  "email": "jack@jack.jack",
  "password": "jack123"
}
```

#### Get Current User's Info

GET`/user`

Authentication required, returns the currnet user's informatoin:

```json
{
  "id": "001",
  "email": "jack@qq.com",
  "usernamne": "jack",
  "password": "xxxxxxx",
  "avatar": "",
  "motto": ""
}
```

#### Update User's Info

PUT `/user`

Authentication required

### Admin Side

#### Users List

GET`/api/users/list`

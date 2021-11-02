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
  - uuid
  - express-validator
  - jsonwebtoken

## Directory

```js
|- config
  |- config.default.js
|- middleware
  |- errorhandler.js // error handler
  |- authorizate.js // JWT token authorization
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
  |- jwt.js // jwtwebjson create/verify JWT token
|- index.js // mian index.js
```

## Routes

### Client Side

| description                  | method | pathname         |
| ---------------------------- | ------ | ---------------- |
| registration                 | POST   | `/user/register` |
| login                        | POST   | `/user/login`    |
| get current user information | GET    | `/user`          |
| update user's information    | PUT    | `/user`          |

| description                   | method | pathname                    |
| ----------------------------- | ------ | --------------------------- |
| Get Current User's Words List | GET    | `/user/en?page=1&offset=30` |
| Add New Word Card             | POST   | `/user/en/add`              |
| Edit Word Card                | Put    | `/user/en/edit/wordid`      |

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
- uuid for random user id

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

description:

- express-validator for login user information validation
- jsonwebtoken for create/verify JWT token

#### Get Current User's Info

GET`/user`

**Authentication required**

request Headers:

```json
{
  "Authorization": "Bearer [Token]"
}
```

returns the currnet user's informatoin:

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

returns the currnet user's informatoin updated:

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

#### Get Current User's Words List

GET `/words/type?page=number&offset=number`

> Types:
>
> - en：English
> - jp：Japanese

**Authentication required**

returns tthe words List:

```json
{
  "type": "en",
  "list": [
    {
      "name": "Hello",
      "meaning": ["你好", "嗨", "喂"],
      "example": [{}]
    }
  ]
}
```

### Admin Side

users

| description | method | pathname          |
| ----------- | ------ | ----------------- |
| users list  | GET    | `/api/users/list` |
| remove user |        |                   |

#### Users List

GET`/api/users/list`

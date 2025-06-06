require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const GitData= {
  "login": "anshul-ab17",
  "id": 96761799,
  "node_id": "U_kgDOBcR3xw",
  "avatar_url": "https://avatars.githubusercontent.com/u/96761799?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anshul-ab17",
  "html_url": "https://github.com/anshul-ab17",
  "followers_url": "https://api.github.com/users/anshul-ab17/followers",
  "following_url": "https://api.github.com/users/anshul-ab17/following{/other_user}",
  "gists_url": "https://api.github.com/users/anshul-ab17/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anshul-ab17/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anshul-ab17/subscriptions",
  "organizations_url": "https://api.github.com/users/anshul-ab17/orgs",
  "repos_url": "https://api.github.com/users/anshul-ab17/repos",
  "events_url": "https://api.github.com/users/anshul-ab17/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anshul-ab17/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Anshul Bharat",
  "company": null,
  "blog": "",
  "location": "Chandigarh",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2021-12-28T05:15:11Z",
  "updated_at": "2025-03-28T06:08:50Z"
}

app.get('/git', (req, res) => {
  res.json(GitData);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('ab17.com')
})
app.get('/load', (req, res) => {
  res.send('<h1>ab17.com</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`)
})
 

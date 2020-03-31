# Marvel wiki

## Overview

Replica of Marvel website in React. Full stack project inspired by <a href="https://www.marvel.com/">https://www.marvel.com/</a>

<p align="center">
	<img
			width="600"
			alt="demo"
			src="https://github.com/sebkpf/marvel-react/blob/master/documentation/demo.png">
</p>

<p align="center">
  Demo:<a href="https://wiki-marvel.netlify.com/" target="_blank"> https://wiki-marvel.netlify.com/</a>
</p>
<p align="center">
 This project was bootstrapped with <a href=https://github.com/facebook/create-react-app. target="_blank">Create React App</a>
</p>

**Functionnalities**

- Get characters: axios request from API
- Get comics: axios request from API
- Search for characters or comics: axios request from API
- Add/remove comics and characters to favorites: handled by cookie

**UI**

- Homemade UI without framework

**Client**

- React
- HTTP request with axios package (get and post)
- Hooks (useState, useEffect)
- React Router Dom
- Cookies to handle user favorites

### Running the project

Clone this repository:

```
git clone https://github.com/sebkpf/marvel-react.git
cd marvel-react
```

Install packages:

```
npm install
```

When installation is complete, run with:

```bash
npm start
```

## Marvel API

<a href="https://github.com/sebkpf/marvel-backend">https://github.com/sebkpf/marvel-backend</a>

- Node.js
- axios
- express
- express-formidable
- cors
- mongoose
- crypto-js
- js-md5
- uid2
- dotenv

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDB database hosted on mLab

## Project status

Project is fully functional, however there are several bugs which need fixing:

- the search bar which does not allow subsequent search directly after previous search
- pagination on search results does not seem to function
- project is not responsive yet
- user authentication is not handled yet

## Contact

<a href="https://www.linkedin.com/in/sebastienkempf/" target="_blank">My LinkedIn profile</a>

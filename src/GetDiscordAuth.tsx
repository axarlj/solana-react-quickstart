import DiscordOauth2 from 'discord-oauth2';
const oauth = new DiscordOauth2();

const access_token = "6qrZcUqja7812RVdnEKjpzOL4CvHBFG";

oauth.getUser(access_token).then(console.log);
/*
	{ 
		username: '1337 Krew',
		locale: 'en-US',
		mfa_enabled: true,
		flags: 128,
		avatar: '8342729096ea3675442027381ff50dfe',
		discriminator: '4421',
		id: '80351110224678912' 
	}
*/
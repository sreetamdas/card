#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
};

// Text + chalk definitions
const data = {
	name: chalk.white("Sreetam Das /"),
	handle: chalk.cyan.bold("@sreetamdas"),
	work: chalk.white("Senior Frontend Engineer at Remote (remote.com)"),
	twitter: chalk.cyan("twitter.com/_SreetamDas"),
	github: chalk.cyan("github.com/sreetamdas"),
	linkedin: chalk.cyan("linkedin.com/in/sreetamdas"),
	web: chalk.cyan("sreetamdas.com"),
	npx: chalk.white("npx sreetamdas"),
	labelWork: chalk.white.bold("      Work:"),
	labelTwitter: chalk.white.bold("   Twitter:"),
	labelGitHub: chalk.white.bold("    GitHub:"),
	labelLinkedIn: chalk.white.bold("  LinkedIn:"),
	labelWeb: chalk.white.bold("       Web:"),
	labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading +
	newline +
	newline +
	working +
	newline +
	twitter +
	newline +
	github +
	newline +
	linkedin +
	newline +
	web +
	newline +
	newline +
	card;

console.log(chalk.green(boxen(output, options)));

<h1 align="center">
  MotW Companion
</h1>

<h3 align="center">
  A Monster of the Week Table-Top RPG Companion App
</h3>

<p align="center">
  These Links don't go anywhere yet.
</p>
<p align="center">
	<strong>
		<a href="#">Website</a>
		•
		<a href="#">Docs</a>
		•
		<a href="#">Demo</a>
	</strong>
</p>

#### Created by Daniel Mace

## Overview

MotW Companion serves as a reference and management tool for running campaigns with the table top game "Monster of the Week".

#### Features

 - Character Generator
 - Character Stats Tracker
 - Game Master Reference Tool
 - Player (Hunter) Reference Tool
 - Mission / World Reference Tool
 - Interactive Game Board

## Installation & Usage

Until deployed for production, MotW Companion requires Node v6 or later. Yarn package manager is also recommended.  

A Google login is required to access the majority of routes available.

### Running stable releases with Yarn

After cloning repository and ```cd``` into directory, run ```yarn``` to install dependencies.

Run ```yarn start``` to serve app over localhost:3000.

## Example

![Party View](/screens/partyview.jpg)
![Hunter View](/screens/huntermoves.jpg)
![Game board View](/screens/gameboard.jpg)

## Development Status

#### Character Tracker - MVP met

Add and remove player characters and track a number of character stats.  Figures are updated in real time to Firebase, so multiple users can view changes as they occur.

##### Future Developments

 - Add ability to reduce XP
 - Utilize authorization to allow a user to only be able to edit their own creations
 - Add more detailed info and changeable fields (gear, stats, abilities, status effects)
 - Refactor by splitting into more components

#### Hunter / Keeper Moves - MVP met

Toggle between types of available moves to view the official entry from MotW about how to play and use this move.

##### Future Developments

 - Refactor data structure to utilize database for these entries.  This will allow an admin route that can edit these areas and save changes to the database.
 - Make more attractive interface

#### Knowledgebase - Not yet built

This will be a reference area where players can add and organize information they gather during the campaign.

#### Game Board - In Development

Gameboard maps heroes and assets from database to Konva canvas and provides a toolbar for hiding and showing layers, adding and removing layers, and changing the background image.  Changes are updated in real-time for anyone viewing the gameboard.

##### Future Development

 - Create user interaction with layers that presents information about the layer
 - Create user interaction that allows for resizing of layers
 - Create data reference for saving background image links in order to quickly toggle between backgrounds
 - Create dice roller tool

## Contact Info
 - Dan Mace: dmacebeta@gmail.com

## Technologies Used

 - Node
 - Yarn
 - React, Create-React-App
 - React Router
 - React Redux
 - React Redux Firebase
 - Redux Thunk
 - React Konva
 - Material-UI
 - Firebase
 - Node-SASS
 - Lodash
 - use-image

## License & Attribution

Since this is based off a proprietary offering, the license is currently restricted.  We'll just say GNU AGPLv3 for now.

I would like this app to be a free companion easily accessible to the public, but I will need to talk to the game creators before making any decisions on my own.

Currently a number of assets were purchased with licensing or attained with free licensing, though future versions will eventually replace these with original assets.

These assets include:
 - *Game UI Interface Pack - Medieval Fantasy Edition by eldamein: https://graphicriver.net/item/game-ui-interface-pack-medieval-fantasy-edition/16437348*
 - *700+ RPG Icons by Lorc: https://opengameart.org/content/700-rpg-icons*
 - *Button with simple effect on hover! by Vincent Durand: https://codepen.io/onediv/pen/jEmjap*

 *Information about Monster of the Week and its available resources can be found here: https://www.evilhat.com/home/monster-of-the-week/*

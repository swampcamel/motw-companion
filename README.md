<h1 align="center">
  MotW Companion
</h1>

<h3>
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

# MotW Companion
### A Monster of the Week Table-Top RPG Companion App

#### Created by Daniel Mace

## Overview

MotW Companion is browser-based, real-time application that serves as a reference and management tool for running campaigns with the table top game 'Monster of the Week'.

#### Features

 - Character Generator
 - Character Stats Tracker
 - Game Master Reference Tool
 - Player (Hunter) Reference Tool
 - Mission / World Reference Tool
 - Interactive Game Board

## Installation & Usage

Until deployed for production, MotW Companion required Node v6 or later. Yarn package manager is also recommended.  A Google login is required to access the majority of routes available.

### Running stable releases with Yarn

After cloning repository and ```cd``` into directory, run ```yarn``` to install dependencies.

Run ```yarn start``` to serve app over localhost:3000.

## Example

![Party View]('./screens/partyview.jpg')
![Hunter View]('./screens/huntermoves.jpg')
![Game board View]('./screens/gameboard.jpg')

## Development Status

#### Character Tracker - MVP met

Add and remove new characters, track hp, luck and xp.  Figures are updated in real time to Firebase, so multiple users can view changes as they occur.

##### Future Developments

 - Add ability to reduce XP
 - Add dialogue to confirm level up at 5 XP
 - Utilize authorization to allow a user to only be able to edit their own creations
 - Add more detailed info and changeable fields (gear, stats, abilities, status effects)
 - Refactor by splitting into more components

#### Hunter / Keeper Moves - MVP met

Toggle between types of available moves to view the official entry from MotW about how to play and use this move.

##### Future Developments

 - Refactor data structure to utilize database for these entries.  This will allow an admin route that can edit this areas and save changes to the database.
 - Make more attractive interface

#### Knowledgebase - Not yet built

This will be a reference area where players can add and organize information they gather during the campaign.

#### Game Board - In Development

The Game Board currently generates Image layers on a Konva Canvas based on the number of heroes currently in the database and supplies the image URL from the entry.  These layers are drag-and-droppable.

Currently, this component has no connection to the database, so changes to the Canvas are not saved anywhere.

##### Future Development

 - Write onMouseUp event that pushes image coordinates to Firebase
 - Write data structure for holding GameBoard coordinates and any future configurations.
 - Allow user to upload a background image for the stage, providing a board for the image layers.

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

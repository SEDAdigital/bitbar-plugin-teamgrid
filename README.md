# BitBar Plugin for teamgridapp.com

This is a BitBar plugin that adds a menu bar to your mac with your current
active time tracker from [Teamgrid](https://teamgridapp.com).

## Features
- shows current active tasks in menubar including the client and a counter
- stop current timer via dropdown
- lists recent other tasks in a dropdown (click on one to start tracking for that task)

## Installation
- Download and [install BitBar](https://github.com/matryer/bitbar/releases) (use v1.9.x)
- configure your plugin folder for BitBar
- download the source of this repository or clone it into your BitBar plugin folder (make sure to name the folder `teamgrid`!)
- create a symlink for BitBar: `ln -s ~/path-to-plugin-folder/teamgrid/app.html ~/path-to-plugin-folder/teamgrid.1m.html`
- open the teamgrid folder and duplicate `config.example.js` to `config.js` and adjust the contents to your needs
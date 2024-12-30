# SKATE

## Table of Contents

1. [Description](#description)
2. [Checklist](#checklist)
3. [Contact](#contact)
4. [License](#license)

## Description

As a user, I want to be presented with a group of settings to configure, including:

- Difficulty
- Obstacles I want to include
- Whether there are additional players

Once I select my settings, I want to be taken to a separate page where I can:

1. View a summary of my selected settings.
2. See several boxes that break down the trick, including a box specifying the obstacle the trick is meant to be attempted on.

After clicking the "Generate Trick" button, I want to receive:

- The name of a trick.
- A list of basic tricks that combine to create the trick.
- The obstacle where the trick should be attempted.


## Checklist

- [ ] Users are presented with a settings page where they can choose:  
  - **Difficulty** (easy, medium, hard)  
  - **Obstacles** (flat ground, hubba, ledge, flat bar, manual pad, mini ramp, euro gap)  
  - **Number of players** skating  

- [ ] **Obstacles:**  
  - All tricks possible on flat ground will also be possible on obstacles like the euro gap, A-frame, stairs, etc.

- [ ] Based on the selected settings, users can choose the type of game they want to play:  
  - **Game of SKATE**  
  - **Practice**  

- [ ] **Practice Mode:**  
  - Users generate a trick based on their selected settings.  
  - If obstacles are included, the algorithm will consider them when generating a trick to be attempted on the specified obstacle.

- [ ] Users can mark tricks as missed. Missed tricks will be added to a **Missed Tricks** array and stored in local storage.

- [ ] If missed tricks are stored in local storage, users can practice only those missed tricks:  
  - The generated tricks will come exclusively from the **Missed Tricks** array.  
  - If the user logs a trick as landed, it will be removed from the **Missed Tricks** array.

- [ ] Add an option to **delete missed tricks**, clearing the **Missed Tricks** array from local storage.

## Contact

- payton212
- payton_212@icloud.com

## License

![Static Badge](https://img.shields.io/badge/License-%20MIT%20License-red)
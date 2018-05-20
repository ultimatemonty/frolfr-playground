# Frolfr Playground

## WTF is Frolfr?
Frolfr ([web](frolfr.com))([repo](github.com/frolfr)) is a disc golf score tracking application. The current production applications are written in EmberJS and Rails.

## Why a playground?
Disc golf score tracking is actually a decently complicated domain. I know the domain pretty well since I play disc golf on a regular basis. So I figure a disc golf score tracking app is a good place to try out new technologies. Right now I'm focusing primarily on the API layer but I do intend to play with some client technologies other than Ember.

## The domain
Disc golf score tracking breaks down into the following high-level domain objects:
* **Course** - disc golf rounds are played on a course.
  * **Has Many** `holes`.
* **Hole** - a single hole on a course. Will have a `hole_number` and `par` score which is the expected number of throws it takes to get the disc in the basket.
  * **Belongs To** a `course`.
* **Round** - an instance where one or more players play disc golf. 
  * **Has One** `course`
  * **Has Many** `scorecards`
* **Scorecard** - contains the score for each `hole` played for a `player` in a `round`.
  * **Has Many** `holes`. 
  * **Has One** `player` and `round`.
* **Player** - you must have at least one player to play a round

## Requirements for the API
TBD - I need to wrwite some code

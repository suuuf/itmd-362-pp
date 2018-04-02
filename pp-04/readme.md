# Production Problem 04: Implementing HCI Guidelines for Touchscreens

## The Problem

Using the HCI guidelines from either Apple/iOS, Android/Google, or Windows, redesign the login page at
http://my.iit.edu/ for a touch-friendly environment. Use this to kickstart your work on Project 2.

**You only need to sketch your redesign**, and in the text below, reference at least three different
points of guidance from chosen HCI guidelines that went into your redesign sketches (you might
want to do multiple sketches, each highlighting a different feature of the same overall design).
Focus on touch-related elements.

## Resources

* Apple iOS HCI Guidlines:
  https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/
* Android:
  https://developer.android.com/design/index.html
* Windows Desktop Guidelines:
  https://developer.microsoft.com/en-us/windows/desktop/design

## Deliverables

Small commits to your Production Problems repository that include:

1) photographs of sketches of your new design, from your sketchbook
2) an explanation of three different points of guidance from your chosen guidelines (point to the
   specific URL where the guidance can be found) that you implemented in your sketch, written below:

* HCI Guidline One (URL): https://developer.apple.com/ios/human-interface-guidelines/views/scroll-views/
* How you implemented it in your sketch: The myIIT login page has a lot of important information on it when you are not logged in. So, I made the main view the myIIT login and when the user scrolls it will show the auxiliary info that the page has. The scrolling indicators will stil exist and an indicator will be there for the user to return to the login view

* HCI Guidline Two (URL): https://developer.apple.com/ios/human-interface-guidelines/user-interaction/data-entry/
* How you implemented it in your sketch: The username and password are text fields and they have hints within them to explain to the user on what they are. The text field are relatively large to make them easy to see. I could have made the user enter the username first and validate the username then ask for password, but this conflicts with the scroll view.

* HCI Guidline Three (URL): https://developer.apple.com/ios/human-interface-guidelines/visual-design/adaptivity-and-layout/
* How you implemented it in your sketch: I kept a slight margin in the sketch and overall kept the elements spaced out. All the elements are very blocky and it is pretty easy to reorganize the elements when resizing or changing orientation. On larger screen I can implement a splitivew where the login view is on the left side and the auxiliary info 

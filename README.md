### Cosmetic Salon (appointment scheduling)

The theme of the project is **Cosmetic Salon (appointment scheduling)**.

**About program**

This is a web application for local usage that does not need back-end server and/or database, it uses browser's local storage for saving all dynamically entered data.

There are options for registration of users, log in and log out of registered users.
When a user is logged in, a button for showing scheduled appointments appears and a button to schedule new appointments.
When scheduling new appoinments, there are the start date and end date datepickers to select a date range in which a user can find free appointments. On the same panel  services and employees can be selected (employee isn't necessary). Next, when user clicks on the button find an appoinment, the table with free appoinments appears.
User clicks on a free time interval and selects in the prompt the time that suits him/her and the scheduled time is printed in a table with the possibility of deleting reservations.

**Used technologies/libraries**

Bootstrap 4, jQuery, jQuery UI, SHA512 Hash Generator, Font Awesome, Google Fonts



**Project structure**

**root** - index.html (home page), cenovnik.html, admin.html
**/css** folder 
1.	all.css – saved Font Awesome
2.	style.css – custom css
3.	bootstrap.min.css – css from Bootstrap 4

**/data** folder – data for importing to local storage (admin.html)
1.	services.json
2.	employees.json
3.	workingHours.json

**/fonts** folder –  saved google fonts
1.	courgette.css
2.	quattrocentoSans.css

**/images** folder

**/js** folder
1.	main.js – custom js for form validation and all logic
2.	Client.js – custom js for handling all client related logic
3.	cenovnik.js - custom js for dynamic generating price list table
4.	admin.js  – custom js for importing and saving data to local storage
5.	bootstrap.min.js
6.	jquery-3.3.1.min.js
7.	jquery-ui.min.js
8.	popper.min.js
9.	sha512.min.js
/webfonts – Font Awesome

In order to make testing and demonstration faster, there is an admin page where  prepared JSON files can be imported to localStorage. The JSON files are in the data folder.

Dynamic field table price list, service select  menu, employee select menu, drop down menu of price list in navigation bar, tables for finding free appointments and showing scheduled reservation. In short, all the tables and almost all menus are dynamically generated from JSON files and user actions.

All the logic is in the modal.
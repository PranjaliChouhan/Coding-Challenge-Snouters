This is a simple web application for booking hotel rooms.
The app allows users to register, select a room type, and view the availability of rooms through a calendar. 
Upon selecting an available date, users can confirm their booking, and a confirmation message will be displayed.

How it Works?
**Home page**
Information about hotel is given and Header of the website contains registration form .

**Registration Form**

1.Name: Users are required to enter their name.
2.Email: Users are required to enter a valid email address.
3.Phone: Users are required to enter their phone number.
4.Check-in Date: Users are required to select a check-in date.
5.Check-out Date: Users are required to select a check-out date.
6.Number of Guests: Users are required to enter the number of guests.
7.Room Type: Users can select a room type from the dropdown menu.

Error Messages:
If any of the required fields are not filled out correctly, an error message will be displayed. Please make sure all the information is provided correctly before submitting the form.

Submitting the Form:
After clicking the submit button, you will be navigated to the calendar, which shows the available and booked rooms for the selected dates. 
If the room you selected is available, you will be able to confirm your booking. If the room is not available, a message will be displayed indicating that the room is not available for the selected dates.

**Availability Calendar**

The availability of rooms is shown through a calendar.
Available dates are displayed with the title "Available".
Booked dates are displayed with the title "Booked".

Confirm Booking upon selecting an available date, users can confirm their booking.
If the booking is confirmed, a confirmation message is displayed.
If the selected date is already booked, a message indicating that the room is not available is displayed.

**Technologies Used**
1.React.js
2.FullCalendar library
3.Formik for form validation
4.Yup for schema validation
5.React Router DOM for routing

--How to Run the App--
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Run the app: npm start

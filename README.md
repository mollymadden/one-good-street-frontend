# Real World Application - One Good Street
A web app developed by Molly Madden and Michelle Wong

## R1	Description of your website, including:

### Purpose

The purpose of this app is to refactor the website of One Good Street so that it is more accessible to senior citizens and stakeholders of senior citizens. 

One Good Street is an organisation whose aim is 'to reduce social isolation and loneliness in older residents who live in our neighbourhoods through practical initiatives that everyone can get involved in.' There is currently a website that can be found [here](https://onegoodstreet.com.au/). It is run by Matiu Bush.

Presently the website has typical features such as a Navbar, a home page, about page, library of care things, media and events, contact us, find us on Facebook, sign up and member login page. This site is currently built on WordPress. 

#### Our main task - in connection with the purpose
After speaking to the client (Matiu Bush), we have been requested to focus on improving the Library of Care Things. The Library of Care Things is a page that connects those who have equipment (for example electric wheelchairs and walking frames) for senior citizens to those who require such equipment. It is a free service offered by One Good Street and all equipment listed is free. Currently, people who want to offer equipment, contact One Good Street and Matiu Bush picks up the equipment and then lists them on the website. This is hard coded and can be time consuming to list a single item onto the site. Matiu informed us he would like for the redesigned website to have the ability for users to list donated items themselves. Once items are listed, he also wants the ability to be notified of an item.

As a result, our main task is to make the 'Library of Care Things' dynamic and link it to a database. 

Sources: 
* https://onegoodstreet.com.au/about-one-good-street/


### Functionality / features 

#### Visitors / Users
Visitors and/or users of the 'One Good Street' website have the same functionality.

* Visitors can view the Home, About, Library of Care Things, Media and Events, Contact us, Find us on Facebook and Sign up pages. Visitors can also list items on the Library of Care Things.

* Visitors can view the home page to get a quick summary about what the website its about.
* Visitors can view the about page to understand the purpose and aim of One Good Street.
* Visitors can use the contact us form to get involved or find out more about One Good Street initiatives.
* Visitors can sign up in order to offer help.

* Visitors can view all the listings on the 'Library of Care Things' and request an item by emailing the user or Matiu.
* Visitors can search listings by title, location and category.
* Visitors can request items by using the contact details connected to the listed item. 
* Visitors can list items without signing up. In order to list an item, visitors would need to fill in a form. This form requires visitors to enter a title (string), description (string), category (drop down box), condition (drop down box), location (string) and contact details (string).
* The form will not be submitted unless all the fields are filled in. Once submitted, the form is saved to the Mongo database.
* Visitors who list items can provide their contact details (in the event someone wishes to contact them about requesting an item) or they can choose to not provide contact details, and in that event, 'One Good Street' would be the point of contact. 
* In terms of form validations for the user, errors will be displayed if any part of the form is incomplete. 

#### Admin
* In addition to the functions that a visitor has, admin users can view, edit and update all pages and have CRUD functionality for the listings on the Library of Care Things.
* Admin users can add new categories and conditions to the listings, which will be saved to the Mongo database. This will be achieved via a form. 
* In terms of form validation, the administrator cannot submit a blank value when adding a new category or condition. 

### Target audience
The target audience of One Good Street senior citizens and stakeholders of senior citizens (including case managers, physiotherapists, occupational therapists, aged care and NDIS workers). 

#### Case Study

##### John Foo - has a shower stool to donate
John Foo has an elderly mother who used to live with him and had a shower stool. However, she has recently moved to an aged care home. As a result, she is no longer requiring the shower stool as this is already provided for at her new home. As a result, John decides to list this shower stool on the Library of Care Things through One Good Street. 

##### Jane Doo - Case manager for a senior citizen
Jane Doo is the case manager for a senior citizen, who is still living at home. Due to mobility issues, they are finding it more difficult to shower standing up and subsequently require a shower stool. Jane visited One Good Street and saw there was a shower stool available on the Library of Care Things. She was then connected to John.

The outcome is that John is able to dispose of his shower stool in a responsible and meaningful way while Jane's client is not burdened with the potential steep financial costs of purchasing aged care equipment adn can reap the benefits of using John's unwanted equipment. 

#### Visitors
Those who visit the site and wish to see what it is about and get a feel if it is suitable for their needs. They may be visiting as they are interested in requesting equipment or donating items. They may also be interested in requesting or donating items on behalf of a relative or client. Visitors may also be wanting to help out as a volunteer and are seeking guidance about the skills or items they can offer. 

### Tech stack	GENERAL

### Tech stack
The tech stack used for this app are:
* HTML
* CSS
* MongoDB
* Express
* React
* Node JS
* Heroku for deployment
* Netlify for deployment
* Amazon S3 Service 

## R2	Dataflow Diagram	CMP1043-4.2

## R3	Application Architecture Diagram	CMP1043-4.3

## R4	User Stories	CMP1043-5.1

## R5	Wireframes for multiple standard screen sizes, created using industry standard software	CMP1043-4.1, CMP1043-5.3

## R6	Screenshots of your Trello board throughout the duration of the project	CMP1043-5.2

[Trello Board](https://trello.com/b/xNTst2Dp/real-world-app)

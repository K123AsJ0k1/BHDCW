# Requirments specification

**The applications purpose**

---

The application allows marking, editing, discussion and AI training dataset collection regarding arbitrary texts. It has only three user types, which are the super admin, the admins and the editors.

**The features of the application**

---

Generally:

- Every user can choose texts, mark texts, edit texts, comment texts, discuss with other users in a forum, submit their work into a training dataset and download a training dataset for their own purposes

Editors:

- If a user has been provided an activation code, the user can signup and create an editor account (The name must be atleast 5 characters long, while the password must be atleast 8 characters long)
- If a user has lost their password, but they still know the activation code, they can replace the old password with a new one

Admins:

- If a user has been provided an admin activation code, the user can signup via a secret link and create and admin account (The name must be atleast 8 characters long, while password must be atleast 16 characters long)
- Can add new texts into the database
- Can remove editor account comments in the forum
- Can lock forum threads
- Can generate a editor account activation code
- Can deactivate an existing editor account activation code, which prevents the owner of this account from login in
- Can view training dataset

Super admin:

- Is created, when the application starts running first time. Its name and password is predetermined, but login into it requires usage of a secret link and change of the name and password after logging in
- Is able to do as much as regular admins
- Can view the texts in the database
- Can remove texts from the database
- Can remove forum threads
- Can generate an admin activation code 
- Can deactivate and existing admin account activation code, which prevents the owner of this account from login in
- Can edit training dataset

Choosing texts:

- All texts can be accessed by using either a searching its link or picking its link from a list
- After clicking the link, the user is asked, if they want either to only view, mark or edit the choosen text

Viewing texts:

- All texts are meant to be read from top to bottom, which is why all texts use forever scrolls
- Texts can be either indepented or linked, which is why in the end of the text there either is not or is a links to the next text in the link

Marking texts:

- All words can be either painted or underlined with a symbolic color of users choosing
- The purpose of these marks is to give the reader a way to train the AI to create more suitable sentences
- After the user is satisfied, they can either save their markings for later or submit it into a dataset

Editing texts:

- Along side with marking, the user can edit the text to be better
- After the user is satisfied, they can either save their edits for later or submit it into a dataset

Commenting texts:

- User can create either a viewing comment, a marking comment or a editing comment
- Each are seen only in their respective modes
- Only the marking and editing comments are sent to the dataset, while viewing comments are attached to the original text

Forums:

- All users can create new threads and comment on them
- All users can create sub threads with in the forum thread
- All threads can be eihter upvoted or downvoted
  
Submitting into a training dataset:

- All users can submit their markings or edits into the training dataset, if they accept to transfer the intelectual rights of these markings or edits to the datasets owners
- After accepting, the markings and edits are removed from the users profile
- After not accepting, the status stays unchanged

Downloading a training dataset:

- All users can download a parsed training dataset stored in the database
- The size and the data database gives can be choosen




 

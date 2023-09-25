### The goal of this project is to create a toast library using React. I will be using a custom context with various functions for adding/removing toast messages.

# Procedures/Instructions: 
1. Created a toast library that has the following abilities:
-  Added a toast message
-  Removed a toast message by id
-  Some way to access all the toast messages
2. When a toast is created it should have the following options that you can configure
- autoDismiss: a boolean that determines if the toast should automatically dismiss itself after a certain amount of time
- autoDismissTimeout: the amount of time in milliseconds that the toast should wait before dismissing itself if autoDismiss is true
- position: the position on the screen where the toast should appear (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
- Toast messages should remove themselves when clicked
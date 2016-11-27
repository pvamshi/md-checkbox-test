# MdCheckboxTest

This project was created to test a bug in md-checkbox . There are two bugs : 
* When the model value is true , the input checked value is false . Click to uncheck and click again to check , now its value is true 
* In unit test , the class list do not contain 'mg-checkbox-checked' , essentialy its not checked . 


Run `ng serve` to open app at `localhost:4200` and `ng test --watch true` to play around with tests

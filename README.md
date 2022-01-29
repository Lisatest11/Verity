# Verity
# Test scenarios:
1.Search "Software" and validate Wikipedia link is returned as the first result. 

2.Search "literature" and validate "britannica.com" is returned in the search result and display the position or index of the result

# Demo video:
https://watch.screencastify.com/v/GmFeHcKvY7Yfsu3nuHwo

# How to run the test from the start:

Step1:
Install tools:

1.Install Visual Studio Code---https://code.visualstudio.com/download

2.Install Visual Studio Code Extensions:

   alexkrechik.cucumberautocomplete----https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete 
   
   streetsidesoftware.code-spell-checker----https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
   
3.Install Node.js-----https://nodejs.org/en/download/

Steps2:

Create your own project:

1.Open Command Prompt

2.Create your project, e.g. 

>>>mkdir QAdemo

>>>cd QAdemo

>>>code .
(will open the Visual Studio Code )

Step3:

1.Open the new terminal

2.Run these command to install cypress and cucumber

  	npm init -y
  
  	npm install cypress
  
  	npm install --save-dev cypress-cucumber-preprocessor

Step4:

Configure the files:

1.	cypress.json 
    
     a.	Configure your baseUrl(test environment: Test, Staging, or Production environment)
     
     b.	Configure your test wondow size
     ![image](https://user-images.githubusercontent.com/95558525/151650961-6a132076-3950-4546-b6b8-7c980f50fe2b.png)

2.	support/index.js (configure the uncaught exception to make the test cases keep running)
	![image](https://user-images.githubusercontent.com/95558525/149648635-b59c9e25-125a-4acd-947b-e6d4102b6bdd.png)
    
3.	package.json (configure cucumber) 
 ![image](https://user-images.githubusercontent.com/95558525/149648652-72c5b666-57ed-4f25-9aac-a77332234156.png)
4.	plugins/index.js (configure cucumber) 
![image](https://user-images.githubusercontent.com/95558525/151650993-d8dd2cf7-fe80-4ce8-a92e-883e8160b791.png)
# Create your test
![image](https://user-images.githubusercontent.com/95558525/151651028-5cc16b92-af90-48a0-b250-9d08e428a48d.png)


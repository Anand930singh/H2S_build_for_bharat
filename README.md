# Build for Bharat Hackathon Project

This project was developed for the Build for Bharat Hackathon. It consists of a client-side and a server-side component.

Deployed on Google Cloud Platform (GCP) - live link -> https://sparse-matrix.el.r.appspot.com/

### To run locally Clone the repository using this command:

```git clone https://github.com/Anand930singh/H2S_build_for_bharat.git```

## Client

The client folder contains the frontend of the application, built using ReactJS + Vite and TailwindCSS. To run the client locally, follow these steps:

1. ```cd client```
2. ```npm install```
3. ```npm run start```

## Server
The server folder contains the backend of the application. To set up and run the server locally, follow these steps:

1. Ensure you are in the root directory of the project.
2. ```cd server```
3. ```npm install```
4. ```npm run start:dev```

# Testing

<img width="355" alt="image" src="https://github.com/Anand930singh/H2S_build_for_bharat/assets/99159646/1ebb001d-7ca6-401d-8959-fbb0d5d325b0">

=> Enter the pincode into the input box

Use below test cases:
```
1. 810776
2. 272939
3. 111120
4. 548035
5. 857245
6. 931921
7. 348442
8. 138026
9. 321907
10. 948111
11. 292873
```

=> If you emter pincode which not exists in database then it will throw warning ```Pincode not exist```

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<img width="339" alt="image" src="https://github.com/Anand930singh/H2S_build_for_bharat/assets/99159646/5e2f72ad-0547-4c9b-abb8-bbd0bc629b9c">

=> Input MerchantID in first input box.
=> Enter pincodes in comma seperated format in second input box.

Use below test cases:
```
1. M123 – 786543,976553,789646
2. M276 – 653765,576482,976257
3. M234 – 754783,677468,875643
4. M567 – 675456,786432,876534
5. M467 – 273838,635783,736578
6. M454 – 476683,592033,635735
7. M257 – 385388,635723,835639
8. M354 – 384638,645773,873579
9. M836 – 835734,745773,986833
10. M735 – 387548,745738,936583
11. M732 – 835836,846533,835782
```
=>If already exist then it will throw warning ```Already exist```


# Database

For database i have used postgreSQl(relational databse). There are two tables ```Pincode``` and ```Merchant```. First table contain all pincodes and second table contain MerchantID and pincode which if refrence to pinocde of ```Pincode``` table.
![WhatsApp Image 2024-02-10 at 15 05 34_b2c96c63](https://github.com/Anand930singh/H2S_build_for_bharat/assets/99159646/51f32ce0-666f-48b7-96d7-0188053d4900)

## Dataset used for testing

### CSV format
1. Pincode Table (Approx 30,000 Pincodes) - https://drive.google.com/file/d/1rDUg_upx2UfEPQwwxq5Kfyk7sMOPZ8zV/view?usp=sharing  
2. Merchants Table (Approx 800,000 Rows) - https://drive.google.com/file/d/1nxT6k83ZPfYjB1c6TUuBBBcX3oG8qjRl/view?usp=sharing

### SQL format
- https://drive.google.com/file/d/19wVal86OaDl9kPsLjApT8UWYtvyMh8wN/view?usp=sharing

## Space optimisation
Storing data in a general matrix can lead to significant memory wastage, especially when dealing with sparse matrices.
![WhatsApp Image 2024-02-10 at 14 31 54_7b644fbe](https://github.com/Anand930singh/H2S_build_for_bharat/assets/99159646/3510ca5d-4c9d-4332-85fa-032d079bdc98)

```However, using a relational database with two tables eliminates this concern, as it doesn't incur any extra space usage.```

## Search Optimisation
In normal matrix we have to look itreatively each column for getting merchants who are available for delievery at any particular location.
But in my solution we are finding only required pincodes and getting all related merchants.
So here we are not searching each merchant itreatively.
 


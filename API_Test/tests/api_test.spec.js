const { test, expect, request } = require('@playwright/test');

const API_URL = 'https://api.restful-api.dev/objects';

var userid;
//Get list of all objects
test('Get list of all objects', async ({ request }) => {
    const response = await request.get(API_URL);
    console.log(await response.json() )  
    expect(response.status()).toBe(200)  
})
//Add an object using POST
test('Add an object using POST', async ({ request }) => {
    const response= await request.post(API_URL,
        {
               
            data: {
                name: "Apple MacBook Pro 16", 
                data: {  
                    year: 2019,
                    price: 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        });
        console.log(await response.json())
        expect(response.status()).toBe(200)

        var res = await response.json()
        userid=res.id       //Storing the ID for future refreance 
        console.log(`Created User ID: ${userid}`);

})
//Get a single object using the above added ID
test('Get a single object using the above added ID', async ({ request }) => {
    const response = await request.get(`${API_URL}/${userid}`);
    console.log(await response.json() )  
    expect(response.status()).toBe(200)  
})
//Update the object added in Step 2 using PUT
test('Update the object added in Step 2 using PUT', async ({ request }) => {
    const response= await request.put(`${API_URL}/${userid}`,
        {
               
            data: {
                name: "Apple MacBook Pro 16", 
                data: {  
                    year: 2019,
                    price: 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
                }
            }
        });
        console.log(await response.json())
        expect(response.status()).toBe(200)
         
})
test('Delete the object using DELETE', async ({ request }) => {
    const response = await request.delete(`${API_URL}/${userid}`);
    console.log(await response.json() )  
    expect(response.status()).toBe(200)  

     // Verify that the object no longer exists
     const getResponse = await request.get(`${API_URL}/${userid}`);
     expect(getResponse.status()).toBe(404);

})
//Additional test
//GET request for a non-existent ID
test('Get a non-existent object', async ({ request }) => {
    const response = await request.get(`${API_URL}/nonexistent-id`);
    expect(response.status()).toBe(404);
  });
  //POST request without body request
  test('Add an object using POST without body request', async ({ request }) => {
    const response= await request.post(API_URL,
        {
           
        });
        console.log(await response.json())
        expect(response.status()).toBe(400)
    })
//PUT request for a non-existent ID
test('Update the object with non-existent ID', async ({ request }) => {
    const response= await request.put(`${API_URL}//nonexistent-id`,
        {
               
            data: {
                name: "Apple MacBook Pro 16", 
                data: {  
                    year: 2019,
                    price: 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
                }
            }
        });
        console.log(await response.json())
        expect(response.status()).toBe(404)
         
})
//DELETE request for a non-existent ID
test('Delete request for a non-existent ID', async ({ request }) => {
    const response = await request.delete(`${API_URL}//nonexistent-id`);
    console.log(await response.json() )  
    expect(response.status()).toBe(404)  
})
const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

describe('app routes', () => {
    it('The thing-quotes endpoint returns all quotes from the thing', async() => {

        const data = [
            {
                id: 1,
                name: "MacReady",
                role: "helicopter pilot",
                quote: "I know I'm human. And if you were all these things, then you'd just attack me right now, so I know some of you are still human."
            },
            {
                id: 2,
                name: "Palmer",
                role: "assistant mechanic",
                quote: " I was wondering when El Capitan was gonna get a chance to use his popgun."
            },
            {
                id: 3,
                name: "Fuchs",
                role: "assistant biologist",
                quote: "It could have imitated a million life forms on a million planets. It could change into any one of them at any time. Now, it wants life forms on Earth."
            },
            {
                id: 4,
                name: "Blair",
                role: "biologist",
                quote: "You see, what we're talkin' about here is an organism that imitates other life-forms, and it imitates 'em perfectly. When this thing attacked our dogs it tried to digest them... absorb them, and in the process shape its own cells to imitate them."
            },
            {
                id: 5,
                name: "Clark",
                role: "dog handler",
                quote: "I dunno what the hell's in there, but it's weird and pissed off, whatever it is."
            },
            {
                id: 6,
                name: "Norris",
                role: "geologist",
                quote: "I'd say the ice this thing is buried in is 100,000 years old... At least."
            }
        ];
        const response = await request.get('/thing-quotes');
    
        expect(response.body).toEqual(data);
 
    });

    it('Returns a single quote associated with an id', async() => {

        const data = 
            {
                id: 5,
                name: "Clark",
                role: "dog handler",
                quote: "I dunno what the hell's in there, but it's weird and pissed off, whatever it is."
            };
        const response = await request.get('/thing-quotes/5');
    
        expect(response.body).toEqual(data);
    });

})


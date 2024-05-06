{
// destructuring 

    //object 
    const user = {
        id: 123,
        name: {
            firstName: 'Morshed',
            middleName: 'Alam',
            lastName: 'Mamun'
        },
        contactNo: '01851565648',
        address: 'Bangladesh'
    }

    const {contactNo:  phoneNum, name: {middleName : midName}} = user 

    // note: when we destructuring we can't write explicitly type.
    
    // Array 

    const myFriends = ['mamun', 'ameen', 'saide', 'hridoy', 'rafat']

    const [,, bestFriend, ...rest] = myFriends
}

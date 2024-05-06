{
    // spread operator 

    // in Array -> 
    const bros1 : string[] = ['Saide', 'Ameen', 'Mohon']
    const bros2 : string[] = ['Mamun', 'Shohag', 'Saif']
    
    bros1.push(...bros2)

    // in object ->
    const mentors1 = {
        typeScript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        nextJs: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // Learn rest operator -> rest operator make array with every single element. we use rest operator in a function parameter. 

    const greetFriends = (...friends: string[]) => {
      friends.forEach((friend: string) => console.log(`Hi ${friend}`)
      )     
    }

    greetFriends('mamun', 'saide', 'ameen', 'hridoy')
}
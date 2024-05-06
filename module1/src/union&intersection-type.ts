{
    // union type -> it work like or operator 


    // type FrontendDeveloper = 'FakibazDeveloper' | 'JuniorDeveloper'
    // type FullStackDeveloper = 'FakibazDeveloper' | 'ExpertDeveloper'

    // type Developer = FrontendDeveloper | FullStackDeveloper // this the combination type of other type

    // const newDeveloper : Developer = "FakibazDeveloper" 

    type User = {
        name: string;
        email?: string;
        gender: 'Male' | 'Female';
        bloodGroup: 'O+' | 'B+' | 'AB+'
    }

    const user: User = {
        name: 'Morshed',
        email: 'morzmamun@gmail.com',
        gender: 'Male',
        bloodGroup: 'O+'
    }

    // intersection type -> it work like a && operator 

    type FrontendDeveloper = {
        skills : string[];
        designation1: 'FrontendDeveloper'
    }
    type BackendDeveloper = {
        skills : string[];
        designation2: 'BackendDeveloper'
    }
}
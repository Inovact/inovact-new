import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import home from './../../../assets/home.png';
import projects from './../../../assets/project.png';
import idea from './../../../assets/idea.png';
import team from './../../../assets/users.svg';
import avatar from './../../../assets/avatar.png';

interface MenuList {
   text:string;
   icon:any;
   index:number;
   path:string;
}
interface TeamMenu {
   index:number;
   teamname:string;
   designation:string;
   icon:any;
   path:string;
}
interface ProjectCards{
   id?:number;
   title:string;
   name:string;
   image?:string;
   description:string;
   isComplete:boolean;
 };
 interface IdeaCards{
   id?:number;
   title:string;
   name:string;
   image?:string;
   description:string;
   isComplete:boolean;
 };
 interface TeamCards{
   id?:number;
   title:string;
   name:string;
   image?:string;
   description:string;
   isComplete:boolean;
 };
 interface MentorCard {
    id?:number;
    name:string;
    projects?:number;
    mentored:number;
 }
 interface ProfileCard {
    id:number;
    name:string;
    email:string;
    ph:number;
    src:string;
    projects:number;
    followers:number;
    following:number;
 }
 interface myProfileProject {
   id:number;
   name:string;
   description1:string;
   description2:string;
   src:string;
   projects:number;
   followers:number;
   following:number;
}
export const myProject :myProfileProject[]=[
{
   id:1,
   name:"Jane Austen",
   description1:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   description2:'this is so cool i love it ',
   src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   projects:12,
   followers:56,
   following:67,
},
{
   id:2,
   name:"Jane Austen",
   description1:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   description2:'this is so cool i love it ',
   src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   projects:12,
   followers:56,
   following:67,
},
{
   id:3,
   name:"Jane Austen",
   description1:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   description2:'this is so cool i love it ',
   src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   projects:12,
   followers:56,
   following:67,
},
{
   id:4,
   name:"Jane Austen",
   description1:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   description2:'this is so cool i love it ',
   src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   projects:12,
   followers:56,
   following:67,
},
{
   id:5,
   name:"Jane Austen",
   description1:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   description2:'this is so cool i love it ',
   src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   projects:12,
   followers:56,
   following:67,
},
]
 export const profileDetails :ProfileCard[]=[
   {
      id:1,
      name:"Jane Austen",
      email:"inovact@gmail.com",
      ph:1234645353,
      src:"https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      projects:12,
      followers:56,
      following:67,
   },
]

export const mentorDetails :MentorCard[]=[
    {
      id:1,
      name:"harry something",
      projects:100,
      mentored:283,
    },
    {
      id:2,
      name:"Admin",
      projects:100,
      mentored:283,
    },
    {
      id:3,
      name:"Admin",
      projects:100,
      mentored:283,
    },
    {
      id:4,
      name:"Admin",
      projects:100,
      mentored:283,
    },
 ]
export const teamDetails:IdeaCards[]=[
   {
   id: 1,
   title:'Title of the Team',
   name:'Jane Austen',
   description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   isComplete:true,
   image:avatar
   },

   {
      id: 1,
      title:'Title of the Idea',
      name:'Jane Austen',
      description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      isComplete:true,
      image:avatar
      },
];

export const ideaDetails:IdeaCards[]=[
   {
   id: 1,
   title:'Title of the Idea',
   name:'Jane Austen',
   description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   isComplete:true,
   image:avatar
   },

   {
      id: 1,
      title:'Title of the Idea',
      name:'Jane Austen',
      description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      isComplete:true,
      image:avatar
      },
];

export const teamlist: TeamMenu[]= [
   {
      index:4,
      teamname:"Team 1",
      designation:"admin",
      icon:team,
      path:'/feed',
   },
   {
      index:5,
      teamname:"Team 1",
      designation:"admin",
      icon:team,
      path:'/feed',
   },
];

export const projectDetails:ProjectCards[]=[
   {
   id: 1,
   title:'Title of the project',
   name:'Jane Austen',
   description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   isComplete:true,
   image:avatar
   },

   {id: 2,
   title:'Title of the project',
   name:'Jane Austen',
   description:'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
   
   isComplete:true,
   image:avatar
   },
];


export const sidebarData: MenuList[] = [
    {
       text:'Home',
       icon:home,
       index: 0,
       path:'/feed'
    },
    {
        text:'My Projects',
        icon:projects,
        index: 1,
        path:'/myprofile'
     },
     {
        text:'My Ideas',
        icon:idea,
        index: 2,
        path:'/myprofile'
     },
     {
        text:'Subscibers',
        icon:team,
        index: 3,
        path:'/myprofile'
     },
    
];
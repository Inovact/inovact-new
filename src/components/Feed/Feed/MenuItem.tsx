
interface SidebarItem {
    title: string;
    path: string;
    subnav?: SidebarItem[];
}
export const SidebarData: SidebarItem[] = [
    {
        title: 'Feed',
        path: '/feed',
        subnav: [
            {
                title: 'Projects',
                path: '/feed/projects',
            },
            {
                title: 'Ideas',
                path: '/feed/ideas',
            },
            {
                title: 'Subscriber',
                path: '/feed/subscriber',
            }
        ]
    },
    {
        title: 'My Profile',
        path: '/myprofile',
        subnav: [
            {
                title: 'Projects',
                path: '/myprofile/projects',
            },
            {
                title: 'Ideas',
                path: '/myprofile/ideas',
            },
            {
                title: 'Subscribers',
                path: '/myprofile/ideas',
            }
        ]
    },
    {
        title: 'Find a mentor',
        path: '/mentors',
    },
    {
        title: 'Investor',
        path: '/investors',
    },
    
    
];
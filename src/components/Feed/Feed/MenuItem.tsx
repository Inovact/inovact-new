
interface SidebarItem {
    title: string;
    path: string;
    subnav?: SidebarItem[];
}
export const SidebarData: SidebarItem[] = [
    {
        title: 'Feed',
        path: '/feed',
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
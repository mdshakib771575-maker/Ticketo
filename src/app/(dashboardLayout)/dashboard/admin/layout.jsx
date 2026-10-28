import { roleValidator } from '@/lib/api/session';


const OrganizerLayout = async ({children}) => {

   await roleValidator("admin")
    return  children
};

export default OrganizerLayout;
export const authConfig = {
    providers:[],
    pages:{
        signIn:"/login"
    },
    callbacks:{
        authorized({auth,request}){
            const isLoggedIn =auth?.user;
            const isonDashboard =request.nextUrl.pathname.startsWith("/dashboard");
            if(isonDashboard){
                if(isLoggedIn) return true;
                return false;
            }else if(isLoggedIn){
                return Response.redirect(new URL("/dashboard",request.nextUrl));
            }
            return true;
        }
    }
}
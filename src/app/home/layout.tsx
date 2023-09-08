import { HomeLayout } from "@/modules/home";

export default function LayoutHome({children}:{children: any}){
    return<>
    <HomeLayout>{children}</HomeLayout>
    </>

}
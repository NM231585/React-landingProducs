import type {Route} from "../+types/root";
import PageServices from "../pages/Servicios/PageServices";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Servicios"},
        {description: "Servicios"},
    ];
}


export default function Services() {
    return <PageServices />;
}

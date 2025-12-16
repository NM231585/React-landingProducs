import type {Route} from "../+types/root";
import PageCatalogo from "../pages/Catalogo/PageCatalogo";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Catalogo"},
        {description: "Catalogo"},
    ];
}

export default PageCatalogo;
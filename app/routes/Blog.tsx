import type {Route} from "../+types/root";
import PageBlog from "../pages/Blog/PageBlog";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Blog"},
        {description: "Blog"},
    ];
}

export default PageBlog;
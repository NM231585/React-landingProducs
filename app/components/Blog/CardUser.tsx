import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const CardUser = ({ user }: any) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-4" />
                    <a href={`mailto:${user.email}`} className="hover:text-blue-600">{user.email}</a>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-4" />
                    <span>{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGlobe} className="text-gray-400 w-4" />
                    <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {user.website}
                    </a>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                <p>{user.company.name}</p>
                <p>"{user.company.catchPhrase}"</p>
            </div>
        </div>
    );
};

export default CardUser;

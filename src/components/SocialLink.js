import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLink = ({ href, icon, className, size }) => (
    <Link href={href} className={className} >
        <FontAwesomeIcon size={size} icon={icon} />
    </Link>
);

export default SocialLink;

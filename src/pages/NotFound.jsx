import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div
                className="flex flex-col items-center justifycenter w-full h-full"
                style={{ backgroundColor: 'white' }}
            >
                <div className='text-center'>
                    <div>
                        <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
                            alt="Electrocuted Caveman 404" style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="">
                        <div className="text-7xl font-bold mb-4">404</div>
                        <p className="text-2xl font-bold mb-4">Page Not Found</p>
                    </div>
                    <Button>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default NotFound;
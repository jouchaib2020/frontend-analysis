import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface pageTitleProps{
    title: string,
}


const PageTitle: React.FC<pageTitleProps> = ({title})=>{
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location])
    return (
    <div>pageTitle</div>
  )
}

export default PageTitle
import Image from 'next/image';

const Card = ({image, title, figure, className, id}) => {
    return ( 
    
        <div className={`px-[24px] py-[30px] bg-primary-100 border border-primary-80 rounded-md hover:bg-primary-40 ${className}`}>
            <Image src={image} alt='image'/>
            <p className='text-body text-whiteText'>{title}</p>
            <p className='w-44 text-figure text-primary-60'>{figure}</p>
        </div>
     );
}
 
export default Card;
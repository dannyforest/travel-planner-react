interface Props{
    id:string,
    name:string,
    image:string,
}
export const ListTripEntry=({id,name,image}:Props)=>{

    return(
        <div
            style ={{
                width: '300px',
                height: '300px',
                padding:'40px',
                margin:'30px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(/images/${image}.webp)`

        }}
            key={id}>
            {name}
        </div>
    )
}
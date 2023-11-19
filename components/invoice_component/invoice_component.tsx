import React from 'react'


interface MyComponentProps {
    classN?: string;
    rNo?: string;
    date?: string;
    price?: string;
    name?: string;
    status?: string;
}

const statusLogic = (x: any) =>{
    const str = x.toLowerCase();
    console.log(str)
    if(str === 'paid'){
        return("success")
    }
    else if(str === 'draft'){
        return("color2")
    }
    else{
        return("darkorange")
    }
}

const InvoiceComponent: React.FC<MyComponentProps> = ({ classN, rNo, date, price, name, status }) => {
  return (
    <div className={`${classN} rounded-[0.5rem] mx-[1.5rem] h-[8.3rem] bg-color3 text-white`}>

        <div className='p-[1.5rem] flex justify-between items-center'>

        <div>
            <div className='flex'><p className='text-steelblue font-bold'>#</p><p className='font-bold'>{rNo}</p></div> 
            <p className='pt-[1.5rem] text-[.8rem] text-color2'>{date}</p>
            <div className='flex items-center pt-[0.7rem]'><p className='font-bold mr-[.3rem]'>$</p><p className='font-bold'>{price}</p></div>
        </div>

        <div>
            <p>{name}</p>
            <div className={`${'bg-'+statusLogic(status)} mt-[1.5rem] bg-opacity-[0.05] flex rounded-[.375rem]`}>
                <div className='flex items-center justify-center w-[6.2rem] h-[2.5rem] px-[1rem] py-[.8rem]'>

                <div className='flex items-center pr-[.5rem]'>
                    <div className={`${'bg-'+statusLogic(status)} w-[.5rem] h-[.5rem] rounded-[50%]`}></div>
                </div>
                <div className={`${'text-'+statusLogic(status)} font-bold`}>{status}</div>

                </div>
            </div>
        </div>

        </div>

    </div>
  )
}

export default InvoiceComponent

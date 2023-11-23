'use client'
import React from 'react';
import BackButton from '@/components/back_button/back_button';

const InvoiceDetails: React.FC = () => {
  const address = (x : string) =>{
    const arr = x.split(',')
    return(
        <div>
            {
              arr.map((para, index)=>{
                return(<p key={index} className='text-color2 text-[.8rem] pt-[.3rem]'>{para}</p>)
              })
            }
        </div>
    )
  }
  return (
    <div className="h-full w-full bg-color1 pb-[6rem]">
      <BackButton />

      <div className='mt-[1.9rem] rounded-[0.5rem] mx-[1.5rem] h-[5.6rem] bg-color3 text-white'>
          <div className='p-[1.5rem] flex justify-between items-center'>

              <div>Status</div>

              <div className={`${'bg-darkorange'} bg-opacity-[0.05] flex rounded-[.375rem]`}>
                <div className='flex items-center justify-center w-[6.2rem] h-[2.5rem] px-[1rem] py-[.8rem]'>
                  <div className='flex items-center pr-[.5rem]'>
                  <div className={`${'bg-darkorange'} w-[.5rem] h-[.5rem] rounded-[50%]`}></div>
                  </div>
                <div className={`${'text-darkorange'} font-bold`}>{'paid'}</div>
              </div>
          </div>
        </div>
      </div>

      <div className='my-[1.9rem] rounded-[0.5rem] mx-[1.5rem] bg-color3 text-white'>
          <div className='p-[1.5rem]'>

              <div className='flex'>
                    <div className='flex flex-col w-[50%]'>
                          <div className='pb-[1.88rem]'>
                              <div className='flex'><p className='text-steelblue'>#</p><p>XM9141</p></div>
                              <p className='text-color2 pt-[.25rem]'>Graphic Design</p>
                          </div>
                          <div>
                                {address("19 Union Terrace,London,E1 3EZ,United Kingdom")}
                          </div>
                          <div className='mt-[1.9rem]'>
                            <p className='text-[.8rem]'>Invoice Date</p>
                            <p className='font-bold text-[.9rem] mt-[.8rem]'>21 August 2021</p>
                          </div>
                          <div className='mt-[1.9rem]'>
                            <p className='text-[.8rem]'>Payment Due</p>
                            <p className='font-bold text-[.9rem] mt-[.8rem]'>20 Sept 2021</p>
                          </div>
                          <div className='mt-[2.2rem]'>
                            <p className='text-[.8rem]'>Sent to</p>
                            <p className='font-bold text-[.9rem] mt-[.8rem]'>alexgrim@mail.com</p>
                          </div>
                          
                    </div>
                    <div className='flex items-center mt-[6rem]'>
                          <div>
                              <p className='text-[.8rem]'>Bill to</p>
                              <p className='font-bold text-[.9rem] mt-[.8rem]'>Alex Grim</p>
                              <div className='mt-[.44rem]'>
                                  {address('84 Church Way,Bradford,BD1 9PB, United Kingdom')}
                              </div>
                          </div>
                    </div>
              </div>
              
              <div>
                    <div className="mt-[1.9rem] rounded-[0.5rem] h-[14rem] bg-darkblue text-white">
                        <div className='p-[1.56rem]'>
                            <div className='flex pl-[1.5rem] py-[1.5rem] justify-between'>
                                <div className='flex flex-col'>
                                      <p>Banner Design</p>
                                      <p>1 x $156.00</p>
                                </div>
                                <div className='flex items-center'><p>$156.00</p></div>
                            </div>  
                            <div className='flex pl-[1.5rem] justify-between'>
                                <div>
                                      <p>Banner Design</p>
                                      <p>1 x $156.00</p>
                                </div>
                                <div className='flex items-center'><p>$156.00</p></div>
                            </div>  
                        </div>

                        <div>

                        </div>
                    </div>
              </div>     
              
          </div>
      </div>

    </div>
  );
};

export default InvoiceDetails;

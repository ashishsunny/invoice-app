'use client'
import FilterBar from "@/components/filter_bar/filter_bar"
import InvoiceComponent from "@/components/invoice_component/invoice_component"
import axios from "axios"

const getInvoice = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data
  }
  catch (error) {
    console.error(error);
  }
}

type dataType = {
  id: number;
  rNo: string;
  date: string;
  price: string;
  name: string;
  status: string;
}

const InvoicesPage: React.FC = async () => {
  const data: dataType[] = await getInvoice();


  return (
    <div className="h-[100%] w-[100%] bg-color1 pb-[6rem]">
      <FilterBar />
      {
        data.map(item => {
          const props = {
            rNo: item.rNo,
            data: item.date,
            price: item.price,
            name: item.name,
            status: item.status
          }
          return (
            <InvoiceComponent classN="mb-[1rem]" key={item.id} {...props} />
          )
        })
      }
    </div>
  )
}

export default InvoicesPage

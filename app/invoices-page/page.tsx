'use client'
import FilterBar from "@/components/filter_bar/filter_bar"
import InvoiceComponent from "@/components/invoice_component/invoice_component"


const InvoicesPage : React.FC= () => {
  
  const invoicecardProps = {
    // classN: CSSProperties,
    rNo: 'RT3080',
    date: 'Due 19 Aug 2021',
    price: '1,800.90',
    name: 'Jensen Huang',
    status: 'Paid',
  };

  return (
    <div className="h-screen w-screen bg-color1">
        <FilterBar />
        <InvoiceComponent {...invoicecardProps} />
    </div>
  )
}

export default InvoicesPage

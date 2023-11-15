'use client'
import FilterBar from "@/components/filter_bar/filter_bar"
import InvoiceComponent from "@/components/invoice_component/invoice_component"


const InvoicesPage : React.FC= () => {
  return (
    <div className="h-screen w-screen bg-color1">
        <FilterBar />
        <InvoiceComponent/>
    </div>
  )
}

export default InvoicesPage

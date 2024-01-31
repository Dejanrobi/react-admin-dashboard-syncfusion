import React from 'react';

import { GridComponent, ColumnsDirective, ColumnDirective, Resize,
Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

import './pages.css';

const Orders = () => {

  const { currentMode } = useStateContext()

    const gridStyle ={
      background: currentMode === 'Dark' ? '#33373E' : '#ffffff'
      
    }

    
  return (
    <div className='m-2 md:m-10 p-2 mt-24 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Orders" />
      <p>{currentMode}</p>

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        
      >
        <ColumnsDirective>
          {
            ordersGrid.map((item, index)=>(
              <ColumnDirective key={index} {...item} style={{ background: '#ffffff' }}/>
            ))
          }
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders

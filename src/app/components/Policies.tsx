import React from 'react'

const Policies = () => (
  <section className='container mx-auto mt-12 px-4 sm:px-8 lg:px-16'>
    <h2 className='text-2xl font-bold mb-4'>Policies</h2>
    <div className='border rounded-lg'>
      <div className='p-6 border-b grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='font-semibold md:col-span-1'>Check-in</h3>
        <div className='md:col-span-2'>
          <p className='font-semibold'>Available 24 hours</p>
          <p className='text-sm text-gray-600'>
            Guests are required to show a photo identification and credit card upon check-in. You'll
            need to let the property know in advance what time you'll arrive.
          </p>
        </div>
      </div>
      <div className='p-6 border-b grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='font-semibold md:col-span-1'>Check-out</h3>
        <div className='md:col-span-2'>
          <p className='font-semibold'>Available 24 hours</p>
        </div>
      </div>
      <div className='p-6 border-b grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='font-semibold md:col-span-1'>Cancellation/ prepayment</h3>
        <div className='md:col-span-2'>
          <p className='text-sm text-gray-600'>
            Cancellation and prepayment policies vary according to accommodation type. Please check
            what{' '}
            <a href='#' className='text-blue-600 underline'>
              conditions
            </a>{' '}
            may apply to each option when making your selection.
          </p>
        </div>
      </div>
      <div className='p-6 border-b grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='font-semibold md:col-span-1'>Children and beds</h3>
        <div className='md:col-span-2'>
          <p className='font-semibold'>Child policies</p>
          <p className='text-sm text-gray-600 mb-2'>
            Children of any age are welcome. Children 12 years and above will be charged as adults
            at this property. To see correct prices and occupancy information, please add the number
            of children in your group and their ages to your search.
          </p>
          <p className='font-semibold'>Cot and extra bed policies</p>
          <p className='text-sm text-gray-600'>
            The number of extra beds allowed is dependent on the option you choose. Please check
            your selected option for more information. There are no cots available at this property.
            All extra beds are subject to availability.
          </p>
        </div>
      </div>
      <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <h3 className='font-semibold md:col-span-1'>No age restriction</h3>
        <div className='md:col-span-2'>
          <p className='text-sm text-gray-600'>There is no age requirement for check-in</p>
        </div>
      </div>
    </div>
  </section>
)

export default Policies

import React from 'react';


interface PolicyRowProps {
  title: string;
  description: React.ReactNode;
  isLast?: boolean;
}


const policiesData = [
  {
    title: 'Check-in',
    description: (
      <>
        <p className='font-semibold'>Available 24 hours</p>
        <p className='text-sm text-gray-600'>
          Guests are required to show a photo identification and credit card upon check-in.
          You&apos;ll need to let the property know in advance what time you&apos;ll arrive.
        </p>
      </>
    ),
  },
  {
    title: 'Check-out',
    description: <p className='font-semibold'>Available 24 hours</p>,
  },
  {
    title: 'Cancellation/ prepayment',
    description: (
      <p className='text-sm text-gray-600'>
        Cancellation and prepayment policies vary according to accommodation type. Please check what{' '}
        <a href='#' className='text-blue-600 underline'>
          conditions
        </a>{' '}
        may apply to each option when making your selection.
      </p>
    ),
  },
  {
    title: 'Children and beds',
    description: (
      <>
        <p className='font-semibold'>Child policies</p>
        <p className='text-sm text-gray-600 mb-2'>
          Children of any age are welcome. Children 12 years and above will be charged as adults at
          this property. To see correct prices and occupancy information, please add the number of
          children in your group and their ages to your search.
        </p>
        <p className='font-semibold'>Cot and extra bed policies</p>
        <p className='text-sm text-gray-600'>
          The number of extra beds allowed is dependent on the option you choose. Please check your
          selected option for more information. There are no cots available at this property. All
          extra beds are subject to availability.
        </p>
      </>
    ),
  },
  {
    title: 'No age restriction',
    description: <p className='text-sm text-gray-600'>There is no age requirement for check-in</p>,
  },
];


// Apply the interface to your component
const PolicyRow: React.FC<PolicyRowProps> = ({ title, description, isLast = false }) => (
  <div className={`p-6 grid grid-cols-1 md:grid-cols-3 gap-4 ${!isLast ? 'border-b' : ''}`}>
    <h3 className='font-semibold md:col-span-1'>{title}</h3>
    <div className='md:col-span-2'>{description}</div>
  </div>
);

// ... (Policies component remains the same) ...
const Policies = () => (
    <section className='container mx-auto mt-12 px-4 sm:px-8 lg:px-16'>
      <h2 className='text-2xl font-bold mb-4'>Policies</h2>
      <div className='border rounded-lg'>
        {policiesData.map((policy, index) => (
          <PolicyRow
            key={policy.title}
            title={policy.title}
            description={policy.description}
            isLast={index === policiesData.length - 1}
          />
        ))}
      </div>
    </section>
  );

export default Policies;
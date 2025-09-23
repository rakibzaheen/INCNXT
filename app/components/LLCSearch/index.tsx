import Link from "next/link";

const LLCSearch = () => {

  return (
    <div className='mt-2'>
        <h2 className="text-3xl font-bold mb-2">Launch Your LLC in Minutes</h2>
        <p>Choose the right entity and start your business with confidence. We guide you through LLC, S-Corp, C-Corp, and Nonprofit formation.</p>
        <form className="mt-8 flex flex-col md:flex-row gap-6 items-center w-full" onSubmit={e => e.preventDefault()}>
            <div className="flex-2 flex flex-col relative w-full md:w-auto">
            <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#D51F27] text-white text-1xl">
                1
                </span>
                <select
                id="entity"
                name="entity"
                className="pl-14 pr-4 py-5 border border-[#0F395D] rounded-lg text-lg w-full"
                >
                <option defaultValue="" disabled selected={true}>Pick Entity</option>
                <option defaultValue="llc">LLC</option>
                <option defaultValue="scorp">S-Corporation</option>
                <option defaultValue="ccorp">C-Corporation</option>
                <option defaultValue="nonprofit">Nonprofit</option>
                </select>
            </div>
            </div>
            <div className="flex-2 flex flex-col relative w-full md:w-auto">
            <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#D51F27] text-white text-1xl">
                2
                </span>
                <select
                id="state"
                name="state"
                className="pl-14 pr-4 py-5 border border-[#0F395D] rounded-lg text-lg w-full"
                >
                {[
                    'Select State', 'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
                    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                    'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
                    'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
                    'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
                    'Wisconsin','Wyoming'
                ].map(state => (
                    <option key={state} value={state} selected={state === 'Select State'} disabled={state === 'Select State'}>
                    {state}
                    </option>
                ))}
                </select>
            </div>
            </div>
            <Link href="/form-order" passHref>
              <button
                type="submit"
                className="flex-1 bg-[#D51F27] text-white font-bold px-6 py-5 rounded w-full md:w-auto p"
              >
                START MY BUSINESS
              </button>
            </Link>
        </form>
        <hr className="my-8 border-t border-gray-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between py-4 px-6 border border-gray-300 rounded-lg leading-normal bg-white transition">
                <div>
                    <div className="text-lg font-semibold mb-2">Not sure which entity type?</div>
                    <div className="text-gray-500">Quick quiz to determine the best structure for your business</div>
                </div>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="#D51F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border border-gray-300 leading-normal rounded-lg bg-white transition">
                <div>
                    <div className="text-lg font-semibold mb-2">State LLC/Corp Guides</div>
                    <div className="text-gray-500">Your essential resource for forming and managing companies</div>
                </div>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="#D51F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  );
};

export default LLCSearch;
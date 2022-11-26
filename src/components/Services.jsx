import {content} from '../Content'

const Services = () => {
  const {services} = content
  const servicesValue = services.service_content.map((item,i)=>(
    <div className="flex items-center justify-center bg-bg_light_primary flex-col py-10 gap-4 cursor-pointer border-2 border-slate-200 rounded-xl group-hover:blur-sm 
    hover:!blur-none">
        <div className='flex items-center justify-center flex-col'>
          <img src={item.logo} alt="" />
          <h6>{item.title}</h6>
        </div>
        <div className='text-center px-4'>
          <p className='leading-7'>{item.para}</p>
        </div>
    </div>
  ))
  console.log(services)

  return <section className='p-10'>
            <div className="">
              <div className='w-full flex items-start justify-start flex-col gap-2 ml-[50px]'>
                <h2 className='md:text-3xl text-2xl'>{services.title}</h2>
                <h4 className='text-gray'>{services.subtitle}</h4>
              </div>
            </div>
            <div className="flex items-center justify-around gap-4 px-8 py-8 group">
              {servicesValue}
            </div>
        </section>;
};

export default Services;

import {content} from '../Content'

const Hero = () => {
  const {hero} = content
  console.log(hero)
  return <section>
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-2/3 h-full flex items-center justify-end gap-4 flex-col pb-20 px-6 pt-5">
                  <div className='flex flex-col items-start justify-start pb-5'>
                    <h2 className='pb-6'>{hero.title}</h2>
                    <button className='btn self-end'>{hero.btnText}</button>
                  </div>
                  <div className='flex flex-col gap-10'>
                    {hero.hero_content.map((item,i) =>(
                      <div key={i} className={`flex items-center w-80 gap-5
                      ${i === 1 && " flex-row-reverse text-right"}  `}>
                        <h3>{item.count}</h3>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="w-1/3 h-full bg-primaryLinear relative">
                <h1 className='text-[#eaf2fa] rotate-90 absolute right-[-70px] top-[12rem]'>{hero.firstName+" "}<span className='text-dark_primary'>{hero.LastName}</span></h1>
                <img src={hero.image} alt="picture" className='absolute left-[-14rem] bottom-0' />
              </div>
            </div>
        </section>;
};

export default Hero;

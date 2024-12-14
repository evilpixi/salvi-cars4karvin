import React from 'react';
import Image from 'next/image';
import Badge from '@components/Badge';

interface CardProps
{
  make: string;
  model: string;
  version: string;
  km: string;
  year: number;
  price: string;
  imageUrl: string;
  city: string;
}

const Card: React.FC<CardProps> = ({
  make,
  model,
  version,
  km,
  year,
  price,
  imageUrl,
  city
}) =>
{
  return (
    <article className="w-[296px] h-auto rounded-xl flex flex-col shadow-xl"
      style={{ boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px 0px rgba(0, 0, 0, 0.09)" }}>
      <div className="w-full h-auto pt-2 pl-2 pr-2">
        <div className="w-[280px] h-[196px] rounded-lg">
          <div className="overflow-hidden rounded-lg relative w-full h-full">
            <Image
              src={imageUrl}
              alt={`${make} ${model}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto pt-3 pr-4 pb-3 pl-4 gap-2 flex flex-col">
        <div className="w-full h-auto flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <Badge text={`${year}`} /> <Badge text={`${km}`} />
          </div>
          <div>
            <header className="text-base font-bold">
              {make} {model}
            </header>
            <div className="text-base font-normal">
              {version}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          <div className="text-secondary font-medium leading-7 text-2xl">
            {/* style={{ fontSize: '1.375rem', lineHeight: '30px' }}> */}
            {price}
          </div>
          <div className="text-secondaryText text-sm leading-5">
            {city}
          </div>

          <div className="w-full h-auto pt-2 pb-1">
            <button className="bg-primary rounded-full w-full h-auto p-5 pt-3 pb-3 gap-2">
              <span className="text-foregroundText text-sm leading-5 font-bold">
                Simular Parcelas
              </span>
            </button>
          </div>
        </div>

      </div>
    </article >
  );
};

export default Card;

import Card from '@/components/Card/Card';
import styles from './page.module.scss';

export type TData = {
  id: number;
  price: number;
  name: string;
  description: string;
  colors: string[];
  images: {
    [key: string]: string;
  }
}

const data: TData[] = [
  {
    id: 1,
    price: 100,
    name: 'Zebronics head phone',
    description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
    colors: ['#EE4444', '#3C81F6', '#000000'],
    images: {
      '#EE4444': 'https://m.media-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg',
      '#000000': 'https://i.ebayimg.com/00/s/MTUwMFgxMTk3/z/AkEAAOSwy9thMSaQ/$_57.JPG?set_id=8800005007',
      '#3C81F6': 'https://media.pricebook.co.id/images/product/L/93363_L_1.jpg',
    },
  }
]

export default function Home() {

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {data.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </ul>
    </main>
  )
}

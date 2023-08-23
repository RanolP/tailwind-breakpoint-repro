import { Tailwind } from '@react-email/components';
import tailwindConfig from '../tailwind.config';

const Test = () => (
  <Tailwind config={tailwindConfig}>
    <html>
      <head />
      <body className="bg-white">
        <div className="sm:bg-red-500">Test</div>
        <div className="md:bg-orange-500">Test</div>
        <div className="lg:bg-yellow-500">Test</div>
        <div className="xl:bg-green-500">Test</div>
        <div className="2xl:bg-blue-500">Test</div>
      </body>
    </html>
  </Tailwind>
);

export default Test;

import { IMenuStateProps } from '../App';
import Nav from './navbar';

export default function Header({ setMenuOpen, menuOpen }: IMenuStateProps) {
  return (
    <div className="flex sm:justify-between items-center mb-20 max-lg:mb-36 max-md:mb-20 max-sm:mb-10 max-sm:py-5 sm:py-10 max-lg:self-center max-sm:self-end">
      <div className="flex justify-center items-center gap-2 max-lg:hidden">
        <h1 className="sm:text-3xl max-sm:text-2xl font-bold">Theo</h1>
        <h1 className="sm:text-3xl max-sm:text-2xl font-bold bg-gradient-to-r from-ecru to-garnet bg-clip-text text-[transparent] inline-block">
          Cooper-Brown
        </h1>
      </div>
      <Nav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </div>
  );
}

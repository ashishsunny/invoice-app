'use client'
import invoice_logo from '../../public/images/invoice-logo.png'

const NavLogo: React.FC = () => {
  return (
    <div className="nav_logo" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="nav_logo_container" style={{ width: '4.5rem', height: '4.5rem', left: '0', top: '0', position: 'absolute' }}>
        <div className="mask" style={{ width: '4.5rem', height: '4.5rem', left: '0', top: '0', position: 'absolute', background: '#7C5DFA', borderTopLeftRadius: '1.25rem', borderTopRightRadius: '1.25rem' }}></div>
        <div className="mask" style={{ width: '4.5rem', height: '4.5rem', left: '0', top: '0', position: 'absolute', background: '#7C5DFA', borderTopLeftRadius: '1.25rem', borderTopRightRadius: '1.25rem' }}></div>
        <div className="mask" style={{ width: '4.5rem', height: '4.5rem', left: '4.5rem', top: '2.27rem', position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#9277FF', borderTopLeftRadius: '1.25rem', borderTopRightRadius: '1.25rem' }}></div>
      </div>
      <img className="logo_img" style={{ width: '3.75rem', height: '3.625rem', left: '0.375rem', top: '0.4375rem', position: 'absolute' }} src="/images/invoice-logo.png" alt="Placeholder Image" />
    </div>
  );
};

export default NavLogo;

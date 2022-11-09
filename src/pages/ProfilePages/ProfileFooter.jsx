import {FaDiscord, FaTelegram, FaTiktok, FaFacebook, FaTwitter, FaReddit,
FaInstagram, FaYoutube,} from 'react-icons/fa'

function ProfileFooter() {
  return (
    <div className='mx-6 flex flex-row justify-between'>
      <div className="about ">
        <h2 className='text-lg font-bold text-gray-700'> About Us</h2>
        <ul  className=' text-gray-400 text-sm cursor-pointer font-bold'>
          < li>About</ li >
          < li>Careers</ li >
          < li >Business Contact</ li >
          < li >Community</ li >
          < li >Binance Blog</ li >
          < li >Terms</ li >
          < li >Privacy</ li >
          < li >Risk Warning</ li >
          < li >Annoucements</ li >
          < li >News</ li >
          < li >Notices</ li >
          < li >Binance Pay</ li >
          < li >Cookie Preference</ li >
        </ul>
      </div>
      <div className="products ">
        <h2 className='text-lg font-bold text-gray-700'>Products</h2>
        <ul  className=' text-gray-400 text-sm cursor-pointer font-bold'>
          < li >Exchange</ li >
          < li >Academy</ li >
          < li >Binance Live</ li >
          < li >Charity</ li >
          < li >Card</ li >
          < li >Labs</ li >
          < li >LaunchPad</ li >
          < li >Research</ li >
          < li >Trust Wallet</ li >
          < li >Nft</ li >
          < li >Notices</ li >
          < li >Binance Pay</ li >
          < li >Binance Gift Card</ li >
        </ul>
      </div>
      <div className="service">
        <h2 className='text-lg font-bold text-gray-700'>Service</h2>
        <ul  className=' text-gray-400 text-sm cursor-pointer font-bold'>
          < li >Downloads</ li >
          < li >Desktop Application</ li >
          < li >Buy Crypto</ li >
          < li >Institutional & VIP services</ li >
          < li >OTC Trading</ li >
          < li >Refferal</ li >
          < li >Affliate</ li >
          < li >Blog</ li >
          < li >Lisitng Application</ li >
          < li >P2P Merchant Application</ li >
          < li >P2Pro Merchant Application</ li >
          < li >Historical Market Data</ li >
          < li >Proof of Asset</ li >
        </ul>
      </div>
      <div className="Support">
        <h2 className='text-lg font-bold text-gray-700'>Support</h2>
        <ul  className=' text-gray-400 text-sm cursor-pointer font-bold'>
          < li >Give US Feedback</ li >
          < li >Support Center</ li >
          < li >Submit a Request</ li >
          < li >Apis</ li >
          < li >Fees</ li >
          < li >Trading Rules</ li >
          < li >Binance Verify</ li >
          < li >Law Enforcement Request</ li >
          < li >Binance Legal(Court Orders)</ li >
          < li >Binance Airdrop Portal</ li >
        </ul>
      </div>
      <div className="Learn">
        <h2 className='text-lg font-bold text-gray-700'>Learn</h2>
        <ul  className=' text-gray-400 text-sm cursor-pointer font-bold'>
          < li >Learn & Earn</ li >
          < li >Browse Crypto Prices</ li >
          < li >Buy BNB</ li >
          < li >Buy BUSD</ li >
          < li >Buy  Bitcoin</ li >
          < li >Buy Ethereum</ li >
          < li >Buy Litecoin</ li >
          < li >Buy Ripple</ li >
          < li >Buy  Bitcoin Cash</ li >
          < li >Buy Dogecoin</ li >
          < li >Buy Defi</ li >
          < li >Buy SHIB</ li >
          < li >Buy Tradable Altcoins</ li >
        </ul>
      </div>
        <div className="community ml-4">
        <h2 className='text-lg font-bold text-gray-700'>Community</h2>
        <ul className='text-gray-400 flex flex-wrap cursor-pointer'>
          <li className='py-2 px-2'><FaDiscord/></li>
          <li className='py-2 px-2'><FaTelegram/></li>
          <li className='py-2 px-2'><FaTiktok/></li>
          <li className='py-2 px-2'><FaFacebook/></li>
        </ul>
        <ul className='text-gray-400 flex flex-wrap cursor-pointer'>
        <li className='py-4 px-2'><FaTwitter/></li>
          <li className='py-4 px-2'><FaReddit/></li>
           <li className='py-4 px-2'><FaInstagram/></li>
           <li className='py-4 px-2'><FaYoutube/></li>
        </ul>
        </div>
    </div>
  )
}

export default ProfileFooter

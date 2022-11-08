import React from 'react';
import styled from 'styled-components';
import imgService from '../assets/img-service.jpg';
import imgMap from '../assets/map.png';
import AngleSale from '../assets/angel-sale.png';
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";


const Events = () => {
  return (
    <Wrapper>
      <div className='wrapper'>
        <div className="wrapper__inner">

          <div className='child-block'>
            <div className='get-to-know__description'>
              <p className='get-to-know__title'>We are NK Cyber Cinema</p>
              <p className='get-to-know__sub-title'>GET TO KNOW US</p>
              <p className='get-to-know__text'>Thành lập từ năm 2008, với cụm rạp đầu tiên tọa lạc tại NK Cyber Cinema - thành phố Đà Nẵng, nơi đây luôn mong muốn mang lại cho khách hàng, những người yêu thích điện ảnh, trải nghiệm sống động, chân thật cùng những giây phút thư giãn tuyệt đối bên gia đình, bạn bè và người thân, hệ thống rạp chiếu phim NK Cyber Cinema Việt Nam đã nỗ lực không ngừng nhằm phát triển chất lượng dịch vụ và phục vụ tốt nhất với mục tiêu đem lại chất lượng dịch vụ - phục vụ mang đẳng cấp quốc tế với mức giá ưu đãi.</p>
            </div>
            <div className='get-to-know__wrap-img'>
              <img src={imgService} alt="" />
            </div>
          </div>
          <div className='child-block location'>
            <div className='get-to-know__description'>
              <p className='get-to-know__title'>Địa Chỉ</p>
              <p className='get-to-know__sub-title'>Chi Nhánh Đà Nẵng</p>
              <p className='get-to-know__text'>103 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng</p>
            </div>
            <div className='get-to-know__wrap-img'>
              <img src={imgMap} alt="" />
            </div>
          </div>
          <div className='child-block location'>
            <div className='get-to-know__description'>
              <p className='get-to-know__title'>Liên Hệ Rạp:</p>
              <ul className='list-contact'>
                <li><AiFillPhone /><span>0123456789</span></li>
                <li><AiOutlineMail /><span>nk-cenima@cyber.com</span></li>
                <li><BsFillPinMapFill /><span>103 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng</span></li>
              </ul>

            </div>
            <div className='get-to-know__wrap-img'>
              <img src={AngleSale} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Events;

export const Wrapper = styled.div`
  .wrapper {
    margin: 12rem auto 3rem auto;
    min-height: 500px;
    width: 60%;
    img {
      border-radius: 30px;
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    .child-block {
      display: flex;
      gap: 50px;
    }
    .get-to-know__description {flex: 1}
    .get-to-know__wrap-img {flex: 1}
    .get-to-know__title {
      font-size: 20px;
      color: var(--primary-yellow)
    }
    .get-to-know__sub-title {
      font-size: 30px;
      font-weight: bold;
      color: var(--primary-white)
    }
    .wrapper__inner {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    .list-contact {
      margin-top: 10px;
      li {
        display: flex;
        margin-top: 5px;
        align-items: center;
        gap: 10px;
      }
    }
    
  }
  @media screen and (max-width: 1024px) {
    .wrapper {
      width: 100%;
      padding: 0 80px;
      /* margin: 0 80px; */
    }
      .child-block {
        flex-direction: column;
      }
    }
`;

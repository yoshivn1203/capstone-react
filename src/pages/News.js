import React from 'react';
import styled from 'styled-components';
import bg from '../assets/tin-tuc.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import { createBrowserHistory } from 'history';

const mainnew = [{'name':'SẮP RA MẮT - CHIẾN BINH BÁO ĐEN 3D (C13): WAKANDA BẤT DIỆT','detail':'Nữ hoàng Ramonda, Shuri, M’Baku, Okoye và Dora Milaje chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp của các thế lực thế giới sau cái chết của Vua T’Challa. Khi người Wakanda cố gắng nắm bắt chương tiếp theo của họ, các anh hùng phải hợp tác với nhau với sự giúp đỡ của War Dog Nakia và Everett Ross và tạo ra một con đường mới cho vương quốc Wakanda.',"image":"https://cinestar.com.vn/pictures/Cinestar/11-2022/wakanda-forever-black-panther.jpg"}]
const postnew = [{'id':0,'name':'ĐĂNG KÝ OMNI – NHẬN VÉ PHIM HAY','detail':"1. Tên chương trình: “Tháng 11 khuyến mại: Đăng ký OMNI – Nhận vé phim hay”\
2. Thời gian chương trình: Chương trình triển khai từ ngày 01/11/2022 đến ngày 30/11/2022 hoặc đến khi sử dụng hết ngân sách nhận thưởng.\
3. Địa bàn, phạm vi áp dụng: Toàn quốc\
4. Đối tượng tham gia: Khách hàng chưa có tài khoản thanh toán tại OCB.\
5. Nội dung chương trình:\
Chương trình ‘’Tháng 11 khuyến mại: Đăng ký OMNI – Nhận vé phim hay’’ là chương trình ưu đãi đặc biệt dành cho Khách hàng cá nhân mới chưa đăng ký sử dụng ứng dụng Ngân hàng số OCB OMNI, chưa có tài khoản thông qua hệ thống eKYC sàng lọc.","image":"https://www.cgv.vn/media/wysiwyg/2022/112022/CGV-OMNI-350x495.png"},
            {'id':1,'name':'LY AVATAR 2','detail':"1. Thời gian áp dụng: Từ 04/11/2022 trở đi.\
            2. Chi tiết Combo:\
            - Power Combo giá 239k bao gồm: 1 Ly Avatar (không bao gồm nước), 1 Bắp Ngọt 44Oz và 01 Coke 32Oz.\
            - Super Power Combo: 1 Ly Avatar (không bao gồm nước), 1 Bắp Ngọt 44Oz và 02 Coke 32Oz.\
            3. Điều kiện và điều khoản:\
            - Tại TP Hồ Chí Minh: Combo có mặt tại các rạp từ ngày 04/11/2022.\
            - Hà Nội và các tỉnh thành khác: Combo có mặt tại các rạp từ ngày 06/11/2022.\
            - Số lượng ly Avatar có hạn, chương trình có thể kết thúc sớm.","image":"https://www.cgv.vn/media/wysiwyg/2022/112022/Avatar_2_Combo_N_O_350x495.png"},
            {'id':2,'name':'DINH DƯỠNG MÊ LY - DAI NGON THẬT ĐÃ','detail':"NuVi Jelly Thạch Đào mới – món quà dinh dưỡng thơm ngon với cách thưởng thức độc đáo, mới lạ được bao bạn nhỏ thích mê!\
            Với thành phần từ nước ép đào ở dạng thạch dẻo dai, thanh mát. Đặc biệt không chất bảo quản, rất an toàn cho các bé.\
            Sản phẩm tự hào sở hữu công thức NuVi Power độc quyền được nghiên cứu và phát triển bởi Viện nghiên cứu dinh dưỡng Nutifood Thụy Điển cho bé Cao Lớn Thông Minh.\
            Sản phẩm mang đến cách thưởng thức độc đáo mới lạ BÓP – HÚT – NHAI được trẻ em yêu thích và thưởng thức mỗi ngày.\
            Ngoài ra, từ 15/09/2022 - 15/12/2022, CGV hãy cùng NuVi chinh phục hành trình săn Linh thú và sưu tầm Thẻ Đổi quà có trong mỗi thùng Jelly Thạch Đào để rinh về nhiều siêu quà cực đỉnh, hứa hẹn sẽ khiến các bạn nhỏ thích mê đó cô chú ơi!\
            - Sưu tầm đủ 24 Thẻ Đổi quà - Đổi ngay 01 Bộ Dụng Cụ Học Tập Sáng Tạo\
            - Sưu tầm đủ 36 Thẻ Đổi quà - Đổi ngay 01 Bảng Vẽ Điện Tử Thông Minh\
            - Sưu tầm đủ 48 Thẻ Đổi quà - Đổi ngay 01 Balo Chống Gù Cực Chất\
            - Sưu tầm đủ 56 Thẻ Đổi quà + 01 Thẻ Đồng hồ - Đổi ngay 01 Đồng Hồ Định Vị Siêu Ngầu\
            - Hạn chót thu Thẻ Đổi quà NuVi: Hết ngày 15/12/2022.\
            - Hạn chót NuVi trao quà cho khách hàng trúng giải: Hết ngày 31/12/2022.\
            Các thành viên CGV có thể tìm mua NuVi Jelly Thạch Đào cho bé tại hệ thống các cửa hàng Nutifood Ngôi Nhà Dinh Dưỡng trên toàn quốc hoặc có thể mua tại https://nutifoodshop.com/landing-page/sua-nuvi\
            NuVi Jelly Thạch Đào, Bóp – Hút – Nhai, Dai Ngon Thật Đãaaaaa!\
            #NuVi #NuViPower #ThếGiớiNuVi","image":"https://www.cgv.vn/media/wysiwyg/2022/102022/221013_Nuvi_Jelly_Thach_Dao_rolling_banner_350x495-02.jpg"},
            {'id':3,'name':'BLACK PANTHER COMBO','detail':"1. Thời gian áp dụng: Từ 14.10.2022 trở đi.\
            2. Chi tiết Combo:\
            - Combo Black Panther giá 299k bao gồm: 01 hộp đựng bắp Black Panther (fill đầy bắp tùy chọn vị) và 01 nước siêu lớn.\
            - Thêm 01 nước siêu lớn chỉ với 9k tại rạp.\
            3. Điều kiện và điều khoản:\
            - Áp dụng tất cả các cụm rạp CGV trên toàn quốc.\
            - Áp dụng được tùy chọn vị bắp yêu thích (không bao gồm bắp Mix)\
            - Sản phẩm không bao gồm hộp đựng.\
            - Số lượng hộp bắp Black Panther có hạn, Combo có thể hết sớm.","image":"https://www.cgv.vn/media/wysiwyg/2022/102022/BP_Combo_350x495.png"} 
            ]
const voucher = [{'id':0,'name':'Khuyen mai 50%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'},
              {'id':1,'name':'Khuyen mai 150%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'},
              {'id':2,'name':'Khuyen mai 250%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'},  
              {'id':3,'name':'Khuyen mai 350%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'},  
              {'id':4,'name':'Khuyen mai 450%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'} ,  
              {'id':5,'name':'Khuyen mai 550%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'}  

            ]
const hotnew = [{'name':'johny','detail':'trung voucher giam gia 50% khi mua ve tai website','img':''},
                {'name':'Tamiki','detail':'trung voucher giam gia 50% khi mua ve tai website','img':''},
                {'name':'Hakana','detail':'trung voucher giam gia 50% khi mua ve tai website','img':''},
                {'name':'Elase','detail':'trung voucher giam gia 50% khi mua ve tai website','img':''}
              ]
const News = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
      setOpen(true);
      localStorage.setItem('id',id);
  };

  const handleClose = () => {
      setOpen(false);
  };
  const history = createBrowserHistory({
    forceRefresh: true
  });
  React.useEffect(() => {
    document.title = "News - Cyber Cinema"
  }, []);
  return (
    <Wrapper>
      <div className='news-container'>
        <div className='main-content'>
          {mainnew.map((row)=>(
              <Card id='card-content' >
                <img src={row.image}></img>
              <div className='content-card'>
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body">
                  {row.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={()=>history.push('/')}>Booking Now</Button>
              </CardActions>
              </div>
            </Card>
          ))}
        </div>
        <div className='news-content'>
        <div className='main-news'>
        {postnew.map((row)=>(
          <Card id='democard' >
          <img src={row.image}></img>
          <div className='content-card'>
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                {row.name}
                </Typography>
                <Typography variant="body">
                {row.detail.substring(0,450)}{'...'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={()=>handleClickOpen(row.id)}>Booking Now</Button>
              </CardActions>
              </div>
            </Card>
            //   <Card id='card-content' >
            //   <CardContent>
            //     <Typography gutterBottom variant="h2" component="div">
            //       {row.name}
            //     </Typography>
            //     <Typography variant="body">
            //       {row.detail.substring(0,450)}{'...'}
            //     </Typography>
            //   </CardContent>
            //   <CardActions>
            //     <Button size="large" onClick={()=>handleClickOpen(row.id)}>Show More</Button>
            //   </CardActions>
            // </Card>
          ))}
          
           {/* <h1>Voucher HOT</h1>
          <div className='last-news'>
            {voucher.map((row)=>(
                <Card >
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    {row.name}
                  </Typography>
                  <Typography variant="body">
                    {row.detail}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">Collect</Button>
                </CardActions>
              </Card>
            ))}
          </div> */}
        </div>
        <div className='new-hot'>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <center><h1 style={{color:'red'}}>Hot New</h1></center>
            {hotnew.map((row)=>(
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={row.name} src={row.img} />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      />
                        {row.name}
                      {" — "}{row.detail}
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
            <Divider variant="inset" component="li" />
          </List>
        </div>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth='lg'>
            <DialogInfo />
        </Dialog>
      </div>
    </Wrapper>
  );
};

export default News;

export const Wrapper = styled.div`
  .news-container {
    margin: 10rem 5rem 5rem 20rem;
    min-height: 500px;
    width: 50%;
    img {
      border-radius: 30px;
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    #democard{
      display: flex;
      img{
        opacity: 50%;
      }
      .content-card{
        position: absolute;
        max-width: 50rem;
      }
    }
  }
  .news-content{
    display: flex;
    
  }
  .main-news{
      display: block;
      min-width: 60rem;
      min-height: 10rem;
      padding: 2rem 0px 0px 0px;
      max-width: 60rem;
  }
  .news-container .MuiCard-root{
      color: white;
      font-weight: bold;
      }
  .news-content .MuiCard-root{
      margin-bottom: 2rem;
      max-width: 38rem;
      min-width: 38rem;
      max-height: 30rem;
      min-height: 20rem;
  }
  .main-content {
    display: flex;
    .MuiCard-root{
      min-width: 80rem;
      max-height: 50rem;
      min-height: 20rem;
    }
  }
  .news-container .MuiCard-root Button{
      color: aliceblue;
      background-color: rgb(146, 48, 48);
  }
  .new-hot{
      min-width: 20rem;
      padding: 2rem 0px 0px 0px;
  }
  .main-news .MuiCard-root{
      min-width: 55rem;
  }
  .last-news{
      display: inline-flex;
      max-width: 50rem;
  }
  .last-news .MuiCard-root{
      min-width: 20rem;
      margin-right: 2rem;
  }
`;
export const DialogInfo = () => {
  let id = localStorage.getItem('id')
  return (
    <div>
      <Card id='card-content' >
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {postnew[id].name}
        </Typography>
        <Typography variant="body">
          {postnew[id].detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Close</Button>
      </CardActions>
    </Card>
    </div>
  )
}


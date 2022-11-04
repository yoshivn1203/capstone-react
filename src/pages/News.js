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

const mainnew = [{'name':'Cuối Năm Ngập Tràn Ưu Đãi','detail':'Nhằm chung vui cùng hệ thống chúng ta được công nhận bằng sáng chế nội dung. Duy nhất tuần này khuyến mãi 50% cho toàn bộ dịch vụ bên website. Đặc biệt ưu đãi phần quà lên đến hàng triệu đồng cho người dùng đăng kí mới tài khoản hệ thống và thực hiện đặt đơn đầu tiên thành công.'}]
const postnew = [{'id':0,'name':'Khuyen mai 50%','detail':'nhan dip cuoi nam website huong den doi tuong nguoi dung....'},
            {'id':1,'name':'Website được bằng sáng chế','detail':'Sau khi đưa vào hoạt động được 6 tháng thì hôm nay ngày 1/11/2022 hệ thống website bán vé xem phim cyber cinema đã được công nhận là một trong những nền tảng cung caaso dịch vụ nhanh chóng và tiện lợi nhất trên nền tảng internet.Sau khi đưa vào hoạt động được 6 tháng thì hôm nay ngày 1/11/2022 hệ thống website bán vé xem phim cyber cinema đã được công nhận là một trong những nền tảng cung caaso dịch vụ nhanh chóng và tiện lợi nhất trên nền tảng internet.Sau khi đưa vào hoạt động được 6 tháng thì hôm nay ngày 1/11/2022 hệ thống website bán vé xem phim cyber cinema đã được công nhận là một trong những nền tảng cung caaso dịch vụ nhanh chóng và tiện lợi nhất trên nền tảng internet'},
            {'id':2,'name':'Thông Tin Chung','detail':'Đây là nơi bạn có thể lựa chọn những bộ phim theo sở thích và thông tin liên quan về lịch chiếu cũng như đặt vé.Đây là nơi bạn có thể lựa chọn những bộ phim theo sở thích và thông tin liên quan về lịch chiếu cũng như đặt vé.Đây là nơi bạn có thể lựa chọn những bộ phim theo sở thích và thông tin liên quan về lịch chiếu cũng như đặt vé'},
            {'id':3,'name':'Nơi Bạn Không Cần Lo Về Giá','detail':'Bạn đang băn khoăn rằng chi phí thuế khi mua vé ? Bạn không có thời gian để xếp hàng săn đón các bộ phim mới ra lò? Vâng chúng tôi ở đây để mang lại giải pháp tốt nhất cho bạn điều đó.'} 
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
            </Card>
          ))}
        </div>
        <div className='news-content'>
        <div className='main-news'>
        {postnew.map((row)=>(
              <Card id='card-content' >
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body">
                  {row.detail.substring(0,150)}{'...'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={()=>handleClickOpen(row.id)}>Show More</Button>
              </CardActions>
            </Card>
          ))}
           <h1>Voucher HOT</h1>
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
          </div>
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
      background-image: url('https://taoanhdep.com/wp-content/uploads/2022/08/65d0d901c19d92bded2e1a0defa3b95e_original.jpeg');
  }
  .news-content .MuiCard-root{
      margin-bottom: 2rem;
      max-width: 38rem;
      min-width: 38rem;
      max-height: 30rem;
      min-height: 20rem;
  }
  .main-content .MuiCard-root{
      min-width: 80rem;
      max-height: 50rem;
      min-height: 20rem;
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


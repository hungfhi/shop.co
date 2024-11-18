import React from 'react';
import { Grid, Row, Col, Typography, Button, Image, Space, Divider } from 'antd';
import versace from '../images/versace.png'
import zara from '../images/zara.png'
import gucci from '../images/gucci.png'
import prada from '../images/prada.png'
import calvin from '../images/calvin.png'
import bannerMobile from '../images/banner_mobile.png'
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const HeroSection = () => {

    const screens = useBreakpoint();

    return (
        <div className="hero-section">
            {screens.xs || screens.sm && !screens.md ?
                <>
                    <Row align="middle" className="content_row">
                        <Col xs={24} md={12}>
                            <div level={1} className="hero_title" style={{ marginTop: 30, fontSize: 40 }}>
                                FIND CLOTHES <br />
                                THAT MATCHES <br /> YOUR STYLE
                            </div>
                            <Text className="hero_description" style={{ fontSize: 14 }}>
                                Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense of style.
                            </Text>
                            <div>
                                <Button type="primary" size="large" className="shop_now_btn" style={{ width: '100%' }}>
                                    Shop Now
                                </Button>
                            </div>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} style={{ textAlign: 'center' }}>
                                    <Space split={<Divider type="vertical" style={{
                                        borderColor: '#D9D9D9', height: 50
                                    }} />}>
                                        <Typography.Link><Title level={2} className="stat-number">200+</Title>
                                            <div className='des_num'>International Brands</div></Typography.Link>
                                        <Typography.Link><Title level={2} className="stat-number">2,000+</Title>
                                            <div className='des_num'>High-Quality Products</div></Typography.Link>
                                    </Space>
                                    <Typography.Link> <Title level={2} className="stat-number">30,000+</Title>
                                        <div className='des_num'>Happy Customers</div></Typography.Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Image src={bannerMobile} />
                        </Col>
                    </Row>
                    <div className='brand'>
                        <div className='brand_content' style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                            <Image src={versace} width={60} />
                            <Image src={zara} width={50} />
                            <Image src={gucci} width={60} />
                            <Image src={prada} width={80} />
                            <Image src={calvin} width={80} />
                        </div>
                    </div></>
                :
                <>
                    <Row align="middle" className="content_row">
                        <Col xs={24} md={12}>
                            <div level={1} className="hero_title">
                                FIND CLOTHES <br />
                                THAT MATCHES <br /> YOUR STYLE
                            </div>
                            <Text className="hero_description">
                                Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense of style.
                            </Text>
                            <div>
                                <Button type="primary" size="large" className="shop_now_btn">
                                    Shop Now
                                </Button>
                            </div>
                            <Row gutter={[16, 16]} style={{ padding: "20px 0px 100px 0px" }} >
                                <Col xs={24}>
                                    <Space split={<Divider type="vertical" style={{
                                        borderColor: '#D9D9D9', height: 50
                                    }} />}>
                                        <Typography.Link><Title level={2} className="stat-number">200+</Title>
                                            <div className='des_num'>International Brands</div></Typography.Link>
                                        <Typography.Link><Title level={2} className="stat-number">2,000+</Title>
                                            <div className='des_num'>High-Quality Products</div></Typography.Link>
                                        <Typography.Link> <Title level={2} className="stat-number">30,000+</Title>
                                            <div className='des_num'>Happy Customers</div></Typography.Link>
                                    </Space>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <div className='brand'>
                        <div className='brand_content'>
                            <Image src={versace} width={120} />
                            <Image src={zara} width={80} />
                            <Image src={gucci} width={120} />
                            <Image src={prada} width={140} />
                            <Image src={calvin} width={140} />
                        </div>
                    </div>
                </>
            }





        </div>
    );
};

export default HeroSection;
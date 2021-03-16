import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Divider, DatePicker, Form, Input, Button, Col, Row } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Title, Header2 } from './styles';
import Grid from 'antd/lib/card/Grid';
import { useState } from 'react';
const DangKyMoiForm = () => {
    const [size, setSize] = useState('small');
    const [country, setCountry] = useState();
    const [convince, setConvince] = useState();
    useEffect(() => {
        fetch(
            'http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia?trangThaiKichHoat=null&api_key=123',
        )
            .then((res) => res.json())
            .then((resultCountry) => {
                setCountry(resultCountry.result);
            })
            .catch((error) => {});
    }, []);
    useEffect(() => {
        fetch(
            'http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1&api_key=123',
        )
            .then((res) => res.json())
            .then((resultConvince) => {
                setConvince(resultConvince.result);
            })
            .catch((error) => {});
    }, []);

    return (
        <>
            <Form>
                <Layout>
                    <Header>
                        <Title>HỆ THỐNG ĐĂNG KÝ XE Ô TÔ</Title>
                    </Header>
                    <Content>
                        <Header2>ĐĂNG KÝ MỚI</Header2>
                        <Divider orientation="left">
                            Thông tin chủ sở hữu
                        </Divider>
                        <Form>
                            <Row>
                                <Col span={6}>
                                    <Form.Item
                                        label="Tên chủ xe"
                                        name="tenChuXe"
                                    >
                                        <Input size={size} />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Năm sinh" name="dob">
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Quốc gia" name="quocGia">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Tỉnh/Thành phố"
                                        name="tinhThanh"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <Form.Item
                                        label="Quận/Huyện"
                                        name="quanHuyen"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Phường/Xã"
                                        name="phuongXa"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Địa chỉ" name="diaChi">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        label="Số CCCD/CMND/Hộ chiếu của chủ xe"
                                        name="hoChieuChuXe"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Cấp ngày"
                                        name="capNgayChuXe"
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Nơi cấp"
                                        name="noiCapChuXe"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        label="Số CCCD/CMND/Hộ chiếu của NLTT"
                                        name="hoChieuNLTT"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Cấp ngày"
                                        name="capNgayNLTT"
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Nơi cấp"
                                        name="noiCapNLTT"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        label="Điện thoại của chủ xe"
                                        name="sdtChuXe"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Email của chủ xe"
                                        name="emailChuXe"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                        label="Điện thoại của người làm thủ tục"
                                        name="sdtNLTT"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Email của người làm thủ tục"
                                        name="emailNLTT"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <Divider orientation="left">
                            Thông tin giấy tờ liên quan
                        </Divider>
                        <Row>
                            <Col span={6}>
                                <Form.Item
                                    label="Số hóa đơn điện tử"
                                    name="soHoaDon"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Mã số thuế" name="maSoThue">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Mã hồ sơ khai LPTB"
                                    name="maHoSoLPBT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Cơ quan cấp"
                                    name="coQuanCapLPBT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <Form.Item
                                    label="Mã hồ sơ khai HQDT"
                                    name="maHoSoHQDT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Cơ quan cấp"
                                    name="coQuanCapHQDT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Số seri phiếu KTCLXX"
                                    name="maHoSoKTCLXX"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Cơ quan cấp"
                                    name="coQuanCapKTCLXX"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <Form.Item
                                    label="Số giấy phép KDVT"
                                    name="maHoSoKDVT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Cấp ngày" name="capNgayKDVT">
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Cơ quan cấp"
                                    name="coQuanCapKDVT"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider orientation="left">Thông tin xe</Divider>
                        <Row>
                            <Col span={6}>
                                <Form.Item label="Số máy 1" name="soMay1">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Số máy 2" name="soMay2">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Số khung" name="soKhung">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Loại xe" name="loaiXe">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <Form.Item label="Màu sơn" name="mauSon">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Nhãn hiệu" name="nhanHieu">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Số loại" name="soLoai">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider orientation="left">Thông tin biển số</Divider>
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="Đầu biển theo tỉnh"
                                    name="dauBienTheoTinh"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Đầu biển quốc gia"
                                    name="dauBienQuocGia"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Seri chữ" name="seriChu">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <Form.Item label="Màu biển" name="mauBien">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Ngày đăng ký"
                                    name="ngayDangKy"
                                >
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Form>
        </>
    );
};
export default DangKyMoiForm;

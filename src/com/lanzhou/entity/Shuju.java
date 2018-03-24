package com.lanzhou.entity;

public class Shuju {
    private String address1;//地区
    private int areaOrder;//全部订单
    private int areaOrder2;//有效订单
    private int sr_amount;//善融订单
    private int areaPerson;//全部会员
    private int areaPerson2;//新增会员

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public int getAreaOrder() {
        return areaOrder;
    }

    public void setAreaOrder(int areaOrder) {
        this.areaOrder = areaOrder;
    }

    public int getAreaOrder2() {
        return areaOrder2;
    }

    public void setAreaOrder2(int areaOrder2) {
        this.areaOrder2 = areaOrder2;
    }

    public int getSr_amount() {
        return sr_amount;
    }

    public void setSr_amount(int sr_amount) {
        this.sr_amount = sr_amount;
    }

    public int getAreaPerson() {
        return areaPerson;
    }

    public void setAreaPerson(int areaPerson) {
        this.areaPerson = areaPerson;
    }

    public int getAreaPerson2() {
        return areaPerson2;
    }

    public void setAreaPerson2(int areaPerson2) {
        this.areaPerson2 = areaPerson2;
    }

    public Shuju(String address1, int areaOrder, int areaOrder2, int sr_amount, int areaPerson, int areaPerson2) {
        this.address1 = address1;
        this.areaOrder = areaOrder;
        this.areaOrder2 = areaOrder2;
        this.sr_amount = sr_amount;
        this.areaPerson = areaPerson;
        this.areaPerson2 = areaPerson2;
    }

    public Shuju() {
    }
}
